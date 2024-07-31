const { Router } = require("express");

const healthCheck = require("./healthCheck");
const users = require("./users");
const products = require("./products");
const reviews = require("./reviews");

const router = Router();

router.use("/health-check", healthCheck);
router.use("/user", users);
router.use("/products", products);
router.use("/reviews", reviews);

module.exports = router;
