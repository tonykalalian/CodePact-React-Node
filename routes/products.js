const express = require("express");
const { getProducts, insertProduct, deleteProduct } = require("../services/products");
const { updateProduct } = require("../services/products");
const authenticateToken = require("./middleware");
const router = express.Router();

router.get("/getProducts", authenticateToken, async (req, res) => {
  const result = await getProducts();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error retrieving products");
  }
});

router.post("/insertProduct", async (req, res)=>{
  const {data} = req.body;
  const result = await insertProduct(data);
  res.status(200).json(result);
});

router.post("/updateProduct", async (req, res) =>{
  const {data} = req.body;
  const result = await updateProduct(data);
  res.status(200).json(result);
})

router.post("/deleteProduct", async (req, res)=>{
  const {id} = req.body;
  const result = deleteProduct(id);
  res.status(200).json(result);
})

module.exports = router;
