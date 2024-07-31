const { productServices } = require("../../services");

const create = async (req, res) => {
  try {
    const response = await productServices.create(
      JSON.parse(req.body.product),
      req.files
    );
    if (response.success) {
      return res.status(response.status).send(response);
    }
    return res.status(response.status).send(response);
  } catch (error) {
    console.log(error);
    return res.send(500).send({
      message: "Error occurred in service",
    });
  }
};

module.exports = { create };
