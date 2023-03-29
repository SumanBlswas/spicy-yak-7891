import mongoose from "mongoose";

const womenProductSchema = mongoose.Schema({
  img1: String,
  brand: String,
  title: String,
  price: Number,
  description: String,
  category: String,
});

const womenProductModel = mongoose.model("womenProduct", womenProductSchema);

export { womenProductModel };
