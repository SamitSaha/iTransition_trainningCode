class ProbabilityCalculator {
    static calculateProbabilities(dice){
        const probabilities = dice.map((d1) =>
            dice.map((d2) => {
              const wins = d1.sides.flatMap((v1) => d2.sides.filter((v2) => v1 > v2)).length;
              return (wins / 36).toFixed(2);
            })
          );
        return probabilities;
    }

    static displayTable(dice, probabilities){
        const headers = dice.map((_, i) => `Dice ${i+1}`).join("\t");
        console.log("\nWinning Probabilities:");
        console.log("\t"+ headers);

        probabilities.forEach((row, i) =>{
            console.log(`Dice ${i+1}\t` + row.join("\t"));
        });
    }
}
module.exports = ProbabilityCalculator;