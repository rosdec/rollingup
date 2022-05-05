const generateChallenge = require("./dist/bundle")

const number = Math.floor(Math.random() * 1000);

console.log("*** This is the JS version of the app using the bundle created with rollup.js")
console.log(number)
console.log(generateChallenge(number));
console.log("*****************************************************************************")
