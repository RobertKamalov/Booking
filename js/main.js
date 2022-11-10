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

function randomMassive(massive) {

  const newMassive = [];

  for (let i = 0; i <= massive.length - 1; i++) {
    if (getRandomFloatNumber(0, 1) == 0) {
      newMassive.push(massive[i]);
    }
  }

  return newMassive;
}


let authors = [];

const LocationXY = {
  MIN_X: 35.65000,
  MAX_X: 35.70000,
  MIN_Y: 139.70000,
  MAX_Y: 139.80000,
  FLOAT_NUMBER: 5,
}

const Price = {
  MIN: 10000,
  MAX: 30000,
}

const Rooms = {
  MIN: 1,
  MAX: 3,
}

const Guests = {
  MIN: 1,
  MAX: 5,
}

const checkTimes = [
  '12:00',
  '13:00',
  '14:00',
]

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const titles = [
  'Отель Гельвеция',
  'Bronza',
  'Галунов Отель',
  'Кино Хостел на Выборгской',
  'Лахта Плаза',
  'Rixos Красная Поляна',
  'Отель Пушка Инн',
  'Отель Garden Street',
  'Отель Rosa Springs',
  'Александр Хаус',
];

const descriptions = [
  '2хкомнатная квартира в центральной части Нового Города.',
  'Лофт на московском! Дому 3 года.',
  'Светлая, уютная двух комнатная квартира в доме 58/12А.',
  'Хостел с котами.',
  'Квартира расположена по адресу 46/09. Квартира Без Ремонта.',
  'Отель в новом микрорайоне «Дружный» 20/01.',
  'Сдаётся отличная однушка в кирпичном доме. Квартира в отличном состоянии.',
];

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const getAuthors = (amountAuthors = 10) => {

  for (let i = 1; i <= amountAuthors; i++) {

    let locationX = getRandomFloatNumber(LocationXY.MIN_X, LocationXY.MAX_X, LocationXY.FLOAT_NUMBER);
    let locationY = getRandomFloatNumber(LocationXY.MIN_Y, LocationXY.MAX_Y, LocationXY.FLOAT_NUMBER);

    authors.push({
      author: {
        avatar: ((i < 10) ? ('img/avatars/user0' + i + '.png') : ('img/avatars/user' + i + '.png')),
      },
      offer: {
        title: titles[getRandomFloatNumber(0, titles.length - 1)],
        address: locationX + ', ' + locationY,
        price: getRandomFloatNumber(Price.MIN, Price.MAX) + ' рублей',
        type: types[getRandomFloatNumber(0, types.length - 1)],
        rooms: getRandomFloatNumber(Rooms.MIN, Rooms.MAX),
        guests: getRandomFloatNumber(Guests.MIN, Guests.MAX),
        checkin: checkTimes[getRandomFloatNumber(0, checkTimes.length - 1)],
        checkout: checkTimes[getRandomFloatNumber(0, checkTimes.length - 1)],
        features: randomMassive(features),
        description: descriptions[getRandomFloatNumber(0, descriptions.length - 1)],
        photos: randomMassive(photos),
      },
      location: {
        x: locationX,
        y: locationY,
      },
    })
  }

}

getAuthors();
