import Product from "../modals/productModal.js";
import express from "express";

const productRouter=express.Router();
productRouter.get('/',async(req,res)=>{
    const products=await Product.find();
    res.send(products);
})
productRouter.post('', async (req, res) => {
  try {
    // Get the product data from the request body
    const productData = req.body;

    // Create a new product using the Product model and the data from the request body
    const newProduct = new Product(productData);

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    // Respond with the saved product
    res.status(201).json(savedProduct);
  } catch (error) {
     
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
productRouter.get('/slug/:slug',async(req,res)=>{
    const product=await Product.findOne({slug:req.params.slug});
    if(product){
      res.send(product)
    }
    else{
      res.status(404).send({message: 'Product not found :('})
    }
    })
    productRouter.get('/:id',async(req,res)=>{
      const product=await Product.findById(req.params.id);
      if(product){
        res.send(product)
      }
      else{
        res.status(404).send({message: 'Product not found :('})
      }
      })
export default productRouter