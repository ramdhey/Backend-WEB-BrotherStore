import express from "express";
import Product from "./modelProduct.js";
import expressAsyncHandler from "express-async-handler";

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

ProductRouter.get('/category',expressAsyncHandler(async(req,res)=>{
  const categori = await Product.find().distinct('category')
  res.send(categori)
}))

ProductRouter.get("/name/:name", async (req, res) => {
  const product = await Product.findOne({ name: req.params.name });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Produk Tidak di temukan" });
  }
});

ProductRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Produk Tidak di temukan" });
  }
});

export default ProductRouter;
