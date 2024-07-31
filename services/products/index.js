const Product = require("../../models/product");
const { uploadFilesToS3 } = require("../../utils/s3Upload");
// const syncProductForSearch = require("../../utils/syncProduct");

const create = async (payload, files) => {
  try {
    let fileUrls = null;
    if (files) {
      const response = await uploadFilesToS3(files);
      fileUrls = response.map((file) => file.Location);
    }
    const newProductInstance = new Product({ ...payload, fileUrls });
    await newProductInstance.save();
    // await syncProductForSearch(newProductInstance);
    return {
      status: 201,
      success: true,
      message: "Product saved successfully",
      data: newProductInstance,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Error occurred while creating new product",
    };
  }
};

module.exports = { create };
