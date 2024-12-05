const DiceParser = require("./DiceParser");
const ProbabilityCalculator = require("./ProbabilityCalculator");
const GameEngine = require("./GameEngine");

try {
    const args = process.argv.slice(2);
    const dice = DiceParser.parse(args);

    console.log("\nCalculating probabilities...");
    const probabilities = ProbabilityCalculator.calculateProbabilities(dice);
    ProbabilityCalculator.displayTable(dice, probabilities);

    const game = new GameEngine(dice);
    game.start();
} catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("Usage: node index.js 1,2,3,4,5,6 2,3,4,5,6,7 3,4,5,6,7,8");
}