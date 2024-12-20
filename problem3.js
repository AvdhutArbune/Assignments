// L1 - Budget Tracker with Objects

// Problem Statement:
// Create a budget tracker using a JavaScript object.

// Steps:

// Define an object budget with the following key-value pairs:
// income: 1000
// expenses: 700
// Add a new property savings with a value equal to income - expenses.
// Update income to 1200 and recalculate savings.
// Print the updated budget object.
// Constraints:

// All updates must use dot notation.
// Calculations for savings must be dynamic, based on updated values.

let obj = {
    income: 1000,
    expenses: 700
}
obj.saving=obj.income-obj.expenses
// console.log(obj.saving);//300
obj.income=1200
obj.saving=obj.income-obj.expenses
console.log(obj);


