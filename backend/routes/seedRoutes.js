import express from "express";
import Product from "../modals/productModal.js";
import data from "../data.js";
import User from "../modals/userModal.js";

const seedRouter = express.Router();
seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({ createdProducts, createdUser });
})
export default seedRouter;