const L = window.L;
const map = L.map('map-canvas');
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const address = adForm.querySelector('#address');

// Геолокация Токио
const geolocationTokio = {
  LAT: 35.6895,
  LNG: 139.692,
};

// Размер маркера
const ICON_MAIN_SIZE = 52;

// Размер отдаления карты
const MAP_ZOOM = 16;


// Включение и выключение дочерний элементов
const switchingСhildsElement = (element, booleanSwitch) => {
  element.childNodes.forEach((childsElement) => {
    childsElement.disabled = booleanSwitch;
  });
};


// Неактивный режим окна (Работает если карта не прогрузилась)
const getInactiveWindow = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  switchingСhildsElement(adForm, true);
  switchingСhildsElement(mapFilters, true);
};
getInactiveWindow();


// Активный режим окна (Работает если карта прогрузилась)
const getActiveWindow = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  switchingСhildsElement(adForm, false);
  switchingСhildsElement(mapFilters, false);
}
map.on('load', getActiveWindow)


// Загружаем карту в Leaflet
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// // Выставляем на карту своё местоположение
// navigator.geolocation.getCurrentPosition((function (location) {
//   map.setView({
//     lat: location.coords.latitude,
//     lng: location.coords.longitude,
//   }, MAP_ZOOM);
// }));

// Выставляем геолокацию
map.setView({
  lat: geolocationTokio.LAT,
  lng: geolocationTokio.LNG,
}, MAP_ZOOM);



// Создаем иконку для маркера
const iconMainMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [ICON_MAIN_SIZE, ICON_MAIN_SIZE],
  iconAnchor: [(ICON_MAIN_SIZE / 2), ICON_MAIN_SIZE],
});


// Создаем и выставляем маркер
const mainMarker = L.marker(
  {
    lat: geolocationTokio.LAT,
    lng: geolocationTokio.LNG,
  },
  {
    draggable: true,
    icon: iconMainMarker,
  },
);
mainMarker.addTo(map);



// Удаление ручного ввода в строку адрес и добавления координатов с точки
address.readOnly = true;
address.disabled = true;
address.value = (geolocationTokio.LAT).toFixed(5) + ', ' + (geolocationTokio.LNG).toFixed(5);
mainMarker.on('moveend', (evt) => {
  let geolocation = evt.target.getLatLng();
  address.value = (geolocation.lat).toFixed(5) + ', ' + (geolocation.lng).toFixed(5);
});
