let body = document.body;

let url = window.location.toString();

let getUserName = (url) => {
  let getUrl = url.split('=');
  let userName = getUrl[1];
  if (userName == undefined) {
    userName = 'atanbashi';
  }
  return userName;
}

let name = getUserName(url);

fetch('https://api.github.com/users/' + name)
  .then(res => res.json())
  .then(json => {
    let avatar = json.avatar_url;
    let userName = json.name;
    let userInfo = json.bio;
    let userUrl = json.html_url;
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
    let createUserUrl = () => {
      let profileUrl = document.createElement('a');
      let text = document.createTextNode('profile');
      let newString = document.createElement('br');
      profileUrl.href = userUrl;
      profileUrl.appendChild(text);
      body.appendChild(newString);
      body.appendChild(profileUrl);
    }
    createName();
    createUserInfo();
    createUserAvatar();
    createUserUrl();
  })

  .catch(err => alert('Информация о пользователе не доступна'));
