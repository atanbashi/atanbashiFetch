let body =document.body;

let url = window.location.toString();

let getDate = new Promise((resolve, reject) => {
 let date = new Date;
 setTimeout(() => { date ? resolve(date) : reject('Time didnt find')}, 2000);
});

getDate
 .then(date => console.log(date))
 .catch(err => console.log(error));

let getUserName = (url) => {
  let getUrl = url.split('=');
  let userName = getUrl[1];
  if (userName == undefined) {
    userName = 'atanbashi';
  }
  return userName;
}
