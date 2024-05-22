import { e as _defineProperty, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, d as _taggedTemplateLiteral, s as s$1 } from './lit-element-DOIq0PaO.js';
import { a as aliases, s, n } from './ColorAliases-BHKFUM47.js';

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
  _inherits(ODSHeading, _LitElement);
  function ODSHeading() {
    var _this;
    _classCallCheck(this, ODSHeading);
    _this = _callSuper(this, ODSHeading);
    loadGilroyFont();
    return _this;
  }
  _createClass(ODSHeading, [{
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
      return n(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          font-family: \"gilroy\", sans-serif;\n          font-weight: 600;\n          color: var(--", ");\n          color: ", ";\n        }\n    \n        .ods-heading--size-xxs {\n          font-size: 1rem;\n          line-height: 1.5rem;\n        }\n        \n        .ods-heading--size-xs{\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n        }\n    \n        .ods-heading--size-sm{\n          font-size: 1.5rem;\n          line-height: 2rem;  \n        }\n    \n        .ods-heading--size-md{\n          font-size: 2rem;\n          line-height: 2.5rem;\n        }\n    \n        .ods-heading--size-lg{\n          font-size: 2.5rem;\n          line-height: 3rem;\n        }\n       \n      \n      </style>\n      <", " part='odsHeading' class=\"ods-heading--size-", " ", "\">\n      <slot></slot>\n    </", ">\n    "])), this.color, this.color, htmlTag, this.size, this.color, htmlTag);
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
  return ODSHeading;
}(s$1);
_defineProperty(ODSHeading, "styles", [aliases]);
customElements.define("ods-heading", ODSHeading);

export { ODSHeading };
