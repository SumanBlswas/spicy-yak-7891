import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  images: Array,
  brand: String,
  title: String,
  discounted_price: String,
  category: String,
  discount: String,
  id: String,
  rating: String,
  rating_count: String,
  size: Array,
  strike_price: String,
  userID: String,
});

const cartModel = mongoose.model("cart", cartSchema);

export { cartModel };
