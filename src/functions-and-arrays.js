// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2)
{
  if (num1>num2){
    console.log(num1)
    return num1
  }else{
    return num2
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  if(words.length === 0) {
    return null;
  }

  else if(words.length === 1) {
    return words[0];
  }
  else {
    var wlength = []
    var temp1 = 0
    for (let i = 0;i<words.length;i++){
      temp1 = words[i].length
      wlength.push(temp1)
    }
    temp1 = 0
    var size = 0
    for (let i = 0;i < wlength.length;i++){
      if(wlength[i] > temp1){
        temp1 = wlength[i];
        size = i;
      }
    }
    return words[size];
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  if (numbers.length === 0) {
    return 0;
  }
  else if (numbers.length === 1) {
    return numbers[0];
  }
  else {
    sum = 0
    for (let i = 0;i<numbers.length;i++) {
      sum += numbers[i]
    }
    return sum;
  }

}

// Progression #3.1Bonus
function add(arr) {
  if (arr.length === 0) {
    return 0;
  }
  else if (arr.length === 1) {
    return arr[0];
  }
  else {
    sum = 0
    for (let i = 0;i < arr.length;i++) {
      if(typeof arr[i] === 'string') {
        sum += arr[i].length
      }
      if (typeof arr[i] === 'number') {
        sum += arr[i]
      }
      if (typeof arr[i] === 'boolean') {
        sum += arr[i]
      }
      if (typeof arr[i] === 'object') {
        throw new Error ("Unsupported data type sir or ma'am")
      }
    }
    return sum;
  }
}

// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr) {
  if(arr.length === 0) {
    return null;
  }
  else {
    sum = 0
    for (let i = 0;i<arr.length;i++) {
      sum += arr[i]
    }
    return sum/arr.length;
  }
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr) {
  if (arr.length === 0) {
    return null;
  }
  else {
    sum = 0
    for (let i = 0;i < arr.length;i++) {
      sum += arr[i].length
    }
    return sum/arr.length;
  }
}
// Progression 4.3 Bonus
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  else {
    sum = 0
    for (let i = 0; i<arr.length;i++) {
      if(typeof arr[i] === 'string') {
        sum += arr[i].length
      }
      if (typeof arr[i] === 'number') {
        sum += arr[i]
      }
      if (typeof arr[i] === 'boolean') {
        sum += arr[i]
      }
    }
    return parseFloat((sum/arr.length).toFixed(2));
  }
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(arr){
  if (arr.length === 0) {
    return null;
  }
  else {
    temparr = arr
        newarr = []
        for (let i = 0;i < temparr.length;i++) {
          if(temparr.indexOf(temparr[i],i+1) === -1) {
            newarr.push(arr[i])
          }
          else {
            newarr.push(arr[i])
            index = temparr.indexOf(temparr[i],i+1)
            temparr.splice(index,1)
          }
        }
        return newarr;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr,word) {
  if (arr.length === 0) {
    return null;
  }
  else {
    var exist = false
    for(let i = 0;i<arr.length;i++) {
      if (word === arr[i]) {
        exist = true
      }
    }
    return exist;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(arr,word) {
  if(arr.length === 0) {
    return 0;
  }
  else {
    var count = 0
    for (let i = 0;i<arr.length;i++) {
      if(word === arr[i]) {
        count++
      }
    }
    return count;
  }
}

// Progression #8: Bonus
const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  var num = 1
  for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix.length; j++){
          if (matrix[i][j] != 1) {
              num = 0
          }
      } 
  }
  return num;
}