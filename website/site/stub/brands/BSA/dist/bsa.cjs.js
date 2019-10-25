'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./bsa.cjs.prod.js");
} else {
  module.exports = require("./bsa.cjs.dev.js");
}
