/**
 * Import Web components chunks on Demand
 */
function loadWebComponents() {
  /**
   * Load Avatar Component if Used in DOM
   * */
  if (document.querySelector("ods-avatar")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v3.0.0/chunks/Avatar-LNIklOIX.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v3.0.0/chunks/Heading-wKT0e24g.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v3.0.0/chunks/Text-C6-S6tLh.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v3.0.0/chunks/Icon-CjWNPvlv.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Button Component If used in DOM
   */
  if (document.querySelector("ods-button")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v3.0.0/chunks/Button-2nPJ1Pk3.js').then(function () {
      console.log("Button Component Chunk Loaded");
    });
  }

  /**
   * Load Container Component If used in DOM
   */
  if (document.querySelector("ods-container")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v3.0.0/chunks/Container-C_Co7DJ7.js').then(function () {
      console.log("Container Component Chunk Loaded");
    });
  }
}

/**
 * Keep sensing DOM
 */
var intervalId = setInterval(function () {
  if (document.readyState === 'complete') {
    loadWebComponents();
    clearInterval(intervalId);
  }
}, 100);
