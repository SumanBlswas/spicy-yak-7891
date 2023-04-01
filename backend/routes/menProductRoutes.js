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

menProductRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    await menProductModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `Product with id ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

// for searching and filteration part
menProductRouter.get("/query", async (req, res) => {
  let { brand, title, price, size, category } = req.query;
  try {
    let filter = {};
    if (brand) {
      filter.brand = { $regex: brand };
    }
    if (title) {
      filter.title = { $regex: title };
    }
    if (price) {
      filter.price = { $regex: price };
    }
    if (size) {
      filter.size = { $regex: size };
    }
    if (category) {
      filter.category = { $regex: category };
    }
    let user = await menProductModel.find(filter);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { menProductRouter };
