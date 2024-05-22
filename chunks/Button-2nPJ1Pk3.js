import { _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, d as _taggedTemplateLiteral, s } from './lit-element-DOIq0PaO.js';
import './Icon-CjWNPvlv.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var hasLoadedMaterialSymbolsFont = false;
var loadLatoFont = function loadLatoFont() {
  if (hasLoadedMaterialSymbolsFont) {
    return;
  }
  hasLoadedMaterialSymbolsFont = true;
  var fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync("\n    @font-face {\n      font-family: 'lato';\n      src: url(\n    https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff)\n    format('woff');\n    }");
  document.adoptedStyleSheets.push(fontSheet);
};
var OdsButton = /*#__PURE__*/function (_LitElement) {
  _inherits(OdsButton, _LitElement);
  function OdsButton() {
    var _this;
    _classCallCheck(this, OdsButton);
    loadLatoFont();
    _this = _callSuper(this, OdsButton);
    _this.disabled = false;
    _this["icon-position"] = 'before';
    return _this;
  }
  _createClass(OdsButton, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.dispatchEvent(new ButtonClickEvent({}));
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var colorMap = {
        solid: {
          "true": "#515151",
          "false": "white"
        },
        outline: {
          "true": "#515151",
          "false": "#298319"
        },
        ghost: {
          "true": "#515151",
          "false": "#298319"
        }
      };
      if (this.variant == 'destructive-solid' || this.variant == 'destructive-outline') {
        return null;
      }
      var color = (colorMap[this.variant] || {}).hasOwnProperty(this.disabled) ? colorMap[this.variant][this.disabled] : "#515151";
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <ods-icon size=\"sm\" name=\"", "\" color=\"", "\"/>\n  "])), this.icon || 'placeholder', color);
    }
  }, {
    key: "getButton",
    value: function getButton() {
      var iconLeft = this["icon-position"] === 'before' ? this.getIcon() : '';
      var iconRight = this["icon-position"] === 'after' ? this.getIcon() : '';
      if (this.href) {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <a href= \"", "\" target= \"", "\" tabindex= \"0\" aria-disabled = \"", "\" class=' btn-", " ", "'>\n      ", " \n      <slot> </slot>\n      ", "\n      </a>\n      "])), this.href, this.target || '_self', this.disabled ? 'true' : 'false', this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', iconLeft ? x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<i class= 'icon-left'> ", " </i>"])), iconLeft) : '', iconRight ? x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<i class= 'icon-right'> ", " </i>"])), iconRight) : '');
      } else {
        return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        <button @click=", " tabindex= \"0\" aria-disabled = \"", "\" class='btn-", " ", "'>\n      ", " \n      <slot> </slot>\n      ", "\n      </button>\n      "])), this.handleClick, this.disabled ? 'true' : 'false', this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', iconLeft ? x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<i class= 'icon-left'> ", " </i>"])), iconLeft) : '', iconRight ? x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<i class= 'icon-right'> ", " </i>"])), iconRight) : '');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\n    <style>\n    :host {\n      display: inline-block;\n    \n    }\n    a, button {\n        font-family:'Lato';\n        font-size: 16px;\n        text-decoration: none;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 24px;\n        border: 0;\n        border-radius: 8px;\n        cursor: pointer;\n        display: inline-flex;\n        justify-content: center;\n        font-size: 16px;\n        padding: 10px 24px;\n        \n        \n    }\n\n\n    :host([full-width]) a, :host([full-width]) button {\n      width: 100%;\n    }\n\n    \n    .btn-solid {\n        color: #ffffff;\n        background-color: #298319;\n    }\n\n    .btn-solid:hover {\n      background-color: rgba(40, 83, 33, 1);\n    }\n\n    .btn-solid:active {\n      background-color: rgba(23, 48, 19, 1);\n    }\n\n    .btn-outline {\n        color: #298319;\n        background-color: #fff ;\n        border: 1px solid #298319 ;\n    }\n\n    .btn-outline:hover {\n      background-color: rgba(149, 218, 138, 0.4);\n    }\n\n    .btn-outline:active{\n      background-color: rgba(143, 218, 131, 0.64);\n    }\n\n\n              \n    .btn-destructive-solid {\n        color: #ffffff;\n        background-color: #ab2d25;\n    }\n\n    .btn-destructive-solid:hover {\n        background-color: rgba(130, 34, 28, 1);\n    }\n\n    .btn-destructive-solid:active{\n        background-color: rgba(75, 20, 17, 1);\n    }\n              \n    .btn-destructive-outline {\n        color: #ab2d25;\n        background-color: #fff;\n        border: 1px solid #ab2d25;\n    }\n\n    .btn-destructive-outline:hover {\n      background-color: rgba(245, 183, 174, 0.4);\n    }\n\n    .btn-destructive-outline:active{\n      background-color: rgba(245, 183, 174, 0.64);\n    }\n\n    .btn-solid:focus, .btn-outline:focus, .btn-destructive-solid:focus, .btn-destructive-outline:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px white, 0 0 0 4px #298319;\n    \n    }\n\n    .btn-ghost {\n    padding: 8px 0px;\n    border-radius: 8px;\n    color: #298319;\n    background: rgba(149, 218, 138, 0.00);\n    }\n\n    .btn-ghost:hover {\n    background: rgba(149, 218, 138, 0.4);\n    }\n\n    .btn-ghost:active{\n    background: rgba(143, 218, 131, 0.64);\n    }\n\n    .btn-ghost:focus{\n      outline: none;\n      box-shadow: 0 0 0 2px #298319;\n    }\n\n    \n\n\n    .disabled-solid , .disabled-solid:hover, .disabled-solid:focus, .disabled-destructive-solid,  .disabled-destructive-solid:hover, .disabled-destructive-solid:focus {\n      color: #515151;\n      background: #C5C5C5;\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      box-shadow: 0 0 0 0px white;\n    }\n\n    .disabled-outline, .disabled-outline:hover, .disabled-outline:focus, .disabled-destructive-outline,  .disabled-destructive-outline:hover, .disabled-destructive-outline:focus  {\n      color:#515151;\n      opacity: 0.5;\n      background: #C5C5C5;\n      border: 1px solid #515151;\n      cursor: not-allowed;\n      pointer-events: none;\n      box-shadow: 0 0 0 0px white;\n    }\n\n    .disabled-ghost, .disabled-ghost:hover, .disabled-ghost:focus{\n      border-radius: 8px;\n      color: #515151;\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      background: rgba(149, 218, 138, 0.00);\n      box-shadow: 0 0 0 0px white;    \n    }\n\n    \n\n    .icon-left{\n        display: inline-flex;\n    \n    ods-icon::part(odsIcon){\n      margin-right:8px;\n      vertical-align: baseline;\n      margin-top: 4px;\n        }\n    }   \n\n    .icon-right{\n      display: inline-flex;\n\n    ods-icon::part(odsIcon) {\n      margin-left:8px;\n      vertical-align: baseline;\n      margin-top: 4px;\n        }\n    }   \n    </style>\n    ", "\n      "])), this.getButton());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        variant: {
          type: String
        },
        icon: {
          type: String
        },
        "icon-position": {
          type: String
        },
        disabled: {
          type: Boolean
        },
        href: {
          type: String
        },
        target: {
          type: String
        },
        "full-width": {
          type: Boolean,
          attribute: 'full-width'
        }
      };
    }
  }]);
  return OdsButton;
}(s);
customElements.define('ods-button', OdsButton);

export { OdsButton };
