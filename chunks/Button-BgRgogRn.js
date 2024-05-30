import { _ as _inherits, a as _createClass, x, b as _taggedTemplateLiteral, s, c as _classCallCheck, d as _callSuper } from './lit-element-DoT7jA1N.js';
import './Icon-CH8z55jr.js';

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
  function OdsButton() {
    var _this;
    _classCallCheck(this, OdsButton);
    loadLatoFont();
    _this = _callSuper(this, OdsButton);
    _this.disabled = false;
    _this["icon-position"] = 'before';
    _this.target = '_self';
    _this["full-width"] = false;
    return _this;
  }
  _inherits(OdsButton, _LitElement);
  return _createClass(OdsButton, [{
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
      if (this.variant === 'destructive-solid' || this.variant === 'destructive-outline' || this.variant !== 'ghost' && this.icon === '') {
        return null;
      }
      var icon = this.variant === 'ghost' && !this.icon ? 'arrow-right' : this.icon;
      var color = (colorMap[this.variant] || {}).hasOwnProperty(this.disabled) ? colorMap[this.variant][this.disabled] : "#515151";
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <ods-icon size=\"sm\" name=\"", "\" color=\"", "\"/>\n  "])), icon || 'placeholder', color);
    }
  }, {
    key: "getButton",
    value: function getButton() {
      var iconPosition = this.variant === 'ghost' && !this["icon-position"] ? 'after' : this["icon-position"];
      var iconLeft = iconPosition === 'before' ? this.getIcon() : '';
      var iconRight = iconPosition === 'after' ? this.getIcon() : '';
      var fullwidth = this["full-width"] ? 'full-width' : '';
      if (this.href) {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <a class=' btn-", " ", " ", "' href= \"", "\" target= \"", "\" tabindex= \"0\" aria-disabled = \"", "\" >\n      ", " \n      <slot> </slot>\n      ", "\n      </a>\n      "])), this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', fullwidth, this.href, this.target || '_self', this.disabled ? 'true' : 'false', iconLeft ? x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<i class= 'icon-left'> ", " </i>"])), iconLeft) : '', iconRight ? x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<i class= 'icon-right'> ", " </i>"])), iconRight) : '');
      } else {
        return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        <button tabindex= \"0\" class='btn-", " ", " ", "' aria-disabled = \"", "\" >\n      ", " \n      <slot> </slot>\n      ", "\n      </button>\n      "])), this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', fullwidth, this.disabled ? 'true' : 'false', iconLeft ? x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<i class= 'icon-left'> ", " </i>"])), iconLeft) : '', iconRight ? x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<i class= 'icon-right'> ", " </i>"])), iconRight) : '');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\n    <style>\n    *{\n      --ods-utility-states-primary-hover: rgba(143, 218, 131, 0.40);\n      --ods-utility-states-primary-pressed: rgba(143, 218, 131, 0.64);\n      --ods-utility-states-on-color-hover: rgba(31, 100, 19, 1);\n      --ods-utility-states-on-color-pressed: rgba(23, 58, 11, 1);\n      --ods-utility-states-destructive-solid-hover: rgba(130, 34, 28, 1);\n      --ods-utility-states-destructive-solid-pressed: rgba(75, 20, 28, 1);\n      --ods-utility-states-error-hover: rgba(245, 183, 174, 0.40);\n      --ods-utility-states-error-pressed: rgba(245, 183, 174, 0.64);\n      --ods-ref-color-green-100: #FFFFFF;\n      --ods-ref-color-green-80:  #8fda83;\n      --ods-ref-color-green-70:  #6FBD62;\n      --ods-ref-color-green-40:  #298319;\n      --ods-ref-color-green-25:  #216b14;\n      --ods-ref-color-green-10:  #0C2708;\n      --ods-ref-color-red-100:   #FFFFFF;\n      --ods-ref-color-red-80:    #F5B7AE;\n      --ods-ref-color-red-70:    #F08F82;\n      --ods-ref-color-red-40:    #AB2D25;\n      --ods-ref-color-red-30:    #871915;\n      --ods-ref-color-red-20:    #600E0C;\n      --ods-ref-color-gray-80:   #C5C5C5;\n      --ods-ref-color-gray-35:   #515151;\n      --ods-sem-space-none:       0rem;\n      --ods-sem-space-xsmall:     0.25rem;\n      --ods-sem-space-small:      0.5rem;\n      --ods-sem-space-medium:     1rem;\n      --ods-sem-space-large:      1.5rem;\n\n\n    }\n\n    :host{\n      display: ", ";\n    }\n    \n    a, button {\n        font-family:'Lato', Helvetica, Arial, sans-serif;\n        font-size: 1rem;\n        text-decoration: none;\n        font-style: normal;\n        font-weight: 700;\n        line-height: var(--ods-sem-space-large);\n        border: var(--ods-sem-space-none);\n        border-radius: var( --ods-sem-space-small);\n        cursor: pointer;\n        display: inline-flex;\n        justify-content: center;\n        font-size: var(--ods-sem-space-medium);\n        padding: 0.625rem var(--ods-sem-space-large);\n        box-sizing: border-box;\n        \n        \n    }\n\n    .full-width {\n      width: 100%;\n    }\n\n    .btn-solid {\n        color: var(--ods-ref-color-green-100);\n        background-color: var(--ods-ref-color-green-40);\n    }\n\n    .btn-solid:hover {\n      background-color: var(--ods-utility-states-on-color-hover);\n    }\n\n    .btn-solid:active {\n      background-color: var(--ods-ref-color-green-10);\n    }\n\n    .btn-outline {\n        color: var(--ods-ref-color-green-40);\n        background-color: var(--ods-ref-color-green-100) ;\n        box-shadow:0 0 0 0.063rem ;\n    }\n\n    .btn-outline:hover {\n      background: var(--ods-utility-states-primary-hover);\n    }\n\n    .btn-outline:active{\n      background: var(--ods-utility-states-primary-pressed);\n    }\n           \n    .btn-destructive-solid {\n        color: var(--ods-ref-color-red-100);\n        background-color: var(--ods-ref-color-red-40);\n    }\n\n    .btn-destructive-solid:hover {\n        background-color: var(--ods-utility-states-destructive-solid-hover);\n    }\n\n    .btn-destructive-solid:active{\n        background-color: var(--ods-ref-color-red-20);\n    }\n              \n    .btn-destructive-outline {\n        color: var(--ods-ref-color-red-40);\n        background-color: var(--ods-ref-color-red-100);\n        box-shadow:0 0 0 0.063rem ;\n    }\n\n    .btn-destructive-outline:hover {\n      background-color: var(--ods-utility-states-error-hover);\n    }\n\n    .btn-destructive-outline:active{\n      background-color: var(--ods-utility-states-error-pressed);\n    }\n\n    .btn-solid:focus, .btn-destructive-solid:focus {\n      outline: none;\n      box-shadow: 0 0 0 0.125rem white, 0 0 0 0.25rem var(--ods-ref-color-green-40);\n    \n    }\n    .btn-outline:focus{\n     outline: none;\n     box-shadow: 0 0 0 0.063rem var(--ods-ref-color-green-40), 0 0 0 0.188rem white, 0 0 0 0.30rem var(--ods-ref-color-green-40);\n    }\n    .btn-destructive-outline:focus{\n     outline: none;\n     box-shadow: 0 0 0 0.063rem var(--ods-ref-color-red-40), 0 0 0 0.188rem white, 0 0 0 0.30rem var(--ods-ref-color-green-40);\n    }\n\n    .btn-ghost {\n    padding: var(--ods-sem-space-small) var( --ods-sem-space-none);\n    border-radius:  var(--ods-sem-space-small);\n    color: var(--ods-ref-color-green-40);\n    background: transparent;\n    }\n\n    .btn-ghost:hover {\n    background: var(--ods-utility-states-primary-hover);\n    }\n\n    .btn-ghost:active{\n    background: var(--ods-utility-states-primary-pressed);\n    }\n\n    .btn-ghost:focus{\n      outline: none;\n      box-shadow: 0 0 0 0.125rem var(--ods-ref-color-green-40);\n    }\n\n\n    .disabled-solid , .disabled-solid:hover, .disabled-solid:focus, .disabled-destructive-solid,  .disabled-destructive-solid:hover, .disabled-destructive-solid:focus {\n      color: #515151;\n      background: #C5C5C5;\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      box-shadow: 0 0 0 0rem white;\n    }\n\n    .disabled-outline, .disabled-outline:hover, .disabled-outline:focus, .disabled-destructive-outline,  .disabled-destructive-outline:hover, .disabled-destructive-outline:focus  {\n      color: var(--ods-ref-color-gray-35);\n      opacity: 0.5;\n      background: var(--ods-ref-color-gray-80);\n      box-shadow: 0 0 0 0 0.063rem;\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n\n    .disabled-ghost, .disabled-ghost:hover, .disabled-ghost:focus{\n      border-radius: var(--ods-sem-space-small);\n      color: var(--ods-ref-color-gray-35);\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      background: transparent;\n      box-shadow: 0 0 0 0rem white;    \n    }\n\n    .icon-left{\n        display: inline-flex;\n    \n    ods-icon::part(odsIcon){\n      height: var(--ods-sem-space-medium);\n      width: var(--ods-sem-space-medium);\n      margin-right: var(--ods-sem-space-small);\n      vertical-align: baseline;\n      margin-top: var(--ods-sem-space-xsmall);\n      \n        }\n    }   \n\n    .icon-right{\n      display: inline-flex;\n\n    ods-icon::part(odsIcon) {\n      height: var(--ods-sem-space-medium);\n      width: var(--ods-sem-space-medium);\n      margin-left: var(--ods-sem-space-small);\n      vertical-align: baseline;\n      margin-top: var(--ods-sem-space-xsmall);\n     \n        }\n    }   \n    </style>\n    ", "\n      "])), this["full-width"] ? 'block' : 'inline-flex', this.getButton());
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
          type: Boolean
        }
      };
    }
  }]);
}(s);
customElements.define('ods-button', OdsButton);

export { OdsButton };
