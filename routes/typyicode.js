const express = require("express");
const { getTypyicode } = require("../services/typyicode");
const router = express.Router();

router.get("/getTypyiCode", async (req, res) => {
  const result = await getTypyicode();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error retrieving data from typyicode");
  }
});



module.exports = router;
