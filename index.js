/**
 * Import Web components chunks on Demand
 */
function loadWebComponents() {
  /**
   * Load Avatar Component if Used in DOM
   * */
  if (document.querySelector("ods-avatar")) {
    import('./chunks/Avatar-_VuVmiv9.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import('./chunks/Heading-C2ZhQ64l.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import('./chunks/Text-BmczhIpE.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import('./chunks/Icon-CH8z55jr.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Button Component If used in DOM
   */
  if (document.querySelector("ods-button")) {
    import('./chunks/Button-BgRgogRn.js').then(function () {
      console.log("Button Component Chunk Loaded");
    });
  }

  /**
   * Load Container Component If used in DOM
   */
  if (document.querySelector("ods-container")) {
    import('./chunks/Container-DF2c84FE.js').then(function () {
      console.log("Container Component Chunk Loaded");
    });
  }

  /**
   * Load Text Field Component
   */
  if (document.querySelector("ods-text-field")) {
    import('./chunks/TextField-994kokya.js').then(function () {
      console.log("Text Field Component Chunk Loaded");
    });
  }

  /**
   * Load Text Field Component
   */
  if (document.querySelector("ods-tooltip")) {
    import('./chunks/Tooltip-D-a92x4g.js').then(function () {
      console.log("Text Field Component Chunk Loaded");
    });
  }
}

/**
 * Keep sensing DOM
 */
var intervalId = setInterval(function () {
  loadWebComponents();
  console.log(document.readyState);
  if (document.readyState === 'complete') {
    clearInterval(intervalId);
  }
}, 100);
