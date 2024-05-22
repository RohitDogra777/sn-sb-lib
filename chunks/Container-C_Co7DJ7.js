import { _ as _inherits, b as _classCallCheck, c as _callSuper, a as _createClass, f as _wrapNativeSuper, e as _defineProperty, i, d as _taggedTemplateLiteral, x, s } from './lit-element-DOIq0PaO.js';
import './Text-C6-S6tLh.js';
import './Heading-wKT0e24g.js';
import './ColorAliases-BHKFUM47.js';

var ButtonClickEvent = /*#__PURE__*/function (_Event) {
  _inherits(ButtonClickEvent, _Event);
  function ButtonClickEvent(detail) {
    var _this;
    _classCallCheck(this, ButtonClickEvent);
    _this = _callSuper(this, ButtonClickEvent, ["btn-click-event", {
      bubbles: true,
      composed: true
    }]);
    _this.detail = detail;
    return _this;
  }
  return _createClass(ButtonClickEvent);
}( /*#__PURE__*/_wrapNativeSuper(Event));

var _templateObject$2, _templateObject2$2, _templateObject3, _templateObject4;

/**
 * Service Now Link Component
 * @input label, type, onclick
 * @output <sn-wc-link> in dom
 * @args onClick, type, size, target, href
 */
var hasLoadedMaterialSymbolsFont = false;
var loadLatoFont = function loadLatoFont() {
  if (hasLoadedMaterialSymbolsFont) {
    return;
  }
  hasLoadedMaterialSymbolsFont = true;
  var fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync("\n  @font-face{font-family:lato;font-style:normal;font-weight:700;src:local('Lato'),url(https://fonts.cdnfonts.com/s/14882/Lato-Bold.woff) format('woff')}");
  document.adoptedStyleSheets.push(fontSheet);
};
var ODSLink = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSLink, _LitElement);
  function ODSLink() {
    var _this;
    _classCallCheck(this, ODSLink);
    _this = _callSuper(this, ODSLink);
    loadLatoFont();
    return _this;
  }
  _createClass(ODSLink, [{
    key: "handleButtonClick",
    value: function handleButtonClick(e) {
      this.dispatchEvent(new ButtonClickEvent({
        message: "Link Button clicked"
      }));
    }
  }, {
    key: "getAnchorTag",
    value: function getAnchorTag() {
      var size = "";
      var linkSize = "";
      if (this.size == "Large") {
        size = "btn-lg";
        linkSize = "btn-link-lg";
      } else if (this.size == "Medium") {
        size = "btn-md";
        linkSize = "btn-link-md";
      }
      if (this.type === "Outline" || this.type === "Solid") {
        var btnClass = "btn";
        if (this.type === "Outline") {
          btnClass = btnClass + " btn-outline";
        } else {
          btnClass = btnClass + " btn-solid";
        }
        return x(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["<button\n        type=\"button\"\n        part=\"sn-wc-link\"\n        @click=\"", "\"\n        class=", "\n      >\n        ", "\n      </button>"])), this.handleButtonClick, [btnClass, size, "btn-spacing"].join(" "), this.label);
      } else {
        return x(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        <a\n          part=\"sn-wc-link\"\n          href=\"", "\"\n          class=", "\n          style=\"--sn-wc-padding-y: 0px;\"\n          target=\"", "\"\n        >\n          ", "\n        </a>\n      "])), this.href, ["btn btn-link", linkSize, "btn-spacing"].join(" "), this.target, this.label);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <style>\n        *{\n          padding:0;\n          margin:0;\n          box-sizing:border-box;\n        }\n          a,button {\n          font-family:'lato', sans-serif !important;\n          }\n            .btn {\n               --sn-btn-padding-x: 16px;\n               --sn-btn-padding-y: 4px;\n               --sn-btn-font-family: Lato;\n               --sn-btn-font-size: 16px;\n               --sn-btn-font-weight: 700;\n               --sn-btn-line-height: 1.5;\n               --sn-btn-color: #212529;\n               --sn-btn-bg: transparent;\n               --sn-btn-border-width: 1px;\n               --sn-btn-border-color: #298319;\n               --sn-btn-border-radius: 50rem;\n               --sn-btn-hover-border-color: transparent;\n               --sn-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n               --sn-btn-hover-color:  #1f6213;\n               --sn-link-hover-color: #1F6213;\n               --sn-link-color: #298319;\n               --sn-btn-disabled-opacity: 0.65;\n               --sn-btn-focus-box-shadow: 0 0 0 0.25rem\n                  rgba(var(--sn-btn-focus-shadow-rgb), 0.5);\n                display: inline-block;\n                padding: var(--sn-btn-padding-y) var(--sn-btn-padding-x);\n                font-family: var(--sn-btn-font-family);\n                font-size: var(--sn-btn-font-size);\n                font-weight: var(--sn-btn-font-weight);\n                line-height: 24px;\n                color: var(--sn-btn-color);\n                text-align: center;\n                text-decoration: none;\n                vertical-align: middle;\n                cursor: pointer;\n                user-select: none;\n                border: var(--sn-btn-border-width) solid var(--sn-btn-border-color);\n                border-radius: var(--sn-btn-border-radius);\n                background-color: var(--sn-btn-bg);\n                transition: color 0.15s ease-in-out,\n                  background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n                  box-shadow 0.15s ease-in-out;\n              }\n              .btn:hover {\n                color: var(--sn-btn-hover-color);\n                background-color: var(--sn-btn-hover-bg);\n                border-color: var(--sn-btn-hover-border-color);\n\n              }\n              .btn:focus-visible {\n                color: var(--sn-btn-hover-color);\n                background-color: var(--sn-btn-hover-bg);\n                border-color: var(--sn-btn-hover-border-color);\n                outline: 0;\n                box-shadow: var(--sn-btn-focus-box-shadow);\n              }\n              .btn.active {\n                color: var(--sn-btn-active-color);\n                background-color: var(--sn-btn-active-bg);\n                border-color: var(--sn-btn-active-border-color);\n              }\n\n              .btn-solid {\n               --sn-btn-color: #fff;\n               --sn-btn-bg: #298319;\n               --sn-btn-border-color:var(--sn-btn-border-color);\n               --sn-btn-hover-color: #fff;\n               --sn-btn-hover-bg: #1f6213;\n               --sn-btn-hover-border-color: #1f6213;\n               --sn-btn-focus-shadow-rgb: 212, 38, 119;\n               --sn-btn-active-color: #fff;\n               --sn-btn-active-bg: #1f6213;\n               --sn-btn-active-border-color: #1f6213;\n               --sn-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n\n              }\n              .btn-outline {\n               --sn-btn-color: #298319;\n               --sn-btn-border-color: #298319;\n               --sn-btn-hover-color: #1f6213;\n               --sn-btn-hover-bg: #fffff;\n               --sn-btn-hover-border-color: #1f6213;\n               --sn-btn-focus-shadow-rgb: 25, 135, 84;\n               --sn-btn-active-color: #fff;\n               --sn-btn-active-bg: #fff;\n               --sn-btn-active-border-color: #198754;\n               --sn-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n               --sn-gradient: none;\n              }\n\n              .btn-link {\n               --sn-btn-font-weight: bold;\n               --sn-btn-color: var(--sn-link-color);\n               --sn-btn-bg: transparent;\n               --sn-btn-border-color: transparent;\n               --sn-btn-hover-color: var(--sn-link-hover-color);\n               --sn-btn-hover-border-color: transparent;\n               --sn-btn-active-color: var(--sn-link-hover-color);\n               --sn-btn-active-border-color: transparent;\n               --sn-btn-box-shadow: none;\n               --sn-btn-focus-shadow-rgb: 212, 38, 119;\n               --sn-btn-padding-x: 0;\n                text-decoration: none;\n              }\n              .btn-link:focus-visible {\n                color: var(--sn-btn-color);\n              }\n              .btn-link:hover {\n                color: var(--sn-btn-hover-color);\n              }\n\n              .btn-lg {\n               --sn-btn-padding-y: 8px;\n               --sn-btn-padding-x: 32px;\n               --sn-btn-font-size: 24px;\n               --sn-btn-border-radius: 50rem;\n              }\n\n              .btn-md {\n               --sn-btn-padding-y: 6px;\n               --sn-btn-padding-x: 28px;\n               --sn-btn-font-size: 18px;\n               --sn-btn-border-radius: 50rem;\n              }\n              .btn-link-md{\n               --sn-btn-font-size:18px;\n               --sn-btn-border-radius: 0.25rem;\n              }\n              .btn-link-lg{\n               --sn-btn-font-size: 32px;\n               --sn-btn-border-radius: 0.5rem;\n              }\n      </style>\n      ", "\n    "])), this.getAnchorTag());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        label: {
          type: String
        },
        type: {
          type: String
        },
        onClick: {
          type: Function
        },
        size: {
          type: String
        },
        target: {
          type: String
        },
        href: {
          type: String
        }
      };
    }
  }]);
  return ODSLink;
}(s);
_defineProperty(ODSLink, "styles", i(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""]))));
customElements.define("ods-link", ODSLink);

