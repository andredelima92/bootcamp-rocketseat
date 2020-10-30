"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_ts_1 = __importDefault(require("routes.ts"));
var app = express_1.default();
app.get("/", function (req, res) {
    return routes_ts_1.default();
});
app.listen(3333);
