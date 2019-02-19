// Координаты трехралубника
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль ли нет

// Создаем три переменные: location1, location2, location3
let location1 = Math.floor(Math.random() * 8)
let location2 = location1 + 1
let location3 = location2 + 1
// Создаем переменную currentShot
let currentShot
// Создаем переменную, чтоы считать выстрелы
let shots = 0
// Создаем переменную для количества попаданий
let hits = 0
// Создаем переменную, чтобы отслеживать потоплен или нет isSunk
let isSunk = false

while (isSunk === false) {
  // Получить координаты выстрела
  currentShot = Number(prompt("Введите число от 0 до 9:"))

  if (currentShot > 0 && currentShot <= 9) {
    shots += 1
    // Сравнить координаты выстрела с координатами крабля
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
      alert("попал")
      hits += 1
      if (hits === 3) {
        isSunk = true
        alert("Победа!")
      }
    } else {
      alert("не попал")
    }
  } else {
    alert("ошибка, вы ввели неправльное число, нужно ввести от 0 до 9")
  }
    // Нужно увеличить счетчик всех выстрелов
}

let rating = Math.round(3 / shots * 100)
alert ("Вам понадобилось" + shots + "выстрелов, чтобы потопить корабль. Ваш рейтинг: " + rating)ы

// Если игрок попал, увеличиваем счетчик попаданий на 1
// Если количество попаданий равно 3 то меняем значение  isSunk на  true и сообщаем о победе
// Выводим стиистику игры и рейтинг игрока
