import Product from "../modals/productModal.js";
import express from "express";

const productRoute=express.Router();
productRoute.get('/',async(req,res)=>{
    const products=await Product.find();
    res.send(products);
})
productRoute.get('/slug/:slug',async(req,res)=>{
    const product=await Product.findOne({slug:req.params.slug});
    if(product){
      res.send(product)
    }
    else{
      res.status(404).send({message: 'Product not found :('})
    }
    })
    productRoute.get('/:id',async(req,res)=>{
      const product=await Product.findById(req.params.id);
      if(product){
        res.send(product)
      }
      else{
        res.status(404).send({message: 'Product not found :('})
      }
      })
export default productRoute