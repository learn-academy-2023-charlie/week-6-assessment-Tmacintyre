// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("arrSentence", () => {
  it("Takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(arrSentence(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// arrSentence
//   ✕ akes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// ● arrSentence › akes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: arrSentence is not defined

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Psuedocode
// Input: An array filled with objects/key : value pairs
// Output: An array with a sentence about each person with their name capitalized
// Process:
// Create a function called arrSentence
// Since we have need to iterate and return an array of the same size we can use the map method
// Passing the object along with the key and value through the map method allows us to have access to each key value pair.
// The final outcome is a sentence so we can use string interpolation to us the key value pairs in a string. 
// Since the name needs to be capitalized, we can split the name into an array, map through the array to access the words first character (charAt) located at the 0 index and turn that into an uppercase. The return of that would not include the rest of the word so we add .slice(1) to add the rest of the word back onto uppercased character. 
// We need to get back into a string, so we can use the .join method to get there. 
// Complete the sentence using the interpolation.
// Return the overall output. 


const arrSentence = (arr) => {
  return arr.map(({name, occupation}) => `${name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} is ${occupation}.`
)}

// PASS  ./code-challenges.test.js
// arrSentence
//   ✓ Takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (3 ms)



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("divRemainder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(divRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// ● divRemainder › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: divRemainder is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Pseudocode
// Input: An array with mixed data types
// Output: An array of only the REMAINDERS of the numbers when divided by 3
// Process:
// Create a function called divRemainder
// We know the outcome is going to be a subset of the original array of different length so we can use the filter method to iterate through the original array.
// We only want nummbers so we can set a condition that we are keeping only the values that have the typeof 'number' or the value of 0 itself. 
// Once we have the original numbers we can map over the new array and return each value modulus 3 to get the remainder of each value and update the array. 
// Returns expected output.

const divRemainder = (arr) => {
    return arr.filter((value) => typeof value === 'number' || value === 0).map((value) => {return value % 3})
}

// PASS  ./code-challenges.test.js
// divRemainder
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubeSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

// ● cubeSum › takes in an array of numbers and returns the sum of all the numbers cubed.

// ReferenceError: cubeSum is not defined
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
// Pseudocode
// Input: An array of numbers
// Output: The sum of all the numbers cubed as an integer
// Process
// Create a function called cubeSum
// We can first iterate through the array using .map to replace the original value with the number cubed. **3
// Lastly we need to return a single number as the sum of each value in the array. The reduce method returns a single value as the accumulated values of each element after the iterations are complete.. 


const cubeSum = (arr) => {
    return arr.map((value) => value ** 3).reduce((a,b) => a + b)
}

// PASS  ./code-challenges.test.js
//   cubeSum
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)
