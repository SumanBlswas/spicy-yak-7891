import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  images: String,
  brand: String,
  title: String,
  discounted_price: String,
  category: String,
});

const cartModel = mongoose.model("cart", cartSchema);

export { cartModel };
