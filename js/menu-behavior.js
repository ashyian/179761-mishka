"use strict";

window.menuBehavior = (function () {

  var tabletWidth = 768;
  var isOpen = false;
  var menu = document.querySelector(".menu");
  var menuItems = document.querySelectorAll(".menu__item");
  var menuButton = document.querySelector(".menu-toggle");
  var menuIcon = document.querySelector(".menu-toggle__icon");
  var closeIconSrc = "img/icon-menu-close.svg";
  var openIconSrc = "img/icon-menu-open.svg";

  function menuClose() {
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add("hidden");
    }
  }

  function menuOpen() {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].classList[1] !== "menu__item--new" &&
          menuItems[i].classList[1] !== "menu__item--sale") {
        menuItems[i].classList.remove("hidden");
      }
    }
  }

  // make menu not inline in mobile version
  function sizeChangeHandler() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    width < tabletWidth ? menu.classList.add("not-inline") : menu.classList.remove("not-inline");
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
