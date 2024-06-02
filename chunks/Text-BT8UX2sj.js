import { f as _defineProperty, _ as _inherits, a as _createClass, g as colorAliases, o as _get, p as _getPrototypeOf, b as _taggedTemplateLiteral, s as s$1, c as _classCallCheck, d as _callSuper } from './ColorAliases-BNiWx0rE.js';
import { s, n } from './static-8om-tG8X.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
// import './fonts/fonts.css';
/**
 * Service Now Text Component
 * @input html-tag, size, weight, color
 * @output <ods-text> in dom
 */

var hasLoadedMaterialSymbolsFont = false;
var loadLatoFont = function loadLatoFont() {
  if (hasLoadedMaterialSymbolsFont) {
    return;
  }
  hasLoadedMaterialSymbolsFont = true;
  var fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync("\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff) format('woff');\n      font-weight: normal;\n    }\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Bold.woff) format('woff');\n      font-weight: 700;\n    }\n    @font-face {\n      font-family: 'Roboto Mono';\n      font-style: normal;\n      font-weight: 400;\n      src: url('https://fonts.cdnfonts.com/s/16061/RobotoMono[wght].woff') format('woff');\n    }\n    @font-face {\n        font-family: 'Roboto Mono';\n        font-style: normal;\n        font-weight: 700;\n        src: url('https://fonts.cdnfonts.com/s/16061/RobotoMono-Bold.woff') format('woff');\n    }\n  ");
  document.adoptedStyleSheets.push(fontSheet);
};
var ODSText = /*#__PURE__*/function (_LitElement) {
  function ODSText() {
    var _this;
    _classCallCheck(this, ODSText);
    _this = _callSuper(this, ODSText);
    _this['html-tag'] = 'regular';
    _this.size = 'md';
    _this.weight = 'regular';
    _this.color = 'text-primary', _this["for"] = "";
    loadLatoFont();
    return _this;
  }
  _inherits(ODSText, _LitElement);
  return _createClass(ODSText, [{
    key: "updated",
    value: function updated() {
      _get(_getPrototypeOf(ODSText.prototype), "updated", this).call(this);
      var thisLabel = this.shadowRoot.querySelector(this['html-tag']);
      if ((this["for"] || this["for"] !== '') && this['html-tag'] === 'label') thisLabel.setAttribute('for', this["for"]);else thisLabel.removeAttribute('for');
    }
  }, {
    key: "render",
    value: function render() {
      var htmlTag = null;
      var size = this.size.toLowerCase();
      var weight = this.weight.toLowerCase();
      switch (this["html-tag"]) {
        case 'p':
          htmlTag = s(_templateObject || (_templateObject = _taggedTemplateLiteral(["p"])));
          break;
        case 'div':
          htmlTag = s(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["div"])));
          break;
        case 'code':
          htmlTag = s(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["code"])));
          break;
        case 'label':
          htmlTag = s(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["label"])));
          break;
        case 'span':
        default:
          htmlTag = s(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["span"])));
          break;
      }
      return n(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    \n    <style>\n    *{\n      color: var(--", ");\n      color: ", ";\n      margin: 0;\n      padding: 0;\n    }\n    ::slotted(a){\n        color:var(--ods-ref-color-green-40);\n    }\n    span, code, label{\n      display: inline;\n    }\n    p, div{\n      display: block;\n    }\n    span, p, div, label{\n      font-family: lato, Helvetica, Arial, sans-serif;\n    }\n    code{\n      font-family: \"Roboto Mono\", monospace;\n    }\n    .ods-text--size-sm{\n      font-size: 14px;\n      line-height: 22px;\n    }\n    .ods-text--size-md{\n      font-size: 16px;\n      line-height: 24px;\n    }\n    .ods-text--size-lg{\n      font-size: 20px;\n      line-height: 28px;\n    }\n    .ods-text--weight-regular{\n      font-weight: 400;\n    }\n    .ods-text--weight-bold{\n     \n      font-weight: 700;\n    }\n    </style>\n    <", " \n      part='odsText' \n      class=\"ods-text--weight-", " ods-text--size-", " ", " ", "\">\n      <slot></slot>\n    </", ">\n    "])), this.color, this.color, htmlTag, weight, size, this["html-tag"] === 'code' ? 'code' : '', this.color, htmlTag);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        "html-tag": {
          type: String
        },
        size: {
          type: String
        },
        weight: {
          type: String
        },
        color: {
          type: String
        },
        "for": {
          type: String
        }
      };
    }
  }]);
}(s$1);
_defineProperty(ODSText, "styles", [colorAliases]);
customElements.define("ods-text", ODSText);

export { ODSText };