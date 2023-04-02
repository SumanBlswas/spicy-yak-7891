import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validator } from "../middlewares/validator.js";
import { userModel } from "../models/userModel.js";
import { checkMe } from "../middlewares/checkMe.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    let user = await userModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.find({ email });
    if (user.length > 0) {
      const passwordMatch = await bcrypt.compare(password, user[0].password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            userID: user[0]._id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          "bruce"
        );
        res.status(200).send({
          msg: "Login Successfull",
          token: token,
        });
      } else {
        res.status(404).send({ msg: "Wrong Credential" });
      }
    } else {
      res.status(404).send({ msg: "Wrong Credential" });
    }
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRouter.use(validator);

userRouter.post("/register", async (req, res) => {
  const { name, email, password, age, gender } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      let user = new userModel({
        name,
        email,
        password: hash,
        age,
        gender,
      });
      await user.save();
      res.status(200).send({ msg: "New user has been added" });
    });
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

userRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  const payload = req.body;
  try {
    await userModel.findById({ _id: userID }, payload);
    res.status(404).send({ msg: `User ${userID} has been updated` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    await userModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `User ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ eemsg: error.message });
  }
});

//for filtering the data
userRouter.get("/query", async (req, res) => {
  const { name, email, age, gender } = req.query;
  try {
    let filter = {};
    if (name) {
      filter.name = { $regex: name };
    }
    if (email) {
      filter.email = { $regex: email };
    }
    if (age) {
      filter.age = { $regex: age };
    }
    if (gender) {
      filter.gender = { $regex: gender };
    }
    let user = await userModel.find(filter);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

userRouter.use(checkMe);

userRouter.get("/account", async (req, res) => {
  const { userID } = req.body;
  try {
    let user = await userModel.find({ _id: userID });
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

userRouter.patch("/account_update", async (req, res) => {
  const { userID } = req.body;
  const { name, email, password, age, gender } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      let user = await userModel.findByIdAndUpdate(
        { _id: userID },
        {
          name,
          email,
          password: hash,
          age,
          gender,
        }
      );
      res.status(200).send(user);
    });
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

userRouter.delete("/account_delete", async (req, res) => {
  const { userID } = req.body;
  try {
    await userModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `User ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

export { userRouter };
