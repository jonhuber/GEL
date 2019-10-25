'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./btfg.cjs.prod.js");
} else {
  module.exports = require("./btfg.cjs.dev.js");
}
