import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  password: String,
  position: String,
  img: String,
});

const adminModel = mongoose.model("admin", adminSchema);

export { adminModel };
