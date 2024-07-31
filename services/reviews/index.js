const { default: mongoose } = require("mongoose");
const Product = require("../../models/product");
const Review = require("../../models/review");

const create = async (body, user) => {
  try {
    const projectId = new mongoose.Types.ObjectId(body.productId);
    const productDetails = await Product.findOne({
      _id: projectId,
    });
    if (!productDetails) {
      return {
        status: 400,
        success: false,
        message: "Product not found, hence review not taken!",
      };
    }
    const reviewInstance = {
      ...body,
      product: projectId,
      user: new mongoose.Types.ObjectId(user._id),
    };
    await Review.create(reviewInstance);
    return {
      status: 200,
      success: true,
      message: "Thanks fir the review!",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Error occurred while taking the review",
    };
  }
};

module.exports = { create };
