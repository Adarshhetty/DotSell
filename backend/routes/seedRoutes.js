import express from "express";
import Product from "../modals/productModal.js";
import data from "../data.js";
const seedRouter=express.Router();
seedRouter.get('/',async(req,res)=>{
await Product.deleteMany({});
const createdproducts=await Product.insertMany(data.products);
res.send({createdproducts})
})
export default seedRouter;