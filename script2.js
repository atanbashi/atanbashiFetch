let body = document.body;

let requestFromPromise, dateFromPromise;

let getDate = new Promise((resolve, reject) => {
  let date = new Date();
  setTimeout(() => { date ? resolve(date) : reject('Time didnt find')}, 2000);
});

let getUserName = new Promise((resolve, reject) => {
  setTimeout(() => {
    let url = window.location.toString();
    let getUrl = url.split('=');
    let name = getUrl[1];
    resolve(name == 'undefined' ? name : 'atanbashi');
  }, 3000);
});

let initialUser = (json) => {
  let avatar = json.avatar_url;
  let name = json.name;
  let userInfo = json.bio;
  let url = json.url;
}

let createName = () => {
  let profileName = document.createElement('h1');
  profileName.innerHTML = name;
  body.appendChild(profileName);
}

let createUserInfo = () => {
  let profileInfo = document.createElement('p');
  profileInfo.innerHTML = userInfo;
  body.appendChild(profileInfo);
}

let createUserAvatar = () => {
  let userAvatar = document.createElement('img');
  let newString = document.createElement('br');
  userAvatar.src = avatar;
  body.appendChild(userAvatar);
  body.appendChild(newString);
}

let createDate = () => {
  let currentDate = document.createElement('p');
  currentDate.innerHTML = dateFromPromise;
  body.appendChild(currentDate);
}

let maskPreload = () => {
  let preloader = document.querySelector('.container');
  preloader.style.display = 'none';
}

Promise.all([getUserName, getDate]
  .then(([name, date]) => {
      dateFromPromise = date;
      requestFromPromise =name;
      return fetch('https://api.github.com/users/' + name);
  })
  .then(res => res.json())
  .then(json => {
    initialUser(json);
    maskPreload();
    createName();
    createUserInfo();
    createUserAvatar();
    createDate();
  })
  )
  .catch(err => alert('Информация о пользователе не доступна'));
