const config = require("./utils/config");
const logger = require("./utils/logger");
const app = require("./app");

// Start listening
const PORT = config.PORT;
app.listen(PORT, () => logger.info(`Server started. Listening on ${PORT}.`));
