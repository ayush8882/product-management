const { userServices } = require("../../services");

const register = async (req, res) => {
  try {
    const response = await userServices.register(req.body);
    if (response.success) {
      return res.status(201).send(response);
    }
    return res.status(400).send(response);
  } catch (error) {
    console.log(error);
    return res.send(500).send({
      message: "Error occurred in service",
    });
  }
};

const login = async (req, res) => {
  try {
    const response = await userServices.login(req.body);
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

module.exports = { register, login };
