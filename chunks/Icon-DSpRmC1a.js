import { e as _defineProperty, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, d as _taggedTemplateLiteral, s } from './lit-element-DUGu5L1q.js';

var _templateObject;
var OdsIcon = /*#__PURE__*/function (_LitElement) {
  _inherits(OdsIcon, _LitElement);
  function OdsIcon() {
    var _this;
    _classCallCheck(this, OdsIcon);
    _this = _callSuper(this, OdsIcon);
    _this.size = 'M';
    _this.name = 'placeholder';
    _this.color = '';
    return _this;
  }
  _createClass(OdsIcon, [{
    key: "render",
    value: function render() {
      // const ICON_PATH = '/stories/assets/icons'; LOCAL DEV
      var ICON_PATH = './assets/icons'; //STORYBOOK
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <style>\n        .ods-icon{\n            display: inline-flex;\n            background-color: ", ";\n            -webkit-mask: url(", "/", ".svg) no-repeat center;\n            mask: url(", "/", ".svg) no-repeat center;\n\n            --ods-sem-icon-small:     16px;\n            --ods-sem-icon-medium:    24px;\n            --ods-sem-icon-large:     32px;\n        }\n        .ods-icon::before {\n            content: \"\";\n            display: block;\n            padding-top: 82%;\n          }\n        .ods-icon--s{\n\n                height: var(--ods-sem-icon-small);\n                width:  var(--ods-sem-icon-small);\n                mask-size:  var(--ods-sem-icon-small);\n                   \n        }\n        .ods-icon--m{\n\n                height: var(--ods-sem-icon-medium);\n                width:  var(--ods-sem-icon-medium);\n                mask-size:  var(--ods-sem-icon-medium);   \n        }\n        .ods-icon--l{\n         \n                height: var(--ods-sem-icon-large);\n                width:  var(--ods-sem-icon-large);\n                mask-size:  var(--ods-sem-icon-large);\n              \n        }\n        \n        </style>\n        <div class=\"ods-icon ods-icon--", "\"></div>\n        "])), this.color && this.color !== "" && this.color !== "undefined" ? this.color : "#1B1B1B", ICON_PATH, this.name, ICON_PATH, this.name, this.size.toLocaleLowerCase());
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
