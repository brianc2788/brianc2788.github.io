xr = new XMLHttpRequest()
xr.open("GET","/index.html")
ua = navigator.userAgent.toString()
headers = xr.getAllResponseHeaders().toString()
document.getElementById("xml1").innerText = ua + "\n" + headers
//document.alert("the thing finished.")
