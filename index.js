/**
 * Import Web components chunks on Demand
 */
function loadWebComponents () {
  /**
   * Load Avatar Component if Used in DOM Test
   * */
  if (document.querySelector("ods-avatar")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.7/chunks/Avatar-BkeLH5Vq.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.7/chunks/Heading-Dn016aUz.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.7/chunks/Text-DKPqFkRo.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.7/chunks/Icon-YiZtAaer.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Link Component If used in DOM
   */
  if (document.querySelector("ods-link")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.7/chunks/Link-CE6NU8R5.js').then(function () {
      console.log("Link Component Chunk Loaded");
    });
  }

  /**
   * Load Card Component If used in DOM
   */
  if (document.querySelector("ods-card")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.7/chunks/Card-uUUl9Q5m.js').then(function () {
      console.log("Card Component Chunk Loaded");
    });
  }
}

/**
 * Set Interval
 */
var intervalId = setInterval(function(){
      console.log(intervalId);
        if(document.readyState === 'complete'){
           loadWebComponents();
           clearInterval(intervalId);
        }
},500);
