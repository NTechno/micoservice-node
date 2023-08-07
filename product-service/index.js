const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);
console.log("environment variables in product :::" , process.env);
mongoose
  .connect("mongodb://localhost:27017/product-service", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Product-Service Connected to MongoDB"))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Product-Service listening on port ${PORT}`);
});
