Number.prototype.isDivisibleBy = function (divisor) {
    return this % divisor == 0;
}

const divisorWords = {
    3: "fizz",
    5: "buzz"
};

function fizzbuzz(value) {
    let result = "";

    for(let divisor in divisorWords) {
        if (value.isDivisibleBy(divisor)) {
            result += divisorWords[divisor];
        }
    }

    return result != "" ? result : value.toString();
}

module.exports = fizzbuzz;