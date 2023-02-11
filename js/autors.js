import { getAuthors } from './data.js';

const authors = getAuthors();

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// Переводим названия жилья на русский
const translateHousing = function (housing) {
  switch (housing) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Непонятно!';
  }
}

// Скрываем пустые блоки
const hideEmptyBlock = function (block, massive) {
  if (!massive.length) { block.classList.add('hidden') }
}

const fragmentAuthors = document.createDocumentFragment();

authors.forEach((author) => {
  const mapElement = cardTemplate.cloneNode('true');
  mapElement.querySelector('.popup__title').textContent = author.offer.title;
  mapElement.querySelector('.popup__text--address').textContent = author.offer.address;
  mapElement.querySelector('.popup__text--price').textContent = author.offer.price + ' ₽/ночь';
  mapElement.querySelector('.popup__type').textContent = translateHousing(author.offer.type);
  mapElement.querySelector('.popup__text--capacity').textContent = author.offer.rooms + ' комнаты для ' + author.offer.guests + ' гостей';
  mapElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + author.offer.checkin + ' выезд до ' + author.offer.checkout;
  mapElement.querySelector('.popup__description').textContent = author.offer.description;
  mapElement.querySelector('.popup__avatar').src = author.author.avatar;

  const popupFeatures = mapElement.querySelector('.popup__features');
  const fragmentFeatures = document.createDocumentFragment();
  author.offer.features.forEach((element) => {
    const elementFeature = document.createElement('li');
    elementFeature.classList.add('popup__feature');
    elementFeature.classList.add('popup__feature--' + element);
    fragmentFeatures.appendChild(elementFeature);
  });
  popupFeatures.innerHTML = '';
  popupFeatures.appendChild(fragmentFeatures);

  const popupPhoto = mapElement.querySelector('.popup__photos');
  const fragmentPhotos = document.createDocumentFragment();
  author.offer.photos.forEach((element) => {
    const photos = popupPhoto.querySelector('.popup__photo').cloneNode('true');
    photos.src = element;
    fragmentPhotos.appendChild(photos);
  });
  popupPhoto.innerHTML = '';
  popupPhoto.appendChild(fragmentPhotos);

  hideEmptyBlock(mapElement.querySelector('.popup__features'), author.offer.features);
  hideEmptyBlock(mapElement.querySelector('.popup__photos'), author.offer.photos);

  fragmentAuthors.appendChild(mapElement);
});

export { authors, fragmentAuthors };
