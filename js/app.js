/* Initializes other modules */

"use strict";

window.app = (function () {

  return {

    init: function () {
      window.menuBehavior.init();
      window.modalBehavior.init();
      window.googleMap.init();
    }
  };

})();

window.app.init();
