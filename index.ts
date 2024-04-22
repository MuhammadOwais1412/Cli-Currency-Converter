#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.rgb(204, 204, 225)("\n\t================================================="));
console.log(chalk.bold.rgb(41, 241, 92)("\n\tWelcome to 'Code With Owais' - Currency Converter\n"));
console.log(chalk.rgb(204, 204, 225)("\t=================================================\n"));

// Define the list of Currencies and their exchange rates

let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.69,
};

// Prompt from user to select currencies to convert from and to

let user_answer = await inquirer.prompt ([
    {
        name: "from_currency",
        type: "list",
        message: chalk.rgb(255, 192, 103)("Select the Currency to Convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.rgb(255, 192, 103)("Select the Currency to Convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.rgb(255, 192, 103)("Enter the Amount You want to Convert:"),
    }
]);

// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green.bold(converted_amount.toFixed(2))}`);
