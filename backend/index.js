import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import { connection } from "./config/db.js";
import { userRouter } from "./routes/userRoutes.js";
import { menProductRouter } from "./routes/menProductRoutes.js";
import { womenProductRouter } from "./routes/womenProductRoutes.js";
import { checker } from "./middlewares/checker.js";
import { cartRouter } from "./routes/cartRoutes.js";
import { adminRouter } from "./routes/adminRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    fs.readFile("./dist/api.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

app.use("/users", userRouter);
app.use("/menproducts", menProductRouter);
app.use("/womenproducts", womenProductRouter);
app.use("/admins", adminRouter);
app.use(checker);
app.use("/cart", cartRouter);

app.listen(process.env.PORT_NUMBER, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
  console.log(`connected at the port ${process.env.PORT_NUMBER} `);
});
