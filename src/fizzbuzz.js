Object.prototype.isDivisibleBy = function (divisor) {
    return this % divisor == 0;
}

function fizzbuzz(value) {
    let result = "";

    if(value.isDivisibleBy(3))
    {
        result += "fizz";
    }

    if(value.isDivisibleBy(5))
    {
        result += "buzz";
    }

    return result != "" ? result : value.toString();
}

module.exports = fizzbuzz;