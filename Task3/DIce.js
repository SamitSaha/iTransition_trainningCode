class Dice{
    constructor(sides) {
        this.sides = sides;
    }
    roll(){
        return this.sides[Math.floor(Math.random() * 6)];
    }
}
export default Dice;