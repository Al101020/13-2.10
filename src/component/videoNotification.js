import './videoNotification.css';

const body = document.querySelector('body');

const video2 = document.createElement('div');
video2.classList.add('V2');
body.appendChild(video2);

const h1Video2 = document.createElement('h1'); // долгота
h1Video2.textContent = 'Видео-2: Notification';
video2.appendChild(h1Video2);
