const process = require("process");
const express = require("express");
const cors = require("cors");
const mw = require("./utils/middleware");
const { info } = require("./utils/logger");

// Create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(mw.requestLogger);
app.use(express.static("dist"));

// Not found route and error handler
app.use(mw.notFoundRoute);
app.use(mw.errorHandler);

// Start listening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => info(`Server started. Listening on ${PORT}.`));
