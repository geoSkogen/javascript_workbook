window.onload = initClick;

function initClick() {


  var but = document.getElementById("home");
  var a = document.getElementsByTagName("a")[0];
  var href = a.getAttribute("href");
    clickLink(but, href);


  function clickLink(elm, url) {
    elm.onclick = function () { location.assign(url); };
  }

}
