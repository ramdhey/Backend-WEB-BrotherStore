import mongoose from "mongoose";

const produkSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique : true

        },
        image_url:{
            type:String,
            required:true,
           
        },
        brand:{
            type:String,
            required:true,
            
        },
        category:{
            type:String,
            required:true,
            
        },
        description:{
            type:String,
            required:true,
            
        },
        price:{
            type:String,
            required:true,
            
        },
        countInStock:{
            type:Number,
            required:true,
            
        },
        rating:{
            type:Number,
            required:true,

        },
        numReview:{
            type:Number,
            required:true,
        }


    },
    {
        timestamps:true
    }
)


const Product = mongoose.model('Product',produkSchema)
export default Product