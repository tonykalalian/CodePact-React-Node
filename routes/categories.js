const express = require("express");
const { getProducts, insertProduct, deleteProduct } = require("../services/products");
const { updateProduct } = require("../services/products");
const { getCategories } = require("../services/categories");
const router = express.Router();

router.get("/getCategories", async (req, res) => {
  const result = await getCategories();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error retrieving categories");
  }
});



module.exports = router;
