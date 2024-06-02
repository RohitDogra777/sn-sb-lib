import { f as _defineProperty, _ as _inherits, a as _createClass, g as colorAliases, x, b as _taggedTemplateLiteral, s, c as _classCallCheck, d as _callSuper } from './ColorAliases-BNiWx0rE.js';

var _templateObject;
var OdsIcon = /*#__PURE__*/function (_LitElement) {
  function OdsIcon() {
    var _this;
    _classCallCheck(this, OdsIcon);
    _this = _callSuper(this, OdsIcon);
    _this.size = 'MD';
    _this.name = 'placeholder';
    _this.color = '';
    return _this;
  }
  _inherits(OdsIcon, _LitElement);
  return _createClass(OdsIcon, [{
    key: "render",
    value: function render() {
      var svg = 'x_snc_ods.' + this.name + '.svg';
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <style>\n        :host{\n          display: inline-flex;\n        }\n        .ods-icon{\n            display: inline-flex;\n            background-color: ", ";\n            -webkit-mask: url(", ") no-repeat center;\n            mask: url(", ") no-repeat center;\n            --ods-sem-icon-small:     16px;\n            --ods-sem-icon-medium:    24px;\n            --ods-sem-icon-large:     32px;\n            mask-size: 100%;\n        }\n        .ods-icon--sm{\n          height: var(--ods-sem-icon-small);\n          width:  var(--ods-sem-icon-small);\n        }\n        .ods-icon--md{\n          height: var(--ods-sem-icon-medium);\n          width:  var(--ods-sem-icon-medium);\n        }\n        .ods-icon--lg{\n          height: var(--ods-sem-icon-large);\n          width:  var(--ods-sem-icon-large);    \n        }\n        </style>\n        <div part=\"odsIcon\" class=\"ods-icon ods-icon--", " ", "-bg-color\"></div>\n        "])), this.color && this.color !== "" && this.color !== "undefined" ? this.color : "#1B1B1B", svg, svg, this.size.toLocaleLowerCase(), this.color);
    }
  }]);
}(s);
_defineProperty(OdsIcon, "properties", {
  size: {
    type: String
  },
  name: {
    type: String
  },
  color: {
    type: String
  }
});
_defineProperty(OdsIcon, "styles", [colorAliases]);
customElements.define('ods-icon', OdsIcon);

export { OdsIcon };
