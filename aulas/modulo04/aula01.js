var xhr = new XMLHttpRequest();

//xhr.open("GET", "http://localhost:8080/api/v1/transportadora");
xhr.open("GET", "https://api.github.com/users/HeitorAmaral");

xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
