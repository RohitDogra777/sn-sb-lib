(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
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
        if (o === f) throw Error("Generator is already running");
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
              if (!u) throw Error("try statement without catch or finally");
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
        throw Error("illegal catch attempt");
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
    return "symbol" == typeof i ? i : i + "";
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
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
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
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike  ) {
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
  var t$2 = globalThis,
    e$5 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    s$4 = Symbol(),
    o$5 = new WeakMap();
  var n$5 = /*#__PURE__*/function () {
    function n(t, e, o) {
      _classCallCheck(this, n);
      if (this._$cssResult$ = !0, o !== s$4) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = e;
    }
    return _createClass(n, [{
      key: "styleSheet",
      get: function get() {
        var t = this.o;
        var s = this.t;
        if (e$5 && void 0 === t) {
          var _e = void 0 !== s && 1 === s.length;
          _e && (t = o$5.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), _e && o$5.set(s, t));
        }
        return t;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.cssText;
      }
    }]);
  }();
  var r$4 = function r(t) {
      return new n$5("string" == typeof t ? t : t + "", void 0, s$4);
    },
    i$3 = function i(t) {
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
      return new n$5(o, t, s$4);
    },
    S$1 = function S(s, o) {
      if (e$5) s.adoptedStyleSheets = o.map(function (t) {
        return t instanceof CSSStyleSheet ? t : t.styleSheet;
      });else {
        var _iterator = _createForOfIteratorHelper(o),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _e2 = _step.value;
            var _o = document.createElement("style"),
              _n = t$2.litNonce;
            void 0 !== _n && _o.setAttribute("nonce", _n), _o.textContent = _e2.cssText, s.appendChild(_o);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    c$3 = e$5 ? function (t) {
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
        return r$4(e);
      }(t) : t;
    };

  var _Symbol$metadata, _a$litPropertyMetadat, _a$reactiveElementVer;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var i$2 = Object.is,
    e$4 = Object.defineProperty,
    r$3 = Object.getOwnPropertyDescriptor,
    h$3 = Object.getOwnPropertyNames,
    o$4 = Object.getOwnPropertySymbols,
    n$4 = Object.getPrototypeOf,
    a$2 = globalThis,
    c$2 = a$2.trustedTypes,
    l$2 = c$2 ? c$2.emptyScript : "",
    p$1 = a$2.reactiveElementPolyfillSupport,
    d$1 = function d(t, s) {
      return t;
    },
    u$1 = {
      toAttribute: function toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l$2 : null;
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
    f$3 = function f(t, s) {
      return !i$2(t, s);
    },
    y$1 = {
      attribute: !0,
      type: String,
      converter: u$1,
      reflect: !1,
      hasChanged: f$3
    };
  (_Symbol$metadata = Symbol.metadata) !== null && _Symbol$metadata !== void 0 ? _Symbol$metadata : Symbol.metadata = Symbol("metadata"), (_a$litPropertyMetadat = a$2.litPropertyMetadata) !== null && _a$litPropertyMetadat !== void 0 ? _a$litPropertyMetadat : a$2.litPropertyMetadata = new WeakMap();
  var b = /*#__PURE__*/function (_HTMLElement) {
    function b() {
      var _this;
      _classCallCheck(this, b);
      _this = _callSuper(this, b), _this._$Ep = void 0, _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$Em = null, _this._$Ev();
      return _this;
    }
    _inherits(b, _HTMLElement);
    return _createClass(b, [{
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
          if ((_i2 = i) !== null && _i2 !== void 0 ? _i2 : i = this.constructor.getPropertyOptions(t), !((_i$hasChanged = i.hasChanged) !== null && _i$hasChanged !== void 0 ? _i$hasChanged : f$3)(this[t], s)) return;
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
          void 0 !== _r3 && e$4(this.prototype, t, _r3);
        }
      }
    }, {
      key: "getPropertyDescriptor",
      value: function getPropertyDescriptor(t, s, i) {
        var _r4;
        var _ref = (_r4 = r$3(this.prototype, t)) !== null && _r4 !== void 0 ? _r4 : {
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
        var t = n$4(this);
        t.finalize(), void 0 !== t.l && (this.l = _toConsumableArray(t.l)), this.elementProperties = new Map(t.elementProperties);
      }
    }, {
      key: "finalize",
      value: function finalize() {
        if (this.hasOwnProperty(d$1("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
          var _t4 = this.properties,
            _s3 = [].concat(_toConsumableArray(h$3(_t4)), _toConsumableArray(o$4(_t4)));
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
              i.unshift(c$3(_s6));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } else void 0 !== s && i.push(c$3(s));
        return i;
      }
    }, {
      key: "_$Eu",
      value: function _$Eu(t, s) {
        var i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
  }, b[d$1("elementProperties")] = new Map(), b[d$1("finalized")] = new Map(), p$1 !== null && p$1 !== void 0 && p$1({
    ReactiveElement: b
  }), ((_a$reactiveElementVer = a$2.reactiveElementVersions) !== null && _a$reactiveElementVer !== void 0 ? _a$reactiveElementVer : a$2.reactiveElementVersions = []).push("2.0.4");

  var _t$litHtmlVersions;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1 = globalThis,
    i$1 = t$1.trustedTypes,
    s$3 = i$1 ? i$1.createPolicy("lit-html", {
      createHTML: function createHTML(t) {
        return t;
      }
    }) : void 0,
    e$3 = "$lit$",
    h$2 = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
    o$3 = "?" + h$2,
    n$3 = "<".concat(o$3, ">"),
    r$2 = document,
    l$1 = function l() {
      return r$2.createComment("");
    },
    c$1 = function c(t) {
      return null === t || "object" != _typeof(t) && "function" != typeof t;
    },
    a$1 = Array.isArray,
    u = function u(t) {
      return a$1(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]);
    },
    d = "[ \t\n\f\r]",
    f$2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
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
    E = r$2.createTreeWalker(r$2, 129);
  function C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$3 ? s$3.createHTML(i) : i;
  }
  var P = function P(t, i) {
    var s = t.length - 1,
      o = [];
    var r,
      l = 2 === i ? "<svg>" : "",
      c = f$2;
    for (var _i = 0; _i < s; _i++) {
      var _s = t[_i];
      var _a = void 0,
        _u = void 0,
        _d = -1,
        _y = 0;
      for (; _y < _s.length && (c.lastIndex = _y, _u = c.exec(_s), null !== _u);) {
        var _r;
        _y = c.lastIndex, c === f$2 ? "!--" === _u[1] ? c = v : void 0 !== _u[1] ? c = _ : void 0 !== _u[2] ? ($.test(_u[2]) && (r = RegExp("</" + _u[2], "g")), c = m) : void 0 !== _u[3] && (c = m) : c === m ? ">" === _u[0] ? (c = (_r = r) !== null && _r !== void 0 ? _r : f$2, _d = -1) : void 0 === _u[1] ? _d = -2 : (_d = c.lastIndex - _u[2].length, _a = _u[1], c = void 0 === _u[3] ? m : '"' === _u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f$2 : (c = m, r = void 0);
      }
      var _x = c === m && t[_i + 1].startsWith("/>") ? " " : "";
      l += c === f$2 ? _s + n$3 : _d >= 0 ? (o.push(_a), _s.slice(0, _d) + e$3 + _s.slice(_d) + h$2 + _x) : _s + h$2 + (-2 === _d ? _i : _x);
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
                if (_t2.endsWith(e$3)) {
                  var _i2 = v[a++],
                    _s2 = r.getAttribute(_t2).split(h$2),
                    _e = /([.?@])?(.*)/.exec(_i2);
                  d.push({
                    type: 1,
                    index: c,
                    name: _e[2],
                    strings: _s2,
                    ctor: "." === _e[1] ? k : "?" === _e[1] ? H : "@" === _e[1] ? I : R
                  }), r.removeAttribute(_t2);
                } else _t2.startsWith(h$2) && (d.push({
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
            var _t3 = r.textContent.split(h$2),
              _s3 = _t3.length - 1;
            if (_s3 > 0) {
              r.textContent = i$1 ? i$1.emptyScript : "";
              for (var _i3 = 0; _i3 < _s3; _i3++) r.append(_t3[_i3], l$1()), E.nextNode(), d.push({
                type: 2,
                index: ++c
              });
              r.append(_t3[_s3], l$1());
            }
          }
        } else if (8 === r.nodeType) if (r.data === o$3) d.push({
          type: 2,
          index: c
        });else {
          var _t4 = -1;
          for (; -1 !== (_t4 = r.data.indexOf(h$2, _t4 + 1));) d.push({
            type: 7,
            index: c
          }), _t4 += h$2.length - 1;
        }
        c++;
      }
    }
    return _createClass(V, null, [{
      key: "createElement",
      value: function createElement(t, i) {
        var s = r$2.createElement("template");
        return s.innerHTML = t, s;
      }
    }]);
  }();
  function N(t, i) {
    var _s$_$Co, _h, _h2, _h2$_$AO, _s$_$Co2;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    var e = arguments.length > 3 ? arguments[3] : undefined;
    if (i === w) return i;
    var h = void 0 !== e ? (_s$_$Co = s._$Co) === null || _s$_$Co === void 0 ? void 0 : _s$_$Co[e] : s._$Cl;
    var o = c$1(i) ? void 0 : i._$litDirective$;
    return ((_h = h) === null || _h === void 0 ? void 0 : _h.constructor) !== o && ((_h2 = h) !== null && _h2 !== void 0 && (_h2$_$AO = _h2._$AO) !== null && _h2$_$AO !== void 0 && _h2$_$AO.call(_h2, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((_s$_$Co2 = s._$Co) !== null && _s$_$Co2 !== void 0 ? _s$_$Co2 : s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)), i;
  }
  var S = /*#__PURE__*/function () {
    function S(t, i) {
      _classCallCheck(this, S);
      this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    return _createClass(S, [{
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
          e = ((_t$creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t$creationScope !== void 0 ? _t$creationScope : r$2).importNode(i, !0);
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
        return E.currentNode = r$2, e;
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
  }();
  var M = /*#__PURE__*/function () {
    function M(t, i, s, e) {
      var _e$isConnected;
      _classCallCheck(this, M);
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e$isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e$isConnected !== void 0 ? _e$isConnected : !0;
    }
    return _createClass(M, [{
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
        t = N(this, t, i), c$1(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
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
        this._$AH !== T && c$1(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$2.createTextNode(t)), this._$AH = t;
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
        a$1(this._$AH) || (this._$AH = [], this._$AR());
        var i = this._$AH;
        var s,
          e = 0;
        var _iterator3 = _createForOfIteratorHelper(t),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _h3 = _step3.value;
            e === i.length ? i.push(s = new M(this.S(l$1()), this.S(l$1()), this, this.options)) : s = i[e], s._$AI(_h3), e++;
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
  }();
  var R = /*#__PURE__*/function () {
    function R(t, i, s, e, h) {
      _classCallCheck(this, R);
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
    }
    return _createClass(R, [{
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
        if (void 0 === h) t = N(this, t, i, 0), o = !c$1(t) || t !== this._$AH && t !== w, o && (this._$AH = t);else {
          var _e2 = t;
          var _n, _r2;
          for (t = h[0], _n = 0; _n < h.length - 1; _n++) {
            var _r3;
            _r2 = N(this, _e2[s + _n], i, _n), _r2 === w && (_r2 = this._$AH[_n]), o || (o = !c$1(_r2) || _r2 !== this._$AH[_n]), _r2 === T ? t = T : t !== T && (t += ((_r3 = _r2) !== null && _r3 !== void 0 ? _r3 : "") + h[_n + 1]), this._$AH[_n] = _r2;
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
  }();
  var k = /*#__PURE__*/function (_R) {
    function k() {
      var _this;
      _classCallCheck(this, k);
      _this = _callSuper(this, k, arguments), _this.type = 3;
      return _this;
    }
    _inherits(k, _R);
    return _createClass(k, [{
      key: "j",
      value: function j(t) {
        this.element[this.name] = t === T ? void 0 : t;
      }
    }]);
  }(R);
  var H = /*#__PURE__*/function (_R2) {
    function H() {
      var _this2;
      _classCallCheck(this, H);
      _this2 = _callSuper(this, H, arguments), _this2.type = 4;
      return _this2;
    }
    _inherits(H, _R2);
    return _createClass(H, [{
      key: "j",
      value: function j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== T);
      }
    }]);
  }(R);
  var I = /*#__PURE__*/function (_R3) {
    function I(t, i, s, e, h) {
      var _this3;
      _classCallCheck(this, I);
      _this3 = _callSuper(this, I, [t, i, s, e, h]), _this3.type = 5;
      return _this3;
    }
    _inherits(I, _R3);
    return _createClass(I, [{
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
  }(R);
  var L = /*#__PURE__*/function () {
    function L(t, i, s) {
      _classCallCheck(this, L);
      this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    return _createClass(L, [{
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
  }();
  var Z = t$1.litHtmlPolyfillSupport;
  Z !== null && Z !== void 0 && Z(V, M), ((_t$litHtmlVersions = t$1.litHtmlVersions) !== null && _t$litHtmlVersions !== void 0 ? _t$litHtmlVersions : t$1.litHtmlVersions = []).push("3.1.4");
  var j = function j(t, i, s) {
    var _s$renderBefore;
    var e = (_s$renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore !== void 0 ? _s$renderBefore : i;
    var h = e._$litPart$;
    if (void 0 === h) {
      var _s$renderBefore2;
      var _t7 = (_s$renderBefore2 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore2 !== void 0 ? _s$renderBefore2 : null;
      e._$litPart$ = h = new M(i.insertBefore(l$1(), _t7), _t7, void 0, s !== null && s !== void 0 ? s : {});
    }
    return h._$AI(t), h;
  };

  var _globalThis$litElemen, _globalThis$litElemen2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var s$2 = /*#__PURE__*/function (_t) {
    function s() {
      var _this;
      _classCallCheck(this, s);
      _this = _callSuper(this, s, arguments), _this.renderOptions = {
        host: _assertThisInitialized(_this)
      }, _this._$Do = void 0;
      return _this;
    }
    _inherits(s, _t);
    return _createClass(s, [{
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
  }(b);
  s$2._$litElement$ = !0, s$2[("finalized")] = !0, (_globalThis$litElemen = globalThis.litElementHydrateSupport) === null || _globalThis$litElemen === void 0 ? void 0 : _globalThis$litElemen.call(globalThis, {
    LitElement: s$2
  });
  var r$1 = globalThis.litElementPolyfillSupport;
  r$1 === null || r$1 === void 0 || r$1({
    LitElement: s$2
  });
  ((_globalThis$litElemen2 = globalThis.litElementVersions) !== null && _globalThis$litElemen2 !== void 0 ? _globalThis$litElemen2 : globalThis.litElementVersions = []).push("4.0.6");

  var color = {
  	"--ods-ref-color-green-100": "#FFFFFF",
  	"--ods-ref-color-green-99": "#F7FFF6",
  	"--ods-ref-color-green-98": "#E9FFE5",
  	"--ods-ref-color-green-95": "#CAFFC2",
  	"--ods-ref-color-green-90": "#B3F7A8",
  	"--ods-ref-color-green-80": "#8FDA83",
  	"--ods-ref-color-green-70": "#6FBD62",
  	"--ods-ref-color-green-60": "#54A348",
  	"--ods-ref-color-green-50": "#429134",
  	"--ods-ref-color-green-40": "#298319",
  	"--ods-ref-color-green-35": "#236F15",
  	"--ods-ref-color-green-30": "#1D5C12",
  	"--ods-ref-color-green-25": "#17480E",
  	"--ods-ref-color-green-20": "#10340A",
  	"--ods-ref-color-green-10": "#0C2708",
  	"--ods-ref-color-green-0": "#000000",
  	"--ods-ref-color-purple-100": "#FFFFFF",
  	"--ods-ref-color-purple-99": "#FDFBFF",
  	"--ods-ref-color-purple-98": "#FAF8FE",
  	"--ods-ref-color-purple-95": "#F0F0FD",
  	"--ods-ref-color-purple-90": "#DFE2FB",
  	"--ods-ref-color-purple-80": "#BBC5F6",
  	"--ods-ref-color-purple-70": "#99A9F3",
  	"--ods-ref-color-purple-60": "#7D8ED8",
  	"--ods-ref-color-purple-50": "#6374BC",
  	"--ods-ref-color-purple-40": "#4A5CA4",
  	"--ods-ref-color-purple-35": "#3E5097",
  	"--ods-ref-color-purple-30": "#31438A",
  	"--ods-ref-color-purple-25": "#152B73",
  	"--ods-ref-color-purple-20": "#152B73",
  	"--ods-ref-color-purple-10": "#041750",
  	"--ods-ref-color-purple-0": "#000000",
  	"--ods-ref-color-blue-100": "#FFFFFF",
  	"--ods-ref-color-blue-99": "#F9FDFE",
  	"--ods-ref-color-blue-98": "#F5FBFE",
  	"--ods-ref-color-blue-95": "#E6F4FC",
  	"--ods-ref-color-blue-90": "#C9E8F8",
  	"--ods-ref-color-blue-80": "#A2C8DB",
  	"--ods-ref-color-blue-70": "#85ABBE",
  	"--ods-ref-color-blue-60": "#698FA2",
  	"--ods-ref-color-blue-50": "#51778A",
  	"--ods-ref-color-blue-40": "#395F72",
  	"--ods-ref-color-blue-35": "#2E5467",
  	"--ods-ref-color-blue-30": "#244A5D",
  	"--ods-ref-color-blue-25": "#1A4053",
  	"--ods-ref-color-blue-20": "0",
  	"--ods-ref-color-blue-10": "#002131",
  	"--ods-ref-color-blue-0": "#000000",
  	"--ods-ref-color-gray-100": "#FFFFFF",
  	"--ods-ref-color-gray-99": "#FBFBFB",
  	"--ods-ref-color-gray-98": "#F8F8F8",
  	"--ods-ref-color-gray-95": "#F0F0F0",
  	"--ods-ref-color-gray-90": "#E1E1E1",
  	"--ods-ref-color-gray-80": "#C5C5C5",
  	"--ods-ref-color-gray-70": "#AAAAAA",
  	"--ods-ref-color-gray-60": "#909090",
  	"--ods-ref-color-gray-50": "#767676",
  	"--ods-ref-color-gray-40": "#5E5E5E",
  	"--ods-ref-color-gray-35": "#515151",
  	"--ods-ref-color-gray-30": "#464646",
  	"--ods-ref-color-gray-25": "#3B3B3B",
  	"--ods-ref-color-gray-20": "#303030",
  	"--ods-ref-color-gray-10": "#1B1B1B",
  	"--ods-ref-color-gray-0": "#000000",
  	"--ods-ref-color-orange-100": "#FFFFFF",
  	"--ods-ref-color-orange-99": "#FFFBFF",
  	"--ods-ref-color-orange-98": "#FEF8F4",
  	"--ods-ref-color-orange-95": "#FDEEDD",
  	"--ods-ref-color-orange-90": "#FADEB5",
  	"--ods-ref-color-orange-80": "#F4BC5F",
  	"--ods-ref-color-orange-70": "#D5A149",
  	"--ods-ref-color-orange-60": "#B88733",
  	"--ods-ref-color-orange-50": "#996E23",
  	"--ods-ref-color-orange-40": "#7A571A",
  	"--ods-ref-color-orange-35": "#6B4C16",
  	"--ods-ref-color-orange-30": "#5D4111",
  	"--ods-ref-color-orange-25": "#4E370D",
  	"--ods-ref-color-orange-20": "#412D09",
  	"--ods-ref-color-orange-10": "#261803",
  	"--ods-ref-color-orange-0": "#000000",
  	"--ods-ref-color-red-100": "#FFFFFF",
  	"--ods-ref-color-red-99": "#FFFBFF",
  	"--ods-ref-color-red-98": "#FEF8F7",
  	"--ods-ref-color-red-95": "#FCEEEB",
  	"--ods-ref-color-red-90": "#F9DBD7",
  	"--ods-ref-color-red-80": "#F5B7AE",
  	"--ods-ref-color-red-70": "#F08F82",
  	"--ods-ref-color-red-60": "#ED6152",
  	"--ods-ref-color-red-50": "#CD463A",
  	"--ods-ref-color-red-40": "#AB2D25",
  	"--ods-ref-color-red-35": "#9B211C",
  	"--ods-ref-color-red-30": "#871915",
  	"--ods-ref-color-red-25": "#741311",
  	"--ods-ref-color-red-20": "#600E0C",
  	"--ods-ref-color-red-10": "#3B0605",
  	"--ods-ref-color-red-0": "#000000"
  };
  var typography = {
  	"--ods-font-family-gilroy-medium": "Gilroy-Medium,sans-serif",
  	"--ods-font-weight-600": "600"
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * True if the custom elements polyfill is in use.
   */
  var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
  /**
   * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
   * `container`.
   */
  var removeNodes = function removeNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    while (start !== end) {
      var n = start.nextSibling;
      container.removeChild(start);
      start = n;
    }
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
   * An expression marker used text-positions, multi-binding attributes, and
   * attributes with markup-like text values.
   */
  var nodeMarker = "<!--".concat(marker, "-->");
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
   * Suffix appended to all bound attribute names.
   */
  var boundAttributeSuffix = '$lit$';
  /**
   * An updatable Template that tracks the location of dynamic parts.
   */
  var Template = /*#__PURE__*/_createClass(function Template(result, element) {
    _classCallCheck(this, Template);
    this.parts = [];
    this.element = element;
    var nodesToRemove = [];
    var stack = [];
    // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
    var walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
    // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.
    var lastPartIndex = 0;
    var index = -1;
    var partIndex = 0;
    var strings = result.strings,
      length = result.values.length;
    while (partIndex < length) {
      var node = walker.nextNode();
      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }
      index++;
      if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
        if (node.hasAttributes()) {
          var attributes = node.attributes;
          var _length = attributes.length;
          // Per
          // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order.
          // In particular, Edge/IE can return them out of order, so we cannot
          // assume a correspondence between part index and attribute index.
          var count = 0;
          for (var i = 0; i < _length; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }
          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = strings[partIndex];
            // Find the attribute name
            var name = lastAttributeNameRegex.exec(stringForPart)[2];
            // Find the corresponding attribute
            // All bound attributes have had a suffix added in
            // TemplateResult#getHTML to opt out of special attribute
            // handling. To look up the attribute value we also need to add
            // the suffix.
            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            var attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            var statics = attributeValue.split(markerRegex);
            this.parts.push({
              type: 'attribute',
              index: index,
              name: name,
              strings: statics
            });
            partIndex += statics.length - 1;
          }
        }
        if (node.tagName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
        var data = node.data;
        if (data.indexOf(marker) >= 0) {
          var parent = node.parentNode;
          var _strings = data.split(markerRegex);
          var lastIndex = _strings.length - 1;
          // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts
          for (var _i = 0; _i < lastIndex; _i++) {
            var insert = void 0;
            var s = _strings[_i];
            if (s === '') {
              insert = createMarker();
            } else {
              var match = lastAttributeNameRegex.exec(s);
              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }
              insert = document.createTextNode(s);
            }
            parent.insertBefore(insert, node);
            this.parts.push({
              type: 'node',
              index: ++index
            });
          }
          // If there's no text, we must insert a comment to mark our place.
          // Else, we can trust it will stick around after cloning.
          if (_strings[lastIndex] === '') {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = _strings[lastIndex];
          }
          // We have a part for each match found
          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
        if (node.data === marker) {
          var _parent = node.parentNode;
          // Add a new marker node to be the startNode of the Part if any of
          // the following are true:
          //  * We don't have a previousSibling
          //  * The previousSibling is already the start of a previous part
          if (node.previousSibling === null || index === lastPartIndex) {
            index++;
            _parent.insertBefore(createMarker(), node);
          }
          lastPartIndex = index;
          this.parts.push({
            type: 'node',
            index: index
          });
          // If we don't have a nextSibling, keep this node so we have an end.
          // Else, we can remove it to save future costs.
          if (node.nextSibling === null) {
            node.data = '';
          } else {
            nodesToRemove.push(node);
            index--;
          }
          partIndex++;
        } else {
          var _i2 = -1;
          while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            // TODO (justinfagnani): consider whether it's even worth it to
            // make bindings in comments work
            this.parts.push({
              type: 'node',
              index: -1
            });
            partIndex++;
          }
        }
      }
    }
    // Remove text binding nodes after the walk to not disturb the TreeWalker
    for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
      var n = _nodesToRemove[_i3];
      n.parentNode.removeChild(n);
    }
  });
  var endsWith = function endsWith(str, suffix) {
    var index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };
  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  };
  // Allows `document.createComment('')` to be renamed for a
  // small manual size-savings.
  var createMarker = function createMarker() {
    return document.createComment('');
  };
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#elements-attributes
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-characters
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
   * space character except " ".
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */
  var lastAttributeNameRegex =
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1,
   * removed 4 nodes)
   */
  function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
      parts = template.parts;
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var part = parts[partIndex];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;
    while (walker.nextNode()) {
      nodeIndex++;
      var node = walker.currentNode;
      // End removal if stepped past the removing node
      if (node.previousSibling === currentRemovingNode) {
        currentRemovingNode = null;
      }
      // A node to remove was found in the template
      if (nodesToRemove.has(node)) {
        nodesToRemoveInTemplate.push(node);
        // Track node we're removing
        if (currentRemovingNode === null) {
          currentRemovingNode = node;
        }
      }
      // When removing, increment count by which to adjust subsequent part indices
      if (currentRemovingNode !== null) {
        removeCount++;
      }
      while (part !== undefined && part.index === nodeIndex) {
        // If part is in a removed node deactivate it by setting index to -1 or
        // adjust the index as needed.
        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
        // go to the next active part.
        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        part = parts[partIndex];
      }
    }
    nodesToRemoveInTemplate.forEach(function (n) {
      return n.parentNode.removeChild(n);
    });
  }
  var countNodes = function countNodes(node) {
    var count = node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ ? 0 : 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
      count++;
    }
    return count;
  };
  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    for (var i = startIndex + 1; i < parts.length; i++) {
      var part = parts[i];
      if (isTemplatePartActive(part)) {
        return i;
      }
    }
    return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */
  function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
      parts = template.parts;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
    }
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;
    while (walker.nextNode()) {
      walkerIndex++;
      var walkerNode = walker.currentNode;
      if (walkerNode === refNode) {
        insertCount = countNodes(node);
        refNode.parentNode.insertBefore(node, refNode);
      }
      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
        // If we've inserted the node, simply adjust all subsequent parts
        if (insertCount > 0) {
          while (partIndex !== -1) {
            parts[partIndex].index += insertCount;
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }
          return;
        }
        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
    }
  }

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var directives = new WeakMap();
  var isDirective = function isDirective(o) {
    return typeof o === 'function' && directives.has(o);
  };

  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  var noChange = {};
  /**
   * A sentinel value that signals a NodePart to fully clear its content.
   */
  var nothing = {};

  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */
  var TemplateInstance = /*#__PURE__*/function () {
    function TemplateInstance(template, processor, options) {
      _classCallCheck(this, TemplateInstance);
      this.__parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
    }
    return _createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var i = 0;
        var _iterator = _createForOfIteratorHelper(this.__parts),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var part = _step.value;
            if (part !== undefined) {
              part.setValue(values[i]);
            }
            i++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(this.__parts),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _part = _step2.value;
            if (_part !== undefined) {
              _part.commit();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        var stack = [];
        var parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        var walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        var partIndex = 0;
        var nodeIndex = 0;
        var part;
        var node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
          part = parts[partIndex];
          if (!isTemplatePartActive(part)) {
            this.__parts.push(undefined);
            partIndex++;
            continue;
          }
          // Progress the tree walker until we find our next part's node.
          // Note that multiple parts may share the same node (attribute parts
          // on a single element), so this loop may not run at all.
          while (nodeIndex < part.index) {
            nodeIndex++;
            if (node.nodeName === 'TEMPLATE') {
              stack.push(node);
              walker.currentNode = node.content;
            }
            if ((node = walker.nextNode()) === null) {
              // We've exhausted the content inside a nested template element.
              // Because we still have parts (the outer for-loop), we know:
              // - There is a template in the stack
              // - The walker will find a nextNode outside the template
              walker.currentNode = stack.pop();
              node = walker.nextNode();
            }
          }
          // We've arrived at our part's node.
          if (part.type === 'node') {
            var _part2 = this.processor.handleTextExpression(this.options);
            _part2.insertAfterNode(node.previousSibling);
            this.__parts.push(_part2);
          } else {
            var _this$__parts;
            (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
          }
          partIndex++;
        }
        if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
        }
        return fragment;
      }
    }]);
  }();

  /**
   * Our TrustedTypePolicy for HTML which is declared using the html template
   * tag function.
   *
   * That HTML is a developer-authored constant, and is parsed with innerHTML
   * before any untrusted expressions have been mixed in. Therefor it is
   * considered safe by construction.
   */
  var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
    createHTML: function createHTML(s) {
      return s;
    }
  });
  var commentMarker = " ".concat(marker, " ");
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */
  var TemplateResult = /*#__PURE__*/function () {
    function TemplateResult(strings, values, type, processor) {
      _classCallCheck(this, TemplateResult);
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    return _createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var l = this.strings.length - 1;
        var html = '';
        var isCommentBinding = false;
        for (var i = 0; i < l; i++) {
          var s = this.strings[i];
          // For each binding we want to determine the kind of marker to insert
          // into the template source before it's parsed by the browser's HTML
          // parser. The marker type is based on whether the expression is in an
          // attribute, text, or comment position.
          //   * For node-position bindings we insert a comment with the marker
          //     sentinel as its text content, like <!--{{lit-guid}}-->.
          //   * For attribute bindings we insert just the marker sentinel for the
          //     first binding, so that we support unquoted attribute bindings.
          //     Subsequent bindings can use a comment marker because multi-binding
          //     attributes must be quoted.
          //   * For comment bindings we insert just the marker sentinel so we don't
          //     close the comment.
          //
          // The following code scans the template source, but is *not* an HTML
          // parser. We don't need to track the tree structure of the HTML, only
          // whether a binding is inside a comment, and if not, if it appears to be
          // the first binding in an attribute.
          var commentOpen = s.lastIndexOf('<!--');
          // We're in comment position if we have a comment open with no following
          // comment close. Because <-- can appear in an attribute value there can
          // be false positives.
          isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1;
          // Check to see if we have an attribute-like sequence preceding the
          // expression. This can match "name=value" like structures in text,
          // comments, and attribute values, so there can be false-positives.
          var attributeMatch = lastAttributeNameRegex.exec(s);
          if (attributeMatch === null) {
            // We're only in this branch if we don't have a attribute-like
            // preceding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? commentMarker : nodeMarker);
          } else {
            // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
          }
        }
        html += this.strings[l];
        return html;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        var value = this.getHTML();
        if (policy !== undefined) {
          // this is secure because `this.strings` is a TemplateStringsArray.
          // TODO: validate this when
          // https://github.com/tc39/proposal-array-is-template-object is
          // implemented.
          value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
      }
    }]);
  }();

  var isPrimitive = function isPrimitive(value) {
    return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
  };
  var isIterable = function isIterable(value) {
    return Array.isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(value && value[Symbol.iterator]);
  };
  /**
   * Writes attribute values to the DOM for a group of AttributeParts bound to a
   * single attribute. The value is only set once even if there are multiple parts
   * for an attribute.
   */
  var AttributeCommitter = /*#__PURE__*/function () {
    function AttributeCommitter(element, name, strings) {
      _classCallCheck(this, AttributeCommitter);
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];
      for (var i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    return _createClass(AttributeCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new AttributePart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var strings = this.strings;
        var l = strings.length - 1;
        var parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
          var v = parts[0].value;
          if (_typeof(v) === 'symbol') {
            return String(v);
          }
          if (typeof v === 'string' || !isIterable(v)) {
            return v;
          }
        }
        var text = '';
        for (var i = 0; i < l; i++) {
          text += strings[i];
          var part = parts[i];
          if (part !== undefined) {
            var _v = part.value;
            if (isPrimitive(_v) || !isIterable(_v)) {
              text += typeof _v === 'string' ? _v : String(_v);
            } else {
              var _iterator = _createForOfIteratorHelper(_v),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var t = _step.value;
                  text += typeof t === 'string' ? t : String(t);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }
        text += strings[l];
        return text;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
        }
      }
    }]);
  }();
  /**
   * A Part that controls all or part of an attribute value.
   */
  var AttributePart = /*#__PURE__*/function () {
    function AttributePart(committer) {
      _classCallCheck(this, AttributePart);
      this.value = undefined;
      this.committer = committer;
    }
    return _createClass(AttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value;
          // If the value is a not a directive, dirty the committer so that it'll
          // call setAttribute. If the value is a directive, it'll dirty the
          // committer if it calls setValue().
          if (!isDirective(value)) {
            this.committer.dirty = true;
          }
        }
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.value)) {
          var directive = this.value;
          this.value = noChange;
          directive(this);
        }
        if (this.value === noChange) {
          return;
        }
        this.committer.commit();
      }
    }]);
  }();
  /**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */
  var NodePart = /*#__PURE__*/function () {
    function NodePart(options) {
      _classCallCheck(this, NodePart);
      this.value = undefined;
      this.__pendingValue = undefined;
      this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    return _createClass(NodePart, [{
      key: "appendInto",
      value: function appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
      }
      /**
       * Inserts this part after the `ref` node (between `ref` and `ref`'s next
       * sibling). Both `ref` and its next sibling must be static, unchanging nodes
       * such as those that appear in a literal section of a template.
       *
       * This part must be empty, as its contents are not automatically moved.
       */
    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
      }
      /**
       * Appends this part into a parent part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */
    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
      }
      /**
       * Inserts this part after the `ref` part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */
    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.startNode.parentNode === null) {
          return;
        }
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }
        var value = this.__pendingValue;
        if (value === noChange) {
          return;
        }
        if (isPrimitive(value)) {
          if (value !== this.value) {
            this.__commitText(value);
          }
        } else if (value instanceof TemplateResult) {
          this.__commitTemplateResult(value);
        } else if (value instanceof Node) {
          this.__commitNode(value);
        } else if (isIterable(value)) {
          this.__commitIterable(value);
        } else if (value === nothing) {
          this.value = nothing;
          this.clear();
        } else {
          // Fallback, will render the string representation
          this.__commitText(value);
        }
      }
    }, {
      key: "__insert",
      value: function __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(value) {
        if (this.value === value) {
          return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
      }
    }, {
      key: "__commitText",
      value: function __commitText(value) {
        var node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        var valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling && node.nodeType === 3 /* Node.TEXT_NODE */) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = valueAsString;
        } else {
          this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(value) {
        var template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance && this.value.template === template) {
          this.value.update(value.values);
        } else {
          // Make sure we propagate the template processor from the TemplateResult
          // so that we use its syntax extension, etc. The template factory comes
          // from the render function options so that it can control template
          // caching and preprocessing.
          var instance = new TemplateInstance(template, value.processor, this.options);
          var fragment = instance._clone();
          instance.update(value.values);
          this.__commitNode(fragment);
          this.value = instance;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        var itemParts = this.value;
        var partIndex = 0;
        var itemPart;
        var _iterator2 = _createForOfIteratorHelper(value),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
              itemPart = new NodePart(this.options);
              itemParts.push(itemPart);
              if (partIndex === 0) {
                itemPart.appendIntoPart(this);
              } else {
                itemPart.insertAfterPart(itemParts[partIndex - 1]);
              }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (partIndex < itemParts.length) {
          // Truncate the parts array so _value reflects the current state
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);
  }();
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */
  var BooleanAttributePart = /*#__PURE__*/function () {
    function BooleanAttributePart(element, name, strings) {
      _classCallCheck(this, BooleanAttributePart);
      this.value = undefined;
      this.__pendingValue = undefined;
      if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
        throw new Error('Boolean attributes can only contain a single expression');
      }
      this.element = element;
      this.name = name;
      this.strings = strings;
    }
    return _createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }
        if (this.__pendingValue === noChange) {
          return;
        }
        var value = !!this.__pendingValue;
        if (this.value !== value) {
          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }
          this.value = value;
        }
        this.__pendingValue = noChange;
      }
    }]);
  }();
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */
  var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
    function PropertyCommitter(element, name, strings) {
      var _this;
      _classCallCheck(this, PropertyCommitter);
      _this = _callSuper(this, PropertyCommitter, [element, name, strings]);
      _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
      return _this;
    }
    _inherits(PropertyCommitter, _AttributeCommitter);
    return _createClass(PropertyCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new PropertyPart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        if (this.single) {
          return this.parts[0].value;
        }
        return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.element[this.name] = this._getValue();
        }
      }
    }]);
  }(AttributeCommitter);
  var PropertyPart = /*#__PURE__*/function (_AttributePart) {
    function PropertyPart() {
      _classCallCheck(this, PropertyPart);
      return _callSuper(this, PropertyPart, arguments);
    }
    _inherits(PropertyPart, _AttributePart);
    return _createClass(PropertyPart);
  }(AttributePart);
  // Detect event listener options support. If the `capture` property is read
  // from the options object, then options are supported. If not, then the third
  // argument to add/removeEventListener is interpreted as the boolean capture
  // value so we should only pass the `capture` property.
  var eventOptionsSupported = false;
  // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
  // blocks right into the body of a module
  (function () {
    try {
      var options = {
        get capture() {
          eventOptionsSupported = true;
          return false;
        }
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.addEventListener('test', options, options);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.removeEventListener('test', options, options);
    } catch (_e) {
      // event options not supported
    }
  })();
  var EventPart = /*#__PURE__*/function () {
    function EventPart(element, eventName, eventContext) {
      var _this2 = this;
      _classCallCheck(this, EventPart);
      this.value = undefined;
      this.__pendingValue = undefined;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;
      this.__boundHandleEvent = function (e) {
        return _this2.handleEvent(e);
      };
    }
    return _createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }
        if (this.__pendingValue === noChange) {
          return;
        }
        var newListener = this.__pendingValue;
        var oldListener = this.value;
        var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
          this.__options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this.value === 'function') {
          this.value.call(this.eventContext || this.element, event);
        } else {
          this.value.handleEvent(event);
        }
      }
    }]);
  }();
  // We copy options because of the inconsistent behavior of browsers when reading
  // the third argument of add/removeEventListener. IE11 doesn't support options
  // at all. Chrome 41 only reads `capture` if the argument is an object.
  var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? {
      capture: o.capture,
      passive: o.passive,
      once: o.once
    } : o.capture);
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */
  function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }
    var template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
      return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    var key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement());
      // Cache the Template for this key
      templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
  }
  var templateCaches = new Map();

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var parts = new WeakMap();
  /**
   * Renders a template result or other value to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   *
   * @param result Any value renderable by NodePart - typically a TemplateResult
   *     created by evaluating a template tag like `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   *     replaced, or efficiently updated if the same result type was previous
   *     rendered there.
   * @param options RenderOptions for the entire render tree rendered to this
   *     container. Render options must *not* change between renders to the same
   *     container, as those changes will not effect previously rendered DOM.
   */
  var render$1 = function render(result, container, options) {
    var part = parts.get(container);
    if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts.set(container, part = new NodePart(Object.assign({
        templateFactory: templateFactory
      }, options)));
      part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
  };

  /**
   * Creates Parts when a template is instantiated.
   */
  var DefaultTemplateProcessor = /*#__PURE__*/function () {
    function DefaultTemplateProcessor() {
      _classCallCheck(this, DefaultTemplateProcessor);
    }
    return _createClass(DefaultTemplateProcessor, [{
      key: "handleAttributeExpressions",
      value:
      /**
       * Create parts for an attribute-position binding, given the event, attribute
       * name, and string literals.
       *
       * @param element The element containing the binding
       * @param name  The attribute name
       * @param strings The string literals. There are always at least two strings,
       *   event for fully-controlled bindings with a single expression.
       */
      function handleAttributeExpressions(element, name, strings, options) {
        var prefix = name[0];
        if (prefix === '.') {
          var _committer = new PropertyCommitter(element, name.slice(1), strings);
          return _committer.parts;
        }
        if (prefix === '@') {
          return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        var committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
      }
      /**
       * Create parts for a text-position binding.
       * @param templateFactory
       */
    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(options) {
        return new NodePart(options);
      }
    }]);
  }();
  new DefaultTemplateProcessor();

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   *
   * Main lit-html module.
   *
   * Main exports:
   *
   * -  [[html]]
   * -  [[svg]]
   * -  [[render]]
   *
   * @packageDocumentation
   */
  /**
   * Do not remove this comment; it keeps typedoc from misplacing the module
   * docs.
   */
  // IMPORTANT: do not change the property name or the assignment expression.
  // This line will be used in regexes to search for lit-html usage.
  // TODO(justinfagnani): inject version number at build time
  if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
  }

  // Get a key to lookup in `templateCaches`.
  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return "".concat(type, "--").concat(scopeName);
  };
  var compatibleShadyCSSVersion = true;
  if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
  } else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
    compatibleShadyCSSVersion = false;
  }
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */
  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
      var cacheKey = getTemplateCacheKey(result.type, scopeName);
      var templateCache = templateCaches.get(cacheKey);
      if (templateCache === undefined) {
        templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
      }
      var template = templateCache.stringsArray.get(result.strings);
      if (template !== undefined) {
        return template;
      }
      var key = result.strings.join(marker);
      template = templateCache.keyString.get(key);
      if (template === undefined) {
        var element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new Template(result, element);
        templateCache.keyString.set(key, template);
      }
      templateCache.stringsArray.set(result.strings, template);
      return template;
    };
  };
  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */
  var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
      var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
      if (templates !== undefined) {
        templates.keyString.forEach(function (template) {
          var content = template.element.content;
          // IE 11 doesn't support the iterable param Set constructor
          var styles = new Set();
          Array.from(content.querySelectorAll('style')).forEach(function (s) {
            styles.add(s);
          });
          removeNodesFromTemplate(template, styles);
        });
      }
    });
  };
  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered
   * output.
   */
  var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    var templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    var styles = renderedDOM.querySelectorAll('style');
    var length = styles.length;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
      // Ensure prepareTemplateStyles is called to support adding
      // styles via `prepareAdoptedCssText` since that requires that
      // `prepareTemplateStyles` is called.
      //
      // ShadyCSS will only update styles containing @apply in the template
      // given to `prepareTemplateStyles`. If no lit Template was given,
      // ShadyCSS will not be able to update uses of @apply in any relevant
      // template. However, this is not a problem because we only create the
      // template for the purpose of supporting `prepareAdoptedCssText`,
      // which doesn't support @apply at all.
      window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
      return;
    }
    var condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (var i = 0; i < length; i++) {
      var _style = styles[i];
      _style.parentNode.removeChild(_style);
      condensedStyle.textContent += _style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    var content = templateElement.content;
    if (!!template) {
      insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
    } else {
      content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    var style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
      // When in native Shadow DOM, ensure the style created by ShadyCSS is
      // included in initially rendered output (`renderedDOM`).
      renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    } else if (!!template) {
      // When no style is left in the template, parts will be broken as a
      // result. To fix this, we put back the style node ShadyCSS removed
      // and then tell lit to remove that node from the template.
      // There can be no style in the template in 2 cases (1) when Shady DOM
      // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
      // is in use ShadyCSS removes the style if it contains no content.
      // NOTE, ShadyCSS creates its own style so we can safely add/remove
      // `condensedStyle` here.
      content.insertBefore(condensedStyle, content.firstChild);
      var removes = new Set();
      removes.add(condensedStyle);
      removeNodesFromTemplate(template, removes);
    }
  };
  /**
   * Extension to the standard `render` method which supports rendering
   * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
   * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
   * or when the webcomponentsjs
   * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
   *
   * Adds a `scopeName` option which is used to scope element DOM and stylesheets
   * when native ShadowDOM is unavailable. The `scopeName` will be added to
   * the class attribute of all rendered DOM. In addition, any style elements will
   * be automatically re-written with this `scopeName` selector and moved out
   * of the rendered DOM and into the document `<head>`.
   *
   * It is common to use this render method in conjunction with a custom element
   * which renders a shadowRoot. When this is done, typically the element's
   * `localName` should be used as the `scopeName`.
   *
   * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
   * custom properties (needed only on older browsers like IE11) and a shim for
   * a deprecated feature called `@apply` that supports applying a set of css
   * custom properties to a given location.
   *
   * Usage considerations:
   *
   * * Part values in `<style>` elements are only applied the first time a given
   * `scopeName` renders. Subsequent changes to parts in style elements will have
   * no effect. Because of this, parts in style elements should only be used for
   * values that will never change, for example parts that set scope-wide theme
   * values or parts which render shared style elements.
   *
   * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
   * custom element's `constructor` is not supported. Instead rendering should
   * either done asynchronously, for example at microtask timing (for example
   * `Promise.resolve()`), or be deferred until the first time the element's
   * `connectedCallback` runs.
   *
   * Usage considerations when using shimmed custom properties or `@apply`:
   *
   * * Whenever any dynamic changes are made which affect
   * css custom properties, `ShadyCSS.styleElement(element)` must be called
   * to update the element. There are two cases when this is needed:
   * (1) the element is connected to a new parent, (2) a class is added to the
   * element that causes it to match different custom properties.
   * To address the first case when rendering a custom element, `styleElement`
   * should be called in the element's `connectedCallback`.
   *
   * * Shimmed custom properties may only be defined either for an entire
   * shadowRoot (for example, in a `:host` rule) or via a rule that directly
   * matches an element with a shadowRoot. In other words, instead of flowing from
   * parent to child as do native css custom properties, shimmed custom properties
   * flow only from shadowRoots to nested shadowRoots.
   *
   * * When using `@apply` mixing css shorthand property names with
   * non-shorthand names (for example `border` and `border-width`) is not
   * supported.
   */
  var render = function render(result, container, options) {
    if (!options || _typeof(options) !== 'object' || !options.scopeName) {
      throw new Error('The `scopeName` option is required.');
    }
    var scopeName = options.scopeName;
    var hasRendered = parts.has(container);
    var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ && !!container.host;
    // Handle first render to a scope specially...
    var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render$1(result, renderContainer, Object.assign({
      templateFactory: shadyTemplateFactory(scopeName)
    }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
      var part = parts.get(renderContainer);
      parts["delete"](renderContainer);
      // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
      // that should apply to `renderContainer` even if the rendered value is
      // not a TemplateInstance. However, it will only insert scoped styles
      // into the document if `prepareTemplateStyles` has already been called
      // for the given scope name.
      var template = part.value instanceof TemplateInstance ? part.value.template : undefined;
      prepareTemplateStyles(scopeName, renderContainer, template);
      removeNodes(container, container.firstChild);
      container.appendChild(renderContainer);
      parts.set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
      window.ShadyCSS.styleElement(container.host);
    }
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var _a;
  /**
   * Use this module if you want to create your own base class extending
   * [[UpdatingElement]].
   * @packageDocumentation
   */
  /*
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
   * replaced at compile time by the munged name for object[property]. We cannot
   * alias this function, so we have to use a small shim that has the same
   * behavior when not compiling.
   */
  window.JSCompiler_renameProperty = function (prop, _obj) {
    return prop;
  };
  var defaultConverter = {
    toAttribute: function toAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value ? '' : null;
        case Object:
        case Array:
          // if the value is `null` or `undefined` pass this through
          // to allow removing/no change behavior.
          return value == null ? value : JSON.stringify(value);
      }
      return value;
    },
    fromAttribute: function fromAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value !== null;
        case Number:
          return value === null ? null : Number(value);
        case Object:
        case Array:
          // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
          return JSON.parse(value);
      }
      return value;
    }
  };
  /**
   * Change function that returns true if `value` is different from `oldValue`.
   * This method is used as the default for a property's `hasChanged` function.
   */
  var notEqual = function notEqual(value, old) {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
  };
  var defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
  };
  var STATE_HAS_UPDATED = 1;
  var STATE_UPDATE_REQUESTED = 1 << 2;
  var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
  var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
  /**
   * The Closure JS Compiler doesn't currently have good support for static
   * property semantics where "this" is dynamic (e.g.
   * https://github.com/google/closure-compiler/issues/3177 and others) so we use
   * this hack to bypass any rewriting by the compiler.
   */
  var finalized = 'finalized';
  /**
   * Base element class which manages element properties and attributes. When
   * properties change, the `update` method is asynchronously called. This method
   * should be supplied by subclassers to render updates as desired.
   * @noInheritDoc
   */
  var UpdatingElement = /*#__PURE__*/function (_HTMLElement) {
    function UpdatingElement() {
      var _this;
      _classCallCheck(this, UpdatingElement);
      _this = _callSuper(this, UpdatingElement);
      _this.initialize();
      return _this;
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    _inherits(UpdatingElement, _HTMLElement);
    return _createClass(UpdatingElement, [{
      key: "initialize",
      value:
      /**
       * Performs element initialization. By default captures any pre-set values for
       * registered properties.
       */
      function initialize() {
        var _this2 = this;
        this._updateState = 0;
        this._updatePromise = new Promise(function (res) {
          return _this2._enableUpdatingResolver = res;
        });
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdateInternal();
      }
      /**
       * Fixes any properties set on the instance before upgrade time.
       * Otherwise these would shadow the accessor and break these properties.
       * The properties are stored in a Map which is played back after the
       * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
       * (<=41), properties created for native platform properties like (`id` or
       * `name`) may not have default values set in the element constructor. On
       * these browsers native properties appear on instances and therefore their
       * default value will overwrite any element default (e.g. if the element sets
       * this.id = 'id' in the constructor, the 'id' will become '' since this is
       * the native platform default).
       */
    }, {
      key: "_saveInstanceProperties",
      value: function _saveInstanceProperties() {
        var _this3 = this;
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor._classProperties.forEach(function (_v, p) {
          if (_this3.hasOwnProperty(p)) {
            var value = _this3[p];
            delete _this3[p];
            if (!_this3._instanceProperties) {
              _this3._instanceProperties = new Map();
            }
            _this3._instanceProperties.set(p, value);
          }
        });
      }
      /**
       * Applies previously saved instance properties.
       */
    }, {
      key: "_applyInstanceProperties",
      value: function _applyInstanceProperties() {
        var _this4 = this;
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach(function (v, p) {
          return _this4[p] = v;
        });
        this._instanceProperties = undefined;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
      }
    }, {
      key: "enableUpdating",
      value: function enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
          this._enableUpdatingResolver();
          this._enableUpdatingResolver = undefined;
        }
      }
      /**
       * Allows for `super.disconnectedCallback()` in extensions while
       * reserving the possibility of making non-breaking feature additions
       * when disconnecting at some point in the future.
       */
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
      /**
       * Synchronizes property values when attributes change.
       */
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, old, value) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
      }
    }, {
      key: "_propertyToAttribute",
      value: function _propertyToAttribute(name, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
        var ctor = this.constructor;
        var attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
          var attrValue = ctor._propertyValueToAttribute(value, options);
          // an undefined value does not change the attribute.
          if (attrValue === undefined) {
            return;
          }
          // Track if the property is being reflected to avoid
          // setting the property again via `attributeChangedCallback`. Note:
          // 1. this takes advantage of the fact that the callback is synchronous.
          // 2. will behave incorrectly if multiple attributes are in the reaction
          // stack at time of calling. However, since we process attributes
          // in `update` this should not be possible (or an extreme corner case
          // that we'd like to discover).
          // mark state reflecting
          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
          if (attrValue == null) {
            this.removeAttribute(attr);
          } else {
            this.setAttribute(attr, attrValue);
          }
          // mark state not reflecting
          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
      }
    }, {
      key: "_attributeToProperty",
      value: function _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
          return;
        }
        var ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
          var options = ctor.getPropertyOptions(propName);
          // mark state reflecting
          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
          this[propName] =
          // tslint:disable-next-line:no-any
          ctor._propertyValueFromAttribute(value, options);
          // mark state not reflecting
          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
      }
      /**
       * This protected version of `requestUpdate` does not access or return the
       * `updateComplete` promise. This promise can be overridden and is therefore
       * not free to access.
       */
    }, {
      key: "requestUpdateInternal",
      value: function requestUpdateInternal(name, oldValue, options) {
        var shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
          var ctor = this.constructor;
          options = options || ctor.getPropertyOptions(name);
          if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
            if (!this._changedProperties.has(name)) {
              this._changedProperties.set(name, oldValue);
            }
            // Add to reflecting properties set.
            // Note, it's important that every change has a chance to add the
            // property to `_reflectingProperties`. This ensures setting
            // attribute + property reflects correctly.
            if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
              if (this._reflectingProperties === undefined) {
                this._reflectingProperties = new Map();
              }
              this._reflectingProperties.set(name, options);
            }
          } else {
            // Abort the request if the property should not be considered changed.
            shouldRequestUpdate = false;
          }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
          this._updatePromise = this._enqueueUpdate();
        }
      }
      /**
       * Requests an update which is processed asynchronously. This should
       * be called when an element should update based on some state not triggered
       * by setting a property. In this case, pass no arguments. It should also be
       * called when manually implementing a property setter. In this case, pass the
       * property `name` and `oldValue` to ensure that any configured property
       * options are honored. Returns the `updateComplete` Promise which is resolved
       * when the update completes.
       *
       * @param name {PropertyKey} (optional) name of requesting property
       * @param oldValue {any} (optional) old value of requesting property
       * @returns {Promise} A Promise that is resolved when the update completes.
       */
    }, {
      key: "requestUpdate",
      value: function requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
      }
      /**
       * Sets up the element to asynchronously update.
       */
    }, {
      key: "_enqueueUpdate",
      value: (function () {
        var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                _context.prev = 1;
                _context.next = 4;
                return this._updatePromise;
              case 4:
                _context.next = 8;
                break;
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
              case 8:
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.
                if (!(result != null)) {
                  _context.next = 12;
                  break;
                }
                _context.next = 12;
                return result;
              case 12:
                return _context.abrupt("return", !this._hasRequestedUpdate);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[1, 6]]);
        }));
        function _enqueueUpdate() {
          return _enqueueUpdate2.apply(this, arguments);
        }
        return _enqueueUpdate;
      }())
    }, {
      key: "_hasRequestedUpdate",
      get: function get() {
        return this._updateState & STATE_UPDATE_REQUESTED;
      }
    }, {
      key: "hasUpdated",
      get: function get() {
        return this._updateState & STATE_HAS_UPDATED;
      }
      /**
       * Performs an element update. Note, if an exception is thrown during the
       * update, `firstUpdated` and `updated` will not be called.
       *
       * You can override this method to change the timing of updates. If this
       * method is overridden, `super.performUpdate()` must be called.
       *
       * For instance, to schedule updates to occur just before the next frame:
       *
       * ```
       * protected async performUpdate(): Promise<unknown> {
       *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
       *   super.performUpdate();
       * }
       * ```
       */
    }, {
      key: "performUpdate",
      value: function performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this._hasRequestedUpdate) {
          return;
        }
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
          this._applyInstanceProperties();
        }
        var shouldUpdate = false;
        var changedProperties = this._changedProperties;
        try {
          shouldUpdate = this.shouldUpdate(changedProperties);
          if (shouldUpdate) {
            this.update(changedProperties);
          } else {
            this._markUpdated();
          }
        } catch (e) {
          // Prevent `firstUpdated` and `updated` from running when there's an
          // update exception.
          shouldUpdate = false;
          // Ensure element can accept additional updates after an exception.
          this._markUpdated();
          throw e;
        }
        if (shouldUpdate) {
          if (!(this._updateState & STATE_HAS_UPDATED)) {
            this._updateState = this._updateState | STATE_HAS_UPDATED;
            this.firstUpdated(changedProperties);
          }
          this.updated(changedProperties);
        }
      }
    }, {
      key: "_markUpdated",
      value: function _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
      }
      /**
       * Returns a Promise that resolves when the element has completed updating.
       * The Promise value is a boolean that is `true` if the element completed the
       * update without triggering another update. The Promise result is `false` if
       * a property was set inside `updated()`. If the Promise is rejected, an
       * exception was thrown during the update.
       *
       * To await additional asynchronous work, override the `_getUpdateComplete`
       * method. For example, it is sometimes useful to await a rendered element
       * before fulfilling this Promise. To do this, first await
       * `super._getUpdateComplete()`, then any subsequent state.
       *
       * @returns {Promise} The Promise returns a boolean that indicates if the
       * update resolved without triggering another update.
       */
    }, {
      key: "updateComplete",
      get: function get() {
        return this._getUpdateComplete();
      }
      /**
       * Override point for the `updateComplete` promise.
       *
       * It is not safe to override the `updateComplete` getter directly due to a
       * limitation in TypeScript which means it is not possible to call a
       * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
       * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
       * This method should be overridden instead. For example:
       *
       *   class MyElement extends LitElement {
       *     async _getUpdateComplete() {
       *       await super._getUpdateComplete();
       *       await this._myChild.updateComplete;
       *     }
       *   }
       * @deprecated Override `getUpdateComplete()` instead for forward
       *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
       */
    }, {
      key: "_getUpdateComplete",
      value: function _getUpdateComplete() {
        return this.getUpdateComplete();
      }
      /**
       * Override point for the `updateComplete` promise.
       *
       * It is not safe to override the `updateComplete` getter directly due to a
       * limitation in TypeScript which means it is not possible to call a
       * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
       * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
       * This method should be overridden instead. For example:
       *
       *   class MyElement extends LitElement {
       *     async getUpdateComplete() {
       *       await super.getUpdateComplete();
       *       await this._myChild.updateComplete;
       *     }
       *   }
       */
    }, {
      key: "getUpdateComplete",
      value: function getUpdateComplete() {
        return this._updatePromise;
      }
      /**
       * Controls whether or not `update` should be called when the element requests
       * an update. By default, this method always returns `true`, but this can be
       * customized to control when to update.
       *
       * @param _changedProperties Map of changed properties with old values
       */
    }, {
      key: "shouldUpdate",
      value: function shouldUpdate(_changedProperties) {
        return true;
      }
      /**
       * Updates the element. This method reflects property values to attributes.
       * It can be overridden to render and keep updated element DOM.
       * Setting properties inside this method will *not* trigger
       * another update.
       *
       * @param _changedProperties Map of changed properties with old values
       */
    }, {
      key: "update",
      value: function update(_changedProperties) {
        var _this5 = this;
        if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
          // Use forEach so this works even if for/of loops are compiled to for
          // loops expecting arrays
          this._reflectingProperties.forEach(function (v, k) {
            return _this5._propertyToAttribute(k, _this5[k], v);
          });
          this._reflectingProperties = undefined;
        }
        this._markUpdated();
      }
      /**
       * Invoked whenever the element is updated. Implement to perform
       * post-updating tasks via DOM APIs, for example, focusing an element.
       *
       * Setting properties inside this method will trigger the element to update
       * again after this update cycle completes.
       *
       * @param _changedProperties Map of changed properties with old values
       */
    }, {
      key: "updated",
      value: function updated(_changedProperties) {}
      /**
       * Invoked when the element is first updated. Implement to perform one time
       * work on the element after update.
       *
       * Setting properties inside this method will trigger the element to update
       * again after this update cycle completes.
       *
       * @param _changedProperties Map of changed properties with old values
       */
    }, {
      key: "firstUpdated",
      value: function firstUpdated(_changedProperties) {}
    }], [{
      key: "observedAttributes",
      get: function get() {
        var _this6 = this;
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        var attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach(function (v, p) {
          var attr = _this6._attributeNameForProperty(p, v);
          if (attr !== undefined) {
            _this6._attributeToPropertyMap.set(attr, p);
            attributes.push(attr);
          }
        });
        return attributes;
      }
      /**
       * Ensures the private `_classProperties` property metadata is created.
       * In addition to `finalize` this is also called in `createProperty` to
       * ensure the `@property` decorator can add property metadata.
       */
      /** @nocollapse */
    }, {
      key: "_ensureClassProperties",
      value: function _ensureClassProperties() {
        var _this7 = this;
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
          this._classProperties = new Map();
          // NOTE: Workaround IE11 not supporting Map constructor argument.
          var superProperties = Object.getPrototypeOf(this)._classProperties;
          if (superProperties !== undefined) {
            superProperties.forEach(function (v, k) {
              return _this7._classProperties.set(k, v);
            });
          }
        }
      }
      /**
       * Creates a property accessor on the element prototype if one does not exist
       * and stores a PropertyDeclaration for the property with the given options.
       * The property setter calls the property's `hasChanged` property option
       * or uses a strict identity check to determine whether or not to request
       * an update.
       *
       * This method may be overridden to customize properties; however,
       * when doing so, it's important to call `super.createProperty` to ensure
       * the property is setup correctly. This method calls
       * `getPropertyDescriptor` internally to get a descriptor to install.
       * To customize what properties do when they are get or set, override
       * `getPropertyDescriptor`. To customize the options for a property,
       * implement `createProperty` like this:
       *
       * static createProperty(name, options) {
       *   options = Object.assign(options, {myOption: true});
       *   super.createProperty(name, options);
       * }
       *
       * @nocollapse
       */
    }, {
      key: "createProperty",
      value: function createProperty(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
          return;
        }
        var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
        var descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) {
          Object.defineProperty(this.prototype, name, descriptor);
        }
      }
      /**
       * Returns a property descriptor to be defined on the given named property.
       * If no descriptor is returned, the property will not become an accessor.
       * For example,
       *
       *   class MyElement extends LitElement {
       *     static getPropertyDescriptor(name, key, options) {
       *       const defaultDescriptor =
       *           super.getPropertyDescriptor(name, key, options);
       *       const setter = defaultDescriptor.set;
       *       return {
       *         get: defaultDescriptor.get,
       *         set(value) {
       *           setter.call(this, value);
       *           // custom action.
       *         },
       *         configurable: true,
       *         enumerable: true
       *       }
       *     }
       *   }
       *
       * @nocollapse
       */
    }, {
      key: "getPropertyDescriptor",
      value: function getPropertyDescriptor(name, key, options) {
        return {
          // tslint:disable-next-line:no-any no symbol in index
          get: function get() {
            return this[key];
          },
          set: function set(value) {
            var oldValue = this[name];
            this[key] = value;
            this.requestUpdateInternal(name, oldValue, options);
          },
          configurable: true,
          enumerable: true
        };
      }
      /**
       * Returns the property options associated with the given property.
       * These options are defined with a PropertyDeclaration via the `properties`
       * object or the `@property` decorator and are registered in
       * `createProperty(...)`.
       *
       * Note, this method should be considered "final" and not overridden. To
       * customize the options for a given property, override `createProperty`.
       *
       * @nocollapse
       * @final
       */
    }, {
      key: "getPropertyOptions",
      value: function getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
      }
      /**
       * Creates property accessors for registered properties and ensures
       * any superclasses are also finalized.
       * @nocollapse
       */
    }, {
      key: "finalize",
      value: function finalize() {
        // finalize any superclasses
        var superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
          superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
          var props = this.properties;
          // support symbols in properties (IE11 does not support this)
          var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : []));
          // This for/of is ok because propKeys is an array
          var _iterator = _createForOfIteratorHelper(propKeys),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;
              // note, use of `any` is due to TypeSript lack of support for symbol in
              // index types
              // tslint:disable-next-line:no-any no symbol in index
              this.createProperty(p, props[p]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      /**
       * Returns the property name for the given attribute `name`.
       * @nocollapse
       */
    }, {
      key: "_attributeNameForProperty",
      value: function _attributeNameForProperty(name, options) {
        var attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
      }
      /**
       * Returns true if a property should request an update.
       * Called when a property value is set and uses the `hasChanged`
       * option for the property if present or a strict identity check.
       * @nocollapse
       */
    }, {
      key: "_valueHasChanged",
      value: function _valueHasChanged(value, old) {
        var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
        return hasChanged(value, old);
      }
      /**
       * Returns the property value for the given attribute value.
       * Called via the `attributeChangedCallback` and uses the property's
       * `converter` or `converter.fromAttribute` property option.
       * @nocollapse
       */
    }, {
      key: "_propertyValueFromAttribute",
      value: function _propertyValueFromAttribute(value, options) {
        var type = options.type;
        var converter = options.converter || defaultConverter;
        var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
      }
      /**
       * Returns the attribute value for the given property value. If this
       * returns undefined, the property will *not* be reflected to an attribute.
       * If this returns null, the attribute will be removed, otherwise the
       * attribute will be set to the value.
       * This uses the property's `reflect` and `type.toAttribute` property options.
       * @nocollapse
       */
    }, {
      key: "_propertyValueToAttribute",
      value: function _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
          return;
        }
        var type = options.type;
        var converter = options.converter;
        var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  _a = finalized;
  /**
   * Marks class as having finished creating properties.
   */
  UpdatingElement[_a] = true;

  /**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
  /**
   * Whether the current browser supports `adoptedStyleSheets`.
   */
  var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
  var constructionToken = Symbol();
  var CSSResult = /*#__PURE__*/function () {
    function CSSResult(cssText, safeToken) {
      _classCallCheck(this, CSSResult);
      if (safeToken !== constructionToken) {
        throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
      }
      this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    return _createClass(CSSResult, [{
      key: "styleSheet",
      get: function get() {
        if (this._styleSheet === undefined) {
          // Note, if `supportsAdoptingStyleSheets` is true then we assume
          // CSSStyleSheet is constructable.
          if (supportsAdoptingStyleSheets) {
            this._styleSheet = new CSSStyleSheet();
            this._styleSheet.replaceSync(this.cssText);
          } else {
            this._styleSheet = null;
          }
        }
        return this._styleSheet;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.cssText;
      }
    }]);
  }();
  /**
   * Wrap a value for interpolation in a [[`css`]] tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */
  var unsafeCSS = function unsafeCSS(value) {
    return new CSSResult(String(value), constructionToken);
  };
  var textFromCSSResult = function textFromCSSResult(value) {
    if (value instanceof CSSResult) {
      return value.cssText;
    } else if (typeof value === 'number') {
      return value;
    } else {
      throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
    }
  };
  /**
   * Template tag which which can be used with LitElement's [[LitElement.styles |
   * `styles`]] property to set element styles. For security reasons, only literal
   * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
   * may be used inside a template string part.
   */
  var css = function css(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    var cssText = values.reduce(function (acc, v, idx) {
      return acc + textFromCSSResult(v) + strings[idx + 1];
    }, strings[0]);
    return new CSSResult(cssText, constructionToken);
  };

  // IMPORTANT: do not change the property name or the assignment expression.
  // This line will be used in regexes to search for LitElement usage.
  // TODO(justinfagnani): inject version number at build time
  (window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
  /**
   * Sentinal value used to avoid calling lit-html's render function when
   * subclasses do not implement `render`
   */
  var renderNotImplemented = {};
  /**
   * Base element class that manages element properties and attributes, and
   * renders a lit-html template.
   *
   * To define a component, subclass `LitElement` and implement a
   * `render` method to provide the component's template. Define properties
   * using the [[`properties`]] property or the [[`property`]] decorator.
   */
  var LitElement = /*#__PURE__*/function (_UpdatingElement) {
    function LitElement() {
      _classCallCheck(this, LitElement);
      return _callSuper(this, LitElement, arguments);
    }
    _inherits(LitElement, _UpdatingElement);
    return _createClass(LitElement, [{
      key: "initialize",
      value:
      /**
       * Performs element initialization. By default this calls
       * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
       * captures any pre-set values for registered properties.
       */
      function initialize() {
        _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
          this.adoptStyles();
        }
      }
      /**
       * Returns the node into which the element should render and by default
       * creates and returns an open shadowRoot. Implement to customize where the
       * element's DOM is rendered. For example, to render into the element's
       * childNodes, return `this`.
       * @returns {Element|DocumentFragment} Returns a node into which to render.
       */
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
      }
      /**
       * Applies styling to the element shadowRoot using the [[`styles`]]
       * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
       * available and will fallback otherwise. When Shadow DOM is polyfilled,
       * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
       * is available but `adoptedStyleSheets` is not, styles are appended to the
       * end of the `shadowRoot` to [mimic spec
       * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
       */
    }, {
      key: "adoptStyles",
      value: function adoptStyles() {
        var styles = this.constructor._styles;
        if (styles.length === 0) {
          return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
          window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
            return s.cssText;
          }), this.localName);
        } else if (supportsAdoptingStyleSheets) {
          this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
            return s instanceof CSSStyleSheet ? s : s.styleSheet;
          });
        } else {
          // This must be done after rendering so the actual style insertion is done
          // in `update`.
          this._needsShimAdoptedStyleSheets = true;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this);
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
          window.ShadyCSS.styleElement(this);
        }
      }
      /**
       * Updates the element. This method reflects property values to attributes
       * and calls `render` to render DOM via lit-html. Setting properties inside
       * this method will *not* trigger another update.
       * @param _changedProperties Map of changed properties with old values
       */
    }, {
      key: "update",
      value: function update(changedProperties) {
        var _this = this;
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        var templateResult = this.render();
        _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) {
          this.constructor.render(templateResult, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
          });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
          this._needsShimAdoptedStyleSheets = false;
          this.constructor._styles.forEach(function (s) {
            var style = document.createElement('style');
            style.textContent = s.cssText;
            _this.renderRoot.appendChild(style);
          });
        }
      }
      /**
       * Invoked on each update to perform rendering tasks. This method may return
       * any value renderable by lit-html's `NodePart` - typically a
       * `TemplateResult`. Setting properties inside this method will *not* trigger
       * the element to update.
       */
    }, {
      key: "render",
      value: function render() {
        return renderNotImplemented;
      }
    }], [{
      key: "getStyles",
      value:
      /**
       * Return the array of styles to apply to the element.
       * Override this method to integrate into a style management system.
       *
       * @nocollapse
       */
      function getStyles() {
        return this.styles;
      }
      /** @nocollapse */
    }, {
      key: "_getUniqueStyles",
      value: function _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
          return;
        }
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        var userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
          // De-duplicate styles preserving the _last_ instance in the set.
          // This is a performance optimization to avoid duplicated styles that can
          // occur especially when composing via subclassing.
          // The last item is kept to try to preserve the cascade order with the
          // assumption that it's most important that last added styles override
          // previous styles.
          var addStyles = function addStyles(styles, set) {
            return styles.reduceRight(function (set, s) {
              return (
                // Note: On IE set.add() does not return the set
                Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
              );
            }, set);
          };
          // Array.from does not work on Set in IE, otherwise return
          // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
          var set = addStyles(userStyles, new Set());
          var styles = [];
          set.forEach(function (v) {
            return styles.unshift(v);
          });
          this._styles = styles;
        } else {
          this._styles = userStyles === undefined ? [] : [userStyles];
        }
        // Ensure that there are no invalid CSSStyleSheet instances here. They are
        // invalid in two conditions.
        // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
        //     this is impossible to check except via .replaceSync or use
        // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
        //     false)
        this._styles = this._styles.map(function (s) {
          if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
            // Flatten the cssText from the passed constructible stylesheet (or
            // undetectable non-constructible stylesheet). The user might have
            // expected to update their stylesheets over time, but the alternative
            // is a crash.
            var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
              return css + rule.cssText;
            }, '');
            return unsafeCSS(cssText);
          }
          return s;
        });
      }
    }]);
  }(UpdatingElement);
  /**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */
  LitElement['finalized'] = true;
  /**
   * Reference to the underlying library method used to render the element's
   * DOM. By default, points to the `render` method from lit-html's shady-render
   * module.
   *
   * **Most users will never need to touch this property.**
   *
   * This  property should not be confused with the `render` instance method,
   * which should be overridden to define a template for the element.
   *
   * Advanced users creating a new base class based on LitElement can override
   * this property to point to a custom render method with a signature that
   * matches [shady-render's `render`
   * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
   *
   * @nocollapse
   */
  LitElement.render = render;
  /** @nocollapse */
  LitElement.shadowRootOptions = {
    mode: 'open'
  };

  var _templateObject$i;
  var colorAliases = css(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n*{\n    --ods-ref-color-red-40: #AB2D25;\n    --ods-ref-color-orange-40: #7A571A;\n    --ods-ref-color-green-40: #298319;\n    --ods-ref-color-blue-40: #395F72;\n    --ods-ref-color-gray-40: #5E5E5E;\n    --ods-ref-color-purple-40: #4A5CA4;\n    --ods-ref-color-gray-10: #1B1B1B;\n    --ods-ref-color-gray-25: #3B3B3B;\n    --ods-ref-color-gray-100: #FFFFFF;\n    --text-primary: --ods-ref-color-gray-10;\n}\n.ods-sem-color-text-primary,.text-primary,.icon-primary{color: var(--ods-ref-color-gray-10);}\n.ods-sem-color-text-secondary,.text-secondary{color: var(--ods-ref-color-gray-25);}\n.ods-sem-color-text-inverse,.text-inverse{color: var(--ods-ref-color-gray-100);}\n.ods-sem-color-status-roles-error-error,.status-error,.ods-sem-color-status-roles-error,.error{color: var(--ods-ref-color-red-40);}\n.ods-sem-color-status-roles-warning-warning,.status-warning,.ods-sem-color-status-roles-warning,.warning{color: var(--ods-ref-color-orange-40);}\n.ods-sem-color-status-roles-success-success,.status-success,.ods-sem-color-status-roles-success,.success{color: var(--ods-ref-color-green-40);}\n.ods-sem-color-status-roles-info-info,.status-info,.ods-sem-color-status-roles-info,.info{color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-roles-primary-primary,.role-primary,.ods-sem-color-roles-primary,.primary{ color: var(--ods-ref-color-green-40);}\n.ods-sem-color-roles-secondary-secondary,.role-secondary,.ods-sem-color-roles-secondary,.secondary{color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-text-tertiary,.text-tertiary,.ods-sem-color-roles-neutral-neutral,.role-neutral,.ods-sem-color-roles-neutral,.neutral{color: var(--ods-ref-color-gray-40);}\n.ods-sem-color-roles-accent-accent,.role-accent,.ods-sem-color-roles-accent,.accent{color: var(--ods-ref-color-purple-40);}\n\n\n.ods-sem-color-text-primary-bg-color,.text-primary-bg-color,.icon-primary-bg-color{background-color: var(--ods-ref-color-gray-10);}\n.ods-sem-color-text-secondary-bg-color,.text-secondary-bg-color{background-color: var(--ods-ref-color-gray-25);}\n.ods-sem-color-text-inverse-bg-color,.text-inverse-bg-color{background-color: var(--ods-ref-color-gray-100);}\n.ods-sem-color-status-roles-error-error-bg-color,.status-error-bg-color,.ods-sem-color-status-roles-error-bg-color,.error-bg-color{background-color: var(--ods-ref-color-red-40);}\n.ods-sem-color-status-roles-warning-warning-bg-color,.status-warning-bg-color,.ods-sem-color-status-roles-warning-bg-color,.warning-bg-color{background-color: var(--ods-ref-color-orange-40);}\n.ods-sem-color-status-roles-success-success-bg-color,.status-success-bg-color,.ods-sem-color-status-roles-success-bg-color,.success-bg-color{background-color: var(--ods-ref-color-green-40);}\n.ods-sem-color-status-roles-info-info-bg-color,.status-info-bg-color,.ods-sem-color-status-roles-info-bg-color,.info-bg-color{background-color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-roles-primary-primary-bg-color,.role-primary,.ods-sem-color-roles-primary,.primary-bg-color{ background-color: var(--ods-ref-color-green-40);}\n.ods-sem-color-roles-secondary-secondary-bg-color,.role-secondary-bg-color,.ods-sem-color-roles-secondary,.secondary-bg-color{background-color: var(--ods-ref-color-blue-40);}\n.ods-sem-color-text-tertiary-bg-color,.text-tertiary-bg-color,.ods-sem-color-roles-neutral-neutral-bg-color,.role-neutral-bg-color,.ods-sem-color-roles-neutral-bg-color,.neutral-bg-color{background-color: var(--ods-ref-color-gray-40);}\n.ods-sem-color-roles-accent-accent-bg-color,.role-accent-bg-color,.ods-sem-color-roles-accent-bg-color,.accent-bg-color{background-color: var(--ods-ref-color-purple-40);}\n\n"])));

  var _templateObject$h;
  var OdsIcon = /*#__PURE__*/function (_LitElement) {
    function OdsIcon() {
      var _this;
      _classCallCheck(this, OdsIcon);
      _this = _callSuper(this, OdsIcon);
      _this.size = 'MD';
      _this.name = 'placeholder';
      _this.color = '';
      return _this;
    }
    _inherits(OdsIcon, _LitElement);
    return _createClass(OdsIcon, [{
      key: "render",
      value: function render() {
        var svg = 'x_snc_ods.' + this.name + '.svg';
        return x(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n        <style>\n        :host{\n          display: inline-flex;\n        }\n        .ods-icon{\n            display: inline-flex;\n            background-color: ", ";\n            -webkit-mask: url(", ") no-repeat center;\n            mask: url(", ") no-repeat center;\n            --ods-sem-icon-small:     16px;\n            --ods-sem-icon-medium:    24px;\n            --ods-sem-icon-large:     32px;\n            mask-size: 100%;\n        }\n        .ods-icon--sm{\n          height: var(--ods-sem-icon-small);\n          width:  var(--ods-sem-icon-small);\n        }\n        .ods-icon--md{\n          height: var(--ods-sem-icon-medium);\n          width:  var(--ods-sem-icon-medium);\n        }\n        .ods-icon--lg{\n          height: var(--ods-sem-icon-large);\n          width:  var(--ods-sem-icon-large);    \n        }\n        </style>\n        <div part=\"odsIcon\" class=\"ods-icon ods-icon--", " ", "-bg-color\"></div>\n        "])), this.color && this.color !== "" && this.color !== "undefined" ? this.color : "#1B1B1B", svg, svg, this.size.toLocaleLowerCase(), this.color);
      }
    }]);
  }(s$2);
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
  _defineProperty(OdsIcon, "styles", [colorAliases]);
  customElements.define('ods-icon', OdsIcon);

  var _templateObject$g, _templateObject2$e, _templateObject3$b, _templateObject4$a, _templateObject5$7;

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
      _this.size = "MD";
      return _this;
    }
    _inherits(ODSAvatar, _LitElement);
    return _createClass(ODSAvatar, [{
      key: "getAvatarText",
      value: function getAvatarText() {
        var name = this.name.trim();
        if (!name) return "";
        var nameArray = name.split(" ");
        var firstName = nameArray[0].toUpperCase();
        var lastInitial = nameArray.length > 1 ? nameArray[nameArray.length - 1].toUpperCase()[0] : "";
        var initial = firstName[0] + lastInitial;
        return initial;
      }
    }, {
      key: "getAvatarContent",
      value: function getAvatarContent() {
        var size = "".concat(this.size);
        size = size.toLowerCase();
        if (this.image && this.image != "") {
          return x(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n        <img\n          class=", "\n          src=\"", "\"\n          alt=\"Avatar Image\"\n          aria-label=\"Image\"\n        />\n      "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.image);
        } else if (this.icon && this.icon != "") {
          return x(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["\n        <div\n          class=", "\n          aria-label=\"Icon\"\n        >\n          <ods-icon name=\"", "\" color=\"white\"></ods-icon>\n        </div>\n      "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.icon);
        } else if (this.name && this.name != "") {
          return x(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["\n        <div\n          class=", "\n          aria-label=\"", "\"\n        >\n          ", "\n        </div>\n      "])), ["ods-avatar", "ods-avatar-" + size].join(" "), this.name, this.getAvatarText());
        }
        return x(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["\n      <div\n        class=", "\n        aria-label=\"Anonymous\"\n      >\n        <ods-icon name=\"user\" color=\"white\"></ods-icon>\n      </div>\n    "])), ["ods-avatar", "ods-avatar-" + size].join(" "));
      }
    }, {
      key: "render",
      value: function render() {
        var size = "".concat(this.size);
        size = size.toLowerCase();
        var iconDimension = "0px";
        if (size == "xxl") {
          iconDimension = "104px";
        }
        if (size == "xl") {
          iconDimension = "40px";
        }
        if (size == "lg") {
          iconDimension = "24px";
        }
        if (size == "md") {
          iconDimension = "16px";
        }
        if (size == "sm") {
          iconDimension = "14px";
        }
        return x(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n        .ods-avatar-xxl {\n          width: var(--ods-avatar-xxl-size,180px);\n          height: var(--ods-avatar-xxl-size,180px);\n          font-size: var(--ods-avatar-xxl-font-size,72px);\n        }\n        .ods-avatar-xl {\n          width: var(--ods-avatar-xxl-size,84px);\n          height: var(--ods-avatar-xxl-size,84px);\n          font-size: var(--ods-avatar-xxl-font-size,32px);\n        }\n        .ods-avatar-lg {\n          width: var(--ods-avatar-xxl-size,48px);\n          height: var(--ods-avatar-xxl-size,48px);\n          font-size: var(--ods-avatar-xxl-font-size,20px);\n        }\n        .ods-avatar-md {\n          width: var(--ods-avatar-xxl-size,32px);\n          height: var(--ods-avatar-xxl-size,32px);\n          font-size: var(--ods-avatar-xxl-font-size,14px);\n        }\n        .ods-avatar-sm {\n          width: var(--ods-avatar-xxl-size,24px);\n          height: var(--ods-avatar-xxl-size,24px);\n          font-size: var(--ods-avatar-xxl-font-size,10px);\n        }\n        .ods-avatar {\n          position: relative;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          vertical-align: middle;\n          border-radius: 50em;\n          transition: margin 0.15s;\n          --cui-bg-opacity: 1;\n          background-color: var(\n            --ods-ref-color-blue-40,\n            ", "\n          );\n          color: var(\n            --ods-ref-color-green-100,\n            ", "\n          );\n          text-transform: uppercase;\n          font-family: var(--ods-font-family-gilroy-medium,", ");\n          font-weight: var(--ods-font-weight,", ");\n          object-fit: cover;\n        }\n        ods-icon::part(odsIcon) {\n          height: ", ";\n          width: ", ";\n          display: flex;\n        }\n      </style>\n      ", "\n    "])), color["--ods-ref-color-blue-40"], color["--ods-ref-color-green-100"], typography["--ods-font-family-gilroy-medium"], typography["--ods-font-weight-600"], iconDimension, iconDimension, this.getAvatarContent());
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
  }(s$2);
  customElements.define("ods-avatar", ODSAvatar);

  var _templateObject$f, _templateObject2$d, _templateObject3$a, _templateObject4$9, _templateObject5$6, _templateObject6$6, _templateObject7$4, _templateObject8$1;
  var hasLoadedMaterialSymbolsFont$4 = false;
  var loadLatoFont$3 = function loadLatoFont() {
    if (hasLoadedMaterialSymbolsFont$4) {
      return;
    }
    hasLoadedMaterialSymbolsFont$4 = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n    @font-face {\n      font-family: 'lato';\n      src: url(\n    https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff)\n    format('woff');\n    }");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var OdsButton = /*#__PURE__*/function (_LitElement) {
    function OdsButton() {
      var _this;
      _classCallCheck(this, OdsButton);
      loadLatoFont$3();
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
        return x(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n  <ods-icon size=\"sm\" name=\"", "\" color=\"", "\"/>\n  "])), icon || 'placeholder', color);
      }
    }, {
      key: "getButton",
      value: function getButton() {
        var iconPosition = this.variant === 'ghost' && !this["icon-position"] ? 'after' : this["icon-position"];
        var iconLeft = iconPosition === 'before' ? this.getIcon() : '';
        var iconRight = iconPosition === 'after' ? this.getIcon() : '';
        var fullwidth = this["full-width"] ? 'full-width' : '';
        var tabindex = this.disabled ? -1 : 0;
        if (this.href) {
          return x(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["\n      <a class=' btn-", " ", " ", "' href= \"", "\" target= \"", "\" tabindex= \"", "\" aria-disabled = \"", "\" >\n      ", " \n      <slot> </slot>\n      ", "\n      </a>\n      "])), this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', fullwidth, this.href, this.target || '_self', tabindex, this.disabled ? 'true' : 'false', iconLeft ? x(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["<i class= 'icon-left'> ", " </i>"])), iconLeft) : '', iconRight ? x(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["<i class= 'icon-right'> ", " </i>"])), iconRight) : '');
        } else {
          return x(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["\n        <button @click=\"", "\" tabindex= \"", "\" class='btn-", " ", " ", "' aria-disabled = \"", "\" >\n      ", " \n      <slot> </slot>\n      ", "\n      </button>\n      "])), this.onClick, tabindex, this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', fullwidth, this.disabled ? 'true' : 'false', iconLeft ? x(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["<i class= 'icon-left'> ", " </i>"])), iconLeft) : '', iconRight ? x(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["<i class= 'icon-right'> ", " </i>"])), iconRight) : '');
        }
      }

      //Lets delegate focus
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: true
        });
      }
    }, {
      key: "setActiveMenu",
      value: function setActiveMenu(setActive) {
        this.shadowRoot.querySelector('a, button').toggleAttribute('active-menu', setActive);
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["\n\n    <style>\n    *{\n      --ods-utility-states-primary-hover: rgba(143, 218, 131, 0.40);\n      --ods-utility-states-primary-pressed: rgba(143, 218, 131, 0.64);\n      --ods-utility-states-on-color-hover: rgba(31, 100, 19, 1);\n      --ods-utility-states-on-color-pressed: rgba(23, 58, 11, 1);\n      --ods-utility-states-destructive-solid-hover: rgba(130, 34, 28, 1);\n      --ods-utility-states-destructive-solid-pressed: rgba(75, 20, 28, 1);\n      --ods-utility-states-error-hover: rgba(245, 183, 174, 0.40);\n      --ods-utility-states-error-pressed: rgba(245, 183, 174, 0.64);\n      --ods-ref-color-green-100: #FFFFFF;\n      --ods-ref-color-green-80:  #8fda83;\n      --ods-ref-color-green-70:  #6FBD62;\n      --ods-ref-color-green-40:  #298319;\n      --ods-ref-color-green-25:  #216b14;\n      --ods-ref-color-green-10:  #0C2708;\n      --ods-ref-color-red-100:   #FFFFFF;\n      --ods-ref-color-red-80:    #F5B7AE;\n      --ods-ref-color-red-70:    #F08F82;\n      --ods-ref-color-red-40:    #AB2D25;\n      --ods-ref-color-red-30:    #871915;\n      --ods-ref-color-red-20:    #600E0C;\n      --ods-ref-color-gray-80:   #C5C5C5;\n      --ods-ref-color-gray-35:   #515151;\n      --ods-sem-space-none:       0px;\n      --ods-sem-space-xsmall:     4px;\n      --ods-sem-space-small:      8px;\n      --ods-sem-space-medium:     16px;\n      --ods-sem-space-large:      24px;\n\n\n    }\n\n    :host{\n      display: ", ";\n    }\n    \n    a, button {\n        font-family:'Lato', Helvetica, Arial, sans-serif;\n        font-size: 16px;\n        text-decoration: none;\n        font-style: normal;\n        font-weight: 700;\n        line-height: var(--ods-sem-space-large);\n        border: var(--ods-sem-space-none);\n        border-radius: var( --ods-sem-space-small);\n        cursor: pointer;\n        display: inline-flex;\n        justify-content: center;\n        font-size: var(--ods-sem-space-medium);\n        padding: 10px var(--ods-sem-space-large);\n        box-sizing: border-box;\n    }\n\n    .full-width {\n      width: 100%;\n    }\n\n    .btn-solid {\n        color: var(--ods-ref-color-green-100);\n        background-color: var(--ods-ref-color-green-40);\n    }\n\n    .btn-solid:hover {\n      background-color: var(--ods-utility-states-on-color-hover);\n    }\n\n    .btn-solid:active, [active-menu] {\n      background-color: var(--ods-ref-color-green-10);\n    }\n\n    .btn-outline {\n        color: var(--ods-ref-color-green-40);\n        background-color: var(--ods-ref-color-green-100) ;\n        box-shadow:0 0 0 1px;\n    }\n\n    .btn-outline:hover {\n      background: var(--ods-utility-states-primary-hover);\n    }\n\n    .btn-outline:active, [active-menu]{\n      background: var(--ods-utility-states-primary-pressed);\n    }\n           \n    .btn-destructive-solid {\n        color: var(--ods-ref-color-red-100);\n        background-color: var(--ods-ref-color-red-40);\n    }\n\n    .btn-destructive-solid:hover {\n        background-color: var(--ods-utility-states-destructive-solid-hover);\n    }\n\n    .btn-destructive-solid:active, [active-menu]{\n        background-color: var(--ods-ref-color-red-20);\n    }\n              \n    .btn-destructive-outline {\n        color: var(--ods-ref-color-red-40);\n        background-color: var(--ods-ref-color-red-100);\n        box-shadow:0 0 0 1px ;\n    }\n\n    .btn-destructive-outline:hover {\n      background-color: var(--ods-utility-states-error-hover);\n    }\n\n    .btn-destructive-outline:active, [active-menu]{\n      background-color: var(--ods-utility-states-error-pressed);\n    }\n\n    :host(:focus-within) .btn-solid, :host(:focus-within) .btn-destructive-solid {\n      outline: none;\n      box-shadow: 0 0 0 2px white, 0 0 0 var(--ods-sem-space-xsmall) var(--ods-ref-color-green-40);\n    }\n\n    :host(:focus-within) .btn-outline{\n     outline: none;\n     box-shadow: 0 0 0 1px var(--ods-ref-color-green-40), 0 0 0 3px white, 0 0 0 5px var(--ods-ref-color-green-40);\n    }\n    :host(:focus-within) .btn-destructive-outline {\n     outline: none;\n     box-shadow: 0 0 0 1px var(--ods-ref-color-red-40), 0 0 0 3px white, 0 0 0 5px var(--ods-ref-color-green-40);\n    }\n\n    .btn-ghost {\n    padding: var(--ods-sem-space-small) var( --ods-sem-space-none);\n    border-radius:  var(--ods-sem-space-small);\n    color: var(--ods-ref-color-green-40);\n    background: transparent;\n    }\n\n    .btn-ghost:hover {\n    background: var(--ods-utility-states-primary-hover);\n    }\n\n    .btn-ghost:active, [active-menu]{\n    background: var(--ods-utility-states-primary-pressed);\n    }\n\n    :host(:focus-within) .btn-ghost{\n      outline: none;\n      box-shadow: 0 0 0 2px var(--ods-ref-color-green-40);\n    }\n\n\n    .disabled-solid , .disabled-solid:hover, .disabled-solid:focus, .disabled-destructive-solid,  .disabled-destructive-solid:hover, .disabled-destructive-solid:focus {\n      color: #515151;\n      background: #C5C5C5;\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      box-shadow: 0 0 0 0 white !important;\n    }\n\n    .disabled-outline, .disabled-outline:hover, .disabled-outline:focus, .disabled-destructive-outline,  .disabled-destructive-outline:hover, .disabled-destructive-outline:focus  {\n      color: var(--ods-ref-color-gray-35);\n      opacity: 0.5;\n      background: var(--ods-ref-color-gray-80);\n      box-shadow: 0 0 0 1px !important;\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n\n    .disabled-ghost, .disabled-ghost:hover, .disabled-ghost:focus{\n      border-radius: var(--ods-sem-space-small);\n      color: var(--ods-ref-color-gray-35);\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      background: transparent;\n      box-shadow: 0 0 0 0 white !important;\n    }\n\n    .icon-left{\n        display: inline-flex;\n    \n    ods-icon::part(odsIcon){\n      height: var(--ods-sem-space-medium);\n      width: var(--ods-sem-space-medium);\n      margin-right: var(--ods-sem-space-small);\n      vertical-align: baseline;\n      margin-top: var(--ods-sem-space-xsmall);\n      \n        }\n    }   \n\n    .icon-right{\n      display: inline-flex;\n\n    ods-icon::part(odsIcon) {\n      height: var(--ods-sem-space-medium);\n      width: var(--ods-sem-space-medium);\n      margin-left: var(--ods-sem-space-small);\n      vertical-align: baseline;\n      margin-top: var(--ods-sem-space-xsmall);\n     \n        }\n    }   \n\n    .button-container:has(.disabled-solid, .disabled-destructive-solid, .disabled-outline, .disabled-destructive-outline, .disabled-ghost){\n      cursor: not-allowed;\n      }\n\n    </style>\n    <div class=\"button-container\">", "\n    </div>\n      "])), this["full-width"] ? 'block' : 'inline-flex', this.getButton());
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
          },
          onClick: {
            type: Function
          }
        };
      }
    }]);
  }(s$2);
  customElements.define('ods-button', OdsButton);

  var _templateObject$e, _templateObject2$c, _templateObject3$9;
  /**
   * Service Now ODS Chip Component
   * @input disabled, href, target
   * @output <ods-chip> in dom
   */

  var OdsChip = /*#__PURE__*/function (_LitElement) {
    function OdsChip() {
      var _this;
      _classCallCheck(this, OdsChip);
      _this = _callSuper(this, OdsChip);
      _this.disabled = false;
      _this.target = '_self';
      return _this;
    }
    _inherits(OdsChip, _LitElement);
    return _createClass(OdsChip, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OdsChip.prototype), "connectedCallback", this).call(this);
        this.addEventListener('keydown', this._handleKeyDown);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OdsChip.prototype), "disconnectedCallback", this).call(this);
        this.removeEventListener('keydown', this._handleKeyDown);
      }
    }, {
      key: "_handleKeyDown",
      value: function _handleKeyDown(e) {
        var chips = Array.from(document.querySelectorAll('ods-chip'));
        var currentIndex = chips.indexOf(this);
        if (e.key === 'ArrowRight') {
          var nextIndex = (currentIndex + 1) % chips.length;
          chips[nextIndex].shadowRoot.querySelector('.ods-chip').focus();
        } else if (e.key === 'ArrowLeft') {
          var prevIndex = (currentIndex - 1 + chips.length) % chips.length;
          chips[prevIndex].shadowRoot.querySelector('.ods-chip').focus();
        }
      }
    }, {
      key: "updated",
      value: function updated() {
        var chipElement = this.shadowRoot.querySelector('.ods-chip');
        var hasStartSlot = !!this.querySelector('[slot="start"]');
        if (!hasStartSlot) {
          chipElement.classList.add('adjusted-padding');
        } else {
          chipElement.classList.remove('adjusted-padding');
        }
      }
    }, {
      key: "clickValidation",
      value: function clickValidation(e) {
        console.log(e.target);
        this.stateFocus();
        if (this.onClick) {
          this.onClick(e);
        }
      }
    }, {
      key: "stateFocus",
      value: function stateFocus() {
        this.shadowRoot.querySelector('.ods-chip').focus();
      }
    }, {
      key: "getChip",
      value: function getChip() {
        var tabindex = this.disabled ? -1 : 0;
        if (this.href) {
          return x(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n      <a @click=", " class='ods-chip ", "' href= \"", "\" target= \"", "\"  tabindex= \"", "\" aria-disabled = \"", "\">\n      <slot name=\"start\"></slot>\n      <slot name=\"label\"></slot>\n      <slot name=\"end\"></slot>\n      </a>\n      "])), this.stateFocus, this.disabled ? 'disabled' : '', this.href, this.target || '_self', tabindex, this.disabled ? 'true' : 'false');
        } else {
          return x(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["\n      <button @click=", " class='ods-chip ", "' tabindex= \"", "\" aria-disabled = \"", "\">\n      <slot name=\"start\"></slot>\n      <slot name=\"label\"></slot>\n      <slot name=\"end\"></slot>\n      </button>\n      "])), this.clickValidation, this.disabled ? 'disabled' : '', tabindex, this.disabled ? 'true' : 'false');
        }
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["\n  \n    <style>\n    *{\n      --ods-utility-states-secundary-hover: rgba(162, 200, 219, 0.4);\n      --ods-utility-states-secundary-pressed: rgba(162, 200, 219, 0.64);\n      --ods-utility-states-disabled-container: #C5C5C5;\n      --ods-roles-primary-on-primary: #FFFFFF;\n      --ods-border-interactive-component: rgba(118, 118, 118, 1);\n      --ods-border-interactive-secundary-hover: #88979E;\n      --ods-border-interactive-secundary-pressed: #92ABB7;\n      --ods-ref-color-green-40:  #298319;\n      --ods-utility-states-disabled-content:   #515151;\n      --ods-sem-space-none:       0px;\n      --ods-sem-space-xsmall:     4px;\n      --ods-sem-space-small:      8px;\n      --ods-sem-space-medium:     16px;\n      --ods-sem-space-large:      24px;\n      --ods-radius-full:        9999px;\n    }\n\n    :host{\n      display: inline-flex;\n    }\n\n    .ods-chip{\n        border-radius: var(--ods-radius-full);\n        text-decoration: none;\n        border: var(--ods-sem-space-none);\n        background: var(--ods-roles-primary-on-primary);\n        cursor: pointer;\n        justify-content: center;\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        padding: 4px 16px 4px 4px;\n        box-shadow:0 0 0 1px var(--ods-border-interactive-component);\n        gap: 8px;\n      }\n\n    .ods-chip.adjusted-padding{\n      padding: 4px 16px;\n    }\n    \n    .ods-chip:hover {\n     background: var(--ods-utility-states-secundary-hover);\n     box-shadow:0 0 0 1px var(--ods-border-interactive-secundary-hover);\n    }\n\n    .ods-chip:active {\n     background: var(--ods-utility-states-secundary-pressed);\n     box-shadow:0 0 0 1px var(--ods-border-interactive-secundary-pressed);\n    }\n\n    .ods-chip:focus {\n        outline: none;\n        box-shadow: 0 0 0 1px var(--ods-ref-color-green-40), 0 0 0 3px white, 0 0 0 5px var(--ods-ref-color-green-40);\n    }\n\n    .disabled {\n      color: var(--ods-utility-states-disabled-content);\n      opacity: 0.5;\n      background: var(--ods-utility-states-disabled-container);\n      cursor: not-allowed;\n      box-shadow:0 0 0 1px var(--ods-border-interactive-component);\n      pointer-events: none;\n    }\n\n\n    .disabled::slotted(ods-icon){\n     color: var(--ods-utility-states-disabled-content);\n    }\n\n    .chip-container:has(.disabled){\n      cursor: not-allowed;\n      }\n\n    </style>\n    <div class=\"chip-container\">", "\n    </div>\n      "])), this.getChip());
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          disabled: {
            type: Boolean
          },
          href: {
            type: String
          },
          target: {
            type: String
          },
          onClick: {
            type: Function
          }
        };
      }
    }]);
  }(s$2);
  customElements.define('ods-chip', OdsChip);

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var e$2 = Symbol["for"](""),
    o$2 = function o(t) {
      if ((t === null || t === void 0 ? void 0 : t.r) === e$2) return t === null || t === void 0 ? void 0 : t._$litStatic$;
    },
    s$1 = function s(t) {
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
        r: e$2
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
          for (c = r[$]; $ < i && void 0 !== (l = e[$], s = o$2(l));) c += s + r[++$], f = !0;
          $ !== i && u.push(l), n.push(c), $++;
        }
        if ($ === i && n.push(r[i]), f) {
          var _t = n.join("$$lit$$");
          void 0 === (r = a.get(_t)) && (n.raw = n, a.set(_t, r = n)), e = u;
        }
        return t.apply(void 0, [r].concat(_toConsumableArray(e)));
      };
    },
    n$2 = l(x);

  var _templateObject$d, _templateObject2$b, _templateObject3$8, _templateObject4$8, _templateObject5$5, _templateObject6$5;
  // import './fonts/fonts.css';
  /**
   * Service Now Text Component
   * @input html-tag, size, weight, color
   * @output <ods-text> in dom
   */

  var hasLoadedMaterialSymbolsFont$3 = false;
  var loadLatoFont$2 = function loadLatoFont() {
    if (hasLoadedMaterialSymbolsFont$3) {
      return;
    }
    hasLoadedMaterialSymbolsFont$3 = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff) format('woff');\n      font-weight: normal;\n    }\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Bold.woff) format('woff');\n      font-weight: 700;\n    }\n    @font-face {\n      font-family: 'Roboto Mono';\n      font-style: normal;\n      font-weight: 400;\n      src: url('https://fonts.cdnfonts.com/s/16061/RobotoMono[wght].woff') format('woff');\n    }\n    @font-face {\n        font-family: 'Roboto Mono';\n        font-style: normal;\n        font-weight: 700;\n        src: url('https://fonts.cdnfonts.com/s/16061/RobotoMono-Bold.woff') format('woff');\n    }\n  ");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var ODSText = /*#__PURE__*/function (_LitElement) {
    function ODSText() {
      var _this;
      _classCallCheck(this, ODSText);
      _this = _callSuper(this, ODSText);
      _this['html-tag'] = 'span';
      _this.size = 'md';
      _this.weight = 'regular';
      _this.color = 'text-primary';
      _this["for"] = '';
      loadLatoFont$2();
      return _this;
    }
    _inherits(ODSText, _LitElement);
    return _createClass(ODSText, [{
      key: "updated",
      value: function updated() {
        _get(_getPrototypeOf(ODSText.prototype), "updated", this).call(this);
        var thisLabel = this.shadowRoot.querySelector(this['html-tag']);
        if ((this["for"] || this["for"] !== '') && this['html-tag'] === 'label') thisLabel.setAttribute('for', this["for"]);else thisLabel.removeAttribute('for');
      }
    }, {
      key: "render",
      value: function render() {
        var htmlTag = null;
        var size = this.size.toLowerCase();
        var weight = this.weight.toLowerCase();
        switch (this["html-tag"]) {
          case 'p':
            htmlTag = s$1(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["p"])));
            break;
          case 'div':
            htmlTag = s$1(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["div"])));
            break;
          case 'code':
            htmlTag = s$1(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["code"])));
            break;
          case 'label':
            htmlTag = s$1(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["label"])));
            break;
          case 'span':
          default:
            htmlTag = s$1(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["span"])));
            break;
        }
        return n$2(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["\n    \n    <style>\n    *{\n      color: var(--", ");\n      color: ", ";\n      margin: 0;\n      padding: 0;\n    }\n    ::slotted(a){\n        color:var(--ods-ref-color-green-40);\n    }\n    span, code, label{\n      display: inline;\n    }\n    p, div{\n      display: block;\n    }\n    span, p, div, label{\n      font-family: lato, Helvetica, Arial, sans-serif;\n    }\n    code{\n      font-family: \"Roboto Mono\", monospace;\n    }\n    .ods-text--size-sm{\n      font-size: 14px;\n      line-height: 22px;\n    }\n    .ods-text--size-md{\n      font-size: 16px;\n      line-height: 24px;\n    }\n    .ods-text--size-lg{\n      font-size: 20px;\n      line-height: 28px;\n    }\n    .ods-text--weight-regular{\n      font-weight: 400;\n    }\n    .ods-text--weight-bold{\n     \n      font-weight: 700;\n    }\n    </style>\n    <", " \n      part='odsText' \n      class=\"ods-text--weight-", " ods-text--size-", " ", " ", "\">\n      <slot></slot>\n    </", ">\n    "])), this.color, this.color, htmlTag, weight, size, this["html-tag"] === 'code' ? 'code' : '', this.color, htmlTag);
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
          },
          "for": {
            type: String
          }
        };
      }
    }]);
  }(s$2);
  _defineProperty(ODSText, "styles", [colorAliases]);
  customElements.define("ods-text", ODSText);

  var _templateObject$c, _templateObject2$a, _templateObject3$7, _templateObject4$7;
  //import { ButtonClickEvent } from "./ButtonClickEvent";

  /**
   * Service Now Link Component
   * @input label, type, onclick
   * @output <sn-wc-link> in dom
   * @args onClick, type, size, target, href
   */
  var hasLoadedMaterialSymbolsFont$2 = false;
  var loadLatoFont$1 = function loadLatoFont() {
    if (hasLoadedMaterialSymbolsFont$2) {
      return;
    }
    hasLoadedMaterialSymbolsFont$2 = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n  @font-face{font-family:lato;font-style:normal;font-weight:700;src:local('Lato'),url(https://fonts.cdnfonts.com/s/14882/Lato-Bold.woff) format('woff')}");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var ODSLink = /*#__PURE__*/function (_LitElement) {
    function ODSLink() {
      var _this;
      _classCallCheck(this, ODSLink);
      _this = _callSuper(this, ODSLink);
      loadLatoFont$1();
      return _this;
    }
    _inherits(ODSLink, _LitElement);
    return _createClass(ODSLink, [{
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
          return x(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["<button\n        type=\"button\"\n        part=\"sn-wc-link\"\n        @click=\"", "\"\n        class=", "\n      >\n        ", "\n      </button>"])), this.handleButtonClick, [btnClass, size, "btn-spacing"].join(" "), this.label);
        } else {
          return x(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["\n        <a\n          part=\"sn-wc-link\"\n          href=\"", "\"\n          class=", "\n          style=\"--sn-wc-padding-y: 0px;\"\n          target=\"", "\"\n        >\n          ", "\n        </a>\n      "])), this.href, ["btn btn-link", linkSize, "btn-spacing"].join(" "), this.target, this.label);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["\n      <style>\n        *{\n          padding:0;\n          margin:0;\n          box-sizing:border-box;\n        }\n          a,button {\n          font-family:'lato', sans-serif !important;\n          }\n            .btn {\n               --sn-btn-padding-x: 16px;\n               --sn-btn-padding-y: 4px;\n               --sn-btn-font-family: Lato;\n               --sn-btn-font-size: 16px;\n               --sn-btn-font-weight: 700;\n               --sn-btn-line-height: 1.5;\n               --sn-btn-color: #212529;\n               --sn-btn-bg: transparent;\n               --sn-btn-border-width: 1px;\n               --sn-btn-border-color: #298319;\n               --sn-btn-border-radius: 50rem;\n               --sn-btn-hover-border-color: transparent;\n               --sn-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n               --sn-btn-hover-color:  #1f6213;\n               --sn-link-hover-color: #1F6213;\n               --sn-link-color: #298319;\n               --sn-btn-disabled-opacity: 0.65;\n               --sn-btn-focus-box-shadow: 0 0 0 0.25rem\n                  rgba(var(--sn-btn-focus-shadow-rgb), 0.5);\n                display: inline-block;\n                padding: var(--sn-btn-padding-y) var(--sn-btn-padding-x);\n                font-family: var(--sn-btn-font-family);\n                font-size: var(--sn-btn-font-size);\n                font-weight: var(--sn-btn-font-weight);\n                line-height: 24px;\n                color: var(--sn-btn-color);\n                text-align: center;\n                text-decoration: none;\n                vertical-align: middle;\n                cursor: pointer;\n                user-select: none;\n                border: var(--sn-btn-border-width) solid var(--sn-btn-border-color);\n                border-radius: var(--sn-btn-border-radius);\n                background-color: var(--sn-btn-bg);\n                transition: color 0.15s ease-in-out,\n                  background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n                  box-shadow 0.15s ease-in-out;\n              }\n              .btn:hover {\n                color: var(--sn-btn-hover-color);\n                background-color: var(--sn-btn-hover-bg);\n                border-color: var(--sn-btn-hover-border-color);\n\n              }\n              .btn:focus-visible {\n                color: var(--sn-btn-hover-color);\n                background-color: var(--sn-btn-hover-bg);\n                border-color: var(--sn-btn-hover-border-color);\n                outline: 0;\n                box-shadow: var(--sn-btn-focus-box-shadow);\n              }\n              .btn.active {\n                color: var(--sn-btn-active-color);\n                background-color: var(--sn-btn-active-bg);\n                border-color: var(--sn-btn-active-border-color);\n              }\n\n              .btn-solid {\n               --sn-btn-color: #fff;\n               --sn-btn-bg: #298319;\n               --sn-btn-border-color:var(--sn-btn-border-color);\n               --sn-btn-hover-color: #fff;\n               --sn-btn-hover-bg: #1f6213;\n               --sn-btn-hover-border-color: #1f6213;\n               --sn-btn-focus-shadow-rgb: 212, 38, 119;\n               --sn-btn-active-color: #fff;\n               --sn-btn-active-bg: #1f6213;\n               --sn-btn-active-border-color: #1f6213;\n               --sn-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n\n              }\n              .btn-outline {\n               --sn-btn-color: #298319;\n               --sn-btn-border-color: #298319;\n               --sn-btn-hover-color: #1f6213;\n               --sn-btn-hover-bg: #fffff;\n               --sn-btn-hover-border-color: #1f6213;\n               --sn-btn-focus-shadow-rgb: 25, 135, 84;\n               --sn-btn-active-color: #fff;\n               --sn-btn-active-bg: #fff;\n               --sn-btn-active-border-color: #198754;\n               --sn-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n               --sn-gradient: none;\n              }\n\n              .btn-link {\n               --sn-btn-font-weight: bold;\n               --sn-btn-color: var(--sn-link-color);\n               --sn-btn-bg: transparent;\n               --sn-btn-border-color: transparent;\n               --sn-btn-hover-color: var(--sn-link-hover-color);\n               --sn-btn-hover-border-color: transparent;\n               --sn-btn-active-color: var(--sn-link-hover-color);\n               --sn-btn-active-border-color: transparent;\n               --sn-btn-box-shadow: none;\n               --sn-btn-focus-shadow-rgb: 212, 38, 119;\n               --sn-btn-padding-x: 0;\n                text-decoration: none;\n              }\n              .btn-link:focus-visible {\n                color: var(--sn-btn-color);\n              }\n              .btn-link:hover {\n                color: var(--sn-btn-hover-color);\n              }\n\n              .btn-lg {\n               --sn-btn-padding-y: 8px;\n               --sn-btn-padding-x: 32px;\n               --sn-btn-font-size: 24px;\n               --sn-btn-border-radius: 50rem;\n              }\n\n              .btn-md {\n               --sn-btn-padding-y: 6px;\n               --sn-btn-padding-x: 28px;\n               --sn-btn-font-size: 18px;\n               --sn-btn-border-radius: 50rem;\n              }\n              .btn-link-md{\n               --sn-btn-font-size:18px;\n               --sn-btn-border-radius: 0.25rem;\n              }\n              .btn-link-lg{\n               --sn-btn-font-size: 32px;\n               --sn-btn-border-radius: 0.5rem;\n              }\n      </style>\n      ", "\n    "])), this.getAnchorTag());
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
  }(s$2);
  _defineProperty(ODSLink, "styles", i$3(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral([""]))));
  customElements.define("ods-link", ODSLink);

  var _templateObject$b, _templateObject2$9, _templateObject3$6, _templateObject4$6, _templateObject5$4, _templateObject6$4, _templateObject7$3;
  /**
   * Service Now Heading Component
   * @input html-tag, size
   * @output <ods-heading> in dom
   */

  var hasLoadedMaterialSymbolsFont$1 = false;
  var loadGilroyFont = function loadGilroyFont() {
    if (hasLoadedMaterialSymbolsFont$1) {
      return;
    }
    hasLoadedMaterialSymbolsFont$1 = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n  @font-face {\n    font-family: 'gilroy';\n    src: url(https://cdn.jsdelivr.net/gh/RohitDogra777/gilroy-font@v1.0.0/Gilroy-Semibold.woff) format('woff');\n    font-weight: normal;\n  }");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var ODSHeading = /*#__PURE__*/function (_LitElement) {
    function ODSHeading() {
      var _this;
      _classCallCheck(this, ODSHeading);
      _this = _callSuper(this, ODSHeading);
      _this["html-tag"] = 'h3';
      _this.size = 'md';
      _this.color = 'text-primary';
      loadGilroyFont();
      return _this;
    }
    _inherits(ODSHeading, _LitElement);
    return _createClass(ODSHeading, [{
      key: "render",
      value: function render() {
        var htmlTag = null;
        switch (this["html-tag"]) {
          case 'h1':
            htmlTag = s$1(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["h1"])));
            break;
          case 'h2':
            htmlTag = s$1(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["h2"])));
            break;
          case 'h4':
            htmlTag = s$1(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["h4"])));
            break;
          case 'h5':
            htmlTag = s$1(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["h5"])));
            break;
          case 'h6':
            htmlTag = s$1(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["h6"])));
            break;
          case 'h3':
          default:
            htmlTag = s$1(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["h3"])));
            break;
        }
        return n$2(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          font-family: \"gilroy\", sans-serif;\n          font-weight: 600;\n          color: var(--", ");\n          color: ", ";\n          margin: 0;\n          padding: 0;\n        }\n    \n        .ods-heading--size-xxs {\n          font-size: 16px;\n          line-height: 24px;\n        }\n        \n        .ods-heading--size-xs{\n          font-size: 20px;\n          line-height: 28px;\n        }\n    \n        .ods-heading--size-sm{\n          font-size: 24px;\n          line-height: 32px;\n        }\n    \n        .ods-heading--size-md{\n          font-size: 32px;\n          line-height: 40px;\n        }\n    \n        .ods-heading--size-lg{\n          font-size: 40px;\n          line-height: 48px;\n        }\n       \n      \n      </style>\n      <", " part='odsHeading' class=\"ods-heading--size-", " ", "\">\n      <slot></slot>\n    </", ">\n    "])), this.color, this.color, htmlTag, this.size, this.color, htmlTag);
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
          color: {
            type: String
          }
        };
      }
    }]);
  }(s$2);
  _defineProperty(ODSHeading, "styles", [colorAliases]);
  customElements.define("ods-heading", ODSHeading);

  var _templateObject$a, _templateObject2$8;
  /**
   * Service Now Image Component
   * @input label, type
   * @output <sn-wc-image> in dom
   */
  var ODSImage = /*#__PURE__*/function (_LitElement) {
    function ODSImage() {
      _classCallCheck(this, ODSImage);
      return _callSuper(this, ODSImage);
    }
    _inherits(ODSImage, _LitElement);
    return _createClass(ODSImage, [{
      key: "render",
      value: function render() {
        return x(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n      <style>\n        * {\n          margin:0;\n          padding:0;\n          box-sizing:border-box;\n        }\n        .sn-wc-image{ \n          object-fit: var(--sn-wc-object-fit,cover);\n          max-width:100%;\n          height: var(--sn-wc-height,100%);\n          width: var(--sn-wc-width,100%);\n        }\n      </style>\n      <picture>\n         <source media=\"(min-width:768px)\" srcset=\"", "\">\n         <source media=\"(min-width:568px)\" srcset=\"", "\">\n         <source media=\"(min-width:320px)\" srcset=\"", "\">\n         <img class=\"sn-wc-image\" src=\"", "\" alt=\"", "\" loading=\"", "\">\n      </picture>\n    "])), this['src'], this['src-medium'], this['src-small'], this['src'], this.alt, this.loading);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          "src": {
            type: String
          },
          'src-medium': {
            type: String
          },
          'src-small': {
            type: String
          },
          "loading": {
            type: String
          },
          "alt": {
            type: String
          }
        };
      }
    }]);
  }(s$2);
  _defineProperty(ODSImage, "styles", i$3(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n  "]))));
  customElements.define("ods-image", ODSImage);

  var _templateObject$9, _templateObject2$7;

  /**
   * Service Now Text Component
   * @input label, type
   * @output <ods-container> in dom
   */
  var OdsContainer = /*#__PURE__*/function (_LitElement) {
    function OdsContainer() {
      var _this;
      _classCallCheck(this, OdsContainer);
      _this = _callSuper(this, OdsContainer);
      _this.padding = 'L';
      return _this;
    }
    _inherits(OdsContainer, _LitElement);
    return _createClass(OdsContainer, [{
      key: "render",
      value: function render() {
        var padding = this.padding.toLowerCase();
        return x(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral([" \n    <div class=\"ods-container ods-container--padding-", " ", "\">\n        <slot></slot>\n    </div>"])), padding, this.shadow ? 'ods-container--shadow' : '');
      }
    }]);
  }(s$2);
  _defineProperty(OdsContainer, "properties", {
    padding: {
      type: String
    },
    shadow: {
      type: Boolean
    }
  });
  _defineProperty(OdsContainer, "styles", i$3(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n    * {\n      --ods-sem-space-none:         0px;\n      --ods-sem-space-medium:       16px;\n      --ods-sem-space-large:        24px;\n      --ods-border-radius-large:    16px;\n      --ods-shadow-small-x:         0px;\n      --ods-shadow-small-y:         2px;\n      --ods-shadow-small-blur:      4px;\n      --ods-shadow-small-spread:    0px;\n      --ods-shadow-small-color:     rgba(59, 59, 59, 0.25);\n      --ods-ref-color-gray-80:      #C5C5C5;\n      --ods-ref-color-gray-100:     #FFF;\n    }\n    .ods-container{\n      display: flex;\n      padding: var(--ods-sem-space-medium);\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--ods-sem-space-none);\n      border-radius: var(--ods-border-radius-large);\n      border: 1px solid var(--ods-ref-color-gray-80);\n      background: var(--ods-ref-color-gray-100);\n    }\n    \n    .ods-container--padding-m{\n      padding: var(--ods-sem-space-medium);\n    }\n    .ods-container--padding-l{\n      padding: var(--ods-sem-space-large);\n    }\n    .ods-container--padding-none{\n      padding: var(--ods-sem-space-none);\n      ::slotted(*) {\n        border-radius: var(--ods-border-radius-large);\n      }\n    }\n\n    .ods-container--shadow{\n      box-shadow: var(--ods-shadow-small-x) var(--ods-shadow-small-y) var(--ods-shadow-small-blur) var(--ods-shadow-small-spread) var(--ods-shadow-small-color);\n    }\n\n  "]))));
  customElements.define("ods-container", OdsContainer);

  var _templateObject$8, _templateObject2$6;
  /**
   * Service Now ODS Dialog Component
   * @input heading, max-width
   * @output <ods-dialog> in dom
   */
  var OdsDialog = /*#__PURE__*/function (_LitElement) {
    function OdsDialog() {
      var _this;
      _classCallCheck(this, OdsDialog);
      _this = _callSuper(this, OdsDialog);
      _this.sticky = false;
      _this._handleKeyESC = _this._handleKeyESC.bind(_this);
      _this._checkButtons = _this._checkButtons.bind(_this);
      _this._firstTimeLoaded = false;
      _this["max-width"] = '600px';
      return _this;
    }
    _inherits(OdsDialog, _LitElement);
    return _createClass(OdsDialog, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OdsDialog.prototype), "connectedCallback", this).call(this);
        document.addEventListener('keydown', this._handleKeyESC);
        window.addEventListener('resize', this._checkButtons);
        this.addEventListener('open', this.openModal);
        this._checkButtons();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OdsDialog.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this._handleKeyESC);
        window.addEventListener('resize', this._checkButtons);
        this.removeEventListener('open', this.openModal);
      }
    }, {
      key: "_handleKeyESC",
      value: function _handleKeyESC(event) {
        if (event.key === 'Escape') {
          this.closeModal();
        }
      }
    }, {
      key: "openModal",
      value: function openModal() {
        this.open = true;
      }
    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        this._firstTimeLoaded = true;
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        this.open = false;
        this.clearElements();
      }
    }, {
      key: "clearElements",
      value: function () {
        var _clearElements = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var slotNodeArray;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                slotNodeArray = this.shadowRoot.querySelector('.content slot').assignedNodes();
                this.searchElementChildrens(slotNodeArray);
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function clearElements() {
          return _clearElements.apply(this, arguments);
        }
        return clearElements;
      }()
    }, {
      key: "searchElementChildrens",
      value: function searchElementChildrens(arrayChildrenArray) {
        var _this2 = this;
        arrayChildrenArray.forEach(function (child) {
          if (child.nodeName.toLowerCase() === 'ods-select-field') _this2.clearSelectElement(child);
          if (child.nodeName.toLowerCase() === 'ods-text-field') _this2.clearTextFieldElement(child);else if (child.children && child.children.length > 0) {
            var withinChildrenArray = Array.from(child.children);
            _this2.searchElementChildrens(withinChildrenArray);
          }
        });
      }
    }, {
      key: "clearSelectElement",
      value: function clearSelectElement(selectElement) {
        selectElement.selectClear();
      }
    }, {
      key: "clearTextFieldElement",
      value: function clearTextFieldElement(textFieldElement) {
        textFieldElement.value = '';
      }
    }, {
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(OdsDialog.prototype), "updated", this).call(this, changedProperties);
        this._checkButtons();
      }
    }, {
      key: "_checkButtons",
      value: function _checkButtons() {
        var footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
        if (!footerSlot) return;
        var assignedElements = footerSlot.assignedElements();
        var hasButtons = assignedElements.some(function (el) {
          return el.tagName.toLowerCase() === 'ods-button';
        });
        if (!hasButtons) {
          this.open = false;
          console.warn("At least one button must be added for the component to be valid");
        } else {
          assignedElements.forEach(function (el) {
            if (el.tagName.toLowerCase() === 'ods-button' && el.hasAttribute('href')) {
              el.removeAttribute('href');
            }
          });
          var isMobile = window.innerWidth <= 479;
          var maxWidth = parseInt(this["max-width"]);
          var modal = this.shadowRoot.querySelector('.modal');
          assignedElements.forEach(function (el) {
            if (el.tagName.toLowerCase() === 'ods-button') {
              if (isMobile || maxWidth <= 479) {
                el.setAttribute('full-width', 'true');
                modal.classList.add('small-width');
              } else {
                el.removeAttribute('full-width');
                modal.classList.remove('small-width');
              }
            }
          });
        }
      }
    }, {
      key: "getDialog",
      value: function getDialog() {
        if (!this.heading) {
          return console.warn("Heading is required and cannot be omitted");
        }
        return x(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n    <div class=\"scrim\" @click=\"", "\">\n      <div Role=\"dialog\" arial-modal= \"true\" arial-label=\"", "\" class=\"modal\" @click=\"", "\">\n        <div class=\"header\">\n          <ods-heading html-tag= 'h2' size= 'sm'>", " </ods-heading>\n          <div class=\"icon-close\">\n            <ods-icon-button variant='ghost' shape='square' icon='close' color='text-primary' tooltip=\"Close dialog\" @click=\"", "\">&times;</ods-icon-button >\n          </div>\n        </div>\n        <div class=\"content\">\n          <slot></slot>\n        </div>\n        <div class=\"footer\">\n          <slot name=\"footer\"></slot>\n        </div>\n      </div>\n    </div>"])), this.closeModal, this.heading, function (e) {
          return e.stopPropagation();
        }, this.heading, this.closeModal);
      }
    }, {
      key: "render",
      value: function render() {
        var maxWidth = this["max-width"];
        this.open = !this._firstTimeLoaded ? false : this.open;
        return x(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n    <style>\n    *{\n      --ods-background-reverse-primary: rgba(3, 45, 66, 0.75);\n      --ods-sem-space-none:       0px;\n      --ods-sem-space-xsmall:     4px;\n      --ods-sem-space-small:      8px;\n      --ods-sem-space-medium:     16px;\n      --ods-sem-space-large:      24px;\n      --ods-sem-space-xlarge:     32px;\n    }\n    :host {\n        display: block;\n      }\n      .scrim {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--ods-background-reverse-primary);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index:9999;\n      }\n      .modal {\n        padding: var(--ods-sem-space-large);\n        background: white;\n        border-radius: var(--ods-sem-space-small);\n        max-width: ", ";\n        width: 100%;\n        max-height:527px;\n        display: flex;\n        flex-direction: column;\n        overflow: hidden;\n        margin: var(--ods-sem-space-large);\n      }\n      \n      .header {\n        display: inline-flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: var(--ods-sem-space-small);\n        margin-bottom: var( --ods-sem-space-small);\n        word-break: break-word;\n      }\n      \n      .icon-close{\n        align-self: flex-start;\n      }\n\n      .content {\n        margin-bottom: var(--ods-sem-space-xlarge);\n        overflow-y: auto;\n        flex-grow: 1;\n      }\n      .footer {\n        gap: var(--ods-sem-space-small);\n        display: flex;\n        justify-content: flex-end;\n        word-break: break-word;\n      }\n\n      .modal.small-width .footer{\n        flex-direction: column-reverse;\n        align-items: stretch;\n      }\n\n      @media screen and (max-width: 479px){\n       .footer {\n        flex-direction: column-reverse;\n        align-items: stretch;\n        }\n        }\n\n      ods-heading{\n        padding: 6px 0px;\n      }\n     \n    </style>\n      ", "\n    "])), maxWidth, this.open ? this.getDialog() : '');
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          open: {
            type: Boolean
          },
          sticky: {
            type: Boolean
          },
          heading: {
            type: String
          },
          "max-width": {
            type: String
          }
        };
      }
    }]);
  }(s$2);
  customElements.define('ods-dialog', OdsDialog);

  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var createCoords = function createCoords(v) {
    return {
      x: v,
      y: v
    };
  };
  var oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  var oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  function getSideAxis(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    var alignment = getAlignment(placement);
    var alignmentAxis = getAlignmentAxis(placement);
    var length = getAxisLength(alignmentAxis);
    var mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, function (alignment) {
      return oppositeAlignmentMap[alignment];
    });
  }
  function getSideList(side, isStart, rtl) {
    var lr = ['left', 'right'];
    var rl = ['right', 'left'];
    var tb = ['top', 'bottom'];
    var bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    var alignment = getAlignment(placement);
    var list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(function (side) {
        return side + "-" + alignment;
      });
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (side) {
      return oppositeSideMap[side];
    });
  }
  function expandPaddingObject(padding) {
    return _objectSpread2({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, padding);
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    var x = rect.x,
      y = rect.y,
      width = rect.width,
      height = rect.height;
    return {
      width: width,
      height: height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x: x,
      y: y
    };
  }

  var _excluded2 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"],
    _excluded4 = ["mainAxis", "crossAxis", "limiter"];
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    var reference = _ref.reference,
      floating = _ref.floating;
    var sideAxis = getSideAxis(placement);
    var alignmentAxis = getAlignmentAxis(placement);
    var alignLength = getAxisLength(alignmentAxis);
    var side = getSide(placement);
    var isVertical = sideAxis === 'y';
    var commonX = reference.x + reference.width / 2 - floating.width / 2;
    var commonY = reference.y + reference.height / 2 - floating.height / 2;
    var commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    var coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  var computePosition$1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(reference, floating, config) {
      var _config$placement, placement, _config$strategy, strategy, _config$middleware, middleware, platform, validMiddleware, rtl, rects, _computeCoordsFromPla, x, y, statefulPlacement, middlewareData, resetCount, i, _validMiddleware$i, name, fn, _yield$fn, nextX, nextY, data, reset, _computeCoordsFromPla2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _config$placement = config.placement, placement = _config$placement === void 0 ? 'bottom' : _config$placement, _config$strategy = config.strategy, strategy = _config$strategy === void 0 ? 'absolute' : _config$strategy, _config$middleware = config.middleware, middleware = _config$middleware === void 0 ? [] : _config$middleware, platform = config.platform;
            validMiddleware = middleware.filter(Boolean);
            _context.next = 4;
            return platform.isRTL == null ? void 0 : platform.isRTL(floating);
          case 4:
            rtl = _context.sent;
            _context.next = 7;
            return platform.getElementRects({
              reference: reference,
              floating: floating,
              strategy: strategy
            });
          case 7:
            rects = _context.sent;
            _computeCoordsFromPla = computeCoordsFromPlacement(rects, placement, rtl), x = _computeCoordsFromPla.x, y = _computeCoordsFromPla.y;
            statefulPlacement = placement;
            middlewareData = {};
            resetCount = 0;
            i = 0;
          case 13:
            if (!(i < validMiddleware.length)) {
              _context.next = 45;
              break;
            }
            _validMiddleware$i = validMiddleware[i], name = _validMiddleware$i.name, fn = _validMiddleware$i.fn;
            _context.next = 17;
            return fn({
              x: x,
              y: y,
              initialPlacement: placement,
              placement: statefulPlacement,
              strategy: strategy,
              middlewareData: middlewareData,
              rects: rects,
              platform: platform,
              elements: {
                reference: reference,
                floating: floating
              }
            });
          case 17:
            _yield$fn = _context.sent;
            nextX = _yield$fn.x;
            nextY = _yield$fn.y;
            data = _yield$fn.data;
            reset = _yield$fn.reset;
            x = nextX != null ? nextX : x;
            y = nextY != null ? nextY : y;
            middlewareData = _objectSpread2(_objectSpread2({}, middlewareData), {}, _defineProperty({}, name, _objectSpread2(_objectSpread2({}, middlewareData[name]), data)));
            if (!(reset && resetCount <= 50)) {
              _context.next = 42;
              break;
            }
            resetCount++;
            if (!(_typeof(reset) === 'object')) {
              _context.next = 41;
              break;
            }
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (!reset.rects) {
              _context.next = 38;
              break;
            }
            if (!(reset.rects === true)) {
              _context.next = 36;
              break;
            }
            _context.next = 33;
            return platform.getElementRects({
              reference: reference,
              floating: floating,
              strategy: strategy
            });
          case 33:
            _context.t0 = _context.sent;
            _context.next = 37;
            break;
          case 36:
            _context.t0 = reset.rects;
          case 37:
            rects = _context.t0;
          case 38:
            _computeCoordsFromPla2 = computeCoordsFromPlacement(rects, statefulPlacement, rtl);
            x = _computeCoordsFromPla2.x;
            y = _computeCoordsFromPla2.y;
          case 41:
            i = -1;
          case 42:
            i++;
            _context.next = 13;
            break;
          case 45:
            return _context.abrupt("return", {
              x: x,
              y: y,
              placement: statefulPlacement,
              strategy: strategy,
              middlewareData: middlewareData
            });
          case 46:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function computePosition(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  function detectOverflow(_x4, _x5) {
    return _detectOverflow.apply(this, arguments);
  }
  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  function _detectOverflow() {
    _detectOverflow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(state, options) {
      var _await$platform$isEle, x, y, platform, rects, elements, strategy, _evaluate8, _evaluate8$boundary, boundary, _evaluate8$rootBounda, rootBoundary, _evaluate8$elementCon, elementContext, _evaluate8$altBoundar, altBoundary, _evaluate8$padding, padding, paddingObject, altContext, element, clippingClientRect, rect, offsetParent, offsetScale, elementClientRect;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            x = state.x, y = state.y, platform = state.platform, rects = state.rects, elements = state.elements, strategy = state.strategy;
            _evaluate8 = evaluate(options, state), _evaluate8$boundary = _evaluate8.boundary, boundary = _evaluate8$boundary === void 0 ? 'clippingAncestors' : _evaluate8$boundary, _evaluate8$rootBounda = _evaluate8.rootBoundary, rootBoundary = _evaluate8$rootBounda === void 0 ? 'viewport' : _evaluate8$rootBounda, _evaluate8$elementCon = _evaluate8.elementContext, elementContext = _evaluate8$elementCon === void 0 ? 'floating' : _evaluate8$elementCon, _evaluate8$altBoundar = _evaluate8.altBoundary, altBoundary = _evaluate8$altBoundar === void 0 ? false : _evaluate8$altBoundar, _evaluate8$padding = _evaluate8.padding, padding = _evaluate8$padding === void 0 ? 0 : _evaluate8$padding;
            paddingObject = getPaddingObject(padding);
            altContext = elementContext === 'floating' ? 'reference' : 'floating';
            element = elements[altBoundary ? altContext : elementContext];
            _context10.t0 = rectToClientRect;
            _context10.t1 = platform;
            _context10.next = 10;
            return platform.isElement == null ? void 0 : platform.isElement(element);
          case 10:
            _context10.t2 = _await$platform$isEle = _context10.sent;
            if (!(_context10.t2 != null)) {
              _context10.next = 15;
              break;
            }
            _context10.t3 = _await$platform$isEle;
            _context10.next = 16;
            break;
          case 15:
            _context10.t3 = true;
          case 16:
            if (!_context10.t3) {
              _context10.next = 20;
              break;
            }
            _context10.t4 = element;
            _context10.next = 26;
            break;
          case 20:
            _context10.t5 = element.contextElement;
            if (_context10.t5) {
              _context10.next = 25;
              break;
            }
            _context10.next = 24;
            return platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating);
          case 24:
            _context10.t5 = _context10.sent;
          case 25:
            _context10.t4 = _context10.t5;
          case 26:
            _context10.t6 = _context10.t4;
            _context10.t7 = boundary;
            _context10.t8 = rootBoundary;
            _context10.t9 = strategy;
            _context10.t10 = {
              element: _context10.t6,
              boundary: _context10.t7,
              rootBoundary: _context10.t8,
              strategy: _context10.t9
            };
            _context10.next = 33;
            return _context10.t1.getClippingRect.call(_context10.t1, _context10.t10);
          case 33:
            _context10.t11 = _context10.sent;
            clippingClientRect = (0, _context10.t0)(_context10.t11);
            rect = elementContext === 'floating' ? {
              x: x,
              y: y,
              width: rects.floating.width,
              height: rects.floating.height
            } : rects.reference;
            _context10.next = 38;
            return platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating);
          case 38:
            offsetParent = _context10.sent;
            _context10.next = 41;
            return platform.isElement == null ? void 0 : platform.isElement(offsetParent);
          case 41:
            if (!_context10.sent) {
              _context10.next = 50;
              break;
            }
            _context10.next = 44;
            return platform.getScale == null ? void 0 : platform.getScale(offsetParent);
          case 44:
            _context10.t13 = _context10.sent;
            if (_context10.t13) {
              _context10.next = 47;
              break;
            }
            _context10.t13 = {
              x: 1,
              y: 1
            };
          case 47:
            _context10.t12 = _context10.t13;
            _context10.next = 51;
            break;
          case 50:
            _context10.t12 = {
              x: 1,
              y: 1
            };
          case 51:
            offsetScale = _context10.t12;
            _context10.t14 = rectToClientRect;
            if (!platform.convertOffsetParentRelativeRectToViewportRelativeRect) {
              _context10.next = 59;
              break;
            }
            _context10.next = 56;
            return platform.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: elements,
              rect: rect,
              offsetParent: offsetParent,
              strategy: strategy
            });
          case 56:
            _context10.t15 = _context10.sent;
            _context10.next = 60;
            break;
          case 59:
            _context10.t15 = rect;
          case 60:
            _context10.t16 = _context10.t15;
            elementClientRect = (0, _context10.t14)(_context10.t16);
            return _context10.abrupt("return", {
              top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
              bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
              left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
              right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
            });
          case 63:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return _detectOverflow.apply(this, arguments);
  }
  var arrow$1 = function arrow(options) {
    return {
      name: 'arrow',
      options: options,
      fn: function fn(state) {
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var x, y, placement, rects, platform, elements, middlewareData, _ref3, element, _ref3$padding, padding, paddingObject, coords, axis, length, arrowDimensions, isYAxis, minProp, maxProp, clientProp, endDiff, startDiff, arrowOffsetParent, clientSize, centerToReference, largestPossiblePadding, minPadding, maxPadding, min$1, max, center, offset, shouldAddOffset, alignmentOffset;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                x = state.x, y = state.y, placement = state.placement, rects = state.rects, platform = state.platform, elements = state.elements, middlewareData = state.middlewareData; // Since `element` is required, we don't Partial<> the type.
                _ref3 = evaluate(options, state) || {}, element = _ref3.element, _ref3$padding = _ref3.padding, padding = _ref3$padding === void 0 ? 0 : _ref3$padding;
                if (!(element == null)) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", {});
              case 4:
                paddingObject = getPaddingObject(padding);
                coords = {
                  x: x,
                  y: y
                };
                axis = getAlignmentAxis(placement);
                length = getAxisLength(axis);
                _context2.next = 10;
                return platform.getDimensions(element);
              case 10:
                arrowDimensions = _context2.sent;
                isYAxis = axis === 'y';
                minProp = isYAxis ? 'top' : 'left';
                maxProp = isYAxis ? 'bottom' : 'right';
                clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
                endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
                startDiff = coords[axis] - rects.reference[axis];
                _context2.next = 19;
                return platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element);
              case 19:
                arrowOffsetParent = _context2.sent;
                clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0; // DOM platform can return `window` as the `offsetParent`.
                _context2.t0 = !clientSize;
                if (_context2.t0) {
                  _context2.next = 26;
                  break;
                }
                _context2.next = 25;
                return platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent);
              case 25:
                _context2.t0 = !_context2.sent;
              case 26:
                if (!_context2.t0) {
                  _context2.next = 28;
                  break;
                }
                clientSize = elements.floating[clientProp] || rects.floating[length];
              case 28:
                centerToReference = endDiff / 2 - startDiff / 2; // If the padding is large enough that it causes the arrow to no longer be
                // centered, modify the padding so that it is centered.
                largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
                minPadding = min(paddingObject[minProp], largestPossiblePadding);
                maxPadding = min(paddingObject[maxProp], largestPossiblePadding); // Make sure the arrow doesn't overflow the floating element if the center
                // point is outside the floating element's bounds.
                min$1 = minPadding;
                max = clientSize - arrowDimensions[length] - maxPadding;
                center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
                offset = clamp(min$1, center, max); // If the reference is small enough that the arrow's padding causes it to
                // to point to nothing for an aligned placement, adjust the offset of the
                // floating element itself. To ensure `shift()` continues to take action,
                // a single reset is performed when this is true.
                shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
                alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
                return _context2.abrupt("return", _defineProperty(_defineProperty(_defineProperty({}, axis, coords[axis] + alignmentOffset), "data", _objectSpread2(_defineProperty(_defineProperty({}, axis, offset), "centerOffset", center - offset - alignmentOffset), shouldAddOffset && {
                  alignmentOffset: alignmentOffset
                })), "reset", shouldAddOffset));
              case 39:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    };
  };

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  var flip$1 = function flip(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options: options,
      fn: function fn(state) {
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var _middlewareData$arrow, _middlewareData$flip, placement, middlewareData, rects, initialPlacement, platform, elements, _evaluate2, _evaluate2$mainAxis, checkMainAxis, _evaluate2$crossAxis, checkCrossAxis, specifiedFallbackPlacements, _evaluate2$fallbackSt, fallbackStrategy, _evaluate2$fallbackAx, fallbackAxisSideDirection, _evaluate2$flipAlignm, flipAlignment, detectOverflowOptions, side, isBasePlacement, rtl, fallbackPlacements, placements, overflow, overflows, overflowsData, _sides, _middlewareData$flip2, _overflowsData$filter, nextIndex, nextPlacement, resetPlacement, _overflowsData$map$so, _placement;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                placement = state.placement, middlewareData = state.middlewareData, rects = state.rects, initialPlacement = state.initialPlacement, platform = state.platform, elements = state.elements;
                _evaluate2 = evaluate(options, state), _evaluate2$mainAxis = _evaluate2.mainAxis, checkMainAxis = _evaluate2$mainAxis === void 0 ? true : _evaluate2$mainAxis, _evaluate2$crossAxis = _evaluate2.crossAxis, checkCrossAxis = _evaluate2$crossAxis === void 0 ? true : _evaluate2$crossAxis, specifiedFallbackPlacements = _evaluate2.fallbackPlacements, _evaluate2$fallbackSt = _evaluate2.fallbackStrategy, fallbackStrategy = _evaluate2$fallbackSt === void 0 ? 'bestFit' : _evaluate2$fallbackSt, _evaluate2$fallbackAx = _evaluate2.fallbackAxisSideDirection, fallbackAxisSideDirection = _evaluate2$fallbackAx === void 0 ? 'none' : _evaluate2$fallbackAx, _evaluate2$flipAlignm = _evaluate2.flipAlignment, flipAlignment = _evaluate2$flipAlignm === void 0 ? true : _evaluate2$flipAlignm, detectOverflowOptions = _objectWithoutProperties(_evaluate2, _excluded2); // If a reset by the arrow was caused due to an alignment offset being
                // added, we should skip any logic now since `flip()` has already done its
                // work.
                // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
                if (!((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset)) {
                  _context4.next = 4;
                  break;
                }
                return _context4.abrupt("return", {});
              case 4:
                side = getSide(placement);
                isBasePlacement = getSide(initialPlacement) === initialPlacement;
                _context4.next = 8;
                return platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
              case 8:
                rtl = _context4.sent;
                fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
                if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
                  fallbackPlacements.push.apply(fallbackPlacements, _toConsumableArray(getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl)));
                }
                placements = [initialPlacement].concat(_toConsumableArray(fallbackPlacements));
                _context4.next = 14;
                return detectOverflow(state, detectOverflowOptions);
              case 14:
                overflow = _context4.sent;
                overflows = [];
                overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
                if (checkMainAxis) {
                  overflows.push(overflow[side]);
                }
                if (checkCrossAxis) {
                  _sides = getAlignmentSides(placement, rects, rtl);
                  overflows.push(overflow[_sides[0]], overflow[_sides[1]]);
                }
                overflowsData = [].concat(_toConsumableArray(overflowsData), [{
                  placement: placement,
                  overflows: overflows
                }]);

                // One or more sides is overflowing.
                if (overflows.every(function (side) {
                  return side <= 0;
                })) {
                  _context4.next = 37;
                  break;
                }
                nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                nextPlacement = placements[nextIndex];
                if (!nextPlacement) {
                  _context4.next = 25;
                  break;
                }
                return _context4.abrupt("return", {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                });
              case 25:
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                resetPlacement = (_overflowsData$filter = overflowsData.filter(function (d) {
                  return d.overflows[0] <= 0;
                }).sort(function (a, b) {
                  return a.overflows[1] - b.overflows[1];
                })[0]) == null ? void 0 : _overflowsData$filter.placement; // Otherwise fallback.
                if (resetPlacement) {
                  _context4.next = 35;
                  break;
                }
                _context4.t0 = fallbackStrategy;
                _context4.next = _context4.t0 === 'bestFit' ? 30 : _context4.t0 === 'initialPlacement' ? 33 : 35;
                break;
              case 30:
                _placement = (_overflowsData$map$so = overflowsData.map(function (d) {
                  return [d.placement, d.overflows.filter(function (overflow) {
                    return overflow > 0;
                  }).reduce(function (acc, overflow) {
                    return acc + overflow;
                  }, 0)];
                }).sort(function (a, b) {
                  return a[1] - b[1];
                })[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (_placement) {
                  resetPlacement = _placement;
                }
                return _context4.abrupt("break", 35);
              case 33:
                resetPlacement = initialPlacement;
                return _context4.abrupt("break", 35);
              case 35:
                if (!(placement !== resetPlacement)) {
                  _context4.next = 37;
                  break;
                }
                return _context4.abrupt("return", {
                  reset: {
                    placement: resetPlacement
                  }
                });
              case 37:
                return _context4.abrupt("return", {});
              case 38:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    };
  };

  // For type backwards-compatibility, the `OffsetOptions` type was also
  // Derivable.
  function convertValueToCoords(_x6, _x7) {
    return _convertValueToCoords.apply(this, arguments);
  }
  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  function _convertValueToCoords() {
    _convertValueToCoords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(state, options) {
      var placement, platform, elements, rtl, side, alignment, isVertical, mainAxisMulti, crossAxisMulti, rawValue, _ref6, mainAxis, crossAxis, alignmentAxis;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            placement = state.placement, platform = state.platform, elements = state.elements;
            _context11.next = 3;
            return platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
          case 3:
            rtl = _context11.sent;
            side = getSide(placement);
            alignment = getAlignment(placement);
            isVertical = getSideAxis(placement) === 'y';
            mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
            crossAxisMulti = rtl && isVertical ? -1 : 1;
            rawValue = evaluate(options, state); // eslint-disable-next-line prefer-const
            _ref6 = typeof rawValue === 'number' ? {
              mainAxis: rawValue,
              crossAxis: 0,
              alignmentAxis: null
            } : _objectSpread2({
              mainAxis: 0,
              crossAxis: 0,
              alignmentAxis: null
            }, rawValue), mainAxis = _ref6.mainAxis, crossAxis = _ref6.crossAxis, alignmentAxis = _ref6.alignmentAxis;
            if (alignment && typeof alignmentAxis === 'number') {
              crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
            }
            return _context11.abrupt("return", isVertical ? {
              x: crossAxis * crossAxisMulti,
              y: mainAxis * mainAxisMulti
            } : {
              x: mainAxis * mainAxisMulti,
              y: crossAxis * crossAxisMulti
            });
          case 13:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _convertValueToCoords.apply(this, arguments);
  }
  var offset$1 = function offset(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options: options,
      fn: function fn(state) {
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          var _middlewareData$offse, _middlewareData$arrow, x, y, placement, middlewareData, diffCoords;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                x = state.x, y = state.y, placement = state.placement, middlewareData = state.middlewareData;
                _context7.next = 3;
                return convertValueToCoords(state, options);
              case 3:
                diffCoords = _context7.sent;
                if (!(placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset)) {
                  _context7.next = 6;
                  break;
                }
                return _context7.abrupt("return", {});
              case 6:
                return _context7.abrupt("return", {
                  x: x + diffCoords.x,
                  y: y + diffCoords.y,
                  data: _objectSpread2(_objectSpread2({}, diffCoords), {}, {
                    placement: placement
                  })
                });
              case 7:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    };
  };

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  var shift$1 = function shift(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options: options,
      fn: function fn(state) {
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
          var x, y, placement, _evaluate5, _evaluate5$mainAxis, checkMainAxis, _evaluate5$crossAxis, checkCrossAxis, _evaluate5$limiter, limiter, detectOverflowOptions, coords, overflow, crossAxis, mainAxis, mainAxisCoord, crossAxisCoord, minSide, maxSide, _min, _max, _minSide, _maxSide, _min2, _max2, limitedCoords;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                x = state.x, y = state.y, placement = state.placement;
                _evaluate5 = evaluate(options, state), _evaluate5$mainAxis = _evaluate5.mainAxis, checkMainAxis = _evaluate5$mainAxis === void 0 ? true : _evaluate5$mainAxis, _evaluate5$crossAxis = _evaluate5.crossAxis, checkCrossAxis = _evaluate5$crossAxis === void 0 ? false : _evaluate5$crossAxis, _evaluate5$limiter = _evaluate5.limiter, limiter = _evaluate5$limiter === void 0 ? {
                  fn: function fn(_ref) {
                    var x = _ref.x,
                      y = _ref.y;
                    return {
                      x: x,
                      y: y
                    };
                  }
                } : _evaluate5$limiter, detectOverflowOptions = _objectWithoutProperties(_evaluate5, _excluded4);
                coords = {
                  x: x,
                  y: y
                };
                _context8.next = 5;
                return detectOverflow(state, detectOverflowOptions);
              case 5:
                overflow = _context8.sent;
                crossAxis = getSideAxis(getSide(placement));
                mainAxis = getOppositeAxis(crossAxis);
                mainAxisCoord = coords[mainAxis];
                crossAxisCoord = coords[crossAxis];
                if (checkMainAxis) {
                  minSide = mainAxis === 'y' ? 'top' : 'left';
                  maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                  _min = mainAxisCoord + overflow[minSide];
                  _max = mainAxisCoord - overflow[maxSide];
                  mainAxisCoord = clamp(_min, mainAxisCoord, _max);
                }
                if (checkCrossAxis) {
                  _minSide = crossAxis === 'y' ? 'top' : 'left';
                  _maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                  _min2 = crossAxisCoord + overflow[_minSide];
                  _max2 = crossAxisCoord - overflow[_maxSide];
                  crossAxisCoord = clamp(_min2, crossAxisCoord, _max2);
                }
                limitedCoords = limiter.fn(_objectSpread2(_objectSpread2({}, state), {}, _defineProperty(_defineProperty({}, mainAxis, mainAxisCoord), crossAxis, crossAxisCoord)));
                return _context8.abrupt("return", _objectSpread2(_objectSpread2({}, limitedCoords), {}, {
                  data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y
                  }
                }));
              case 14:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }))();
      }
    };
  };

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY,
      display = _getComputedStyle.display;
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    var webkit = isWebKit();
    var css = getComputedStyle(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(function (value) {
      return (css.willChange || '').includes(value);
    }) || ['paint', 'layout', 'strict', 'content'].some(function (value) {
      return (css.contain || '').includes(value);
    });
  }
  function getContainingBlock(element) {
    var currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    var result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    var parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    var scrollableAncestor = getNearestOverflowAncestor(node);
    var isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    var win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  function getCssDimensions(element) {
    var css = getComputedStyle(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    var width = parseFloat(css.width) || 0;
    var height = parseFloat(css.height) || 0;
    var hasOffset = isHTMLElement(element);
    var offsetWidth = hasOffset ? element.offsetWidth : width;
    var offsetHeight = hasOffset ? element.offsetHeight : height;
    var shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width: width,
      height: height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    var domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    var rect = domElement.getBoundingClientRect();
    var _getCssDimensions = getCssDimensions(domElement),
      width = _getCssDimensions.width,
      height = _getCssDimensions.height,
      $ = _getCssDimensions.$;
    var x = ($ ? round(rect.width) : rect.width) / width;
    var y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x: x,
      y: y
    };
  }
  var noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    var win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var domElement = unwrapElement(element);
    var scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    var visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    var x = (clientRect.left + visualOffsets.x) / scale.x;
    var y = (clientRect.top + visualOffsets.y) / scale.y;
    var width = clientRect.width / scale.x;
    var height = clientRect.height / scale.y;
    if (domElement) {
      var win = getWindow(domElement);
      var offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      var currentWin = win;
      var currentIFrame = currentWin.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        var iframeScale = getScale(currentIFrame);
        var iframeRect = currentIFrame.getBoundingClientRect();
        var css = getComputedStyle(currentIFrame);
        var left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        var top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = currentWin.frameElement;
      }
    }
    return rectToClientRect({
      width: width,
      height: height,
      x: x,
      y: y
    });
  }
  var topLayerSelectors = [':popover-open', ':modal'];
  function isTopLayer(element) {
    return topLayerSelectors.some(function (selector) {
      try {
        return element.matches(selector);
      } catch (e) {
        return false;
      }
    });
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    var elements = _ref.elements,
      rect = _ref.rect,
      offsetParent = _ref.offsetParent,
      strategy = _ref.strategy;
    var isFixed = strategy === 'fixed';
    var documentElement = getDocumentElement(offsetParent);
    var topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var scale = createCoords(1);
    var offsets = createCoords(0);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        var offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    var html = getDocumentElement(element);
    var scroll = getNodeScroll(element);
    var body = element.ownerDocument.body;
    var width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    var height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    var x = -scroll.scrollLeft + getWindowScrollBarX(element);
    var y = -scroll.scrollTop;
    if (getComputedStyle(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    var clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    var top = clientRect.top + element.clientTop;
    var left = clientRect.left + element.clientLeft;
    var scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    var width = element.clientWidth * scale.x;
    var height = element.clientHeight * scale.y;
    var x = left * scale.x;
    var y = top * scale.y;
    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    var rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      var visualOffsets = getVisualOffsets(element);
      rect = _objectSpread2(_objectSpread2({}, clippingAncestor), {}, {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      });
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    var parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    var cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    var result = getOverflowAncestors(element, [], false).filter(function (el) {
      return isElement(el) && getNodeName(el) !== 'body';
    });
    var currentContainingBlockComputedStyle = null;
    var elementIsFixed = getComputedStyle(element).position === 'fixed';
    var currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      var computedStyle = getComputedStyle(currentNode);
      var currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      var shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(function (ancestor) {
          return ancestor !== currentNode;
        });
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    var element = _ref.element,
      boundary = _ref.boundary,
      rootBoundary = _ref.rootBoundary,
      strategy = _ref.strategy;
    var elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    var clippingAncestors = [].concat(_toConsumableArray(elementClippingAncestors), [rootBoundary]);
    var firstClippingAncestor = clippingAncestors[0];
    var clippingRect = clippingAncestors.reduce(function (accRect, clippingAncestor) {
      var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    var _getCssDimensions2 = getCssDimensions(element),
      width = _getCssDimensions2.width,
      height = _getCssDimensions2.height;
    return {
      width: width,
      height: height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var isFixed = strategy === 'fixed';
    var rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        var offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    var x = rect.left + scroll.scrollLeft - offsets.x;
    var y = rect.top + scroll.scrollTop - offsets.y;
    return {
      x: x,
      y: y,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle(element).position === 'static';
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    var win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      var svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    var offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var getOffsetParentFn, getDimensionsFn, floatingDimensions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            getOffsetParentFn = this.getOffsetParent || getOffsetParent;
            getDimensionsFn = this.getDimensions;
            _context.next = 4;
            return getDimensionsFn(data.floating);
          case 4:
            floatingDimensions = _context.sent;
            _context.t0 = getRectRelativeToOffsetParent;
            _context.t1 = data.reference;
            _context.next = 9;
            return getOffsetParentFn(data.floating);
          case 9:
            _context.t2 = _context.sent;
            _context.t3 = data.strategy;
            _context.t4 = (0, _context.t0)(_context.t1, _context.t2, _context.t3);
            _context.t5 = {
              x: 0,
              y: 0,
              width: floatingDimensions.width,
              height: floatingDimensions.height
            };
            return _context.abrupt("return", {
              reference: _context.t4,
              floating: _context.t5
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    return function getElementRects(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  function isRTL(element) {
    return getComputedStyle(element).direction === 'rtl';
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: getDocumentElement,
    getClippingRect: getClippingRect,
    getOffsetParent: getOffsetParent,
    getElementRects: getElementRects,
    getClientRects: getClientRects,
    getDimensions: getDimensions,
    getScale: getScale,
    isElement: isElement,
    isRTL: isRTL
  };

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  var offset = offset$1;

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  var shift = shift$1;

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  var flip = flip$1;

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  var arrow = arrow$1;

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   */
  var computePosition = function computePosition(reference, floating, options) {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    var cache = new Map();
    var mergedOptions = _objectSpread2({
      platform: platform
    }, options);
    var platformWithCache = _objectSpread2(_objectSpread2({}, mergedOptions.platform), {}, {
      _c: cache
    });
    return computePosition$1(reference, floating, _objectSpread2(_objectSpread2({}, mergedOptions), {}, {
      platform: platformWithCache
    }));
  };

  var _templateObject$7;

  /**
   * Service Now Ods Tooltip component
   * @input id, label
   * @output <ods-tooltip> in dom
   */
  var OdsTooltip = /*#__PURE__*/function (_LitElement) {
    function OdsTooltip() {
      var _this;
      _classCallCheck(this, OdsTooltip);
      _this = _callSuper(this, OdsTooltip);
      _this.id = 'tooltip';
      _this.label = '';
      return _this;
    }
    _inherits(OdsTooltip, _LitElement);
    return _createClass(OdsTooltip, [{
      key: "getTooltipElements",
      value: function getTooltipElements() {
        var _element;
        var current = this.renderRoot;
        var selector = "[aria-describedby='".concat(this.id, "']");
        //Use standalone
        var element = document.querySelector(selector);
        //If used within our components
        element = (_element = element) !== null && _element !== void 0 ? _element : current.getRootNode().host.parentElement.querySelector(selector);
        return {
          current: current,
          element: element,
          selector: selector
        };
      }
    }, {
      key: "updateTooltipPosition",
      value: function updateTooltipPosition() {
        var _this2 = this;
        var _this$getTooltipEleme = this.getTooltipElements(),
          current = _this$getTooltipEleme.current,
          element = _this$getTooltipEleme.element;
        var arrowElement = current.querySelector('#arrow');
        var indicatorElement = current.querySelector('#indicator');
        var arrowLen = arrowElement.offsetWidth;
        // Get half the arrow box's hypotenuse length
        computePosition(element, this, {
          placement: 'top',
          middleware: [flip({
            crossAxis: true,
            allowedPlacements: ['top', 'bottom']
          }), shift({
            padding: 5
          }), offset(6), arrow({
            element: arrowElement
          })]
        }).then(function (_ref) {
          var x = _ref.x,
            y = _ref.y,
            middlewareData = _ref.middlewareData,
            placement = _ref.placement;
          var tooltipMargin = placement === 'top' ? y - 8 : y + 8;
          Object.assign(_this2.style, {
            left: "".concat(x, "px"),
            top: "".concat(tooltipMargin, "px")
          });
          var side = placement.split("-")[0];
          var staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[side];
          var indicatorStaticSides = {
            bottom: {
              left: '1px',
              top: '1px'
            },
            top: {
              right: '1px',
              bottom: '1px'
            }
          }[side];
          if (middlewareData.arrow) {
            var _middlewareData$arrow = middlewareData.arrow,
              _x = _middlewareData$arrow.x,
              _y = _middlewareData$arrow.y;
            Object.assign(arrowElement.style, _defineProperty(_defineProperty({
              left: _x != null ? "".concat(_x, "px") : '',
              top: _y != null ? "".concat(_y, "px") : '',
              right: "",
              bottom: ""
            }, staticSide, "".concat(-arrowLen / 2 - 1, "px")), "transform", "rotate(45deg)"));
            Object.assign(indicatorElement.style, _objectSpread2({
              left: '',
              right: '',
              top: '',
              bottom: ''
            }, indicatorStaticSides));
          }
        });
      }
    }, {
      key: "setHoverToAssociatedElement",
      value: function setHoverToAssociatedElement() {
        var _this$getTooltipEleme2 = this.getTooltipElements(),
          element = _this$getTooltipEleme2.element,
          selector = _this$getTooltipEleme2.selector;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerText = "\n    ".concat(selector, ":hover ~ ods-tooltip[id='").concat(this.id, "'],\n    ").concat(selector, ":focus ~ ods-tooltip[id='").concat(this.id, "']{\n      visibility: visible;\n    }\n    ");
        element.insertBefore(style, null);
      }
    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        this.setHoverToAssociatedElement();
        this.updateTooltipPosition();
      }
    }, {
      key: "updated",
      value: function updated() {
        _get(_getPrototypeOf(OdsTooltip.prototype), "updated", this).call(this);
        this.updateTooltipPosition();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this3 = this;
        _get(_getPrototypeOf(OdsTooltip.prototype), "connectedCallback", this).call(this);
        this.interval = setInterval(function () {
          _this3.requestUpdate();
        }, 1000);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        clearInterval(this.interval);
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral([" \n    <style>\n    *, :host{\n      --ods-background-primary:         #FFF;\n      --ods-border-decorative-primary:  #C5C5C5;\n      --ods-sem-text-primary:           #1B1B1B;\n      --ods-sem-space-none:             0;\n      --ods-sem-space-xsmall:           4px;\n      --ods-sem-space-small:            8px;\n      --ods-border-radius-xsmall:       4px;\n      --ods-shadow-small-x:         0px;\n      --ods-shadow-small-y:         2px;\n      --ods-shadow-small-blur:      4px;\n      --ods-shadow-small-spread:    0px;\n      --ods-shadow-small-color:     rgba(59, 59, 59, 0.25);\n\n    }\n    :host {\n      visibility:hidden;\n      width: max-content;\n      position: absolute;\n      z-index: 999;\n      top: var(--ods-sem-space-none);\n      left: var(--ods-sem-space-none);\n      background: var(--ods-background-primary);\n      color: var(--ods-sem-text-primary);\n      border-radius: var(--ods-border-radius-xsmall);\n      max-width: 240px;\n      box-shadow: var(--ods-shadow-small-x) var(--ods-shadow-small-y) var(--Shadow-Small-Blur, 4px) var(--ods-shadow-small-spread) var(--Shadow-Small-Color, var(--ods-shadow-small-color)); \n    }\n    .tooltip{\n      padding: var(--ods-sem-space-xsmall) var(--ods-sem-space-small);\n      border-radius: var(--ods-border-radius-xsmall);\n      box-shadow: 0 0 0 0 white, 0 0 0 1px var(--ods-border-decorative-primary);\n      overflow-wrap: break-word;\n      hyphens: auto;\n    }\n    #arrow {\n      position: absolute;\n      background: var(--ods-border-decorative-primary);\n      width: var(--ods-sem-space-small);\n      height: var(--ods-sem-space-small);\n    }\n    #indicator {\n      position: absolute;\n      background: var(--ods-background-primary);\n      width: var(--ods-sem-space-small);\n      height: var(--ods-sem-space-small);\n    }\n    </style>\n    <div role=\"tooltip\" class='tooltip'>\n      <ods-text tag='span' size='sm'>", "</ods-text>\n      <div id='arrow'><div id='indicator'></div>\n    </div>                        \n    "])), this.label);
      }
    }]);
  }(s$2);
  _defineProperty(OdsTooltip, "properties", {
    id: {
      type: String
    },
    label: {
      type: String
    }
  });
  customElements.define("ods-tooltip", OdsTooltip);

  var _templateObject$6, _templateObject2$5, _templateObject3$5, _templateObject4$5;
  var OdsIconButton = /*#__PURE__*/function (_LitElement) {
    function OdsIconButton() {
      var _this;
      _classCallCheck(this, OdsIconButton);
      _this = _callSuper(this, OdsIconButton);
      _this.disabled = false;
      _this.target = '_self';
      _this.shape = 'square';
      _this.tooltipId = _this.makeId(10);
      return _this;
    }
    _inherits(OdsIconButton, _LitElement);
    return _createClass(OdsIconButton, [{
      key: "getIcon",
      value: function getIcon() {
        var colorMap = {
          outline: {
            "true": "#515151",
            "false": this.color ? this.color : "primary"
          },
          ghost: {
            "true": "#515151",
            "false": this.color ? this.color : "primary"
          }
        };
        var color = (colorMap[this.variant] || {}).hasOwnProperty(this.disabled) ? colorMap[this.variant][this.disabled] : "#515151";
        return x(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  <ods-icon size=\"sm\" name=\"", "\" color=\"", "\" />\n  "])), this.icon || 'placeholder', color);
      }
    }, {
      key: "setActiveMenu",
      value: function setActiveMenu(setActive) {
        this.shadowRoot.querySelector('a, button').toggleAttribute('active-menu', setActive);
      }

      //Lets delegate focus
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: true
        });
      }
    }, {
      key: "getButton",
      value: function getButton() {
        var tabindex = this.disabled ? -1 : 0;
        if (this.href) {
          return x(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n      <a class=' btn-", " ", "' href= \"", "\" target= \"", "\"  tabindex= \"", "\" aria-disabled = \"", "\"  aria-describedby='tooltip_", "' >\n      <i class='icon'> ", " </i>\n      </a>\n      "])), this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', this.href, this.target || '_self', tabindex, this.disabled ? 'true' : 'false', this.tooltipId, this.getIcon());
        } else {
          return x(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["\n      <button @click=\"", "\" class='btn-", " ", "' tabindex= \"", "\" aria-disabled = \"", "\" aria-describedby='tooltip_", "'>\n     <i class='icon'> ", " </i>\n      </button>\n      "])), this.onClick, this.variant || 'outline', this.disabled ? "disabled-".concat(this.variant) : '', tabindex, this.disabled ? 'true' : 'false', this.tooltipId, this.getIcon());
        }
      }
    }, {
      key: "makeId",
      value: function makeId(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        var counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
      }
    }, {
      key: "render",
      value: function render() {
        var borderRadius = this.shape === 'round' ? '9999px' : 'var( --ods-sem-space-small)';
        return x(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["\n  \n    <style>\n    *{\n      --ods-utility-states-primary-hover: rgba(143, 218, 131, 0.40);\n      --ods-utility-states-primary-pressed: rgba(143, 218, 131, 0.64);\n      --ods-utility-states-disabled-container: #C5C5C5;\n      --ods-ref-color-green-100: #FFFFFF;\n      --ods-ref-color-green-40:  #298319;\n      --ods-ref-color-gray-35:   #515151;\n      --ods-sem-space-none:       0rem;\n      --ods-sem-space-xsmall:     0.25rem;\n      --ods-sem-space-small:      0.5rem;\n      --ods-sem-space-medium:     1rem;\n      --ods-sem-space-large:      1.5rem;\n    }\n\n    :host{\n      display: inline-flex;\n    }\n    \n    a, button {\n        border-radius: ", ";\n        height:var(--ods-icon-button-height,44px);\n        width:var(--ods-icon-button-width,44px);\n        text-decoration: none;\n        border: var(--ods-sem-space-none);\n        cursor: pointer;\n        justify-content: center;\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        padding: 0;\n      }\n\n    .btn-outline {\n        color: var(--ods-ref-color-green-40);\n        background-color: var(--ods-ref-color-green-100) ;\n        box-shadow:0 0 0 1px ;\n    }\n\n    .btn-outline:hover {\n      background: var(--ods-utility-states-primary-hover);\n    }\n\n    .btn-outline:active, .btn-outline[active-menu]{\n      background: var(--ods-utility-states-primary-pressed);\n    }\n\n    :host(:focus-within) .btn-outline{\n     outline: none;\n     box-shadow: 0 0 0 1px var(--ods-ref-color-green-40), 0 0 0 0.188rem white, 0 0 0 0.35rem var(--ods-ref-color-green-40);\n    }\n   \n    .btn-ghost {\n    color: var(--ods-ref-color-green-40);\n    background: transparent;\n    }\n\n    .btn-ghost:hover {\n    background: var(--ods-utility-states-primary-hover);\n    }\n\n    .btn-ghost:active, .btn-ghost[active-menu]{\n    background: var(--ods-utility-states-primary-pressed);\n    }\n\n    :host(:focus-within) .btn-ghost{\n      outline: none;\n      box-shadow: 0 0 0 2px var(--ods-ref-color-green-40);\n    }\n\n\n    .disabled-outline, .disabled-outline:hover, :host(:focus-within) .disabled-outline {\n      color: var(--ods-ref-color-gray-35);\n      opacity: 0.5;\n      background: var(--ods-utility-states-disabled-container);\n      box-shadow: 0 0 0  1px !important;\n      cursor: not-allowed;\n      pointer-events: none;\n\n    }\n\n    .disabled-ghost, .disabled-ghost:hover, .disabled-ghost:focus{\n      border-radius: ", ";\n      color: var(--ods-ref-color-gray-35);\n      background: var(--ods-utility-states-disabled-container);\n      opacity: 0.5;\n      cursor: not-allowed;\n      pointer-events: none;\n      box-shadow: none !important;    \n    }\n\n    .icon {\n        display: inline-flex;\n        align-items: center;\n        }\n \n    .iconbutton-container:has(.disabled-outline, .disabled-ghost){\n      cursor: not-allowed;\n      }\n\n    </style>\n    <div class=\"iconbutton-container\">", "\n    <ods-tooltip id='tooltip_", "' label=\"", "\" ></ods-tooltip> \n    </div>\n      "])), borderRadius, borderRadius, this.getButton(), this.tooltipId, this.tooltip);
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
          disabled: {
            type: Boolean
          },
          href: {
            type: String
          },
          target: {
            type: String
          },
          shape: {
            type: String
          },
          tooltip: {
            type: String
          },
          color: {
            type: String
          },
          onClick: {
            type: Function
          }
        };
      }
    }]);
  }(s$2);
  customElements.define('ods-icon-button', OdsIconButton);

  var MenuItemClickEvent = /*#__PURE__*/function (_Event) {
    function MenuItemClickEvent(detail) {
      var _this;
      _classCallCheck(this, MenuItemClickEvent);
      _this = _callSuper(this, MenuItemClickEvent, ["menu-item-click-event", {
        bubbles: true,
        composed: true
      }]);
      _this.detail = detail;
      return _this;
    }
    _inherits(MenuItemClickEvent, _Event);
    return _createClass(MenuItemClickEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));
  var MenuToggleEvent = /*#__PURE__*/function (_Event2) {
    function MenuToggleEvent(detail) {
      var _this2;
      _classCallCheck(this, MenuToggleEvent);
      _this2 = _callSuper(this, MenuToggleEvent, ["menu-toggle-event", {
        bubbles: true,
        composed: true
      }]);
      _this2.detail = detail;
      return _this2;
    }
    _inherits(MenuToggleEvent, _Event2);
    return _createClass(MenuToggleEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));
  var MenuSingleItemClickEvent = /*#__PURE__*/function (_Event3) {
    function MenuSingleItemClickEvent(detail) {
      var _this3;
      _classCallCheck(this, MenuSingleItemClickEvent);
      _this3 = _callSuper(this, MenuSingleItemClickEvent, ["menu-item-single-event", {
        bubbles: true,
        composed: true
      }]);
      _this3.detail = detail;
      return _this3;
    }
    _inherits(MenuSingleItemClickEvent, _Event3);
    return _createClass(MenuSingleItemClickEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));
  var MenuItemSlotChangeEvent = /*#__PURE__*/function (_Event4) {
    function MenuItemSlotChangeEvent(detail) {
      var _this4;
      _classCallCheck(this, MenuItemSlotChangeEvent);
      _this4 = _callSuper(this, MenuItemSlotChangeEvent, ["menu-item-slot-change-event", {
        bubbles: true,
        composed: true
      }]);
      _this4.detail = detail;
      return _this4;
    }
    _inherits(MenuItemSlotChangeEvent, _Event4);
    return _createClass(MenuItemSlotChangeEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));
  var MenuItemKeyEvent = /*#__PURE__*/function (_Event5) {
    function MenuItemKeyEvent(detail) {
      var _this5;
      _classCallCheck(this, MenuItemKeyEvent);
      _this5 = _callSuper(this, MenuItemKeyEvent, ["menu-item-key-event", {
        bubbles: true,
        composed: true
      }]);
      _this5.detail = detail;
      return _this5;
    }
    _inherits(MenuItemKeyEvent, _Event5);
    return _createClass(MenuItemKeyEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));
  var OdsActiveMenuEvent = /*#__PURE__*/function (_Event8) {
    function OdsActiveMenuEvent(detail) {
      var _this8;
      _classCallCheck(this, OdsActiveMenuEvent);
      _this8 = _callSuper(this, OdsActiveMenuEvent, ["ods-active-menu-event", {
        bubbles: true,
        composed: true
      }]);
      _this8.detail = detail;
      return _this8;
    }
    _inherits(OdsActiveMenuEvent, _Event8);
    return _createClass(OdsActiveMenuEvent);
  }( /*#__PURE__*/_wrapNativeSuper(Event));

  var _templateObject$5, _templateObject2$4, _templateObject3$4, _templateObject4$4, _templateObject5$3, _templateObject6$3;

  /**
   * Service Now Ods Menu Item component
   * @input href, target, onClick, selected
   * @output <ods-menu-item> in dom
   */
  var OdsMenuItem = /*#__PURE__*/function (_LitElement) {
    function OdsMenuItem() {
      var _this;
      _classCallCheck(this, OdsMenuItem);
      _this = _callSuper(this, OdsMenuItem);
      _this.href = '';
      _this.target = '_self';
      _this.selected = false;
      _this.subtext = '';
      _this.handleKeyEvent = _this.handleKeyEvent.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      return _this;
    }
    _inherits(OdsMenuItem, _LitElement);
    return _createClass(OdsMenuItem, [{
      key: "isSingleSelect",
      value: function isSingleSelect() {
        return this._parent['single-select'];
      }
    }, {
      key: "updated",
      value: function updated() {
        var _this2 = this;
        _get(_getPrototypeOf(OdsMenuItem.prototype), "updated", this).call(this);
        this.setAvatarToSmall();
        this._parent = this.shadowRoot.host.parentElement;
        this._selectable = this._parent.selectable;
        this.addEventListener('keydown', this.handleKeyEvent);
        this.addEventListener('blur', function (e) {
          _this2._handleBlur(e, _this2);
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('keydown', this.handleKeyEvent);
      }
    }, {
      key: "_handleBlur",
      value: function _handleBlur(event, currentMenuItem) {
        var currentMenu = currentMenuItem._parent;
        if (!(currentMenu._allMenuItems.includes(event.relatedTarget) || currentMenu.shadowRoot.host === event.relatedTarget)) {
          currentMenu.closeMenu(false);
        }
      }
    }, {
      key: "setAvatarToSmall",
      value: function setAvatarToSmall() {
        var avatarArray = this.shadowRoot.host.querySelectorAll('ods-avatar');
        avatarArray.forEach(function (avatarItem) {
          avatarItem.size = 'sm';
        });
      }
    }, {
      key: "hasOnclickFunction",
      value: function hasOnclickFunction() {
        return typeof this.onClick !== 'undefined';
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        this.dispatchEvent(new MenuItemClickEvent({
          value: this.value
        }));
        this._noclose = this.shadowRoot.host.parentElement['no-close-on-select'];
        if (this.hasOnclickFunction()) this.onClick();
        if (this.isSingleSelect()) {
          this.selected = true;
          this.dispatchEvent(new MenuSingleItemClickEvent({
            menuItem: this,
            menu: this._parent
          }));
        } else {
          this.selected = !this.selected;
        }
        if (!this._noclose) this._parent.closeMenu();
      }
    }, {
      key: "getContent",
      value: function getContent() {
        return x(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n      <a class='menu-item' part='ods-menu-item'\n          target='", "'\n          @click=\"", "\"\n          href='", "' tabindex=\"-1\">\n          ", "\n      </a>"])), this.target, this.handleClick, this.href || 'javascript:void(0);', this.getSlots());
      }
    }, {
      key: "getUsedSlots",
      value: function getUsedSlots() {
        return this.shadowRoot.host.querySelector('div');
      }
    }, {
      key: "handleSlotChange",
      value: function handleSlotChange(e) {
        this.dispatchEvent(new MenuItemSlotChangeEvent({
          menuItem: this
        }));
      }
    }, {
      key: "handleSlotClick",
      value: function handleSlotClick(e) {
        e.target.closest('.menu-item').focus();
      }
    }, {
      key: "handleKeyEvent",
      value: function handleKeyEvent(e) {
        if (e.key !== 'Tab' && e.key !== 'Enter' && e.key !== 'Space' && e.key !== ' ') {
          e.preventDefault();
        }
        this.dispatchEvent(new MenuItemKeyEvent({
          key: e.key,
          menuItem: this
        }));
      }
    }, {
      key: "IsEmpty",
      value: function IsEmpty(node) {
        return node.textContent.trim() === "";
      }
    }, {
      key: "getSlots",
      value: function getSlots() {
        return x(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n    ", "\n    <div class='start-container'>\n      <slot name='start' @slotchange=\"", "\" /></slot>\n    </div>\n    <div class='text-container'>\n      <div class='maintext-container'>\n      <slot name='label'></slot>\n      </div>\n      <div class='subtext-container'>\n        <slot name='sub-label'></slot>\n      </div>\n      </div>\n      <div class='end-container'>\n        <slot name='end' @slotchange=\"", "\" /></slot>\n      </div>\n    "])), this._selectable ? x(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n    <div class='check-container'>\n        ", "\n        ", "\n    </div>"])), this.selected ? x(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["<ods-icon size='sm' name='check'></ods-icon>"]))) : '', !this.selected ? x(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["<div class='no-icon'></div>"]))) : '') : '', this.handleSlotChange, this.handleSlotChange);
      }
    }, {
      key: "createRenderRoot",
      value:
      //Lets delegate focus
      function createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        return x(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral([" \n    <style>\n    *, :host{\n      --ods-utility-states-secondary-hover: rgba(162, 200, 219, 0.40);\n      --ods-utility-states-secondary-pressed: rgba(162, 200, 219, 0.64);\n      --ods-utility-states-focus: #298319;\n    }\n    :host{\n      width: 100%;\n    }\n  \n    .menu-item-main-container{\n      display: flex;\n    }\n    .menu-item{\n      border: 0;\n      width: 100%;\n      padding: var(--Space-Small, 8px) var(--Space-Medium, 16px);\n      text-align: left;\n      display: grid;\n      ", "\n      column-gap: 8px;\n      font-family: lato;\n      text-decoration: inherit;\n      color: inherit;\n      word-wrap: break-word;\n      background: inherit;\n    }\n\n    :host(:hover){\n      background: var(--ods-utility-states-secondary-hover);\n    }\n    .menu-item:hover, :host(:hover){\n      cursor: pointer;\n    }\n    .menu-item-main-container:active{\n      background: var(--ods-utility-states-secondary-pressed);\n    }\n    .menu-item:focus, .menu-item:focus-visible, .menu-item:focus-within{\n      outline: 2px var(--ods-utility-states-focus) solid;\n      outline-offset: -2px;\n    }\n    \n    .no-icon{\n      display: inline-flex;\n      width: 16px;\n      height: 16px;\n    }\n    .subtext-container{\n      \n    }\n    .text-container{\n      display: flex;\n      flex-direction: column;\n      font-size: 14px;\n      line-height: 24px;\n    }\n\n    .subtext-container{\n      display: flex;\n      flex-direction: column;\n      font-size: 14px;\n      line-height: 22px;\n      word-break: break-all;\n    }\n    .start-container, .end-container, .check-container{justify-self:center;  a}\n    .start-container [name='start']::slotted(ods-icon), .check-container ods-icon, .end-container [name='end']::slotted(ods-icon){\n      margin-top: 4px !important;\n    }\n    .start-container{grid-area: start; ", "}\n    .end-container{grid-area: end; ", "}\n    .check-container{grid-area: check; ", "}\n    .text-container{grid-area: text;}\n    .subtext-container{grid-area: subtext;}\n    </style>\n    <li class='menu-item-main-container'>\n      ", "\n    </li>\n    "])), this._gridStyle, this._iconPosition !== 'start' ? 'display: none;' : '', this._iconPosition !== 'end' ? 'display: none;' : '', !this._selectable ? 'display: none;' : '', this.getContent());
      }
    }]);
  }(s$2);
  _defineProperty(OdsMenuItem, "properties", {
    href: {
      type: String
    },
    target: {
      type: String
    },
    onClick: {
      type: Function
    },
    selected: {
      type: Boolean,
      attribute: true
    },
    subtext: {
      type: String
    },
    _gridStyle: {
      state: true
    },
    _iconPosition: {
      state: true
    },
    value: {
      type: String
    },
    _selectable: {
      state: true
    }
  });
  customElements.define("ods-menu-item", OdsMenuItem);

  var _templateObject$4, _templateObject2$3, _templateObject3$3, _templateObject4$3;

  /**
   * Service Now Ods Menu Divider component
   * @output <ods-menu-divider> in dom
   */
  var OdsMenuDivider = /*#__PURE__*/function (_LitElement) {
    function OdsMenuDivider() {
      var _this;
      _classCallCheck(this, OdsMenuDivider);
      _this = _callSuper(this, OdsMenuDivider);
      _this.label = '';
      _this['hide-divider'] = false;
      return _this;
    }
    _inherits(OdsMenuDivider, _LitElement);
    return _createClass(OdsMenuDivider, [{
      key: "getDivider",
      value: function getDivider() {
        return x(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n    "])), !this["hide-divider"] && this.label || !this.label ? x(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["<div class='divider' part='ods-menu-divider'></div>"]))) : '', this.label ? x(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["<div class=\"label\" part='ods-menu-divider-label'><ods-text size=\"sm\" weight='bold' color=\"text-tertiary\">", "</ods-text></div>"])), this.label) : '');
      }
    }, {
      key: "render",
      value: function render() {
        this._parent = this.shadowRoot.host.parentElement;
        if (!this._parent.selectable) {
          return x(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral([" \n        <style>\n        .divider{\n          display: flex;\n          /*margin: var(--ods-sem-space-none) var(--ods-sem-space-medium);*/\n          margin: var(--Space-Small, 8px) var(--Space-Medium, 16px);\n          flex-direction: column;\n          align-items: flex-start;\n          gap: var(--ods-sem-space-none);\n          flex-shrink: 0;\n          border-color: var(--ods-border-decorative-primary);\n          background-color: var(--ods-border-decorative-primary);\n          border: 0;\n          height: 1px;\n          margin: 0;\n        }\n        .label{\n          line-height: 24px;\n          cursor: default;\n          padding-top:8px;\n          padding-bottom:8px;\n        }\n        \n        .divider ~ .label{\n          \n          line-height: 23px;\n        }\n\n        </style>\n        ", "\n        "])), this.getDivider());
        }
      }
    }]);
  }(s$2);
  _defineProperty(OdsMenuDivider, "properties", {
    label: {
      type: String
    },
    'hide-divider': {
      type: Boolean
    }
  });
  customElements.define("ods-menu-divider", OdsMenuDivider);

  var _templateObject$3, _defineProperty2;

  /**
   * Service Now Ods Menu component
   * @input match-width, max-height, max-width,	anchor,	no-close-on-select,	selectable,	elRef
   * @output <ods-menu> in dom
   */

  var hasLoadedMaterialSymbolsFont = false;
  var loadLatoFont = function loadLatoFont() {
    if (hasLoadedMaterialSymbolsFont) {
      return;
    }
    hasLoadedMaterialSymbolsFont = true;
    var fontSheet = new CSSStyleSheet();
    fontSheet.replaceSync("\n    @font-face {\n      font-family: 'lato';\n      src: url(https://fonts.cdnfonts.com/s/14882/Lato-Regular.woff) format('woff');\n      font-weight: normal;\n    }\n  ");
    document.adoptedStyleSheets.push(fontSheet);
  };
  var OdsMenu = /*#__PURE__*/function (_LitElement) {
    function OdsMenu() {
      var _this;
      _classCallCheck(this, OdsMenu);
      _this = _callSuper(this, OdsMenu);
      loadLatoFont();
      _this['match-width'] = false;
      _this['max-height'] = '266px';
      _this['max-width'] = '184px';
      _this.anchor = '';
      _this['no-close-on-select'] = false;
      _this.selectable = false;
      _this['no-items-label'] = 'No Items';
      _this._handleKeyAnchorEvents = _this._handleKeyAnchorEvents.bind(_this);
      _this._handleESCKeyEvent = _this._handleESCKeyEvent.bind(_this);
      _this._handleWindowClick = _this._handleWindowClick.bind(_this);
      _this._handleInjectedClick = _this._handleInjectedClick.bind(_this);
      _this._handleAnchoredBlur = _this._handleAnchoredBlur.bind(_this);
      _this._handleResize = _this._handleResize.bind(_this);
      _this._defaultHeight = '266px';
      _this._anchoredWidth = '';
      _this._isMobile = false;
      _this._anchored = null;
      _this._isValid = false;
      _this._isOpen = false;
      _this['single-select'] = false;
      _this._allMenuItems = null;
      _this._dataMenuItems = null;
      _this._firstMenuItem = null;
      _this._lastMenuItem = null;
      _this._firstChars = [];
      _this._currentSelectedItem = null;
      return _this;
    }
    _inherits(OdsMenu, _LitElement);
    return _createClass(OdsMenu, [{
      key: "triggerDispatchEvent",
      value:
      /**
       * Dispatch Event
       */
      function triggerDispatchEvent(data) {
        this.dispatchEvent(new MenuToggleEvent({
          value: data
        }));
      }
    }, {
      key: "IsEmpty",
      value: function IsEmpty(node) {
        return node.textContent.trim() === "";
      }
    }, {
      key: "_handleResize",
      value: function _handleResize() {
        this.setAnchoredWidth();
        this.checkMobile();
        this.setMenuPosition();
      }
    }, {
      key: "checkMobile",
      value: function checkMobile() {
        this._isMobile = window.innerWidth <= 320;
      }
    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        if (this._isValid) {
          this.checkMobile();
          this.setMenuPosition();
          this.processSlots();
        }
      }
    }, {
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(OdsMenu.prototype), "updated", this).call(this);
        var oldSelectableValue = changedProperties.get('selectable');
        if (oldSelectableValue !== this.selectable && typeof oldSelectableValue !== 'undefined') {
          this.processSlots();
        }
      }
    }, {
      key: "setAllMenuItems",
      value: function setAllMenuItems() {
        this._allMenuItems = Array.from(this.shadowRoot.host.querySelectorAll('ods-menu-item, ods-menu-divider'));
      }
    }, {
      key: "setDataMenuItems",
      value: function setDataMenuItems() {
        this._firstChars = [];
        this._dataMenuItems = Array.from(this.shadowRoot.host.querySelectorAll('ods-menu-item'));
        this._firstMenuItem = this._dataMenuItems[0];
        this._lastMenuItem = this._dataMenuItems[this._dataMenuItems.length - 1];
        this.setFirstChars();
      }
    }, {
      key: "processSlots",
      value: function () {
        var _processSlots = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.setAllMenuItems();
                this.setDataMenuItems();
                _context.next = 4;
                return Promise.all(this._allMenuItems.map(function (c) {
                  c.requestUpdate();
                  return c.updateComplete;
                }));
              case 4:
                this.onceChildrenAreUpdated(this._allMenuItems);
                this.setFirstChars();
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function processSlots() {
          return _processSlots.apply(this, arguments);
        }
        return processSlots;
      }()
    }, {
      key: "setFirstChars",
      value: function setFirstChars() {
        var _this2 = this;
        this._firstChars = [];
        this._dataMenuItems.forEach(function (menuItem) {
          if (menuItem.shadowRoot.querySelector('slot[name="label"]')) _this2._firstChars.push(menuItem.shadowRoot.querySelector('slot[name="label"]').assignedNodes()[0].textContent[0].toLowerCase());
        });
      }
    }, {
      key: "onceChildrenAreUpdated",
      value: function onceChildrenAreUpdated(children) {
        var _this3 = this;
        var startCounter = children.map(function (child) {
          var _child$shadowRoot$que;
          return (_child$shadowRoot$que = child.shadowRoot.querySelector("slot[name='start']")) === null || _child$shadowRoot$que === void 0 ? void 0 : _child$shadowRoot$que.assignedNodes();
        }).filter(function (x) {
          return typeof x !== 'undefined' && x.length > 0;
        }).length;
        var endCounter = children.map(function (child) {
          var _child$shadowRoot$que2;
          return (_child$shadowRoot$que2 = child.shadowRoot.querySelector("slot[name='end']")) === null || _child$shadowRoot$que2 === void 0 ? void 0 : _child$shadowRoot$que2.assignedNodes();
        }).filter(function (x) {
          return typeof x !== 'undefined' && x.length > 0;
        }).length;
        if (startCounter > 0 && endCounter) {
          this.setInvalidMenu('Cannot use both Menu Item Start and End slots at same time');
          return;
        }
        this._isValid = true;
        children.forEach(function (child) {
          var position = '';
          if (startCounter > 0 && endCounter === 0) {
            position = 'start';
          }
          if (startCounter === 0 && endCounter > 0) {
            position = 'end';
          }
          if (startCounter === 0 && endCounter === 0) {
            position = 'none';
          }
          _this3.setChildGridStyle(child, position);
        });
      }
    }, {
      key: "setEmptySlots",
      value: function setEmptySlots() {
        var e = document.createElement('div');
        e.className = 'no-items';
        e.innerHTML = this['no-items-label'];
        this.shadowRoot.querySelector('.menu-container').innerHTML = '';
        this.shadowRoot.querySelector('.menu-container').appendChild(e);
      }
    }, {
      key: "setMenuPosition",
      value: function setMenuPosition() {
        var _this4 = this;
        var xElPos = this._anchored.offsetLeft;
        computePosition(this._anchored, this, {
          placement: 'bottom',
          middleware: [flip({
            crossAxis: true,
            allowedPlacements: ['top', 'bottom']
          }), shift({
            padding: 4
          }), offset(4)]
        }).then(function (_ref) {
          _ref.x;
            var y = _ref.y;
            _ref.placement;
          Object.assign(_this4.style, {
            left: "".concat(xElPos, "px"),
            top: "".concat(y, "px")
          });
        });
      }
    }, {
      key: "_handleWindowClick",
      value: function _handleWindowClick(ev) {
        if (this._anchored === ev.target) {
          return false;
        }
        if (this.shouldCloseMenu(ev)) this.closeMenu();
      }
    }, {
      key: "_handleInjectedClick",
      value: function _handleInjectedClick(ev, menu) {
        menu.toggleMenu();
        ev.stopPropagation();
      }
    }, {
      key: "initializeMenu",
      value: function initializeMenu() {
        var _this$elRef,
          _this5 = this;
        this._anchored = (_this$elRef = this.elRef) !== null && _this$elRef !== void 0 ? _this$elRef : document.getElementById(this.anchor);
        if (!this._anchored) {
          this.setInvalidMenu('ODS Menu: Missing Anchor. Provide a reachable ID or reference');
          return;
        }
        this._anchored.addEventListener('click', function (e) {
          _this5._handleInjectedClick(e, _this5);
        });
        this._isValid = true;
        if (this._isValid) {
          this._anchored.addEventListener('blur', function (e) {
            _this5._handleAnchoredBlur(e, _this5);
          });
          this._anchored.addEventListener('keydown', this._handleKeyAnchorEvents);
          document.addEventListener('keydown', this._handleESCKeyEvent);
          document.addEventListener('click', this._handleWindowClick);
          window.addEventListener('resize', this._handleResize, true);
        }
      }
    }, {
      key: "setAnchoredWidth",
      value: function setAnchoredWidth() {
        this._anchoredWidth = this._anchored.offsetWidth;
      }
    }, {
      key: "shouldCloseMenu",
      value: function shouldCloseMenu(ev) {
        var target = ev.target;
        var insideOdsMenu = target.closest("ods-menu") !== null && this['no-close-on-select'];
        return !insideOdsMenu && this._isOpen;
      }
    }, {
      key: "handleSlotChange",
      value: function handleSlotChange(e) {
        var childNodes = e.target.assignedNodes({
          flatten: true
        });
        var odsMenuItems = childNodes.filter(function (node) {
          return node.localName === 'ods-menu-item';
        });
        // Confirm if preserve avoid render when 2 items or less
        // if(odsMenuItems.length <= 2 && odsMenuItems.length !== 0 )
        // {
        //   this.setInvalidMenu('Must have over two Menu Items');
        // }
        if (odsMenuItems.length === 0) {
          this.setEmptySlots();
        }
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu() {
        if (this._isValid) {
          this.shadowRoot.querySelector('.menu-container').classList.remove('invalid-menu');
        }
        this._isOpen = !this._isOpen;
        this.triggerDispatchEvent(this._isOpen);
        this.setAnchoredWidth();
        this.setMenuPosition();
        this.shadowRoot.querySelector('.menu-container').classList.toggle('hide-menu');
        this.dispatchActiveMenuEvent();
        if (!this._isOpen) this._anchored.focus();
      }
    }, {
      key: "dispatchActiveMenuEvent",
      value: function dispatchActiveMenuEvent() {
        this._anchored.dispatchEvent(new OdsActiveMenuEvent({
          setActiveMenu: this._isOpen
        }));

        //Not a parent / child
        if (this._anchored.setActiveMenu) this._anchored.setActiveMenu(this._isOpen);
      }
    }, {
      key: "closeMenu",
      value: function closeMenu(focusAnchor) {
        if (this._isOpen) {
          //Default is true
          focusAnchor = typeof focusAnchor === 'undefined' ? true : focusAnchor;
          this._isOpen = false;
          this.triggerDispatchEvent(false);
          this.shadowRoot.querySelector('.menu-container').classList.add('hide-menu');
          this.dispatchActiveMenuEvent();
          if (focusAnchor) this._anchored.focus();
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OdsMenu.prototype), "connectedCallback", this).call(this);
        this.initializeMenu();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OdsMenu.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this._handleESCKeyEvent);
        document.removeEventListener('click', this._handleWindowClick);
        window.removeEventListener('resize', this._handleResize);
        this._anchored.removeEventListener('keydown', this._handleKeyAnchorEvents);
        this._anchored.removeEventListener('blur', this._handleAnchoredBlur);
      }
    }, {
      key: "_handleAnchoredBlur",
      value: function _handleAnchoredBlur(event, currentMenu) {
        if (!(currentMenu._allMenuItems.includes(event.relatedTarget) || currentMenu.shadowRoot.host === event.relatedTarget)) {
          currentMenu.closeMenu(false);
        }
      }
    }, {
      key: "_handleESCKeyEvent",
      value: function _handleESCKeyEvent(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
          this.closeMenu();
        }
      }
    }, {
      key: "_handleKeyMenuItemEvents",
      value: function _handleKeyMenuItemEvents(event) {
        if (event.detail.key === "" || event.detail.key === " " || event.detail.key === "Space") {
          event.preventDefault();
          event.detail.menuItem.shadowRoot.querySelector('.menu-item').click();
        }
        this._setKeyEvents(event.detail.key, event.target, event);
      }
    }, {
      key: "_handleKeyAnchorEvents",
      value: function _handleKeyAnchorEvents(event) {
        var _event$detail$key, _event$detail;
        var key = (_event$detail$key = (_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.key) !== null && _event$detail$key !== void 0 ? _event$detail$key : event.key;
        event.stopPropagation();
        switch (key) {
          case 'Up':
          case 'ArrowUp':
          case 'Left':
          case 'ArrowLeft':
            event.preventDefault();
            this._setKeyEvents(key, this._firstMenuItem);
            break;
          case 'ArrowDown':
          case 'Down':
            event.preventDefault();
            if (!this._isOpen) {
              this.toggleMenu();
            }
            this._setKeyEvents(key, this._lastMenuItem);
            break;
          case 'Enter':
            event.preventDefault();
            this.toggleMenu();
            this.setFocusToNextMenuitem(this._lastMenuItem);
            break;
          case 'ArrowRight':
          case 'Right':
            this._setKeyEvents(key, this._lastMenuItem);
            break;
          case 'Esc':
          case 'Escape':
            this.closeMenu();
          case 'Tab':
            this.closeMenu(false);
            break;
          case '':
          case ' ':
          case 'Space':
            event.preventDefault();
            event.target.click();
            this.setFocusToNextMenuitem(this._lastMenuItem);
          default:
            this._setKeyEvents(key, this._currentSelectedItem, event);
            event.preventDefault();
            break;
        }
      }
    }, {
      key: "_setKeyEvents",
      value: function _setKeyEvents(key, menuItem, event) {
        switch (key) {
          case 'Up':
          case 'ArrowUp':
          case 'Left':
          case 'ArrowLeft':
            this.setFocusToPreviousMenuitem(menuItem);
            break;
          case 'ArrowDown':
          case 'Down':
          case 'ArrowRight':
          case 'Right':
            this.setFocusToNextMenuitem(menuItem);
            break;
          case 'Home':
          case 'PageUp':
            this.setFocusToPreviousMenuitem(this._firstMenuItem);
            break;
          case 'End':
          case 'PageDown':
            this.setFocusToNextMenuitem(this._lastMenuItem);
            break;
          case 'Tab':
          case 'Enter':
            break;
          case 'Esc':
          case 'Escape':
            this.closeMenu();
            break;
          default:
            if (this.isPrintableCharacter(key)) {
              this.setFocusByFirstCharacter(menuItem, key, event);
            }
            break;
        }
      }
    }, {
      key: "isPrintableCharacter",
      value: function isPrintableCharacter(str) {
        return str.length === 1 && str.match(/\S/);
      }
    }, {
      key: "setFocusToPreviousMenuitem",
      value: function setFocusToPreviousMenuitem(currentMenuitem) {
        var newMenuitem, index;
        if (currentMenuitem === this._firstMenuItem) {
          newMenuitem = this._lastMenuItem;
        } else {
          index = this._dataMenuItems.indexOf(currentMenuitem);
          newMenuitem = this._dataMenuItems[index - 1];
        }
        this.setFocusToMenuitem(newMenuitem);
        return newMenuitem;
      }
    }, {
      key: "setFocusToNextMenuitem",
      value: function setFocusToNextMenuitem(currentMenuitem) {
        var newMenuitem, index;
        if (currentMenuitem === this._lastMenuItem) {
          newMenuitem = this._firstMenuItem;
        } else {
          index = this._dataMenuItems.indexOf(currentMenuitem);
          newMenuitem = this._dataMenuItems[index + 1];
        }
        this.setFocusToMenuitem(newMenuitem);
        return newMenuitem;
      }
    }, {
      key: "setFocusByFirstCharacter",
      value: function setFocusByFirstCharacter(currentMenuitem, _char, event) {
        var start, index;
        var isSelect = this._componentIsSelect(event);
        _char = _char.toLowerCase();
        // Get start index for search based on position of currentItem
        start = this._dataMenuItems.indexOf(currentMenuitem) + 1;
        if (start >= this._dataMenuItems.length) {
          start = 0;
        }

        // Check remaining slots in the menu
        index = this.getIndexFirstChars(start, _char);

        // If not found in remaining slots, check from beginning
        if (index === -1) {
          index = this.getIndexFirstChars(0, _char);
        }
        // If match was found...
        if (index > -1) {
          var newMenuitem = this.setFocusToMenuitem(this._dataMenuItems[index]);
          if (isSelect && !this._isOpen) {
            this._currentSelectedItem = newMenuitem;
            this._handleSelectByChar(newMenuitem);
          }
        }
      }
    }, {
      key: "_componentIsSelect",
      value: function _componentIsSelect(event) {
        return event.target.classList && event.target.classList.contains('ods-input-select');
      }
    }, {
      key: "_handleSelectByChar",
      value: function _handleSelectByChar(menuItem) {
        menuItem.shadowRoot.querySelector('.menu-item').click();
      }
    }, {
      key: "getIndexFirstChars",
      value: function getIndexFirstChars(startIndex, _char2) {
        for (var i = startIndex; i < this._firstChars.length; i++) {
          if (_char2 === this._firstChars[i]) {
            return i;
          }
        }
        return -1;
      }
    }, {
      key: "setFocusToMenuitem",
      value: function setFocusToMenuitem(newMenuitem) {
        this._dataMenuItems.forEach(function (item) {
          if (item === newMenuitem) {
            item.shadowRoot.querySelector('.menu-item').tabIndex = 0;
            newMenuitem.focus();
          } else {
            item.shadowRoot.querySelector('.menu-item').tabIndex = -1;
          }
        });
        return newMenuitem;
      }
    }, {
      key: "setInvalidMenu",
      value: function setInvalidMenu(message) {
        console.warn('Invalid Ods Menu: ' + message);
        this._isValid = false;
        var menuContainer = this.shadowRoot.querySelector('.menu-container');
        if (menuContainer) menuContainer.classList.add('invalid-menu');
      }
    }, {
      key: "setChildGridStyle",
      value: function setChildGridStyle(child, position) {
        var start, startSpace, startSize, end, endSize, endSpace;
        start = startSpace = startSize = end = endSize = endSpace = '';
        switch (position) {
          case 'start':
            start = 'start';
            startSize = '24px';
            startSpace = '.';
            break;
          case 'end':
            end = 'end';
            endSize = '24px';
            endSpace = '.';
            break;
        }
        child._iconPosition = position;
        child._gridStyle = "\n    grid-template-columns: ".concat(!this.selectable ? "\n    ".concat(startSize, " auto ").concat(endSize, ";") : "\n    24px ".concat(startSize, " auto ").concat(endSize, ";"), "\n    grid-template-areas:\n    ").concat(!this.selectable ? "\n    '".concat(start, " text ").concat(end, "'\n    '").concat(startSpace, " subtext ").concat(endSpace, "';") : "\n    'check  ".concat(start, "   text    ").concat(end, "'\n    '").concat(startSpace, "      subtext subtext ").concat(endSpace, "';"));
      }

      //Lets delegate focus
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: true
        });
      }
    }, {
      key: "getSelectedMenuItems",
      value: function getSelectedMenuItems() {
        return this._dataMenuItems.filter(function (item) {
          return item.selected;
        });
      }
    }, {
      key: "_handleSingleClick",
      value: function _handleSingleClick(e) {
        var currentMenuItem = e.detail.menuItem;
        this.getSelectedMenuItems().forEach(function (menuItem) {
          if (menuItem !== currentMenuItem) menuItem.selected = false;
        });
      }
    }, {
      key: "_handleItemSlotChanges",
      value: function _handleItemSlotChanges(e) {
        this.processSlots();
      }
    }, {
      key: "selectClear",
      value: function selectClear() {
        this.getSelectedMenuItems().forEach(function (menuItem) {
          menuItem.selected = false;
        });
      }
    }, {
      key: "render",
      value: function render() {
        var height = this['max-height'] && this['max-height'] !== '' ? this['max-height'] : this._defaultHeight;
        return x(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral([" \n    <style>\n    *, :host{\n      --ods-background-primary:         #FFF;\n      --ods-border-decorative-primary:  #C5C5C5;\n      --ods-sem-text-primary:           #1B1B1B;\n      --ods-sem-space-none:             0;\n      --ods-sem-space-xsmall:           4px;\n      --ods-sem-space-small:            8px;\n      --ods-sem-space-medium:           16px;\n      --ods-sem-space-large:            24px;\n      --ods-border-radius-xsmall:       4px;\n      --ods-shadow-small-x:             0px;\n      --ods-shadow-small-y:             2px;\n      --ods-shadow-small-blur:          4px;\n      --ods-shadow-small-spread:        0px;\n      --ods-shadow-small-color:         rgba(59, 59, 59, 0.25);\n      --ods-sem-text-tertiary:          #5E5E5E;\n      font-size: 14px;\n    }\n    :host{\n      position: absolute;\n      /* Shadow/Small */\n      box-shadow: var(--ods-shadow-small-x) var(--ods-shadow-small-y) var(--ods-shadow-small-blur) var(--ods-shadow-small-spread) var(--ods-shadow-small-color);\n      border-radius: var(--ods-border-radius-xsmall);\n      outline: 0;\n      z-index: 998;\n    }\n    .menu-container{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--ods-sem-space-none);\n      align-self: stretch;\n      font-family: lato;\n      background: var(--ods-background-primary);\n      ", "\n      ", "\n      ", "\n      min-height: min-content;\n      max-height: ", ";\n      overflow-x: clip;\n      text-wrap: wrap;\n      word-wrap: break-word;\n      overflow-y: auto;\n      position: relative;\n      border-radius: var(--ods-border-radius-xsmall);\n      outline: 0;\n     \n    }\n      nav{\n      outline: 0;\n      }\n    \n    ::slotted(ods-menu-divider){\n      padding: var(--ods-sem-space-none) var(--ods-sem-space-medium) !important;\n      gap: var(--ods-sem-space-none);\n      align-self: stretch;\n      font-size: 14px;\n    }\n\n    ::slotted(ods-menu-divider){\n      padding: var(--ods-sem-space-none) var(--ods-sem-space-medium) !important;\n      gap: var(--ods-sem-space-none);\n      align-self: stretch;\n      font-size: 14px;\n    }\n\n    .check-container, .icon-container{\n      width: 24px;\n      height: 24px;\n    }\n\n    .hide-menu, .invalid-menu{\n      display: none;\n    }\n\n    .no-items{\n      display: flex;\n      padding: var(--Space-Small, 8px) var(--Space-Medium, 16px) !important;\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--Space-None, 0px);\n      flex-shrink: 0;\n      font-size: 14px;\n      line-height: 22px;\n      color: var(--ods-sem-text-tertiary);\n    }\n    .menu-container::-webkit-scrollbar {\n      width: 10px;\n    }\n    \n    .menu-container::-webkit-scrollbar-track {\n      background-color: #FFFFFF;\n      border-radius: 100px;\n    }\n    \n    .menu-container::-webkit-scrollbar-thumb {\n      background-color: #c5c5c5;\n      border-radius: 100px;\n      height:30px;\n    }\n      ul{\n      padding: 0; margin:0;}\n    </style>\n    <nav>\n    <ul tabindex=\"0\" class='menu-container hide-menu' part='ods-menu' \n      @menu-item-single-event=", " \n      @menu-item-slot-change-event=", " \n      @menu-item-key-event=", ">\n      <slot @slotchange=\"", "\"></slot>    \n    </ul>\n    </nav>\n    "])), !this['match-width'] ? "width: ".concat(this['max-width'], "; max-width: ").concat(this['max-width'], ";") : '', this['match-width'] ? "width: ".concat(this._anchoredWidth, "px;") : '', this._isMobile ? "width: ".concat(this._anchoredWidth, "px; max-width: unset;") : '', height, this._handleSingleClick, this._handleItemSlotChanges, this._handleKeyMenuItemEvents, this.handleSlotChange);
      }
    }]);
  }(s$2);
  _defineProperty(OdsMenu, "properties", (_defineProperty2 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty2, 'match-width', {
    type: Boolean
  }), 'max-height', {
    type: String
  }), 'max-width', {
    type: String
  }), "anchor", {
    type: String
  }), 'no-close-on-select', {
    type: Boolean
  }), "selectable", {
    type: Boolean
  }), "elRef", {
    type: Object
  }), 'no-items-label', {
    type: String
  }), "_anchoredWidth", {
    state: true
  }), "_isMobile", {
    state: true
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty2, "_isOpen", {
    state: true
  }), "_anchored", {
    state: true
  }), "_isValid", {
    state: true
  }), 'single-select', {
    type: Boolean
  }), "_currentSelectedItem", {
    state: true
  })));
  customElements.define("ods-menu", OdsMenu);

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var f$1 = function f(o) {
      return void 0 === o.strings;
    };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t = {
      ATTRIBUTE: 1,
      CHILD: 2,
      PROPERTY: 3,
      BOOLEAN_ATTRIBUTE: 4,
      EVENT: 5,
      ELEMENT: 6
    },
    e$1 = function e(t) {
      return function () {
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }
        return {
          _$litDirective$: t,
          values: e
        };
      };
    };
  var i = /*#__PURE__*/function () {
    function i(t) {
      _classCallCheck(this, i);
    }
    return _createClass(i, [{
      key: "_$AU",
      get: function get() {
        return this._$AM._$AU;
      }
    }, {
      key: "_$AT",
      value: function _$AT(t, e, _i) {
        this._$Ct = t, this._$AM = e, this._$Ci = _i;
      }
    }, {
      key: "_$AS",
      value: function _$AS(t, e) {
        return this.update(t, e);
      }
    }, {
      key: "update",
      value: function update(t, e) {
        return this.render.apply(this, _toConsumableArray(e));
      }
    }]);
  }();

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var s = function s(i, t) {
      var e = i._$AN;
      if (void 0 === e) return !1;
      var _iterator = _createForOfIteratorHelper(e),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _i$_$AO;
          var _i = _step.value;
          (_i$_$AO = _i._$AO) !== null && _i$_$AO !== void 0 && _i$_$AO.call(_i, t, !1), s(_i, t);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return !0;
    },
    o$1 = function o(i) {
      var t, e;
      do {
        var _e;
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e["delete"](i), i = t;
      } while (0 === ((_e = e) === null || _e === void 0 ? void 0 : _e.size));
    },
    r = function r(i) {
      for (var _t; _t = i._$AM; i = _t) {
        var _e2 = _t._$AN;
        if (void 0 === _e2) _t._$AN = _e2 = new Set();else if (_e2.has(i)) break;
        _e2.add(i), c(_t);
      }
    };
  function h$1(i) {
    void 0 !== this._$AN ? (o$1(this), this._$AM = i, r(this)) : this._$AM = i;
  }
  function n$1(i) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var r = this._$AH,
      h = this._$AN;
    if (void 0 !== h && 0 !== h.size) if (t) {
      if (Array.isArray(r)) for (var _i2 = e; _i2 < r.length; _i2++) s(r[_i2], !1), o$1(r[_i2]);else null != r && (s(r, !1), o$1(r));
    } else s(this, i);
  }
  var c = function c(i) {
    var _i$_$AP, _i$_$AQ;
    i.type == t.CHILD && ((_i$_$AP = i._$AP) !== null && _i$_$AP !== void 0 ? _i$_$AP : i._$AP = n$1, (_i$_$AQ = i._$AQ) !== null && _i$_$AQ !== void 0 ? _i$_$AQ : i._$AQ = h$1);
  };
  var f = /*#__PURE__*/function (_t2) {
    function f() {
      var _this;
      _classCallCheck(this, f);
      _this = _callSuper(this, f, arguments), _this._$AN = void 0;
      return _this;
    }
    _inherits(f, _t2);
    return _createClass(f, [{
      key: "_$AT",
      value: function _$AT(i, t, e) {
        _get(_getPrototypeOf(f.prototype), "_$AT", this).call(this, i, t, e), r(this), this.isConnected = i._$AU;
      }
    }, {
      key: "_$AO",
      value: function _$AO(i) {
        var _this$reconnected, _this$disconnected;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        i !== this.isConnected && (this.isConnected = i, i ? (_this$reconnected = this.reconnected) === null || _this$reconnected === void 0 ? void 0 : _this$reconnected.call(this) : (_this$disconnected = this.disconnected) === null || _this$disconnected === void 0 ? void 0 : _this$disconnected.call(this)), t && (s(this, i), o$1(this));
      }
    }, {
      key: "setValue",
      value: function setValue(t) {
        if (f$1(this._$Ct)) this._$Ct._$AI(t, this);else {
          var _i3 = _toConsumableArray(this._$Ct._$AH);
          _i3[this._$Ci] = t, this._$Ct._$AI(_i3, this, 0);
        }
      }
    }, {
      key: "disconnected",
      value: function disconnected() {}
    }, {
      key: "reconnected",
      value: function reconnected() {}
    }]);
  }(i);

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var e = function e() {
    return new h();
  };
  var h = /*#__PURE__*/_createClass(function h() {
    _classCallCheck(this, h);
  });
  var o = new WeakMap(),
    n = e$1( /*#__PURE__*/function (_i) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _i);
      return _createClass(_class, [{
        key: "render",
        value: function render(i) {
          return T;
        }
      }, {
        key: "update",
        value: function update(i, _ref) {
          var _i$options;
          var _ref2 = _slicedToArray(_ref, 1),
            s = _ref2[0];
          var e = s !== this.Y;
          return e && void 0 !== this.Y && this.rt(void 0), (e || this.lt !== this.ct) && (this.Y = s, this.ht = (_i$options = i.options) === null || _i$options === void 0 ? void 0 : _i$options.host, this.rt(this.ct = i.element)), T;
        }
      }, {
        key: "rt",
        value: function rt(t) {
          if (this.isConnected || (t = void 0), "function" == typeof this.Y) {
            var _this$ht;
            var _i2 = (_this$ht = this.ht) !== null && _this$ht !== void 0 ? _this$ht : globalThis;
            var _s = o.get(_i2);
            void 0 === _s && (_s = new WeakMap(), o.set(_i2, _s)), void 0 !== _s.get(this.Y) && this.Y.call(this.ht, void 0), _s.set(this.Y, t), void 0 !== t && this.Y.call(this.ht, t);
          } else this.Y.value = t;
        }
      }, {
        key: "lt",
        get: function get() {
          var _o$get, _this$ht2, _this$Y;
          return "function" == typeof this.Y ? (_o$get = o.get((_this$ht2 = this.ht) !== null && _this$ht2 !== void 0 ? _this$ht2 : globalThis)) === null || _o$get === void 0 ? void 0 : _o$get.get(this.Y) : (_this$Y = this.Y) === null || _this$Y === void 0 ? void 0 : _this$Y.value;
        }
      }, {
        key: "disconnected",
        value: function disconnected() {
          this.lt === this.ct && this.rt(void 0);
        }
      }, {
        key: "reconnected",
        value: function reconnected() {
          this.rt(this.ct);
        }
      }]);
    }(f));

  var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8, _templateObject9, _templateObject10;
  var OdsSelectField = /*#__PURE__*/function (_LitElement) {
    function OdsSelectField() {
      var _this;
      _classCallCheck(this, OdsSelectField);
      _this = _callSuper(this, OdsSelectField);
      _defineProperty(_this, "inputRef", e());
      _this.width = "280px";
      _this.error = "";
      _this.tooltip = "";
      _this.value = "";
      _this.isOpened = false;
      _this.count = 0;
      _this._menu = null;
      _this.labelDefault = 16;
      _this.placeholder = "Select";
      _this.isDisabled = false;
      _this._preventSpaceDefaultKey = _this._preventSpaceDefaultKey.bind(_this);
      _this.handleOutSideClick = null;
      _this.eventName = "ods-on-select";
      return _this;
    }
    _inherits(OdsSelectField, _LitElement);
    return _createClass(OdsSelectField, [{
      key: "handleSelectClick",
      value: function handleSelectClick(e) {
        this.isOpened = e.detail.value;
        if (!this.isOpened) {
          this._menu = this.getDropdownMenu(this.options);
        }
      }
    }, {
      key: "_preventSpaceDefaultKey",
      value: function _preventSpaceDefaultKey(event) {
        if (event.key === ' ' || event.key === '' || event.key === 'Space') event.preventDefault();
      }
    }, {
      key: "getInputField",
      value: function getInputField() {
        var isRequired = this.required == "true" ? true : false;
        var isOptional = this.optional == "true" ? true : false;
        if (isRequired) {
          isOptional = false;
        }
        var errorAlert = false;
        if (this.error != "") {
          errorAlert = true;
        }
        return x(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n      <input\n        readonly\n        tabindex=\"2\"\n        type=\"", "\"\n        class=", "\n        id=\"", "\"\n        name=\"", "\"\n        placeholder=\"", "\"\n        error=\"", "\"\n        aria-describedby=\"", "\"\n        .value=\"", "\"\n        aria-disabled=\"", "\"\n        ?required=\"", "\"\n        ?optional=\"", "\"\n        aria-invalid=\"", "\"\n        anchor=\"", "\"\n        ", "\n        @ods-active-menu-event=", "\n      />\n    "])), this.type, ["ods-form-control", "ods-input-select"].join(" "), this.name, this.name, this.placeholder, this.error, this.name, this.value, this.isDisabled, isRequired, isOptional, errorAlert, this.name, n(this.inputRef), this._handleSetActiveMenu);
      }
    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(e) {
        if (this.isOpened) {
          var filetredOptions = [];
          var searchedInput = e.key;
          var filter = searchedInput.toLowerCase();
          var options = this.options;
          for (var i = 0; i < options.length; i++) {
            var optionText = options[i].text;
            var isAvailable = optionText.replace(" ", "").search(RegExp("\\b" + filter, "i"));
            if (isAvailable >= 0) {
              filetredOptions.push(options[i]);
            }
          }
        }
      }
    }, {
      key: "getErrorMessage",
      value: function getErrorMessage() {
        if (this.error && this.error != "" && !this.isOpened) {
          return x(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        <div class=\"ods-error-container\">\n          <ods-icon\n            size=\"SM\"\n            name=\"error\"\n            color=\"#AB2D25\"\n            aria-describedby=\"tooltip\"\n          ></ods-icon>\n          <ods-text html-tag=\"span\" size=\"sm\" weight=\"regular\" color=\"#AB2D25\">\n            ", "\n          </ods-text>\n        </div>\n      "])), this.error);
        }
        return "";
      }
    }, {
      key: "getInfoIcon",
      value: function getInfoIcon() {
        if (this.tooltip != "") {
          return x(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n        <div class=\"ods-button\">\n          <button tabindex=\"1\" class=\"btn-ghost\" aria-describedby=\"tooltip\">\n            <ods-icon size=\"SM\" name=\"info\" color=\"\"> </ods-icon>\n          </button>\n          <ods-tooltip id=\"tooltip\" label=\"", "\"></ods-tooltip>\n        </div>\n      "])), this.tooltip);
        }
      }
    }, {
      key: "getLabelField",
      value: function getLabelField() {
        if (this.label != "") {
          return x(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n        <div class=\"ods-label-container\">\n          <ods-text\n            html-tag=\"span\"\n            size=\"sm\"\n            weight=\"regular\"\n            color=\"text-primary\"\n          >\n            <label for=\"", "\"> ", "</label>\n          </ods-text>\n          ", "\n        </div>\n      "])), this.name, this.getLabelText(), this.getInfoIcon());
        }
        return "";
      }
    }, {
      key: "getLabelText",
      value: function getLabelText() {
        var labelText = this.label;
        if (this.required == "true") {
          labelText = x(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["", "<ods-text\n          class=\"left-spacing\"\n          html-tag=\"span\"\n          size=\"sm\"\n          weight=\"regular\"\n          color=\"text-primary\"\n        >\n          (required)\n        </ods-text>"])), labelText);
        }
        if (this.required != "true" && this.optional == "true") {
          labelText = x(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["", "<ods-text\n          class=\"left-spacing\"\n          html-tag=\"span\"\n          size=\"sm\"\n          weight=\"regular\"\n          color=\"text-primary\"\n          >(optional)</ods-text\n        >"])), labelText);
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
      key: "handleItemClick",
      value: function handleItemClick(e) {
        var value = JSON.parse(e.detail.value);
        this.shadowRoot.getElementById("".concat(this.name)).value = value.text;
        this.isOpened = false;
        this.value = value.text;
        var event = new CustomEvent(this.eventName, {
          detail: value,
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
      }
    }, {
      key: "getSelectedOption",
      value: function getSelectedOption(option) {
        if (this.value == option.value) {
          return x(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["\n        <ods-icon slot=\"start\" size=\"sm\" name=\"placeholder\" color=\"\">\n        </ods-icon>\n      "])));
        }
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        var _this2 = this;
        var items = "";
        if (this.options && this.options.length > 0) {
          items = this.options.map(function (option) {
            return x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          <ods-menu-item\n            value=\"", "\"\n            @menu-item-click-event=\"", "\"\n          >\n            <ods-text size=\"sm\" color=\"text-primary\" slot=\"label\"\n              >", "</ods-text\n            >\n          </ods-menu-item>\n        "])), JSON.stringify(option), _this2.handleItemClick, option.text);
          });
          return items;
        }
      }
    }, {
      key: "getDropdownMenu",
      value: function getDropdownMenu() {
        return x(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<ods-menu\n      @menu-toggle-event=\"", "\"\n      max-width=\"184px\"\n      max-height=\"266px\"\n      match-width=\"true\"\n      anchor=\"buttonWithStart\"\n      selectable=\"true\"\n      .elRef=", "\n      single-select\n    >\n      ", "\n    </ods-menu>"])), this.handleSelectClick, this.inputRef.value, this.getOptions());
      }
    }, {
      key: "updateIconPosition",
      value: function updateIconPosition() {
        var icon = this.shadowRoot.querySelector(".ods-chevron-container");
        var elmHeight = this.shadowRoot.querySelector(".ods-label-container");
        if (!elmHeight) {
          icon.style.top = "8px";
        } else {
          icon.style.top = "".concat(elmHeight.offsetHeight + 12, "px");
        }
      }
    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        this._menu = this.getDropdownMenu(this.options);
        this.addEventListener('keydown', this._preventSpaceDefaultKey);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('keydown', this._preventSpaceDefaultKey);
      }
    }, {
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(OdsSelectField.prototype), "updated", this).call(this);
        var previousLabel = changedProperties.get("label");
        if (previousLabel != undefined) {
          this.updateIconPosition();
        }
        var previousWidth = changedProperties.get("full-width");
        if (previousWidth != undefined) {
          this.updateIconPosition();
        }
        var previousError = changedProperties.get("error");
        if (previousError != undefined) {
          this.updateIconPosition();
        }
      }
    }, {
      key: "_handleSetActiveMenu",
      value: function _handleSetActiveMenu(event) {
        event.target.toggleAttribute('active-menu', event.detail.setActiveMenu);
      }
    }, {
      key: "render",
      value: function render() {
        console.log("Typeof passed function is", _typeof(this.customFunction));
        this.handleWidth();
        var isReadOnly = this.isDisabled == "true" ? "readonly" : "";
        var isError = this.error != "" ? "error-state" : "";
        if (this.isDisabled == "true") {
          isError = "";
          this.error = "";
        }
        var iconPosition = "rotateZ(-0deg)";
        if (this.isOpened) {
          iconPosition = "rotateZ(-180deg)";
        }
        return x(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      <style>\n        :host{\n            ", "\n            position: relative;\n          }\n          * {\n            box-sizng: border-box;\n            margin: 0;\n            padding: 0;\n            --ods-utility-states-primary-hover: rgba(143, 218, 131, 0.4);\n            --ods-utility-states-primary-pressed: rgba(143, 218, 131, 0.64);\n            --ods-ref-color-green-100: #ffffff;\n            --ods-ref-color-green-40: #298319;\n            --ods-ref-color-gray-35: #515151;\n          }\n          .ods-form-label {\n            margin-bottom: 0.5ods-form-labelrem;\n            font-family: lato;\n            font-weight: 400;\n            font-size: 14px;\n            line-height: 24px;\n            margin: 0;\n            color: #1b1b1b;\n          }\n          .ods-form-control {\n            display: block;\n            padding: var(--ods-input-padding, 6px 16px);\n            font-size: var(--ods-input-font-size, 16px);\n            font-family: lato, Helvetica, Arial, sans-serif;\n            font-weight: var(--ods-input-font-weight, 400);\n            line-height: var(--ods-input-line-height, 32px);\n            color: var(--ods-input-color, #1b1b1b);\n            background-color: var(--ods-input-background-color, #fff);\n            background-clip: padding-box;\n            box-shadow: 0 0 0 1px rgba(118, 118, 118, 1);\n            border-width: 0;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            border-radius: var(--ods-text-field-border-radius, 4px);\n            cursor:pointer;\n          }\n          @media (prefers-reduced-motion: reduce) {\n            .ods-form-control {\n              transition: none;\n            }\n          }\n          .ods-form-control::-moz-placeholder {\n            color: #5e5e5e;\n            opacity: 1;\n          }\n          .ods-form-control::placeholder {\n            color: #5e5e5e;\n            opacity: 1;\n          }\n          .ods-select-field-container {\n            width: ", ";\n          }\n          .ods-field-container {\n            width: ", ";\n            display: flex;\n            /*position: relative;*/\n            flex-direction: column-reverse;\n            gap: var(--ods-content-gap, 4px);\n            box-sizing: border-box;\n          }\n          .ods-label-container {\n            display: flex;\n            align-items: flex-start;\n            gap: 4px;\n          }\n          .ods-label-container ods-icon-button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            --ods-icon-button-height: 24px;\n            --ods-icon-button-width: 24px;\n          }\n          .ods-button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            --ods-icon-button-height: 24px;\n            --ods-icon-button-width: 24px;\n          }\n          ods-icon-button ods-icon::part(odsIcon) {\n            width: 16px;\n            height: 16px;\n          }\n          .ods-error-container {\n            width: ", ";\n            display: flex;\n            justify-content: flex-start;\n            gap: 8px;\n          }\n          .ods-error-container ods-icon {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 16px;\n            width: 16px;\n            padding: 4px 0px;\n          }\n\n          .ods-field-container {\n            input {\n              &:hover {\n                border-width: 0;\n                box-shadow: 0 0 0 1px rgba(31, 100, 19, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #1f6413;\n                }\n                ~ .ods-label-container label {\n                  cursor: pointer;\n                }\n              }\n              &:focus, &[active-menu] {\n                color: #1b1b1b;\n                background-color: #fff;\n                box-shadow: 0 0 0 2px rgba(31, 100, 19, 1);\n                border-width: 0;\n                outline: 0;\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #1f6413;\n                }\n              }\n              &:active {\n                box-shadow: 0 0 0 1px rgba(18, 58, 11, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #123a0b;\n                }\n              }\n            }\n            &.readonly {\n              opacity: 0.5;\n              cursor: not-allowed;\n              input {\n                pointer-events: none;\n                color: #515151;\n                background-color: #c5c5c5;\n                background-clip: padding-box;\n                box-shadow: 0 0 0 1px rgba(81, 81, 81, 1);\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n              }\n              .ods-label-container ods-text::part(odsText) {\n                pointer-events: none;\n              }\n              .ods-button {\n                pointer-events: none;\n              }\n            }\n            &.error-state {\n              input {\n                box-shadow: 0 0 0 1px rgba(171, 45, 37, 1);\n                border-width: 0;\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #ab2d25;\n                }\n                &:hover {\n                  box-shadow: 0 0 0 1px rgba(130, 34, 28, 1);\n                  ~ .ods-label-container ods-text::part(odsText) {\n                    color: #82221c;\n                  }\n                }\n                &:focus {\n                  border-color: #ab2d25;\n                  box-shadow: 0 0 0 2px rgba(171, 45, 37, 1);\n                  ~ .ods-label-container ods-text::part(odsText) {\n                    color: #ab2d25;\n                  }\n                }\n                &:active {\n                  box-shadow: 0 0 0 1px rgba(75, 20, 16, 1);\n                  ~ .ods-label-container ods-text::part(odsText) {\n                    color: #4b1410;\n                  }\n                }\n              }\n            }\n          }\n          ods-text::part(odsText) {\n            line-height: 24px;\n            word-break: break-word;\n          }\n          ods-text.left-spacing {\n            margin-left: 4px;\n          }\n          ods-text {\n            display: inline-block;\n          }\n          button {\n            border-radius: 9999px;\n            height: var(--ods-icon-button-height, 44px);\n            width: var(--ods-icon-button-width, 44px);\n            text-decoration: none;\n            border: var(--ods-sem-space-none);\n            cursor: pointer;\n            justify-content: center;\n            box-sizing: border-box;\n            display: inline-flex;\n            align-items: center;\n            padding: 0;\n          }\n          .btn-ghost {\n            color: var(--ods-ref-color-green-40);\n            background: transparent;\n          }\n          .btn-ghost:hover {\n            background: var(--ods-utility-states-primary-hover);\n          }\n          .btn-ghost:focus {\n            outline: none;\n            box-shadow: 0 0 0 0.125rem var(--ods-ref-color-green-40);\n          }\n          .btn-ghost:active {\n            background: var(--ods-utility-states-primary-pressed);\n            box-shadow: none;\n          }\n          .ods-chevron-container {\n            position: absolute;\n            right: 16px;\n            bottom: 4px;\n            transform: ", ";\n            transition: transform 0.2s ease-in-out;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 16px;\n            width: 16px;\n            padding: 8px 0px;\n            pointer-events: none;\n          }\n      </style>\n      <div class=", ">\n        ", "", " ", "\n        <ods-icon\n          class=\"ods-chevron-container\"\n          size=\"SM\"\n          name=\"chevron-down\"\n          color=\"\"\n        ></ods-icon>\n      </div>\n      ", "\n    "])), this["full-width"] === "false" ? "display: inline-flex;" : "", this.width, this.width, this.width, iconPosition, ["ods-field-container", isReadOnly, isError].join(" "), this.getErrorMessage(), this.getInputField(), this.getLabelField(), this._menu);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          isDisabled: {
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
          },
          isOpened: {
            type: Boolean
          },
          _menu: {
            state: true
          },
          options: {
            type: Array
          },
          filteredOptions: {
            state: true
          },
          eventName: {
            type: String
          },
          customFunction: {
            type: Function
          }
        };
      }
    }]);
  }(s$2);
  customElements.define("ods-select-field", OdsSelectField);

  var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1;
  var ODSTextArea = /*#__PURE__*/function (_LitElement) {
    function ODSTextArea() {
      var _this;
      _classCallCheck(this, ODSTextArea);
      _this = _callSuper(this, ODSTextArea);
      _this.height = "128px";
      _this.width = "280px";
      _this.error = "";
      _this.tooltip = "";
      _this.value = '';
      return _this;
    }
    _inherits(ODSTextArea, _LitElement);
    return _createClass(ODSTextArea, [{
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this2 = this;
        this.handleWidth();
        var eleId = this.shadowRoot.getElementById('input');
        var observer = new ResizeObserver(function (data) {
          var _iterator = _createForOfIteratorHelper(data),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              var width = "".concat(item.contentRect.width + item.contentRect.x * 2, "px");
              _this2.width = width;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        observer.observe(eleId);
      }
    }, {
      key: "getInputField",
      value: function getInputField() {
        var isRequired = this.required == "true" ? true : false;
        var isOptional = this.optional == "true" ? true : false;
        if (isRequired) {
          isOptional = false;
        }
        var errorAlert = false;
        if (this.error != '') {
          errorAlert = true;
        }
        return x(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n    <textarea\n    tabindex=\"2\"\n    class=", "\n    id=\"", "\"\n    name=\"", "\"\n    resize=\"", "\"\n    placeholder=\"", "\"\n    error=\"", "\"\n    aria-describedby=\"", "\"\n    aria-disabled=\"", "\"\n    .value=\"", "\"\n    ?required=\"", "\"\n    ?optional=\"", "\"\n    aria-invalid=\"", "\"\n    @resize=\"", "\"\n    \n    \n  ></textarea>\n    "])), ["ods-form-control"].join(" "), this.name, this.name, this.resize, this.placeholder, this.error, this.name, this.disabled, this.value, isRequired, isOptional, errorAlert, this.handletextsize);
      }
    }, {
      key: "getErrorMessage",
      value: function getErrorMessage() {
        if (this.error && this.error != "") {
          return x(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n        <div class=\"ods-error-container\">\n          <ods-icon\n            size=\"SM\"\n            name=\"error\"\n            color=\"#AB2D25\"\n            aria-describedby=\"tooltip\"\n          ></ods-icon>\n          <ods-text html-tag=\"span\" size=\"sm\" weight=\"regular\" color=\"#AB2D25\">\n            ", "\n          </ods-text>\n        </div>\n      "])), this.error);
        }
        return "";
      }
    }, {
      key: "getInfoIcon",
      value: function getInfoIcon() {
        if (this.tooltip != "") {
          return x(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n      <div class=\"ods-button\">\n      <button tabindex=\"1\" class=\"btn-ghost\" aria-describedby=\"tooltip\">\n        <ods-icon size=\"SM\" name=\"info\" color=\"\"> </ods-icon>\n      </button>\n      <ods-tooltip id=\"tooltip\" label=\"", "\"></ods-tooltip>\n    </div>\n      "])), this.tooltip);
        }
      }
    }, {
      key: "getLabelField",
      value: function getLabelField() {
        if (this.label != "") {
          return x(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n        <div class=\"ods-label-container\">\n          <ods-text\n            html-tag=\"span\"\n            size=\"sm\"\n            weight=\"regular\"\n            color=\"text-primary\"\n          >\n          <label for=\"", "\"> ", "</label>\n          </ods-text>\n          ", "\n        </div>\n      "])), this.name, this.getLabelText(), this.getInfoIcon());
        }
        return "";
      }
    }, {
      key: "getLabelText",
      value: function getLabelText() {
        var labelText = this.label;
        if (this.required == "true") {
          labelText = x(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["", "<ods-text\n            class=\"left-spacing\"\n            html-tag=\"span\"\n            size=\"sm\"\n            weight=\"regular\"\n            color=\"text-primary\"\n          >\n            (required)\n          </ods-text>"])), labelText);
        }
        if (this.required != "true" && this.optional == "true") {
          labelText = x(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["", "<ods-text\n            class=\"left-spacing\"\n            html-tag=\"span\"\n            size=\"sm\"\n            weight=\"regular\"\n            color=\"text-primary\"\n          >(optional)</ods-text>"])), labelText);
        }
        return labelText;
      }
    }, {
      key: "handleWidth",
      value: function handleWidth() {
        this.shadowRoot.querySelector('textarea').style = "";
        if (this["full-width"] == "true") {
          this.width = "100%";
        } else {
          this.width = "280px";
        }
      }
    }, {
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(ODSTextArea.prototype), "updated", this).call(this);
        var previousFullWidth = changedProperties.get('full-width');
        if (previousFullWidth !== this['full-width'] && typeof previousFullWidth !== 'undefined') {
          this.handleWidth();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var isReadOnly = this.disabled == "true" ? "readonly" : "";
        var isError = this.error != "" ? "error-state" : "";
        if (this.disabled == "true") {
          isError = "";
          this.error = "";
        }
        return x(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\n    <style>\n        * {\n          box-sizng: border-box;\n          margin: 0;\n          padding: 0;\n          --ods-utility-states-primary-hover: rgba(143, 218, 131, 0.4);\n          --ods-utility-states-primary-pressed: rgba(143, 218, 131, 0.64);\n          --ods-ref-color-green-100: #ffffff;\n          --ods-ref-color-green-40: #298319;\n          --ods-ref-color-gray-35: #515151;\n        }\n        .ods-form-label {\n          margin-bottom: 0.5ods-form-labelrem;\n          font-family: lato;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n          margin: 0;\n          color: #1b1b1b;\n        }\n        .ods-form-control {\n          display: block;\n          resize: ", ";\n          height: var(--ods-height, 156px);\n          padding: var(--ods-textarea-padding, 10px 16px);\n          font-size: var(--ods-textarea-font-size, 16px);\n          font-family: lato, Helvetica, Arial, sans-serif;\n          font-weight: var(--ods-textarea-font-weight, 400);\n          line-height: var(--ods-textarea-line-height, 24px);\n          color: var(--ods-textarea-color, #1b1b1b);\n          background-color: var(--ods-textarea-background-color, #fff);\n          background-clip: padding-box;\n          box-shadow: 0 0 0 1px rgba(118, 118, 118, 1);\n          border-width: 0;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          border-radius: var(--ods-text-field-border-radius, 4px);\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .ods-form-control {\n            transition: none;\n          }\n        }\n        .ods-form-control::-moz-placeholder {\n          color: #5e5e5e;\n          opacity: 1;\n        }\n        .ods-form-control::placeholder {\n          color: #5e5e5e;\n          opacity: 1;\n        }\n        .ods-field-container {\n          width: ", ";\n          display: flex;\n          position: relative;\n          flex-direction: column-reverse;\n          gap: var(--ods-content-gap, 4px);\n          box-sizing: border-box;\n        }\n        .ods-label-container {\n          display: flex;\n          align-items: flex-start;\n          gap: 4px;\n        }\n        .ods-label-container ods-icon-button {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          --ods-icon-button-height: 24px;\n          --ods-icon-button-width: 24px;\n        }\n        .ods-button {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          --ods-icon-button-height: 24px;\n          --ods-icon-button-width: 24px;\n        }\n        ods-icon-button ods-icon::part(odsIcon) {\n          width: 16px;\n          height: 16px;\n        }\n        .ods-error-container {\n          margin-top: 2px;\n          width: ", ";\n          display: flex;\n          justify-content: flex-start;\n          gap: 8px;\n        }\n        .ods-error-container ods-icon {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 16px;\n          width: 16px;\n          padding: 4px 0px;\n        }\n\n        .ods-field-container {\n          textarea {\n            &:hover {\n              border-width: 0;\n              box-shadow: 0 0 0 1px rgba(31, 100, 19, 1);\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #1f6413;\n              }\n              ~ .ods-label-container label {\n                cursor: pointer;\n              }\n            }\n            &:focus {\n              color: #1b1b1b;\n              background-color: #fff;\n              box-shadow: 0 0 0 2px rgba(31, 100, 19, 1);\n              border-width: 0;\n              outline: 0;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #1f6413;\n              }\n            }\n            &:active {\n              box-shadow: 0 0 0 1px rgba(18, 58, 11, 1);\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #123a0b;\n              }\n            }\n          }\n          &.readonly {\n            opacity: 0.5;\n            cursor: not-allowed;\n            textarea {\n              pointer-events: none;\n              color: #515151;\n              background-color: #c5c5c5;\n              background-clip: padding-box;\n              box-shadow: 0 0 0 1px rgba(81, 81, 81, 1);\n              -webkit-appearance: none;\n              -moz-appearance: none;\n              appearance: none;\n            }\n            .ods-label-container ods-text::part(odsText) {\n              pointer-events: none;\n            }\n            .ods-button {\n              pointer-events: none;\n            }\n          }\n          &.error-state {\n            textarea {\n              box-shadow: 0 0 0 1px rgba(171, 45, 37, 1);\n              border-width: 0;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #ab2d25;\n              }\n              &:hover {\n                box-shadow: 0 0 0 1px rgba(130, 34, 28, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #82221c;\n                }\n              }\n              &:focus {\n                border-color: #ab2d25;\n                box-shadow: 0 0 0 2px rgba(171, 45, 37, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #ab2d25;\n                }\n              }\n              &:active {\n                box-shadow: 0 0 0 1px rgba(75, 20, 16, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #4b1410;\n                }\n              }\n            }\n          }\n        }\n        ods-text::part(odsText) {\n          line-height: 24px;\n          word-break: break-word;\n        }\n        ods-text.left-spacing {\n          margin-left: 4px;\n        }\n        ods-text {\n          display: inline-block;\n        }\n        button {\n          border-radius: 9999px;\n          height: var(--ods-icon-button-height, 44px);\n          width: var(--ods-icon-button-width, 44px);\n          text-decoration: none;\n          border: var(--ods-sem-space-none);\n          cursor: pointer;\n          justify-content: center;\n          box-sizing: border-box;\n          display: inline-flex;\n          align-items: center;\n          padding: 0;\n        }\n        .btn-ghost {\n          color: var(--ods-ref-color-green-40);\n          background: transparent;\n        }\n        .btn-ghost:hover {\n          background: var(--ods-utility-states-primary-hover);\n        }\n        .btn-ghost:focus{\n          outline: none;\n          box-shadow: 0 0 0 0.125rem var(--ods-ref-color-green-40);\n        }\n        .btn-ghost:active {\n          background: var(--ods-utility-states-primary-pressed);\n          box-shadow:none;\n        }\n        .ods-label-container ::-webkit-scrollbar{\n          width:12px;\n          position: absolute;\n          right: 4px;\n          top: 8px;\n      }\n      .ods-label-container ::-webkit-scrollbar-track{\n          background:#f1f1f1;\n          border-radius:10px;\n      }\n      .ods-label-container ::-webkit-scrollbar-thumb{\n          background-color:#1B1B1B\";\n          border-radius:10px;\n          opacity:0.3;\n      }\n\n      </style>\n      <div class=", ">\n        ", " ", "\n      </div>\n      <div class=\"ods-error-container\" style=\"resize: ", ";\">\n    ", "\n  </div>\n    "])), this.resize, this.width, this.width, ["ods-field-container", isReadOnly, isError].join(" "), this.getInputField(), this.getLabelField(), this.resize, this.getErrorMessage());
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          disabled: {
            type: String
          },
          error: {
            type: String
          },
          onInput: {
            type: Function
          },
          onBlur: {
            type: Function
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
          value: {
            type: String
          },
          resize: {
            type: String
          },
          width: {
            type: String
          }
        };
      }
    }]);
  }(s$2);
  customElements.define("ods-text-area", ODSTextArea);

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var _Symbol = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$c.toString;

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$b.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && _typeof(value) == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag$2 = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag$2;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray$1 = Array.isArray;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$1(value) {
    var type = _typeof(value);
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject$1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto$a = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject$1(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root, 'WeakMap');

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = function () {
    function object() {}
    return function (proto) {
      if (!isObject$1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
      length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var defineProperty = function () {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = _typeof(value);
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$7.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
      length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = undefined;
      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;
    return value === proto;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$2;
  }

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty$6.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
  };

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /** Detect free variable `exports`. */
  var freeExports$2 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$2 = freeExports$2 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

  /** Built-in value references. */
  var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';
  var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */
  var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports$1 && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;
      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray$1(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && (
      // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' ||
      // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') ||
      // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
      // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject$1(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
      result = [];
    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray$1(value)) {
      return false;
    }
    var type = _typeof(value);
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root, 'Map');

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map$1 || ListCache)(),
      'string': new Hash()
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = _typeof(value);
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function memoized() {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray$1(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0,
      length = path.length;
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
      result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }

  /** Detect free variable `exports`. */
  var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols$1 ? stubArray : function (object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView');

  /* Built-in method references that are verified to be native. */
  var Promise$1 = getNative(root, 'Promise');

  /* Built-in method references that are verified to be native. */
  var Set$1 = getNative(root, 'Set');

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$3 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap$1);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag(new Map$1()) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
    getTag = function getTag(value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$3;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
      result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /** Built-in value references. */
  var Uint8Array = root.Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$2:
        return new Ctor();
      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$2:
        return new Ctor();
      case symbolTag$1:
        return cloneSymbol(object);
    }
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag$1;
  }

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

  /** `Object#toString` result references. */
  var setTag$1 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag$1;
  }

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (result !== undefined) {
      return result;
    }
    if (!isObject$1(value)) {
      return value;
    }
    var isArr = isArray$1(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  /* eslint-disable no-param-reassign,array-callback-return */
  var isArray = Array.isArray;
  var isObject = function isObject(obj) {
    return _typeof(obj) === "object" && obj !== null && typeof obj !== "function" && !isArray(obj);
  };
  /**
   * Return true if a key object is the original value (__ngWatch<keyName>)
   * @param value
   * @returns {boolean|*}
   */
  var isOriginalObjectKey = function isOriginalObjectKey(value) {
    return value && value.startsWith && value.startsWith('__ngWatch') || value === '__litElms__';
  };
  /**
   * Negation isOriginalObjectKey
   * @param value
   * @returns {boolean}
   */
  var isNotOriginalObjectKey = function isNotOriginalObjectKey(value) {
    return !isOriginalObjectKey(value);
  };

  /**
   * Mixing that run lit-element's requestUpdate() when a prop is changed on the object
   * @param obj
   * @param litElm
   */

  // Check reflect API
  var objectWatcherMixing = function objectWatcherMixing(obj, litElm, ngScope) {
    obj.__litElms__ = obj.__litElms__ || [];
    obj.__litElms__.push(litElm);
    Object.keys(obj).filter(isNotOriginalObjectKey).map(function (prop) {
      var value = obj[prop];
      delete obj[prop];
      Object.defineProperty(obj, "__ngWatch".concat(prop), {
        value: value,
        writable: true,
        enumerable: false
      });
      Object.defineProperty(obj, prop, {
        get: function get() {
          return obj["__ngWatch".concat(prop)];
        },
        set: function set(val) {
          obj["__ngWatch".concat(prop)] = val;
          obj.__litElms__.map(function (theElm) {
            return theElm.requestUpdate();
          });
          ngScope.$applyAsync();
        }
      });
    });
  };
  /**
   * Mixing that run lit-element's requestUpdate() when an array was changed
   * @param arr
   * @param elm
   */
  // check for proxies to array
  var ARRAY_MUTATIONS = ['fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'];
  var arrayWatcherMixing = function arrayWatcherMixing(arr, litElm, ngScope) {
    arr.__litElms__ = arr.__litElms__ || [];
    arr.__litElms__.push(litElm);
    ARRAY_MUTATIONS.map(function (mutationName) {
      arr[mutationName] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        Array.prototype[mutationName].apply(this, args);
        arr.__litElms__.map(function (litElmWatched) {
          return litElmWatched.requestUpdate();
        });
        ngScope.$applyAsync();
      };
    });
  };

  /**
   * Return true if ng prop need to be watched for changes
   * @param ngPropOptions
   */
  var shouldWatchNgProp = function shouldWatchNgProp(ngPropOptions) {
    return ngPropOptions.watch && !ngPropOptions.__ngWatcher__;
  };

  /**
   * Watch the props if needed
   * @param ngPropOptions
   * @param litElm
   * @param ngScope
   */
  var watchLitIfNeeded = function watchLitIfNeeded(ngPropOptions, litElm, ngScope, ngValue) {
    if (shouldWatchNgProp(ngPropOptions)) {
      // Array
      if (isArray(ngValue)) {
        ngPropOptions.__ngWatcher__ = 'array';
        arrayWatcherMixing(ngValue, litElm, ngScope);
      }
      // Object
      if (isObject(ngValue)) {
        ngPropOptions.__ngWatcher__ = 'object';
        objectWatcherMixing(ngValue, litElm, ngScope);
      }
    }
  };

  var SECOND = 1000;

  /**
   * @param {LitElement} baseElement - the LitElement to extend
   */
  var NgLit = function NgLit(baseElement) {
    return /*#__PURE__*/function (_baseElement) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _baseElement);
      return _createClass(_class, [{
        key: "update",
        value:
        /**
         * Extend the LitElement `update` to check for changed properties and inject angular properties from scope if possible
         */
        function update(changedProps) {
          var _this = this;
          if (!this.__ngScopeOpts__) {
            this.__ngScopeOpts__ = {};
          }
          if (this.__shouldUpdateNgProps(changedProps)) {
            this.__updateWithoutNgScopeSync(changedProps);
            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _yield$_this$__getNgS, ngScope, ngInjector;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this.__getNgScope();
                  case 2:
                    _yield$_this$__getNgS = _context.sent;
                    ngScope = _yield$_this$__getNgS.ngScope;
                    ngInjector = _yield$_this$__getNgS.ngInjector;
                    // eslint-disable-next-line no-unused-expressions
                    ngScope && ngInjector && _this.__updateWithNgScopeAsync(ngScope, ngInjector, changedProps);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          } else {
            _get(_getPrototypeOf(_class.prototype), "update", this).call(this, changedProps);
          }
        }

        /**
         *
         * INTERNAL METHODS
         *
         */

        /**
         * Check if a given prop name is an angular prop
         * @param propName
         * @returns {*|boolean}
         * @private
         */
      }, {
        key: "__isNgProp",
        value: function __isNgProp(propName) {
          return this.constructor.ngProps && this.constructor.ngProps[propName];
        }

        /**
         * Return true if we should update angular properties
         * @returns {boolean}
         * @private
         */
      }, {
        key: "__shouldUpdateNgProps",
        value: function __shouldUpdateNgProps(changedProps) {
          if (!this.constructor.ngProps) {
            return false;
          }
          if (!this.parentElement) {
            return false;
          }
          var _iterator = _createForOfIteratorHelper(changedProps.keys()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var changedPropKey = _step.value;
              if (this.__isNgProp(changedPropKey)) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return false;
        }

        /**
         * Return a promise that is resolved with angular's parent scope
         * @returns {Promise<any>}
         * @private
         */
      }, {
        key: "__getNgScope",
        value: function __getNgScope() {
          var _this2 = this;
          return new Promise(function (resolve) {
            var _window = window,
              angular = _window.angular;
            if (_this2.__ngScope && _this2.__ngInjector) {
              resolve({
                ngScope: _this2.__ngScope,
                ngInjector: _this2.__ngInjector
              });
            }
            var ngElement = angular ? angular.element(_this2.parentElement) : null;
            var ngScope = ngElement ? ngElement.scope() : null;
            var ngInjector = ngElement ? ngElement.injector() : null;
            if (ngScope && ngInjector) {
              _this2.__ngScope = ngScope;
              _this2.__ngInjector = ngInjector;
              resolve({
                ngScope: _this2.__ngScope,
                ngInjector: _this2.__ngInjector
              });
            } else {
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var $body, nextDigest;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      ngElement = angular ? angular.element(_this2.parentElement) : null;
                      ngScope = ngElement ? ngElement.scope() : null;
                      ngInjector = ngElement ? ngElement.injector() : null;
                      if (ngScope && ngInjector) {
                        _this2.__ngScope = ngScope;
                        _this2.__ngInjector = ngInjector;
                        // Try to extract angular's $apply, otherwise use setTimeout
                        $body = angular ? angular.element(document.getElementsByTagName('ng-app')[0] || document.querySelector("[ng-app]")) : null;
                        nextDigest = get($body, 'scope().$root.$apply') || setTimeout;
                        nextDigest(function () {
                          resolve({
                            ngScope: _this2.__ngScope,
                            ngInjector: _this2.__ngInjector
                          });
                        });
                      } else {
                        console.warn("Angular scope was not found on ".concat(_this2.constructor.name));
                        resolve({});
                      }
                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              })), SECOND * 0.1);
            }
          });
        }

        /**
         * Return true is a property is already watched on the scope
         * @param ngPropName
         * @returns {*}
         * @private
         */
      }, {
        key: "__isWatchedProp",
        value: function __isWatchedProp(ngPropName) {
          return ((this.__ngScopeOpts__ || {})[ngPropName] || {}).watch;
        }

        /**
         * Set a property as been watched on the scope
         * @param ngPropName
         * @private
         */
      }, {
        key: "__markWatchedProp",
        value: function __markWatchedProp(ngPropName) {
          this.__ngScopeOpts__ = this.__ngScopeOpts__ || {};
          this.__ngScopeOpts__[ngPropName] = this.__ngScopeOpts__[ngPropName] || {};
          this.__ngScopeOpts__[ngPropName].watch = true;
        }

        /**
         * Return true is a property was already assign with default value
         * @param ngPropName
         * @returns {*}
         * @private
         */
      }, {
        key: "__isSetDefaultProp",
        value: function __isSetDefaultProp(ngPropName) {
          return ((this.__ngScopeOpts__ || {})[ngPropName] || {}).setDefault;
        }

        /**
         * Set a property as been assigned with default value
         * @param ngPropName
         * @private
         */
      }, {
        key: "__markSetDefaultProp",
        value: function __markSetDefaultProp(ngPropName) {
          this.__ngScopeOpts__ = this.__ngScopeOpts__ || {};
          this.__ngScopeOpts__[ngPropName] = this.__ngScopeOpts__[ngPropName] || {};
          this.__ngScopeOpts__[ngPropName].setDefault = true;
        }

        /**
         * Commit an update before we have the scope
         * @param ngScope
         * @param changedProps
         * @private
         */
      }, {
        key: "__updateWithoutNgScopeSync",
        value: function __updateWithoutNgScopeSync(changedProps) {
          for (var _i = 0, _Object$entries = Object.entries(this.constructor.ngProps); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              ngPropName = _Object$entries$_i[0],
              ngPropOptions = _Object$entries$_i[1];
            var ngLitValue = changedProps.get(ngPropName);
            if (!this.__isSetDefaultProp(ngPropName) && (!ngLitValue || typeof ngLitValue === 'string') && ngPropOptions["default"]) {
              // apply default if any
              this.__markSetDefaultProp(ngPropName);
              this[ngPropName] = cloneDeep(ngPropOptions["default"]);
              changedProps.set(ngPropName, this[ngPropName]);
            }
          }
          _get(_getPrototypeOf(_class.prototype), "update", this).call(this, changedProps);
        }

        /**
         * Commit an update with the scope and the changedProp
         * @param ngScope
         * @param changedProps
         * @private
         */
      }, {
        key: "__updateWithNgScopeAsync",
        value: function __updateWithNgScopeAsync(ngScope, ngInjector, changedProps) {
          var _this3 = this;
          var _loop = function _loop() {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              ngPropName = _Object$entries2$_i[0],
              ngPropOptions = _Object$entries2$_i[1];
            // Try to extract the actual value on angular's scope
            var pathOnScope = _this3.getAttribute(ngPropName);
            // First Try: using angular.$parse
            var $parse = ngInjector.get('$parse');
            var getter = $parse(pathOnScope);
            var ngValueOnScope = getter(ngScope);
            if (typeof ngValueOnScope === 'string') {
              // Second Try: lodash get
              ngValueOnScope = get(ngScope, ngValueOnScope);
            }
            if (!ngValueOnScope || typeof ngValueOnScope === 'string') {
              // apply default if any
              var ngLitValue = changedProps.get(ngPropName);
              if (!ngLitValue || typeof ngLitValue === 'string') {
                // apply default if any
                if (ngPropOptions["default"]) {
                  _this3[ngPropName] = cloneDeep(ngPropOptions["default"]);
                  changedProps.set(ngPropName, _this3[ngPropName]);
                } else {
                  // else delete it
                  _this3[ngPropName] = null;
                  changedProps["delete"](ngPropName);
                }
              }
            } else {
              // watch for array and objects change on lit
              watchLitIfNeeded(ngPropOptions, _this3, ngScope, ngValueOnScope);
              // watch for reference change on scope
              if (!_this3.__isWatchedProp(ngPropName)) {
                _this3.__markWatchedProp(ngPropName);
                console.info("watching: ".concat(pathOnScope));
                ngScope.$watch(pathOnScope, function (newValue) {
                  _this3[ngPropName] = newValue;
                  changedProps.set(ngPropName, newValue);
                  _get(_getPrototypeOf(_class.prototype), "update", _this3).call(_this3, changedProps);
                });
              }
              if (_this3[ngPropName] !== ngValueOnScope) {
                _this3[ngPropName] = ngValueOnScope;
                changedProps.set(ngPropName, ngValueOnScope);
              }
            }
          };
          for (var _i2 = 0, _Object$entries2 = Object.entries(this.constructor.ngProps); _i2 < _Object$entries2.length; _i2++) {
            _loop();
          }
          _get(_getPrototypeOf(_class.prototype), "update", this).call(this, changedProps);
        }
      }], [{
        key: "createProperty",
        value:
        /**
         * Extend the LitElement `createProperty` to override ngProp's type into String
         */
        function createProperty(name, options) {
          if (this.ngProps && this.ngProps[name]) {
            options = options || {};
            options.type = String;
          }
          _get(_getPrototypeOf(_class), "createProperty", this).call(this, name, options);
        }
      }]);
    }(baseElement);
  };

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

  /**
   * Service Now ODSTextField Component
   * @input label, type
   * @output <ods-text-field> in dom
   */
  var ODSTextField = /*#__PURE__*/function (_NgLit) {
    function ODSTextField() {
      var _this;
      _classCallCheck(this, ODSTextField);
      _this = _callSuper(this, ODSTextField);
      _this.width = "280px";
      _this.error = "";
      _this.tooltip = "";
      _this.value = "";
      return _this;
    }
    _inherits(ODSTextField, _NgLit);
    return _createClass(ODSTextField, [{
      key: "handleInput",
      value: function handleInput(e) {}
    }, {
      key: "onBlur",
      value: function onBlur(e) {
        var event = new CustomEvent(this.onBlurEvent, {
          detail: e.target.value,
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
      }
    }, {
      key: "getInputField",
      value: function getInputField() {
        var isRequired = this.required == "true" ? true : false;
        var isOptional = this.optional == "true" ? true : false;
        if (isRequired) {
          isOptional = false;
        }
        var errorAlert = false;
        if (this.error != '') {
          errorAlert = true;
        }
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <input\n        tabindex=\"2\"\n        type=\"", "\"\n        class=", "\n        @input=\"", "\"\n        @blur=\"", "\"\n        id=\"", "\"\n        name=\"", "\"\n        placeholder=\"", "\"\n        error=\"", "\"\n        aria-describedby=\"", "\"\n        aria-disabled=\"", "\"\n        ?required=\"", "\"\n        ?optional=\"", "\"\n        aria-invalid=\"", "\"\n        ng-model=\"", "\"\n      />\n    "])), this.type, ["ods-form-control"].join(" "), this.onInput, this.onBlur, this.name, this.name, this.placeholder, this.error, this.name, this.isDisabled, isRequired, isOptional, errorAlert, this.modelValue);
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
          return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n       <div class=\"ods-button\">\n          <button tabindex=\"1\" class=\"btn-ghost\" aria-describedby=\"tooltip\">\n            <ods-icon size=\"SM\" name=\"info\" color=\"\"> </ods-icon>\n          </button>\n          <ods-tooltip id=\"tooltip\" label=\"", "\"></ods-tooltip>\n        </div>\n      "])), this.tooltip);
        }
      }
    }, {
      key: "getLabelField",
      value: function getLabelField() {
        if (this.label != "") {
          return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        <div class=\"ods-label-container\">\n          <ods-text\n            html-tag=\"span\"\n            size=\"sm\"\n            weight=\"regular\"\n            color=\"text-primary\"\n          >\n            <label for=\"", "\"> ", "</label>\n          </ods-text>\n          ", "\n        </div>\n      "])), this.name, this.getLabelText(), this.getInfoIcon());
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
          labelText = x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["", "<ods-text\n          class=\"left-spacing\"\n          html-tag=\"span\"\n          size=\"sm\"\n          weight=\"regular\"\n          color=\"text-primary\"\n          >(optional)</ods-text\n        >"])), labelText);
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
        var isReadOnly = this.isDisabled == "true" ? "readonly" : "";
        var isError = this.error != "" ? "error-state" : "";
        if (this.isDisabled == "true") {
          isError = "";
          this.error = "";
        }
        return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          box-sizng: border-box;\n          margin: 0;\n          padding: 0;\n          --ods-utility-states-primary-hover: rgba(143, 218, 131, 0.4);\n          --ods-utility-states-primary-pressed: rgba(143, 218, 131, 0.64);\n          --ods-ref-color-green-100: #ffffff;\n          --ods-ref-color-green-40: #298319;\n          --ods-ref-color-gray-35: #515151;\n        }\n        .ods-form-label {\n          margin-bottom: 0.5ods-form-labelrem;\n          font-family: lato;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n          margin: 0;\n          color: #1b1b1b;\n        }\n        .ods-form-control {\n          display: block;\n          padding: var(--ods-input-padding, 10px 16px);\n          font-size: var(--ods-input-font-size, 16px);\n          font-family: lato, Helvetica, Arial, sans-serif;\n          font-weight: var(--ods-input-font-weight, 400);\n          line-height: var(--ods-input-line-height, 24px);\n          color: var(--ods-input-color, #1b1b1b);\n          background-color: var(--ods-input-background-color, #fff);\n          background-clip: padding-box;\n          box-shadow: 0 0 0 1px rgba(118, 118, 118, 1);\n          border-width: 0;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          border-radius: var(--ods-text-field-border-radius, 4px);\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .ods-form-control {\n            transition: none;\n          }\n        }\n        .ods-form-control::-moz-placeholder {\n          color: #5e5e5e;\n          opacity: 1;\n        }\n        .ods-form-control::placeholder {\n          color: #5e5e5e;\n          opacity: 1;\n        }\n        .ods-field-container {\n          width: ", ";\n          display: flex;\n          position: relative;\n          flex-direction: column-reverse;\n          gap: var(--ods-content-gap, 4px);\n          box-sizing: border-box;\n        }\n        .ods-label-container {\n          display: flex;\n          align-items: flex-start;\n          gap: 4px;\n        }\n        .ods-label-container ods-icon-button {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          --ods-icon-button-height: 24px;\n          --ods-icon-button-width: 24px;\n        }\n        .ods-button {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          --ods-icon-button-height: 24px;\n          --ods-icon-button-width: 24px;\n        }\n        ods-icon-button ods-icon::part(odsIcon) {\n          width: 16px;\n          height: 16px;\n        }\n        .ods-error-container {\n          margin-top: 4px;\n          width: ", ";\n          display: flex;\n          justify-content: flex-start;\n          gap: 8px;\n        }\n        .ods-error-container ods-icon {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 16px;\n          width: 16px;\n          padding: 4px 0px;\n        }\n\n        .ods-field-container {\n          input {\n            &:hover {\n              border-width: 0;\n              box-shadow: 0 0 0 1px rgba(31, 100, 19, 1);\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #1f6413;\n              }\n              ~ .ods-label-container label {\n                cursor: pointer;\n              }\n            }\n            &:focus {\n              color: #1b1b1b;\n              background-color: #fff;\n              box-shadow: 0 0 0 2px rgba(31, 100, 19, 1);\n              border-width: 0;\n              outline: 0;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #1f6413;\n              }\n            }\n            &:active {\n              box-shadow: 0 0 0 1px rgba(18, 58, 11, 1);\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #123a0b;\n              }\n            }\n          }\n          &.readonly {\n            opacity: 0.5;\n            cursor: not-allowed;\n            input {\n              pointer-events: none;\n              color: #515151;\n              background-color: #c5c5c5;\n              background-clip: padding-box;\n              box-shadow: 0 0 0 1px rgba(81, 81, 81, 1);\n              -webkit-appearance: none;\n              -moz-appearance: none;\n              appearance: none;\n            }\n            .ods-label-container ods-text::part(odsText) {\n              pointer-events: none;\n            }\n            .ods-button {\n              pointer-events: none;\n            }\n          }\n          &.error-state {\n            input {\n              box-shadow: 0 0 0 1px rgba(171, 45, 37, 1);\n              border-width: 0;\n              ~ .ods-label-container ods-text::part(odsText) {\n                color: #ab2d25;\n              }\n              &:hover {\n                box-shadow: 0 0 0 1px rgba(130, 34, 28, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #82221c;\n                }\n              }\n              &:focus {\n                border-color: #ab2d25;\n                box-shadow: 0 0 0 2px rgba(171, 45, 37, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #ab2d25;\n                }\n              }\n              &:active {\n                box-shadow: 0 0 0 1px rgba(75, 20, 16, 1);\n                ~ .ods-label-container ods-text::part(odsText) {\n                  color: #4b1410;\n                }\n              }\n            }\n          }\n        }\n        ods-text::part(odsText) {\n          line-height: 24px;\n          word-break: break-word;\n        }\n        ods-text.left-spacing {\n          margin-left: 4px;\n        }\n        ods-text {\n          display: inline-block;\n        }\n        button {\n          border-radius: 9999px;\n          height: var(--ods-icon-button-height, 44px);\n          width: var(--ods-icon-button-width, 44px);\n          text-decoration: none;\n          border: var(--ods-sem-space-none);\n          cursor: pointer;\n          justify-content: center;\n          box-sizing: border-box;\n          display: inline-flex;\n          align-items: center;\n          padding: 0;\n        }\n        .btn-ghost {\n          color: var(--ods-ref-color-green-40);\n          background: transparent;\n        }\n        .btn-ghost:hover {\n          background: var(--ods-utility-states-primary-hover);\n        }\n        .btn-ghost:focus{\n          outline: none;\n          box-shadow: 0 0 0 0.125rem var(--ods-ref-color-green-40);\n        }\n        .btn-ghost:active {\n          background: var(--ods-utility-states-primary-pressed);\n          box-shadow:none;\n        }\n\n      </style>\n      <div class=", ">\n        ", " ", "\n      </div>\n      ", "\n    "])), this.width, this.width, ["ods-field-container", isReadOnly, isError].join(" "), this.getInputField(), this.getLabelField(), this.getErrorMessage());
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          isDisabled: {
            type: String
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
          },
          onBlurEvent: {
            type: String
          },
          user: {
            type: Object
          },
          modelValue: {
            type: String
          }
        };
      }
    }, {
      key: "ngProps",
      get: function get() {
        return {
          user: {
            "default": {}
          }
        };
      }
    }]);
  }(NgLit(s$2));
  customElements.define("ods-text-field", ODSTextField);

}));
