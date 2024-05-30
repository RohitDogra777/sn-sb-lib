var base_url = "https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v4.0.2";
/**
 * Import Web components chunks on Demand
 */
function loadWebComponents() {
  /**
   * Load Avatar Component if Used in DOM
   * */
  if (document.querySelector("ods-avatar")) {
    import(`${base_url}/chunks/Avatar-gv9zMiff.js`).then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import(`${base_url}/chunks/Heading-C2ZhQ64l.js`).then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import(`${base_url}/chunks/Text-BmczhIpE.js`).then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import(`${base_url}/chunks/Icon-CH8z55jr.js`).then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Button Component If used in DOM
   */
  if (document.querySelector("ods-button")) {
    import(`${base_url}/chunks/Button-BgRgogRn.js`).then(function () {
      console.log("Button Component Chunk Loaded");
    });
  }

  /**
   * Load Container Component If used in DOM
   */
  if (document.querySelector("ods-container")) {
    import(`${base_url}/chunks/Container-DF2c84FE.js`).then(function () {
      console.log("Container Component Chunk Loaded");
    });
  }

  /**
   * Load Text Field Component
   */
  if (document.querySelector("ods-text-field")) {
    import(`${base_url}/chunks/TextField-994kokya.js`).then(function () {
      console.log("Text Field Component Chunk Loaded");
    });
  }

  /**
   * Load Text Field Component
   */
  if (document.querySelector("ods-tooltip")) {
    import(`${base_url}/chunks/Tooltip-D-a92x4g.js`).then(function () {
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
      setTimeout(function(){clearInterval(intervalId)},5000);
  }
}, 100);
