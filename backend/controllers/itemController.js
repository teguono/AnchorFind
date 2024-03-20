const Item = require("../models/Item");
const User = require("../models/User");

// Post a new item
exports.postItem = async (req, res) => {
  const { type, name, description, category, location, dateLost, images } =
    req.body;

  // Ensure the auth middleware has set req.user
  if (!req.user || !req.user.id) {
    return res.status(403).send("User not authenticated.");
  }

  try {
    const newItem = new Item({
      type,
      name,
      description,
      category,
      location,
      dateLost,
      images,
      owner: req.user.id,
    });

    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ datePosted: -1 });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get a specific item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    res.json(item);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Item not found" });
    }
    res.status(500).send("Server Error");
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  const {
    name,
    description,
    category,
    location,
    dateLost,
    images,
    status,
    claimant,
  } = req.body;
  const itemFields = {
    name,
    description,
    category,
    location,
    dateLost,
    images,
    status,
    claimant,
  };

  try {
    let item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    // Ensure the user owns the item
    if (item.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: itemFields },
      { new: true }
    );

    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    // Fetch the item to check ownership
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    if (item.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    const deletedItem = await Item.findOneAndDelete({ _id: req.params.id });

    res.json({ msg: "Item removed", deletedItem });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Claim an item
exports.claimItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    if (item.owner.toString() === req.user.id) {
      return res.status(403).json({ msg: "You cannot claim your own item" });
    }

    // Update the item's status and claimant
    item.status = "claimed";
    item.claimant = req.user.id;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
