const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./routes/blogs");
require("dotenv").config();
const logger = require("./utils/logger");
const mw = require("./utils/middleware");
const config = require("./utils/config");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const path = require("path");

// Connect to Mongo DB
mongoose.set("strictQuery", false);
const mongoUrl = config.MONGODB_URI;
logger.info("Connecting to Mongo DB..");
mongoose
    .connect(mongoUrl)
    .then(() => logger.info("Successfully connected to Mongo DB."))
    .catch((e) =>
        logger.error(`Failed to connect to Mongo DB. "${e.message}"`)
    );

// Middleware
app.use(cors());
app.use(express.json());
app.use(mw.requestLogger);

// Routes
app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/*", mw.notFoundRoute);

// Frontend
// Reference: https://stackoverflow.com/a/51227868/9430523
app.use("/", express.static(path.join(__dirname, "/dist")));
app.get("*", function (req, res) {
    res.sendFile("index.html", {
        root: path.join(__dirname, "/dist"),
    });
});

// Error handler middleware
app.use(mw.errorHandler);

module.exports = app;
