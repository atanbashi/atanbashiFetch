let url = window.location.toString();

let preloader = document.getElementById("preload");

let newDate = new Date();

let getUserName = (url) => {
  let urlSplit = url.split('=');
  let userName = urlSplit[1];
  if (userName == undefined) {
    userName = 'atanbashi';
  }
  return userName;
}

let name = getUserName(url);

let getNewDate = new Promise((resolve, reject) => {
  setTimeout(() => newDate ? resolve(newDate) : reject('Time didnt find'), 2000)
});

let getUserRequest =  fetch('https://api.github.com/users/' + name);

Promise.all([getUserRequest, getNewDate])
  .then(([userInfoRequest, requestNewDate]) => {
      userRequest = userInfoRequest;
      requestDate = requestNewDate;
  })
  .then(res => userRequest.json())
  .then(json => {
    let avatar = json.avatar_url;
    let name = json.name;
    let userInfo = json.bio;
    let profile = json.html_url;
    if (name) {
      let createUserAvatar = () => {
        let addAvatar = document.createElement('img');
        let newString = document.createElement('br');
        addAvatar.src = avatar;
        document.body.appendChild(addAvatar);
        document.body.appendChild(newString);
      }

      let createUserInfo = () => {
        let profileInfo = document.createElement('p');
        profileInfo.innerHTML = userInfo;
        document.body.appendChild(profileInfo);
      }

      let createName = () => {
        let profileName = document.createElement('h1');
        profileName.innerHTML = name;
        document.body.appendChild(profileName);
      }

      let createNewDate = () => {
        let currentDate = document.createElement('h3');
        currentDate.innerHTML = requestDate;
        document.body.appendChild(currentDate);
      }

      preloader.style.display = 'none';
      createUserAvatar();
      createName();
      createUserInfo();
      createNewDate();
  } else {
    alert('Информация о пользователе не доступна');
  }
})

.catch(err => alert(err + ' Информация о пользователе не доступна'));
