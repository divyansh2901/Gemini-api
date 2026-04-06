import express from "express"
import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config();

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model : "gemini-pro"});

app.post("/chat",async(req,res)=>{
    try{
        const userMessage = req.body.message;
        const result = await model.generateContent(userMessage);
        const response = await result.response;

        res.json({reply: response});
    } catch(err){
        res.status(500).json({error: "Something went wrong"});
    }
});

app.listen(5000, ()=>{
    console.log("Server running on Port 5000");
});