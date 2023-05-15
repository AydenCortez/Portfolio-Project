function getCurrentURL () {
    return window.location.href
  }

getCurrentURL ()

const url = getCurrentURL();

if (document.URL.includes("index.html")) {
    var index;
    var nav = document.getElementsByClassName('navigation');
    for (index = 0; index < nav.length; ++index) {
        nav[index].style.color = "#FFFFFF"
    }
};
