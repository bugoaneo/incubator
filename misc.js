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