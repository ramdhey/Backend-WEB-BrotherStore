import express from 'express'
import Product from './Product/modelProduct.js';
import data from './datadua.js'
import User from './User/modelUser.js';



const SeedRouter = express.Router()

SeedRouter.get('/',async(req,res)=>{
    await Product.remove({})
    const createdProduct = await Product.insertMany(data.product)
    await User.remove({})
    const createdUser = await User.insertMany(data.user)

    res.send({createdProduct,createdUser})

})


export default SeedRouter