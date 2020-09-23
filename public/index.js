
const UrlLogin = 'auth/login';
const UrlVerify = 'auth/verify';

let jwt = undefined;


const login = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', UrlLogin, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    username: 'user01',
    password: 'somepass01'
  }));
  xhr.onload = function() {
    const data = JSON.parse(this.responseText);
    if (data && data.token) {
      jwt = data.token;
    }
    document.getElementById('login_debug').innerHTML = JSON.stringify(data, undefined, 2);
  }
};

const verify = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', UrlVerify, true);
  xhr.setRequestHeader('Authorization', 'Bearer ' + jwt);
  xhr.send();
  xhr.onload = function() {
    const data = JSON.parse(this.responseText);
    document.getElementById('verify_debug').innerHTML = JSON.stringify(data, undefined, 2);
  }
};
