#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 15000;
let myPin = 4628;

let user = await inquirer.prompt(
    [
        {
            name: "pin",
            message : "Enter your pin code",
            type: "number"
        }
    ]
);

if (user.pin === myPin) {
   
     console.log("your pin code is correct");

    let selectOption = await inquirer.prompt(
        [
            {
                name: "operation",
                message : "Please select option",
                type: "list",
                choices : ["withdraw" , "check balance", "fast cash"]
            }
        ]
    );

    if(selectOption.operation === "withdraw"){

        let selectAomunt = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message : "Enter your amount",
                    type: "number"
                }
            ]
        );
        
        if(selectAomunt.amount <= myBalance){

            myBalance -= selectAomunt.amount;
            console.log(`your remaining balance is: ${myBalance}`)

        }
        else {
            console.log("Insufficient Balance");
        }
    }

    else if(selectOption.operation === "check balance"){
   
        console.log(`your total balance is: ${myBalance}`);

    }

    else if(selectOption.operation === "fast cash"){
        
        let cashAmount = await inquirer.prompt(
            [
                {
                    name: "cash",
                    message : "Please select your amount",
                    type: "list",
                    choices : [5000 , 10000, 15000, 20000]
                }
            ]
        );

        if(cashAmount.cash <= myBalance){

            myBalance -= cashAmount.cash;
            console.log(`your remaining balance is: ${myBalance}`);

        }
        else {
            console.log("Insufficient Balance");
        }
   }
}

else {
    console.log("your pin code is wrong");
}