const multer = require("multer");
const AWS = require("aws-sdk");

// Configure AWS S3
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multer.memoryStorage(),
});

const uploadFilesToS3 = async (files) => {
  const urls = await Promise.all(
    files.map(async (file) => {
      const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const response = await s3.upload(params).promise();
      return response;
    })
  );
  return urls;
};

module.exports = { upload, uploadFilesToS3 };
