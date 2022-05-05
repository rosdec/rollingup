import generateChallenge from "./dist/bundle";

const number:Number = Math.floor(Math.random() * 1000);

console.log("This is the TS version of the app using the bundle created with rollup.js")
console.log(number)
console.log(generateChallenge(number));
console.log("*****************************************************************************")
