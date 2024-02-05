const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  carouselImages:{
    type:Array,
    required: true,
  },
  color:{
    type:String
  },
  size:{
    type:String
  }
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product