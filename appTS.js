"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bundle_1 = __importDefault(require("./dist/bundle"));
const number = Math.floor(Math.random() * 1000);
console.log("This is the TS version of the app using the bundle created with rollup.js");
console.log(number);
console.log((0, bundle_1.default)(number));
console.log("*****************************************************************************");
