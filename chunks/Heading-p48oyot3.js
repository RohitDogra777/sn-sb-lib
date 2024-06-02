import { f as _defineProperty, _ as _inherits, a as _createClass, g as colorAliases, b as _taggedTemplateLiteral, s as s$1, c as _classCallCheck, d as _callSuper } from './ColorAliases-BNiWx0rE.js';
import { s, n } from './static-8om-tG8X.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
/**
 * Service Now Heading Component
 * @input html-tag, size
 * @output <ods-heading> in dom
 */

var hasLoadedMaterialSymbolsFont = false;
var loadGilroyFont = function loadGilroyFont() {
  if (hasLoadedMaterialSymbolsFont) {
    return;
  }
  hasLoadedMaterialSymbolsFont = true;
  var fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync("\n  @font-face {\n    font-family: 'gilroy';\n    src: url(https://cdn.jsdelivr.net/gh/RohitDogra777/gilroy-font@v1.0.0/Gilroy-Semibold.woff) format('woff');\n    font-weight: normal;\n  }");
  document.adoptedStyleSheets.push(fontSheet);
};
var ODSHeading = /*#__PURE__*/function (_LitElement) {
  function ODSHeading() {
    var _this;
    _classCallCheck(this, ODSHeading);
    _this = _callSuper(this, ODSHeading);
    loadGilroyFont();
    return _this;
  }
  _inherits(ODSHeading, _LitElement);
  return _createClass(ODSHeading, [{
    key: "render",
    value: function render() {
      var htmlTag = null;
      switch (this["html-tag"]) {
        case 'h1':
          htmlTag = s(_templateObject || (_templateObject = _taggedTemplateLiteral(["h1"])));
          break;
        case 'h2':
          htmlTag = s(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["h2"])));
          break;
        case 'h4':
          htmlTag = s(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["h4"])));
          break;
        case 'h5':
          htmlTag = s(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["h5"])));
          break;
        case 'h6':
          htmlTag = s(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["h6"])));
          break;
        case 'h3':
        default:
          htmlTag = s(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["h3"])));
          break;
      }
      return n(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          font-family: \"gilroy\", sans-serif;\n          font-weight: 600;\n          color: var(--", ");\n          color: ", ";\n          margin: 0;\n          padding: 0;\n        }\n    \n        .ods-heading--size-xxs {\n          font-size: 16px;\n          line-height: 24px;\n        }\n        \n        .ods-heading--size-xs{\n          font-size: 20px;\n          line-height: 28px;\n        }\n    \n        .ods-heading--size-sm{\n          font-size: 24px;\n          line-height: 32px;\n        }\n    \n        .ods-heading--size-md{\n          font-size: 32px;\n          line-height: 40px;\n        }\n    \n        .ods-heading--size-lg{\n          font-size: 40px;\n          line-height: 48px;\n        }\n       \n      \n      </style>\n      <", " part='odsHeading' class=\"ods-heading--size-", " ", "\">\n      <slot></slot>\n    </", ">\n    "])), this.color, this.color, htmlTag, this.size, this.color, htmlTag);
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
        color: {
          type: String
        }
      };
    }
  }]);
}(s$1);
_defineProperty(ODSHeading, "styles", [colorAliases]);
customElements.define("ods-heading", ODSHeading);

export { ODSHeading };
