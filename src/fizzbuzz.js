function fizzbuzz(value) {
    let result = "";

    if(value % 3 == 0)
    {
        result += "fizz";
    }

    if(value % 5 == 0)
    {
        result += "buzz";
    }

    return result != "" ? result : value.toString();
}

module.exports = fizzbuzz;