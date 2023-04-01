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

womenProductRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    await womenProductModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `Product with id ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

// for searching and filteration part
womenProductRouter.get("/query", async (req, res) => {
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
    // if (req.query) {
    //   filter = { $regex: req.query };
    // }
    let user = await womenProductModel.find(filter);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { womenProductRouter };
