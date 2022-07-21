//DNA

function DNAStrand(dna) {
  let arr = dna.split('');
  let obj = {
    'A': 'T',
    'G': 'C',
    'C': 'G',
    'T': 'A'
  };
  let res = '';

  // for (let i of arr) {
  //  if (obj[i]) {
  //   i = obj[i];
  //  }
  //  res += i;
  // }

  res = arr.reduce((cnt, item) => { return cnt += item = obj[item] }, '')

  return res;
}


console.log(DNAStrand("AAAA"));//,"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"));//,"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"));//,"CATA","String GTAT is")




/*
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
 */

function removeSmallest(numbers) {
  let newArr = numbers.slice(0);
  if (newArr.length === 0) {
    return []
  } else {

    let min = Math.min(...newArr);
    let ind = newArr.indexOf(Math.min(...newArr));
    let arr = newArr.splice(ind, 1)

    console.log(ind, numbers, newArr)
    return newArr;
  }
}


console.log(removeSmallest([1, 2, 3, 4, 5]));//, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]")
console.log(removeSmallest([-5, 3, 2, 1, 4]));//, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]"
console.log(removeSmallest([2, 2, 1, 2, 1]));//, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]"
console.log(removeSmallest([]));//, [], "Wrong result for []"

/*#7 */

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

// console.log(saleHotdogs(1));///, 100
// console.log(saleHotdogs(4));///, 400
// console.log(saleHotdogs(5));//, 475
// console.log(saleHotdogs(9));//, 855
// console.log(saleHotdogs(10));//, 900
// console.log(saleHotdogs(100));//, 9000

/*#8 */

function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
  }
  return days;
}

// console.log(howManydays(1));//,31
// console.log(howManydays(2));//,28
// console.log(howManydays(3));//,31
// console.log(howManydays(4));//,30
// console.log(howManydays(12));//,31

function padIt(str, n) {
  while (n > 0) { str = (n % 2 === 0) ? str + '*' : '*' + str; }
  n--;
  return str;
}

console.log(padIt("a", 1), "*a");
console.log(padIt("a", 2), "*a*");
console.log(padIt("a", 3), "**a*");
console.log(padIt("a", 4), "**a**");
console.log(padIt("a", 5), "***a**");


/* Task

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.*/

function sumArray(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);

  if (array.length === 0 || array.length === 1) {
    return 0;
  } else {
    let summ = array.reduce((accum, item) => {
      accum += item;
      return accum;
    }, 0);
    return summ - min - max;
  }

}

console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([126, 22, 51, 88, 3]));





// function countVegetables(string) {
//  let arr = string.split(' ');
//  let myArr = arr.reduce((accum, item) => {
//   return [accum, item];

//  }, [])

//  console.log(myArr);
//  return myArr;
// }


let lst2 = [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];
let s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber
 mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
 onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
 onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
 potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip
 mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;

// let lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
// let s1 = 'potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage';
// console.log((countVegetables(s1)));


var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
  7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063,
  5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496,
  6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
  monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
    5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
    7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
  tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
    7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
    5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
  wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102,
    5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
    5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698,
    9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
  thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
    9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066,
    7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
  friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
    6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
    9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
    5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
  saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
    5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
    5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
    7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

var stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

// function stairsIn20(s) {
//  let stairsInYear = [];
//  for (var arr of s) {
//   stairsInYear = stairsInYear.concat(arr);
//  }

// let myYear = stairsInYear.reduce((acc, item) => {
//   return acc + item;
//  },0)*20

//  return myYear;
// }

// function stairsIn20(s) {
//  let myArr = s.map(item => {
//   item = item.reduce((acc, i) => {
//    return acc + i;
//   }, 0);
//   return item;
//  });
//  console.log(myArr)
// }

function stairsIn20(s) {
  let myArr = [].concat(...s).reduce((acc, item) => acc + item, 0) * 20;
  return myArr;
}

console.log(stairsIn20(stairs))//, 54636040

/*TASK*/
//Complete the function that accepts a string parameter, and reverses each word in the string.All spaces in the string should be retained.
//  Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces" ==> "elbuod  secaps"

// function reverseWords(str) {
//   let arr = str.split(' ');
//   let newStr = arr.map(item =>{
//     return item.split('').reverse().join('');
//   })
//   return newStr.join(' ');
// }

