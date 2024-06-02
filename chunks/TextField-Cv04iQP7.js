import { _ as _inherits, a as _createClass, x, b as _taggedTemplateLiteral, s, c as _classCallCheck, d as _callSuper } from './ColorAliases-BNiWx0rE.js';
import './Text-BT8UX2sj.js';
import './Icon-DCtJ6N8A.js';
import './Tooltip-DWWB1pU5.js';
import './static-8om-tG8X.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

/**
 * Service Now ODSTextField Component
 * @input label, type
 * @output <ods-text-field> in dom
 */
var ODSTextField = /*#__PURE__*/function (_LitElement) {
  function ODSTextField() {
    var _this;
    _classCallCheck(this, ODSTextField);
    _this = _callSuper(this, ODSTextField);
    _this.width = "280px";
    _this.error = "";
    _this.tooltip = "";
    return _this;
  }
  _inherits(ODSTextField, _LitElement);
  return _createClass(ODSTextField, [{
    key: "handleInput",
    value: function handleInput(e) {
      console.log(e);
    }
  }, {
    key: "getInputField",
    value: function getInputField() {
      var isRequired = this.required == "true" ? true : false;
      var isOptional = this.optional == "true" ? true : false;
      if (isRequired) {
        isOptional = false;
      }
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <input\n        type=\"", "\"\n        class=", "\n        @input=\"", "\"\n        @blur=\"", "\"\n        id=\"", "\"\n        name=\"", "\"\n        placeholder=\"", "\"\n        error=\"", "\"\n        aria-describedby=\"emailHelp\"\n        .value=\"", "\"\n        aria-disabled=\"", "\"\n        ?required=\"", "\"\n        ?optional=\"", "\"\n      />\n    "])), this.type, ["ods-form-control"].join(" "), this.onInput, this.onBlur, this.name, this.name, this.placeholder, this.error, this.value, this.disabled, isRequired, isOptional);
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage() {
      if (this.error && this.error != "") {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <div class=\"ods-error-container\">\n          <ods-icon\n            size=\"SM\"\n            name=\"error\"\n            color=\"#AB2D25\"\n            aria-describedby=\"tooltip\"\n          ></ods-icon>\n          <ods-text html-tag=\"span\" size=\"sm\" weight=\"regular\" color=\"#AB2D25\">\n            ", "\n          </ods-text>\n        </div>\n      "])), this.error);
      }
      return "";
    }
  }, {
    key: "getInfoIcon",
    value: function getInfoIcon() {
      if (this.tooltip != "") {
        return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <ods-icon\n          class=\"tooltip-icon\"\n          size=\"SM\"\n          name=\"info\"\n          color=\"#1B1B1B\"\n          aria-describedby=\"tooltip\"\n        ></ods-icon>\n        <ods-tooltip id=\"tooltip\" label=\"", "\"></ods-tooltip>\n      "])), this.tooltip);
      }
    }
  }, {
    key: "getLabelField",
    value: function getLabelField() {
      if (this.label != "") {
        return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        <div class=\"ods-label-container\">\n          <ods-text\n            html-tag=\"span\"\n            size=\"sm\"\n            weight=\"regular\"\n            color=\"text-primary\"\n          >\n          <label for=\"", "\"> ", "</label>\n          </ods-text>\n          ", "\n        </div>\n      "])), this.name, this.getLabelText(), this.getInfoIcon());
      }
      return "";
    }
  }, {
    key: "getLabelText",
    value: function getLabelText() {
      var labelText = this.label;
      if (this.required == "true") {
        labelText = x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["", "<ods-text\n          class=\"left-spacing\"\n          html-tag=\"span\"\n          size=\"sm\"\n          weight=\"regular\"\n          color=\"text-primary\"\n        >\n          (required)\n        </ods-text>"])), labelText);
      }
      if (this.required != "true" && this.optional == "true") {
        labelText = x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["", "<ods-text\n          class=\"left-spacing\"\n          html-tag=\"span\"\n          size=\"sm\"\n          weight=\"regular\"\n          color=\"text-primary\"\n        >(optional)</ods-text>"])), labelText);
      }
      return labelText;
    }
  }, {
    key: "handleWidth",
    value: function handleWidth() {
      if (this["full-width"] == "true") {
        this.width = "100%";
      } else {
        this.width = "280px";
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.handleWidth();
      var isReadOnly = this.disabled == "true" ? "readonly" : "";
      var isError = this.error != "" ? "error-state" : "";
      if (this.disabled == "true") {
        isError = "";
        this.error = "";
      }
      return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          box-sizng: border-box;\n          margin: 0;\n          padding: 0;\n        }\n        .ods-form-label {\n          margin-bottom: 0.5rem;\n          font-family: lato;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n          margin: 0;\n          color: #1b1b1b;\n        }\n        .ods-form-control {\n          display: block;\n          padding: var(--ods-input-padding, 10px 16px);\n          font-size: var(--ods-input-font-size, 16px);\n          font-family: lato, Helvetica, Arial, sans-serif;\n          font-weight: var(--ods-input-font-weight, 400);\n          line-height: var(--ods-input-line-height, 24px);\n          color: var(--ods-input-color, #1b1b1b);\n          background-color: #fff;\n          background-clip: padding-box;\n          border: 1px solid var(--ods-input-border-color, #767676);\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          border-radius: var(--ods-text-field-border-radius, 4px);\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .ods-form-control {\n            transition: none;\n          }\n        }\n\n        .ods-form-control::-moz-placeholder {\n          color: #5e5e5e;\n          opacity: 1;\n        }\n        .ods-form-control::placeholder {\n          color: #5e5e5e;\n          opacity: 1;\n        }\n        .ods-field-container {\n          width: ", ";\n          display: flex;\n          position: relative;\n          flex-direction: column-reverse;\n          gap: var(--ods-content-gap, 4px);\n          box-sizing: border-box;\n        }\n        .ods-label-container {\n          display: flex;\n          align-items: center;\n          gap: 4px;\n        }\n        .ods-label-container ods-icon {\n          display: flex;\n          width: 24px;\n          height: 24px;\n          align-items: center;\n          justify-content: center;\n        }\n        .ods-error-container {\n          margin-top: 4px;\n          width: ", ";\n          display: flex;\n          justify-content: flex-start;\n          gap: 4px;\n        }\n        .ods-error-container ods-icon {\n          display: flex;\n          width: 24px;\n          height: 24px;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .ods-field-container {\n          input {\n            &:hover {\n              border: 1px solid #1f6413;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #1f6413;\n              }\n            }\n            &:focus {\n              color: #1b1b1b;\n              background-color: #fff;\n              border-color: #1f6413;\n              box-shadow: 0 0 0 1px rgba(31, 100, 19, 1);\n              outline: 0;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #1f6413;\n              }\n            }\n            &:active {\n              border: 1px solid #123a0b;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #123a0b;\n              }\n            }\n          }\n          &.readonly {\n            opacity: 0.5;\n            cursor: not-allowed;\n            input {\n              pointer-events: none;\n              color: #515151;\n              background-color: #c5c5c5;\n              background-clip: padding-box;\n              border: 1px solid #515151;\n              -webkit-appearance: none;\n              -moz-appearance: none;\n              appearance: none;\n            }\n            .ods-label-container ods-text::part(odsText) {\n              color: #c5c5c5;\n              pointer-events: none;\n            }\n            ods-icon {\n              pointer-events: none;\n            }\n          }\n          &.error-state {\n            input {\n              border: 1px solid #ab2d25;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #ab2d25;\n              }\n              &:hover {\n                border: 1px solid #82221c;\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #82221c;\n                }\n              }\n              &:focus {\n                border-color: #ab2d25;\n                box-shadow: 0 0 0 1px rgba(171, 45, 37, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #ab2d25;\n                }\n              }\n              &:active {\n                border: 1px solid #4b1410;\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #4b1410;\n                }\n              }\n            }\n          }\n        }\n        ods-text::part(odsText) {\n          line-height: 24px;\n        }\n        ods-text.left-spacing {\n          margin-left: 4px;\n        }\n        ods-text{\n          display:inline-block;\n        }\n      </style>\n      <div class=", ">\n        ", " ", "\n      </div>\n      ", "\n    "])), this.width, this.width, ["ods-field-container", isReadOnly, isError].join(" "), this.getInputField(), this.getLabelField(), this.getErrorMessage());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          type: String
        },
        onInput: {
          type: Function
        },
        onBlur: {
          type: Function
        },
        error: {
          type: String
        },
        "full-width": {
          type: String
        },
        label: {
          type: String
        },
        name: {
          type: String
        },
        optional: {
          type: String
        },
        placeholder: {
          type: String
        },
        required: {
          type: String
        },
        tooltip: {
          type: String
        },
        type: {
          type: String
        },
        value: {
          type: String
        }
      };
    }
  }]);
}(s);
customElements.define("ods-text-field", ODSTextField);

export { ODSTextField };
