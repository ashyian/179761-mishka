"use strict";

window.googleMap = (function () {

  // replace map image by google map
  function replaceMap() {
    var map = document.createElement("iframe");
    map.className = "googleMap";
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5991043651616!2d30.320894616100638!3d59.938794181876204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2sBolshaya+Konyushennaya+ul.%2C+19%2C+Sankt-Peterburg%2C+191186!5e0!3m2!1sen!2sru!4v1498071689622";
    map.allowfullscreen = true;
    map.frameborder = "0";
    map.style.border = "none";
    map.style.height = "457px";

    var image = document.querySelector(".map__container");
    var wrapper = document.querySelector(".map");
    wrapper.replaceChild(map, image);

    var pin = document.querySelector(".map__pin");
    pin.style.display = "none";
  }

  // changing sizes of google map depending on the screen size
  function sizeChangeHandler() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var map = document.querySelector(".googleMap");
    if (width >= 1150) {
      map.style.width = "525px";
    }
    else if (width >= 768) {
      map.style.width = "768px";
    }
    else {
      map.style.width = "320px";
    }
  }

  return {

    init: function () {
      replaceMap();
      sizeChangeHandler();
      window.addEventListener("resize", sizeChangeHandler);
    }

  };

})();
