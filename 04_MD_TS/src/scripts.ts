// Task 1
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a
// Return the result

const subtract = (a: number, b: number): number => a - b;

console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98

// Task 2
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2)); // 3
console.log(sum(1, 10)); // 11
console.log(sum(99, 1)); // 100

// Task 3
// Write a function that takes a value as argument
// Return the type of the value

const getType = (value: any): string => typeof value;

console.log(getType(1)); // number
console.log(getType(false)); // boolean
console.log(getType({})); // object
console.log(getType(null)); // object
console.log(getType('string')); // string
console.log(getType(['array'])); // object

// Task 4
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const areEqual = (a: any, b:any): boolean => a === b;

console.log(areEqual(2, 3)); // false
console.log(areEqual(3, 3)); // true
console.log(areEqual(1, '1')); // false
console.log(areEqual('10', '10')); // true

// Task 5
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const getNthCharacter = (a: string, n:number): string => a[n - 1];

console.log(getNthCharacter('abcd', 1)); // a
console.log(getNthCharacter('zyxbwpl', 5)); // w
console.log(getNthCharacter('gfedcba', 3)); // e

// Task 6
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirstThreeCharacters = (a: string): string => a.substring(3);

console.log(removeFirstThreeCharacters('abcdefg')); // defg
console.log(removeFirstThreeCharacters('1234')); // 4
console.log(removeFirstThreeCharacters('fgedcba')); // dcba

// Task 7
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const getLastThreeCharacters = (a: string): string => a.slice(-3, a.length);

console.log(getLastThreeCharacters('abcdefg')); // efg
console.log(getLastThreeCharacters('1234')); // 234
console.log(getLastThreeCharacters('fgedcba')); // cba

// Task 8
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const getFirstThreeCharacters = (a: string): string => a.slice(0, 3);

console.log(getFirstThreeCharacters('abcdefg')); // abc
console.log(getFirstThreeCharacters('1234')); // 123
console.log(getFirstThreeCharacters('fgedcba')); // fge

// Task 9
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const getFirstHalf = (a: string): string => a.slice(0, Math.ceil(a.length / 2));

console.log(getFirstHalf('abcdefg')); // abcd
console.log(getFirstHalf('1234')); // 12
console.log(getFirstHalf('fgedcba')); // fged

// Task 10
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThreeCharacters = (a: string): string => a.slice(0, a.length - 3);

console.log(removeLastThreeCharacters('abcdefg')); // abcd
console.log(removeLastThreeCharacters('1234')); // 1
console.log(removeLastThreeCharacters('fgedcba')); // fged

// Task 11
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const getPercentage = (a: number, b: number): number => (b / 100) * a;

console.log(getPercentage(100, 50)); // 50
console.log(getPercentage(10, 1)); // 0.1
console.log(getPercentage(500, 25)); // 125

// Task 12
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const calculate = (a: number, b: number, c: number, d: number, e: number, f: number): number => ((a + b - c) * d / e) ** f;

console.log(calculate(6, 5, 4, 3, 2, 1)); // 10.5
console.log(calculate(6, 2, 1, 4, 2, 3)); // 2744
console.log(calculate(2, 3, 6, 4, 2, 3)); // -8

// Task 13
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (n: number): boolean => n % 2 == 0;

console.log(isEven(10)); // true
console.log(isEven(-4)); // true
console.log(isEven(5)); // false
console.log(isEven(-111)); // false

// Task 14
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const countOccurrences = (a: string, b: string): number => b.split(a).length - 1;

console.log(countOccurrences('m', 'how many times does the character occur in this sentence?')); // 2
console.log(countOccurrences('h', 'how many times does the character occur in this sentence?')); // 4
console.log(countOccurrences('?', 'how many times does the character occur in this sentence?')); // 1
console.log(countOccurrences('z', 'how many times does the character occur in this sentence?')); // 0

// Task 15
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWholeNumber = (a: number): boolean => Number.isInteger(a);

console.log(isWholeNumber(4)); // true
console.log(isWholeNumber(1.123)); // flase
console.log(isWholeNumber(1048)); // true
console.log(isWholeNumber(10.48)); // false

// Task 16
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const calculateNumber = (a: number, b: number): number => (a < b ? a / b : a * b);

