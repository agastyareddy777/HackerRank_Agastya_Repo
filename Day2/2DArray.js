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

// Complete the hourglassSum function below.
function hourglassSum(a) {
    let max = -999;
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            let k = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 1] + a[i + 2][j]                + a[i + 2][j + 1] + a[i + 2][j + 2];
            if (k > max)
                max = k;
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
