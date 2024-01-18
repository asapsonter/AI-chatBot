"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.config();
var app = express_1["default"](); //express var
// middlewares
app.use(express_1["default"].json());
// connect to listner
app.listen(3000, function () { return console.log("server Open now "); }); // server port listening
