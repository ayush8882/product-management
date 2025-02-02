const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: decoded._id }).exec();

    if (!user) {
      throw new Error("User not found in database");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Authentication failed, please reach out to help desk!" });
  }
};

module.exports = auth;
