const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (body) => {
  try {
    const user = new User(body);
    await user.save();
    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message ?? "Error occurred while registering the user",
    };
  }
};

const login = async (body) => {
  try {
    const user = await User.findOne({
      email: body.email,
    }).exec();
    if (!user || !(await bcrypt.compare(body.password, user.password))) {
      return {
        status: 401,
        success: false,
        message: "Login Failed!",
      };
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    return {
      status: 200,
      success: true,
      data: { user, token },
    };
  } catch (error) {
    return {
      status: 500,
      success: false,
      message: "Error occurred while registering the user",
    };
  }
};

module.exports = { register, login };
