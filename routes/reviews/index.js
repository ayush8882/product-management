const { Router } = require("express");
const { reviewsController } = require("../../controller");
const jwtAuthorization = require("../../middlewares");

const router = Router();

router.post("/", jwtAuthorization, reviewsController.create);

module.exports = router;
