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

function checkSeason(x) {
  if (x >= 3 && x <= 5) {
    console.log("Spring")
  } else if (x>=6 && x <=8) {
    console.log("Summer")
  } else if (x>=9 && x <=11) {
    console.log("Autumn")
  } else {
    console.log("Winter")
  }
}

let monthNumber = Number(prompt("Какой сейчас месяц?"))
checkSeason(monthNumber)
