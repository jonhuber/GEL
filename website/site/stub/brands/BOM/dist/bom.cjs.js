'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./bom.cjs.prod.js");
} else {
  module.exports = require("./bom.cjs.dev.js");
}
