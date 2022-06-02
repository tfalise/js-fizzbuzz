const fizzbuzz = require('./fizzbuzz');

function parseInput(value) {
    let result = parseInt(value);

    if(isNaN(value)) {
        return { isValid: false };
    }

    if(result <= 0) {
        return { isValid: false };
    }

    return {
        isValid: true,
        value: result
    };
}

function main(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        result.push(fizzbuzz(i));
    }
    return result;
}

let input = parseInput(process.argv[2]);;

if(!input.isValid) {
    console.log("Usage: npm run fizzbuzz N");
    console.log("N should be a positive integer greater than 0.")
}
else {
    let result = main(input.value);
    result.forEach(str => console.log(str));
}

module.exports = { parseInput, main };