#! /usr/bin/env node
import inquirer from "inquirer";
// list of currency and exchange rates
let exchangeRate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
// prompt for convert currency
let userAnswer = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "select the currency you want to convert",
        type: "list",
        choices: [
            "USD", "EUR", "JYP", "CAD", "AUD", "PKR"
        ]
    },
    {
        name: "toCurrency",
        message: "select the currency you want to convert into",
        type: "list",
        choices: [
            "USD", "EUR", "JYP", "CAD", "AUD", "PKR"
        ]
    },
    {
        name: "amount",
        message: "enter the amount you want to convert",
        type: "input"
    }
]);
// currency conversion
let fromAmount = exchangeRate[userAnswer.fromCurrency];
let toAmount = exchangeRate[userAnswer.toCurrency];
let amount = userAnswer.amount;
// formula
let baseAmount = amount / fromAmount;
let conversion = baseAmount * toAmount;
console.log(`converted amount = ${conversion}`);
