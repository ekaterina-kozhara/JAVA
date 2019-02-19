// function sayHello(name) {
//   console.log("Привет," + name);
// }
// let userName = prompt("Как тебя зовут?")
// sayHello(userName)
//
//
// function findMax(a, b) {
//   if(a>b) {
//     console.log(a)
//   }else {
//     console.log(b)
//   }
//
// }

// function checkSeason(x) {
//   if (x >= 3 && x <= 5) {
//     console.log("Spring")
//   } else if (x>=6 && x <=8) {
//     console.log("Summer")
//   } else if (x>=9 && x <=11) {
//     console.log("Autumn")
//   } else {
//     console.log("Winter")
//   }
// }
// let monthNumber = Number(prompt("Какой сейчас месяц?"))
// checkSeason(monthNumber)


function addOne (num) {
  let num + 1
}
// console.log(addOne(15))
// возвращает 16

//--------------------------------

// function nextEven(number) {
//   if (Number.isInteger(number / 2)) {
//     console.log(number + 2)
//   } else {
//     console.log(number + 1)
//   }
// }

// nextEven(123)
// nextEven(43)
// nextEven(77)
// // создать переменную
//
// function makeDiff(number1,number1,number3) {
//
// }
//
// nextEven(5,7,8)
function makeDiff(a,b,c) {
  let min = Math.min(a,b,c)
  let max = Math.max(a,b,c)
  console.log("Минимальное:" + min)
  console.log("Минимальное:" + max)
  let middle = a + b + c - min - max

  console.log("Прибавляю к наименьшему 1" + addOne(min))
  console.log("среднее сделали четным" + nextEven(middle))
  console.log("max - min - middle" + (max-min+middle))
}
makeDiff(10,20,40)

// function calcPrice(amount,price) {
//   let result
//   result = amount * price
//   return result
// }
// console.log(calcPrice(10,24))

// сравнить 3 числа принимает 3 числа и к наименьшему прибавляет 1,
// среднее делает четным: а от большого отнимает меньшее + среднее.
// Описывает все шаги в консоли.
