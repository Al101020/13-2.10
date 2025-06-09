import './videoMedia.css';

const body = document.querySelector('body');

const video3 = document.createElement('div');
video3.classList.add('V3');
body.appendChild(video3);

const h1Video3 = document.createElement('h1');
h1Video3.textContent = 'Видео-3: Media';
video3.appendChild(h1Video3);

const video = document.createElement('div');
// video.autoplay = true;
video.classList.add('videoDiv');
video3.appendChild(video);

// const videoDiv = document.createElement('div');
// // permissionDiv.textContent = 'разрешение - ?';
// videoDiv.classList.add('videoDiv');
// video3.appendChild(videoDiv);

// var video = document.querySelector('videoDiv');
console.log(video);
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      console.log(stream);
      console.log(video);
      console.log(video.srcObject);
      video.srcObject = stream;
      console.log(video.srcObject);
    })
    .catch((err0r) => {
      console.log(err0r);
      console.log('Something went wrong!');
    });
}

// const videoPlayer = document.querySelector('.video');// video;
// console.log(videoPlayer);

// (async () => {
//   const stream = await navigator.mediaDevices.getUserMedia ({
//     video: true,
//   });

//   videoPlayer.srcObject = stream; // media;

//   // console.log(stream);
//   // console.log(videoPlayer.srcObject);

//   videoPlayer.addEventListener('canplay', () => {
//     videoPlayer.play();
//   });

//   console.log(stream);
// })();
