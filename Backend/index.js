import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; 
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'https//localhost:5173',
    credentials : true,
}
app.use(cors(corsOptions));

const  PORT = 8080;
app.listen(PORT, () => {
    connectDB();
    console.log(`server is running at ${PORT} `)
})