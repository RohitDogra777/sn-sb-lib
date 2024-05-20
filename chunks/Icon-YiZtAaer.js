import { e as _defineProperty, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, d as _taggedTemplateLiteral, s } from './lit-element-DOIq0PaO.js';

var _templateObject;
var OdsIcon = /*#__PURE__*/function (_LitElement) {
  _inherits(OdsIcon, _LitElement);
  function OdsIcon() {
    var _this;
    _classCallCheck(this, OdsIcon);
    _this = _callSuper(this, OdsIcon);
    _this.size = 'MD';
    _this.name = 'placeholder';
    _this.color = '';
    return _this;
  }
  _createClass(OdsIcon, [{
    key: "render",
    value: function render() {
      var svg = 'x_snc_ods.' + this.name + '.svg';
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <style>\n        \n        .ods-icon{\n            display: inline-flex;\n            background-color: ", ";\n            -webkit-mask: url(", ") no-repeat center;\n            mask: url(", ") no-repeat center;\n\n            --ods-sem-icon-small:     16px;\n            --ods-sem-icon-medium:    24px;\n            --ods-sem-icon-large:     32px;\n        }\n        .ods-icon--sm{\n\n                height: var(--ods-sem-icon-small);\n                width:  var(--ods-sem-icon-small);\n                mask-size:  var(--ods-sem-icon-small);\n                   \n        }\n        .ods-icon--md{\n\n                height: var(--ods-sem-icon-medium);\n                width:  var(--ods-sem-icon-medium);\n                mask-size:  var(--ods-sem-icon-medium);   \n        }\n        .ods-icon--lg{\n         \n                height: var(--ods-sem-icon-large);\n                width:  var(--ods-sem-icon-large);\n                mask-size:  var(--ods-sem-icon-large);\n              \n        }\n        </style>\n        <img part=\"odsIcon\" class=\"ods-icon ods-icon--", "\" />\n        "])), this.color && this.color !== "" && this.color !== "undefined" ? this.color : "#1B1B1B", svg, svg, this.size.toLocaleLowerCase());
    }
  }]);
  return OdsIcon;
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
customElements.define('ods-icon', OdsIcon);

export { OdsIcon };
