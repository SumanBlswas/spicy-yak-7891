import express from "express";
import { cartModel } from "../models/cartModel.js";
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    const posts = await cartModel.find({ userID });
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

cartRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const post = new cartModel(payload);
    await post.save();
    res.status(200).send({ msg: "A new post has been posted" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

cartRouter.patch("/update/:userID", async (req, res) => {
  let { userID } = req.params;
  try {
    await cartModel.findByIdAndUpdate({ _id: userID });
    res.status(200).send({ msg: `user ${userID} has been updated` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});
cartRouter.delete("/update/:userID", async (req, res) => {
  let { userID } = req.params;
  try {
    await cartModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `user ${userID} has been delete` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { cartRouter };
