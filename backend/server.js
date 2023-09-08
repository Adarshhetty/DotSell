import express  from "express";
import data from "./data.js";
const app= express();
app.get('/api/products',(req,res)=>{
    try {
        res.send(data.products);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
})
app.get('/api/products/slug/:slug',(req,res)=>{
const product=data.products.find((prod)=>prod.slug===req.params.slug);
if(product){
  res.send(product)
}
else{
  res.status(404).send({message: 'Product not found :('})
}
})
const port=5000;
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})