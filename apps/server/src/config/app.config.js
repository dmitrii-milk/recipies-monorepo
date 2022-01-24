"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var path = require("path");
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
var config = {
    app: {
        port: process.env.PORT || 3000
    }
};
exports["default"] = config;
