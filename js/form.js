const inputType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const minPrice = {
  FLAT: 1000,
  BUNGALOW: 0,
  HOUSE: 5000,
  PALACE: 10000,
}

const changeMinPrice = function (minPrice) {
  inputPrice.placeholder = minPrice;
  inputPrice.min = minPrice;
}

const checkTimeClick = function (checkTime, resaultTime) {
  switch (checkTime.value) {
    case '12:00':
      return resaultTime.value = '12:00';
    case '13:00':
      return resaultTime.value = '13:00';
    case '14:00':
      return resaultTime.value = '14:00';
  }
}

timeIn.addEventListener('change', function () { checkTimeClick(timeIn, timeOut) })
timeOut.addEventListener('change', function () { checkTimeClick(timeOut, timeIn) })

inputType.addEventListener('change', function () {
  switch (inputType.value) {
    case 'flat':
      return changeMinPrice(minPrice.FLAT);
    case 'bungalow':
      return changeMinPrice(minPrice.BUNGALOW);
    case 'house':
      return changeMinPrice(minPrice.HOUSE);
    case 'palace':
      return changeMinPrice(minPrice.PALACE);
    default:
      return changeMinPrice(0);
  }
});
