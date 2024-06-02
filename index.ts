
import inquirer from "inquirer";
import chalk from "chalk";

//Countdown Timer

let ask = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Please Enter the Amount of Seconds :",
  }
]);

function countdownTimer(seconds: number) {
    if (ask.name > 60) {
        console.log(chalk.red.bold(`Seconds must be Less than 60`));
    } else {
        console.log(chalk.blue.bold("Countdown Timer Started!"));
        console.log(seconds);
        let timer = setInterval(() => {
            seconds--;
            console.log(seconds);
            if (seconds === 0) {
                console.log(chalk.green.bold("Time's Up!"));
                clearInterval(timer);
            }
        }, 1000);
    }

}
countdownTimer(Number(ask.name))