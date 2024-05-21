/**
 * Import Web components chunks on Demand
 */
function loadWebComponents () {
  console.info("Load web components");
  /**
   * Load Avatar Component if Used in DOM Test
   * */
  if (document.querySelector("ods-avatar")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.8/chunks/Avatar-BkeLH5Vq.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }

  /**
   * Load Heading Component If used in DOM
   */
  if (document.querySelector("ods-heading")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.8/chunks/Heading-Dn016aUz.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }

  /**
   * Load Text Component If used in DOM
   */
  if (document.querySelector("ods-text")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.8/chunks/Text-DKPqFkRo.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }

  /**
   * Load Icon Component If used in DOM
   */
  if (document.querySelector("ods-icon")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.8/chunks/Icon-YiZtAaer.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
  /**
   * Load Link Component If used in DOM
   */
  if (document.querySelector("ods-link")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.8/chunks/Link-CE6NU8R5.js').then(function () {
      console.log("Link Component Chunk Loaded");
    });
  }

  /**
   * Load Card Component If used in DOM
   */
  if (document.querySelector("ods-card")) {
    import('https://cdn.jsdelivr.net/gh/RohitDogra777/sn-sb-lib@v2.0.8/chunks/Card-uUUl9Q5m.js').then(function () {
      console.log("Card Component Chunk Loaded");
    });
  }
}

/**
 * Set Interval
 */
var intervalId = setInterval(function(){
      console.log("Interval Call=",intervalId);
        if(document.readyState === 'complete'){
           loadWebComponents();
           setTimeout(function(){
            clearInterval(intervalId);
           },3000);
        }
},500);
