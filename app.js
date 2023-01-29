const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();

const cors = require("cors");

app.use(cors());
app.listen(process.env.PORT || 8000, () => {
  console.log("express listening on port 8000");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: async (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
app.use(multer({ storage: storage }).array("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
mongoose.connect(
  "mongodb+srv://ez2c:d7ynanBVJzjLhhJt@cluster0.cjuojnb.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
  }
);

const { helloworld } = require("./router/helloworld");
app.use(helloworld);
const { user } = require("./router/user");
app.use(user);
const { product } = require("./router/product");
const { category } = require("./router/category");
app.use(product);

app.use(category);
