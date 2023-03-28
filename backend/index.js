import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./config/db.js";
import { userRouter } from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome Home!");
});

app.use("/users", userRouter);

app.listen(process.env.PORT_NUMBER, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
  console.log(`connected at the port ${process.env.PORT_NUMBER} `);
});
