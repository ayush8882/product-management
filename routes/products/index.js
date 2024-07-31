const { Router } = require("express");
const { productController } = require("../../controller");
const jwtAuthorization = require("../../middlewares");
const { upload } = require("../../utils/s3Upload");
const router = Router();

router.post(
  "/",
  jwtAuthorization,
  upload.array("files", 3),
  productController.create
);

module.exports = router;
