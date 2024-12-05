const crypto = require("crypto");

// Class: DiceParser
class DiceParser{
    static parse(args){
        if(args.length <3){
            throw new Error("You must provide at least threee dioce configurations. Example: 1,2,3,4,5,6 2,2,3,3,6,6 3,4,5,6,7,8");
        }
        return args.map((arg, index)=>{
            const sides = arg.split(",").map(Number);
            if(sides.length !== 6 || sides.some(isNaN)){
                throw new Error(`Dice ${index+1} is invalid. Ech dice must have exactly 6 integer sides.`);
            }
            return new Dice(sides);
        });
    }
}

module.exports = DiceParser;