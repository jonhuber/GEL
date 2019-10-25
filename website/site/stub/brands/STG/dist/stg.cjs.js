'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./stg.cjs.prod.js");
} else {
  module.exports = require("./stg.cjs.dev.js");
}
