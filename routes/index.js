const { Router } = require("express");

const healthCheck = require("./healthCheck");

const router = Router();

router.use("/health-check", healthCheck);

module.exports = router;
