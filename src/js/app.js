// TODO: write code here
// import '../component/collapse';

const body = document.querySelector('body');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (data) => {
      const { latitude, longitude } = data.coords;

      const latitude_ = document.createElement('h4'); // широта
      latitude_.textContent = `Комп находится - широта: ${latitude}`;
      body.appendChild(latitude_);

      const longitude_ = document.createElement('h4'); // долгота
      longitude_.textContent = `Комп находится - долгота: ${longitude}`;
      body.appendChild(longitude_);

      const result = document.createElement('h3'); // долгота
      result.textContent = 'Геолокация по ip может определить что я в Хабаровске(гугл или яндекс карты определили что ПК в Комсомольске), короче определяет по ip очень приблезительно.';
      body.appendChild(result);

      //  --------------------------------------
      console.log(`lat ${latitude}`);
      console.log(`long ${longitude}`);
    },
    (err) => {
      console.log(err);
    },
    { enableHighAccuracy: true },
  );
}
