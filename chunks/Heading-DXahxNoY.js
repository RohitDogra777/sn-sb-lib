import { e as _defineProperty, i, d as _taggedTemplateLiteral, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, s } from './lit-element-DUGu5L1q.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
/**
 * Service Now Heading Component
 * @input label, type
 * @output <sn-wc-heading> in dom
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
    _this.surface = "Dark";
    loadGilroyFont();
    return _this;
  }
  _createClass(ODSHeading, [{
    key: "getHeading",
    value: function getHeading(surface) {
      var mode = surface == "Dark" ? "dark-surface" : "white-surface";
      if (this["heading-level"] == "1") {
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["<h1\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h1>"])), ["sn-wc-heading", mode].join(" "));
      }
      if (this["heading-level"] == "2") {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<h2\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h2>"])), ["sn-wc-heading", mode].join(" "));
      }
      if (this["heading-level"] == "3") {
        return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<h3\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h3>"])), ["sn-wc-heading", mode].join(" "));
      }
      if (this["heading-level"] == "4") {
        return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<h4\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h4>"])), ["sn-wc-heading", mode].join(" "));
      }
      if (this["heading-level"] == "5") {
        return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<h5\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h5>"])), ["sn-wc-heading", mode].join(" "));
      }
      if (this["heading-level"] == "6") {
        return x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<h6\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h6>"])), ["sn-wc-heading", mode].join(" "));
      }
      return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<h1\n      part=\"sn-wc-heading\"\n      class=", "\n    >\n      <slot></slot>\n    </h1>"])), ["sn-wc-heading", mode].join(" "));
    }
  }, {
    key: "render",
    value: function render() {
      return x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          font-family: \"gilroy\";\n          font-weight: 600;\n          margin: 0px;\n          padding: 0px;\n          box-sizing:border-box;\n        }\n        :host{\n          font-size: var(--sn-wc-font-size);\n          line-height: var(--sn-wc-line-height);\n        }\n        .sn-wc-heading {\n          padding: var(--sn-wc-padding-top,0px) var(--sn-wc-padding-end,0px) var(--sn-wc-padding-bottom,0px) var(--sn-wc-padding-start,0px);\n          margin: var(--sn-wc-margin-top,0px) var(--sn-wc-margin-end,0px) var(--sn-wc-margin-bottom,0px) var(--sn-wc-margin-start,0px);\n          color: var(--sn-wc-color,#1f1f1f);\n        }\n        .white-surface {\n          color: #ffffff;\n        }\n        .dark-surface {\n          color: #1f1f1f;\n        }\n      </style>\n      ", "\n    "])), this.getHeading(this.surface));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        surface: {
          type: String
        },
        "heading-level": {
          type: String
        }
      };
    }
  }]);
  return ODSHeading;
}(s);
_defineProperty(ODSHeading, "styles", i(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    :host {\n      --sn-wc-margin-bottom: 0px;\n    }\n  "]))));
customElements.define("ods-heading", ODSHeading);

export { ODSHeading };
