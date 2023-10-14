xhr = new XMLHTTPRequest;
xhr.responseType = "document";
xhr.open("GET", "http://ip4.me/api/");
xhr.send();
console.log(xhr.response);
console.log(xhr.responseText);