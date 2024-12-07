import mongoose, { Schema } from "mongoose";

const ExpenditureSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  expenditure: { type: Number, required: true }, // New field to store calculated expenditure
  date: { type: Date, default: Date.now },
});


const FamExpSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  expenditure: { type: Number, required: true }, // New field to store calculated expenditure
  date: { type: Date, default: Date.now },
});



const HealExpSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  expenditure: { type: Number, required: true }, // New field to store calculated expenditure
  date: { type: Date, default: Date.now },
});



export const Expenditure = mongoose.model("Expenditure", ExpenditureSchema);
export const FamExp = mongoose.model("FamExp", FamExpSchema);
export const HealExp = mongoose.model("HealExp", HealExpSchema);





