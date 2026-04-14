import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const products = await Product.find()
      .populate("categoryId", "name")
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments();

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      data: products
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};