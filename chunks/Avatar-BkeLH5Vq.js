import { _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, d as _taggedTemplateLiteral, s } from './lit-element-DOIq0PaO.js';

var AnonymousImg = "data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M22%207.96479C22%205.83667%2020.8125%203.89633%2019%202.76968C17.125%201.70562%2014.8125%201.70562%2013%202.76968C11.125%203.89633%2010%205.83667%2010%207.96479C10%2010.1555%2011.125%2012.0958%2013%2013.2225C14.8125%2014.2866%2017.125%2014.2866%2019%2013.2225C20.8125%2012.0958%2022%2010.1555%2022%207.96479ZM8%207.96479C8%205.14817%209.5%202.51932%2012%201.07971C14.4375%20-0.359902%2017.5%20-0.359902%2020%201.07971C22.4375%202.51932%2024%205.14817%2024%207.96479C24%2010.844%2022.4375%2013.4729%2020%2014.9125C17.5%2016.3521%2014.4375%2016.3521%2012%2014.9125C9.5%2013.4729%208%2010.844%208%207.96479ZM4%2029.9971H28C27.875%2025.0523%2023.8125%2020.9839%2018.8125%2020.9839H13.125C8.125%2020.9839%204.0625%2025.0523%204%2029.9971ZM2%2030.1848C2%2023.9883%206.9375%2018.9809%2013.125%2018.9809H18.8125C25%2018.9809%2030%2023.9883%2030%2030.1848C30%2031.1863%2029.125%2032%2028.125%2032H3.8125C2.8125%2032%202%2031.1863%202%2030.1848Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Service Now Avatar Component
 * @input label, type
 * @output <ods-avatar> in dom
 */
var ODSAvatar = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSAvatar, _LitElement);
  function ODSAvatar() {
    var _this;
    _classCallCheck(this, ODSAvatar);
    _this = _callSuper(this, ODSAvatar);
    _this.size = "M";
    return _this;
  }
  _createClass(ODSAvatar, [{
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
      var bellSize = "ods-avatar-icon-".concat(size);
      if (this.image && this.image != '') {
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <img\n          class=", "\n          src=\"", "\"\n          alt=\"Avatar Image\"\n        />\n      "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.image);
      } else if (this.icon && this.icon != "") {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=", ">\n        <img class=", " src=\"", "\" alt=\"Bell Icon\" />\n      </div>\n    "])), ["ods-avatar", "ods-avatar-" + size].join(" "), [bellSize].join(" "), this.icon);
      } else if (this.name && this.name != "") {
        return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <div class=", ">\n        ", "\n      </div>\n    "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.getAvatarText());
      }
      return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    <div class=", ">\n      <img class=", " src=\"", "\" alt=\"Bell Icon\" />\n    </div>\n  "])), ["ods-avatar", "ods-avatar-" + size].join(" "), [bellSize].join(" "), AnonymousImg);
    }
  }, {
    key: "render",
    value: function render() {
      return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <style>\n      * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    .ods-avatar-xxl {\n      width: 180px;\n      height: 180px;\n      font-size: 72px;\n      line-height: 108px;\n    }\n    .ods-avatar-xl {\n      width: 84px;\n      height: 84px;\n      font-size: 32px;\n      line-height: 40px;\n    }\n    .ods-avatar-l {\n      width: 48px;\n      height: 48px;\n      font-size: 20px;\n      line-height: 20px;\n    }\n    .ods-avatar-m {\n      width: 32px;\n      height: 32px;\n      font-size: 14px;\n      line-height: 14px;\n    }\n    .ods-avatar-sm {\n      width: 24px;\n      height: 24px;\n      font-size: 10px;\n      line-height: 10px;\n    }\n    .ods-avatar {\n      position: relative;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      vertical-align: middle;\n      border-radius: 50em;\n      transition: margin 0.15s;\n      --cui-bg-opacity: 1;\n      background-color: var(--sn-wc-bgColor, #395f72);\n      color: var(--sn-wc-color, #ffffff);\n      text-transform: uppercase;\n      font-family: \"Gilroy-Medium\", sans-serif;\n      font-weight: 600;\n      object-fit: cover;\n    }\n    .ods-avatar-icon-xxl {\n      height: 104px;\n      width: 104px;\n    }\n    .ods-avatar-icon-xl {\n      height: 40px;\n      width: 40px;\n    }\n    .ods-avatar-icon-l {\n      height: 24px;\n      width: 24px;\n    }\n    .ods-avatar-icon-m {\n      height: 16px;\n      width: 16px;\n    }\n    .ods-avatar-icon-sm {\n      height: 12px;\n      width: 12px;\n    }    \n  </style>\n      ", "\n    "])), this.getAvatarContent());
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
  return ODSAvatar;
}(s);
customElements.define("ods-avatar", ODSAvatar);

export { ODSAvatar };
