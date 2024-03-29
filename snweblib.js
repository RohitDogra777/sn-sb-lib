(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SnWebLib = {}));
})(this, (function (exports) { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1 = globalThis,
    e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    s$2 = Symbol(),
    o$2 = new WeakMap();
  var n$2 = /*#__PURE__*/function () {
    function n(t, e, o) {
      _classCallCheck(this, n);
      if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = e;
    }
    _createClass(n, [{
      key: "styleSheet",
      get: function get() {
        var t = this.o;
        var s = this.t;
        if (e$2 && void 0 === t) {
          var _e = void 0 !== s && 1 === s.length;
          _e && (t = o$2.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), _e && o$2.set(s, t));
        }
        return t;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.cssText;
      }
    }]);
    return n;
  }();
  var r$3 = function r(t) {
      return new n$2("string" == typeof t ? t : t + "", void 0, s$2);
    },
    i$2 = function i(t) {
      for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }
      var o = 1 === t.length ? t[0] : e.reduce(function (e, s, o) {
        return e + function (t) {
          if (!0 === t._$cssResult$) return t.cssText;
          if ("number" == typeof t) return t;
          throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        }(s) + t[o + 1];
      }, t[0]);
      return new n$2(o, t, s$2);
    },
    S$1 = function S(s, o) {
      if (e$2) s.adoptedStyleSheets = o.map(function (t) {
        return t instanceof CSSStyleSheet ? t : t.styleSheet;
      });else {
        var _iterator = _createForOfIteratorHelper(o),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _e2 = _step.value;
            var _o = document.createElement("style"),
              _n = t$1.litNonce;
            void 0 !== _n && _o.setAttribute("nonce", _n), _o.textContent = _e2.cssText, s.appendChild(_o);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    c$2 = e$2 ? function (t) {
      return t;
    } : function (t) {
      return t instanceof CSSStyleSheet ? function (t) {
        var e = "";
        var _iterator2 = _createForOfIteratorHelper(t.cssRules),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _s = _step2.value;
            e += _s.cssText;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return r$3(e);
      }(t) : t;
    };

  var _Symbol$metadata, _a$litPropertyMetadat, _a$reactiveElementVer;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var i$1 = Object.is,
    e$1 = Object.defineProperty,
    r$2 = Object.getOwnPropertyDescriptor,
    h$1 = Object.getOwnPropertyNames,
    o$1 = Object.getOwnPropertySymbols,
    n$1 = Object.getPrototypeOf,
    a$1 = globalThis,
    c$1 = a$1.trustedTypes,
    l$1 = c$1 ? c$1.emptyScript : "",
    p$1 = a$1.reactiveElementPolyfillSupport,
    d$1 = function d(t, s) {
      return t;
    },
    u$1 = {
      toAttribute: function toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l$1 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute: function fromAttribute(t, s) {
        var i = t;
        switch (s) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      }
    },
    f$1 = function f(t, s) {
      return !i$1(t, s);
    },
    y$1 = {
      attribute: !0,
      type: String,
      converter: u$1,
      reflect: !1,
      hasChanged: f$1
    };
  (_Symbol$metadata = Symbol.metadata) !== null && _Symbol$metadata !== void 0 ? _Symbol$metadata : Symbol.metadata = Symbol("metadata"), (_a$litPropertyMetadat = a$1.litPropertyMetadata) !== null && _a$litPropertyMetadat !== void 0 ? _a$litPropertyMetadat : a$1.litPropertyMetadata = new WeakMap();
  var b = /*#__PURE__*/function (_HTMLElement) {
    _inherits(b, _HTMLElement);
    function b() {
      var _this;
      _classCallCheck(this, b);
      _this = _callSuper(this, b), _this._$Ep = void 0, _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$Em = null, _this._$Ev();
      return _this;
    }
    _createClass(b, [{
      key: "_$Ev",
      value: function _$Ev() {
        var _this2 = this,
          _this$constructor$l;
        this._$ES = new Promise(function (t) {
          return _this2.enableUpdating = t;
        }), this._$AL = new Map(), this._$E_(), this.requestUpdate(), (_this$constructor$l = this.constructor.l) === null || _this$constructor$l === void 0 ? void 0 : _this$constructor$l.forEach(function (t) {
          return t(_this2);
        });
      }
    }, {
      key: "addController",
      value: function addController(t) {
        var _this$_$EO, _t$hostConnected;
        ((_this$_$EO = this._$EO) !== null && _this$_$EO !== void 0 ? _this$_$EO : this._$EO = new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t$hostConnected = t.hostConnected) === null || _t$hostConnected === void 0 ? void 0 : _t$hostConnected.call(t));
      }
    }, {
      key: "removeController",
      value: function removeController(t) {
        var _this$_$EO2;
        (_this$_$EO2 = this._$EO) === null || _this$_$EO2 === void 0 || _this$_$EO2["delete"](t);
      }
    }, {
      key: "_$E_",
      value: function _$E_() {
        var t = new Map(),
          s = this.constructor.elementProperties;
        var _iterator = _createForOfIteratorHelper(s.keys()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i = _step.value;
            this.hasOwnProperty(_i) && (t.set(_i, this[_i]), delete this[_i]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        t.size > 0 && (this._$Ep = t);
      }
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        var _this$shadowRoot;
        var t = (_this$shadowRoot = this.shadowRoot) !== null && _this$shadowRoot !== void 0 ? _this$shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
        return S$1(t, this.constructor.elementStyles), t;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this$renderRoot, _this$_$EO3;
        (_this$renderRoot = this.renderRoot) !== null && _this$renderRoot !== void 0 ? _this$renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(!0), (_this$_$EO3 = this._$EO) === null || _this$_$EO3 === void 0 ? void 0 : _this$_$EO3.forEach(function (t) {
          var _t$hostConnected2;
          return (_t$hostConnected2 = t.hostConnected) === null || _t$hostConnected2 === void 0 ? void 0 : _t$hostConnected2.call(t);
        });
      }
    }, {
      key: "enableUpdating",
      value: function enableUpdating(t) {}
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this$_$EO4;
        (_this$_$EO4 = this._$EO) === null || _this$_$EO4 === void 0 || _this$_$EO4.forEach(function (t) {
          var _t$hostDisconnected;
          return (_t$hostDisconnected = t.hostDisconnected) === null || _t$hostDisconnected === void 0 ? void 0 : _t$hostDisconnected.call(t);
        });
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
      }
    }, {
      key: "_$EC",
      value: function _$EC(t, s) {
        var i = this.constructor.elementProperties.get(t),
          e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
          var _i$converter;
          var _r = (void 0 !== ((_i$converter = i.converter) === null || _i$converter === void 0 ? void 0 : _i$converter.toAttribute) ? i.converter : u$1).toAttribute(s, i.type);
          this._$Em = t, null == _r ? this.removeAttribute(e) : this.setAttribute(e, _r), this._$Em = null;
        }
      }
    }, {
      key: "_$AK",
      value: function _$AK(t, s) {
        var i = this.constructor,
          e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
          var _t$converter;
          var _t = i.getPropertyOptions(e),
            _r2 = "function" == typeof _t.converter ? {
              fromAttribute: _t.converter
            } : void 0 !== ((_t$converter = _t.converter) === null || _t$converter === void 0 ? void 0 : _t$converter.fromAttribute) ? _t.converter : u$1;
          this._$Em = e, this[e] = _r2.fromAttribute(s, _t.type), this._$Em = null;
        }
      }
    }, {
      key: "requestUpdate",
      value: function requestUpdate(t, s, i) {
        if (void 0 !== t) {
          var _i2, _i$hasChanged;
          if ((_i2 = i) !== null && _i2 !== void 0 ? _i2 : i = this.constructor.getPropertyOptions(t), !((_i$hasChanged = i.hasChanged) !== null && _i$hasChanged !== void 0 ? _i$hasChanged : f$1)(this[t], s)) return;
          this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
      }
    }, {
      key: "P",
      value: function P(t, s, i) {
        var _this$_$Ej;
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && ((_this$_$Ej = this._$Ej) !== null && _this$_$Ej !== void 0 ? _this$_$Ej : this._$Ej = new Set()).add(t);
      }
    }, {
      key: "_$ET",
      value: function () {
        var _$ET2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var t;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.isUpdatePending = !0;
                _context.prev = 1;
                _context.next = 4;
                return this._$ES;
              case 4:
                _context.next = 9;
                break;
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                Promise.reject(_context.t0);
              case 9:
                t = this.scheduleUpdate();
                _context.t1 = null != t;
                if (!_context.t1) {
                  _context.next = 14;
                  break;
                }
                _context.next = 14;
                return t;
              case 14:
                return _context.abrupt("return", !this.isUpdatePending);
              case 15:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[1, 6]]);
        }));
        function _$ET() {
          return _$ET2.apply(this, arguments);
        }
        return _$ET;
      }()
    }, {
      key: "scheduleUpdate",
      value: function scheduleUpdate() {
        return this.performUpdate();
      }
    }, {
      key: "performUpdate",
      value: function performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          var _this$renderRoot2;
          if ((_this$renderRoot2 = this.renderRoot) !== null && _this$renderRoot2 !== void 0 ? _this$renderRoot2 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
            var _iterator2 = _createForOfIteratorHelper(this._$Ep),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                  _t2 = _step2$value[0],
                  _s = _step2$value[1];
                this[_t2] = _s;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            this._$Ep = void 0;
          }
          var _t3 = this.constructor.elementProperties;
          if (_t3.size > 0) {
            var _iterator3 = _createForOfIteratorHelper(_t3),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                  _s2 = _step3$value[0],
                  _i3 = _step3$value[1];
                !0 !== _i3.wrapped || this._$AL.has(_s2) || void 0 === this[_s2] || this.P(_s2, this[_s2], _i3);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
        var t = !1;
        var s = this._$AL;
        try {
          var _this$_$EO5;
          t = this.shouldUpdate(s), t ? (this.willUpdate(s), (_this$_$EO5 = this._$EO) !== null && _this$_$EO5 !== void 0 && _this$_$EO5.forEach(function (t) {
            var _t$hostUpdate;
            return (_t$hostUpdate = t.hostUpdate) === null || _t$hostUpdate === void 0 ? void 0 : _t$hostUpdate.call(t);
          }), this.update(s)) : this._$EU();
        } catch (s) {
          throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
      }
    }, {
      key: "willUpdate",
      value: function willUpdate(t) {}
    }, {
      key: "_$AE",
      value: function _$AE(t) {
        var _this$_$EO6;
        (_this$_$EO6 = this._$EO) !== null && _this$_$EO6 !== void 0 && _this$_$EO6.forEach(function (t) {
          var _t$hostUpdated;
          return (_t$hostUpdated = t.hostUpdated) === null || _t$hostUpdated === void 0 ? void 0 : _t$hostUpdated.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
      }
    }, {
      key: "_$EU",
      value: function _$EU() {
        this._$AL = new Map(), this.isUpdatePending = !1;
      }
    }, {
      key: "updateComplete",
      get: function get() {
        return this.getUpdateComplete();
      }
    }, {
      key: "getUpdateComplete",
      value: function getUpdateComplete() {
        return this._$ES;
      }
    }, {
      key: "shouldUpdate",
      value: function shouldUpdate(t) {
        return !0;
      }
    }, {
      key: "update",
      value: function update(t) {
        var _this3 = this;
        this._$Ej && (this._$Ej = this._$Ej.forEach(function (t) {
          return _this3._$EC(t, _this3[t]);
        })), this._$EU();
      }
    }, {
      key: "updated",
      value: function updated(t) {}
    }, {
      key: "firstUpdated",
      value: function firstUpdated(t) {}
    }], [{
      key: "addInitializer",
      value: function addInitializer(t) {
        var _this$l;
        this._$Ei(), ((_this$l = this.l) !== null && _this$l !== void 0 ? _this$l : this.l = []).push(t);
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return this.finalize(), this._$Eh && _toConsumableArray(this._$Eh.keys());
      }
    }, {
      key: "createProperty",
      value: function createProperty(t) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y$1;
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
          var _i4 = Symbol(),
            _r3 = this.getPropertyDescriptor(t, _i4, s);
          void 0 !== _r3 && e$1(this.prototype, t, _r3);
        }
      }
    }, {
      key: "getPropertyDescriptor",
      value: function getPropertyDescriptor(t, s, i) {
        var _r4;
        var _ref = (_r4 = r$2(this.prototype, t)) !== null && _r4 !== void 0 ? _r4 : {
            get: function get() {
              return this[s];
            },
            set: function set(t) {
              this[s] = t;
            }
          },
          e = _ref.get,
          h = _ref.set;
        return {
          get: function get() {
            return e === null || e === void 0 ? void 0 : e.call(this);
          },
          set: function set(s) {
            var r = e === null || e === void 0 ? void 0 : e.call(this);
            h.call(this, s), this.requestUpdate(t, r, i);
          },
          configurable: !0,
          enumerable: !0
        };
      }
    }, {
      key: "getPropertyOptions",
      value: function getPropertyOptions(t) {
        var _this$elementProperti;
        return (_this$elementProperti = this.elementProperties.get(t)) !== null && _this$elementProperti !== void 0 ? _this$elementProperti : y$1;
      }
    }, {
      key: "_$Ei",
      value: function _$Ei() {
        if (this.hasOwnProperty(d$1("elementProperties"))) return;
        var t = n$1(this);
        t.finalize(), void 0 !== t.l && (this.l = _toConsumableArray(t.l)), this.elementProperties = new Map(t.elementProperties);
      }
    }, {
      key: "finalize",
      value: function finalize() {
        if (this.hasOwnProperty(d$1("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
          var _t4 = this.properties,
            _s3 = [].concat(_toConsumableArray(h$1(_t4)), _toConsumableArray(o$1(_t4)));
          var _iterator4 = _createForOfIteratorHelper(_s3),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _i5 = _step4.value;
              this.createProperty(_i5, _t4[_i5]);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        var t = this[Symbol.metadata];
        if (null !== t) {
          var _s4 = litPropertyMetadata.get(t);
          if (void 0 !== _s4) {
            var _iterator5 = _createForOfIteratorHelper(_s4),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _step5$value = _slicedToArray(_step5.value, 2),
                  _t5 = _step5$value[0],
                  _i6 = _step5$value[1];
                this.elementProperties.set(_t5, _i6);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }
        this._$Eh = new Map();
        var _iterator6 = _createForOfIteratorHelper(this.elementProperties),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _step6$value = _slicedToArray(_step6.value, 2),
              _t6 = _step6$value[0],
              _s5 = _step6$value[1];
            var _i7 = this._$Eu(_t6, _s5);
            void 0 !== _i7 && this._$Eh.set(_i7, _t6);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
    }, {
      key: "finalizeStyles",
      value: function finalizeStyles(s) {
        var i = [];
        if (Array.isArray(s)) {
          var _e = new Set(s.flat(1 / 0).reverse());
          var _iterator7 = _createForOfIteratorHelper(_e),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _s6 = _step7.value;
              i.unshift(c$2(_s6));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } else void 0 !== s && i.push(c$2(s));
        return i;
      }
    }, {
      key: "_$Eu",
      value: function _$Eu(t, s) {
        var i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
      }
    }]);
    return b;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
  }, b[d$1("elementProperties")] = new Map(), b[d$1("finalized")] = new Map(), p$1 !== null && p$1 !== void 0 && p$1({
    ReactiveElement: b
  }), ((_a$reactiveElementVer = a$1.reactiveElementVersions) !== null && _a$reactiveElementVer !== void 0 ? _a$reactiveElementVer : a$1.reactiveElementVersions = []).push("2.0.4");

  var _t$litHtmlVersions;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t = globalThis,
    i = t.trustedTypes,
    s$1 = i ? i.createPolicy("lit-html", {
      createHTML: function createHTML(t) {
        return t;
      }
    }) : void 0,
    e = "$lit$",
    h = "lit$".concat((Math.random() + "").slice(9), "$"),
    o = "?" + h,
    n = "<".concat(o, ">"),
    r$1 = document,
    l = function l() {
      return r$1.createComment("");
    },
    c = function c(t) {
      return null === t || "object" != _typeof(t) && "function" != typeof t;
    },
    a = Array.isArray,
    u = function u(t) {
      return a(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]);
    },
    d = "[ \t\n\f\r]",
    f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    _ = />/g,
    m = RegExp(">|".concat(d, "(?:([^\\s\"'>=/]+)(").concat(d, "*=").concat(d, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
    p = /'/g,
    g = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    y = function y(t) {
      return function (i) {
        for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          s[_key - 1] = arguments[_key];
        }
        return {
          _$litType$: t,
          strings: i,
          values: s
        };
      };
    },
    x = y(1),
    w = Symbol["for"]("lit-noChange"),
    T = Symbol["for"]("lit-nothing"),
    A = new WeakMap(),
    E = r$1.createTreeWalker(r$1, 129);
  function C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$1 ? s$1.createHTML(i) : i;
  }
  var P = function P(t, i) {
    var s = t.length - 1,
      o = [];
    var r,
      l = 2 === i ? "<svg>" : "",
      c = f;
    for (var _i = 0; _i < s; _i++) {
      var _s = t[_i];
      var _a = void 0,
        _u = void 0,
        _d = -1,
        _y = 0;
      for (; _y < _s.length && (c.lastIndex = _y, _u = c.exec(_s), null !== _u);) {
        var _r;
        _y = c.lastIndex, c === f ? "!--" === _u[1] ? c = v : void 0 !== _u[1] ? c = _ : void 0 !== _u[2] ? ($.test(_u[2]) && (r = RegExp("</" + _u[2], "g")), c = m) : void 0 !== _u[3] && (c = m) : c === m ? ">" === _u[0] ? (c = (_r = r) !== null && _r !== void 0 ? _r : f, _d = -1) : void 0 === _u[1] ? _d = -2 : (_d = c.lastIndex - _u[2].length, _a = _u[1], c = void 0 === _u[3] ? m : '"' === _u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
      }
      var _x = c === m && t[_i + 1].startsWith("/>") ? " " : "";
      l += c === f ? _s + n : _d >= 0 ? (o.push(_a), _s.slice(0, _d) + e + _s.slice(_d) + h + _x) : _s + h + (-2 === _d ? _i : _x);
    }
    return [C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), o];
  };
  var V = /*#__PURE__*/function () {
    function V(_ref, n) {
      var t = _ref.strings,
        s = _ref._$litType$;
      _classCallCheck(this, V);
      var r;
      this.parts = [];
      var c = 0,
        a = 0;
      var u = t.length - 1,
        d = this.parts,
        _P = P(t, s),
        _P2 = _slicedToArray(_P, 2),
        f = _P2[0],
        v = _P2[1];
      if (this.el = V.createElement(f, n), E.currentNode = this.el.content, 2 === s) {
        var _t = this.el.content.firstChild;
        _t.replaceWith.apply(_t, _toConsumableArray(_t.childNodes));
      }
      for (; null !== (r = E.nextNode()) && d.length < u;) {
        if (1 === r.nodeType) {
          if (r.hasAttributes()) {
            var _iterator = _createForOfIteratorHelper(r.getAttributeNames()),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _t2 = _step.value;
                if (_t2.endsWith(e)) {
                  var _i2 = v[a++],
                    _s2 = r.getAttribute(_t2).split(h),
                    _e = /([.?@])?(.*)/.exec(_i2);
                  d.push({
                    type: 1,
                    index: c,
                    name: _e[2],
                    strings: _s2,
                    ctor: "." === _e[1] ? k : "?" === _e[1] ? H : "@" === _e[1] ? I : R
                  }), r.removeAttribute(_t2);
                } else _t2.startsWith(h) && (d.push({
                  type: 6,
                  index: c
                }), r.removeAttribute(_t2));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          if ($.test(r.tagName)) {
            var _t3 = r.textContent.split(h),
              _s3 = _t3.length - 1;
            if (_s3 > 0) {
              r.textContent = i ? i.emptyScript : "";
              for (var _i3 = 0; _i3 < _s3; _i3++) r.append(_t3[_i3], l()), E.nextNode(), d.push({
                type: 2,
                index: ++c
              });
              r.append(_t3[_s3], l());
            }
          }
        } else if (8 === r.nodeType) if (r.data === o) d.push({
          type: 2,
          index: c
        });else {
          var _t4 = -1;
          for (; -1 !== (_t4 = r.data.indexOf(h, _t4 + 1));) d.push({
            type: 7,
            index: c
          }), _t4 += h.length - 1;
        }
        c++;
      }
    }
    _createClass(V, null, [{
      key: "createElement",
      value: function createElement(t, i) {
        var s = r$1.createElement("template");
        return s.innerHTML = t, s;
      }
    }]);
    return V;
  }();
  function N(t, i) {
    var _s$_$Co, _h, _h2, _h2$_$AO, _s$_$Co2;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    var e = arguments.length > 3 ? arguments[3] : undefined;
    if (i === w) return i;
    var h = void 0 !== e ? (_s$_$Co = s._$Co) === null || _s$_$Co === void 0 ? void 0 : _s$_$Co[e] : s._$Cl;
    var o = c(i) ? void 0 : i._$litDirective$;
    return ((_h = h) === null || _h === void 0 ? void 0 : _h.constructor) !== o && ((_h2 = h) !== null && _h2 !== void 0 && (_h2$_$AO = _h2._$AO) !== null && _h2$_$AO !== void 0 && _h2$_$AO.call(_h2, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((_s$_$Co2 = s._$Co) !== null && _s$_$Co2 !== void 0 ? _s$_$Co2 : s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)), i;
  }
  var S = /*#__PURE__*/function () {
    function S(t, i) {
      _classCallCheck(this, S);
      this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    _createClass(S, [{
      key: "parentNode",
      get: function get() {
        return this._$AM.parentNode;
      }
    }, {
      key: "_$AU",
      get: function get() {
        return this._$AM._$AU;
      }
    }, {
      key: "u",
      value: function u(t) {
        var _t$creationScope;
        var _this$_$AD = this._$AD,
          i = _this$_$AD.el.content,
          s = _this$_$AD.parts,
          e = ((_t$creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t$creationScope !== void 0 ? _t$creationScope : r$1).importNode(i, !0);
        E.currentNode = e;
        var h = E.nextNode(),
          o = 0,
          n = 0,
          l = s[0];
        for (; void 0 !== l;) {
          var _l;
          if (o === l.index) {
            var _i4 = void 0;
            2 === l.type ? _i4 = new M(h, h.nextSibling, this, t) : 1 === l.type ? _i4 = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (_i4 = new L(h, this, t)), this._$AV.push(_i4), l = s[++n];
          }
          o !== ((_l = l) === null || _l === void 0 ? void 0 : _l.index) && (h = E.nextNode(), o++);
        }
        return E.currentNode = r$1, e;
      }
    }, {
      key: "p",
      value: function p(t) {
        var i = 0;
        var _iterator2 = _createForOfIteratorHelper(this._$AV),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _s4 = _step2.value;
            void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4._$AI(t, _s4, i), i += _s4.strings.length - 2) : _s4._$AI(t[i])), i++;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }]);
    return S;
  }();
  var M = /*#__PURE__*/function () {
    function M(t, i, s, e) {
      var _e$isConnected;
      _classCallCheck(this, M);
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e$isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e$isConnected !== void 0 ? _e$isConnected : !0;
    }
    _createClass(M, [{
      key: "_$AU",
      get: function get() {
        var _this$_$AM$_$AU, _this$_$AM;
        return (_this$_$AM$_$AU = (_this$_$AM = this._$AM) === null || _this$_$AM === void 0 ? void 0 : _this$_$AM._$AU) !== null && _this$_$AM$_$AU !== void 0 ? _this$_$AM$_$AU : this._$Cv;
      }
    }, {
      key: "parentNode",
      get: function get() {
        var _t5;
        var t = this._$AA.parentNode;
        var i = this._$AM;
        return void 0 !== i && 11 === ((_t5 = t) === null || _t5 === void 0 ? void 0 : _t5.nodeType) && (t = i.parentNode), t;
      }
    }, {
      key: "startNode",
      get: function get() {
        return this._$AA;
      }
    }, {
      key: "endNode",
      get: function get() {
        return this._$AB;
      }
    }, {
      key: "_$AI",
      value: function _$AI(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        t = N(this, t, i), c(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
      }
    }, {
      key: "S",
      value: function S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
      }
    }, {
      key: "T",
      value: function T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
      }
    }, {
      key: "_",
      value: function _(t) {
        this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$1.createTextNode(t)), this._$AH = t;
      }
    }, {
      key: "$",
      value: function $(t) {
        var _this$_$AH;
        var i = t.values,
          s = t._$litType$,
          e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C(s.h, s.h[0]), this.options)), s);
        if (((_this$_$AH = this._$AH) === null || _this$_$AH === void 0 ? void 0 : _this$_$AH._$AD) === e) this._$AH.p(i);else {
          var _t6 = new S(e, this),
            _s5 = _t6.u(this.options);
          _t6.p(i), this.T(_s5), this._$AH = _t6;
        }
      }
    }, {
      key: "_$AC",
      value: function _$AC(t) {
        var i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new V(t)), i;
      }
    }, {
      key: "k",
      value: function k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        var i = this._$AH;
        var s,
          e = 0;
        var _iterator3 = _createForOfIteratorHelper(t),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _h3 = _step3.value;
            e === i.length ? i.push(s = new M(this.S(l()), this.S(l()), this, this.options)) : s = i[e], s._$AI(_h3), e++;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
      }
    }, {
      key: "_$AR",
      value: function _$AR() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
        var i = arguments.length > 1 ? arguments[1] : undefined;
        for ((_this$_$AP = this._$AP) === null || _this$_$AP === void 0 ? void 0 : _this$_$AP.call(this, !1, !0, i); t && t !== this._$AB;) {
          var _this$_$AP;
          var _i5 = t.nextSibling;
          t.remove(), t = _i5;
        }
      }
    }, {
      key: "setConnected",
      value: function setConnected(t) {
        var _this$_$AP2;
        void 0 === this._$AM && (this._$Cv = t, (_this$_$AP2 = this._$AP) === null || _this$_$AP2 === void 0 ? void 0 : _this$_$AP2.call(this, t));
      }
    }]);
    return M;
  }();
  var R = /*#__PURE__*/function () {
    function R(t, i, s, e, h) {
      _classCallCheck(this, R);
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
    }
    _createClass(R, [{
      key: "tagName",
      get: function get() {
        return this.element.tagName;
      }
    }, {
      key: "_$AU",
      get: function get() {
        return this._$AM._$AU;
      }
    }, {
      key: "_$AI",
      value: function _$AI(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var e = arguments.length > 3 ? arguments[3] : undefined;
        var h = this.strings;
        var o = !1;
        if (void 0 === h) t = N(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== w, o && (this._$AH = t);else {
          var _e2 = t;
          var _n, _r2;
          for (t = h[0], _n = 0; _n < h.length - 1; _n++) {
            var _r3;
            _r2 = N(this, _e2[s + _n], i, _n), _r2 === w && (_r2 = this._$AH[_n]), o || (o = !c(_r2) || _r2 !== this._$AH[_n]), _r2 === T ? t = T : t !== T && (t += ((_r3 = _r2) !== null && _r3 !== void 0 ? _r3 : "") + h[_n + 1]), this._$AH[_n] = _r2;
          }
        }
        o && !e && this.j(t);
      }
    }, {
      key: "j",
      value: function j(t) {
        t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
      }
    }]);
    return R;
  }();
  var k = /*#__PURE__*/function (_R) {
    _inherits(k, _R);
    function k() {
      var _this;
      _classCallCheck(this, k);
      _this = _callSuper(this, k, arguments), _this.type = 3;
      return _this;
    }
    _createClass(k, [{
      key: "j",
      value: function j(t) {
        this.element[this.name] = t === T ? void 0 : t;
      }
    }]);
    return k;
  }(R);
  var H = /*#__PURE__*/function (_R2) {
    _inherits(H, _R2);
    function H() {
      var _this2;
      _classCallCheck(this, H);
      _this2 = _callSuper(this, H, arguments), _this2.type = 4;
      return _this2;
    }
    _createClass(H, [{
      key: "j",
      value: function j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== T);
      }
    }]);
    return H;
  }(R);
  var I = /*#__PURE__*/function (_R3) {
    _inherits(I, _R3);
    function I(t, i, s, e, h) {
      var _this3;
      _classCallCheck(this, I);
      _this3 = _callSuper(this, I, [t, i, s, e, h]), _this3.type = 5;
      return _this3;
    }
    _createClass(I, [{
      key: "_$AI",
      value: function _$AI(t) {
        var _N;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        if ((t = (_N = N(this, t, i, 0)) !== null && _N !== void 0 ? _N : T) === w) return;
        var s = this._$AH,
          e = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
          h = t !== T && (s === T || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t) {
        var _this$options$host, _this$options;
        "function" == typeof this._$AH ? this._$AH.call((_this$options$host = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.host) !== null && _this$options$host !== void 0 ? _this$options$host : this.element, t) : this._$AH.handleEvent(t);
      }
    }]);
    return I;
  }(R);
  var L = /*#__PURE__*/function () {
    function L(t, i, s) {
      _classCallCheck(this, L);
      this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    _createClass(L, [{
      key: "_$AU",
      get: function get() {
        return this._$AM._$AU;
      }
    }, {
      key: "_$AI",
      value: function _$AI(t) {
        N(this, t);
      }
    }]);
    return L;
  }();
  var Z = t.litHtmlPolyfillSupport;
  Z !== null && Z !== void 0 && Z(V, M), ((_t$litHtmlVersions = t.litHtmlVersions) !== null && _t$litHtmlVersions !== void 0 ? _t$litHtmlVersions : t.litHtmlVersions = []).push("3.1.2");
  var j = function j(t, i, s) {
    var _s$renderBefore;
    var e = (_s$renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore !== void 0 ? _s$renderBefore : i;
    var h = e._$litPart$;
    if (void 0 === h) {
      var _s$renderBefore2;
      var _t7 = (_s$renderBefore2 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore2 !== void 0 ? _s$renderBefore2 : null;
      e._$litPart$ = h = new M(i.insertBefore(l(), _t7), _t7, void 0, s !== null && s !== void 0 ? s : {});
    }
    return h._$AI(t), h;
  };

  var _globalThis$litElemen, _globalThis$litElemen2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var s = /*#__PURE__*/function (_t) {
    _inherits(s, _t);
    function s() {
      var _this;
      _classCallCheck(this, s);
      _this = _callSuper(this, s, arguments), _this.renderOptions = {
        host: _assertThisInitialized(_this)
      }, _this._$Do = void 0;
      return _this;
    }
    _createClass(s, [{
      key: "createRenderRoot",
      value: function createRenderRoot() {
        var _this$renderOptions, _this$renderOptions$r;
        var t = _get(_getPrototypeOf(s.prototype), "createRenderRoot", this).call(this);
        return (_this$renderOptions$r = (_this$renderOptions = this.renderOptions).renderBefore) !== null && _this$renderOptions$r !== void 0 ? _this$renderOptions$r : _this$renderOptions.renderBefore = t.firstChild, t;
      }
    }, {
      key: "update",
      value: function update(t) {
        var i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(s.prototype), "update", this).call(this, t), this._$Do = j(i, this.renderRoot, this.renderOptions);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this$_$Do;
        _get(_getPrototypeOf(s.prototype), "connectedCallback", this).call(this), (_this$_$Do = this._$Do) === null || _this$_$Do === void 0 ? void 0 : _this$_$Do.setConnected(!0);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this$_$Do2;
        _get(_getPrototypeOf(s.prototype), "disconnectedCallback", this).call(this), (_this$_$Do2 = this._$Do) === null || _this$_$Do2 === void 0 ? void 0 : _this$_$Do2.setConnected(!1);
      }
    }, {
      key: "render",
      value: function render() {
        return w;
      }
    }]);
    return s;
  }(b);
  s._$litElement$ = !0, s[("finalized")] = !0, (_globalThis$litElemen = globalThis.litElementHydrateSupport) === null || _globalThis$litElemen === void 0 ? void 0 : _globalThis$litElemen.call(globalThis, {
    LitElement: s
  });
  var r = globalThis.litElementPolyfillSupport;
  r === null || r === void 0 || r({
    LitElement: s
  });
  ((_globalThis$litElemen2 = globalThis.litElementVersions) !== null && _globalThis$litElemen2 !== void 0 ? _globalThis$litElemen2 : globalThis.litElementVersions = []).push("4.0.4");

  var _templateObject$3, _templateObject2$3;
  // import './fonts/fonts.css';
  /**
   * Service Now Text Component
   * @input label, type
   * @output <sn-wc-text> in dom
   */

  var hasLoadedMaterialSymbolsFont$2 = false;
  var loadLatoFont$1 = function loadLatoFont() {
    if (hasLoadedMaterialSymbolsFont$2) {
      return;
    }
    hasLoadedMaterialSymbolsFont$2 = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n  @font-face {\n    font-family: 'lato';\n    src: url(https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff) format('woff');\n    font-weight: normal;\n  }");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var SnWcText = /*#__PURE__*/function (_LitElement) {
    _inherits(SnWcText, _LitElement);
    function SnWcText() {
      var _this;
      _classCallCheck(this, SnWcText);
      _this = _callSuper(this, SnWcText);
      loadLatoFont$1();
      return _this;
    }
    _createClass(SnWcText, [{
      key: "render",
      value: function render() {
        var mode = "sn-wc-text";
        return x(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n    <style>\n      p {\n        font-family:'lato' !important;\n      }\n    </style>\n      <p part=\"sn-wc-text\" class=", ">\n        <slot></slot>\n      </p>\n    "])), [mode].join(" "));
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          label: {
            type: String
          },
          styles: {
            type: Object
          }
        };
      }
    }]);
    return SnWcText;
  }(s);
  _defineProperty(SnWcText, "styles", i$2(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  *{\n    padding: 0;\n    margin: 0;\n  }\n    :host {\n      --sn-wc-text-color: #1f1f1f;\n      --sn-wc-line-height: 24px;\n      --sn-wc-padding-x: 0px;\n      --sn-wc-padding-y: 0px;\n    }\n    .sn-wc-text {\n      color: var(--sn-wc-text-color);\n      line-height: var(--sn-wc-line-height);\n    }\n  "]))));
  customElements.define("sn-wc-text", SnWcText);

  var ButtonClickEvent = /*#__PURE__*/function (_Event) {
    _inherits(ButtonClickEvent, _Event);
    function ButtonClickEvent(detail) {
      var _this;
      _classCallCheck(this, ButtonClickEvent);
      _this = _callSuper(this, ButtonClickEvent, ["btn-click-event", {
        bubbles: true,
        composed: true
      }]);
      _this.detail = detail;
      return _this;
    }
    return _createClass(ButtonClickEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));

  var _templateObject$2, _templateObject2$2, _templateObject3$1, _templateObject4$1;

  /**
   * Service Now Link Component
   * @input label, type, onclick
   * @output <sn-wc-link> in dom
   * @args onClick, type, size, target, href
   */
  var hasLoadedMaterialSymbolsFont$1 = false;
  var loadLatoFont = function loadLatoFont() {
    if (hasLoadedMaterialSymbolsFont$1) {
      return;
    }
    hasLoadedMaterialSymbolsFont$1 = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n  @font-face{font-family:lato;font-style:normal;font-weight:700;src:local('Lato'),url(https://fonts.cdnfonts.com/s/14882/Lato-Bold.woff) format('woff')}");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var SnWcLink = /*#__PURE__*/function (_LitElement) {
    _inherits(SnWcLink, _LitElement);
    function SnWcLink() {
      var _this;
      _classCallCheck(this, SnWcLink);
      _this = _callSuper(this, SnWcLink);
      loadLatoFont();
      return _this;
    }
    _createClass(SnWcLink, [{
      key: "handleButtonClick",
      value: function handleButtonClick(e) {
        this.dispatchEvent(new ButtonClickEvent({
          message: "Link Button clicked"
        }));
      }
    }, {
      key: "getAnchorTag",
      value: function getAnchorTag() {
        var size = "";
        var linkSize = "";
        if (this.size == "Large") {
          size = "btn-lg";
          linkSize = "btn-link-lg";
        } else if (this.size == "Medium") {
          size = "btn-md";
          linkSize = "btn-link-md";
        }
        if (this.type === "Outline" || this.type === "Solid") {
          var btnClass = "btn";
          if (this.type === "Outline") {
            btnClass = btnClass + " btn-outline";
          } else {
            btnClass = btnClass + " btn-solid";
          }
          return x(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["<button\n        type=\"button\"\n        part=\"sn-wc-link\"\n        @click=\"", "\"\n        class=", "\n      >\n        ", "\n      </button>"])), this.handleButtonClick, [btnClass, size, "btn-spacing"].join(" "), this.label);
        } else {
          return x(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        <a\n          part=\"sn-wc-link\"\n          href=\"", "\"\n          class=", "\n          style=\"--sn-wc-padding-y: 0px;\"\n          target=\"", "\"\n        >\n          ", "\n        </a>\n      "])), this.href, ["btn btn-link", linkSize, "btn-spacing"].join(" "), this.target, this.label);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n      <style>\n        a,button {\n        font-family:'lato', sans-serif !important;\n        }\n          .btn {\n              --bs-btn-padding-x: 16px;\n              --bs-btn-padding-y: 4px;\n              --bs-btn-font-family: Lato;\n              --bs-btn-font-size: 16px;\n              --bs-btn-font-weight: 700;\n              --bs-btn-line-height: 1.5;\n              --bs-btn-color: #212529;\n              --bs-btn-bg: transparent;\n              --bs-btn-border-width: 1px;\n              --bs-btn-border-color: #298319;\n              --bs-btn-border-radius: 50rem;\n              --bs-btn-hover-border-color: transparent;\n              --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n              --bs-btn-hover-color:  #1f6213;\n              --bs-link-hover-color: #1F6213;\n              --bs-link-color: #298319;\n              --bs-btn-disabled-opacity: 0.65;\n              --bs-btn-focus-box-shadow: 0 0 0 0.25rem\n                rgba(var(--bs-btn-focus-shadow-rgb), 0.5);\n              display: inline-block;\n              padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);\n              font-family: var(--bs-btn-font-family);\n              font-size: var(--bs-btn-font-size);\n              font-weight: var(--bs-btn-font-weight);\n              line-height: 24px;\n              color: var(--bs-btn-color);\n              text-align: center;\n              text-decoration: none;\n              vertical-align: middle;\n              cursor: pointer;\n              user-select: none;\n              border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);\n              border-radius: var(--bs-btn-border-radius);\n              background-color: var(--bs-btn-bg);\n              transition: color 0.15s ease-in-out,\n                background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n                box-shadow 0.15s ease-in-out;\n            }\n            .btn:hover {\n              color: var(--bs-btn-hover-color);\n              background-color: var(--bs-btn-hover-bg);\n              border-color: var(--bs-btn-hover-border-color);\n\n            }\n            .btn:focus-visible {\n              color: var(--bs-btn-hover-color);\n              background-color: var(--bs-btn-hover-bg);\n              border-color: var(--bs-btn-hover-border-color);\n              outline: 0;\n              box-shadow: var(--bs-btn-focus-box-shadow);\n            }\n            .btn.active {\n              color: var(--bs-btn-active-color);\n              background-color: var(--bs-btn-active-bg);\n              border-color: var(--bs-btn-active-border-color);\n            }\n\n            .btn-solid {\n              --bs-btn-color: #fff;\n              --bs-btn-bg: #298319;\n              --bs-btn-border-color:var( --bs-btn-border-color);\n              --bs-btn-hover-color: #fff;\n              --bs-btn-hover-bg: #1f6213;\n              --bs-btn-hover-border-color: #1f6213;\n              --bs-btn-focus-shadow-rgb: 212, 38, 119;\n              --bs-btn-active-color: #fff;\n              --bs-btn-active-bg: #1f6213;\n              --bs-btn-active-border-color: #1f6213;\n              --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n\n            }\n            .btn-outline {\n              --bs-btn-color: #298319;\n              --bs-btn-border-color: #298319;\n              --bs-btn-hover-color: #1f6213;\n              --bs-btn-hover-bg: #fffff;\n              --bs-btn-hover-border-color: #1f6213;\n              --bs-btn-focus-shadow-rgb: 25, 135, 84;\n              --bs-btn-active-color: #fff;\n              --bs-btn-active-bg: #fff;\n              --bs-btn-active-border-color: #198754;\n              --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n              --bs-gradient: none;\n            }\n\n            .btn-link {\n              --bs-btn-font-weight: bold;\n              --bs-btn-color: var(--bs-link-color);\n              --bs-btn-bg: transparent;\n              --bs-btn-border-color: transparent;\n              --bs-btn-hover-color: var(--bs-link-hover-color);\n              --bs-btn-hover-border-color: transparent;\n              --bs-btn-active-color: var(--bs-link-hover-color);\n              --bs-btn-active-border-color: transparent;\n              --bs-btn-box-shadow: none;\n              --bs-btn-focus-shadow-rgb: 212, 38, 119;\n              --bs-btn-padding-x: 0;\n              text-decoration: none;\n            }\n            .btn-link:focus-visible {\n              color: var(--bs-btn-color);\n            }\n            .btn-link:hover {\n              color: var(--bs-btn-hover-color);\n            }\n\n            .btn-lg {\n              --bs-btn-padding-y: 8px;\n              --bs-btn-padding-x: 32px;\n              --bs-btn-font-size: 24px;\n              --bs-btn-border-radius: 50rem;\n            }\n\n            .btn-md {\n              --bs-btn-padding-y: 6px;\n              --bs-btn-padding-x: 28px;\n              --bs-btn-font-size: 18px;\n              --bs-btn-border-radius: 50rem;\n            }\n            .btn-link-md{\n              --bs-btn-font-size:18px;\n              --bs-btn-border-radius: 0.25rem;\n            }\n            .btn-link-lg{\n              --bs-btn-font-size: 32px;\n              --bs-btn-border-radius: 0.5rem;\n            }\n      </style>\n      ", "\n    "])), this.getAnchorTag());
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          label: {
            type: String
          },
          type: {
            type: String
          },
          onClick: {
            type: Function
          },
          size: {
            type: String
          },
          target: {
            type: String
          },
          href: {
            type: String
          }
        };
      }
    }]);
    return SnWcLink;
  }(s);
  _defineProperty(SnWcLink, "styles", i$2(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral([""]))));
  customElements.define("sn-wc-link", SnWcLink);

  var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
  /**
   * Service Now Heading Component
   * @input label, type
   * @output <sn-wc-heading> in dom
   */

  var hasLoadedMaterialSymbolsFont = false;
  var loadGilroyFont = function loadGilroyFont() {
    if (hasLoadedMaterialSymbolsFont) {
      return;
    }
    hasLoadedMaterialSymbolsFont = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n  @font-face {\n    font-family: 'gilroy';\n    src: url(https://cdn.jsdelivr.net/gh/RohitDogra777/gilroy-font@v1.0.0/Gilroy-Semibold.woff) format('woff');\n    font-weight: normal;\n  }");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var SnWcHeading = /*#__PURE__*/function (_LitElement) {
    _inherits(SnWcHeading, _LitElement);
    function SnWcHeading() {
      var _this;
      _classCallCheck(this, SnWcHeading);
      _this = _callSuper(this, SnWcHeading);
      _this.surface = "Dark";
      loadGilroyFont();
      return _this;
    }
    _createClass(SnWcHeading, [{
      key: "getHeading",
      value: function getHeading(surface) {
        var mode = surface == "Dark" ? "dark-surface" : "white-surface";
        if (this["heading-level"] == "1") {
          return x(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["<h1\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h1>"])), ["sn-wc-heading", mode].join(" "));
        }
        if (this["heading-level"] == "2") {
          return x(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["<h2\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h2>"])), ["sn-wc-heading", mode].join(" "));
        }
        if (this["heading-level"] == "3") {
          return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<h3\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h3>"])), ["sn-wc-heading", mode].join(" "));
        }
        if (this["heading-level"] == "4") {
          return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<h4\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h4>"])), ["sn-wc-heading", mode].join(" "));
        }
        if (this["heading-level"] == "5") {
          return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<h5\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h5>"])), ["sn-wc-heading", mode].join(" "));
        }
        if (this["heading-level"] == "6") {
          return x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<h6\n        part=\"sn-wc-heading\"\n        class=", "\n      >\n        <slot></slot>\n      </h6>"])), ["sn-wc-heading", mode].join(" "));
        }
        return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<h1\n      part=\"sn-wc-heading\"\n      class=", "\n    >\n      <slot></slot>\n    </h1>"])), ["sn-wc-heading", mode].join(" "));
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          font-family: \"gilroy\";\n\n          font-weight: 600;\n        }\n        .sn-wc-heading {\n          margin: 0px;\n          padding: 0px;\n          margin-bottom: var(--sn-wc-margin-bottom);\n        }\n        .white-surface {\n          color: #ffffff;\n        }\n        .dark-surface {\n          color: #1f1f1f;\n        }\n      </style>\n      ", "\n    "])), this.getHeading(this.surface));
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          surface: {
            type: String
          },
          "heading-level": {
            type: String
          }
        };
      }
    }]);
    return SnWcHeading;
  }(s);
  _defineProperty(SnWcHeading, "styles", i$2(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    :host {\n      --sn-wc-margin-bottom: 0px;\n    }\n  "]))));
  customElements.define("sn-wc-heading", SnWcHeading);

  var _templateObject, _templateObject2;

  /**
   * Service Now Text Component
   * @input label, type
   * @output <sn-wc-text> in dom
   */
  var SnWcCard = /*#__PURE__*/function (_LitElement) {
    _inherits(SnWcCard, _LitElement);
    function SnWcCard() {
      _classCallCheck(this, SnWcCard);
      return _callSuper(this, SnWcCard);
    }
    _createClass(SnWcCard, [{
      key: "triggerClick",
      value: function triggerClick(e) {
        window.open(this.viewMoreLink, '_blank');
      }
    }, {
      key: "getCardComponent",
      value: function getCardComponent() {}
    }, {
      key: "render",
      value: function render() {
        "snow-storybook-".concat(this.type);
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <style>\n        .card {\n          --bs-card-spacer-y: 8px;\n          --bs-card-spacer-x: 16px;\n          --bs-card-border-width: 1px;\n          --bs-card-border-color: rgba(0, 0, 0, 0.175);\n          --bs-card-border-radius: 2rem;\n          --bs-card-bg: #fff;\n          --bs-card-img-overlay-padding: 1rem;\n          --bs-card-height: 350px;\n          --bs-card-width: 401px;\n          font-size: var(--sn-wc-font-size);\n          position: relative;\n          display: flex;\n          flex-direction: column;\n          min-width: 0;\n          width: 100%;\n          word-wrap: break-word;\n          background-color: var(--bs-card-bg);\n          background-clip: border-box;\n          border: var(--bs-card-border-width) solid var(--bs-card-border-color);\n          border-radius: var(--bs-card-border-radius);\n          overflow: hidden;\n          transition: box-shaddow 0.3s;\n          min-height: 0;\n        }\n        .card-body {\n          flex: 1 1 auto;\n          padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);\n          color: var(--bs-card-color);\n        }\n        .card-img-overlay {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          padding: var(--bs-card-img-overlay-padding);\n          border-radius: var(--bs-card-inner-border-radius);\n        }\n\n        .card-img,\n        .card-img-top,\n        .card-img-bottom {\n          width: 100%;\n        }\n\n        .card-img,\n        .card-img-top {\n          border-top-left-radius: var(--bs-card-inner-border-radius);\n          border-top-right-radius: var(--bs-card-inner-border-radius);\n        }\n\n        .card-img,\n        .card-img-bottom {\n          border-bottom-right-radius: var(--bs-card-inner-border-radius);\n          border-bottom-left-radius: var(--bs-card-inner-border-radius);\n        }\n\n        .snow-storybook-card-image {\n          height: 144px;\n          object-fit: cover;\n        }\n        .snow-storybook-card {\n          max-width: 401px;\n        }\n        .card-link {\n          margin-top: 16px;\n          margin-bottom: 12px;\n        }\n\n        .card-text {\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          overflow: hidden;\n          text-overflow: ellipses;\n          -webkit-line-clamp: 3;\n          height: 75px;\n        }\n\n        @media screen and (max-width: 568px) {\n          .snow-storybook-card-image {\n            display: none;\n          }\n          .card {\n            padding: 0px;\n            height: auto;\n          }\n        }\n        sn-wc-heading {\n          --sn-wc-margin-bottom: 4px;\n          --sn-wc-font-size: 20px;\n        }\n      </style>\n      <div class=\"card snow-storybook-card\">\n        <img src=", " class=\"snow-storybook-card-image\" />\n        <div class=\"card-body\">\n          <sn-wc-heading heading-level=\"4\">", "</sn-wc-heading>\n          <div class=\"card-text\" slot=\"sn-wc-text\">\n            <sn-wc-text>", "</sn-wc-text>\n          </div>\n          <div class=\"card-link\">\n            <sn-wc-link\n              type=\"", "\"\n              label=\"", "\"\n              target=\"", "\",\n              href=\"", "\"\n              @btn-click-event=\"", "\"\n            ></sn-wc-link>\n          </div>\n        </div>\n      </div>\n    "])), this.imageSrc, this.heading, this.body, this.linkType, this.linkLabel, this.target, this.viewMoreLink, this.triggerClick);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          linkType: {
            type: String
          },
          imageSrc: {
            type: String
          },
          heading: {
            type: String
          },
          body: {
            type: String
          },
          linkLabel: {
            type: String
          },
          viewMoreLink: {
            type: String
          },
          target: {
            type: String
          }
        };
      }
    }]);
    return SnWcCard;
  }(s);
  _defineProperty(SnWcCard, "styles", i$2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ::part(sn-wc-heading) {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipses;\n      -webkit-line-clamp: 1;\n      font-size: 20px;\n      line-height: 28px;\n    }\n    ::part(sn-wc-text) {\n      color: #1f1f1f;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 24px;\n    }\n  "]))));
  customElements.define("sn-wc-card", SnWcCard);

  exports.SnWcCard = SnWcCard;
  exports.SnWcHeading = SnWcHeading;
  exports.SnWcLink = SnWcLink;
  exports.SnWcText = SnWcText;

}));
