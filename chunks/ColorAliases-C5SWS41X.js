import { l as _toConsumableArray, x, i, b as _taggedTemplateLiteral } from './lit-element-DoT7jA1N.js';

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

var _templateObject;
var aliases = i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n*{\n    --ods-ref-color-red-40: #AB2D25;\n    --ods-ref-color-orange-40: #7A571A;\n    --ods-ref-color-green-40: #298319;\n    --ods-ref-color-blue-40: #395F72;\n    --ods-ref-color-gray-40: #5E5E5E;\n    --ods-ref-color-purple-40: #4A5CA4;\n    --ods-ref-color-gray-10: #1B1B1B;\n    --ods-ref-color-gray-25: #3B3B3B;\n    --ods-ref-color-gray-100: #FFFFFF;\n}\n.ods-sem-color-text-primary,.text-primary{color: var(--ods-ref-color-gray-10);}\n.ods-sem-color-text-secondary,.text-secondary{color: var(--ods-ref-color-gray-25);}\n.ods-sem-color-text-inverse,.text-inverse{color: var(--ods-ref-color-gray-100);}\n.ods-sem-color-status-roles-error-error,.status-error,.ods-sem-color-status-roles-error,.error{color: var(--ods-ref-color-red-40);}\n.ods-sem-color-status-roles-warning-warning,.status-warning,.ods-sem-color-status-roles-warning,.warning{color: var(--ods-ref-color-orange-40);}\n.ods-sem-color-status-roles-success-success,.status-success,.ods-sem-color-status-roles-success,.success{color: var(--ods-ref-color-green-40);}\n.ods-sem-color-status-roles-info-info,.status-info,.ods-sem-color-status-roles-info,.info{color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-roles-primary-primary,.role-primary,.ods-sem-color-roles-primary,.primary{ color: var(--ods-ref-color-green-40);}\n.ods-sem-color-roles-secondary-secondary,.role-secondary,.ods-sem-color-roles-secondary,.secondary{color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-text-tertiary,.text-tertiary,.ods-sem-color-roles-neutral-neutral,.role-neutral,.ods-sem-color-roles-neutral,.neutral{color: var(--ods-ref-color-gray-40);}\n.ods-sem-color-roles-accent-accent,role-accent,ods-sem-color-roles-accent,.accent{color: var(--ods-ref-color-purple-40);}\n"])));

export { aliases as a, n, s };
