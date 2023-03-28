import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

export { userModel };
