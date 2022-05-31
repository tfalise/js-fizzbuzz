const fizzbuzz = require('./fizzbuzz');

function main(n) {
    for(let i = 1; i <= n; i++)
    {
        console.log(fizzbuzz(i));
    }
}

let max = parseInt(process.argv[2]);
main(max);