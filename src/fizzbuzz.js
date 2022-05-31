function fizzbuzz(value) {
    if(value % 15 == 0) {
        return "fizzbuzz";
    }
    
    if(value % 3 == 0)
    {
        return "fizz";
    }

    if(value % 5 == 0)
    {
        return "buzz";
    }

    return value.toString();
}

module.exports = fizzbuzz;