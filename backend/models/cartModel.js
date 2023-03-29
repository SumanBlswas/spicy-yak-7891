import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  img1: String,
  brand: String,
  title: String,
  price: Number,
  description: String,
  category: String,
});

const cartModel = mongoose.model("cart", cartSchema);

export { cartModel };
