require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const baseRoutes = require("./routes");
const { DBconnection } = require("./config/database");

const app = express();

DBconnection();

app.use(bodyParser.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", baseRoutes);

app.listen(process.env.PORT);
console.log("Service is up and running at port " + process.env.PORT);
