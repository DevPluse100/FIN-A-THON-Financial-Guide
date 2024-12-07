import express from "express";
const app=express();
import { Router } from "express";
import {  login, register,extract,findexp,addexp,healexp,addhelexp,
Famexp,addfamexp,trackSummary, fetchActivityLogs } from "../controllers/user.controller.js";



const route = express.Router();

route.post("/login",login);
route.post("/register",register);

route.get("/extract",extract);

route.get("/find",findexp);
route.post("/addexp", addexp);

route.get("/findheal",healexp);
route.post("/addhealexp", addhelexp);

route.get("/findfam",Famexp);
route.post("/addfamexp", addfamexp);

route.get("/summary", trackSummary); 
route.get("/logs", fetchActivityLogs); 



  

export default route;