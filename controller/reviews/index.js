const { reviewServices } = require("../../services");

const create = async (req, res) => {
  try {
    const response = await reviewServices.create(req.body, req.user);
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
