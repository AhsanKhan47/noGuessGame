import inquirer from "inquirer";
import chalk from "chalk";
import banner from "node-banner";

let chance = 3;
let score = 0;
let gameStatus = true;

(async () => {
    banner('Number Guess Game', 'Welcom to the number guessing game');
})();

async function guessNo() {
    while (gameStatus) {

        let randomNumber = Math.ceil(Math.random() * 2 + 1);
        const answer = await inquirer
            .prompt([
                {
                    name: "userNo",
                    type: "number",
                    message: "Guess the Number between 1 to 3",
                    //     validate: function(value) {
                    //         let num = !isNaN(parseInt(value));
                    //         return num || "Please enter valid ID number";
                    //         }

                }
            ]);

        if (answer.userNo === randomNumber) {
            score += 10;
            console.log(`${chalk.green(" Congratulaions"!)} You guessed the correct Number.\n Your score is ${score}`);

        }
        else {
            chance -= 1;
            console.log(`${chalk.red("Incorrect Guess"!)}. You have total ${chance} chance left`);

            if (chance === 0) {
                gameStatus = false;
                console.log(`${chalk.yellow("Game Over!")} Better luck next time`)
            }

        }

    }
}

setTimeout(() => {
    guessNo()
}, 500);




