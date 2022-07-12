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

function stairsIn20(s) {

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