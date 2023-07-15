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
        console.log('pending = ',pending,'k = ',k,'arr[',i,']',arr[i]);
        if (pending in obj) {
            console.log('true : ',arr[i],'count:',count,'obj[pending]',obj[pending]);
            count += obj[pending];
            console.log(count);
        }
        if (arr[i] in obj) {
            console.log('true : ',arr[i],'count',count);
            obj[arr[i]]++;
        } else {
            console.log('true : ',arr[i],'count',count);
            obj[arr[i]] = 1;
        }
        console.log(obj,'count : ',count);
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