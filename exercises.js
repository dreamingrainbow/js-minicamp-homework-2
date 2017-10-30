// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return (x<=y) ? y : x;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'

  switch(language)
  {
    case 'German':
      return 'Guten Tag!';
    case 'Mandarin Chinese':
      return 'Ni Hao!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return (num === 5 || num === 10) ? true : false;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return ( num > 20 && num < 50 ) ? true : false;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return Math.floor(Number.isInteger(num)) ? true : false;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  var x = '';
  x  = '' + x + (((num / 3).toString().indexOf('.') != -1) ? '':'fizz');
  
  if((num % 10)  === 5 || (num % 10)  === 0)
    x  = '' + x + 'buzz';
    
  if(x === '')
    return num;
  else
    return x;
}

function isPrime(num) {
  var start = 2;
  while (start <= Math.sqrt(num))
  {
    if (num % start++ < 1) return false;
  }
  return num > 1;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr.pop();
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  arr.forEach(function(currentValue, index, arr) {    
    arr[index] = currentValue + 1;
    });
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  return (arr.indexOf(item) !== -1 ) ? true:false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var t = 0;
  numbers.forEach(function(currentValue, index, arr) {
      //your iterator
      t = currentValue + t;
      });
  return t;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  var l = testScores.length;
  var t = 0;
  testScores.forEach(function(element) {
    t = t + element;
  });
  return t / l;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var h = 0;
  numbers.forEach(
    function(x){
      h = Math.max(h,x);
    }
  );
  return Number(h);
}
//console.log(largestNumber([7,4,18,1,12]));

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
