require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");

connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/index"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

module.exports = app;
