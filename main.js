"use strict";
//          100 days of coding challenge ( DAY 19 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01   
//---Starts with a list of numbers
let numbers = [1, 2, 3, 4, 5];
// ---Doubles each number
let doubledNumbers = numbers.map(number => number * 2);
// ---Shows the new list of doubled numbers
console.log(doubledNumbers);
//   Question 02    
let mixedArray = [1, "bharti", 4, "sourav", true, "rishi"];
let stringArray = mixedArray.filter(items => typeof items === "string");
console.log(stringArray);
let numberArray = mixedArray.filter(items => typeof items === "number");
console.log(numberArray);
//   Question 03 
let grades = [87, 91, 73, 75, 65, 52];
// ---calculate the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// ---shows averages grade
console.log(averageGrade);