console.log(calculateNumber(10, 100)); // 0.1
console.log(calculateNumber(90, 45)); // 4050
console.log(calculateNumber(8, 20)); // 0.4
console.log(calculateNumber(2, 0.5)); // 1

// Task 17
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatenate = (a: string, b: string): string => {
  if (a.includes(b)) {
    return b.concat('', a);
  }
  return a.concat('', b);
};

console.log(concatenate('cheese', 'cake')); // cheesecake
console.log(concatenate('lips', 's')); // slips
console.log(concatenate('Java', 'script')); // Javascript
console.log(concatenate(' think, therefore I am', 'I')); // I think, therefore I am

// Task 18
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundToSecondDigit = (a: number): number => Math.round(a * 100) / 100;
console.log(roundToSecondDigit(2.12397)); // 2.12
console.log(roundToSecondDigit(3.136)); // 3.14
console.log(roundToSecondDigit(1.12397)); // 1.12
console.log(roundToSecondDigit(26.1379)); // 26.14

// Task 19 !!!
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const splitDigits = (a: number): number[] => a.toString().split('').map((x) => parseInt(x));

console.log(splitDigits(10)); // [1,0]
console.log(splitDigits(931)); // [9,3,1]
console.log(splitDigits(193278)); // [1,9,3,2,7,8]

// Task 20
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const concatFixedWords = (a:string, b:string): string => {
  const fixedWord = a.replace('%', '') + b.split('').reverse().join('').replace('%', '');
  return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1);
};

console.log(concatFixedWords('java', 'tpi%rcs')); // Javascript
console.log(concatFixedWords('c%ountry', 'edis')); // Countryside
console.log(concatFixedWords('down', 'nw%ot')); // Downtown

// Task 21 !!!
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const primeNumber = (a: number): number => {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return primeNumber(a + 1);
    }
  }
  return a;
};

console.log(primeNumber(38)); // 41
console.log(primeNumber(7)); // 7
console.log(primeNumber(115)); // 127
console.log(primeNumber(2000)); // 2003

// Task 22
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const getNextMultiple = (x: number, y: number): number => {
  if (x % y === 0) {
    return x;
  }
  return x + (y - (x % y));
};

console.log(getNextMultiple(1, 23)); // 23
console.log(getNextMultiple(23, 23)); // 23
console.log(getNextMultiple(7, 3)); // 9
console.log(getNextMultiple(-5, 7)); // 0

// Task 23 !!!
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertString = (a: string, b: string): string => {
  let result = '';
  for (let i = a.length - 1; i >= 0; i--) {
    result = a[i] + result;
    if ((a.length - i) % 3 === 0 && i > 0) {
      result = b + result;
    }
  }
  return result;
};

console.log(insertString('1234567', '.')); // 1.234.567
console.log(insertString('abcde', '$')); // ab$cde
console.log(insertString('zxyzxyzxyzxyzxyz', 'w')); // zwxyzwxyzwxyzwxyzwxyz

// Task 24 !!!
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const shiftAlphabet = (s: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let index = alphabet.indexOf(s[i]); // Get the index of the current character in the alphabet
    index += 1; // Increment the index to the next letter in the alphabet
    const letter = alphabet[index % alphabet.length]; // Get the next letter in the alphabet based on the incremented index
    result += letter; // Add the letter to the result string
  }

  return result;
};

console.log(shiftAlphabet(('bnchmf'))); // coding
console.log(shiftAlphabet(('bgddrd'))); // cheese
console.log(shiftAlphabet(('sdrshmf'))); // testing

// Task 25
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const getNthElement = (a: number[], n: number): number => a[n - 1];

console.log(getNthElement([1, 2, 3, 4, 5], 3)); // 3
console.log(getNthElement([10, 9, 8, 7, 6], 5)); // 6
console.log(getNthElement([7, 2, 1, 6, 3], 1)); // 7

// Task 26
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThreeElements = (a: number[]): number [] => a.slice(3);

