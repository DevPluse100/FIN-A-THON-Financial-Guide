import httpStatus from "http-status";
import {User} from "../models/user.schema.js";
import DataModel from "../models/data.schems.js";
import { Expenditure, HealExp, FamExp } from "../models/trans.schema.js";
import bcrypt,{hash} from "bcrypt";
import axios from "axios";
import crypto from  "crypto";
import { console } from "inspector";


const login=async(req,res)=>{
    let {username,password}=req.body;

    if(!username || !password){
        return res.status(400).json({message:"please provide"});
    }
    try {
        const user=await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not Found"});
        }
        let isPassword=await bcrypt.compare(password,user.password);
        if(isPassword){
            let token=crypto.randomBytes(20).toString("hex");
            user.token=token;
            await user.save();
           return  res.status(httpStatus.OK).json({token:token});
        }else{
            return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid Username or Password"});
        }
    } catch (e) {
        return res.status(500).json({message:`Something went wrong ${e}`});
    }
}

const register=async(req,res)=>{
    let {name,username,password}=req.body;
    console.log(req.body);
    try {
        const existingUser=await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({
            name:name,
            username:username,
            password:hashedPassword
        });
        await newUser.save();

        res.status(httpStatus.CREATED).json({message:"User Registerd"});
    } catch (e) {
        res.json({message:`something went wrong ${e}`});
    }
}


// Fetch data from an external API and save to the database
const extract = async (req, res) => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/your-mock-id');
    const extractedData = response.data.map(item => ({
      name: item.name,
      value: item.value,
      date: new Date(item.date),
    }));

    await DataModel.insertMany(extractedData);
    res.status(200).send(extractedData);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Data extraction failed' });
  }
};

// Fetch all expenditures
const findexp = async (req, res) => {
  try {
    const expenditures = await Expenditure.find();
    res.json(expenditures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new expenditure (general expenditures)
const addexp = async (req, res) => {
  try {
    const { description, amount, expenditure } = req.body;

    if (!description || amount == null || expenditure == null) {
      return res.status(400).json({ error: "Description, amount, and expenditure are required" });
    }

    // Ensure expenditure doesn't exceed the amount
    if (expenditure > amount) {
      alert("Expenditure cannot exceed amount");
      return res.status(400).json({ error: "Expenditure cannot exceed amount" });
      
    }

    // Calculate adjusted amount
    
    const adjustedAmount = amount - expenditure;
    
    const newExpenditure = new Expenditure({
      description,
      amount,
      expenditure,
      adjustedAmount, // Store the adjusted amount as a separate field
    });

    console.log(newExpenditure);

    const savedExpenditure = await newExpenditure.save();
    res.status(201).json(savedExpenditure);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add new expenditure for health
const healexp = async (req, res) => {
  try {
    const healthexp = await HealExp.find();
    res.json(healthexp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new health expenditure
const addhelexp = async (req, res) => {
  try {
    const { description, amount, expenditure } = req.body;

    if (!description || amount == null || expenditure == null) {
      return res.status(400).json({ error: "Description, amount, and expenditure are required" });
    }

        // Calculate adjusted amount
        const adjustedAmount = amount - expenditure;

    // Ensure expenditure doesn't exceed the amount
    if (expenditure > amount) {
      alert("Expenditure cannot exceed amount");
      return res.status(400).json({ error: "Expenditure cannot exceed amount" });
    }



    const newExpenditure = new HealExp({
      description,
      amount,
      expenditure,
      adjustedAmount,
    });

    const savedExpenditure = await newExpenditure.save();
    res.status(201).json(savedExpenditure);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Fetch family expenditure data
const Famexp = async (req, res) => {
  try {
    const famexp = await FamExp.find();
    res.json(famexp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new family expenditure
const addfamexp = async (req, res) => {
  try {
    const { description, amount, expenditure } = req.body;

    // Validate the input
    if (!description || amount < 0 || expenditure < 0 || amount < expenditure) {
      return res.status(400).json({ error: "Description, amount, and expenditure are required" });
    }

    // Calculate the adjusted amount
    const adjustedAmount = amount - expenditure;

    const newExpenditure = new FamExp({
      description,
      amount, // Store the original amount
      expenditure, // Store the expenditure
      adjustedAmount, // Store the adjusted amount
    });

    const savedExpenditure = await newExpenditure.save();
    res.status(201).json(savedExpenditure);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const trackSummary = async (req, res) => {
  try {
    
    const [generalSpent, healthSpent, familySpent] = await Promise.all([
      Expenditure.aggregate([{ $group: { _id: null, total: { $sum: "$adjustedAmount" } } }]),
      HealExp.aggregate([{ $group: { _id: null, total: { $sum: "$adjustedAmount" } } }]),
      FamExp.aggregate([{ $group: { _id: null, total: { $sum: "$adjustedAmount" } } }]),
    ]);

    const totalSpent = 
      (generalSpent[0]?.total || 0) +
      (healthSpent[0]?.total || 0) +
      (familySpent[0]?.total || 0);

    const initialBudget = 10000; // Example initial budget
    const remainingBalance = initialBudget - totalSpent;

    res.status(200).json({
      totalSpent,
      remainingBalance,
      breakdown: {
        generalSpent: generalSpent[0]?.total || 0,
        healthSpent: healthSpent[0]?.total || 0,
        familySpent: familySpent[0]?.total || 0,
      },
    });
  } catch (err) {
    console.error("Error in trackSummary:", err); // Debugging line
    res.status(500).json({ error: err.message });
  }
};

// Fetch all activity logs
const fetchActivityLogs = async (req, res) => {
  try {
    const [generalLogs, healthLogs, familyLogs] = await Promise.all([
      Expenditure.find(),
      HealExp.find(),
      FamExp.find(),
    ]);

    console.log('General Logs:', generalLogs);
    console.log('Health Logs:', healthLogs);
    console.log('Family Logs:', familyLogs);

    res.status(200).json({
      activities: {
        generalLogs,
        healthLogs,
        familyLogs,
      },
    });
  } catch (err) {
    console.error('Error in fetchActivityLogs:', err);
    res.status(500).json({ error: err.message });
  }
};


export { 
  login, 
  register, 
  extract, 
  findexp, 
  addexp, 
  healexp, 
  addhelexp, 
  Famexp, 
  addfamexp, 
  trackSummary, 
  fetchActivityLogs 
};
