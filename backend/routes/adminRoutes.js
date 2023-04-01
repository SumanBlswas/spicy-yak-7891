import express from "express";
import bcrypt from "bcrypt";
import { adminModel } from "../models/adminModel.js";

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
  try {
    let admins = await adminModel.find();
    res.status(200).send(admins);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

adminRouter.post("/add", async (req, res) => {
  const { name, email, password, age, gender, position, img } = req.body;
  try {
    const hash = await bcrypt.hash(password, 5);
    let admin = new adminModel({
      name,
      email,
      password: hash,
      age,
      gender,
      position,
      img,
    });
    await admin.save();
    res.status(200).send({ msg: "New admin has been added" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await adminModel.find({ email });
    if (admin.length > 0) {
      const passwordMatch = await bcrypt.compare(password, admin[0].password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            adminID: admin[0]._id,
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

adminRouter.patch("/updates/:adminID", async (req, res) => {
  let payload = req.body;
  let { adminID } = req.params;
  try {
    await adminModel.findByIdAndUpdate({ _id: adminID }, payload);
    res.status(200).send({ msg: `admin with id ${adminID} has updated` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

adminRouter.delete("/delete/:adminID", async (req, res) => {
  let { adminID } = req.params;
  try {
    await adminModel.findByIdAndDelete({ _id: adminID });
    res.status(200).send({ msg: `admin with id ${adminID} has deleted` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

//query for admins
adminRouter.get("/query", async (req, res) => {
  let { name, email, position } = req.body;
  try {
    let filter = {};
    if (name) {
      filter.name = { $regex: name };
    }
    if (email) {
      filter.email = { $regex: email };
    }
    if (position) {
      filter.position = { $regex: position };
    }
    let admin = await adminModel.find(filter);
    res.status(200).send(admin);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { adminRouter };
