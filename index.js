/*
Count pairs with given sum

Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
Example 1:

Input:
N = 7, K = 6
arr[] = {1, 2, 3, 5, 7, 4, 1} 
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

Example 2:

Input:
N = 4, K = 2
arr[] = {1, 1, 1, 1}
Output: 6
Explanation: 
Each 1 will produce sum 2 with any 1.

Example 3:

Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.
*/
// function countPairsWithGivenSum(arr, k) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === k) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

function countPairsWithGivenSum(arr, k) {
    let count = 0;
    let obj = {}
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let pending = k - arr[i];
        console.log('pending = ', pending, 'k = ', k, 'arr[', i, ']', arr[i]);
        if (pending in obj) {
            console.log('true : ', arr[i], 'count:', count, 'obj[pending]', obj[pending]);
            count += obj[pending];
            console.log(count);
        }
        if (arr[i] in obj) {
            console.log('true : ', arr[i], 'count', count);
            obj[arr[i]]++;
        } else {
            console.log('true : ', arr[i], 'count', count);
            obj[arr[i]] = 1;
        }
        console.log(obj, 'count : ', count);
    }
    console.log(obj, count);
    // return count;
}
// console.log(countPairsWithGivenSum([1, 2, 3, 1, 5, 7, 4, 1, 2, -1], 6));



// console.log(countPairsWithGivenSum([1, 2, 3, 5, 7, 4, 1], 6));
console.log(countPairsWithGivenSum([1, 1, 1, 1], 2));
// console.log(countPairsWithGivenSum([1, 5, 7, 1], 6));

/*
Array and String methods interview

const arr = [10, 20, 30, 40, 50];

const trippleArr = arr.map(item => item*3);

console.log(trippleArr);

trippleArr.pop();

console.log(trippleArr);

trippleArr.unshift(100);

console.log(trippleArr);

trippleArr.reverse();

console.log(trippleArr);

const total = trippleArr.reduce((acc,curr)=> acc+curr);

console.log(total);

const name = ['Anwar', 'moazam'];

const fullName = name.join(' ');
console.log(fullName);

// 000Anwar moazam
let newStr = fullName.padStart(16,'0')
console.log(newStr);

newStr = newStr.slice(4);
console.log(newStr);

// Anwar moazam moazam

let newName = newStr.replace('Anwar','moazam');

console.log(newName);

const res = newName.startsWith('moazam');
console.log(res);

const capitalName = newName.toUpperCase();

console.log(capitalName);
*/


function censor(str) {
    let str1 = str.split(" ");
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        let length = false;
        if (str1[i].length >= 5) {
            length = true;
        }
        for (let j = 0; j < str1[i].length; j++) {
            if (length) {
                result += "*";
            } else {
                result += str1[i][j];
            }
        }
        if (i < str1.length - 1) {
            result += " ";
        }
    }
    return result;
}

console.log(censor("My Name is anwar moazam"));


/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

var maxArea = function (arr){
    let maxHeight = {};
    let secondMaxHeight = {};
    let firstMax = arr[0];
    let secondMax = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= firstMax){
            firstMax = arr[i];
            console.log('First Max : ',firstMax);
            maxHeight = {}
            maxHeight[i] = firstMax;
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] > secondMax && arr[i] < firstMax){
            secondMax = arr[i];
            console.log('Second Max : ',secondMax);
            secondMaxHeight = {};
            secondMaxHeight[i] = secondMax;
        }
    }
    console.log(maxHeight,secondMaxHeight);
    return {...maxHeight,...secondMaxHeight};
}

console.log(maxArea([100,2,5,2,3,101,1,88]));

