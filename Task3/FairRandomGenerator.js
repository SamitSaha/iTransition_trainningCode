class FairRandomGenerator{
    static generateFairRandom(range){
        const key = crypto.randomBytes(32).toString("hex");
        const computerNumber = crypto.randomInt(0, range);
        const hmac = crypto.createHmac("sha3-256", key).update(String(computerNumber)).digest("hex");

        return {computerNumber, hmac, key};
    }
}

export default FairRandomGenerator;