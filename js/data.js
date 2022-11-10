import { getRandomFloatNumber, randomMassive } from './util.js'

// Координаты адресов
const LocationXY = {
  MIN_X: 35.65000,
  MAX_X: 35.70000,
  MIN_Y: 139.70000,
  MAX_Y: 139.80000,
  FLOAT_NUMBER: 5,
}

// Цены за аренду
const Price = {
  MIN: 10000,
  MAX: 30000,
}

// Количество комнат
const Rooms = {
  MIN: 1,
  MAX: 3,
}

// Количество гостей
const Guests = {
  MIN: 1,
  MAX: 5,
}

// Время выезда и въезда
const checkTimes = [
  '12:00',
  '13:00',
  '14:00',
]

// Доступные услуги при аренде
const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

// Название отелей
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

// Описание отелей
const descriptions = [
  '2хкомнатная квартира в центральной части Нового Города.',
  'Лофт на московском! Дому 3 года.',
  'Светлая, уютная двух комнатная квартира в доме 58/12А.',
  'Хостел с котами.',
  'Квартира расположена по адресу 46/09. Квартира Без Ремонта.',
  'Отель в новом микрорайоне «Дружный» 20/01.',
  'Сдаётся отличная однушка в кирпичном доме. Квартира в отличном состоянии.',
];

// Тип отеля
const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

// Фото отеля
const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]


// Создание массива из данных
const getAuthors = (amountAuthors = 10) => {

  // Переменная для записи массива данных
  let authors = [];

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

  return authors;

}

export { getAuthors };
