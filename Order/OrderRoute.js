import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "./modelOrder.js";
import { isAuth } from "../utils.js";

const orderRoute = express.Router();

orderRoute.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();

    res.status(201).send({ message: "Membuat Order Baru", order });
  })
);

orderRoute.get(
    '/mine',isAuth,expressAsyncHandler(async(req,res)=>{
        const order = await Order.find({user:req.user._id})
        res.send(order)
    })
)

orderRoute.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Tidak ada Order yang tersedia" });
    }
  })
);

orderRoute.put(
  "/:id/pay",
  isAuth,
  expressAsyncHandler(async ( req,res,) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email: req.body.email,
      };
      const updateOrder = await order.save();
      res.send({ message: "Telah di Bayar", order: updateOrder });
    } else {
      res.status(404).send({ message: "tidak dapat menemukan data order" });
    }
  })
);

export default orderRoute;
