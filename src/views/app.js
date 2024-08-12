const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const testMiddleware = require("../middleware/test");
const route = require("../router/testRouter");
app.use(bodyParser.json());
app.use(cors());
//
app.use(testMiddleware);
app.use("/",route);
//
module.exports = app;
