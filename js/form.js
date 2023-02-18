const inputType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const inputRoomNumber = document.querySelector('#room_number')
const inputCapacity = document.querySelector('#capacity');
const inputCapacityOptions = inputCapacity.querySelectorAll('option');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const minPrice = {
  MIN: 0,
  MAX: 1000000,
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};


// Выставляем максимальное и минимальное значение цены за ночь
// Минимально вначале стоит 5000,так как изначально выбрана квартира
inputPrice.min = 5000;
inputPrice.max = 1000000;


// Функция для синхронизации количество комнат - количество гостей
const checkInputCapacity = (numberRoom) => {
  inputCapacityOptions.forEach((element) => {
    element.disabled = true;
    element.style.display = 'none';
  })
  if (numberRoom == 100) { numberRoom = 0 };
  for (let i = numberRoom; i >= 0; i--) {
    inputCapacityOptions[inputCapacityOptions.length - 1 - i].disabled = false;
    inputCapacityOptions[inputCapacityOptions.length - 1 - i].style.display = 'block';
  }
  inputCapacityOptions[inputCapacityOptions.length - 1 - numberRoom].selected = 'selected';
};


// Cинхронизации количество комнат - количество гостей
checkInputCapacity(inputRoomNumber.value);
inputRoomNumber.addEventListener('change', (e) => {
  const value = e.target.value;
  switch (value) {
    case 3:
      console.log()
      break;

    default:
      break;
  }
  console.log(e.target.value)
  checkInputCapacity(inputRoomNumber.value);
});



// Время выезда = времени въезда
const checkTimeHandler = function (checkTime, resaultTime) {
  switch (checkTime.value) {
    case '12:00':
      return resaultTime.value = '12:00';
    case '13:00':
      return resaultTime.value = '13:00';
    case '14:00':
      return resaultTime.value = '14:00';
  }
};
timeIn.addEventListener('change', function () { checkTimeHandler(timeIn, timeOut) });
timeOut.addEventListener('change', function () { checkTimeHandler(timeOut, timeIn) });


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
