"use strict";

window.menuBehavior = (function () {

  var tabletWidth = 768;
  var menu = document.querySelector(".menu");
  var menuItems = document.querySelectorAll(".menu__item");
  var menuBtns = document.querySelectorAll(".menu-toggle");
  var closeBtn = document.querySelector(".menu-toggle--close");
  var openBtn = document.querySelector(".menu-toggle--open");

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
    var isOpen = openBtn.classList.contains("hidden");
    isOpen ? closeBtn.classList.add("hidden") : closeBtn.classList.remove("hidden");
    isOpen ? openBtn.classList.remove("hidden") : openBtn.classList.add("hidden");
    isOpen ? menuClose() : menuOpen();
  }

  return {

    init: function () {
      // сhange position of menu depending on the screen size
      sizeChangeHandler();
      window.addEventListener("resize", sizeChangeHandler);

      // hide open icon and show close icon by default
      closeBtn.classList.add("hidden");
      openBtn.classList.remove("hidden");

      // close menu by default
      menuClose();

      // subscribe menu button to control event
      for (var i = 0; i < menuBtns.length; i++) {
        menuBtns[i].addEventListener("click", menuControlHandler);
      }
    }

  };

})();
