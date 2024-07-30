require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/health", async (req, res) => {
  return res.send({ message: "Service is up and running" });
});

app.listen(process.env.PORT);
console.log("Service is up and running at port " + process.env.PORT);
