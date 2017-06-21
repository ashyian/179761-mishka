/* Initializes other modules */

'use strict';

window.app = (function () {

  return {

    init: function () {
      window.menuBehavior.init();
    }
  };

})();

window.app.init();
