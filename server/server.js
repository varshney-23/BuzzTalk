import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose, { get } from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const dbURL = process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
    .connect(dbURL)
    .then(()=>{
        console.log("DB Connected Successfully");
    })
    .catch((error) =>{
        console.log(error);
    })

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})