function fizzbuzz(value) {
    if(value % 3 == 0)
    {
        return "fizz"
    }
    return value.toString();
}

module.exports = fizzbuzz;