"use strict";

window.modalBehavior = (function () {

  var modal = document.querySelector(".modal");

  function openModalHandler() {
    modal.classList.remove("hidden");
  }

  function closeModalHandler() {
    modal.classList.add("hidden");
  }

  return {

    init: function () {
      // subscribe buttons to open modal window event
      var btnWeekly = document.querySelector(".button--weekly");
      if (btnWeekly !== null) {
        btnWeekly.addEventListener("click", openModalHandler);
      }
      var btnProduct = document.querySelectorAll(".product__buy-link");
      if (btnProduct !== null) {
        for (var i = 0; i < btnProduct.length; i++) {
          btnProduct[i].addEventListener("click", openModalHandler);
        }
      }

      // subscribe buttons to close modal window event
      var btnAddToCart = document.querySelector(".button--add");
      if (btnAddToCart !== null) {
        btnAddToCart.addEventListener("click", closeModalHandler);
      }
    }

  };

})();
