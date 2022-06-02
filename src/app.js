const fizzbuzz = require('./fizzbuzz');

function parseInput(value) {
    let result = parseInt(value);

    if(isNaN(value)) {
        return { isValid: false };
    }

    if(result < 0) {
        return { isValid: false };
    }
}

function main(n) {
    for(let i = 1; i <= n; i++) {
        console.log(fizzbuzz(i));
    }
}

let max = parseInt(process.argv[2]);

if(isNaN(max) || max <= 0) {
    console.log("Usage: npm run fizzbuzz N");
    console.log("N should be a positive integer greater than 0.")
}
else {
    main(max);
}

module.exports = parseInput;