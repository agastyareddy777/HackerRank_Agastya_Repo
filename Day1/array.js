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
}'use strict';

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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let large = 0;
    let slarge = 0;
    for (let i = 0; i < nums.length; i++)
    {
        
        if (nums[i] > large)
        {
            slarge = parseInt(large);
            large = nums[i];
           
        }
        if (nums[i] < large && nums[i] > slarge)
            slarge = nums[i];
    }
    return slarge;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}