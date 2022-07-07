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