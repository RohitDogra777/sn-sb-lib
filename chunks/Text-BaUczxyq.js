import { e as _defineProperty, i, d as _taggedTemplateLiteral, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, s } from './lit-element-DUGu5L1q.js';

var _templateObject, _templateObject2;
// import './fonts/fonts.css';
/**
 * Service Now Text Component
 * @input label, type
 * @output <sn-wc-text> in dom
 */

var hasLoadedMaterialSymbolsFont = false;
var loadLatoFont = function loadLatoFont() {
  if (hasLoadedMaterialSymbolsFont) {
    return;
  }
  hasLoadedMaterialSymbolsFont = true;
  var fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync("\n  @font-face {\n    font-family: 'lato';\n    src: url(https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff) format('woff');\n    font-weight: normal;\n  }");
  document.adoptedStyleSheets.push(fontSheet);
};
var ODSText = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSText, _LitElement);
  function ODSText() {
    var _this;
    _classCallCheck(this, ODSText);
    _this = _callSuper(this, ODSText);
    loadLatoFont();
    return _this;
  }
  _createClass(ODSText, [{
    key: "render",
    value: function render() {
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <style>\n    *{\n      padding: 0;\n      margin: 0;\n      box-sizing:border-box;\n      font-family:'lato' !important;\n    }\n    :host{\n      letter-spacing:var(--sn-wc-letter-spacing);\n    }\n    .para-text{\n        color: var(--sn-wc-color,#1f1f1f);\n        line-height: var(--sn-wc-line-height, 24px);\n        font-size: var(--sn-wc-font-size, 16px);\n        padding: var(--sn-wc-padding-top,0px) var(--sn-wc-padding-end,0px) var(--sn-wc-padding-bottom,0px) var(--sn-wc-padding-start,0px);\n        margin: var(--sn-wc-margin-top,0px) var(--sn-wc-margin-end,0px) var(--sn-wc-margin-bottom,0px) var(--sn-wc-margin-start,0px);\n      }\n    </style>\n      <p class='para-text'>\n        <slot></slot>\n      </p>\n    "])));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        label: {
          type: String
        },
        styles: {
          type: Object
        }
      };
    }
  }]);
  return ODSText;
}(s);
_defineProperty(ODSText, "styles", i(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  "]))));
customElements.define("ods-text", ODSText);

export { ODSText };
