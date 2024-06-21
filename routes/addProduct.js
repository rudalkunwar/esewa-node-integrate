const express = require("express");
const router = express.Router();
const Item = require("../models/itemModel.js");

// Add product
router.post("/create-item", async (req, res) => {
  const { name, price, inStock, category } = req.body;

  try {
    const newItem = await Item.create({ name, price, inStock, category });
    res.status(201).json({
      success: true,
      item: newItem,
    });
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({
      success: false,
      error: "Failed to create item",
    });
  }
});

module.exports = router;
