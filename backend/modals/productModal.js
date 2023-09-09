import mongoose from "mongoose";
const productSchema=new mongoose.Schema(
    {   
        name:{type:String,required:true,unique:true},
        slug:{type:String,required:true,unique:true},
        image:[{type:String,required:true},{type:String,required:true},{type:String,required:true},{type:String,required:true}],
        category:{type:String,required:true},
        countInStock:{type:Number,required:true},
        price:{type:Number,required:true},
        crossPrice:{type:Number,required:true},
        brand:{type:String,required:true},
        discount:{type:Number,required:true},
        title:{type:String,required:true},
        description:{type:String,required:true},
    },
    {
        timestamps:true
    }
);
const Product=mongoose.model("Product",productSchema);
export default Product;