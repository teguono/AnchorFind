const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  postItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
  claimItem,
} = require("../controllers/itemController");

router.post("/", auth, postItem);
router.get("/", getAllItems);
router.get("/:id", getItemById);
router.put("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);
router.post("/:id/claim", auth, claimItem);

module.exports = router;
