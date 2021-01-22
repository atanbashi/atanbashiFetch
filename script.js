fetch('https://api.github.com/users/6thSence')
  .then(res => res.json())
  .then(json => console.log(json.name))
  .then(json => console.log(json.bio))
  .catch(err => console.log(err));
