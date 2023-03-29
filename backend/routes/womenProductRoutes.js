import express from "express";
import { womenProductModel } from "../models/womenProductModel.js";

const womenProductRouter = express.Router();

womenProductRouter.get("/", async (req, res) => {
  try {
    const user = await womenProductModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

womenProductRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const user = new womenProductModel(payload);
    await user.save();
    res.status(200).send({ msg: "A new product has been added" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

womenProductRouter.patch("/updates/:userID", async (req, res) => {
  const payload = req.body;
  const { userID } = req.params;
  try {
    await womenProductModel.findByIdAndUpdate({ _id: userID }, payload);
    res.status(200).send({ msg: `Product with id ${userID} has been updated` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

womenProductRouter.delete("/delete", async (req, res) => {
  const { userID } = req.params;
  try {
    await womenProductModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `Product with id ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

// for searching and filteration part
womenProductRouter.get("/query", (req, res) => {
  let {} = req.body;
  try {
    let filter = {};
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { womenProductRouter };
