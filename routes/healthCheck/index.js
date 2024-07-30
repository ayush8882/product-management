const { Router } = require("express");
const { healthCheckController } = require("../../controller");

const router = Router();

router.get("/", healthCheckController.controller);

module.exports = router;
