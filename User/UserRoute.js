import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "./modelUser.js";
import bcrypt from "bcryptjs";
import { generateToken, isAuth } from "./../utils.js";

const userRoute = express.Router();

userRoute.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res
      .status(401)
      .send({ message: "Email atau Password yang dimasukkan Invalid" });
  })
);

userRoute.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

userRoute.put("/profil", isAuth,expressAsyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){
        user.name=req.body || user.name
        if(req.body.password){
            user.password = bcrypt.hashSync(req.body.password,8)
        }
        const updateUser = await user.save()

        res.send({
            _id:updateUser._id,
            name:updateUser.name,
            email:updateUser.email,
            isAdmin:updateUser.isAdmin,
            token : generateToken(updateUser)
        })
    }else{
        res.status(404).send({message:'User Tidak di Temukan'})
    }
}));

export default userRoute;
