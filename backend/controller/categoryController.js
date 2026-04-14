import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCategories = async (req, res) => {
  try {
    const data = await Category.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};