var _templateObject$1, _templateObject2$1;
/**
 * Service Now Image Component
 * @input label, type
 * @output <sn-wc-image> in dom
 */
var ODSImage = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSImage, _LitElement);
  function ODSImage() {
    _classCallCheck(this, ODSImage);
    return _callSuper(this, ODSImage);
  }
  _createClass(ODSImage, [{
    key: "render",
    value: function render() {
      return x(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          margin:0;\n          padding:0;\n          box-sizing:border-box;\n        }\n        .sn-wc-image{ \n          object-fit: var(--sn-wc-object-fit,cover);\n          max-width:100%;\n          height: var(--sn-wc-height,100%);\n          width: var(--sn-wc-width,100%);\n        }\n      </style>\n      <picture>\n         <source media=\"(min-width:768px)\" srcset=\"", "\">\n         <source media=\"(min-width:568px)\" srcset=\"", "\">\n         <source media=\"(min-width:320px)\" srcset=\"", "\">\n         <img class=\"sn-wc-image\" src=\"", "\" alt=\"", "\" loading=\"", "\">\n      </picture>\n    "])), this['src'], this['src-medium'], this['src-small'], this['src'], this.alt, this.loading);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        "src": {
          type: String
        },
        'src-medium': {
          type: String
        },
        'src-small': {
          type: String
        },
        "loading": {
          type: String
        },
        "alt": {
          type: String
        }
      };
    }
  }]);
  return ODSImage;
}(s);
_defineProperty(ODSImage, "styles", i(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  "]))));
customElements.define("ods-image", ODSImage);

var _templateObject, _templateObject2;

/**
 * Service Now Text Component
 * @input label, type
 * @output <ods-container> in dom
 */
var OdsContainer = /*#__PURE__*/function (_LitElement) {
  _inherits(OdsContainer, _LitElement);
  function OdsContainer() {
    var _this;
    _classCallCheck(this, OdsContainer);
    _this = _callSuper(this, OdsContainer);
    _this.padding = 'L';
    return _this;
  }
  _createClass(OdsContainer, [{
    key: "render",
    value: function render() {
      var padding = this.padding.toLowerCase();
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n    <div class=\"ods-container ods-container--padding-", " ", "\">\n        <slot></slot>\n    </div>"])), padding, this.shadow ? 'ods-container--shadow' : '');
    }
  }]);
  return OdsContainer;
}(s);
_defineProperty(OdsContainer, "properties", {
  padding: {
    type: String
  },
  shadow: {
    type: Boolean
  }
});
_defineProperty(OdsContainer, "styles", i(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    * {\n      --ods-sem-space-none:         0px;\n      --ods-sem-space-medium:       16px;\n      --ods-sem-space-large:        24px;\n      --ods-border-radius-large:    16px;\n      --ods-shadow-small-x:         0px;\n      --ods-shadow-small-y:         2px;\n      --ods-shadow-small-blur:      4px;\n      --ods-shadow-small-spread:    0px;\n      --ods-shadow-small-color:     rgba(59, 59, 59, 0.25);\n      --ods-ref-color-gray-80:      #C5C5C5;\n      --ods-ref-color-gray-100:     #FFF;\n    }\n    .ods-container{\n      display: flex;\n      padding: var(--ods-sem-space-medium);\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--ods-sem-space-none);\n      border-radius: var(--ods-border-radius-large);\n      border: 1px solid var(--ods-ref-color-gray-80);\n      background: var(--ods-ref-color-gray-100);\n    }\n    \n    .ods-container--padding-m{\n      padding: var(--ods-sem-space-medium);\n    }\n    .ods-container--padding-l{\n      padding: var(--ods-sem-space-large);\n    }\n    .ods-container--padding-none{\n      padding: var(--ods-sem-space-none);\n      ::slotted(*) {\n        border-radius: var(--ods-border-radius-large);\n      }\n    }\n\n    .ods-container--shadow{\n      box-shadow: var(--ods-shadow-small-x) var(--ods-shadow-small-y) var(--ods-shadow-small-blur) var(--ods-shadow-small-spread) var(--ods-shadow-small-color);\n    }\n\n  "]))));
customElements.define("ods-container", OdsContainer);

export { OdsContainer };
