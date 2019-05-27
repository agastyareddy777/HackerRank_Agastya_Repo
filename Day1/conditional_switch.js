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

function getLetter(s1) {
    let letter;
    const s = s1[0];
    // Write your code here
    if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u')
        letter = 'A';
    else if (s == 'b' || s == 'c' || s == 'd' || s == 'f' || s == 'g')
        letter = 'B';
    else if (s == 'h' || s == 'j' || s == 'k' || s == 'l' || s == 'm')
        letter = 'C';
    else
        letter = 'D';     
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}