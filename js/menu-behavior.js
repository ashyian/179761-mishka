"use strict";

window.menuBehavior = (function () {

  var tabletWidth = 768;
  var menu = document.querySelector(".menu");
  var menuItems = document.querySelectorAll(".menu__item");
  var menuButton = document.querySelector(".menu-toggle");
  var closeIcon = document.querySelector(".menu-toggle__icon--close");
  var openIcon = document.querySelector(".menu-toggle__icon--open");

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
    var isOpen = openIcon.classList.contains("hidden");
    isOpen ? closeIcon.classList.add("hidden") : closeIcon.classList.remove("hidden");
    isOpen ? openIcon.classList.remove("hidden") : openIcon.classList.add("hidden");
    isOpen ? menuClose() : menuOpen();
  }

  return {

    init: function () {
      // сhange position of menu depending on the screen size
      sizeChangeHandler();
      window.addEventListener("resize", sizeChangeHandler);

      // hide open icon and show close icon by default
      closeIcon.classList.add("hidden");
      openIcon.classList.remove("hidden");

      // close menu by default
      menuClose();

      // subscribe menu button to control event
      menuButton.addEventListener("click", menuControlHandler);
    }

  };

})();
