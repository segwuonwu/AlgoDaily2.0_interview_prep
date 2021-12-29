/* Can you write a function that reverses an inputted string without using the built-in Array#reverse method?

Let's look at some examples. So, calling:

reverseString("jake") should return "ekaj".

reverseString("reverseastring") should return "gnirtsaesrever".
*/

function reverseString(str){
  str = str.split('');
  let i = 0;
  let j = str.length-1;
  while(i<j){
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return str.join('');
}

console.log(reverseString("reverseastring"));
console.log();

//make number to a string, spit into array, reverse array, join back into number
//parseFloat removes 00 and returns whole number
//multiple by sign of x to maintain - or + sign

const reverseNum = function(x) {
    let reversed = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    
    return reversed
    
};

console.log(reverseNum(-291928347))
console.log();

/* Write a function that returns the string representation of all numbers from 1 to n based on the following rules:

If it's a multiple of 3, represent it as "fizz".

If it's a multiple of 5, represent it as "buzz".

If it's a multiple of both 3 and 5, represent it as "fizzbuzz".

If it's neither, just return the number itself.
*/

function fizzBuzz(num){
  let str = '';
  for(let i = 1; i<= num; i++){
    if(i%3 === 0 && i%5 === 0){
      str += "fizzbuzz";
    } else if(i%3 === 0){
      str += "fizz";
    } else if(i%5 === 0){
      str += "buzz";
    } else {
      str += i;
    }
  }
  return str;
}

console.log(fizzBuzz(15));
console.log();

/* You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). For example, one input may be:

'sea!$hells3'

Can you reverse only the alphabetical ones?
*/

function reverseOnlyAlphabetical(str){
  str = str.split('');
  let rgx = /[a-zA-Z]/;
  let i = 0;
  let j = str.length-1;

  while(i < j){
    if(!rgx.test(str[i])){
      i++;
    }else if(!rgx.test(str[j])){
      j--;
    }else{
      let temp = str[i];
      str[i] = str[j];
      str[j]= temp;
      i++;
      j--;
    }
    
  }

  return str.join('');
}
console.log(reverseOnlyAlphabetical('sea!$hells3'))
console.log();

/*
Given a string str, can you write a method that will return True if is a palindrome and False if it is not? If you'll recall, a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward".
eg: racecare returns true
*/
function isPalindrome(str) {
  if(!str || str == ""){
    return true;
  }else {
    let left = 0;
    let right = str.length-1;
    let leftchar, rightchar;
    
    while(left < right){
      leftchar = str[left].toLowerCase();
      rightchar = str[right].toLowerCase();
      if(isAlpha(leftchar) && isAlpha(rightchar)){
        if(leftchar == rightchar){
          left++;
          right--;
        }else{
          return false;
        }
      } else{
        if(!isAlpha(leftchar)){
          left++;
        }
        if(!isAlpha(rightchar)){
          right--;   
        }
      }
    }
    return true;
  }
}
function isAlpha(c) {
  let reg = /^[A-Za-z]/;
  return reg.test(c);
}

console.log(isPalindrome("A Santa Lived As a Devil At NASA"));
console.log();

/*We're provided a positive integer num. Can you write a method to repeatedly add all of its digits until the result has only one digit?
eg: 49 => 4+9 =>13 => 1+3 => 4
*/
function sumDigits(num) {
  while (num > 9) {
    const arr = String(num).split("");
    num = arr.reduce((sum, item) => {
      return sum + Number(item);
    }, 0);
  }
  return num;
}
console.log(sumDigits(49));
console.log();

/* Can you write a function that takes two arrays as inputs and returns to us their intersection? We can call the method intersection. Let's return the intersection of the two inputs in the form of an array. As a reminder, the definition of an intersection of two sets A and B is the set containing all elements of A that also belong to B (or equivalently, all elements of B that also belong to A).
*/

function intersection(nums1, nums2){
  let set = new Set(nums1);
  result = new Set(nums2.filter(n => set.has(n)));
  return [...result];
}

console.log(intersection([4,9,5],[9,4,9,8,4]))
console.log();

//Using hash set
// function intersection(nums1, nums2) {
// 	let intersection = {};

// 	for (const num of nums1) if (nums2.indexOf(num) !== -1) intersection[num] = 1;

// 	return Object.keys(intersection).map((val) => parseInt(val));
// }

/* Can you write a method missingNumbers that takes an array of continuous numbers and returns the missing integers?
*/
// function missingNumbers(arr){
  
// }

function missingNumbers(arr){
  arr.sort(function(a, b){return a - b});
  res = 0;
  missingNums = [];
  let x = arr[0];
  let y = arr[arr.length-1];

  for(let i = x; i<y; i++){
    if(!arr.includes(i)){
      missingNums.push(i);
    } 
  }
  
  if(missingNums.length === 0){
    return [y+1]
  }else
    return missingNums ;
}
console.log(missingNumbers([0,1,2,3]))
console.log();

/*
Given an array of integers, return the indices of the two numbers in it that add up to a specific goal number.

So let's say our 'goal' number was 10. Our numbers to sum to it would be 3 and 7, and we would return an array of indices 1 and 3 respectively.

let arr = [1, 3, 6, 7, 11];
let goal = 10;
twoSum(arr, goal);
// [1, 3]
*/

function twoSum(arr, goal){
  //arr.sort();
  result = [];
  first = 0;
  last = arr.length-1;
  while(first < last){
    sum = arr[first] + arr[last];
    if(sum === goal){
      result.push(first);
      result.push(last);
    }
    if(sum < goal){
      first++;
    } else {
      last--;
    }
  }
  return result;
}

let arr = [1, 3, 6, 7, 11];
console.log(twoSum(arr, 10 ))
console.log();

//Using hash 
const twoSum2 = (nums, target) => {
  let hash = {};

  for(i = 0; i < nums.length; i++){
    let curr = nums[i];
    let diff = target - curr;
    let ind = hash[diff];

    if(ind != undefined){
      return [ind, i];
    }else {
      hash[curr] = i;
    }
  }
}

console.log(twoSum2(arr, 10))
console.log()

function howManySquares1(num) {
  if(num <= 3){
    return num;
  }

  let result = num;

  for(let i = 1; i<=num; i++){
    // get squared numbers
    let temp = i*i;
    if(temp > num){
      break;
    } else {
      // get whatever is lower:
      // 1 - the current minimum, or
      // 2 - the minimum after considering the next perfect square
      result = Math.min(result, 1 + howManySquares1(num - temp));
    }

  }
  return result;
}

console.log(howManySquares1(25))
console.log();

//Optimized solution
function howManySquares(n) {
  let perfectSqNumsLength = 1;
  while (perfectSqNumsLength * perfectSqNumsLength < n) {
    perfectSqNumsLength++;
  }

  if (perfectSqNumsLength * perfectSqNumsLength > n) {
    perfectSqNumsLength--;
  }

  const perfectSqNums = [];

  // Fill the array backwards so we get the numbers to work with
  for (let i = perfectSqNumsLength - 1; i >= 0; i--) {
    perfectSqNums[perfectSqNumsLength - i - 1] = (i + 1) * (i + 1);
  }

  // instantiate a hashmap of possible paths
  const paths = {};
  paths[1] = 1; // 1 = 1
  paths[0] = 0; // 0 means you need 0 numbers to get 0

  return numSquares(paths, perfectSqNums, n);
}

function numSquares(paths, perfectSqNums, n) {
  if (paths.hasOwnProperty(n)) {
    // we already knew the paths to add up to n.
    return paths[n];
  }

  let min = Number.MAX_SAFE_INTEGER;
  let thisPath = 0;

  for (let i = 0; i < perfectSqNums.length; i++) {
    if (n - perfectSqNums[i] >= 0) {
      const difference = n - perfectSqNums[i];
      // this is key - recursively solve for the next perfect square
      // that could sum to n by traversing a graph of possible perfect square sums
      thisPath = numSquares(paths, perfectSqNums, difference);

      // compare the number of nodes required in this path
      // to the current minimum
      min = Math.min(min, thisPath);
    }
  }

  min++; // increment the number of nodes seen
  paths[n] = min; // set the difference for this number to be the min so far

  return min;
}

console.log(howManySquares(966))
console.log()

function minCost(arr){
  let res = [];
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length; j++){
      let sum = arr[i][j] + arr[i][j+1];
      res.push(sum);
    }
  }
  return Math.min(...res);
}
console.log(minCost([[3,2,4],[3,4,6]]))
console.log()


