const controller = (req, res) => {
  try {
    return res.send({
      message: "Service is running",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      message: "Error occurred in service",
    });
  }
};

module.exports = { controller };
