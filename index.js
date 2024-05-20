/**
 * Import Web components chunks on Demand
 */
window.addEventListener("DOMContentLoaded", function (event) {
  /**
   * Load Avatar Component if Used in DOM
   * */
  if (document.querySelector("ods-avatar")) {
    import('./chunks/Avatar-BkeLH5Vq.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import('./chunks/Heading-Dn016aUz.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import('./chunks/Text-DKPqFkRo.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import('./chunks/Icon-YiZtAaer.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Link Component If used in DOM
   */
  if (document.querySelector("ods-link")) {
    import('./chunks/Link-CE6NU8R5.js').then(function () {
      console.log("Link Component Chunk Loaded");
    });
  }

  /**
   * Load Card Component If used in DOM
   */
  if (document.querySelector("ods-card")) {
    import('./chunks/Card-uUUl9Q5m.js').then(function () {
      console.log("Card Component Chunk Loaded");
    });
  }
});
