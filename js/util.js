const getRandomFloatNumber = (min = 0, max = 10, numberSigns = 0) => {

  // Проверяем отрицительные значения
  if (min < 0 || max < 0) {
    return -1;
  }

  // Меняем значение min и max местами, если min больше max
  if (min > max) {
    [min, max] = [max, min];
  }

  // Получаем рандомное число со случайной плавающей точкой
  let randomNumber = Math.random() * (max - min) + min;

  // Округляем плавающую точку до нужного значения
  return randomNumber.toFixed(numberSigns);

}

// Создание массива со случайными не повторяющимися значениями
function randomMassive(massive) {

  const newMassive = [];

  for (let i = 0; i <= massive.length - 1; i++) {
    if (getRandomFloatNumber(0, 1) == 0) {
      newMassive.push(massive[i]);
    }
  }

  return newMassive;
}

export { getRandomFloatNumber, randomMassive };
