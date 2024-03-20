const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getUserProfile } = require("../controllers/userController");

router.get("/me", auth, getUserProfile);

module.exports = router;
