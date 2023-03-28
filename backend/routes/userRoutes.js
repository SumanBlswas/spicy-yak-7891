import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validator } from "../middlewares/validator.js";
import { userModel } from "../models/userModel.js";

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
      let user = userModel({
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
    res.status(404).send({ msg: error.meassage });
  }
});

userRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    await userModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `User ${userID} has been deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

//for filtering the data
userRouter.get("/query", async (req, res) => {
  const { name, email, age, gender } = req.query;
  try {
    let filter = {};
    if (name) {
      filter.name = name;
    }
    if (email) {
      filter.email = email;
    }
    if (age) {
      filter.age = age;
    }
    if (gender) {
      filter.gender = gender;
    }
    let user = await userModel.find(filter);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ msg: error.meassage });
  }
});

export { userRouter };
