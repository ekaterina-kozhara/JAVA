// Координаты трехралубника
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль ли нет

// Создаем три переменные: location1, location2, location3
let location1 = 5
let location2 = 6
let location3 = 7
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
  // Нужно увеличить счетчик всех выстрелов
  shots += 1
  // Сравнить координаты выстрела с координатами крабля
  if (currentShot === location1) {
    hits += 1
    if (hits === 3) {
      isSunk = true
      alert("Победа!")
    }
  } else if (currentShot === location2) {
    hits += 1
    if (hits === 3) {
      isSunk = true
      alert("Победа!")
    }
  } else if (currentShot === location3) {
    hits += 1
    if (hits === 3) {
      isSunk = true
      alert("Победа!")
    }
  }
  // Если игрок попал, увеличиваем счетчик попаданий на 1
  // Если количество попаданий равно 3 то меняем значение  isSunk на  true и сообщаем о победе
}
// Выводим стиистику игры и рейтинг игрока
