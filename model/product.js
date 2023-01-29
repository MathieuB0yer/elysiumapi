const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  categories: { type: [Schema.Types.ObjectId], ref: "category" },

  pictures: { type: [String] },
});

module.exports = mongoose.model("product", productSchema);
