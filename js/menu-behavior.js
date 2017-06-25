"use strict";

window.menuBehavior = (function () {

  var tabletWidth = 768;
  var isOpen = false;
  var menu1 = document.querySelector(".menu-1");
  var menu2 = document.querySelector(".menu-2");
  var menuButton = document.querySelector(".menu-toggle");
  var menuIcon = document.querySelector(".menu-toggle__icon");
  var closeIconSrc = "img/icon-menu-close.svg";
  var openIconSrc = "img/icon-menu-open.svg";

  function menuClose() {
    menu1.classList.add("hidden");
    menu2.classList.add("hidden");
  }

  function menuOpen() {
    menu1.classList.remove("hidden");
    menu2.classList.remove("hidden");
  }

  // make menu not inline in mobile version
  function sizeChangeHandler() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    width < tabletWidth ? menu1.classList.add("not-inline-1") : menu1.classList.remove("not-inline-1");
    width < tabletWidth ? menu2.classList.add("not-inline-2") : menu2.classList.remove("not-inline-2");
  }

  // open and close menu by hamburger button clicking
  function menuControlHandler(event) {
    isOpen ? menuIcon.src = openIconSrc : menuIcon.src = closeIconSrc;
    isOpen ? menuClose() : menuOpen();
    isOpen = isOpen ? false : true;
  }

  return {

    init: function () {
      // сhange position of menu depending on the screen size
      sizeChangeHandler();
      window.addEventListener("resize", sizeChangeHandler);

      // show close icon by default
      menuIcon.src = openIconSrc;

      // close menu by default
      menuClose();

      // subscribe menu button to control event
      menuButton.addEventListener("click", menuControlHandler);
    }

  };

})();
