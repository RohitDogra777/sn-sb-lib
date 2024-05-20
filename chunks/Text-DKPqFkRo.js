import { g as _toConsumableArray, x, i, d as _taggedTemplateLiteral, e as _defineProperty, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, s as s$1 } from './lit-element-DOIq0PaO.js';

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e = Symbol["for"](""),
  o = function o(t) {
    if ((t === null || t === void 0 ? void 0 : t.r) === e) return t === null || t === void 0 ? void 0 : t._$litStatic$;
  },
  s = function s(t) {
    for (var _len = arguments.length, r = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      r[_key - 1] = arguments[_key];
    }
    return {
      _$litStatic$: r.reduce(function (r, e, o) {
        return r + function (t) {
          if (void 0 !== t._$litStatic$) return t._$litStatic$;
          throw Error("Value passed to 'literal' function must be a 'literal' result: ".concat(t, ". Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security."));
        }(e) + t[o + 1];
      }, t[0]),
      r: e
    };
  },
  a = new Map(),
  l = function l(t) {
    return function (r) {
      for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }
      var i = e.length;
      var s, l;
      var n = [],
        u = [];
      var c,
        $ = 0,
        f = !1;
      for (; $ < i;) {
        for (c = r[$]; $ < i && void 0 !== (l = e[$], s = o(l));) c += s + r[++$], f = !0;
        $ !== i && u.push(l), n.push(c), $++;
      }
      if ($ === i && n.push(r[i]), f) {
        var _t = n.join("$$lit$$");
        void 0 === (r = a.get(_t)) && (n.raw = n, a.set(_t, r = n)), e = u;
      }
      return t.apply(void 0, [r].concat(_toConsumableArray(e)));
    };
  },
  n = l(x);

var _templateObject$1;
var aliases = i(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n*{\n    --ods-ref-color-red-40: #AB2D25;\n    --ods-ref-color-orange-40: #7A571A;\n    --ods-ref-color-green-40: #298319;\n    --ods-ref-color-blue-40: #395F72;\n    --ods-ref-color-gray-40: #5E5E5E;\n    --ods-ref-color-purple-40: #4A5CA4;\n}\n\n.ods-sem-color-status-roles-error-error,.status-error,.ods-sem-color-status-roles-error,.error{color: var(--ods-ref-color-red-40);}\n.ods-sem-color-status-roles-warning-warning,.status-warning,.ods-sem-color-status-roles-warning,.warning{color: var(--ods-ref-color-orange-40);}\n.ods-sem-color-status-roles-success-success,.status-success,.ods-sem-color-status-roles-success,.success{color: var(--ods-ref-color-green-40);}\n.ods-sem-color-status-roles-info-info,.status-info,.ods-sem-color-status-roles-info,.info{color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-roles-primary-primary,.role-primary,.ods-sem-color-roles-primary,.primary{ color: var(--ods-ref-color-green-40);}\n.ods-sem-color-roles-secondary-secondary,.role-secondary,.ods-sem-color-roles-secondary,.secondary{color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-roles-neutral-neutral,.role-neutral,.ods-sem-color-roles-neutral,.neutral{color: var(--ods-ref-color-gray-40);}\n.ods-sem-color-roles-accent-accent,role-accent,ods-sem-color-roles-accent,.accent{color: var(--ods-ref-color-purple-40);}\n"])));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
// import './fonts/fonts.css';
/**
 * Service Now Text Component
 * @input html-tag, size, weight, color
 * @output <ods-text> in dom
 */

var hasLoadedMaterialSymbolsFont = false;
var loadLatoFont = function loadLatoFont() {
  if (hasLoadedMaterialSymbolsFont) {
    return;
  }
  hasLoadedMaterialSymbolsFont = true;
  var fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync("\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff) format('woff');\n      font-weight: normal;\n    }\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Bold.woff) format('woff');\n      font-weight: 700;\n    }");
  document.adoptedStyleSheets.push(fontSheet);
};
var ODSText = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSText, _LitElement);
  function ODSText() {
    var _this;
    _classCallCheck(this, ODSText);
    _this = _callSuper(this, ODSText);
    loadLatoFont();
    return _this;
  }
  _createClass(ODSText, [{
    key: "render",
    value: function render() {
      var htmlTag = null;
      var size = this.size.toLowerCase();
      var weight = this.weight.toLowerCase();
      switch (this["html-tag"]) {
        case 'p':
          htmlTag = s(_templateObject || (_templateObject = _taggedTemplateLiteral(["p"])));
          break;
        case 'div':
          htmlTag = s(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["div"])));
          break;
        case 'code':
          htmlTag = s(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["code"])));
          break;
        case 'span':
        default:
          htmlTag = s(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["span"])));
          break;
      }
      return n(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    \n    <style>\n    *{\n      color: var(--", ");\n      color: ", ";\n    }\n    ::slotted(a){\n        color:var(--ods-ref-color-green-40);\n    }\n    span, code{\n      display: inline;\n    }\n    p, div{\n      display: block;\n    }\n    span, p, div{\n      font-family: lato;\n    }\n    code{\n      font-family: \"Roboto Mono\", monospace;\n    }\n    .ods-text--size-sm{\n      font-size: 14px;\n      line-height: 22px;\n    }\n    .ods-text--size-md{\n      font-size: 16px;\n      line-height: 24px;\n    }\n    .ods-text--size-lg{\n      font-size: 20px;\n      line-height: 28px;\n    }\n    .ods-text--weight-regular{\n      font-weight: 400;\n    }\n    .ods-text--weight-bold{\n     \n      font-weight: 700;\n    }\n    </style>\n    <", " part='odsText' class=\"ods-text--weight-", " ods-text--size-", " ", " ", "\">\n      <slot></slot>\n    </", ">\n    "])), this.color, this.color, htmlTag, weight, size, this["html-tag"] === 'code' ? 'code' : '', this.color, htmlTag);
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
        weight: {
          type: String
        },
        color: {
          type: String
        }
      };
    }
  }]);
  return ODSText;
}(s$1);
_defineProperty(ODSText, "styles", [aliases]);
customElements.define("ods-text", ODSText);

export { ODSText };