function reverseWords(str) {
  return str.split(' ').map(item => { return item.split('').reverse().join('') }).join(' ')
}



console.log(reverseWords('The quick brown fox jumps over the lazy dog!'));//, 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'));//, 'elppa'
console.log(reverseWords('a b c d'));//, 'a b c d'
console.log(reverseWords('double  spaced  words'));


/*Task */
//Find letter position in alfabet

function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let position = alphabet.indexOf(letter) + 1
  return 'Position of alphabet: ' + position;
}

console.log(position("a"));//, "Position of alphabet: 1"
console.log(position("z"));//, "Position of alphabet: 26"
console.log(position("e"));//, "Position of alphabet: 5"


/*Task */
///You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

///Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

///[]-- > "no one likes this"
//["Peter"]-- > "Peter likes this"
//["Jacob", "Alex"]-- > "Jacob and Alex like this"
//["Max", "John", "Mark"]-- > "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"

//Note: For 4 or more names, the number in "and 2 others" simply increases.

//else if
// function likes(names) {
//  let str = ''
//  if (names.length === 0) {
//   str = 'no one likes this';
//  } else if (names.length === 1) {
//   str = `${names[0]} likes this`;
//  } else if (names.length === 2) {
//   str = `${names[0]} and ${names[1]} like this`;
//  } else if (names.length === 3) {
//   str = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//  } else {
//   str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//  }

//  return str;
// }

//swith

function likes(names) {
  switch (names.length) {
    case 0: return 'no one likes this';
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

}

console.log(likes([]));//, 'no one likes this'
console.log(likes(['Peter']));//, 'Peter likes this'
console.log(likes(['Jacob', 'Alex']));//, 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark']));//, 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));//, 'Alex, Jacob and 2 others like this'


/* Tasck*/
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.
//For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  let min1 = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min1), 1);
  let min2 = Math.min(...numbers);
  return min1 + min2;
}

// function sumTwoSmallestNumbers(numbers) {
//   var min = Number.MAX_SAFE_INTEGER;
//   var secondMin = Number.MAX_SAFE_INTEGER;

//   var n;
//   for (i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//     if (n < min) {
//       secondMin = min;
//       min = n;
//     } else if (n < secondMin) {
//       secondMin = n;
//     }
//   }

//   return min + secondMin;
// }


console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");

/*Tasks */
//
//At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].



function differenceInAges(ages) {
  let min = Math.min(...ages),
    max = Math.max(...ages),
    diff = max - min;
  return [min, max, diff]
}

console.log(differenceInAges([82, 15, 6, 38, 35]));//, [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32]));//, [14, 99, 85]


/*Convert number to reversed array of digits */
//Given a random non - negative number, you have to return the digits of this number within an array in reverse order.
//  Example(Input => Output):
//348597 => [7, 9, 5, 8, 4, 3]
//0 => [0]

function digitize(n) {
  // let arr = (''+n).split('').map(Number).reverse();
  let arr = [...n.toString()].map(Number).reverse();
  return arr;
}

console.log(digitize(35231));//, [1, 3, 2, 5, 3]
console.log(digitize(0));

/*Summ all items*/

function sumMix(x) {
  let arr = x.reduce((acc, i) => {
    return acc + (+i);
  }, 0);
  return arr;
}

console.log(sumMix([9, 3, '7', '3']));//, 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));//, 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));//, 41



/* Profile Lookup*/
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property(prop) as arguments has been pre - written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property'
    }
  }
  return 'No such contact'
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));



/*Task*/
//Coding in function grabDoll.function accept 1 parameter: dolls.it's a string array, a list of some dolls.
//You need traverse dolls by using for loop.If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
//When the bag has three element, bag is full.You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
//Return the bag after for loop finished.
//You should use for, break and continue in your code.otherwise, your solution may not pass this kata.

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      continue;
    } else if (bag.length >= 3) break;
    bag.push(dolls[i]);
  }

  return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]));//, ["Hello Kitty"]
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]));//, ["Hello Kitty", "Hello Kitty"]
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]));//, ["Hello Kitty", "Hello Kitty", "Barbie doll"]
console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]));//, ["Barbie doll", "Hello Kitty", "Hello Kitty"]