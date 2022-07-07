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
