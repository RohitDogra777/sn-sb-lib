/**
 * Import Web components chunks on Demand
 */
window.addEventListener("DOMContentLoaded", function (event) {
  /**
   * Load Avatar Component if Used in DOM
   * */
  if (document.querySelector("ods-avatar")) {
    import('./chunks/Avatar-DnNyEnTp.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import('./chunks/Heading-DXahxNoY.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import('./chunks/Text-BaUczxyq.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import('./chunks/Icon-DSpRmC1a.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Link Component If used in DOM
   */
  if (document.querySelector("ods-link")) {
    import('./chunks/Link-BDZkGN0R.js').then(function () {
      console.log("Link Component Chunk Loaded");
    });
  }

  /**
   * Load Card Component If used in DOM
   */
  if (document.querySelector("ods-card")) {
    import('./chunks/Card-Df3P5Ukq.js').then(function () {
      console.log("Card Component Chunk Loaded");
    });
  }
});
