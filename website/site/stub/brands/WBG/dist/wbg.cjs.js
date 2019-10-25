'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./wbg.cjs.prod.js");
} else {
  module.exports = require("./wbg.cjs.dev.js");
}
