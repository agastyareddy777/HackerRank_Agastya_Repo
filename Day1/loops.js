'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(a) {
    for (var j = 0; j < a.length; j++) {

        if (a[j] == 'a' || a[j] == 'e' || a[j] == 'i' || a[j] == 'o' || a[j] == 'u')
        console.log(a[j]);

    }
    for (var j = 0; j < a.length; j++) {

        if (a[j] != 'a' && a[j] != 'e' && a[j] != 'i' && a[j] != 'o' && a[j] != 'u')
            console.log(a[j]);

    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}