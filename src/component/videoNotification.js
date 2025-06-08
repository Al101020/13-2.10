import './videoNotification.css';

const body = document.querySelector('body');

const video2 = document.createElement('div');
video2.classList.add('V2');
body.appendChild(video2);

const h1Video2 = document.createElement('h1');
h1Video2.textContent = 'Видео-2: Notification';
video2.appendChild(h1Video2);

const permissionDiv = document.createElement('div');
permissionDiv.textContent = 'разрешение - ?';
permissionDiv.classList.add('permissionDiv');
video2.appendChild(permissionDiv);

function showNotification() {
    const notification = new Notification('1-это: Текст уведомления', {
        body: 'Geolocation, Notification, Media',
        icon: '../src/img/netology.png',
        image: './src/img/netology2.png',
    });

    console.log(notification);
}

(async () => {
    console.log('1');
  if (!window.Notification) {
    console.log('2');
    return;
  };  
  
  if (Notification.permission === 'granted') { // если разрешение получено
    //TODO: show notification
    // console.log('granted no query');
    permissionDiv.textContent = 'удовлетворено без запроса(granted no query)';

    console.log('3');
    // showNotification();
    return;
  }

  if (Notification.permission === 'default') { // если разрешение ещё небыло запрошено
    const permission = await Notification.requestPermission(); //  спросим разрешение на уведомление

    console.log('4');
    // console.log(permission);

    if (permission) { // если разрешение получено мы также можем показывать уведомления
      //TODO: show notification
    //   console.log('granted after query');
      console.log('5');
      permissionDiv.textContent = 'удовлетворено после запроса(granted after query)';
      showNotification();
      return;
    }
  }
})();
