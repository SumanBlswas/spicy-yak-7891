import express from "express";
import { menProductModel } from "../models/menProductModel.js";

const menProductRouter = express.Router();

menProductRouter.get("/", async (req, res) => {
  try {
    const user = await menProductModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

menProductRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const user = new menProductModel(payload);
    await user.save();
    res.status(200).send({ msg: "A new product has been added" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

menProductRouter.patch("/updates/:userID", async (req, res) => {
  const payload = req.body;
  const { userID } = req.params;
  try {
    await menProductModel.findByIdAndUpdate({ _id: userID }, payload);
    res.status(200).send({ msg: `Product with id ${userID} has been updated` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

menProductRouter.delete("/delete", async (req, res) => {
  const { userID } = req.params;
  try {
    await menProductModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `Product with id ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

// for searching and filteration part
menProductRouter.get("/query", (req, res) => {
  let {} = req.body;
  try {
    let filter = {};
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { menProductRouter };
