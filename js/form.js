const form = document.querySelector('.ad-form');
const inputType = form.querySelector('#type');
const inputPrice = form.querySelector('#price');
const inputRoomNumber = form.querySelector('#room_number')
const inputNumberOfSeat = form.querySelector('#capacity');
const inputNumberOfSeatOptions = inputNumberOfSeat.querySelectorAll('option');
const timeCheckInRoom = form.querySelector('#timein');
const timeCheckOutRoom = form.querySelector('#timeout');
const titleRoom = form.querySelector('#title');


// Значение цен для сдаваемых помещений
const minPrice = {
  MIN: 0,
  MAX: 1000000,
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};


// Значение мин и макс заголовка объявления
const titleValueLength = {
  MIN: 30,
  MAX: 100,
};


// Выставляем максимальное и минимальное значение цены за ночь
// Минимально вначале стоит 5000,так как изначально выбрана квартира
inputPrice.min = 5000;
inputPrice.max = 1000000;


// Функция для синхронизации количество комнат - количество гостей и проверки поля
const sincInputNumberOfSeat = (numberRoom) => {
  inputNumberOfSeatOptions.forEach((element) => {
    if (numberRoom === '100') { numberRoom = 0 };
    if (element.value > numberRoom) {
      element.disabled = true;
      element.style.display = 'none';
    } else {
      element.disabled = false;
      element.style.display = 'block';
    }
  })

  if (inputNumberOfSeat.value > numberRoom) {
    inputNumberOfSeat.setCustomValidity('Выберите значение из списка');
  } else {
    inputNumberOfSeat.setCustomValidity('');
  }
};


// Сбрасываем ошибку на выборе количетсве мест при изменении поля
inputNumberOfSeat.addEventListener('change', () => {
  inputNumberOfSeat.setCustomValidity('');
});


// Cинхронизации количество комнат - количество гостей
sincInputNumberOfSeat(inputRoomNumber.value);
inputRoomNumber.addEventListener('change', () => {
  sincInputNumberOfSeat(inputRoomNumber.value);
});


// Время выезда = времени въезда
const sincTimeHandler = function (checkTime, resaultTime) {
  switch (checkTime.value) {
    case '12:00':
      return resaultTime.value = '12:00';
    case '13:00':
      return resaultTime.value = '13:00';
    case '14:00':
      return resaultTime.value = '14:00';
  }
};
timeCheckInRoom.addEventListener('change', function () { sincTimeHandler(timeCheckInRoom, timeCheckOutRoom) });
timeCheckOutRoom.addEventListener('change', function () { sincTimeHandler(timeCheckOutRoom, timeCheckInRoom) });


// Изменяем минимальное значение цены помещения
const changeMinPrice = function (minPrice) {
  inputPrice.placeholder = minPrice;
  inputPrice.min = minPrice;
};

inputType.addEventListener('change', function () {
  switch (inputType.value) {
    case 'flat':
      return changeMinPrice(minPrice.FLAT);
    case 'bungalow':
      return changeMinPrice(minPrice.BUNGALOW);
    case 'house':
      return changeMinPrice(minPrice.HOUSE);
    case 'hotel':
      return changeMinPrice(minPrice.HOTEL)
    case 'palace':
      return changeMinPrice(minPrice.PALACE);
    default:
      return changeMinPrice(0);
  }
});


// Выставляем вывод своих валидаций для заполнения заголовка
titleRoom.addEventListener('input', () => {
  const valueLength = titleRoom.value.length;

  if (valueLength < titleValueLength.MIN) {
    titleRoom.setCustomValidity('Ещё ' + (titleValueLength.MIN - valueLength) + ' символов.');
  } else if (valueLength > titleValueLength.MAX) {
    titleRoom.setCustomValidity('Удалите ' + (valueLength - titleValueLength.MAX) + ' символов.');
  } else {
    titleRoom.setCustomValidity('');
  }

  titleRoom.reportValidity();
});
