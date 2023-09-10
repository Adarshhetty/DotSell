import express  from "express";

import bodyParser from "body-parser";
import dotenv from 'dotenv'
import seedRouter from "./routes/seedRoutes.js";
// import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import InitiateMongoServer from "./config/db.js";
dotenv.config();
// mongoose.connect(process.env.MONGODB_URI).then(()=>{
//   console.log("Connected to DB");
// }).catch(err => console.log(err.message))

InitiateMongoServer();
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/seed',seedRouter)
app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use((err,req,res,next)=>{ 
  res.status(500).send({message:err.message})
})
const port=5000;

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})