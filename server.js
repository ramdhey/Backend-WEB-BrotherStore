import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import SeedRouter from './seedRoutes.js';
import ProductRouter from './Product/ProductRoutes.js';
import userRoute from './User/UserRoute.js';
import orderRoute from './Order/OrderRoute.js';



dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('DataBase Terkoneksi')
}).catch(err=>{
    console.log(err.message)
})



const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use('/api/seed',SeedRouter)

app.use('/product',ProductRouter)
app.use('/user',userRoute)
app.use('/order',orderRoute)

// app.get('/product',(req,res)=>{
//     res.send(data.product)
    
// })

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})



const port = process.env.PORT || 4004
app.listen(port, ()=>{
    console.log(`Server Berjalan di Port ${port}`)
})

