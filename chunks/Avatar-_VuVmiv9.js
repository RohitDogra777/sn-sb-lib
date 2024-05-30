import { _ as _inherits, a as _createClass, x, b as _taggedTemplateLiteral, s, c as _classCallCheck, d as _callSuper } from './lit-element-DoT7jA1N.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Service Now Avatar Component
 * @input label, type
 * @output <ods-avatar> in dom
 */
var ODSAvatar = /*#__PURE__*/function (_LitElement) {
  function ODSAvatar() {
    var _this;
    _classCallCheck(this, ODSAvatar);
    _this = _callSuper(this, ODSAvatar);
    _this.size = "M";
    return _this;
  }
  _inherits(ODSAvatar, _LitElement);
  return _createClass(ODSAvatar, [{
    key: "getAvatarText",
    value: function getAvatarText() {
      var name = this.name.trim();
      if (!name) return '';
      var nameArray = name.split(' ');
      var firstName = nameArray[0].toUpperCase();
      var lastInitial = nameArray.length > 1 ? nameArray[nameArray.length - 1].toUpperCase()[0] : '';
      var initial = firstName[0] + lastInitial;
      return initial;
    }
  }, {
    key: "getAvatarContent",
    value: function getAvatarContent() {
      var size = "".concat(this.size);
      size = size.toLowerCase();
      if (this.image && this.image != '') {
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <img\n          class=", "\n          src=\"", "\"\n          alt=\"Avatar Image\"\n        />\n      "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.image);
      } else if (this.icon && this.icon != "") {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=", ">\n        <ods-icon  name=\"", "\" color=\"white\"></ods-icon>\n      </div>\n    "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.icon);
      } else if (this.name && this.name != "") {
        return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <div class=", ">\n        ", "\n      </div>\n    "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.getAvatarText());
      }
      return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    <div class=", ">\n        <ods-icon  name=\"user\" color=\"white\"></ods-icon>\n    </div>\n  "])), ["ods-avatar", "ods-avatar-" + size].join(" "));
    }
  }, {
    key: "render",
    value: function render() {
      var size = "".concat(this.size);
      size = size.toLowerCase();
      var iconDimension = "0px";
      if (size == 'xxl') {
        iconDimension = '104px';
      }
      if (size == 'xl') {
        iconDimension = '40px';
      }
      if (size == 'l') {
        iconDimension = '24px';
      }
      if (size == 'm') {
        iconDimension = '16px';
      }
      if (size == 'sm') {
        iconDimension = '14px';
      }
      return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <style>\n      * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    .ods-avatar-xxl {\n      width: 180px;\n      height: 180px;\n      font-size: 72px;\n    }\n    .ods-avatar-xl {\n      width: 84px;\n      height: 84px;\n      font-size: 32px;\n    }\n    .ods-avatar-l {\n      width: 48px;\n      height: 48px;\n      font-size: 20px;\n    }\n    .ods-avatar-m {\n      width: 32px;\n      height: 32px;\n      font-size: 14px;\n    }\n    .ods-avatar-sm {\n      width: 24px;\n      height: 24px;\n      font-size: 10px;\n    }\n    .ods-avatar {\n      position: relative;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      vertical-align: middle;\n      border-radius: 50em;\n      transition: margin 0.15s;\n      --cui-bg-opacity: 1;\n      background-color: var(--sn-wc-bgColor, #395f72);\n      color: var(--sn-wc-color, #ffffff);\n      text-transform: uppercase;\n      font-family: \"Gilroy-Medium\", sans-serif;\n      font-weight: 600;\n      object-fit: cover;\n    }\n    ods-icon::part(odsIcon){\n      height: ", ";\n      width:  ", ";\n      display:flex;\n    }  \n  </style>\n      ", "\n    "])), iconDimension, iconDimension, this.getAvatarContent());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        name: {
          type: String
        },
        size: {
          type: String
        },
        image: {
          type: String
        },
        icon: {
          type: String
        }
      };
    }
  }]);
}(s);
customElements.define("ods-avatar", ODSAvatar);

export { ODSAvatar };
