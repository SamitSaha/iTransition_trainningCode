class GameEngine {
    constructor(dice) {
        this.dice = dice;
        this.userDice = null;
        this.cmputerDice = null;
    }
    determinFirstMove() {
        const { computerNumber, hmac, key } = FairRandomGenerator.generateFairRandom(2);
        console.log(`I selected a random value in the range 0...1 (HMAC = ${hmac})`);
        const userGuess = this.getUserInput("Try to guess my selection (0 or 1): ", [0, 1]);
        console.log(`My selection: ${computerNumber} (KEY = ${key}).`);
        return userGuess === computerNumber;
    }
    selectDice(player) {
        console.log("\nChoose your dice:");
        this.dice.forEach((d, i) => console.log(`${i} - ${d.sides.join(",")}`));
        const choice = this.getUserInput(`${player}, select your dice: `, [...Array(this.dice.length).keys()]);
        return this.dice.splice(choice, 1)[0];
    }
    getUserInput(prompt, validChoices) {
        const readline = require("readline-sync");
        let input;
        do {
            input = readline.question(prompt);
        } while (!validChoices.includes(Number(input)));
        return Number(input);
    }
    playTurn(player, dice) {
        const { computerNumber, hmac, key } = FairRandomGenerator.generateFairRandom(6);
        console.log(`${player} selected a random value in the range 0..5 (HMAC=${hmac}).`);
        const userNumber = this.getUserInput("Add your number modulo 6 (0-5): ", [0, 1, 2, 3, 4, 5]);
        const result = (userNumber + computerNumber) % 6;
        console.log(`${player} number: ${computerNumber} (KEY=${key}).`);
        return dice.sides[result];
    }
    start() {
        console.log("Let's determine who makes the first move.");
        const userFirst = this.determineFirstMove();

        if (userFirst) {
            console.log("You go first!");
            this.userDice = this.selectDice("User");
            this.computerDice = this.selectDice("Computer");
        } else {
            console.log("I go first!");
            this.computerDice = this.selectDice("Computer");
            this.userDice = this.selectDice("User");
        }

        console.log("It's time for the throws!");
        const userThrow = this.playTurn("User", this.userDice);
        const computerThrow = this.playTurn("Computer", this.computerDice);

        console.log(`Your throw: ${userThrow}`);
        console.log(`My throw: ${computerThrow}`);
        if (userThrow > computerThrow) {
            console.log("You win!");
        } else if (computerThrow > userThrow) {
            console.log("I win!");
        } else {
            console.log("It's a tie!");
        }
    }

}
module.exports = GameEngine;