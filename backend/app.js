const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const mw = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");

// Connect to Mongo DB
mongoose.set("strictQuery", false);
logger.info("connecting to", config.MONGODB_URI);
mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("connected to MongoDB");
    })
    .catch((error) => {
        logger.error("error connecting to MongoDB:", error.message);
    });

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