console.log(removeFirstThreeElements([1, 2, 3, 4])); // [4]
console.log(removeFirstThreeElements([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(removeFirstThreeElements([99, 1, 1])); // []

// Task 27
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const getLastThreeElements = (a: number[]): number [] => a.slice(a.length - 3);

console.log(getLastThreeElements([1, 2, 3, 4])); // [2,3,4]
console.log(getLastThreeElements([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(getLastThreeElements([99, 1, 1])); // [99,1,1]

// Task 28
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const getFirstThreeElements = (a: number[]): number [] => a.slice(0, 3);

console.log(getFirstThreeElements([1, 2, 3, 4])); // [1,2,3]
console.log(getFirstThreeElements(([5, 4, 3, 2, 1, 0]))); // [5,4,3]
console.log(getFirstThreeElements([99, 1, 1])); // [99,1,1]

// Task 29
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const getLastNElements = (a: number[], n: number): number [] => a.slice(n * -1, a.length);

console.log(getLastNElements([1, 2, 3, 4, 5], 2)); // [4,5]
console.log(getLastNElements([1, 2, 3], 6)); // [1,2,3]
console.log(getLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [6,7,8]

// Task 30
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const filterArray = (a: any[], b: string | number | boolean) => a.filter((n) => b !== n);

console.log(filterArray([1, 2, 3], 2)); // [1,3]
console.log(filterArray([1, 2, '2'], '2')); // [1,2]
console.log(filterArray([false, '2', 1], false)); // ['2',1]
console.log(filterArray([1, 2, '2', 1], 1)); // [2,'2']

// Task 31
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const getArrayLength = (a: number[]): number => a.length;

console.log(getArrayLength([1, 2, 2, 4])); // 4
console.log(getArrayLength(([9, 9, 9]))); // 3
console.log(getArrayLength([4, 3, 2, 1, 0])); // 5

// Task 32
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const countNegatives = (numbers: number[]): number => numbers.filter((n) => n < 0).length;

console.log(countNegatives([1, -2, 2, -4])); // 2
console.log(countNegatives([0, 9, 1])); // 0
console.log(countNegatives([4, -3, 2, 1, 0])); // 1

// Task 33
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortArrayDescending = (numbers: number[]): number[] => numbers.sort((a, b) => b - a);

console.log(sortArrayDescending([1, 3, 2])); // [3,2,1]
console.log(sortArrayDescending([4, 2, 3, 1])); // [4,3,2,1]

// Task 34
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortAlphabetically = (arr: string[]): string [] => arr.sort();

console.log(sortAlphabetically(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 35
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const getAverage = (arr: number[]) => (arr.reduce((a, b) => a + b)) / arr.length;

console.log(getAverage([10, 100, 40])); // 50
console.log(getAverage([10, 100, 1000])); // 370
console.log(getAverage(([-50, 0, 50, 200]))); // 50

// Task 36
// Write a function that takes an array of strings as argument
// Return the longest string

const getLongestString = (arr: string[]) => arr.reduce((a, b) => (a.length > b.length ? a : b));

console.log(getLongestString(['help', 'me'])); // help
console.log(getLongestString(['I', 'need', 'candy'])); // candy

// Task 37
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const allElementsEqual = <T>(arr: T[]) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

console.log(allElementsEqual([true, true, true, true])); // true
console.log(allElementsEqual(['test', 'test', 'test'])); // true
console.log(allElementsEqual([1, 1, 1, 2])); // false
console.log(allElementsEqual(['10', 10, 10, 10])); // false

// Task 38
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const concatenateArray = (...arrays: any[]): any[] => arrays.reduce((acc, array) => acc.concat(array), []);

console.log(concatenateArray([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concatenateArray(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(concatenateArray([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

// Task 39
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const sortArray = (arr: any[]): any[] => arr.sort((a, b) => {
  if (a.b > b.b) {
    return -1;
  } if (a.b < b.b) {
    return 1;
  }
  return 0;
});

console.log(sortArray([{ a: 1, b: 2 }, { a: 5, b: 4 }])); // [{a:1,b:2},{a:5,b:4}]
console.log(sortArray([{ a: 2, b: 10 }, { a: 5, b: 4 }])); // [{a:5,b:4},{a:2,b:10}]
console.log(sortArray([{ a: 1, b: 7 }, { a: 2, b: 1 }])); // [{a:2,b:1},{a:1,b:7}]

// Task 40
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergedArray = (arr1: number[], arr2: number[]): number [] => {
  const mergedArr = [...arr1, ...arr2]; // merge the arrays
  const duplicatedArr = mergedArr.filter((item, index) => mergedArr.indexOf(item) === index); // remove duplicates
  return duplicatedArr.sort((a, b) => a - b); // sort in ascending order
};

console.log(mergedArray([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergedArray([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]

// Task41
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumValueArray = (arr: number[], n: number): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sumValueArray([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(sumValueArray([-10, -11, -3, 1, -4], -3)); // 1
console.log(sumValueArray([78, 99, 100, 101, 401], 99)); // 602

// Task42
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const rangeArrayMinMax = (min: number, max:number): number[] => {
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range;
};

console.log(rangeArrayMinMax(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeArrayMinMax(1, 3)); // [1, 2, 3]
console.log(rangeArrayMinMax(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(rangeArrayMinMax(2, 7)); // [2, 3, 4, 5, 6, 7]

// Task 43
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupByFirstLetter = (strings: string[]): { [key: string]: string[] } => {
  const groups: { [key: string]: string[] } = {}; // Initialize an empty object to store the groups
  for (const str of strings) { // Iterate over the input strings
    const firstLetter = str[0].toLowerCase(); // Get the first letter of the current string and convert it to lowercase
    if (groups[firstLetter]) { // Check if there is already a property in the groups object with the first letter as the key
      groups[firstLetter].push(str); // If there is, push the current string to the array stored as the value for that key
    } else {
      groups[firstLetter] = [str]; // If there is not, create a new property with the first letter as the key and an array containing the current string as the value
    }
  }
  return groups;
};

console.log(groupByFirstLetter(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupByFirstLetter(['Ant', 'Bear', 'Bird'])); // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupByFirstLetter(['Berlin', 'Paris', 'Prague'])); // { b: ['Berlin'], p: ['Paris', 'Prague']}

// Task 44
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const firstElementNumberArray = (arr: any, num: number): any [] => {
  if (num >= 6) {
    arr.unshift(num);
  } else {
    arr.unshift(0);
  }
  return arr;
};

console.log(firstElementNumberArray([1, 2, 3], 6)); // [6,1,2,3]
console.log(firstElementNumberArray(['a', 'b'], 2)); // [0,'a','b']
console.log(firstElementNumberArray([null, false], 11)); // [11,null,false]

// Task 45
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const everyNthElementArray = (a: number[], n: number): number[] => {
  const result = [];
  for (let i = a.length - 1; i >= 0; i -= n) {
    result.unshift(a[i]);
  }
  return result;
};

console.log(everyNthElementArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3,6,9]
console.log(everyNthElementArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // [6,1]
console.log(everyNthElementArray([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // [2,6,4,8,10]

// Task46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

type Object46 = {
  continent: string;
  country: string;
}

const countryValue = (obj: Object46) => obj.country;

console.log(countryValue({ continent: 'Asia', country: 'Japan' }));
console.log(countryValue({ country: 'Sweden', continent: 'Europe' }));

// Task 47
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

type Object47 = {
  [key: string]: number | string
}

const getKeyProp = (obj: Object47) => obj['prop-2'];

console.log(getKeyProp({ one: 1, 'prop-2': 2 })); // 2
console.log(getKeyProp({ 'prop-2': 'two', prop: 'test' })); // two

// Task 48
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

type Object48 = {
  continent: string;
  country: string;
}

const getEqualKey = (obj: Object48, str: string): string => {
  if (obj.hasOwnProperty(str)) {
    return str;
  }
};

console.log(getEqualKey({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(getEqualKey({ country: 'Sweden', continent: 'Europe' }, 'country'));

// Task 49
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const hasPropertyKey = (a: object, b: string): boolean => a.hasOwnProperty(b);

console.log(hasPropertyKey({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(hasPropertyKey({ x: 'a', y: 'b', z: 'c' }, 'a')); // false
console.log(hasPropertyKey({ x: 'a', y: 'b', z: 'c' }, 'z')); // true

// Task 50
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const newObject = (str: string): {key: string} => ({ key: str });

console.log(newObject('a')); // {key:'a'}
console.log(newObject('z')); // {key:'z'}
console.log(newObject('b')); // {key:'b'}

// Task 51
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const newObjectWithValue = (a:string, b:string) => ({ a: b });

console.log(newObjectWithValue('a', 'b')); // {a:'b'}
console.log(newObjectWithValue('z', 'x')); // {z:'x'}
console.log(newObjectWithValue('b', 'w')); // {b:'w'}

// Task 52
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

type Object52 = {
  [key: string | number]: number;
}

const newTwoArrayObject = (a: any[], b: any[]) => {
  const obj: Object52 = {};
  a.forEach((element, index) => {
    obj[element] = b[index];
  });
  return obj;
};

console.log(newTwoArrayObject(['a', 'b', 'c'], [1, 2, 3])); // {a:1,b:2,c:3}
console.log(newTwoArrayObject(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // (['w','x','y','z'],[10,9,5,2])
console.log(newTwoArrayObject([1, 'b'], ['a', 2])); // {1:'a',b:2}

// Task 53
// Write a function that takes an object (a) as argument
// Return an array with all object keys

type Object53 = {
  [key:string]: number;
}

const objectToArray = (obj: Object53) => Object.keys(obj);

console.log(objectToArray({ a: 1, b: 2, c: 3 })); // ['a','b','c']
console.log(objectToArray({
  j: 9, i: 2, x: 3, z: 4,
})); // ['j','i','x','z']
console.log(objectToArray({ w: 15, x: 22, y: 13 })); // ['w','x','y']

// Task 54
// Write a function that takes an object (a) as argument
// Return the sum of all object values

type Object54 = {
  [key: string]: number;
}

const sumAllObjectValues = (obj: Object54) => {
  let sum = 0;
  const objectValues = Object.values(obj);
  objectValues.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(sumAllObjectValues({ a: 1, b: 2, c: 3 })); // 6
console.log(sumAllObjectValues({
  j: 9, i: 2, x: 3, z: 4,
})); // 18
console.log(sumAllObjectValues({ w: 15, x: 22, y: 13 })); // 50

// Task 55
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

type Object55 = {
  [key: string]: number;
}

const removeProperty = (obj: Object55) => {
  const newObj: Object55 = {};
  Object.keys(obj).forEach((key) => {
    if (key !== 'b') {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

console.log(removeProperty({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(removeProperty({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(removeProperty({
  e: 6, f: 4, b: 5, a: 3,
})); // { e: 6, f: 4, a: 3 }

// Task 56
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

type Object56 = {
  [key:string]: number;
}

const mergeObjects = (obj1: Object56, obj2: Object56) => {
  // create a new object to hold the merged properties
  const mergedObj = { ...obj1 };
  const twoObj = Object.assign(obj1, mergedObj);
  // iterate over the properties in obj2
  for (const prop in obj2) {
    // if the property name is 'b', add it to mergedObj with the key 'd'
    if (prop === 'b') {
      mergedObj.d = obj2[prop];
    } else {
      // otherwise, add the property to mergedObj with its original key
      mergedObj[prop] = obj2[prop];
    }
  }

  return mergedObj;
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}

// Task 57
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

type Object57 = {
  [key: string]: number
}

const multiplyObject = (obj: Object57, num: number) => Object.values(obj).map((x) => x * num);

console.log(multiplyObject({ a: 1, b: 2, c: 3 }, 3)); // {a:3,b:6,c:9}
console.log(multiplyObject({
  j: 9, i: 2, x: 3, z: 4,
}, 10)); // {j:90,i:20,x:30,z:40}
console.log(multiplyObject({ w: 15, x: 22, y: 13 }, 6)); // {w:90,x:132,y:78}

// Task 58
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

type Object58 = {
  [key:string]: any
}

const swapObjectProperty = (obj: Object58) => Object.entries(obj).reduce((result: Object58, [key, value]) => {
  result[value] = key;
  return result;
}, {});

console.log(swapObjectProperty({
  z: 'a', y: 'b', x: 'c', w: 'd',
})); // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapObjectProperty({
  2: 'a', 4: 'b', 6: 'c', 8: 'd',
})); // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapObjectProperty({ a: 1, z: 24 })); // {1:'a',24:'z'}

// Task 59
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

type Object59 = {
  [key:string]: string | null;
}

const emptyStringObject = (obj: Object59) => {
  const newObj = Object.values(obj);
  const index = newObj.indexOf('');

  if (index !== -1) {
    newObj[index] = null;
  }
  return newObj;
};

console.log(emptyStringObject({ a: 'a', b: 'b', c: '' })); // { a: 'a', b: 'b', c: null }
console.log(emptyStringObject({
  a: '', b: 'b', c: ' ', d: 'd',
})); // { a: null, b: 'b', c: null, d: 'd' }
console.log(emptyStringObject({
  a: 'a', b: 'b ', c: ' ', d: '',
})); // { a: 'a', b: 'b ', c: null, d: null }

// Task 60
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

type Object60 = {
  fn?: string;
  ln?: string;
  size?: number;
  weight?: number;
  age?: number;
  email?: string;
}

const extractPersonalInfo = (info: Object60) => {
  const {
    fn, ln, size, weight,
  } = info;

  const entries = Object.entries({
    fn,
    ln,
    size: size && `${size} cm`,
    weight: weight && `${weight} kg`,
  });

  const filteredEntries = entries.filter(([, value]) => value);

  return Object.fromEntries(filteredEntries);
};

console.log(extractPersonalInfo({
  fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,
})); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(extractPersonalInfo({
  fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102,
})); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(extractPersonalInfo({
  fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71,
})); // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(extractPersonalInfo({
  fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de',
})); // {fn: 'Matthew', ln: 'Müller'}

// Task 61
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// eslint-disable-next-line max-len
const newPropertyForTwoObjects = (objects: object[], continent: string) => objects.map((obj) => ({ ...obj, continent }));

console.log(newPropertyForTwoObjects([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(newPropertyForTwoObjects([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

// Task 62
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

type Object62 = {
  [key: number]: number
}

const countOccurrences2 = (arr: number[]) => arr.reduce((count, num) => {
  count[num] = (count[num] || 0) + 1;
  return count;
}, {} as Object62);

console.log(countOccurrences2([1, 2, 2, 3])); // {1:1,2:2,3:1}
console.log(countOccurrences2([9, 9, 9, 99])); // {9:3,99:1}
console.log(countOccurrences2([4, 3, 2, 1])); // {1:1,2:1,3:1,4:1}

// Task63
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const areDatesEqual = (date1: Date, date2: Date) => date1.getTime() === date2.getTime();

console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // false
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // true
console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // false

// Task64
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const daysBetweenDates = (date1: Date, date2: Date) => Math.abs((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));

console.log(daysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01'))); // 10
console.log(daysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'))); // 7457

// Task65
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const sameDate = (date1: Date, date2: Date) => date1.getFullYear() === date2.getFullYear()
         && date1.getMonth() === date2.getMonth()
         && date1.getDate() === date2.getDate();

console.log(sameDate(new Date('2000/01/01'), new Date('2000/01/01'))); // true
console.log(sameDate(new Date('2000/01/01'), new Date('2000/01/02'))); // false
console.log(sameDate(new Date('2001/01/01'), new Date('2000/01/01'))); // false
console.log(sameDate(new Date('2000/11/01'), new Date('2000/01/01'))); // false

// Task66
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

const concatNewArray = (arr1: number[], arr2: number[]) => [...arr1, ...arr2];

console.log(concatNewArray([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(concatNewArray([1, 2], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Task67
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const arrayNewValue = (arr: string[], str: string) => [...arr, str];

console.log(arrayNewValue(['Apple', 'Orange', 'Banana'], 'Kiwi')); // ['Apple', 'Orange', 'Banana', 'Kiwi']

// Task68
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const reversearrayNewValue = (arr: string[], str: string) => [str, ...arr];

console.log(reversearrayNewValue(['Apple', 'Orange', 'Banana'], 'Kiwi')); // ['Kiwi', 'Apple', 'Orange', 'Banana']

// Task69
// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

type Object69 = {
  [key:string]: number
}

const concatNewObjects = (obj1: Object69, obj2: Object69) => ({ ...obj1, ...obj2 });

console.log(concatNewObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // { a:1, b:2, c:3, d:4 }
console.log(concatNewObjects({ a: 1, b: 2 }, {
  c: 3, d: 4, e: 5, f: 6,
})); // { a:1, b:2, c:3, d:4, e:5, f:6 }

// Task70
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

type Object70 = {
  [key:string]:string | number
}

const newPropertyObject = (obj: Object70, str: string) => ({ ...obj, favoriteMovie: str });

console.log(newPropertyObject({ eyeColor: 'green', age: 10 }, 'Garfield')); // { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(newPropertyObject({ eyeColor: 'blue', age: 15 }, 'Twilight')); // { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }
