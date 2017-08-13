var meta = document.createElement("meta");
meta.name = "viewport";
var i = window.devicePixelRatio > 1 ? 1 / window.devicePixelRatio : 1;
meta.content = 'width=device-width,user-scalable=no,initial-scale=' + i + ',maximum-scale=' + i + ',minimum-scale=' + i;
document.head.appendChild(meta);

var html = document.getElementsByTagName('html')[0];
var iW = window.innerWidth;
var i = iW / 18;
html.style.fontSize = i + 'px'; //60