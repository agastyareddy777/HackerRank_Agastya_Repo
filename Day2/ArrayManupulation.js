'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the arrayManipulation function below.
function arrayManipulation(n,m, queries) {
    var k = Array(n).fill(0);
    var max = 0;
        for (let j = 0; j < m; j++)
        {
            let st = queries[j][0];
            let ed = queries[j][1];
            let ad = queries[j][2];
            for (let i = st-1; i <ed; i++)
            {
                k[i] += ad;
                if (k[i] > max)
                    max = k[i];
            }
        }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n,m, queries);

    ws.write(result + "\n");

    ws.end();
}
