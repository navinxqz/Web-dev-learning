import generateName from "sillyname";
import SuperHero, { randomSuperhero } from "superheroes";
// var generateName = require("sillyname");
var sillyName = generateName();
const superHero = randomSuperhero();

console.log(`My name is ${sillyName}. And I am the ${superHero}!`);

