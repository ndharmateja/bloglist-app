const config = require("./utils/config");
const { info } = require("./utils/logger");
const app = require("./app");

// Start listening
const PORT = config.PORT;
app.listen(PORT, () => info(`Server started. Listening on ${PORT}.`));
