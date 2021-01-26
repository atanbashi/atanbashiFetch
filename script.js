// let body = document.body;
//
// let url = window.location.toString();

// let getUserName = (url) => {
//   let getUrl = url.split('=');
//   let userName = getUrl[1];
//   if (userName == undefined) {
//     userName = 'atanbashi';
//   }
//   return userName;
// }

// let name = getUserName(url);

fetch('https://api.github.com/users/' + name)
  .then(res => res.json())
  .then(json => {
    if (json.message === "Not Found") {
      throw json.message;
    }
    let avatar = json.avatar_url;
    let userName = json.name;
    let userInfo = json.bio;
    let createName = () => {
      let profileName = document.createElement('h1');
      profileName.innerHTML = userName;
      body.appendChild(profileName);
    }
    let createUserInfo = () => {
      let profileInfo = document.createElement('p');
      profileInfo.innerHTML = userInfo;
    }
    let createUserAvatar = () => {
      let userAvatar = document.createElement('img');
      let newString = document.createElement('br');
      userAvatar.src = avatar;
      body.appendChild(userAvatar);
      body.appendChild(newString);
    }
    createName();
    createUserInfo();
    createUserAvatar();
  })

  .catch(err => alert('Информация о пользователе не доступна'));
