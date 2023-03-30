import mongoose from "mongoose";

const menProductSchema = mongoose.Schema({
  img1: String,
  brand: String,
  title: String,
  price: Number,
  size: String,
  love_count: String,
  rating: String,
  category: String,
});

const menProductModel = mongoose.model("menProduct", menProductSchema);

export { menProductModel };
