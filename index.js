/**
 * Load Avatar Component if Used in DOM
 */
function loadOdsAvatar() {
  if (document.querySelector("ods-avatar")) {
    import('./chunks/Avatar-T9Ee4N-Y.js').then(function () {
      console.log("Avatar Component Chunk Loaded");
    });
  }
}

/**
 * Load Heading Component If used in DOM
 */
function loadOdsHeading() {
  if (document.querySelector("ods-heading")) {
    import('./chunks/Heading-p48oyot3.js').then(function () {
      console.log("Heading Component Chunk Loaded");
    });
  }
}

/**
 * Load Text Component If used in DOM
 */
function loadOdsText() {
  if (document.querySelector("ods-text")) {
    import('./chunks/Text-BT8UX2sj.js').then(function () {
      console.log("Text Component Chunk Loaded");
    });
  }
}

/**
 * Load Icon Component If used in DOM
 */
function loadOdsIcon() {
  if (document.querySelector("ods-icon")) {
    import('./chunks/Icon-DCtJ6N8A.js').then(function () {
      console.log("Icon Component Chunk Loaded");
    });
  }
}

/**
 * Load Button Component If used in DOM
 */
function loadOdsButton() {
  if (document.querySelector("ods-button")) {
    import('./chunks/Button-RKnkBxzx.js').then(function () {
      console.log("Button Component Chunk Loaded");
    });
  }
}

/**
 * Load Container Component If used in DOM
 */
function loadOdsContainer() {
  if (document.querySelector("ods-container")) {
    import('./chunks/Container-oDyJdL8h.js').then(function () {
      console.log("Container Component Chunk Loaded");
    });
  }
}

/**
 * Load Text Field Component
 */
function loadOdsTextField() {
  if (document.querySelector("ods-text-field")) {
    import('./chunks/TextField-Cv04iQP7.js').then(function () {
      console.log("Text Field Component Chunk Loaded");
    });
  }
}

/**
 * Load Text Field Component
 */
function loadOdsTooltip() {
  if (document.querySelector("ods-tooltip")) {
    import('./chunks/Tooltip-DWWB1pU5.js').then(function () {
      console.log("Text Field Component Chunk Loaded");
    });
  }
}
window.ODS_WEB_COMPONENTS = {
  loadOdsAvatar: loadOdsAvatar,
  loadOdsButton: loadOdsButton,
  loadOdsContainer: loadOdsContainer,
  loadOdsHeading: loadOdsHeading,
  loadOdsIcon: loadOdsIcon,
  loadOdsText: loadOdsText,
  loadOdsTextField: loadOdsTextField,
  loadOdsTooltip: loadOdsTooltip
};
