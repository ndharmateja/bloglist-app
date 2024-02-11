const express = require("express");
const cors = require("cors");
const mw = require("./utils/middleware");

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(mw.requestLogger);
app.use(express.static("dist"));

// Not found route and error handler
app.use(mw.notFoundRoute);
app.use(mw.errorHandler);

// Export app
module.exports = app;
