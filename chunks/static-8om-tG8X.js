import { m as _toConsumableArray, x } from './ColorAliases-BNiWx0rE.js';

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

export { n, s };
