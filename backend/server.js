import express  from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import seedRouter from "./routes/seedRoutes.js";
import productRoute from "./routes/productRoutes.js";
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("Connected to DB");
}).catch(err => console.log(err.message))
const app= express();
app.use('/api/seed',seedRouter)
app.use('/api/products',productRoute)

const port=5000;
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})