// TASK 10
// По нажатию b-10 выполняется функция f10. Функция должна вывести результирующий массив в out-10. В нулевом элементе массива лежит сумма положительных элементов массива a10, в первом - отрицательных. Решите задачу с помощью одного reduce.

let a10 = [-2, 3, -4, 5, -6, 7];  // [15,-12]

const f10 = () => {
 let res = a10.reduce((accum, item) => {
  if (item > 0) {
   accum[0] += item;

  } else {
   accum[1] += item;
  }
  return accum;
 }, [0, 0]);
 document.querySelector('.out-10').innerHTML = res;
}


// TASK 10
// // По нажатию b-10 выполняется функция f10. Функция перебирает объект a10 и создает новый объект z10 со значениямия которые по модулю больше 5. Связка ключ - значение сохраняется. Вывести результат в консоль.

let ar10 = { "hi": 5, "test": 2, "best": 12, "quest": -6 };
let z10 = {};
// ожидаю {"best" : 12, "quest" : -6};

const func10 = () => {
 for (let item in a10) {
  if (callback10(ar10[item])) {
   z10[item] = ar10[item]
  }
 }
 console.log(z10);
}

function callback10(elem) {
 return (Math.abs(elem) > 5) ? true : false;
}

func10()


// TASK 10
// Напишите функцию эмуляцию splice.
//Функция принимает 4 параметра - исходный массив, индекс с которого удалять, количество удаляемых элементов, и массив с новыми элементами, которые нужно добавить.
//Возвращает НОВЫЙ массив на основе исходного и условий.

let arr1 = [-2, 3, -4, 5, -6, 7];  // [15,-12]
let from = 2;
let num = 3;
let add = [999, 1000]

// что хочу получить в результате работы функции - [-2, 3, 999,1000,  7]
const func1 = (arr, from, num, add) => {
 let start = arr.slice(0, from);
 let end = arr.slice((from + num));
 let res = start.concat(add, end);
 return res;
}

document.querySelector('.b-10').addEventListener('click', () => {
 document.querySelector('.out-10').innerHTML = func1(arr1, from, num, add);
});


/*cool %)))*/
let wizards = [
 {
  name: 'Harry Potter',
  house: 'Gryfindor'
 },
 {
  name: 'Cedric Diggory',
  house: 'Hufflepuff'
 },
 {
  name: 'Tonks',
  house: 'Hufflepuff'
 },
 {
  name: 'Ronald Weasley',
  house: 'Gryfindor'
 },
 {
  name: 'Hermione Granger',
  house: 'Gryfindor'
 }];


function wizardHouse(item) {
 if (item.house === 'Hufflepuff') {
  return true;
 }
}

let arr = wizards.filter(wizardHouse).map(item => { return item.name })


console.log(arr);


let arr2 = wizards.reduce(function (newArr, wizard) {
 if (wizard.house === 'Hufflepuff') {
  newArr.push(wizard.name);
 }
 return newArr;
}, []);

// Получаем имена волшебников из Хаффлпафф
let hufflepuff = wizards.reduce(function (newArr, wizard) {
 if (wizard.house === 'Hufflepuff') {
  newArr.push(wizard.name);
 }
 return newArr;
}, []);

console.log(arr2);
console.log(hufflepuff);


[0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
 return previousValue + currentValue;
});

const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) => {
 if (amount > 30) {
  total.push(amount);
 }
 return total;
}, []);

above30 // [ 41.85, 46.5 ]


//Вы живете в маленьком городе, но любите посещать соседнюю столицу.Вы накопили 2000 рублей.
//Билет в большой город(в одну сторону) стоит 500 рублей.Стоимость проживания составляет 200 рублей в день.Каждый день родители Вам переводят на карту по 100 рублей.
//Напишите функцию, которая выводит остаток денег по дням и сообщение что Вам пора ехать домой.

function goHome() {
 let buget = 2000;
 let tiket = 500;
 let forLive = 200;
 let gift = 100;
 let start = buget - tiket - forLive;
 let days = 1;

 while (start > 0) {
  start = start - forLive + gift;
  days++;
  console.log(`У вас осталось ${start} на ${days}`);
 }
 return `Пора ехать домой на ${days}-й день`;
}

console.log(goHome())


/*Рекурсии */

function sum(arr, n) {
 // Only change code below this line
 if (n <= 0) {
  return 0;
 } else {
  return sum(arr, n - 1) + arr[n - 1]
 }
 // Only change code above this line
}


console.log(sum([1, 2, 3, 5, 8, 9], 6))


function countup(n) {
 if (n < 1) {
  return [];
 } else {
  const countArray = countup(n - 1);
  countArray.push(n);
  return countArray;
 }
}
console.log(countup(5));


function countdown(n) {
 if (n < 1) {
  return [];
 } else {
  let arr = countdown(n - 1);
  arr.unshift(n);
  return arr;
 }
}
console.log(countdown(5));


function rangeOfNumbers(startNum, endNum) {
 if (endNum - startNum === 0) {
  return [startNum];
 } else {
  var numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
 }
};

console.log(rangeOfNumbers(4, 8));
console.log(rangeOfNumbers(6, 9));
