!(function () {
  var e,
    n,
    t,
    r,
    o = {
      82016: function () {
        Array.prototype.find ||
          (Array.prototype.find = function (e) {
            if ("function" != typeof e)
              throw new TypeError("callback must be a function");
            for (var n = arguments[1] || this, t = 0; t < this.length; t++)
              if (e.call(n, this[t], t, this)) return this[t];
          }),
          Array.prototype.includes ||
            (Array.prototype.includes = function () {
              return -1 !== Array.prototype.indexOf.apply(this, arguments);
            }),
          Array.prototype.flat ||
            Object.defineProperty(Array.prototype, "flat", {
              configurable: !0,
              writable: !0,
              value: function () {
                var e = void 0 === arguments[0] ? 1 : Number(arguments[0]) || 0,
                  n = [],
                  t = n.forEach,
                  r = function e(r, o) {
                    t.call(r, function (t) {
                      o > 0 && Array.isArray(t) ? e(t, o - 1) : n.push(t);
                    });
                  };
                return r(this, e), n;
              },
            }),
          Array.prototype.flatMap ||
            (Array.prototype.flatMap = function (e, n) {
              for (
                var t = n || this,
                  r = [],
                  o = Object(t),
                  a = o.length >>> 0,
                  i = 0;
                i < a;
                ++i
              )
                if (i in o) {
                  var c = e.call(t, o[i], i, o);
                  r = r.concat(c);
                }
              return r;
            }),
          Array.prototype.findIndex ||
            (Array.prototype.findIndex = function (e) {
              if ("function" != typeof e)
                throw new TypeError("callback must be a function");
              for (var n = arguments[1] || this, t = 0; t < this.length; t++)
                if (e.call(n, this[t], t, this)) return t;
              return -1;
            });
      },
      97759: function (e, n, t) {
        var r, o, a, i, c;
        String.prototype.includes ||
          (String.prototype.includes = function () {
            return -1 !== String.prototype.indexOf.apply(this, arguments);
          }),
          String.prototype.startsWith ||
            (String.prototype.startsWith = function () {
              return 0 === String.prototype.indexOf.apply(this, arguments);
            }),
          Array.from ||
            (Array.from =
              ((r = Object.prototype.toString),
              (o = function (e) {
                return (
                  "function" == typeof e || "[object Function]" === r.call(e)
                );
              }),
              (a = Math.pow(2, 53) - 1),
              (i = function (e) {
                var n = (function (e) {
                  var n = Number(e);
                  return isNaN(n)
                    ? 0
                    : 0 !== n && isFinite(n)
                    ? (n > 0 ? 1 : -1) * Math.floor(Math.abs(n))
                    : n;
                })(e);
                return Math.min(Math.max(n, 0), a);
              }),
              (c = function (e) {
                var n = [];
                return (
                  e.forEach(function (e) {
                    return n.push(e);
                  }),
                  n
                );
              }),
              function (e) {
                if (e instanceof Set) return c(e);
                var n = this,
                  t = Object(e);
                if (null == e)
                  throw new TypeError(
                    "Array.from requires an array-like object - not null or undefined"
                  );
                var r,
                  a = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== a) {
                  if (!o(a))
                    throw new TypeError(
                      "Array.from: when provided, the second argument must be a function"
                    );
                  arguments.length > 2 && (r = arguments[2]);
                }
                for (
                  var u,
                    l = i(t.length),
                    s = o(n) ? Object(new n(l)) : new Array(l),
                    d = 0;
                  d < l;

                )
                  (u = t[d]),
                    (s[d] = a ? (void 0 === r ? a(u, d) : a.call(r, u, d)) : u),
                    (d += 1);
                return (s.length = l), s;
              })),
          Array.prototype.fill ||
            Object.defineProperty(Array.prototype, "fill", {
              value: function (e) {
                if (null == this)
                  throw new TypeError("this is null or not defined");
                for (
                  var n = Object(this),
                    t = n.length >>> 0,
                    r = arguments[1],
                    o = r >> 0,
                    a = o < 0 ? Math.max(t + o, 0) : Math.min(o, t),
                    i = arguments[2],
                    c = void 0 === i ? t : i >> 0,
                    u = c < 0 ? Math.max(t + c, 0) : Math.min(c, t);
                  a < u;

                )
                  (n[a] = e), a++;
                return n;
              },
            }),
          "function" != typeof Object.assign &&
            Object.defineProperty(Object, "assign", {
              value: function (e) {
                "use strict";
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var n = Object(e), t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  if (null != r)
                    for (var o in r)
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        (n[o] = r[o]);
                }
                return n;
              },
              writable: !0,
              configurable: !0,
            }),
          t.g.alert.name ||
            Object.defineProperty(Function.prototype, "name", {
              get: function () {
                var e = (this.toString()
                  .replace(/\n/g, "")
                  .match(/^function\s*([^\s(]+)/) || [])[1];
                return Object.defineProperty(this, "name", { value: e }), e;
              },
              configurable: !0,
            }),
          Array.prototype.filter ||
            (Array.prototype.filter = function (e) {
              for (var n = [], t = this.length, r = 0; r < t; r++)
                e(this[r], r, this) && n.push(this[r]);
              return n;
            });
      },
      73420: function () {
        window.NodeList &&
          !NodeList.prototype.forEach &&
          (NodeList.prototype.forEach = Array.prototype.forEach);
      },
      94919: function () {
        Object.entries ||
          (Object.entries = function (e) {
            for (var n = Object.keys(e), t = n.length, r = new Array(t); t--; )
              r[t] = [n[t], e[n[t]]];
            return r;
          }),
          Object.values ||
            (Object.values = function (e) {
              for (
                var n = Object.keys(e), t = n.length, r = new Array(t);
                t--;

              )
                r[t] = e[n[t]];
              return r;
            }),
          "function" != typeof Object.assign &&
            Object.defineProperty(Object, "assign", {
              value: function (e) {
                "use strict";
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var n = Object(e), t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  if (null != r)
                    for (var o in r)
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        (n[o] = r[o]);
                }
                return n;
              },
              writable: !0,
              configurable: !0,
            });
      },
      84122: function () {
        String.prototype.endsWith ||
          (String.prototype.endsWith = function (e, n) {
            return (
              n < this.length ? (n |= 0) : (n = this.length),
              this.substr(n - e.length, e.length) === e
            );
          }),
          String.prototype.padStart ||
            Object.defineProperty(String.prototype, "padStart", {
              configurable: !0,
              writable: !0,
              value: function (e, n) {
                return (
                  (e >>= 0),
                  (n = String(void 0 !== n ? n : " ")),
                  this.length > e
                    ? String(this)
                    : ((e -= this.length) > n.length &&
                        (n += n.repeat(e / n.length)),
                      n.slice(0, e) + String(this))
                );
              },
            });
      },
      73145: function (e, n) {
        "use strict";
        n.r = void 0;
        n.r = function () {
          return new Promise(function (e, n) {
            var t,
              r,
              o = "Unknown";
            function a(n) {
              e({ isPrivate: n, browserName: o });
            }
            function i(e) {
              return e === eval.toString().length;
            }
            function c() {
              void 0 !== navigator.maxTouchPoints
                ? (function () {
                    var e = String(Math.random());
                    try {
                      window.indexedDB.open(e, 1).onupgradeneeded = function (
                        n
                      ) {
                        var t,
                          r,
                          o =
                            null === (t = n.target) || void 0 === t
                              ? void 0
                              : t.result;
                        try {
                          o
                            .createObjectStore("test", { autoIncrement: !0 })
                            .put(new Blob()),
                            a(!1);
                        } catch (e) {
                          var i = e;
                          return (
                            e instanceof Error &&
                              (i =
                                null !== (r = e.message) && void 0 !== r
                                  ? r
                                  : e),
                            a(
                              "string" == typeof i &&
                                /BlobURLs are not yet supported/.test(i)
                            )
                          );
                        } finally {
                          o.close(), window.indexedDB.deleteDatabase(e);
                        }
                      };
                    } catch (e) {
                      return a(!1);
                    }
                  })()
                : (function () {
                    var e = window.openDatabase,
                      n = window.localStorage;
                    try {
                      e(null, null, null, null);
                    } catch (e) {
                      return a(!0);
                    }
                    try {
                      n.setItem("test", "1"), n.removeItem("test");
                    } catch (e) {
                      return a(!0);
                    }
                    a(!1);
                  })();
            }
            function u() {
              navigator.webkitTemporaryStorage.queryUsageAndQuota(
                function (e, n) {
                  var t;
                  a(
                    n <
                      (void 0 !== (t = window).performance &&
                      void 0 !== t.performance.memory &&
                      void 0 !== t.performance.memory.jsHeapSizeLimit
                        ? performance.memory.jsHeapSizeLimit
                        : 1073741824)
                  );
                },
                function (e) {
                  n(
                    new Error(
                      "detectIncognito somehow failed to query storage quota: " +
                        e.message
                    )
                  );
                }
              );
            }
            function l() {
              void 0 !== self.Promise && void 0 !== self.Promise.allSettled
                ? u()
                : (0, window.webkitRequestFileSystem)(
                    0,
                    1,
                    function () {
                      a(!1);
                    },
                    function () {
                      a(!0);
                    }
                  );
            }
            void 0 !== (r = navigator.vendor) &&
            0 === r.indexOf("Apple") &&
            i(37)
              ? ((o = "Safari"), c())
              : (function () {
                  var e = navigator.vendor;
                  return void 0 !== e && 0 === e.indexOf("Google") && i(33);
                })()
              ? ((t = navigator.userAgent),
                (o = t.match(/Chrome/)
                  ? void 0 !== navigator.brave
                    ? "Brave"
                    : t.match(/Edg/)
                    ? "Edge"
                    : t.match(/OPR/)
                    ? "Opera"
                    : "Chrome"
                  : "Chromium"),
                l())
              : void 0 !== document.documentElement &&
                void 0 !== document.documentElement.style.MozAppearance &&
                i(37)
              ? ((o = "Firefox"), a(void 0 === navigator.serviceWorker))
              : void 0 !== navigator.msSaveBlob && i(39)
              ? ((o = "Internet Explorer"), a(void 0 === window.indexedDB))
              : n(new Error("detectIncognito cannot determine the browser"));
          });
        };
      },
      17061: function (e, n, t) {
        var r = t(18698).default;
        function o() {
          "use strict";
          (e.exports = o =
            function () {
              return n;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var n = {},
            t = Object.prototype,
            a = t.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            c = i.iterator || "@@iterator",
            u = i.asyncIterator || "@@asyncIterator",
            l = i.toStringTag || "@@toStringTag";
          function s(e, n, t) {
            return (
              Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[n]
            );
          }
          try {
            s({}, "");
          } catch (e) {
            s = function (e, n, t) {
              return (e[n] = t);
            };
          }
          function d(e, n, t, r) {
            var o = n && n.prototype instanceof f ? n : f,
              a = Object.create(o.prototype),
              i = new k(r || []);
            return (
              (a._invoke = (function (e, n, t) {
                var r = "suspendedStart";
                return function (o, a) {
                  if ("executing" === r)
                    throw new Error("Generator is already running");
                  if ("completed" === r) {
                    if ("throw" === o) throw a;
                    return R();
                  }
                  for (t.method = o, t.arg = a; ; ) {
                    var i = t.delegate;
                    if (i) {
                      var c = x(i, t);
                      if (c) {
                        if (c === p) continue;
                        return c;
                      }
                    }
                    if ("next" === t.method) t.sent = t._sent = t.arg;
                    else if ("throw" === t.method) {
                      if ("suspendedStart" === r)
                        throw ((r = "completed"), t.arg);
                      t.dispatchException(t.arg);
                    } else "return" === t.method && t.abrupt("return", t.arg);
                    r = "executing";
                    var u = m(e, n, t);
                    if ("normal" === u.type) {
                      if (
                        ((r = t.done ? "completed" : "suspendedYield"),
                        u.arg === p)
                      )
                        continue;
                      return { value: u.arg, done: t.done };
                    }
                    "throw" === u.type &&
                      ((r = "completed"),
                      (t.method = "throw"),
                      (t.arg = u.arg));
                  }
                };
              })(e, t, i)),
              a
            );
          }
          function m(e, n, t) {
            try {
              return { type: "normal", arg: e.call(n, t) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          n.wrap = d;
          var p = {};
          function f() {}
          function h() {}
          function _() {}
          var g = {};
          s(g, c, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            y = v && v(v(P([])));
          y && y !== t && a.call(y, c) && (g = y);
          var b = (_.prototype = f.prototype = Object.create(g));
          function O(e) {
            ["next", "throw", "return"].forEach(function (n) {
              s(e, n, function (e) {
                return this._invoke(n, e);
              });
            });
          }
          function w(e, n) {
            function t(o, i, c, u) {
              var l = m(e[o], e, i);
              if ("throw" !== l.type) {
                var s = l.arg,
                  d = s.value;
                return d && "object" == r(d) && a.call(d, "__await")
                  ? n.resolve(d.__await).then(
                      function (e) {
                        t("next", e, c, u);
                      },
                      function (e) {
                        t("throw", e, c, u);
                      }
                    )
                  : n.resolve(d).then(
                      function (e) {
                        (s.value = e), c(s);
                      },
                      function (e) {
                        return t("throw", e, c, u);
                      }
                    );
              }
              u(l.arg);
            }
            var o;
            this._invoke = function (e, r) {
              function a() {
                return new n(function (n, o) {
                  t(e, r, n, o);
                });
              }
              return (o = o ? o.then(a, a) : a());
            };
          }
          function x(e, n) {
            var t = e.iterator[n.method];
            if (void 0 === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = void 0),
                  x(e, n),
                  "throw" === n.method)
                )
                  return p;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var r = m(t, e.iterator, n.arg);
            if ("throw" === r.type)
              return (
                (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), p
              );
            var o = r.arg;
            return o
              ? o.done
                ? ((n[e.resultName] = o.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method &&
                    ((n.method = "next"), (n.arg = void 0)),
                  (n.delegate = null),
                  p)
                : o
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                p);
          }
          function S(e) {
            var n = { tryLoc: e[0] };
            1 in e && (n.catchLoc = e[1]),
              2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
              this.tryEntries.push(n);
          }
          function E(e) {
            var n = e.completion || {};
            (n.type = "normal"), delete n.arg, (e.completion = n);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(S, this),
              this.reset(!0);
          }
          function P(e) {
            if (e) {
              var n = e[c];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var t = -1,
                  r = function n() {
                    for (; ++t < e.length; )
                      if (a.call(e, t))
                        return (n.value = e[t]), (n.done = !1), n;
                    return (n.value = void 0), (n.done = !0), n;
                  };
                return (r.next = r);
              }
            }
            return { next: R };
          }
          function R() {
            return { value: void 0, done: !0 };
          }
          return (
            (h.prototype = _),
            s(b, "constructor", _),
            s(_, "constructor", h),
            (h.displayName = s(_, l, "GeneratorFunction")),
            (n.isGeneratorFunction = function (e) {
              var n = "function" == typeof e && e.constructor;
              return (
                !!n &&
                (n === h || "GeneratorFunction" === (n.displayName || n.name))
              );
            }),
            (n.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, _)
                  : ((e.__proto__ = _), s(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(b)),
                e
              );
            }),
            (n.awrap = function (e) {
              return { __await: e };
            }),
            O(w.prototype),
            s(w.prototype, u, function () {
              return this;
            }),
            (n.AsyncIterator = w),
            (n.async = function (e, t, r, o, a) {
              void 0 === a && (a = Promise);
              var i = new w(d(e, t, r, o), a);
              return n.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            O(b),
            s(b, l, "Generator"),
            s(b, c, function () {
              return this;
            }),
            s(b, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (e) {
              var n = [];
              for (var t in e) n.push(t);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (n.values = P),
            (k.prototype = {
              constructor: k,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(E),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      a.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function t(t, r) {
                  return (
                    (i.type = "throw"),
                    (i.arg = e),
                    (n.next = t),
                    r && ((n.method = "next"), (n.arg = void 0)),
                    !!r
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r],
                    i = o.completion;
                  if ("root" === o.tryLoc) return t("end");
                  if (o.tryLoc <= this.prev) {
                    var c = a.call(o, "catchLoc"),
                      u = a.call(o, "finallyLoc");
                    if (c && u) {
                      if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (
                    r.tryLoc <= this.prev &&
                    a.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= n &&
                  n <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = n),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                    : this.complete(i)
                );
              },
              complete: function (e, n) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && n && (this.next = n),
                  p
                );
              },
              finish: function (e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var t = this.tryEntries[n];
                  if (t.finallyLoc === e)
                    return this.complete(t.completion, t.afterLoc), E(t), p;
                }
              },
              catch: function (e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var t = this.tryEntries[n];
                  if (t.tryLoc === e) {
                    var r = t.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      E(t);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, t) {
                return (
                  (this.delegate = {
                    iterator: P(e),
                    resultName: n,
                    nextLoc: t,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            n
          );
        }
        (e.exports = o),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      18698: function (e) {
        function n(t) {
          return (
            (e.exports = n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            n(t)
          );
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      64687: function (e, n, t) {
        var r = t(17061)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    a = {};
  function i(e) {
    var n = a[e];
    if (void 0 !== n) return n.exports;
    var t = (a[e] = { exports: {} });
    return o[e](t, t.exports, i), t.exports;
  }
  (i.n = function (e) {
    var n =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return i.d(n, { a: n }), n;
  }),
    (i.d = function (e, n) {
      for (var t in n)
        i.o(n, t) &&
          !i.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (e = i.u),
    (n = i.e),
    (t = {}),
    (r = {}),
    (i.u = function (n) {
      return e(n) + (t.hasOwnProperty(n) ? "?" + t[n] : "");
    }),
    (i.e = function (o) {
      return n(o).catch(function (n) {
        var a = r.hasOwnProperty(o) ? r[o] : 10;
        if (a < 1) {
          var c = e(o);
          throw (
            ((n.message =
              "Loading chunk " + o + " failed after 10 retries.\n(" + c + ")"),
            (n.request = c),
            n)
          );
        }
        return new Promise(function (e) {
          var n = 10 - a + 1;
          setTimeout(function () {
            var c = "cache-bust=true&retry-attempt=" + n;
            (t[o] = c), (r[o] = a - 1), e(i.e(o));
          }, 200);
        });
      });
    }),
    (function () {
      "use strict";
      var e = {};
      i.r(e),
        i.d(e, {
          API: function () {
            return E;
          },
          BEHAV: function () {
            return b;
          },
          DEBUG: function () {
            return x;
          },
          ERROR: function () {
            return k;
          },
          INTEGRATION: function () {
            return S;
          },
          METRIC: function () {
            return w;
          },
          RENDER: function () {
            return O;
          },
        });
      var n = function (e) {
        var n = this.constructor;
        return this.then(
          function (t) {
            return n.resolve(e()).then(function () {
              return t;
            });
          },
          function (t) {
            return n.resolve(e()).then(function () {
              return n.reject(t);
            });
          }
        );
      };
      var t = function (e) {
          return new this(function (n, t) {
            if (!e || void 0 === e.length)
              return t(
                new TypeError(
                  typeof e +
                    " " +
                    e +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))"
                )
              );
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return n([]);
            var o = r.length;
            function a(e, t) {
              if (t && ("object" == typeof t || "function" == typeof t)) {
                var i = t.then;
                if ("function" == typeof i)
                  return void i.call(
                    t,
                    function (n) {
                      a(e, n);
                    },
                    function (t) {
                      (r[e] = { status: "rejected", reason: t }),
                        0 == --o && n(r);
                    }
                  );
              }
              (r[e] = { status: "fulfilled", value: t }), 0 == --o && n(r);
            }
            for (var i = 0; i < r.length; i++) a(i, r[i]);
          });
        },
        r = setTimeout;
      function o(e) {
        return Boolean(e && void 0 !== e.length);
      }
      function a() {}
      function c(e) {
        if (!(this instanceof c))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          p(e, this);
      }
      function u(e, n) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            c._immediateFn(function () {
              var t = 1 === e._state ? n.onFulfilled : n.onRejected;
              if (null !== t) {
                var r;
                try {
                  r = t(e._value);
                } catch (e) {
                  return void s(n.promise, e);
                }
                l(n.promise, r);
              } else (1 === e._state ? l : s)(n.promise, e._value);
            }))
          : e._deferreds.push(n);
      }
      function l(e, n) {
        try {
          if (n === e)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (n && ("object" == typeof n || "function" == typeof n)) {
            var t = n.then;
            if (n instanceof c)
              return (e._state = 3), (e._value = n), void d(e);
            if ("function" == typeof t)
              return void p(
                ((r = t),
                (o = n),
                function () {
                  r.apply(o, arguments);
                }),
                e
              );
          }
          (e._state = 1), (e._value = n), d(e);
        } catch (n) {
          s(e, n);
        }
        var r, o;
      }
      function s(e, n) {
        (e._state = 2), (e._value = n), d(e);
      }
      function d(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          c._immediateFn(function () {
            e._handled || c._unhandledRejectionFn(e._value);
          });
        for (var n = 0, t = e._deferreds.length; n < t; n++)
          u(e, e._deferreds[n]);
        e._deferreds = null;
      }
      function m(e, n, t) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof n ? n : null),
          (this.promise = t);
      }
      function p(e, n) {
        var t = !1;
        try {
          e(
            function (e) {
              t || ((t = !0), l(n, e));
            },
            function (e) {
              t || ((t = !0), s(n, e));
            }
          );
        } catch (e) {
          if (t) return;
          (t = !0), s(n, e);
        }
      }
      (c.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (c.prototype.then = function (e, n) {
          var t = new this.constructor(a);
          return u(this, new m(e, n, t)), t;
        }),
        (c.prototype.finally = n),
        (c.all = function (e) {
          return new c(function (n, t) {
            if (!o(e)) return t(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return n([]);
            var a = r.length;
            function i(e, o) {
              try {
                if (o && ("object" == typeof o || "function" == typeof o)) {
                  var c = o.then;
                  if ("function" == typeof c)
                    return void c.call(
                      o,
                      function (n) {
                        i(e, n);
                      },
                      t
                    );
                }
                (r[e] = o), 0 == --a && n(r);
              } catch (e) {
                t(e);
              }
            }
            for (var c = 0; c < r.length; c++) i(c, r[c]);
          });
        }),
        (c.allSettled = t),
        (c.resolve = function (e) {
          return e && "object" == typeof e && e.constructor === c
            ? e
            : new c(function (n) {
                n(e);
              });
        }),
        (c.reject = function (e) {
          return new c(function (n, t) {
            t(e);
          });
        }),
        (c.race = function (e) {
          return new c(function (n, t) {
            if (!o(e)) return t(new TypeError("Promise.race accepts an array"));
            for (var r = 0, a = e.length; r < a; r++)
              c.resolve(e[r]).then(n, t);
          });
        }),
        (c._immediateFn =
          ("function" == typeof setImmediate &&
            function (e) {
              setImmediate(e);
            }) ||
          function (e) {
            r(e, 0);
          }),
        (c._unhandledRejectionFn = function (e) {
          "undefined" != typeof console && console;
        });
      var f = c,
        h = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== i.g) return i.g;
          throw new Error("unable to locate global object");
        })();
      "function" != typeof h.Promise
        ? (h.Promise = f)
        : (h.Promise.prototype.finally || (h.Promise.prototype.finally = n),
          h.Promise.allSettled || (h.Promise.allSettled = t));
      i(94919), i(73420), i(82016), i(84122), i(97759);
      var _ = [];
      function g(e) {
        try {
          var n = "sendBeacon" in window.navigator,
            t = !1;
          n && (t = window.navigator.sendBeacon(e.url, JSON.stringify(e.data))),
            t || fetch(e.url, { method: "POST", body: JSON.stringify(e.data) });
        } catch (e) {}
      }
      function v(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function y(e) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          y(e)
        );
      }
      window.setInterval(function () {
        !(function () {
          if (_.length) {
            var e = {
              context: {
                platform: window.CheckoutBridge ? "mobile_sdk" : "browser",
              },
              addons: [
                {
                  name: "ua_parser",
                  input_key: "user_agent",
                  output_key: "user_agent_parsed",
                },
              ],
              events: _.splice(0, 5),
            };
            g({
              url: "https://lumberjack.razorpay.com/v1/track",
              data: {
                key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                data: window.encodeURIComponent(
                  window.btoa(
                    window.unescape(
                      window.encodeURIComponent(JSON.stringify(e))
                    )
                  )
                ),
              },
            });
          }
        })();
      }, 1e3);
      var b = "behav",
        O = "render",
        w = "metric",
        x = "debug",
        S = "integration",
        E = "api",
        k = "error";
      function P(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function R(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function C(e, n, t) {
        return (
          n && R(e.prototype, n),
          t && R(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var D = {
        _storage: {},
        setItem: function (e, n) {
          this._storage[e] = n;
        },
        getItem: function (e) {
          return this._storage[e] || null;
        },
        removeItem: function (e) {
          delete this._storage[e];
        },
      };
      var A = (function () {
        var e = Date.now();
        try {
          i.g.localStorage.setItem("_storage", e);
          var n = i.g.localStorage.getItem("_storage");
          return (
            i.g.localStorage.removeItem("_storage"),
            e !== parseInt(String(n)) ? D : i.g.localStorage
          );
        } catch (e) {
          return D;
        }
      })();
      function j(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function T(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? j(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var M = "rzp_checkout_exp",
        I = (function () {
          function e() {
            var n = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            P(this, e),
              v(this, "getExperiment", function (e) {
                return e ? n.experiments[e] : null;
              }),
              v(this, "getAllActiveExperimentsName", function () {
                return Object.keys(n.experiments);
              }),
              v(this, "getRegisteredExperiments", function () {
                return n.experiments;
              }),
              v(this, "clearOldExperiments", function () {
                var t = e.getExperimentsFromStorage(),
                  r = n.getAllActiveExperimentsName().reduce(function (e, n) {
                    return void 0 !== t[n] && (e[n] = t[n]), e;
                  }, {});
                e.setExperimentsInStorage(r);
              }),
              v(this, "create", function (e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = r.evaluatorArg,
                  a = r.overrideFn;
                function i() {
                  return 1 === this.getSegmentOrCreate(e, o, a);
                }
                var c = t;
                if (
                  ("number" == typeof t &&
                    (c = function () {
                      return Math.random() < t ? 0 : 1;
                    }),
                  "function" != typeof c)
                )
                  throw new Error("evaluatorFn must be a function or number");
                var u = { name: e, enabled: i.bind(n), evaluator: c };
                return (
                  "number" == typeof t && (u.rolloutValue = t),
                  n.register(v({}, e, u)),
                  u
                );
              }),
              (this.experiments = t);
          }
          return (
            C(
              e,
              [
                {
                  key: "setSegment",
                  value: function (n, t, r) {
                    var o = this.getExperiment(n);
                    if (o) {
                      var a = ("function" == typeof r ? r : o.evaluator)(t),
                        i = e.getExperimentsFromStorage();
                      return (i[o.name] = a), e.setExperimentsInStorage(i), a;
                    }
                  },
                },
                {
                  key: "getSegment",
                  value: function (n) {
                    return e.getExperimentsFromStorage()[n];
                  },
                },
                {
                  key: "getSegmentOrCreate",
                  value: function (e, n, t) {
                    var r = this.getSegment(e);
                    return "function" == typeof t
                      ? t(n)
                      : void 0 === r
                      ? this.setSegment(e, n, t)
                      : r;
                  },
                },
                {
                  key: "register",
                  value: function (e) {
                    this.experiments = T(T({}, this.experiments), e);
                  },
                },
              ],
              [
                {
                  key: "setExperimentsInStorage",
                  value: function (e) {
                    if (e && "object" === y(e))
                      try {
                        A.setItem(M, JSON.stringify(e));
                      } catch (e) {
                        return;
                      }
                  },
                },
                {
                  key: "getExperimentsFromStorage",
                  value: function () {
                    var e;
                    try {
                      e = JSON.parse(A.getItem(M));
                    } catch (e) {}
                    return e && "object" === y(e) && !Array.isArray(e) ? e : {};
                  },
                },
              ]
            ),
            e
          );
        })(),
        N = new I({}),
        L =
          (N.create,
          N.clearOldExperiments,
          N.getRegisteredExperiments,
          function () {
            return I.getExperimentsFromStorage();
          }),
        $ = [
          "rzp_test_mZcDnA8WJMFQQD",
          "rzp_live_ENneAQv5t7kTEQ",
          "rzp_test_kD8QgcxVGzYSOU",
          "rzp_live_alEMh9FVT4XpwM",
        ],
        B = (function () {
          function e() {
            var n = this;
            P(this, e),
              v(this, "instance", null),
              v(this, "preferenceResponse", {}),
              v(this, "isEmbedded", !1),
              v(this, "subscription", []),
              v(this, "updateInstance", function (e) {
                n.razorpayInstance = e;
              }),
              v(this, "triggerInstanceMethod", function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                if (n.instance) return n.instance[e].apply(n.instance, t);
              }),
              v(this, "set", function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return n.triggerInstanceMethod("set", t);
              }),
              v(this, "subscribe", function (e) {
                n.subscription.push(e);
              }),
              v(this, "get", function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return t.length
                  ? n.triggerInstanceMethod("get", t)
                  : n.instance;
              }),
              v(this, "getMerchantOption", function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = n.triggerInstanceMethod("get") || {};
                return e ? t[e] : t;
              }),
              v(this, "isIRCTC", function () {
                return $.indexOf(n.get("key")) >= 0;
              }),
              v(this, "getCardFeatures", function (e) {
                return n.instance.getCardFeatures(e);
              }),
              (this.subscription = []);
          }
          return (
            C(e, [
              {
                key: "razorpayInstance",
                get: function () {
                  return this.instance;
                },
                set: function (e) {
                  (this.instance = e),
                    (this.preferenceResponse = e.preferences),
                    this.subscription.forEach(function (n) {
                      "function" == typeof n && n(e);
                    }),
                    this.isIRCTC() && this.set("theme.image_frame", !1);
                },
              },
              {
                key: "preferences",
                get: function () {
                  return this.preferenceResponse;
                },
              },
            ]),
            e
          );
        })(),
        z = new B();
      function K(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function F(e, n) {
        if (e) {
          if ("string" == typeof e) return K(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? K(e, n)
              : void 0
          );
        }
      }
      function U(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                a = [],
                i = !0,
                c = !1;
              try {
                for (
                  t = t.call(e);
                  !(i = (r = t.next()).done) &&
                  (a.push(r.value), !n || a.length !== n);
                  i = !0
                );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  i || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return a;
            }
          })(e, n) ||
          F(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function G(e, n) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return H(e)
          ? ("string" == typeof n && (n = n.split(".")),
            n.reduce(function (e, n) {
              return e && void 0 !== e[n] ? e[n] : t;
            }, e))
          : e;
      }
      function H(e) {
        return null !== e && "object" === y(e);
      }
      var Z,
        Y,
        V = function (e, n) {
          return !!H(e) && n in e;
        },
        W = function (e) {
          return !Object.keys(e || {}).length;
        },
        J = function e() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r = {};
          return (
            Object.entries(n).forEach(function (n) {
              var o = U(n, 2),
                a = o[0],
                i = o[1],
                c = t ? "".concat(t, ".").concat(a) : a;
              i && "object" === y(i) ? Object.assign(r, e(i, c)) : (r[c] = i);
            }),
            r
          );
        },
        q = function () {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = ".",
            r = {};
          return (
            Object.entries(n).forEach(function (n) {
              var o = U(n, 2),
                a = o[0],
                i = o[1],
                c = (a = a.replace(/\[([^[\]]+)\]/g, "".concat(t, "$1"))).split(
                  t
                ),
                u = r;
              c.forEach(function (n, t) {
                t < c.length - 1
                  ? (u[n] || (u[n] = {}), (e = u[n]), (u = e))
                  : (u[n] = i);
              });
            }),
            r
          );
        },
        Q = function (e) {
          return H(e) ? JSON.parse(JSON.stringify(e)) : e;
        },
        X = function (e, n) {
          H(e) &&
            Object.keys(e).forEach(function (t) {
              return n(e[t], t, e);
            });
        },
        ee = function (e) {
          try {
            return JSON.parse(e);
          } catch (e) {}
        },
        ne = {
          AED: {
            code: "784",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "د.إ",
            name: "Emirati Dirham",
          },
          ALL: {
            code: "008",
            denomination: 100,
            min_value: 221,
            min_auth_value: 100,
            symbol: "Lek",
            name: "Albanian Lek",
          },
          AMD: {
            code: "051",
            denomination: 100,
            min_value: 975,
            min_auth_value: 100,
            symbol: "֏",
            name: "Armenian Dram",
          },
          ARS: {
            code: "032",
            denomination: 100,
            min_value: 80,
            min_auth_value: 100,
            symbol: "ARS",
            name: "Argentine Peso",
          },
          AUD: {
            code: "036",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "A$",
            name: "Australian Dollar",
          },
          AWG: {
            code: "533",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "Afl.",
            name: "Aruban or Dutch Guilder",
          },
          BBD: {
            code: "052",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "Bds$",
            name: "Barbadian or Bajan Dollar",
          },
          BDT: {
            code: "050",
            denomination: 100,
            min_value: 168,
            min_auth_value: 100,
            symbol: "৳",
            name: "Bangladeshi Taka",
          },
          BMD: {
            code: "060",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "$",
            name: "Bermudian Dollar",
          },
          BND: {
            code: "096",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "BND",
            name: "Bruneian Dollar",
          },
          BOB: {
            code: "068",
            denomination: 100,
            min_value: 14,
            min_auth_value: 100,
            symbol: "Bs",
            name: "Bolivian Bolíviano",
          },
          BSD: {
            code: "044",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "BSD",
            name: "Bahamian Dollar",
          },
          BWP: {
            code: "072",
            denomination: 100,
            min_value: 22,
            min_auth_value: 100,
            symbol: "P",
            name: "Botswana Pula",
          },
          BZD: {
            code: "084",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "BZ$",
            name: "Belizean Dollar",
          },
          CAD: {
            code: "124",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "C$",
            name: "Canadian Dollar",
          },
          CHF: {
            code: "756",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "CHf",
            name: "Swiss Franc",
          },
          CNY: {
            code: "156",
            denomination: 100,
            min_value: 14,
            min_auth_value: 100,
            symbol: "¥",
            name: "Chinese Yuan Renminbi",
          },
          COP: {
            code: "170",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "COL$",
            name: "Colombian Peso",
          },
          CRC: {
            code: "188",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "₡",
            name: "Costa Rican Colon",
          },
          CUP: {
            code: "192",
            denomination: 100,
            min_value: 53,
            min_auth_value: 100,
            symbol: "$MN",
            name: "Cuban Peso",
          },
          CZK: {
            code: "203",
            denomination: 100,
            min_value: 46,
            min_auth_value: 100,
            symbol: "Kč",
            name: "Czech Koruna",
          },
          DKK: {
            code: "208",
            denomination: 100,
            min_value: 250,
            min_auth_value: 100,
            symbol: "DKK",
            name: "Danish Krone",
          },
          DOP: {
            code: "214",
            denomination: 100,
            min_value: 102,
            min_auth_value: 100,
            symbol: "RD$",
            name: "Dominican Peso",
          },
          DZD: {
            code: "012",
            denomination: 100,
            min_value: 239,
            min_auth_value: 100,
            symbol: "د.ج",
            name: "Algerian Dinar",
          },
          EGP: {
            code: "818",
            denomination: 100,
            min_value: 35,
            min_auth_value: 100,
            symbol: "E£",
            name: "Egyptian Pound",
          },
          ETB: {
            code: "230",
            denomination: 100,
            min_value: 57,
            min_auth_value: 100,
            symbol: "ብር",
            name: "Ethiopian Birr",
          },
          EUR: {
            code: "978",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "€",
            name: "Euro",
          },
          FJD: {
            code: "242",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "FJ$",
            name: "Fijian Dollar",
          },
          GBP: {
            code: "826",
            denomination: 100,
            min_value: 30,
            min_auth_value: 100,
            symbol: "£",
            name: "British Pound",
          },
          GIP: {
            code: "292",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "GIP",
            name: "Gibraltar Pound",
          },
          GMD: {
            code: "270",
            denomination: 100,
            min_value: 100,
            min_auth_value: 100,
            symbol: "D",
            name: "Gambian Dalasi",
          },
          GTQ: {
            code: "320",
            denomination: 100,
            min_value: 16,
            min_auth_value: 100,
            symbol: "Q",
            name: "Guatemalan Quetzal",
          },
          GYD: {
            code: "328",
            denomination: 100,
            min_value: 418,
            min_auth_value: 100,
            symbol: "G$",
            name: "Guyanese Dollar",
          },
          HKD: {
            code: "344",
            denomination: 100,
            min_value: 400,
            min_auth_value: 100,
            symbol: "HK$",
            name: "Hong Kong Dollar",
          },
          HNL: {
            code: "340",
            denomination: 100,
            min_value: 49,
            min_auth_value: 100,
            symbol: "HNL",
            name: "Honduran Lempira",
          },
          HRK: {
            code: "191",
            denomination: 100,
            min_value: 14,
            min_auth_value: 100,
            symbol: "kn",
            name: "Croatian Kuna",
          },
          HTG: {
            code: "332",
            denomination: 100,
            min_value: 167,
            min_auth_value: 100,
            symbol: "G",
            name: "Haitian Gourde",
          },
          HUF: {
            code: "348",
            denomination: 100,
            min_value: 555,
            min_auth_value: 100,
            symbol: "Ft",
            name: "Hungarian Forint",
          },
          IDR: {
            code: "360",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "Rp",
            name: "Indonesian Rupiah",
          },
          ILS: {
            code: "376",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "₪",
            name: "Israeli Shekel",
          },
          INR: {
            code: "356",
            denomination: 100,
            min_value: 100,
            min_auth_value: 100,
            symbol: "₹",
            name: "Indian Rupee",
          },
          JMD: {
            code: "388",
            denomination: 100,
            min_value: 250,
            min_auth_value: 100,
            symbol: "J$",
            name: "Jamaican Dollar",
          },
          KES: {
            code: "404",
            denomination: 100,
            min_value: 201,
            min_auth_value: 100,
            symbol: "Ksh",
            name: "Kenyan Shilling",
          },
          KGS: {
            code: "417",
            denomination: 100,
            min_value: 140,
            min_auth_value: 100,
            symbol: "Лв",
            name: "Kyrgyzstani Som",
          },
          KHR: {
            code: "116",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "៛",
            name: "Cambodian Riel",
          },
          KYD: {
            code: "136",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "CI$",
            name: "Caymanian Dollar",
          },
          KZT: {
            code: "398",
            denomination: 100,
            min_value: 759,
            min_auth_value: 100,
            symbol: "₸",
            name: "Kazakhstani Tenge",
          },
          LAK: {
            code: "418",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "₭",
            name: "Lao Kip",
          },
          LBP: {
            code: "422",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "&#1604;.&#1604;.",
            name: "Lebanese Pound",
          },
          LKR: {
            code: "144",
            denomination: 100,
            min_value: 358,
            min_auth_value: 100,
            symbol: "රු",
            name: "Sri Lankan Rupee",
          },
          LRD: {
            code: "430",
            denomination: 100,
            min_value: 325,
            min_auth_value: 100,
            symbol: "L$",
            name: "Liberian Dollar",
          },
          LSL: {
            code: "426",
            denomination: 100,
            min_value: 29,
            min_auth_value: 100,
            symbol: "LSL",
            name: "Basotho Loti",
          },
          MAD: {
            code: "504",
            denomination: 100,
            min_value: 20,
            min_auth_value: 100,
            symbol: "د.م.",
            name: "Moroccan Dirham",
          },
          MDL: {
            code: "498",
            denomination: 100,
            min_value: 35,
            min_auth_value: 100,
            symbol: "MDL",
            name: "Moldovan Leu",
          },
          MKD: {
            code: "807",
            denomination: 100,
            min_value: 109,
            min_auth_value: 100,
            symbol: "ден",
            name: "Macedonian Denar",
          },
          MMK: {
            code: "104",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "MMK",
            name: "Burmese Kyat",
          },
          MNT: {
            code: "496",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "₮",
            name: "Mongolian Tughrik",
          },
          MOP: {
            code: "446",
            denomination: 100,
            min_value: 17,
            min_auth_value: 100,
            symbol: "MOP$",
            name: "Macau Pataca",
          },
          MUR: {
            code: "480",
            denomination: 100,
            min_value: 70,
            min_auth_value: 100,
            symbol: "₨",
            name: "Mauritian Rupee",
          },
          MVR: {
            code: "462",
            denomination: 100,
            min_value: 31,
            min_auth_value: 100,
            symbol: "Rf",
            name: "Maldivian Rufiyaa",
          },
          MWK: {
            code: "454",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "MK",
            name: "Malawian Kwacha",
          },
          MXN: {
            code: "484",
            denomination: 100,
            min_value: 39,
            min_auth_value: 100,
            symbol: "Mex$",
            name: "Mexican Peso",
          },
          MYR: {
            code: "458",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "RM",
            name: "Malaysian Ringgit",
          },
          NAD: {
            code: "516",
            denomination: 100,
            min_value: 29,
            min_auth_value: 100,
            symbol: "N$",
            name: "Namibian Dollar",
          },
          NGN: {
            code: "566",
            denomination: 100,
            min_value: 723,
            min_auth_value: 100,
            symbol: "₦",
            name: "Nigerian Naira",
          },
          NIO: {
            code: "558",
            denomination: 100,
            min_value: 66,
            min_auth_value: 100,
            symbol: "NIO",
            name: "Nicaraguan Cordoba",
          },
          NOK: {
            code: "578",
            denomination: 100,
            min_value: 300,
            min_auth_value: 100,
            symbol: "NOK",
            name: "Norwegian Krone",
          },
          NPR: {
            code: "524",
            denomination: 100,
            min_value: 221,
            min_auth_value: 100,
            symbol: "रू",
            name: "Nepalese Rupee",
          },
          NZD: {
            code: "554",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "NZ$",
            name: "New Zealand Dollar",
          },
          PEN: {
            code: "604",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "S/",
            name: "Peruvian Sol",
          },
          PGK: {
            code: "598",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "PGK",
            name: "Papua New Guinean Kina",
          },
          PHP: {
            code: "608",
            denomination: 100,
            min_value: 106,
            min_auth_value: 100,
            symbol: "₱",
            name: "Philippine Peso",
          },
          PKR: {
            code: "586",
            denomination: 100,
            min_value: 227,
            min_auth_value: 100,
            symbol: "₨",
            name: "Pakistani Rupee",
          },
          QAR: {
            code: "634",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "QR",
            name: "Qatari Riyal",
          },
          RUB: {
            code: "643",
            denomination: 100,
            min_value: 130,
            min_auth_value: 100,
            symbol: "₽",
            name: "Russian Ruble",
          },
          SAR: {
            code: "682",
            denomination: 100,
            min_value: 10,
            min_auth_value: 100,
            symbol: "SR",
            name: "Saudi Arabian Riyal",
          },
          SCR: {
            code: "690",
            denomination: 100,
            min_value: 28,
            min_auth_value: 100,
            symbol: "SRe",
            name: "Seychellois Rupee",
          },
          SEK: {
            code: "752",
            denomination: 100,
            min_value: 300,
            min_auth_value: 100,
            symbol: "SEK",
            name: "Swedish Krona",
          },
          SGD: {
            code: "702",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "S$",
            name: "Singapore Dollar",
          },
          SLL: {
            code: "694",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "Le",
            name: "Sierra Leonean Leone",
          },
          SOS: {
            code: "706",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "Sh.so.",
            name: "Somali Shilling",
          },
          SSP: {
            code: "728",
            denomination: 100,
            min_value: 100,
            min_auth_value: 100,
            symbol: "SS£",
            name: "South Sudanese Pound",
          },
          SVC: {
            code: "222",
            denomination: 100,
            min_value: 18,
            min_auth_value: 100,
            symbol: "₡",
            name: "Salvadoran Colon",
          },
          SZL: {
            code: "748",
            denomination: 100,
            min_value: 29,
            min_auth_value: 100,
            symbol: "E",
            name: "Swazi Lilangeni",
          },
          THB: {
            code: "764",
            denomination: 100,
            min_value: 64,
            min_auth_value: 100,
            symbol: "฿",
            name: "Thai Baht",
          },
          TTD: {
            code: "780",
            denomination: 100,
            min_value: 14,
            min_auth_value: 100,
            symbol: "TT$",
            name: "Trinidadian Dollar",
          },
          TZS: {
            code: "834",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "Sh",
            name: "Tanzanian Shilling",
          },
          USD: {
            code: "840",
            denomination: 100,
            min_value: 50,
            min_auth_value: 100,
            symbol: "$",
            name: "US Dollar",
          },
          UYU: {
            code: "858",
            denomination: 100,
            min_value: 67,
            min_auth_value: 100,
            symbol: "$U",
            name: "Uruguayan Peso",
          },
          UZS: {
            code: "860",
            denomination: 100,
            min_value: 1e3,
            min_auth_value: 100,
            symbol: "so'm",
            name: "Uzbekistani Som",
          },
          YER: {
            code: "886",
            denomination: 100,
            min_value: 501,
            min_auth_value: 100,
            symbol: "﷼",
            name: "Yemeni Rial",
          },
          ZAR: {
            code: "710",
            denomination: 100,
            min_value: 29,
            min_auth_value: 100,
            symbol: "R",
            name: "South African Rand",
          },
        },
        te = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ".";
          return function (t) {
            for (var r = n, o = 0; o < e; o++) r += "0";
            return t.replace(r, "");
          };
        },
        re = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ",";
          return e.replace(/\./, n);
        },
        oe = function (e, n) {
          return String(e).replace(
            new RegExp("(.{1,2})(?=.(..)+(\\..{".concat(n, "})$)"), "g"),
            "$1,"
          );
        },
        ae = {
          three: function (e, n) {
            var t = String(e).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{".concat(n, "})$)"), "g"),
              "$1,"
            );
            return te(n)(t);
          },
          threecommadecimal: function (e, n) {
            var t = re(String(e)).replace(
              new RegExp("(.{1,3})(?=(...)+(\\,.{".concat(n, "})$)"), "g"),
              "$1."
            );
            return te(n, ",")(t);
          },
          threespaceseparator: function (e, n) {
            var t = String(e).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{".concat(n, "})$)"), "g"),
              "$1 "
            );
            return te(n)(t);
          },
          threespacecommadecimal: function (e, n) {
            var t = re(String(e)).replace(
              new RegExp("(.{1,3})(?=(...)+(\\,.{".concat(n, "})$)"), "g"),
              "$1 "
            );
            return te(n, ",")(t);
          },
          szl: function (e, n) {
            var t = String(e).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{".concat(n, "})$)"), "g"),
              "$1, "
            );
            return te(n)(t);
          },
          chf: function (e, n) {
            var t = String(e).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{".concat(n, "})$)"), "g"),
              "$1'"
            );
            return te(n)(t);
          },
          inr: function (e, n) {
            var t = oe(e, n);
            return te(n)(t);
          },
          myr: function (e, n) {
            return oe(e, n);
          },
          none: function (e) {
            return String(e);
          },
        },
        ie = {
          default: { decimals: 2, format: ae.three, minimum: 100 },
          AED: { minor: "fil", minimum: 10 },
          AFN: { minor: "pul" },
          ALL: { minor: "qindarka", minimum: 221 },
          AMD: { minor: "luma", minimum: 975 },
          ANG: { minor: "cent" },
          AOA: { minor: "lwei" },
          ARS: { format: ae.threecommadecimal, minor: "centavo", minimum: 80 },
          AUD: { format: ae.threespaceseparator, minimum: 50, minor: "cent" },
          AWG: { minor: "cent", minimum: 10 },
          AZN: { minor: "qäpik" },
          BAM: { minor: "fenning" },
          BBD: { minor: "cent", minimum: 10 },
          BDT: { minor: "paisa", minimum: 168 },
          BGN: { minor: "stotinki" },
          BHD: { dir: "rtl", decimals: 3, minor: "fils" },
          BIF: { decimals: 0, major: "franc", minor: "centime" },
          BMD: { minor: "cent", minimum: 10 },
          BND: { minor: "sen", minimum: 10 },
          BOB: { minor: "centavo", minimum: 14 },
          BRL: { format: ae.threecommadecimal, minimum: 50, minor: "centavo" },
          BSD: { minor: "cent", minimum: 10 },
          BTN: { minor: "chetrum" },
          BWP: { minor: "thebe", minimum: 22 },
          BYR: { decimals: 0, major: "ruble" },
          BZD: { minor: "cent", minimum: 10 },
          CAD: { minimum: 50, minor: "cent" },
          CDF: { minor: "centime" },
          CHF: { format: ae.chf, minimum: 50, minor: "rappen" },
          CLP: {
            decimals: 0,
            format: ae.none,
            major: "peso",
            minor: "centavo",
          },
          CNY: { minor: "jiao", minimum: 14 },
          COP: { format: ae.threecommadecimal, minor: "centavo", minimum: 1e3 },
          CRC: { format: ae.threecommadecimal, minor: "centimo", minimum: 1e3 },
          CUC: { minor: "centavo" },
          CUP: { minor: "centavo", minimum: 53 },
          CVE: { minor: "centavo" },
          CZK: { format: ae.threecommadecimal, minor: "haler", minimum: 46 },
          DJF: { decimals: 0, major: "franc", minor: "centime" },
          DKK: { minimum: 250, minor: "øre" },
          DOP: { minor: "centavo", minimum: 102 },
          DZD: { minor: "centime", minimum: 239 },
          EGP: { minor: "piaster", minimum: 35 },
          ERN: { minor: "cent" },
          ETB: { minor: "cent", minimum: 57 },
          EUR: { minimum: 50, minor: "cent" },
          FJD: { minor: "cent", minimum: 10 },
          FKP: { minor: "pence" },
          GBP: { minimum: 30, minor: "pence" },
          GEL: { minor: "tetri" },
          GHS: { minor: "pesewas", minimum: 3 },
          GIP: { minor: "pence", minimum: 10 },
          GMD: { minor: "butut" },
          GTQ: { minor: "centavo", minimum: 16 },
          GYD: { minor: "cent", minimum: 418 },
          HKD: { minimum: 400, minor: "cent" },
          HNL: { minor: "centavo", minimum: 49 },
          HRK: { format: ae.threecommadecimal, minor: "lipa", minimum: 14 },
          HTG: { minor: "centime", minimum: 167 },
          HUF: { decimals: 0, format: ae.none, major: "forint", minimum: 555 },
          IDR: { format: ae.threecommadecimal, minor: "sen", minimum: 1e3 },
          ILS: { minor: "agorot", minimum: 10 },
          INR: { format: ae.inr, minor: "paise" },
          IQD: { decimals: 3, minor: "fil" },
          IRR: { minor: "rials" },
          ISK: { decimals: 0, format: ae.none, major: "króna", minor: "aurar" },
          JMD: { minor: "cent", minimum: 250 },
          JOD: { decimals: 3, minor: "fil" },
          JPY: { decimals: 0, minimum: 50, minor: "sen" },
          KES: { minor: "cent", minimum: 201 },
          KGS: { minor: "tyyn", minimum: 140 },
          KHR: { minor: "sen", minimum: 1e3 },
          KMF: { decimals: 0, major: "franc", minor: "centime" },
          KPW: { minor: "chon" },
          KRW: { decimals: 0, major: "won", minor: "chon" },
          KWD: { dir: "rtl", decimals: 3, minor: "fil" },
          KYD: { minor: "cent", minimum: 10 },
          KZT: { minor: "tiyn", minimum: 759 },
          LAK: { minor: "at", minimum: 1e3 },
          LBP: {
            format: ae.threespaceseparator,
            minor: "piastre",
            minimum: 1e3,
          },
          LKR: { minor: "cent", minimum: 358 },
          LRD: { minor: "cent", minimum: 325 },
          LSL: { minor: "lisente", minimum: 29 },
          LTL: { format: ae.threespacecommadecimal, minor: "centu" },
          LVL: { minor: "santim" },
          LYD: { decimals: 3, minor: "dirham" },
          MAD: { minor: "centime", minimum: 20 },
          MDL: { minor: "ban", minimum: 35 },
          MGA: { decimals: 0, major: "ariary" },
          MKD: { minor: "deni" },
          MMK: { minor: "pya", minimum: 1e3 },
          MNT: { minor: "mongo", minimum: 1e3 },
          MOP: { minor: "avo", minimum: 17 },
          MRO: { minor: "khoum" },
          MUR: { minor: "cent", minimum: 70 },
          MVR: { minor: "lari", minimum: 31 },
          MWK: { minor: "tambala", minimum: 1e3 },
          MXN: { minor: "centavo", minimum: 39 },
          MYR: { format: ae.myr, minor: "sen", minimum: 10 },
          MZN: { decimals: 0, major: "metical" },
          NAD: { minor: "cent", minimum: 29 },
          NGN: { minor: "kobo", minimum: 723 },
          NIO: { minor: "centavo", minimum: 66 },
          NOK: { format: ae.threecommadecimal, minimum: 300, minor: "øre" },
          NPR: { minor: "paise", minimum: 221 },
          NZD: { minimum: 50, minor: "cent" },
          OMR: { dir: "rtl", minor: "baiza", decimals: 3 },
          PAB: { minor: "centesimo" },
          PEN: { minor: "centimo", minimum: 10 },
          PGK: { minor: "toea", minimum: 10 },
          PHP: { minor: "centavo", minimum: 106 },
          PKR: { minor: "paisa", minimum: 227 },
          PLN: { format: ae.threespacecommadecimal, minor: "grosz" },
          PYG: { decimals: 0, major: "guarani", minor: "centimo" },
          QAR: { minor: "dirham", minimum: 10 },
          RON: { format: ae.threecommadecimal, minor: "bani" },
          RUB: { format: ae.threecommadecimal, minor: "kopeck", minimum: 130 },
          RWF: { decimals: 0, major: "franc", minor: "centime" },
          SAR: { minor: "halalat", minimum: 10 },
          SBD: { minor: "cent" },
          SCR: { minor: "cent", minimum: 28 },
          SEK: {
            format: ae.threespacecommadecimal,
            minimum: 300,
            minor: "öre",
          },
          SGD: { minimum: 50, minor: "cent" },
          SHP: { minor: "new pence" },
          SLL: { minor: "cent", minimum: 1e3 },
          SOS: { minor: "centesimi", minimum: 1e3 },
          SRD: { minor: "cent" },
          STD: { minor: "centimo" },
          SSP: { minor: "piaster" },
          SVC: { minor: "centavo", minimum: 18 },
          SYP: { minor: "piaster" },
          SZL: { format: ae.szl, minor: "cent", minimum: 29 },
          THB: { minor: "satang", minimum: 64 },
          TJS: { minor: "diram" },
          TMT: { minor: "tenga" },
          TND: { decimals: 3, minor: "millime" },
          TOP: { minor: "seniti" },
          TRY: { minor: "kurus" },
          TTD: { minor: "cent", minimum: 14 },
          TWD: { minor: "cent" },
          TZS: { minor: "cent", minimum: 1e3 },
          UAH: { format: ae.threespacecommadecimal, minor: "kopiyka" },
          UGX: { minor: "cent" },
          USD: { minimum: 50, minor: "cent" },
          UYU: { format: ae.threecommadecimal, minor: "centé", minimum: 67 },
          UZS: { minor: "tiyin", minimum: 1e3 },
          VND: { format: ae.none, minor: "hao,xu" },
          VUV: { decimals: 0, major: "vatu", minor: "centime" },
          WST: { minor: "sene" },
          XAF: { decimals: 0, major: "franc", minor: "centime" },
          XCD: { minor: "cent" },
          XPF: { decimals: 0, major: "franc", minor: "centime" },
          YER: { minor: "fil", minimum: 501 },
          ZAR: { format: ae.threespaceseparator, minor: "cent", minimum: 29 },
          ZMK: { minor: "ngwee" },
        },
        ce = function (e) {
          return ie[e] ? ie[e] : ie.default;
        },
        ue = [
          "AED",
          "ALL",
          "AMD",
          "ARS",
          "AUD",
          "AWG",
          "BBD",
          "BDT",
          "BHD",
          "BMD",
          "BND",
          "BOB",
          "BSD",
          "BWP",
          "BZD",
          "CAD",
          "CHF",
          "CNY",
          "COP",
          "CRC",
          "CUP",
          "CZK",
          "DKK",
          "DOP",
          "DZD",
          "EGP",
          "ETB",
          "EUR",
          "FJD",
          "GBP",
          "GHS",
          "GIP",
          "GMD",
          "GTQ",
          "GYD",
          "HKD",
          "HNL",
          "HRK",
          "HTG",
          "HUF",
          "IDR",
          "ILS",
          "INR",
          "JMD",
          "KES",
          "KGS",
          "KHR",
          "KWD",
          "KYD",
          "KZT",
          "LAK",
          "LBP",
          "LKR",
          "LRD",
          "LSL",
          "MAD",
          "MDL",
          "MKD",
          "MMK",
          "MNT",
          "MOP",
          "MUR",
          "MVR",
          "MWK",
          "MXN",
          "MYR",
          "NAD",
          "NGN",
          "NIO",
          "NOK",
          "NPR",
          "NZD",
          "OMR",
          "PEN",
          "PGK",
          "PHP",
          "PKR",
          "QAR",
          "RUB",
          "SAR",
          "SCR",
          "SEK",
          "SGD",
          "SLL",
          "SOS",
          "SSP",
          "SVC",
          "SZL",
          "THB",
          "TTD",
          "TZS",
          "USD",
          "UYU",
          "UZS",
          "YER",
          "ZAR",
        ],
        le = {
          AED: "د.إ",
          AFN: "&#x60b;",
          ALL: "Lek",
          AMD: "֏",
          ANG: "NAƒ",
          AOA: "Kz",
          ARS: "ARS",
          AUD: "A$",
          AWG: "Afl.",
          AZN: "ман",
          BAM: "KM",
          BBD: "Bds$",
          BDT: "৳",
          BGN: "лв",
          BHD: "د.ب",
          BIF: "FBu",
          BMD: "$",
          BND: "BND",
          BOB: "Bs.",
          BRL: "R$",
          BSD: "BSD",
          BTN: "Nu.",
          BWP: "P",
          BYR: "Br",
          BZD: "BZ$",
          CAD: "C$",
          CDF: "FC",
          CHF: "CHf",
          CLP: "CLP$",
          CNY: "¥",
          COP: "COL$",
          CRC: "₡",
          CUC: "&#x20b1;",
          CUP: "$MN",
          CVE: "Esc",
          CZK: "Kč",
          DJF: "Fdj",
          DKK: "DKK",
          DOP: "RD$",
          DZD: "د.ج",
          EGP: "E£",
          ERN: "Nfa",
          ETB: "ብር",
          EUR: "€",
          FJD: "FJ$",
          FKP: "FK&#163;",
          GBP: "£",
          GEL: "ლ",
          GHS: "&#x20b5;",
          GIP: "GIP",
          GMD: "D",
          GNF: "FG",
          GTQ: "Q",
          GYD: "G$",
          HKD: "HK$",
          HNL: "HNL",
          HRK: "kn",
          HTG: "G",
          HUF: "Ft",
          IDR: "Rp",
          ILS: "₪",
          INR: "₹",
          IQD: "ع.د",
          IRR: "&#xfdfc;",
          ISK: "ISK",
          JMD: "J$",
          JOD: "د.ا",
          JPY: "&#165;",
          KES: "Ksh",
          KGS: "Лв",
          KHR: "៛",
          KMF: "CF",
          KPW: "KPW",
          KRW: "KRW",
          KWD: "د.ك",
          KYD: "CI$",
          KZT: "₸",
          LAK: "₭",
          LBP: "&#1604;.&#1604;.",
          LD: "LD",
          LKR: "රු",
          LRD: "L$",
          LSL: "LSL",
          LTL: "Lt",
          LVL: "Ls",
          LYD: "LYD",
          MAD: "د.م.",
          MDL: "MDL",
          MGA: "Ar",
          MKD: "ден",
          MMK: "MMK",
          MNT: "₮",
          MOP: "MOP$",
          MRO: "UM",
          MUR: "₨",
          MVR: "Rf",
          MWK: "MK",
          MXN: "Mex$",
          MYR: "RM",
          MZN: "MT",
          NAD: "N$",
          NGN: "₦",
          NIO: "NIO",
          NOK: "NOK",
          NPR: "रू",
          NZD: "NZ$",
          OMR: "ر.ع.",
          PAB: "B/.",
          PEN: "S/",
          PGK: "PGK",
          PHP: "₱",
          PKR: "₨",
          PLN: "Zł",
          PYG: "&#x20b2;",
          QAR: "QR",
          RON: "RON",
          RSD: "Дин.",
          RUB: "₽",
          RWF: "RF",
          SAR: "SR",
          SBD: "SI$",
          SCR: "SRe",
          SDG: "&#163;Sd",
          SEK: "SEK",
          SFR: "Fr",
          SGD: "S$",
          SHP: "&#163;",
          SLL: "Le",
          SOS: "Sh.so.",
          SRD: "Sr$",
          SSP: "SS£",
          STD: "Db",
          SVC: "₡",
          SYP: "S&#163;",
          SZL: "E",
          THB: "฿",
          TJS: "SM",
          TMT: "M",
          TND: "د.ت",
          TOP: "T$",
          TRY: "TL",
          TTD: "TT$",
          TWD: "NT$",
          TZS: "Sh",
          UAH: "&#x20b4;",
          UGX: "USh",
          USD: "$",
          UYU: "$U",
          UZS: "so'm",
          VEF: "Bs",
          VND: "&#x20ab;",
          VUV: "VT",
          WST: "T",
          XAF: "FCFA",
          XCD: "EC$",
          XOF: "CFA",
          XPF: "CFPF",
          YER: "﷼",
          ZAR: "R",
          ZMK: "ZK",
          ZWL: "Z$",
        },
        se = function (e) {
          X(e, function (n, t) {
            (ie[t] = Object.assign({}, ie.default, ie[t] || {})),
              (ie[t].code = t),
              e[t] && (ie[t].symbol = e[t]);
          });
        };
      (Y = {}),
        X((Z = ne), function (e, n) {
          (ne[n] = e),
            (ie[n] = ie[n] || {}),
            Z[n].min_value && (ie[n].minimum = Z[n].min_value),
            Z[n].denomination &&
              (ie[n].decimals = Math.LOG10E * Math.log(Z[n].denomination)),
            (Y[n] = Z[n].symbol);
        }),
        Object.assign(le, Y),
        se(Y),
        se(le);
      ue.reduce(function (e, n) {
        return (e[n] = le[n]), e;
      }, {});
      function de(e, n) {
        var t = ce(n),
          r = e / Math.pow(10, t.decimals);
        return t.format(r.toFixed(t.decimals), t.decimals);
      }
      function me(e, n) {
        var t =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return [le[n], de(e, n)].join(t ? " " : "");
      }
      function pe(e, n) {
        return e
          ? 0 === e.indexOf("experiments.") && void 0 !== fe(e)
            ? fe(e)
            : G(z.preferences, e, n)
          : z.preferences;
      }
      function fe(e) {
        return e ? z.get(e) : z.triggerInstanceMethod("get");
      }
      var he = function (e) {
        return function () {
          return fe(e);
        };
      };
      z.set, z.getMerchantOption, z.isIRCTC, z.getCardFeatures;
      he("callback_url");
      var _e = function () {
          return Boolean(fe("cart") || fe("shopify_cart"));
        },
        ge = function () {
          var e;
          return Boolean(
            ((null === (e = pe("order")) || void 0 === e
              ? void 0
              : e.line_items_total) ||
              _e()) &&
              pe("features.one_click_checkout")
          );
        };
      he("prefill.name"), he("prefill.card[number]"), he("prefill.vpa");
      var ve,
        ye = function () {
          return pe("invoice.order_id") || fe("order_id") || ve;
        };
      function be(e, n, t, r, o, a, i) {
        try {
          var c = e[a](i),
            u = c.value;
        } catch (e) {
          return void t(e);
        }
        c.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      var Oe = i(64687),
        we = i.n(Oe),
        xe = navigator.userAgent,
        Se = navigator.vendor;
      function Ee(e) {
        return e.test(xe);
      }
      function ke(e) {
        return e.test(Se);
      }
      var Pe = Ee(/MSIE |Trident\//),
        Re = Ee(/iPhone/),
        Ce = Re || Ee(/iPad/),
        De = Ee(/Android/),
        Ae = Ee(/iPad/),
        je = Ee(/Windows NT/),
        Te = Ee(/Linux/),
        Me = Ee(/Mac OS/),
        Ie =
          (Ee(/^((?!chrome|android).)*safari/i) || ke(/Apple/), Ee(/Firefox/)),
        Ne = Ee(/Chrome/) && ke(/Google Inc/),
        Le =
          (Ee(/; wv\) |Gecko\) Version\/[^ ]+ Chrome/),
          Ee(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
          -1 !== xe.indexOf(" Mi ") || xe.indexOf("MiuiBrowser/"),
          xe.indexOf(" UCBrowser/"),
          Ee(/Instagram/)),
        $e = (Ee(/SamsungBrowser/), Ee(/HeadlessChrome/)),
        Be = Ee(/FB_IAB/),
        ze = Ee(/FBAN/),
        Ke = Be || ze;
      var Fe =
          Ee(
            /; wv\) |Gecko\) Version\/[^ ]+ Chrome|Windows Phone|Opera Mini|UCBrowser|CriOS/
          ) ||
          Ke ||
          Le ||
          Ce ||
          Ee(/Android 4/),
        Ue = Ee(/iPhone/),
        Ge = xe.match(/Chrome\/(\d+)/);
      Ge && (Ge = parseInt(Ge[1], 10));
      var He = function (e) {
          var n;
          return (
            !i.g.matchMedia ||
            (null === (n = i.g.matchMedia(e)) || void 0 === n
              ? void 0
              : n.matches)
          );
        },
        Ze = function () {
          return He("(max-device-height: 485px),(max-device-width: 485px)");
        },
        Ye = (function () {
          var e,
            n =
              ((e = we().mark(function e() {
                return we().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!navigator.brave) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            navigator.brave.isBrave()
                          );
                        case 4:
                          return e.abrupt("return", e.sent);
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", !1)
                          );
                        case 10:
                          return e.abrupt("return", !1);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7]]
                );
              })),
              function () {
                var n = this,
                  t = arguments;
                return new Promise(function (r, o) {
                  var a = e.apply(n, t);
                  function i(e) {
                    be(a, r, o, i, c, "next", e);
                  }
                  function c(e) {
                    be(a, r, o, i, c, "throw", e);
                  }
                  i(void 0);
                });
              });
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        Ve =
          (Ee(/(Vivo|HeyTap|Realme|Oppo)Browser/),
          function () {
            return Re
              ? "iPhone"
              : Ae
              ? "iPad"
              : De
              ? "android"
              : Ze()
              ? "mobile"
              : "desktop";
          });
      var We = z,
        Je = function (e) {
          return function (n, t) {
            return arguments.length < 2
              ? function (t) {
                  return e.call(null, t, n);
                }
              : e.call(null, n, t);
          };
        },
        qe = function (e) {
          return function (n, t, r) {
            return arguments.length < 3
              ? function (r) {
                  return e.call(null, r, n, t);
                }
              : e.call(null, n, t, r);
          };
        };
      function Qe() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return function (e) {
          return function () {
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return n.every(function (e, n) {
              if (e(r[n])) return !0;
              i.g.dispatchEvent(
                new Pn("rzp_error", {
                  detail: new Error(
                    "wrong ".concat(n, "th argtype ").concat(r[n])
                  ),
                })
              );
            })
              ? e.apply(null, [].concat(r))
              : r[0];
          };
        };
      }
      var Xe = Je(function (e, n) {
          return y(e) === n;
        }),
        en = Xe("boolean"),
        nn = Xe("number"),
        tn = Xe("string"),
        rn = Xe("function"),
        on = Xe("object"),
        an = Array.isArray,
        cn =
          (Xe("undefined"),
          function (e) {
            return null === e;
          }),
        un = function (e) {
          return "[object RegExp]" === Object.prototype.toString.call(e);
        },
        ln = function (e) {
          return sn(e) && 1 === e.nodeType;
        },
        sn =
          (Boolean,
          function (e) {
            return !cn(e) && on(e);
          }),
        dn = Je(function (e, n) {
          return e && e[n];
        }),
        mn = dn("length"),
        pn = dn("prototype"),
        fn = Je(function (e, n) {
          return e instanceof n;
        }),
        hn = Date.now,
        _n = Math.random,
        gn = Math.floor,
        vn = function () {
          var e = hn();
          return function () {
            return hn() - e;
          };
        };
      function yn(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          t = { description: String(e) };
        return n && (t.field = n), t;
      }
      function bn(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return { error: yn(e, n) };
      }
      function On(e) {
        throw new Error(e);
      }
      var wn = function (e) {
        return /data:image\/[^;]+;base64/.test(e);
      };
      function xn(e, n) {
        var t = {};
        if (!sn(e)) return t;
        var r = null == n;
        return (
          Object.keys(e).forEach(function (o) {
            var a = e[o],
              i = r ? o : "".concat(n, "[").concat(o, "]");
            if ("object" === y(a)) {
              var c = xn(a, i);
              Object.keys(c).forEach(function (e) {
                t[e] = c[e];
              });
            } else t[i] = a;
          }),
          t
        );
      }
      function Sn(e) {
        var n = xn(e);
        return Object.keys(n)
          .map(function (e) {
            return ""
              .concat(encodeURIComponent(e), "=")
              .concat(encodeURIComponent(n[e]));
          })
          .join("&");
      }
      function En(e) {
        var n = {};
        return (
          e.split(/=|&/).forEach(function (e, t, r) {
            t % 2 && (n[r[t - 1]] = decodeURIComponent(e));
          }),
          n
        );
      }
      function kn(e, n) {
        var t,
          r = n;
        (sn(n) && (r = Sn(n)), r) &&
          ((e +=
            (null === (t = e) || void 0 === t ? void 0 : t.indexOf("?")) > 0
              ? "&"
              : "?"),
          (e += r));
        return e;
      }
      function Pn(e, n) {
        n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), t;
      }
      var Rn,
        Cn,
        Dn,
        An = i.g.Element,
        jn = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "div";
          return document.createElement(e || "div");
        },
        Tn = function (e) {
          return e.parentNode;
        },
        Mn = Qe(ln),
        In = Qe(ln, ln),
        Nn = Qe(ln, tn),
        Ln = Qe(ln, tn, function () {
          return !0;
        }),
        $n = Qe(ln, sn),
        Bn = Je(
          In(function (e, n) {
            return n.appendChild(e);
          })
        ),
        zn = Je(
          In(function (e, n) {
            return Bn(n, e), e;
          })
        ),
        Kn = Je(
          In(function (e, n) {
            var t = n.firstElementChild;
            return t ? n.insertBefore(e, t) : Bn(e, n), e;
          })
        ),
        Fn =
          (Je(
            In(function (e, n) {
              return Kn(n, e), e;
            })
          ),
          Mn(function (e) {
            var n = Tn(e);
            return n && n.removeChild(e), e;
          })),
        Un =
          (Mn(dn("selectionStart")),
          Mn(dn("selectionEnd")),
          Je(
            Qe(
              ln,
              nn
            )(function (e, n) {
              return (e.selectionStart = e.selectionEnd = n), e;
            })
          ),
          Mn(function (e) {
            return e.submit(), e;
          }),
          Je(
            Nn(function (e, n) {
              return (" " + e.className + " ").includes(" " + n + " ");
            })
          )),
        Gn = Je(
          Nn(function (e, n) {
            return (
              e.className
                ? Un(e, n) || (e.className += " " + n)
                : (e.className = n),
              e
            );
          })
        ),
        Hn = Je(
          Nn(function (e, n) {
            return (
              (n = (" " + e.className + " ")
                .replace(" " + n + " ", " ")
                .replace(/^ | $/g, "")),
              e.className !== n && (e.className = n),
              e
            );
          })
        ),
        Zn =
          (Je(
            Nn(function (e, n) {
              return Un(e, n) ? Hn(e, n) : Gn(e, n), e;
            })
          ),
          qe(
            Nn(function (e, n, t) {
              return t ? Gn(e, n) : Hn(e, n), e;
            })
          ),
          Je(
            Nn(function (e, n) {
              return e.getAttribute(n);
            })
          ),
          qe(
            Ln(function (e, n, t) {
              return e.setAttribute(n, t), e;
            })
          )),
        Yn = qe(
          Ln(function (e, n, t) {
            return (e.style[n] = t), e;
          })
        ),
        Vn = Je(
          $n(function (e, n) {
            return (
              X(n, function (n, t) {
                return Zn(e, t, n);
              }),
              e
            );
          })
        ),
        Wn = Je(
          $n(function (e, n) {
            return (
              X(n, function (n, t) {
                return Yn(e, t, n);
              }),
              e
            );
          })
        ),
        Jn = Je(
          Nn(function (e, n) {
            return (e.innerHTML = n), e;
          })
        ),
        qn = Je(
          Nn(function (e, n) {
            return Yn(e, "display", n);
          })
        ),
        Qn = (qn("none"), qn("block"), qn("inline-block"), dn("offsetWidth")),
        Xn = dn("offsetHeight"),
        et =
          (Mn(function (e) {
            return e.getBoundingClientRect();
          }),
          Mn(function (e) {
            return e.firstChild;
          }),
          pn(An)),
        nt =
          et.matches ||
          et.matchesSelector ||
          et.webkitMatchesSelector ||
          et.mozMatchesSelector ||
          et.msMatchesSelector ||
          et.oMatchesSelector,
        tt = Je(
          Nn(function (e, n) {
            return nt.call(e, n);
          })
        ),
        rt = function (e, n) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!fn(e, An))
            return function (o) {
              var a = n;
              return (
                tn(t)
                  ? (a = function (e) {
                      for (var r = e.target; !tt(r, t) && r !== o; ) r = Tn(r);
                      r !== o && ((e.delegateTarget = r), n(e));
                    })
                  : (r = t),
                (r = !!r),
                o.addEventListener(e, a, r),
                function () {
                  return o.removeEventListener(e, a, r);
                }
              );
            };
        },
        ot =
          (Je(function (e, n) {
            for (var t = e; ln(t); ) {
              if (tt(t, n)) return t;
              t = Tn(t);
            }
            return null;
          }),
          "X-Razorpay-SessionId"),
        at = "X-Razorpay-TrackId",
        it = XMLHttpRequest,
        ct = bn("Network error"),
        ut = 0,
        lt = !1,
        st = 0;
      function dt() {
        lt && (lt = !1), mt(0);
      }
      function mt(e) {
        isNaN(e) || (st = +e);
      }
      function pt(e) {
        return dt(), this ? this(e) : null;
      }
      function ft(e, n) {
        return (function (e, n, t) {
          return n && t ? kn(e, Sn(v({}, n, t))) : e;
        })(e, "keyless_header", n);
      }
      function ht(e) {
        if (!fn(this, ht)) return new ht(e);
        (this.options = (function (e) {
          var n = e;
          tn(e) && (n = { url: e });
          if (n) {
            var t = n,
              r = t.method,
              o = t.headers,
              a = t.callback,
              i = n.data;
            return (
              o || (n.headers = {}),
              r || (n.method = "get"),
              a ||
                (n.callback = function (e) {
                  return e;
                }),
              sn(i) && !fn(i, FormData) && (i = Sn(i)),
              (n.data = i),
              n
            );
          }
          return e;
        })(e)),
          this.defer();
      }
      var _t = {
        options: {
          url: "",
          method: "get",
          callback: function (e) {
            return e;
          },
        },
        setReq: function (e, n) {
          return this.abort(), (this.type = e), (this.req = n), this;
        },
        till: function (e) {
          var n = this,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3e3;
          if (!lt) {
            var o = st ? st * r : r;
            return this.setReq(
              "timeout",
              setTimeout(function () {
                n.call(function (o) {
                  o.error && t > 0
                    ? n.till(e, t - 1, r)
                    : e(o)
                    ? n.till(e, t, r)
                    : n.options.callback && n.options.callback(o);
                });
              }, o)
            );
          }
          setTimeout(function () {
            n.till(e, t, r);
          }, r);
        },
        abort: function () {
          var e = this.req,
            n = this.type;
          e &&
            ("ajax" === n
              ? e.abort()
              : "jsonp" === n
              ? (i.g.Razorpay[e] = function (e) {
                  return e;
                })
              : clearTimeout(e),
            (this.req = null));
        },
        defer: function () {
          var e = this;
          this.req = setTimeout(function () {
            return e.call();
          });
        },
        call: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.options.callback,
            n = this.options,
            t = n.method,
            r = n.data,
            o = n.headers,
            a = void 0 === o ? {} : o,
            c = this.options.url;
          c = ft(c, Dn);
          var u = new it();
          this.setReq("ajax", u),
            u.open(t, c, !0),
            (u.onreadystatechange = function () {
              if (4 === u.readyState && u.status) {
                var n,
                  r = ee(u.responseText);
                if (
                  (null !== (n = u.getResponseHeader("content-type")) &&
                    void 0 !== n &&
                    n.includes("text") &&
                    !r) ||
                  "string" == typeof r
                )
                  return void (
                    null == e ||
                    e({
                      status_code: u.status,
                      xhr: { status: u.status, text: u.responseText },
                    })
                  );
                if (u.responseText) {
                  var o;
                  if (
                    (r ||
                      ((r = bn("Parsing error")).xhr = {
                        status: u.status,
                        text: u.responseText,
                      }),
                    r.error)
                  )
                    i.g.dispatchEvent(
                      Pn("rzp_network_error", {
                        detail: {
                          method: t,
                          url: c,
                          baseUrl:
                            null === (o = c) || void 0 === o
                              ? void 0
                              : o.split("?")[0],
                          status: u.status,
                          xhrErrored: !1,
                          response: r,
                        },
                      })
                    );
                  return (
                    "object" === y(r) && (r.status_code = u.status),
                    void (null == e || e(r))
                  );
                }
                var a = { status_code: u.status };
                null == e || e(a);
              }
            }),
            (u.onerror = function () {
              var n,
                r = ct;
              (r.xhr = { status: 0 }),
                i.g.dispatchEvent(
                  Pn("rzp_network_error", {
                    detail: {
                      method: t,
                      url: c,
                      baseUrl:
                        null === (n = c) || void 0 === n
                          ? void 0
                          : n.split("?")[0],
                      status: 0,
                      xhrErrored: !0,
                      response: r,
                    },
                  })
                ),
                null == e || e(r);
            }),
            Rn && (a[ot] = Rn),
            Cn && (a[at] = Cn),
            X(a, function (e, n) {
              return u.setRequestHeader(n, e);
            }),
            u.send(r);
        },
      };
      function gt(e) {
        var n = e.doc,
          t = void 0 === n ? window.document : n,
          r = e.url,
          o = e.method,
          a = void 0 === o ? "post" : o,
          i = e.target,
          c = e.params,
          u = void 0 === c ? {} : c;
        if (((u = Ot(u)), a && "get" === a.toLowerCase())) {
          var l = bt(r, u || "");
          i
            ? window.open(l, i)
            : t !== window.document
            ? t.location.assign(l)
            : window.location.assign(l);
        } else {
          var s = t.createElement("form");
          (s.method = a),
            (s.action = r),
            i && (s.target = i),
            vt({ doc: t, form: s, data: u }),
            t.body.appendChild(s),
            s.submit();
        }
      }
      function vt(e) {
        var n = e.doc,
          t = void 0 === n ? window.document : n,
          r = e.form,
          o = e.data;
        if (H(o))
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var i = yt({ doc: t, name: a, value: o[a] });
              r.appendChild(i);
            }
      }
      function yt(e) {
        var n = e.doc,
          t = void 0 === n ? window.document : n,
          r = e.name,
          o = e.value,
          a = t.createElement("input");
        return (a.type = "hidden"), (a.name = r), (a.value = o), a;
      }
      function bt(e, n) {
        return (
          "object" === y(n) &&
            null !== n &&
            (n = (function (e) {
              H(e) || (e = {});
              var n = [];
              for (var t in e)
                e.hasOwnProperty(t) &&
                  n.push(
                    encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                  );
              return n.join("&");
            })(n)),
          n && ((e += e.indexOf("?") > 0 ? "&" : "?"), (e += n)),
          e
        );
      }
      function Ot(e) {
        var n = e;
        H(n) || (n = {});
        var t = {};
        if (0 === Object.keys(n).length) return {};
        return (
          (function e(n, r) {
            if (Object(n) !== n) t[r] = n;
            else if (Array.isArray(n)) {
              for (var o = n.length, a = 0; a < o; a++)
                e(n[a], r + "[" + a + "]");
              0 === o && (t[r] = []);
            } else {
              var i = !0;
              for (var c in n) (i = !1), e(n[c], r ? r + "[" + c + "]" : c);
              i && r && (t[r] = {});
            }
          })(n, ""),
          t
        );
      }
      (_t.constructor = ht),
        (ht.prototype = _t),
        (ht.post = pt.bind(function (e) {
          return (
            (e.method = "post"),
            e.headers || (e.headers = {}),
            e.headers["Content-type"] ||
              (e.headers["Content-type"] = "application/x-www-form-urlencoded"),
            ht(e)
          );
        })),
        (ht.patch = pt.bind(function (e) {
          return (
            (e.method = "PATCH"),
            e.headers || (e.headers = {}),
            e.headers["Content-type"] ||
              (e.headers["Content-type"] = "application/x-www-form-urlencoded"),
            ht(e)
          );
        })),
        (ht.put = pt.bind(function (e) {
          return (
            (e.method = "put"),
            e.headers || (e.headers = {}),
            e.headers["Content-type"] ||
              (e.headers["Content-type"] = "application/x-www-form-urlencoded"),
            ht(e)
          );
        })),
        (ht.delete = function (e) {
          return (
            (e.method = "delete"),
            e.headers || (e.headers = {}),
            e.headers["Content-type"] ||
              (e.headers["Content-type"] = "application/x-www-form-urlencoded"),
            ht(e)
          );
        }),
        (ht.setSessionId = function (e) {
          Rn = e;
        }),
        (ht.setTrackId = function (e) {
          Cn = e;
        }),
        (ht.setKeylessHeader = function (e) {
          Dn = e;
        }),
        (ht.jsonp = pt.bind(function (e) {
          e.data || (e.data = {});
          var n = ut++,
            t = 0,
            r = new ht(e);
          return (
            (e = r.options),
            (r.call = function () {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : e.callback;
              t++;
              var o = "jsonp".concat(n, "_").concat(t),
                a = !1,
                c = function () {
                  a ||
                    (this.readyState &&
                      "loaded" !== this.readyState &&
                      "complete" !== this.readyState) ||
                    ((a = !0),
                    (this.onload = this.onreadystatechange = null),
                    Fn(this));
                },
                u = (i.g.Razorpay[o] = function (e) {
                  delete e.http_status_code,
                    null == r || r(e),
                    delete i.g.Razorpay[o];
                });
              this.setReq("jsonp", u);
              var l = kn(e.url, e.data);
              l = kn((l = ft(l, Dn)), Sn({ callback: "Razorpay.".concat(o) }));
              var s = jn("script");
              Object.assign(s, {
                src: l,
                async: !0,
                onerror: function () {
                  return null == r ? void 0 : r(ct);
                },
                onload: c,
                onreadystatechange: c,
              }),
                Bn(s, document.documentElement);
            }),
            r
          );
        })),
        (ht.pausePoll = function () {
          lt || (lt = !0);
        }),
        (ht.resumePoll = dt),
        (ht.setPollDelayBy = mt);
      document.documentElement;
      var wt,
        xt,
        St = document.body,
        Et = (i.g.innerWidth, i.g.innerHeight),
        kt = i.g.pageYOffset,
        Pt = window.scrollBy,
        Rt = window.scrollTo,
        Ct = window.requestAnimationFrame,
        Dt = document.querySelector.bind(document),
        At = document.querySelectorAll.bind(document),
        jt =
          (document.getElementById.bind(document),
          i.g.getComputedStyle.bind(i.g),
          window.Event,
          function (e) {
            return "string" == typeof e ? Dt(e) : e;
          });
      function Tt(e) {
        if (!e.target && i.g !== i.g.parent)
          return i.g.Razorpay.sendMessage({ event: "redirect", data: e });
        gt({
          url: e.url,
          params: e.content,
          method: e.method,
          target: e.target,
        });
      }
      function Mt(e) {
        var n = {};
        return (
          null == e ||
            e.querySelectorAll("[name]").forEach(function (e) {
              n[e.name] = e.value;
            }),
          n
        );
      }
      function It(e) {
        !(function (e) {
          if (!i.g.requestAnimationFrame) return Pt(0, e);
          xt && clearTimeout(xt);
          xt = setTimeout(function () {
            var n = kt,
              t = Math.min(n + e, Xn(St) - Et);
            e = t - n;
            var r = 0,
              o = i.g.performance.now();
            function a(i) {
              if ((r += (i - o) / 300) >= 1) return Rt(0, t);
              var c = Math.sin((Nt * r) / 2);
              Rt(0, n + Math.round(e * c)), (o = i), Ct(a);
            }
            Ct(a);
          }, 100);
        })(e - kt);
      }
      var Nt = Math.PI;
      var Lt = {
        api: "https://api.razorpay.com/",
        version: "v1/",
        frameApi: "/",
        cdn: "https://cdn.razorpay.com/",
        merchant_key: null,
      };
      try {
        Object.assign(Lt, i.g.Razorpay.config);
      } catch (e) {}
      var $t = Lt,
        Bt =
          (new RegExp("^\\+?[0-9]{7,15}$"),
          new RegExp("^\\d{7,15}$"),
          new RegExp("^\\d{10}$"),
          new RegExp("^\\+[0-9]{1,6}$"),
          new RegExp("^(\\+91)?[6-9]\\d{9}$"),
          new RegExp("^[^@\\s]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+$"),
          navigator.cookieEnabled,
          i.g !== i.g.parent),
        zt = Bt ? i.g.parent : i.g.opener,
        Kt = 4279794557,
        Ft = "canary",
        Ut = "1594f5a2184281d8632c30c8959cc4aad6f1a381";
      "https://checkout-static-next.razorpay.com/build/".concat(Ut);
      var Gt = (function () {
          try {
            var e = $t.api;
            return (
              Bt &&
                ((n = $t.frameApi), ((wt = jn("a")).href = n), (e = wt.href)),
              e.startsWith("https://api.razorpay.com") ||
                e.startsWith("https://api-dark.razorpay.com")
            );
          } catch (e) {
            return !1;
          }
          var n;
        })(),
        Ht = (function () {
          function e() {
            P(this, e);
          }
          return (
            C(e, null, [
              {
                key: "setId",
                value: function (n) {
                  (e.id = n), e.sendMessage("updateInterfaceId", n);
                },
              },
              {
                key: "subscribe",
                value: function (n, t) {
                  e.subscriptions[n] || (e.subscriptions[n] = []),
                    e.subscriptions[n].push(t);
                },
              },
              {
                key: "resetSubscriptions",
                value: function (n) {
                  n ? (e.subscriptions[n] = []) : (e.subscriptions = {});
                },
              },
              {
                key: "publishToParent",
                value: function (n) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (zt) {
                    e.source || e.updateSource();
                    var r = { data: t, id: e.id, source: e.source || "reset" },
                      o = JSON.stringify({
                        data: r,
                        topic: n,
                        source: r.source,
                        time: Date.now(),
                      });
                    zt.postMessage(o, "*");
                  }
                },
              },
              {
                key: "updateSource",
                value: function () {
                  Bt &&
                    window &&
                    window.location &&
                    (e.source = "checkout-frame");
                },
              },
              {
                key: "sendMessage",
                value: function (n, t) {
                  var r =
                    e.iframeReference && e.iframeReference.contentWindow
                      ? e.iframeReference.contentWindow
                      : window;
                  r &&
                    r.postMessage(
                      JSON.stringify({
                        topic: n,
                        data: { data: t, id: e.id, source: "checkoutjs" },
                        time: Date.now(),
                        source: "checkoutjs",
                        _module: "interface",
                      }),
                      "*"
                    );
                },
              },
            ]),
            e
          );
        })();
      v(Ht, "subscriptions", {}),
        Ht.updateSource(),
        Bt &&
          (Ht.publishToParent("ready"),
          Ht.subscribe("updateInterfaceId", function (e) {
            Ht.id = e.data;
          })),
        window.addEventListener("message", function (e) {
          var n = {};
          try {
            n = JSON.parse(e.data);
          } catch (e) {}
          var t = n || {},
            r = t.topic,
            o = t.data;
          r &&
            Ht.subscriptions[r] &&
            Ht.subscriptions[r].forEach(function (e) {
              e(o);
            });
        });
      var Zt = Ht;
      var Yt = "session_created",
        Vt = "session_errored",
        Wt = !1,
        Jt = !1,
        qt = Ft;
      try {
        if (
          0 ===
          location.href.indexOf("https://api.razorpay.com/v1/checkout/public")
        ) {
          var Qt = "traffic_env=",
            Xt = location.search
              .slice(1)
              .split("&")
              .filter(function (e) {
                return 0 === e.indexOf(Qt);
              })[0];
          Xt && (qt = Xt.slice(Qt.length));
        }
      } catch (e) {}
      function er(e, n) {
        var t = (function (e) {
            return e === Yt
              ? "checkout."
                  .concat(qt, ".sessionCreated.metrics")
                  .replace(".production", "")
              : "checkout."
                  .concat(qt, ".sessionErrored.metrics")
                  .replace(".production", "");
          })(e),
          r = [{ name: t, labels: [{ type: e, env: qt }] }];
        return n && (r[0].labels[0].severity = n), r;
      }
      function nr(e, n) {
        var t = V(navigator, "sendBeacon"),
          r = { metrics: er(e, n) },
          o = {
            url: "https://lumberjack-metrics.razorpay.com/v1/frontend-metrics",
            data: {
              key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
              data: encodeURIComponent(
                btoa(unescape(encodeURIComponent(JSON.stringify(r))))
              ),
            },
          },
          a = pe("merchant_key") || fe("key") || "",
          i = e === Vt;
        if (
          !((a && a.indexOf("test_") > -1) || (!a && !i)) &&
          ((!Wt && e === Yt) || (!Jt && e === Vt))
        )
          try {
            t
              ? navigator.sendBeacon(o.url, JSON.stringify(o.data))
              : ht.post(o),
              e === Yt && (Wt = !0),
              e === Vt && (Jt = !0),
              (function (e, n) {
                Bt
                  ? Zt.publishToParent("syncAvailability", {
                      sessionCreated: e,
                      sessionErrored: n,
                    })
                  : Zt.sendMessage("syncAvailability", {
                      sessionCreated: e,
                      sessionErrored: n,
                    });
              })(Wt, Jt);
          } catch (e) {}
      }
      Zt.subscribe("syncAvailability", function (e) {
        var n = e.data || {},
          t = n.sessionCreated,
          r = n.sessionErrored;
        (Wt = "boolean" == typeof t ? t : Wt),
          (Jt = "boolean" == typeof r ? r : Jt);
      });
      var tr = "rzp_device_id",
        rr = 1,
        or = "",
        ar = "",
        ir = i.g.screen;
      try {
        (function (e) {
          try {
            var n = new i.g.TextEncoder("utf-8").encode(e);
            return i.g.crypto.subtle.digest("SHA-1", n).then(function (e) {
              return (or = (function (e) {
                for (
                  var n = [], t = new i.g.DataView(e), r = 0;
                  r < t.byteLength;
                  r += 4
                ) {
                  var o = "00000000",
                    a = (o + t.getUint32(r).toString(16)).slice(-o.length);
                  n.push(a);
                }
                return n.join("");
              })(e));
            });
          } catch (e) {
            return Promise.resolve();
          }
        })(
          [
            navigator.userAgent,
            navigator.language,
            new Date().getTimezoneOffset(),
            navigator.platform,
            navigator.cpuClass,
            navigator.hardwareConcurrency,
            ir.colorDepth,
            navigator.deviceMemory,
            ir.width + ir.height,
            ir.width * ir.height,
            i.g.devicePixelRatio,
          ].join()
        )
          .then(function (e) {
            e &&
              ((or = e),
              (function (e) {
                if (e) {
                  try {
                    ar = A.getItem(tr);
                  } catch (e) {}
                  if (!ar) {
                    ar = [
                      rr,
                      e,
                      Date.now(),
                      Math.random().toString().slice(-8),
                    ].join(".");
                    try {
                      A.setItem(tr, ar);
                    } catch (e) {}
                  }
                }
              })(e));
          })
          .catch(Boolean);
      } catch (e) {}
      function cr() {
        var e;
        return null !== (e = or) && void 0 !== e ? e : null;
      }
      function ur() {
        var e;
        return null !== (e = ar) && void 0 !== e ? e : null;
      }
      function lr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function sr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? lr(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : lr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var dr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        mr = dr.split("").reduce(function (e, n, t) {
          return sr(sr({}, e), {}, v({}, n, t));
        }, {});
      function pr(e) {
        for (var n = ""; e; ) (n = dr[e % 62] + n), (e = gn(e / 62));
        return n;
      }
      function fr() {
        var e,
          n =
            pr(
              String(hn() - 13885344e5) +
                String("000000" + gn(1e6 * _n())).slice(-6)
            ) +
            pr(gn(238328 * _n())) +
            "0",
          t = 0;
        return (
          n.split("").forEach(function (r, o) {
            (e = mr[n[n.length - 1 - o]]),
              (n.length - o) % 2 && (e *= 2),
              e >= 62 && (e = (e % 62) + 1),
              (t += e);
          }),
          (e = t % 62) && (e = dr[62 - e]),
          String(n).slice(0, 13) + e
        );
      }
      var hr = fr(),
        _r = {
          library: "checkoutjs",
          platform: "browser",
          referer: location.href,
          env: "",
        };
      function gr(e) {
        var n,
          t = {
            checkout_id: e ? e.id : hr,
            "device.id": null !== (n = ur()) && void 0 !== n ? n : "",
          };
        return (
          [
            "device",
            "env",
            "integration",
            "library",
            "os_version",
            "os",
            "platform_version",
            "platform",
            "referer",
          ].forEach(function (e) {
            _r[e] && (t[e] = _r[e]);
          }),
          t
        );
      }
      var vr,
        yr,
        br = [],
        Or = [],
        wr = function (e) {
          return br.push(e);
        },
        xr = function (e) {
          yr = e;
        },
        Sr = function (e) {
          if ((e && (vr = e), br.length && "live" === vr)) {
            br.forEach(function (e) {
              ("open" === e.event ||
                ("submit" === e.event && "razorpayjs" === Er.props.library)) &&
                nr("session_created");
            });
            var n = V(navigator, "sendBeacon"),
              t = {
                context: yr,
                addons: [
                  {
                    name: "ua_parser",
                    input_key: "user_agent",
                    output_key: "user_agent_parsed",
                  },
                ],
                events: br.splice(0, 5),
              },
              r = {
                url: "https://lumberjack.razorpay.com/v1/track",
                data: {
                  key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                  data: encodeURIComponent(
                    btoa(unescape(encodeURIComponent(JSON.stringify(t))))
                  ),
                },
              };
            try {
              var o = !1;
              n && (o = navigator.sendBeacon(r.url, JSON.stringify(r.data))),
                o || ht.post(r);
            } catch (e) {}
          }
        };
      function Er(e, n, t) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e
          ? "test" !== (vr = e.getMode()) &&
            setTimeout(function () {
              t instanceof Error &&
                (t = { message: t.message, stack: t.stack });
              var o = gr(e);
              (o.user_agent = null), (o.mode = "live");
              var a = ye();
              a && (o.order_id = a);
              var i = {},
                c = { options: i };
              t && (c.data = t),
                (i = Object.assign(i, q(e.get()))),
                "function" == typeof e.get("handler") && (i.handler = !0);
              var u = e.get("callback_url");
              u && "string" == typeof u && (i.callback_url = !0),
                V(i, "prefill") &&
                  ["card"].forEach(function (e) {
                    V(i.prefill, e) && (i.prefill[e] = !0);
                  }),
                i.image && wn(i.image) && (i.image = "base64");
              var l = e.get("external.wallets") || [];
              (i.external_wallets = l.reduce(function (e, n) {
                return sr(sr({}, e), {}, v({}, n, !0));
              }, {})),
                hr && (c.local_order_id = hr),
                (c.build_number = Kt),
                (c.experiments = L());
              var s = pe("experiments");
              try {
                H(s) && (c.backendExperiments = sr({}, s));
              } catch (e) {}
              wr({ event: n, properties: c, timestamp: hn() }),
                xr(o),
                r && Sr();
            })
          : Or.push([n, t, r]);
      }
      function kr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Pr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? kr(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : kr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      setInterval(function () {
        Sr();
      }, 1e3),
        (Er.dispatchPendingEvents = function (e) {
          if (e) {
            var n = Er.bind(Er, e);
            Or.splice(0, Or.length).forEach(function (e) {
              n.apply(Er, e);
            });
          }
        }),
        (Er.parseAnalyticsData = function (e) {
          sn(e) &&
            X(e, function (e, n) {
              _r[n] = e;
            });
        }),
        (Er.makeUid = fr),
        (Er.common = gr),
        (Er.props = _r),
        (Er.id = hr),
        (Er.updateUid = function (e) {
          (hr = e), (Er.id = e);
        }),
        (Er.flush = Sr);
      var Rr = function (e, n) {
        var t,
          r = { tags: n };
        switch (!0) {
          case !e:
            r.message = "NA";
            break;
          case "string" == typeof e:
            r.message = e;
            break;
          case "object" === y(e) &&
            ((t = e),
            [
              "source",
              "step",
              "description",
              "reason",
              "code",
              "metadata",
            ].every(function (e) {
              return t.hasOwnProperty(e);
            })):
            r = Pr(
              Pr(Pr({}, r), JSON.parse(JSON.stringify(e))),
              {},
              { message: "[NETWORK ERROR] ".concat(e.description) }
            );
            break;
          case "object" === y(e):
            var o = e,
              a = o.name,
              i = o.message,
              c = o.stack,
              u = o.fileName,
              l = o.lineNumber,
              s = o.columnNumber;
            r = Pr(
              Pr({}, JSON.parse(JSON.stringify(e))),
              {},
              {
                name: a,
                message: i,
                stack: c,
                fileName: u,
                lineNumber: l,
                columnNumber: s,
                tags: n,
              }
            );
            break;
          default:
            r.message = JSON.stringify(e);
        }
        return r;
      };
      var Cr,
        Dr = "S0",
        Ar = "S1",
        jr = "S2",
        Tr = "S3",
        Mr = {
          JS_ERROR: "js_error",
          UNHANDLED_REJECTION: "unhandled_rejection",
        },
        Ir = {},
        Nr = {},
        Lr = function (e) {
          var n = J(e);
          return (
            X(n, function (e, t) {
              rn(e) && (n[t] = e.call());
            }),
            n
          );
        },
        $r = function (e) {
          var n = Q(e || {});
          return (
            ["token"].forEach(function (e) {
              n[e] && (n[e] = "__REDACTED__");
            }),
            n
          );
        },
        Br = {
          setR: function (e) {
            (Cr = e), Er.dispatchPendingEvents(e);
          },
          track: function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.type,
              r = n.data,
              o = void 0 === r ? {} : r,
              a = n.r,
              i = void 0 === a ? Cr : a,
              c = n.immediately,
              u = void 0 !== c && c,
              l = n.isError,
              s = void 0 !== l && l;
            try {
              s &&
                !i &&
                (i = {
                  id: Er.id,
                  getMode: function () {
                    return "live";
                  },
                  get: function (e) {
                    return "string" != typeof e && {};
                  },
                });
              var d = Lr(Ir);
              (o = $r(o)),
                (o = sn(o) ? Q(o) : { data: o }).meta &&
                  sn(o.meta) &&
                  (d = Object.assign(d, o.meta)),
                (o.meta = d),
                (o.meta.request_index = i ? Nr[i.id] : null),
                t && (e = "".concat(t, ":").concat(e)),
                Er(i, e, o, u);
            } catch (e) {
              Er(
                i,
                Mr.JS_ERROR,
                { data: { error: Rr(e, { severity: jr, unhandled: !1 }) } },
                !0
              );
            }
          },
          setMeta: function (e, n) {
            Ir[e] = n;
          },
          removeMeta: function (e) {
            delete Ir[e];
          },
          getMeta: function () {
            return q(Ir);
          },
          updateRequestIndex: function (e) {
            if (!Cr || !e) return 0;
            V(Nr, Cr.id) || (Nr[Cr.id] = {});
            var n = Nr[Cr.id];
            return V(n, e) || (n[e] = -1), (n[e] += 1), n[e];
          },
        },
        zr = Br;
      function Kr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Fr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Kr(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Kr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Ur(e, n) {
        if (!e) return n;
        var t = {};
        return (
          Object.keys(n).forEach(function (r) {
            var o = n[r];
            "__PREFIX" !== r || "__PREFIX" !== o
              ? (t[r] = "".concat(e, ":").concat(o))
              : (t[e.toUpperCase()] = "".concat(e));
          }),
          t
        );
      }
      function Gr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Hr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Gr(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Gr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Zr = Ur(
          "card",
          Hr(Hr({}, { ADD_NEW_CARD: "add_new" }), {
            APP_SELECT: "app:select",
            ADD_CARD_SCREEN_RENDERED: "1cc_payments_add_new_card_screen_loaded",
            SAVED_CARD_SCREEN_RENDERED: "1cc_payments_saved_card_screen_loaded",
          })
        ),
        Yr = Ur("saved_cards", {
          __PREFIX: "__PREFIX",
          CHECK_SAVED_CARDS: "check",
          HIDE_SAVED_CARDS: "hide",
          SHOW_SAVED_CARDS: "show",
          SKIP_SAVED_CARDS: "skip",
          EMI_PLAN_VIEW_SAVED_CARDS: "emi:plans:view",
          OTP_SUBMIT_SAVED_CARDS: "save:otp:submit",
          ACCESS_OTP_SUBMIT_SAVED_CARDS: "access:otp:submit",
          USER_CONSENT_FOR_TOKENIZATION: "user_consent_for_tokenization",
          TOKENIZATION_KNOW_MORE_MODAL: "tokenization_know_more_modal",
          TOKENIZATION_BENEFITS_MODAL_SHOWN:
            "tokenization_benefits_modal_shown",
          SECURE_CARD_CLICKED: "secure_card_clicked",
          MAYBE_LATER_CLICKED: "maybe_later_clicked",
        }),
        Vr = Ur("emi", {
          VIEW_EMI_PLANS: "plans:view",
          EDIT_EMI_PLANS: "plans:edit",
          PAY_WITHOUT_EMI: "pay_without",
          VIEW_ALL_EMI_PLANS: "plans:view:all",
          SELECT_EMI_PLAN: "plan:select",
          CHOOSE_EMI_PLAN: "plan:choose",
          EMI_PLANS: "plans",
          EMI_CONTACT: "contact",
          EMI_CONTACT_FILLED: "contact:filled",
        });
      function Wr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Jr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Wr(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Wr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var qr = Jr(
        Jr(
          Jr(
            {},
            {
              SHOW_AVS_SCREEN: "avs_screen:show",
              LOAD_AVS_FORM: "avs_screen:load_form",
              AVS_FORM_DATA_INPUT: "avs_screen:form_data_input",
              AVS_FORM_SUBMIT: "avs_screen:form_submit",
            }
          ),
          { HIDE_ADD_CARD_SCREEN: "add_cards:hide" }
        ),
        {
          SHOW_PAYPAL_RETRY_SCREEN: "paypal_retry:show",
          SHOW_PAYPAL_RETRY_ON_OTP_SCREEN: "paypal_retry:show:otp_screen",
          PAYPAL_RETRY_CANCEL_BTN_CLICK: "paypal_retry:cancel_click",
          PAYPAL_RETRY_PAYPAL_BTN_CLICK: "paypal_retry:paypal_click",
          PAYPAL_RETRY_PAYPAL_ENABLED: "paypal_retry:paypal_enabled",
        }
      );
      function Qr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Xr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Qr(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Qr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      Xr(Xr(Xr(Xr({}, Zr), Yr), Vr), qr),
        Ur("cred", {
          ELIGIBILITY_CHECK: "eligibility_check",
          SUBTEXT_OFFER_EXPERIMENT: "subtext_offer_experiment",
          EXPERIMENT_OFFER_SELECTED: "experiment_offer_selected",
        });
      function eo(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var no = (function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? eo(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      })({}, { APPLY: "apply" });
      Ur("offer", no);
      function to(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var ro = (function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? to(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : to(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      })(
        {},
        {
          INSTRUMENTS_SHOWN: "instruments_shown",
          INSTRUMENTS_LIST: "instruments:list",
        }
      );
      Ur("p13n", ro);
      function oo(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var ao = (function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? oo(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : oo(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      })(
        {},
        {
          HOME_LOADED: "checkoutHomeScreenLoaded",
          HOME_LOADED_V2: "1cc_payment_home_screen_loaded",
          PAYMENT_INSTRUMENT_SELECTED: "checkoutPaymentInstrumentSelected",
          PAYMENT_INSTRUMENT_SELECTED_V2:
            "1cc_payment_home_screen_instrument_selected",
          PAYMENT_METHOD_SELECTED: "checkoutPaymentMethodSelected",
          PAYMENT_METHOD_SELECTED_V2: "1cc_payment_home_screen_method_selected",
          METHODS_SHOWN: "methods:shown",
          METHODS_HIDE: "methods:hide",
          P13N_EXPERIMENT: "p13n:experiment",
          LANDING: "landing",
          PROCEED: "proceed",
          CONTACT_SCREEN_LOAD: "complete:contact_details",
          PAYPAL_RENDERED: "paypal:render",
        }
      );
      Ur("home", ao);
      function io(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var co = (function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? io(Object(t), !0).forEach(function (n) {
                  v(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : io(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        })({}, { INVALID_TPV: "invalid_tpv" }),
        uo =
          (Ur("order", co),
          {
            AUTOMATIC_CHECKOUT_OPEN: "automatic_checkout_open",
            AUTOMATIC_CHECKOUT_CLICK: "automatic_checkout_click",
            ERROR: "error",
            OPEN: "open",
            CUSTOMER_STATUS_START: "checkoutCustomerStatusAPICallInitated",
            CUSTOMER_STATUS_END: "checkoutCustomerStatusAPICallCompleted",
            LOGOUT_CLICKED: "checkoutSignOutOptionClicked",
            EDIT_CONTACT_CLICK: "checkoutEditContactDetailsOptionClicked",
            CUSTOMER_STATUS_API_INITIATED:
              "1cc_customer_status_api_call_initiated",
            CUSTOMER_STATUS_API_COMPLETED:
              "1cc_customer_status_api_call_completed",
            INTL_MISSING: "intl_missing",
            BRANDED_BUTTON_CLICKED: "1cc_branded_button_clicked",
          });
      function lo(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var so,
        mo = (function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? lo(Object(t), !0).forEach(function (n) {
                  v(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : lo(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        })(
          {},
          {
            ALERT_SHOW: "alert:show",
            CALLOUT_SHOW: "callout:show",
            DOWNTIME_ALERTSHOW: "alert:show",
          }
        ),
        po = (Ur("downtime", mo), "is_mobile"),
        fo = (function (e) {
          return Fr(
            Fr({}, e),
            {},
            {
              setMeta: zr.setMeta,
              removeMeta: zr.removeMeta,
              updateRequestIndex: function () {
                return zr.updateRequestIndex.apply(zr, arguments);
              },
              setR: zr.setR,
            }
          );
        })(
          (function () {
            var n = {};
            return (
              Object.keys(e).forEach(function (t) {
                var r = e[t],
                  o = "Track"
                    .concat(r.charAt(0).toUpperCase())
                    .concat(r.slice(1));
                n[o] = function (e, n) {
                  zr.track(e, { type: r, data: n });
                };
              }),
              (n.Track = function (e, n) {
                zr.track(e, { data: n });
              }),
              n
            );
          })()
        ),
        ho = zr,
        _o = ["Not implemented on this platform", "chain is not set up"],
        go = [
          "Cannot redefine property: ethereum",
          "chrome-extension://",
          "moz-extension://",
          "webkit-masked-url://",
        ];
      function vo(e, n) {
        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          !!tn(e) &&
          n.some(function (n) {
            return un(n)
              ? n.test(e)
              : tn(n)
              ? t
                ? e === n
                : e.includes(n)
              : void 0;
          })
        );
      }
      function yo(e) {
        return e.reduce(function (e, n) {
          return (
            (e[n.name] = {
              enabled: n.enabled,
              loaded: n.loaded,
              pendingQ: null,
              config: n,
            }),
            e
          );
        }, {});
      }
      function bo(e) {
        return Object.keys(e)
          .filter(function (n) {
            var t;
            return !(null === (t = e[n]) || void 0 === t || !t.enabled);
          })
          .map(function (n) {
            return e[n];
          });
      }
      !(function (e) {
        (e.TRACK = "track"),
          (e.IDENTIFY = "identify"),
          (e.INITIALIZE = "initialize");
      })(so || (so = {}));
      var Oo = function () {};
      function wo(e, n) {
        var t,
          r,
          o,
          a = (n = n || {}).initial || [],
          i = n.max || 1 / 0,
          c = n.interval || 1e3,
          u = n.onEmpty || Oo,
          l = n.onPause || Oo;
        function s(n) {
          clearInterval(t);
          var r = a.splice(0, i);
          return (
            r.length && e(r, a), a.length ? (n ? s() : d()) : ((o = !1), u())
          );
        }
        function d() {
          (o = !0), (t = setInterval(s, c));
        }
        return (
          a.length && d(),
          {
            flush: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              s(e);
            },
            resume: s,
            push: function (e) {
              return (r = a.push(e)), o || d(), r;
            },
            size: function () {
              return a.length;
            },
            pause: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              e && s(), clearInterval(t), (o = !1), l(a);
            },
          }
        );
      }
      var xo = {
        USER_ID_UPDATED: "userIdUpdated",
        ANON_ID_UPDATED: "anonymousIdUpdated",
      };
      function So(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Eo(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? So(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : So(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function ko(e, n, t, r) {
        e.pendingQ ||
          (e.pendingQ = wo(
            function (n) {
              n.forEach(function (n) {
                var r,
                  o,
                  a = n.payload,
                  i = n.type,
                  c = null === (r = e.config) || void 0 === r ? void 0 : r[i];
                e.loaded()
                  ? c && c(a, t)
                  : null === (o = e.pendingQ) ||
                    void 0 === o ||
                    o.push({ payload: a, type: i });
              });
            },
            { interval: 1e3 }
          )),
          e.pendingQ.push({ payload: n, type: r });
      }
      function Po(e, n) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { isImmediate: !1 },
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = new Date(Date.now()).toISOString(),
          a = Eo(Eo({}, e), {}, { originalTimestamp: o }),
          i = bo(n.plugins);
        i.forEach(function (e) {
          var n,
            o = null === (n = e.config) || void 0 === n ? void 0 : n[r];
          "function" == typeof o &&
            ((null != e && e.loaded()) || r === so.INITIALIZE
              ? o(a, t)
              : ko(e, a, t, r));
        });
      }
      function Ro() {
        var e = window.crypto || window.msCrypto;
        if (void 0 !== e && e.getRandomValues) {
          var n = new Uint16Array(8);
          e.getRandomValues(n),
            (n[3] = (4095 & n[3]) | 16384),
            (n[4] = (16383 & n[4]) | 32768);
          var t = function (e) {
            for (var n = e.toString(16); n.length < 4; ) n = "0".concat(n);
            return n;
          };
          return (
            t(n[0]) +
            t(n[1]) +
            t(n[2]) +
            t(n[3]) +
            t(n[4]) +
            t(n[5]) +
            t(n[6]) +
            t(n[7])
          );
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var n = (16 * Math.random()) | 0;
            return ("x" === e ? n : (3 & n) | 8).toString(16);
          }
        );
      }
      function Co(e, n, t) {
        e[n].forEach(function (e) {
          e(t);
        });
      }
      function Do(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Ao(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Do(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Do(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var jo,
        To = (function () {
          function e(n) {
            P(this, e);
            var t,
              r,
              o,
              a,
              i = n.app,
              c = n.plugins,
              u = void 0 === c ? [] : c,
              l = {
                locale:
                  ((t = navigator),
                  (r = t.language),
                  (o = t.languages),
                  (a = t.userLanguage),
                  a || (o && o.length ? o[0] : r) || ""),
                userAgent: navigator.userAgent,
                referrer: document.referrer,
                screen: {
                  height: window.screen.height,
                  width: window.screen.width,
                  availHeight: window.screen.availHeight,
                  availWidth: window.screen.availWidth,
                  innerHeight: window.innerHeight,
                  innerWidth: window.innerWidth,
                },
                platform: Ve(),
              };
            (this.flattenedContext = J(l)),
              (this.userIdKey = "".concat(i, "_user_id")),
              (this.anonIdKey = "".concat(i, "_anon_id")),
              A.getItem(this.anonIdKey) || this.setAnonymousId(Ro()),
              (this.state = {
                app: i,
                anonymousId: A.getItem(this.anonIdKey) || "",
                userId: A.getItem(this.userIdKey) || "",
                context: l,
                plugins: yo(u),
                subscriptions: Object.keys(xo).reduce(function (e, n) {
                  return (e[xo[n]] = []), e;
                }, {}),
              }),
              Po({}, this.state, {}, so.INITIALIZE);
          }
          return (
            C(e, [
              {
                key: "setAnonymousId",
                value: function (e) {
                  A.setItem(this.anonIdKey, e),
                    this.state &&
                      ((this.state.anonymousId = e),
                      Co(this.state.subscriptions, xo.ANON_ID_UPDATED, e));
                },
              },
              {
                key: "setUserId",
                value: function (e) {
                  A.setItem(this.userIdKey, e),
                    this.state &&
                      ((this.state.userId = e),
                      Co(this.state.subscriptions, xo.USER_ID_UPDATED, e));
                },
              },
              {
                key: "on",
                value: function (e, n) {
                  Object.values(xo).includes(e) &&
                    (function (e, n, t) {
                      e[n].push(t);
                    })(this.state.subscriptions, e, n);
                },
              },
              {
                key: "setContext",
                value: function (e, n) {
                  this.flattenedContext[e] = n;
                },
              },
              {
                key: "track",
                value: function (e, n, t) {
                  Po(
                    {
                      event: e,
                      properties: n,
                      userId: this.state.userId,
                      anonymousId: this.state.anonymousId,
                      context: q(this.flattenedContext),
                      type: so.TRACK,
                    },
                    this.state,
                    t,
                    so.TRACK
                  );
                },
              },
              {
                key: "identify",
                value: function (e, n, t) {
                  this.setUserId(e),
                    Po(
                      {
                        anonymousId: this.state.anonymousId,
                        userId: e,
                        traits: n,
                        type: so.IDENTIFY,
                      },
                      this.state,
                      t,
                      so.IDENTIFY
                    );
                },
              },
              {
                key: "reset",
                value: function () {
                  this.setAnonymousId(Ro()), this.setUserId("");
                },
              },
              {
                key: "getState",
                value: function () {
                  return Ao(
                    Ao({}, this.state),
                    {},
                    { context: q(this.flattenedContext) }
                  );
                },
              },
              {
                key: "configurePlugin",
                value: function (e, n) {
                  var t = n.enable;
                  this.state.plugins[e] && (this.state.plugins[e].enabled = t);
                },
              },
            ]),
            e
          );
        })();
      function Mo(e) {
        var n = e.method,
          t = void 0 === n ? "post" : n,
          r = e.url,
          o = e.key,
          a = e.data,
          i = void 0 === a ? {} : a;
        try {
          return new Promise(function (e, n) {
            ht({
              method: t,
              url: r,
              data: JSON.stringify(i),
              headers: {
                "Content-Type": "application/json",
                Authorization: "Basic ".concat(btoa("".concat(o, ":"))),
              },
              callback: function (t) {
                200 !== t.status_code && n(t), e(t);
              },
            });
          });
        } catch (e) {
          return Promise.reject();
        }
      }
      function Io(e) {
        var n = e.url,
          t = e.key,
          r = e.events,
          o = e.useBeacon;
        try {
          var a = !1;
          return (
            o &&
              (a = (function (e) {
                var n = e.url,
                  t = e.key,
                  r = e.data;
                try {
                  var o = JSON.stringify(r);
                  return navigator.sendBeacon(
                    "".concat(n, "?writeKey=").concat(t),
                    o
                  );
                } catch (e) {
                  return !1;
                }
              })({
                url: "".concat(n, "/beacon/v1/batch"),
                key: t,
                data: { batch: r },
              })),
            a
              ? Promise.resolve()
              : Mo({
                  url: "".concat(n, "/v1/batch"),
                  key: t,
                  data: { batch: r },
                })
          );
        } catch (e) {
          return Promise.reject();
        }
      }
      !(function (e) {
        (e.CONSOLE_PLUGIN = "CONSOLE_PLUGIN"),
          (e.RUDDERSTACK_PLUGIN = "RUDDERSTACK_PLUGIN");
      })(jo || (jo = {}));
      function No(e) {
        return e;
      }
      function Lo(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function $o(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Lo(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Lo(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Bo =
        "undefined" != typeof navigator &&
        navigator &&
        "function" == typeof navigator.sendBeacon;
      var zo,
        Ko,
        Fo,
        Uo = "checkout.id",
        Go = "checkout.referrerType",
        Ho = "checkout.integration.name",
        Zo = "checkout.integration.type",
        Yo = "checkout.integration.version",
        Vo = "checkout.integration.parentVersion",
        Wo = "checkout.integration.platform",
        Jo = "checkout.library",
        qo = "checkout.mode",
        Qo = "checkout.order.id",
        Xo = "checkout.version",
        ea = "traits.contact",
        na = "traits.email",
        ta = "referrer",
        ra = Gt
          ? "https://rudderstack.razorpay.com"
          : "https://rudderstack.ext.dev.razorpay.in",
        oa = Gt ? "2Fle0rY1hHoLCMetOdzYFs1RIJF" : "27TM2uVMCl4nm4d7gqR4tysvdU1";
      function aa(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function ia(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? aa(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : aa(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      !(function (e) {
        (e.INTEGRATION = "integration"),
          (e.RZP_APP = "rzp_app"),
          (e.EXTERNAL = "external");
      })(zo || (zo = {})),
        (function (e) {
          (e.WEB = "web"), (e.PLUGIN = "plugin"), (e.SDK = "sdk");
        })(Ko || (Ko = {})),
        (function (e) {
          (e.HIGH_LEVEL = "high-level"),
            (e.CARD = "card"),
            (e.WALLET = "wallet"),
            (e.NETBANKING = "netbanking"),
            (e.EMI = "emi"),
            (e.PAYLATER = "paylater"),
            (e.UPI = "upi");
        })(Fo || (Fo = {}));
      var ca,
        ua,
        la,
        sa,
        da,
        ma = new To({
          app: "rzp_checkout",
          plugins: [
            {
              name: jo.CONSOLE_PLUGIN,
              track: function (e) {},
              identify: function (e) {},
              loaded: function () {
                return !0;
              },
              enabled: !1,
            },
            ia(
              ia(
                {},
                ((ca = { domainUrl: ra, key: oa }),
                (ua = ca.domainUrl),
                (la = ca.key),
                (sa = null),
                (da = !0),
                {
                  name: jo.RUDDERSTACK_PLUGIN,
                  initialize: function () {
                    (sa = wo(
                      function (e) {
                        try {
                          var n = new Date(Date.now()).toISOString();
                          (e = e.map(function (e) {
                            return $o(
                              $o({}, "object" === y(e) ? e : null),
                              {},
                              { sentAt: n }
                            );
                          })),
                            Io({
                              url: ua,
                              key: la,
                              events: e,
                              useBeacon: da && Bo,
                            }).catch(No);
                        } catch (e) {}
                      },
                      { max: 10, interval: 1e3 }
                    )),
                      window.addEventListener("beforeunload", function () {
                        var e;
                        (da = !0),
                          null === (e = sa) || void 0 === e || e.flush(!0);
                      }),
                      window.addEventListener("offline", function () {
                        var e;
                        null === (e = sa) || void 0 === e || e.pause();
                      }),
                      window.addEventListener("online", function () {
                        var e;
                        null === (e = sa) || void 0 === e || e.resume();
                      });
                  },
                  track: function (e, n) {
                    var t, r;
                    null === (t = sa) || void 0 === t || t.push(e),
                      n.isImmediate &&
                        (null === (r = sa) || void 0 === r || r.flush());
                  },
                  identify: function (e) {
                    (function (e) {
                      var n = e.url,
                        t = e.key,
                        r = e.payload;
                      return Mo({
                        url: "".concat(n, "/v1/identify"),
                        key: t,
                        data: r,
                      });
                    })({ url: ua, key: la, payload: e }).catch(No);
                  },
                  loaded: function () {
                    return !0;
                  },
                  enabled: !0,
                })
              ),
              {},
              { enabled: !0 }
            ),
          ],
        });
      Zt.subscribe("syncContext", function (e) {
        var n, t;
        e.data && ((n = e.data.key), (t = e.data.value)),
          n && ma.setContext(n, t);
      }),
        Zt.subscribe("syncAnonymousId", function (e) {
          var n;
          null !== (n = e.data) &&
            void 0 !== n &&
            n.anonymousId &&
            ma.setAnonymousId(e.data.anonymousId);
        }),
        Zt.subscribe("syncUserId", function (e) {
          var n;
          null !== (n = e.data) &&
            void 0 !== n &&
            n.userId &&
            ma.setUserId(e.data.userId);
        });
      var pa = ma;
      function fa(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function ha(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? fa(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : fa(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function _a(e, n) {
        Bt
          ? Zt.publishToParent("syncContext", { key: e, value: n })
          : Zt.sendMessage("syncContext", { key: e, value: n });
      }
      var ga = {};
      function va(e, n, t, r) {
        return function () {
          if (!t) {
            var o = e[n],
              a = (arguments.length <= 0 ? void 0 : arguments[0])
                ? ha(
                    ha({}, arguments.length <= 0 ? void 0 : arguments[0]),
                    {},
                    { funnel: r }
                  )
                : { funnel: r },
              i = arguments.length <= 1 ? void 0 : arguments[1];
            if ("string" == typeof o) pa.track(o, a, i);
            else if (o.name) {
              var c = o.name;
              o.type && (c = "".concat(o.type, " ").concat(c)),
                o.type !== k && (ga = { event: c, funnel: r }),
                pa.track(c, a, i);
            }
          }
        };
      }
      function ya(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = n.skipEvents,
          r = void 0 !== t && t,
          o = n.funnel,
          a = void 0 === o ? "" : o,
          i = Object.keys(e),
          c = {};
        return (
          i.forEach(function (n) {
            c[n] = va(e, n, r, a);
          }),
          c
        );
      }
      var ba = {
          setContext: function (e, n) {
            var t =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            pa.setContext(e, n), t && _a(e, n);
          },
          getState: function () {
            return ha(ha({}, pa.getState()), {}, { last: ga });
          },
          Identify: pa.identify.bind(pa),
          Reset: pa.reset.bind(pa),
          configurePlugin: pa.configurePlugin.bind(pa),
          createTrackMethodForModule: ya,
        },
        Oa = C(function e() {
          P(this, e);
        });
      v(Oa, "selectedBlock", {}),
        v(Oa, "selectedInstrumentForPayment", { method: {}, instrument: {} }),
        v(Oa, "checkoutInvokedTime", Date.now()),
        v(Oa, "personalisationVersionId", ""),
        v(Oa, "submitScreenName", ""),
        v(Oa, "cardFlow", ""),
        v(Oa, "flow", "");
      var wa = ya({ TRIGGERED: { name: "triggered", type: k } });
      function xa(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Sa(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? xa(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : xa(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Ea = function (e, n) {
        var t = n.analytics,
          r = n.severity,
          o = void 0 === r ? Ar : r,
          a = n.unhandled,
          i = void 0 !== a && a;
        try {
          var c,
            u = t || {},
            l = u.event,
            s = u.data,
            d = u.immediately,
            m = void 0 === d || d,
            p = !1;
          if (("razorpayjs" !== Er.props.library && !Gt) || $e) return;
          (function (e) {
            try {
              var n = tn(e)
                ? e
                : (null == e ? void 0 : e.stack) ||
                  (null == e ? void 0 : e.message) ||
                  (null == e ? void 0 : e.description) ||
                  "";
              return vo(n, _o, !0) || vo(n, go, !1);
            } catch (e) {
              return !1;
            }
          })(e) && ((o = Tr), (p = !0));
          var f = "string" == typeof l ? l : Mr.JS_ERROR;
          (o !== Dr && o !== Ar) || nr("session_errored", o);
          var h = Rr(e, { severity: o, unhandled: i, ignored: p });
          ho.track(f, {
            data: Sa(Sa({}, "object" === y(s) ? s : {}), {}, { error: h }),
            immediately: Boolean(m),
            isError: !0,
          }),
            wa.TRIGGERED({
              error: h,
              last:
                null === (c = ba.getState()) || void 0 === c ? void 0 : c.last,
            });
        } catch (e) {}
      };
      function ka() {
        return (this._evts = {}), (this._defs = {}), this;
      }
      ka.prototype = {
        onNew: No,
        def: function (e, n) {
          this._defs[e] = n;
        },
        on: function (e, n) {
          if (tn(e) && rn(n)) {
            var t = this._evts;
            t[e] || (t[e] = []), !1 !== this.onNew(e, n) && t[e].push(n);
          }
          return this;
        },
        once: function (e, n) {
          var t = n,
            r = this;
          return (
            (n = function n() {
              t.apply(r, arguments), r.off(e, n);
            }),
            this.on(e, n)
          );
        },
        off: function (e, n) {
          var t = arguments.length;
          if (!t) return ka.call(this);
          var r = this._evts;
          if (2 === t) {
            var o = r[e];
            if (!rn(n) || !an(o)) return;
            if ((o.splice(o.indexOf(n), 1), o.length)) return;
          }
          return (
            r[e]
              ? delete r[e]
              : ((e += "."),
                X(r, function (n, t) {
                  t.indexOf(e) || delete r[t];
                })),
            this
          );
        },
        emit: function (e, n) {
          var t = this;
          return (
            (this._evts[e] || []).forEach(function (r) {
              try {
                r.call(t, n);
              } catch (n) {
                console.error &&
                  "razorpayjs" === Er.props.library &&
                  "payment.resume" === e &&
                  (["TypeError", "ReferenceError"].indexOf(
                    null == n ? void 0 : n.name
                  ) >= 0
                    ? Ea(n, { severity: Ar })
                    : Ea(n, { severity: jr }));
              }
            }),
            this
          );
        },
        emitter: function () {
          var e = arguments,
            n = this;
          return function () {
            n.emit.apply(n, e);
          };
        },
      };
      var Pa = {
        key: "",
        account_id: "",
        image: "",
        amount: 100,
        currency: "INR",
        order_id: "",
        invoice_id: "",
        subscription_id: "",
        auth_link_id: "",
        payment_link_id: "",
        notes: null,
        disable_redesign_v15: null,
        callback_url: "",
        redirect: !1,
        description: "",
        customer_id: "",
        recurring: null,
        payout: null,
        contact_id: "",
        signature: "",
        retry: !0,
        target: "",
        subscription_card_change: null,
        display_currency: "",
        display_amount: "",
        recurring_token: { max_amount: 0, expire_by: 0 },
        checkout_config_id: "",
        send_sms_hash: !1,
        show_address: !0,
        show_coupons: !0,
        mandatory_login: !1,
        enable_ga_analytics: !1,
        enable_fb_analytics: !1,
        enable_moengage_analytics: !1,
        customer_cart: {},
        script_coupon_applied: !1,
        disable_emi_ux: null,
        cart: null,
        shopify_cart: null,
        ga_client_id: "",
        fb_analytics: {},
      };
      function Ra(e, n, t, r) {
        var o = n[(t = t.toLowerCase())],
          a = y(o);
        "object" === a && null === o
          ? tn(r) &&
            ("true" === r || "1" === r
              ? (r = !0)
              : ("false" !== r && "0" !== r) || (r = !1))
          : "string" === a && (nn(r) || en(r))
          ? (r = String(r))
          : "number" === a
          ? (r = Number(r))
          : "boolean" === a &&
            (tn(r)
              ? "true" === r || "1" === r
                ? (r = !0)
                : ("false" !== r && "0" !== r) || (r = !1)
              : nn(r) && (r = !!r)),
          (null !== o && a !== y(r)) || (e[t] = r);
      }
      function Ca(e, n, t) {
        X(e[n], function (r, o) {
          var a = y(r);
          ("string" !== a && "number" !== a && "boolean" !== a) ||
            ((o = n + t[0] + o), t.length > 1 && (o += t[1]), (e[o] = r));
        }),
          delete e[n];
      }
      function Da(e, n) {
        var t = {};
        return (
          X(e, function (e, r) {
            if (r.includes("experiments.")) {
              if (Gt) return;
              t[r] = e;
            } else
              r in Aa
                ? X(e, function (e, o) {
                    Ra(t, n, r + "." + o, e);
                  })
                : Ra(t, n, r, e);
          }),
          t
        );
      }
      var Aa = {};
      function ja(e) {
        (e = (function (e) {
          return (
            "object" === y(e.retry) &&
              "boolean" == typeof e.retry.enabled &&
              (e.retry = e.retry.enabled),
            e
          );
        })(e)),
          X(Pa, function (e, n) {
            var t;
            sn(e) &&
              ((t = e), mn(Object.keys(t))) &&
              ((Aa[n] = !0),
              X(e, function (e, t) {
                Pa[n + "." + t] = e;
              }),
              delete Pa[n]);
          }),
          (e = Da(e, Pa)).callback_url && Fe && (e.redirect = !0),
          (this.get = function (n) {
            return arguments.length ? (n in e ? e[n] : Pa[n]) : e;
          }),
          (this.set = function (n, t) {
            e[n] = t;
          }),
          (this.unset = function (n) {
            delete e[n];
          });
      }
      (Ta = "#949494"),
        '<svg viewBox="0 0 21 24" xmlns="http://www.w3.org/2000/svg">\n     <path d="M9.516 20.254l9.15-8.388-6.1-8.388-1.185 6.516 1.629 2.042-2.359 1.974-1.135 6.244zM12.809.412l8 11a1 1 0 0 1-.133 1.325l-12 11c-.707.648-1.831.027-1.66-.916l1.42-7.805 3.547-3.01-1.986-5.579 1.02-5.606c.157-.865 1.274-1.12 1.792-.41z" fill="'
          .concat(
            "#DADADA",
            '"/>\n     <path d="M5.566 3.479l-3.05 16.775 9.147-8.388-6.097-8.387zM5.809.412l7.997 11a1 1 0 0 1-.133 1.325l-11.997 11c-.706.648-1.831.027-1.66-.916l4-22C4.174-.044 5.292-.299 5.81.412z" fill="'
          )
          .concat(Ta, '"/>\n  </svg>');
      var Ta,
        Ma = "com.google.android.apps.nbu.paisa.user",
        Ia = "com.phonepe.app";
      var Na = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = Q(e);
        t.default_dcc_currency && delete t.default_dcc_currency,
          n.feesRedirect && (t.view = "html"),
          [
            "amount",
            "currency",
            "signature",
            "description",
            "order_id",
            "account_id",
            "notes",
            "subscription_id",
            "auth_link_id",
            "payment_link_id",
            "customer_id",
            "recurring",
            "subscription_card_change",
            "recurring_token.max_amount",
            "recurring_token.expire_by",
          ].forEach(function (e) {
            if (!t.hasOwnProperty(e)) {
              var n = "order_id" === e ? ye() : fe(e);
              n &&
                ("boolean" == typeof n && (n = 1),
                (t[e.replace(/\.(\w+)/g, "[$1]")] = n));
            }
          });
        var r = fe("key");
        !t.key_id && r && (t.key_id = r),
          n.avoidPopup &&
            "wallet" === t.method &&
            (t["_[source]"] = "checkoutjs"),
          (n.tez || n.gpay) &&
            ((t["_[flow]"] = "intent"), t["_[app]"] || (t["_[app]"] = Ma));
        var o = [
          "integration",
          "integration_version",
          "integration_parent_version",
        ];
        o.forEach(function (e) {
          var n = fe("_.".concat(e));
          n && (t["_[".concat(e, "]")] = n);
        });
        var a = cr();
        a && (t["_[shield][fhash]"] = a);
        var i = ur();
        i && (t["_[device_id]"] = i),
          (t["_[shield][tz]"] = -new Date().getTimezoneOffset()),
          (t["_[build]"] = Kt),
          Ca(t, "notes", "[]"),
          Ca(t, "card", "[]");
        var c = t["card[expiry]"];
        return (
          tn(c) &&
            ((t["card[expiry_month]"] = c.slice(0, 2)),
            (t["card[expiry_year]"] = c.slice(-2)),
            delete t["card[expiry]"]),
          (t._ = Er.common()),
          Ca(t, "_", "[]"),
          t
        );
      };
      function La(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return K(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          F(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var $a = $t.cdn,
        Ba = {
          TRUSTLY: "trustly",
          POLI: "poli",
          SOFORT: "sofort",
          GIROPAY: "giropay",
        };
      function za(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var Ka,
        Fa = $t.cdn,
        Ua = (function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? za(Object(t), !0).forEach(function (n) {
                  v(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : za(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        })(
          {
            google_pay: {
              code: "google_pay",
              logo: Fa + "app/googlepay.svg",
              card_logo: Fa + "card/googlepay.svg",
              verify_registration: !0,
              externalSDK: "googlepay",
              isCompatibleWithSDK: function (e) {
                return "android" === e.platform;
              },
            },
            cred: {
              code: "cred",
              logo: Fa + "checkout/cred.png",
              uri: "credpay",
              package_name: "com.dreamplug.androidapp",
              isCompatibleWithSDK: function (e) {
                var n = e.platform;
                return "android" === n || "ios" === n;
              },
            },
          },
          ((Ka = {}),
          Object.keys(Ba).forEach(function (e) {
            Ka[Ba[e]] = {
              code: Ba[e],
              logo: $a + "international/" + Ba[e] + ".png",
              uri: "",
              package_name: "",
              isCompatibleWithSDK: function (e) {
                var n = e.platform;
                return "android" === n || "ios" === n;
              },
            };
          }),
          Ka)
        ),
        Ga = function (e) {
          switch (e) {
            case "card":
              return [Ua.google_pay.code, Ua.cred.code];
            case "international":
              return [Ua.trustly, Ua.poli, Ua.sofort, Ua.giropay];
            default:
              return [];
          }
        };
      function Ha(e) {
        (this.name = e),
          (this._exists = !1),
          (this.platform = ""),
          (this.bridge = {}),
          this.init();
      }
      Ha.prototype = {
        init: function () {
          var e = this.name,
            n = window[e],
            t = ((window.webkit || {}).messageHandlers || {})[e];
          t
            ? ((this._exists = !0), (this.bridge = t), (this.platform = "ios"))
            : n &&
              ((this._exists = !0),
              (this.bridge = n),
              (this.platform = "android"));
        },
        exists: function () {
          return this._exists;
        },
        get: function (e) {
          if (this.exists())
            if ("android" === this.platform) {
              if (rn(this.bridge[e])) return this.bridge[e];
            } else if ("ios" === this.platform) return this.bridge.postMessage;
        },
        has: function (e) {
          return !(!this.exists() || !this.get(e));
        },
        callAndroid: function (e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            t[r - 1] = arguments[r];
          t = t.map(function (e) {
            return "object" === y(e) ? JSON.stringify(e) : e;
          });
          var o = this.get(e);
          if (o) return o.apply(this.bridge, t);
        },
        callIos: function (e) {
          var n = this.get(e);
          if (n)
            try {
              var t = { action: e },
                r = arguments.length <= 1 ? void 0 : arguments[1];
              return r && (t.body = r), n.call(this.bridge, t);
            } catch (e) {}
        },
        call: function (e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            t[r - 1] = arguments[r];
          var o = this.get(e);
          (t = [e].concat(t)),
            o && (this.callAndroid.apply(this, t), this.callIos.apply(this, t));
        },
      };
      new Ha("CheckoutBridge"), new Ha("StorageBridge");
      var Za = [
        { package_name: Ma, method: "upi" },
        { package_name: Ia, method: "upi" },
        { package_name: "cred", method: "app" },
      ];
      var Ya = {};
      Za.forEach(function (e) {
        Ya[e.package_name] = !1;
      });
      Ga("card");
      var Va = (function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : location.search;
        return tn(e) ? En(e.slice(1)) : {};
      })();
      function Wa() {
        return G(window, "webkit.messageHandlers.CheckoutBridge")
          ? { platform: "ios" }
          : {
              platform: Va.platform || "web",
              library: "checkoutjs",
              version: (Va.version || Kt) + "",
            };
      }
      var Ja = {
        AF: {
          pattern: "^[0-9]{4}$",
          name: "Afghanistan",
          phone_number_regex: null,
          dial_code: "93",
        },
        AL: {
          pattern: null,
          name: "Albania",
          phone_number_regex: null,
          dial_code: "355",
        },
        AN: {
          pattern: null,
          name: "Netherlands Antilles",
          phone_number_regex: null,
          dial_code: "599",
        },
        AQ: {
          pattern: null,
          name: "Antarctica",
          phone_number_regex: null,
          dial_code: "672",
        },
        AX: {
          pattern: null,
          name: "Åland Islands",
          phone_number_regex: null,
          dial_code: "358",
        },
        CC: {
          pattern: null,
          name: "Cocos Islands",
          phone_number_regex: null,
          dial_code: "61",
        },
        CX: {
          pattern: null,
          name: "Christmas Island",
          phone_number_regex: null,
          dial_code: "61",
        },
        EH: {
          pattern: null,
          name: "Western Sahara",
          phone_number_regex: null,
          dial_code: "212",
        },
        DZ: {
          pattern: "^[0-9]{5}$",
          name: "Algeria",
          phone_number_regex: null,
          dial_code: "213",
        },
        AS: {
          pattern: null,
          name: "American Samoa",
          phone_number_regex: null,
          dial_code: "1684",
        },
        AD: {
          pattern: "^AD ?[0-9]{3}$",
          name: "Andorra",
          phone_number_regex: null,
          dial_code: "376",
        },
        AO: {
          pattern: null,
          name: "Angola",
          phone_number_regex: null,
          dial_code: "244",
        },
        AI: {
          pattern: null,
          name: "Anguilla",
          phone_number_regex: null,
          dial_code: "1264",
        },
        AG: {
          pattern: null,
          name: "Antigua and Barbuda",
          phone_number_regex: null,
          dial_code: "1268",
        },
        AR: {
          pattern: "^[A-Z]{1}[0-9]{4}[A-Z]{3}$",
          name: "Argentina",
          phone_number_regex: null,
          dial_code: "54",
        },
        AM: {
          pattern: "^[0-9]{4}$",
          name: "Armenia",
          phone_number_regex: null,
          dial_code: "374",
        },
        AW: {
          pattern: null,
          name: "Aruba",
          phone_number_regex: null,
          dial_code: "297",
        },
        AU: {
          pattern: "^[0-9]{4}$",
          name: "Australia",
          phone_number_regex: null,
          dial_code: "61",
        },
        AT: {
          pattern: "^[0-9]{4}$",
          name: "Austria",
          phone_number_regex: null,
          dial_code: "43",
        },
        AZ: {
          pattern: "^[0-9]{4}$",
          name: "Azerbaijan",
          phone_number_regex: null,
          dial_code: "994",
        },
        BS: {
          pattern: null,
          name: "Bahamas",
          phone_number_regex: null,
          dial_code: "1242",
        },
        BH: {
          pattern: null,
          name: "Bahrain",
          phone_number_regex: null,
          dial_code: "973",
        },
        BD: {
          pattern: "^[0-9]{4}$",
          name: "Bangladesh",
          phone_number_regex: null,
          dial_code: "880",
        },
        BB: {
          pattern: "^BB[0-9]{5}$",
          name: "Barbados",
          phone_number_regex: null,
          dial_code: "1246",
        },
        BY: {
          pattern: "^[0-9]{6}$",
          name: "Belarus",
          phone_number_regex: null,
          dial_code: "375",
        },
        BE: {
          pattern: "^[0-9]{4}$",
          name: "Belgium",
          phone_number_regex: null,
          dial_code: "32",
        },
        BZ: {
          pattern: null,
          name: "Belize",
          phone_number_regex: null,
          dial_code: "501",
        },
        BJ: {
          pattern: null,
          name: "Benin",
          phone_number_regex: null,
          dial_code: "229",
        },
        BM: {
          pattern: "^[A-Z]{2}[0-9]{2}$",
          name: "Bermuda",
          phone_number_regex: null,
          dial_code: "1441",
        },
        BT: {
          pattern: "^[0-9]{5}$",
          name: "Bhutan",
          phone_number_regex: null,
          dial_code: "975",
        },
        BO: {
          pattern: null,
          name: "Bolivia",
          phone_number_regex: null,
          dial_code: "591",
        },
        BA: {
          pattern: null,
          name: "Bosnia and Herzegovina",
          phone_number_regex: null,
          dial_code: "387",
        },
        BW: {
          pattern: null,
          name: "Botswana",
          phone_number_regex: null,
          dial_code: "267",
        },
        BR: {
          pattern: "^[0-9]{5}-[0-9]{3}$",
          name: "Brazil",
          phone_number_regex: null,
          dial_code: "55",
        },
        BN: {
          pattern: "^[A-Z]{2}[0-9]{4}$",
          name: "Brunei",
          phone_number_regex: null,
          dial_code: "673",
        },
        BG: {
          pattern: "^[0-9]{4}$",
          name: "Bulgaria",
          phone_number_regex: null,
          dial_code: "359",
        },
        BF: {
          pattern: null,
          name: "Burkina Faso",
          phone_number_regex: null,
          dial_code: "226",
        },
        BI: {
          pattern: null,
          name: "Burundi",
          phone_number_regex: null,
          dial_code: "257",
        },
        KH: {
          pattern: "^[0-9]{5}$",
          name: "Cambodia",
          phone_number_regex: null,
          dial_code: "855",
        },
        CM: {
          pattern: null,
          name: "Cameroon",
          phone_number_regex: null,
          dial_code: "237",
        },
        CA: {
          pattern: "^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$",
          name: "Canada",
          phone_number_regex: null,
          dial_code: "1",
        },
        CV: {
          pattern: null,
          name: "Cape Verde",
          phone_number_regex: null,
          dial_code: "238",
        },
        KY: {
          pattern: "^[A-Z]{2}[0-9]-[0-9]{4}$",
          name: "Cayman Islands",
          phone_number_regex: null,
          dial_code: "1345",
        },
        CF: {
          pattern: null,
          name: "Central African Republic",
          phone_number_regex: null,
          dial_code: "236",
        },
        TD: {
          pattern: null,
          name: "Chad",
          phone_number_regex: null,
          dial_code: "235",
        },
        CL: {
          pattern: "^[0-9]{7}$",
          name: "Chile",
          phone_number_regex: null,
          dial_code: "56",
        },
        CN: {
          pattern: "^[0-9]{6}$",
          name: "China, People's Republic",
          phone_number_regex: null,
          dial_code: "86",
        },
        CO: {
          pattern: "^[0-9]{6}$",
          name: "Colombia",
          phone_number_regex: null,
          dial_code: "57",
        },
        KM: {
          pattern: null,
          name: "Comoros",
          phone_number_regex: null,
          dial_code: "269",
        },
        CG: {
          pattern: null,
          name: "Congo",
          phone_number_regex: null,
          dial_code: "242",
        },
        CD: {
          pattern: null,
          name: "Congo, The Democratic Republic of",
          phone_number_regex: null,
          dial_code: "243",
        },
        CK: {
          pattern: null,
          name: "Cook Islands",
          phone_number_regex: null,
          dial_code: "682",
        },
        CR: {
          pattern: "^[0-9]{5}$",
          name: "Costa Rica",
          phone_number_regex: null,
          dial_code: "506",
        },
        HR: {
          pattern: "^[0-9]{5}$",
          name: "Croatia",
          phone_number_regex: null,
          dial_code: "385",
        },
        CU: {
          pattern: "^[0-9]{5}$",
          name: "Cuba",
          phone_number_regex: null,
          dial_code: "53",
        },
        CW: {
          pattern: null,
          name: "Curacao",
          phone_number_regex: null,
          dial_code: "599",
        },
        CY: {
          pattern: "^[0-9]{4}$",
          name: "Cyprus",
          phone_number_regex: null,
          dial_code: "357",
        },
        CZ: {
          pattern: "^[0-9]{3} [0-9]{2}$",
          name: "Czech Republic",
          phone_number_regex: null,
          dial_code: "420",
        },
        DK: {
          pattern: "^[0-9]{4}$",
          name: "Denmark",
          phone_number_regex: null,
          dial_code: "45",
        },
        DJ: {
          pattern: null,
          name: "Djibouti",
          phone_number_regex: null,
          dial_code: "253",
        },
        DM: {
          pattern: null,
          name: "Dominica",
          phone_number_regex: null,
          dial_code: "1767",
        },
        DO: {
          pattern: null,
          name: "Dominican Republic",
          phone_number_regex: null,
          dial_code: "1849",
        },
        TL: {
          pattern: null,
          name: "East Timor",
          phone_number_regex: null,
          dial_code: "670",
        },
        EC: {
          pattern: "^[0-9]{6}$",
          name: "Ecuador",
          phone_number_regex: null,
          dial_code: "593",
        },
        EG: {
          pattern: "^[0-9]{5}$",
          name: "Egypt",
          phone_number_regex: null,
          dial_code: "20",
        },
        SV: {
          pattern: null,
          name: "El Salvador",
          phone_number_regex: null,
          dial_code: "503",
        },
        ER: {
          pattern: null,
          name: "Eritrea",
          phone_number_regex: null,
          dial_code: "291",
        },
        EE: {
          pattern: "^[0-9]{5}$",
          name: "Estonia",
          phone_number_regex: null,
          dial_code: "372",
        },
        ET: {
          pattern: "^[0-9]{4}$",
          name: "Ethiopia",
          phone_number_regex: null,
          dial_code: "251",
        },
        FK: {
          pattern: null,
          name: "Falkland Islands",
          phone_number_regex: null,
          dial_code: "500",
        },
        FO: {
          pattern: null,
          name: "Faroe Islands",
          phone_number_regex: null,
          dial_code: "298",
        },
        FJ: {
          pattern: null,
          name: "Fiji",
          phone_number_regex: null,
          dial_code: "679",
        },
        FI: {
          pattern: "^[0-9]{5}$",
          name: "Finland",
          phone_number_regex: null,
          dial_code: "358",
        },
        FR: {
          pattern: "^[0-9]{5}$",
          name: "France",
          phone_number_regex: null,
          dial_code: "33",
        },
        PF: {
          pattern: null,
          name: "French Polynesia",
          phone_number_regex: null,
          dial_code: "689",
        },
        GA: {
          pattern: null,
          name: "Gabon",
          phone_number_regex: null,
          dial_code: "241",
        },
        GM: {
          pattern: null,
          name: "Gambia",
          phone_number_regex: null,
          dial_code: "220",
        },
        GE: {
          pattern: null,
          name: "Georgia",
          phone_number_regex: null,
          dial_code: "995",
        },
        DE: {
          pattern: "^[0-9]{5}$",
          name: "Germany",
          phone_number_regex: null,
          dial_code: "49",
        },
        GH: {
          pattern: null,
          name: "Ghana",
          phone_number_regex: null,
          dial_code: "233",
        },
        GI: {
          pattern: null,
          name: "Gibraltar",
          phone_number_regex: null,
          dial_code: "350",
        },
        GR: {
          pattern: "^[0-9]{3} ?[0-9]{2}$",
          name: "Greece",
          phone_number_regex: null,
          dial_code: "30",
        },
        GL: {
          pattern: null,
          name: "Greenland",
          phone_number_regex: null,
          dial_code: "299",
        },
        GD: {
          pattern: null,
          name: "Grenada",
          phone_number_regex: null,
          dial_code: "1473",
        },
        GP: {
          pattern: null,
          name: "Guadeloupe",
          phone_number_regex: null,
          dial_code: "590",
        },
        GU: {
          pattern: null,
          name: "Guam",
          phone_number_regex: null,
          dial_code: "1671",
        },
        FM: {
          pattern: null,
          name: "Micronesia",
          phone_number_regex: null,
          dial_code: "691",
        },
        GT: {
          pattern: null,
          name: "Guatemala",
          phone_number_regex: null,
          dial_code: "502",
        },
        IM: {
          pattern: null,
          name: "Isle of Man",
          phone_number_regex: null,
          dial_code: "441624",
        },
        IO: {
          pattern: null,
          name: "British Indian Ocean Territory",
          phone_number_regex: null,
          dial_code: "246",
        },
        MF: {
          pattern: "^97150$",
          name: "Saint Martin",
          phone_number_regex: null,
          dial_code: "590",
        },
        NF: {
          pattern: null,
          name: "Norfolk Island",
          phone_number_regex: null,
          dial_code: "672",
        },
        PM: {
          pattern: null,
          name: "Saint Pierre and Miquelon",
          phone_number_regex: null,
          dial_code: "508",
        },
        PN: {
          pattern: null,
          name: "Pitcairn",
          phone_number_regex: null,
          dial_code: "64",
        },
        GG: {
          pattern: null,
          name: "Guernsey",
          phone_number_regex: null,
          dial_code: "441481",
        },
        PS: {
          pattern: null,
          name: "Palestine",
          phone_number_regex: null,
          dial_code: "970",
        },
        GW: {
          pattern: "^[0-9]{4}$",
          name: "Guinea-Bissau",
          phone_number_regex: null,
          dial_code: "245",
        },
        GQ: {
          pattern: null,
          name: "Guinea-Equatorial",
          phone_number_regex: null,
          dial_code: "240",
        },
        GN: {
          pattern: "^[0-9]{3}$",
          name: "Guinea Republic",
          phone_number_regex: null,
          dial_code: "224",
        },
        GY: {
          pattern: null,
          name: "Guyana (British)",
          phone_number_regex: null,
          dial_code: "592",
        },
        GF: {
          pattern: null,
          name: "Guyana (French)",
          phone_number_regex: null,
          dial_code: "594",
        },
        HT: {
          pattern: "^[0-9]{4}$",
          name: "Haiti",
          phone_number_regex: null,
          dial_code: "509",
        },
        HN: {
          pattern: null,
          name: "Honduras",
          phone_number_regex: null,
          dial_code: "504",
        },
        HK: {
          pattern: null,
          name: "Hong Kong",
          phone_number_regex: null,
          dial_code: "852",
        },
        HU: {
          pattern: "^[0-9]{4}$",
          name: "Hungary",
          phone_number_regex: null,
          dial_code: "36",
        },
        IS: {
          pattern: "^[0-9]{3}$",
          name: "Iceland",
          phone_number_regex: null,
          dial_code: "354",
        },
        IN: {
          pattern: "^[1-9][0-9]{5}$",
          name: "India",
          phone_number_regex: null,
          dial_code: "91",
        },
        ID: {
          pattern: "^[0-9]{5}$",
          name: "Indonesia",
          phone_number_regex: null,
          dial_code: "62",
        },
        IR: {
          pattern: "null",
          name: "Iran",
          phone_number_regex: null,
          dial_code: "98",
        },
        IQ: {
          pattern: "^[0-9]{5}$",
          name: "Iraq",
          phone_number_regex: null,
          dial_code: "964",
        },
        IE: {
          pattern:
            "(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$",
          name: "Ireland, Republic of",
          phone_number_regex: null,
          dial_code: "353",
        },
        IL: {
          pattern: "^[0-9]{5}|[0-9]{7}$",
          name: "Israel",
          phone_number_regex: null,
          dial_code: "972",
        },
        IT: {
          pattern: "^[0-9]{5}$",
          name: "Italy",
          phone_number_regex: null,
          dial_code: "39",
        },
        SJ: {
          pattern: null,
          name: "Svalbard and Jan Mayen",
          phone_number_regex: null,
          dial_code: "47",
        },
        SM: {
          pattern: null,
          name: "San Marino",
          phone_number_regex: null,
          dial_code: "378",
        },
        CI: {
          pattern: null,
          name: "Ivory Coast",
          phone_number_regex: null,
          dial_code: "225",
        },
        JM: {
          pattern: "(JM)[A-Z]{3}[0-9]{2}$",
          name: "Jamaica",
          phone_number_regex: null,
          dial_code: "1876",
        },
        JP: {
          pattern: "^[0-9]{3}-?[0-9]{4}$",
          name: "Japan",
          phone_number_regex: null,
          dial_code: "81",
        },
        JE: {
          pattern: null,
          name: "Jersey",
          phone_number_regex: null,
          dial_code: "441534",
        },
        JO: {
          pattern: "^[0-9]{5}$",
          name: "Jordan",
          phone_number_regex: null,
          dial_code: "962",
        },
        KZ: {
          pattern: "^[0-9]{6}$",
          name: "Kazakhstan",
          phone_number_regex: null,
          dial_code: "7",
        },
        TJ: {
          pattern: "^[0-9]{6}$",
          name: "Tajikistan",
          phone_number_regex: null,
          dial_code: "992",
        },
        TK: {
          pattern: null,
          name: "Tokelau",
          phone_number_regex: null,
          dial_code: "690",
        },
        KE: {
          pattern: "^[0-9]{5}$",
          name: "Kenya",
          phone_number_regex: null,
          dial_code: "254",
        },
        KI: {
          pattern: null,
          name: "Kiribati",
          phone_number_regex: null,
          dial_code: "686",
        },
        KR: {
          pattern: "^[0-9]{3}[-][0-9]{3}$",
          name: "Korea, Republic of",
          phone_number_regex: null,
          dial_code: "82",
        },
        KP: {
          pattern: null,
          name: "Korea, The D.P.R of",
          phone_number_regex: null,
          dial_code: "850",
        },
        XK: {
          pattern: null,
          name: "Kosovo",
          phone_number_regex: null,
          dial_code: "383",
        },
        KW: {
          pattern: "^[0-9]{5}$",
          name: "Kuwait",
          phone_number_regex: null,
          dial_code: "965",
        },
        KG: {
          pattern: "^[0-9]{6}$",
          name: "Kyrgyzstan",
          phone_number_regex: null,
          dial_code: "996",
        },
        LA: {
          pattern: "^[0-9]{5}$",
          name: "Laos",
          phone_number_regex: null,
          dial_code: "856",
        },
        LV: {
          pattern: "^[0-9]{4}$",
          name: "Latvia",
          phone_number_regex: null,
          dial_code: "371",
        },
        LB: {
          pattern: "^[0-9]{4} ?[0-9]{4}$",
          name: "Lebanon",
          phone_number_regex: null,
          dial_code: "961",
        },
        LS: {
          pattern: "^[0-9]{3}$",
          name: "Lesotho",
          phone_number_regex: null,
          dial_code: "266",
        },
        LR: {
          pattern: "^[0-9]{4}$",
          name: "Liberia",
          phone_number_regex: null,
          dial_code: "231",
        },
        LY: {
          pattern: null,
          name: "Libya",
          phone_number_regex: null,
          dial_code: "218",
        },
        LI: {
          pattern: null,
          name: "Liechtenstein",
          phone_number_regex: null,
          dial_code: "423",
        },
        LT: {
          pattern: "^LT-[0-9]{5}$",
          name: "Lithuania",
          phone_number_regex: null,
          dial_code: "370",
        },
        LU: {
          pattern: "^[0-9]{4}$",
          name: "Luxembourg",
          phone_number_regex: null,
          dial_code: "352",
        },
        MO: {
          pattern: null,
          name: "Macau",
          phone_number_regex: null,
          dial_code: "853",
        },
        MK: {
          pattern: null,
          name: "Macedonia, Republic of",
          phone_number_regex: null,
          dial_code: "389",
        },
        MG: {
          pattern: "^[0-9]{3}$",
          name: "Madagascar",
          phone_number_regex: null,
          dial_code: "261",
        },
        MW: {
          pattern: null,
          name: "Malawi",
          phone_number_regex: null,
          dial_code: "265",
        },
        MY: {
          pattern: "^[0-9]{5}$",
          name: "Malaysia",
          phone_number_regex:
            "^(\\+60|0)?(1)-*[0-9]{8}$|^(\\+60|0)?(11)-*[0-9]{8}$",
          dial_code: "60",
        },
        MV: {
          pattern: "^[0-9]{5}$",
          name: "Maldives",
          phone_number_regex: null,
          dial_code: "960",
        },
        ML: {
          pattern: null,
          name: "Mali",
          phone_number_regex: null,
          dial_code: "223",
        },
        MT: {
          pattern: null,
          name: "Malta",
          phone_number_regex: null,
          dial_code: "356",
        },
        MH: {
          pattern: null,
          name: "Marshall Islands",
          phone_number_regex: null,
          dial_code: "692",
        },
        MQ: {
          pattern: null,
          name: "Martinique",
          phone_number_regex: null,
          dial_code: "596",
        },
        MR: {
          pattern: null,
          name: "Mauritania",
          phone_number_regex: null,
          dial_code: "222",
        },
        MU: {
          pattern: "^[0-9]{5}$",
          name: "Mauritius",
          phone_number_regex: null,
          dial_code: "230",
        },
        YT: {
          pattern: null,
          name: "Mayotte",
          phone_number_regex: null,
          dial_code: "262",
        },
        MX: {
          pattern: "^[0-9]{5}$",
          name: "Mexico",
          phone_number_regex: null,
          dial_code: "52",
        },
        MD: {
          pattern: "^MD-?[0-9]{4}$",
          name: "Moldova, Republic of",
          phone_number_regex: null,
          dial_code: "373",
        },
        MC: {
          pattern: null,
          name: "Monaco",
          phone_number_regex: null,
          dial_code: "377",
        },
        MN: {
          pattern: "^[0-9]{5}$",
          name: "Mongolia",
          phone_number_regex: null,
          dial_code: "976",
        },
        ME: {
          pattern: null,
          name: "Montenegro",
          phone_number_regex: null,
          dial_code: "382",
        },
        MS: {
          pattern: "^MSR ?[0-9]{4}$",
          name: "Montserrat",
          phone_number_regex: null,
          dial_code: "1664",
        },
        MA: {
          pattern: "^[0-9]{5}$",
          name: "Morocco",
          phone_number_regex: null,
          dial_code: "212",
        },
        MZ: {
          pattern: "^[0-9]{4}$",
          name: "Mozambique",
          phone_number_regex: null,
          dial_code: "258",
        },
        MM: {
          pattern: "^[0-9]{5}$",
          name: "Myanmar",
          phone_number_regex: null,
          dial_code: "95",
        },
        NA: {
          pattern: null,
          name: "Namibia",
          phone_number_regex: null,
          dial_code: "264",
        },
        NR: {
          pattern: null,
          name: "Nauru",
          phone_number_regex: null,
          dial_code: "674",
        },
        NP: {
          pattern: "^[0-9]{5}$",
          name: "Nepal",
          phone_number_regex: null,
          dial_code: "977",
        },
        NL: {
          pattern: "^(?:NL-)?([0-9]{4}) ?([A-Za-z]{2})$",
          name: "Netherlands",
          phone_number_regex: null,
          dial_code: "31",
        },
        NC: {
          pattern: null,
          name: "New Caledonia",
          phone_number_regex: null,
          dial_code: "687",
        },
        NZ: {
          pattern: "^[0-9]{4}$",
          name: "New Zealand",
          phone_number_regex: null,
          dial_code: "64",
        },
        NI: {
          pattern: null,
          name: "Nicaragua",
          phone_number_regex: null,
          dial_code: "505",
        },
        NE: {
          pattern: "^[0-9]{4}$",
          name: "Niger",
          phone_number_regex: null,
          dial_code: "227",
        },
        NG: {
          pattern: "^[0-9]{6}$",
          name: "Nigeria",
          phone_number_regex: null,
          dial_code: "234",
        },
        NU: {
          pattern: null,
          name: "Niue",
          phone_number_regex: null,
          dial_code: "683",
        },
        MP: {
          pattern: null,
          name: "Northern Mariana Islands",
          phone_number_regex: null,
          dial_code: "1670",
        },
        NO: {
          pattern: "^[0-9]{4}$",
          name: "Norway",
          phone_number_regex: null,
          dial_code: "47",
        },
        OM: {
          pattern: "^[0-9]{3}$",
          name: "Oman",
          phone_number_regex: null,
          dial_code: "968",
        },
        PK: {
          pattern: null,
          name: "Pakistan",
          phone_number_regex: null,
          dial_code: "92",
        },
        PW: {
          pattern: null,
          name: "Palau",
          phone_number_regex: null,
          dial_code: "680",
        },
        PA: {
          pattern: "^[0-9]{4}$",
          name: "Panama",
          phone_number_regex: null,
          dial_code: "507",
        },
        PG: {
          pattern: "^[0-9]{3}$",
          name: "Papua New Guinea",
          phone_number_regex: null,
          dial_code: "675",
        },
        PY: {
          pattern: "^[0-9]{4}$",
          name: "Paraguay",
          phone_number_regex: null,
          dial_code: "595",
        },
        PE: {
          pattern: "^[0-9]{5}$",
          name: "Peru",
          phone_number_regex: null,
          dial_code: "51",
        },
        PH: {
          pattern: "^[0-9]{4}$",
          name: "Philippines",
          phone_number_regex: null,
          dial_code: "63",
        },
        PL: {
          pattern: "^[0-9]{2}-[0-9]{3}$",
          name: "Poland",
          phone_number_regex: null,
          dial_code: "48",
        },
        PT: {
          pattern: "^[0-9]{4}-[0-9]{3}$",
          name: "Portugal",
          phone_number_regex: null,
          dial_code: "351",
        },
        PR: {
          pattern: null,
          name: "Puerto Rico",
          phone_number_regex: null,
          dial_code: "1939",
        },
        QA: {
          pattern: null,
          name: "Qatar",
          phone_number_regex: null,
          dial_code: "974",
        },
        RE: {
          pattern: null,
          name: "Réunion",
          phone_number_regex: null,
          dial_code: "262",
        },
        RO: {
          pattern: "^[0-9]{6}$",
          name: "Romania",
          phone_number_regex: null,
          dial_code: "40",
        },
        RU: {
          pattern: "^[0-9]{6}$",
          name: "Russian Federation",
          phone_number_regex: null,
          dial_code: "7",
        },
        RW: {
          pattern: null,
          name: "Rwanda",
          phone_number_regex: null,
          dial_code: "250",
        },
        WS: {
          pattern: null,
          name: "Samoa",
          phone_number_regex: null,
          dial_code: "685",
        },
        ST: {
          pattern: null,
          name: "Sao Tome and Principe",
          phone_number_regex: null,
          dial_code: "239",
        },
        SA: {
          pattern: "^[0-9]{5}(-[0-9]{4})?$",
          name: "Saudi Arabia",
          phone_number_regex: null,
          dial_code: "966",
        },
        SN: {
          pattern: "^[0-9]{5}$",
          name: "Senegal",
          phone_number_regex: null,
          dial_code: "221",
        },
        RS: {
          pattern: "^[0-9]{5}$",
          name: "Serbia",
          phone_number_regex: null,
          dial_code: "381",
        },
        SC: {
          pattern: null,
          name: "Seychelles",
          phone_number_regex: null,
          dial_code: "248",
        },
        SL: {
          pattern: null,
          name: "Sierra Leone",
          phone_number_regex: null,
          dial_code: "232",
        },
        SG: {
          pattern: "^[0-9]{6}$",
          name: "Singapore",
          phone_number_regex: null,
          dial_code: "65",
        },
        SK: {
          pattern: "^[0-9]{3} ?[0-9]{2}$",
          name: "Slovakia",
          phone_number_regex: null,
          dial_code: "421",
        },
        SI: {
          pattern: "^[0-9]{4}$",
          name: "Slovenia",
          phone_number_regex: null,
          dial_code: "386",
        },
        SB: {
          pattern: null,
          name: "Solomon Islands",
          phone_number_regex: null,
          dial_code: "677",
        },
        SO: {
          pattern: null,
          name: "Somalia",
          phone_number_regex: null,
          dial_code: "252",
        },
        ZA: {
          pattern: "^[0-9]{4}$",
          name: "South Africa",
          phone_number_regex: null,
          dial_code: "27",
        },
        SS: {
          pattern: null,
          name: "South Sudan",
          phone_number_regex: null,
          dial_code: "211",
        },
        ES: {
          pattern: "^[0-9]{5}$",
          name: "Spain",
          phone_number_regex: null,
          dial_code: "34",
        },
        LK: {
          pattern: "^[0-9]{5}$",
          name: "Sri Lanka",
          phone_number_regex: null,
          dial_code: "94",
        },
        BL: {
          pattern: null,
          name: "St. Barthélemy",
          phone_number_regex: null,
          dial_code: "590",
        },
        SH: {
          pattern: null,
          name: "St. Helena",
          phone_number_regex: null,
          dial_code: "290",
        },
        KN: {
          pattern: "^[A-Z]{2}[0-9]{4}$",
          name: "St. Kitts and Nevis",
          phone_number_regex: null,
          dial_code: "1869",
        },
        LC: {
          pattern: "^[A-Z]{2}[0-9]{2} ?[0-9]{3}$",
          name: "St. Lucia",
          phone_number_regex: null,
          dial_code: "1758",
        },
        SX: {
          pattern: null,
          name: "St. Maarten",
          phone_number_regex: null,
          dial_code: "1721",
        },
        VC: {
          pattern: "^VC[0-9]{4}$",
          name: "St. Vincent and the Grenadines",
          phone_number_regex: null,
          dial_code: "1784",
        },
        SD: {
          pattern: "^[0-9]{5}$",
          name: "Sudan",
          phone_number_regex: null,
          dial_code: "249",
        },
        SR: {
          pattern: null,
          name: "Suriname",
          phone_number_regex: null,
          dial_code: "597",
        },
        SZ: {
          pattern: "^[A-Z]{1}[0-9]{3}$",
          name: "Swaziland",
          phone_number_regex: null,
          dial_code: "268",
        },
        SE: {
          pattern: "^[0-9]{3} ?[0-9]{2}$",
          name: "Sweden",
          phone_number_regex: null,
          dial_code: "46",
        },
        CH: {
          pattern: "^[0-9]{4}$",
          name: "Switzerland",
          phone_number_regex: null,
          dial_code: "41",
        },
        SY: {
          pattern: null,
          name: "Syria",
          phone_number_regex: null,
          dial_code: "963",
        },
        TW: {
          pattern: "^[0-9]{3}(-[0-9]{2})?$",
          name: "Taiwan",
          phone_number_regex: null,
          dial_code: "886",
        },
        TZ: {
          pattern: "^[0-9]{5}$",
          name: "Tanzania",
          phone_number_regex: null,
          dial_code: "255",
        },
        TH: {
          pattern: "^[0-9]{5}$",
          name: "Thailand",
          phone_number_regex: null,
          dial_code: "66",
        },
        TG: {
          pattern: null,
          name: "Togo",
          phone_number_regex: null,
          dial_code: "228",
        },
        TO: {
          pattern: null,
          name: "Tonga",
          phone_number_regex: null,
          dial_code: "676",
        },
        TT: {
          pattern: "^[0-9]{6}$",
          name: "Trinidad and Tobago",
          phone_number_regex: null,
          dial_code: "1868",
        },
        TN: {
          pattern: "^[0-9]{4}$",
          name: "Tunisia",
          phone_number_regex: null,
          dial_code: "216",
        },
        TR: {
          pattern: "^[0-9]{5}$",
          name: "Turkey",
          phone_number_regex: null,
          dial_code: "90",
        },
        TM: {
          pattern: "^[0-9]{6}$",
          name: "Turkmenistan",
          phone_number_regex: null,
          dial_code: "993",
        },
        TC: {
          pattern: "^TKCA ?1ZZ$",
          name: "Turks and Caicos Islands",
          phone_number_regex: null,
          dial_code: "1649",
        },
        TV: {
          pattern: null,
          name: "Tuvalu",
          phone_number_regex: null,
          dial_code: "688",
        },
        UG: {
          pattern: null,
          name: "Uganda",
          phone_number_regex: null,
          dial_code: "256",
        },
        UA: {
          pattern: "^[0-9]{5}$",
          name: "Ukraine",
          phone_number_regex: null,
          dial_code: "380",
        },
        AE: {
          pattern: null,
          name: "United Arab Emirates",
          phone_number_regex: null,
          dial_code: "971",
        },
        GB: {
          pattern:
            "^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$",
          name: "United Kingdom",
          phone_number_regex: null,
          dial_code: "44",
        },
        US: {
          pattern: "^[0-9]{5}(?:[-s][0-9]{4})?$",
          name: "United States of America",
          phone_number_regex: "^\\(\\d{3}\\)[\\s-]?\\d{3}-?\\d{4}$",
          dial_code: "1",
        },
        UY: {
          pattern: "^[0-9]{5}$",
          name: "Uruguay",
          phone_number_regex: null,
          dial_code: "598",
        },
        UZ: {
          pattern: "^[0-9]{6}$",
          name: "Uzbekistan",
          phone_number_regex: null,
          dial_code: "998",
        },
        WF: {
          pattern: null,
          name: "Wallis and Futuna",
          phone_number_regex: null,
          dial_code: "681",
        },
        VA: {
          pattern: null,
          name: "Vatican",
          phone_number_regex: null,
          dial_code: "379",
        },
        VU: {
          pattern: null,
          name: "Vanuatu",
          phone_number_regex: null,
          dial_code: "678",
        },
        VE: {
          pattern: "^[0-9]{4}(-[A-Z]{1})?$",
          name: "Venezuela",
          phone_number_regex: null,
          dial_code: "58",
        },
        VN: {
          pattern: "^[0-9]{6}$",
          name: "Vietnam",
          phone_number_regex: null,
          dial_code: "84",
        },
        VG: {
          pattern: null,
          name: "British Virgin Islands",
          phone_number_regex: null,
          dial_code: "1284",
        },
        VI: {
          pattern: null,
          name: "U.S. Virgin Islands",
          phone_number_regex: null,
          dial_code: "1340",
        },
        YE: {
          pattern: null,
          name: "Yemen",
          phone_number_regex: null,
          dial_code: "967",
        },
        ZM: {
          pattern: "^[0-9]{5}$",
          name: "Zambia",
          phone_number_regex: null,
          dial_code: "260",
        },
        ZW: {
          pattern: null,
          name: "Zimbabwe",
          phone_number_regex: null,
          dial_code: "263",
        },
      };
      Object.keys(Ja).reduce(function (e, n) {
        return (e[n] = Ja[n].dial_code), e;
      }, {}),
        Object.keys(Ja).reduce(function (e, n) {
          return (e[n] = n), e;
        }, {});
      function qa() {
        return ["checkoutjs", "hosted"].includes(Er.props.library);
      }
      function Qa() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 ? arguments[1] : void 0,
          t = ""
            .concat($t.api)
            .concat($t.version, "standard_checkout/")
            .concat(e);
        return bt(t, { session_token: n });
      }
      function Xa() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return qa() && i.g.session_token && n
          ? Qa(e, i.g.session_token)
          : "".concat($t.api).concat($t.version).concat(e);
      }
      var ei,
        ni = [
          "key",
          "order_id",
          "invoice_id",
          "subscription_id",
          "auth_link_id",
          "payment_link_id",
          "contact_id",
          "checkout_config_id",
        ];
      function ti(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function ri(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ti(Object(t), !0).forEach(function (n) {
                v(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ti(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var oi = !1;
      function ai(e) {
        var n,
          t = this;
        if (!fn(this, ai)) return new ai(e);
        ka.call(this),
          (this.id = Er.makeUid()),
          ba.setContext(Uo, this.id),
          ho.setR(this);
        try {
          (n = (function (e) {
            (e && "object" === y(e)) || On("Invalid options");
            var n = new ja(e);
            return (
              (function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  t = !0;
                (e = e.get()),
                  X(si, function (r, o) {
                    if (!n.includes(o) && o in e) {
                      var a = r(e[o], e);
                      a && ((t = !1), On("Invalid " + o + " (" + a + ")"));
                    }
                  });
              })(n, ["amount"]),
              (function (e) {
                X(e, function (n, t) {
                  tn(n)
                    ? n.length > 254 && (e[t] = n.slice(0, 254))
                    : nn(n) || en(n) || delete e[t];
                });
              })(n.get("notes")),
              n
            );
          })(e)),
            (this.get = n.get),
            (this.set = n.set);
        } catch (n) {
          var r = n.message;
          (this.get && this.isLiveMode()) ||
            (H(e) && !e.parent && i.g.alert(r)),
            On(r);
        }
        [
          "integration",
          "integration_version",
          "integration_parent_version",
        ].forEach(function (e) {
          var n = t.get("_.".concat(e));
          n && (Er.props[e] = n);
        }),
          ni.every(function (e) {
            return !n.get(e);
          }) && On("No key passed"),
          We.updateInstance(this),
          this.postInit();
      }
      ai.sendMessage = function (e) {
        throw new Error("override missing for event - ".concat(e.event));
      };
      var ii = (ai.prototype = new ka());
      function ci(e, n) {
        return ht.jsonp({
          url: Xa("preferences"),
          data: e,
          callback: function (e) {
            (We.preferenceResponse = e), n(e);
          },
        });
      }
      function ui(e) {
        if (e) {
          var n = {},
            t = fe("key");
          t && (n.key_id = t);
          var r = [fe("currency")],
            o = fe("display_currency"),
            a = fe("display_amount");
          o && "".concat(a).length && r.push(o),
            (n.currency = r),
            [
              "order_id",
              "customer_id",
              "invoice_id",
              "payment_link_id",
              "subscription_id",
              "auth_link_id",
              "recurring",
              "subscription_card_change",
              "account_id",
              "contact_id",
              "checkout_config_id",
              "amount",
            ].forEach(function (e) {
              var t = fe(e);
              t && (n[e] = t);
            }),
            (n["_[build]"] = Kt),
            (n["_[checkout_id]"] = e.id),
            (n["_[library]"] = Er.props.library),
            (n["_[platform]"] = Er.props.platform),
            "desktop" === Ve() && (n.qr_required = !0);
          var i =
            {
              "_[agent][platform]": Wa().platform,
              "_[agent][device]":
                null != c && c.cred
                  ? "desktop" !== Ve()
                    ? "mobile"
                    : "desktop"
                  : Ve(),
              "_[agent][os]":
                Re || Ae
                  ? "iOS"
                  : De
                  ? "android"
                  : je
                  ? "windows"
                  : Te
                  ? "linux"
                  : Me
                  ? "macOS"
                  : "other",
            } || {};
          return (n = ri(ri({}, n), i));
        }
        var c;
      }
      (ii.postInit = No),
        (ii.onNew = function (e, n) {
          var t = this;
          "ready" === e &&
            (this.prefs
              ? n(e, this.prefs)
              : ci(ui(this), function (e) {
                  e.methods && ((t.prefs = e), (t.methods = e.methods)),
                    n(t.prefs, e);
                }));
        }),
        (ii.emi_calculator = function (e, n) {
          return ai.emi.calculator(this.get("amount") / 100, e, n);
        }),
        (ai.emi = {
          calculator: function (e, n, t) {
            if (!t) return Math.ceil(e / n);
            t /= 1200;
            var r = Math.pow(1 + t, n);
            return parseInt((e * t * r) / (r - 1), 10);
          },
          calculatePlan: function (e, n, t) {
            var r = this.calculator(e, n, t);
            return { total: t ? r * n : e, installment: r };
          },
        }),
        (ai.payment = {
          getMethods: function (e) {
            return ci({ key_id: ai.defaults.key }, function (n) {
              e(n.methods || n);
            });
          },
          getPrefs: function (e, n) {
            var t = vn();
            return (
              ho.track("prefs:start", { type: w }),
              H(e) &&
                (e["_[request_index]"] = ho.updateRequestIndex("preferences")),
              W(ei) || W(ei.order)
                ? ht({
                    url: kn(Xa("preferences"), e),
                    callback: function (r) {
                      if (
                        (ho.track("prefs:end", {
                          type: w,
                          data: { time: t() },
                        }),
                        r.xhr && 0 === r.xhr.status)
                      )
                        return ci(e, n);
                      n(r);
                    },
                  })
                : (ho.track("prefs:end", { type: w, data: { time: t() } }),
                  void n(ei))
            );
          },
          getRewards: function (e, n) {
            var t = vn();
            return (
              ho.track("rewards:start", { type: w }),
              ht({
                url: kn(Xa("checkout/rewards"), e),
                callback: function (e) {
                  ho.track("rewards:end", { type: w, data: { time: t() } }),
                    n(e);
                },
              })
            );
          },
        }),
        (ii.isLiveMode = function () {
          var e = this.preferences;
          return (
            (!e && /^rzp_l/.test(this.get("key"))) || (e && "live" === e.mode)
          );
        }),
        (ii.getMode = function () {
          try {
            var e = this.preferences;
            return this.get("key") || e
              ? (!e && /^rzp_l/.test(this.get("key"))) ||
                (e && "live" === e.mode)
                ? "live"
                : "test"
              : "pending";
          } catch (e) {
            return "pending";
          }
        }),
        (ii.calculateFees = function (e) {
          var n = this;
          return new Promise(function (t, r) {
            (e = Na(e, n)),
              ht.post({
                url: Xa("payments/calculate/fees"),
                data: e,
                callback: function (e) {
                  return e.error ? r(e) : t(e);
                },
              });
          });
        }),
        (ii.fetchVirtualAccount = function (e) {
          var n = e.customer_id,
            t = e.order_id,
            r = e.notes;
          return new Promise(function (e, o) {
            if (t) {
              var a = { customer_id: n, notes: r };
              n || delete a.customer_id, r || delete a.notes;
              var i = Xa(
                "orders/".concat(t, "/virtual_accounts?x_entity_id=").concat(t)
              );
              ht.post({
                url: i,
                data: a,
                callback: function (n) {
                  return n.error ? o(n) : e(n);
                },
              });
            } else o("Order ID is required to fetch the account details");
          });
        });
      var li,
        si = {
          notes: function (e) {
            if (H(e) && mn(Object.keys(e)) > 15)
              return "At most 15 notes are allowed";
          },
          amount: function (e, n) {
            var t = n.display_currency || n.currency || "INR",
              r = ce(t),
              o = r.minimum,
              a = "";
            if (
              (r.decimals && r.minor
                ? (a = " ".concat(r.minor))
                : r.major && (a = " ".concat(r.major)),
              !(function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 100;
                return !/[^0-9]/.test(e) && (e = parseInt(e, 10)) >= n;
              })(e, o) && !n.recurring)
            )
              return "should be passed in integer"
                .concat(a, ". Minimum value is ")
                .concat(o)
                .concat(a, ", i.e. ")
                .concat(me(o, t));
          },
          currency: function (e) {
            if (!ue.includes(e))
              return "The provided currency is not currently supported";
          },
          display_currency: function (e) {
            if (!(e in le) && e !== ai.defaults.display_currency)
              return "This display currency is not supported";
          },
          display_amount: function (e) {
            if (
              !(e = String(e).replace(/([^0-9.])/g, "")) &&
              e !== ai.defaults.display_amount
            )
              return "";
          },
          payout: function (e, n) {
            if (e) {
              if (!n.key) return "key is required for a Payout";
              if (!n.contact_id) return "contact_id is required for a Payout";
            }
          },
        };
      function di(e, n) {
        return (
          (di = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, n) {
                return (e.__proto__ = n), e;
              }),
          di(e, n)
        );
      }
      function mi(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(n && n.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          n && di(e, n);
      }
      function pi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function fi(e, n) {
        if (n && ("object" === y(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return pi(e);
      }
      function hi(e) {
        return (
          (hi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          hi(e)
        );
      }
      function _i() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function gi(e, n, t) {
        return (
          (gi = _i()
            ? Reflect.construct.bind()
            : function (e, n, t) {
                var r = [null];
                r.push.apply(r, n);
                var o = new (Function.bind.apply(e, r))();
                return t && di(o, t.prototype), o;
              }),
          gi.apply(null, arguments)
        );
      }
      function vi(e) {
        var n = "function" == typeof Map ? new Map() : void 0;
        return (
          (vi = function (e) {
            if (
              null === e ||
              ((t = e),
              -1 === Function.toString.call(t).indexOf("[native code]"))
            )
              return e;
            var t;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== n) {
              if (n.has(e)) return n.get(e);
              n.set(e, r);
            }
            function r() {
              return gi(e, arguments, hi(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              di(r, e)
            );
          }),
          vi(e)
        );
      }
      (ai.configure = function (e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        X(Da(e, Pa), function (e, n) {
          y(Pa[n]) === y(e) && (Pa[n] = e);
        }),
          n.library &&
            ((Er.props.library = n.library), ba.setContext(Jo, n.library)),
          n.referer &&
            ((Er.props.referer = n.referer), ba.setContext(ta, n.referer));
      }),
        (ai.hasCheckoutFrameLoaded = function () {
          return oi;
        }),
        (ai.defaults = Pa),
        (ai.enableLite = Boolean($t.merchant_key)),
        (i.g.Razorpay = ai),
        (Pa.timeout = 0),
        (Pa.name = ""),
        (Pa.partnership_logo = ""),
        (Pa.nativeotp = !0),
        (Pa.remember_customer = !1),
        (Pa.personalization = !1),
        (Pa.paused = !1),
        (Pa.fee_label = ""),
        (Pa.force_terminal_id = ""),
        (Pa.is_donation_checkout = !1),
        (Pa.keyless_header = ""),
        (Pa.min_amount_label = ""),
        (Pa.partial_payment = {
          min_amount_label: "",
          full_amount_label: "",
          partial_amount_label: "",
          partial_amount_description: "",
          select_partial: !1,
        }),
        (Pa.method = {
          netbanking: null,
          card: !0,
          credit_card: !0,
          debit_card: !0,
          cardless_emi: null,
          wallet: null,
          emi: !0,
          upi: null,
          upi_intent: !0,
          qr: !0,
          bank_transfer: !0,
          offline_challan: !0,
          upi_otm: !0,
          cod: !0,
        }),
        (Pa.prefill = {
          amount: "",
          wallet: "",
          provider: "",
          method: "",
          name: "",
          contact: "",
          email: "",
          vpa: "",
          coupon_code: "",
          "card[number]": "",
          "card[expiry]": "",
          "card[cvv]": "",
          "billing_address[line1]": "",
          "billing_address[line2]": "",
          "billing_address[postal_code]": "",
          "billing_address[city]": "",
          "billing_address[country]": "",
          "billing_address[state]": "",
          "billing_address[first_name]": "",
          "billing_address[last_name]": "",
          bank: "",
          "bank_account[name]": "",
          "bank_account[account_number]": "",
          "bank_account[account_type]": "",
          "bank_account[ifsc]": "",
          auth_type: "",
        }),
        (Pa.features = { cardsaving: !0, truecaller_login: null }),
        (Pa.readonly = { contact: !1, email: !1, name: !1 }),
        (Pa.hidden = { contact: !1, email: !1 }),
        (Pa.modal = {
          confirm_close: !1,
          ondismiss: No,
          onhidden: No,
          escape: !0,
          animation:
            !i.g.matchMedia ||
            !(
              null !==
                (li = i.g.matchMedia("(prefers-reduced-motion: reduce)")) &&
              void 0 !== li &&
              li.matches
            ),
          backdropclose: !1,
          handleback: !0,
        }),
        (Pa.external = { wallets: [], handler: No }),
        (Pa.challan = { fields: [], disclaimers: [], expiry: {} }),
        (Pa.theme = {
          upi_only: !1,
          color: "",
          backdrop_color: "rgba(0,0,0,0.6)",
          image_padding: !0,
          image_frame: !0,
          close_button: !0,
          close_method_back: !1,
          show_back_always: !1,
          hide_topbar: !1,
          branding: "",
          debit_card: !1,
        }),
        (Pa._ = {
          integration: null,
          integration_version: null,
          integration_parent_version: null,
          integration_type: null,
        }),
        (Pa.config = { display: {} });
      var yi =
        "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap";
      function bi() {
        var e;
        (e = yi),
          document.querySelector('link[href$="'.concat(e, '"]')) ||
            (function (e) {
              return new Promise(function (n, t) {
                var r = jn("link");
                (r.rel = "stylesheet"),
                  (r.href = e),
                  (r.onload = n),
                  (r.onerror = t),
                  document.head.appendChild(r);
              });
            })(yi).catch(function (e) {
              fo.TrackMetric("inter_font_load_failure", { data: { error: e } });
            });
      }
      var Oi = {
          PRODUCT: { page: "product", text: "Buy now with Magic" },
          PRODUCT_SM: { page: "product_sm", text: "Buy now" },
          CART: { page: "cart", text: "Checkout with Magic" },
          CART_SM: { page: "cart_sm", text: "Checkout" },
        },
        wi = [
          "page-type",
          "width",
          "border-radius",
          "bg-color",
          "title",
          "overrides",
          "position",
        ];
      function xi(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = hi(e);
          if (n) {
            var o = hi(this).constructor;
            Reflect.construct(r, arguments, o);
          } else r.apply(this, arguments);
          return fi(this, t);
        };
      }
      function Si() {}
      function Ei(e, n) {
        for (var t in n) e[t] = n[t];
        return e;
      }
      function ki(e) {
        return e();
      }
      function Pi() {
        return Object.create(null);
      }
      function Ri(e) {
        e.forEach(ki);
      }
      function Ci(e) {
        return "function" == typeof e;
      }
      function Di(e, n) {
        return e != e
          ? n == n
          : e !== n || (e && "object" === y(e)) || "function" == typeof e;
      }
      function Ai(e) {
        return 0 === Object.keys(e).length;
      }
      function ji(e, n, t, r) {
        return e[1] && r ? Ei(t.ctx.slice(), e[1](r(n))) : t.ctx;
      }
      function Ti(e, n, t, r) {
        if (e[2] && r) {
          var o = e[2](r(t));
          if (void 0 === n.dirty) return o;
          if ("object" === y(o)) {
            for (
              var a = [], i = Math.max(n.dirty.length, o.length), c = 0;
              c < i;
              c += 1
            )
              a[c] = n.dirty[c] | o[c];
            return a;
          }
          return n.dirty | o;
        }
        return n.dirty;
      }
      function Mi(e, n, t, r, o, a) {
        if (o) {
          var i = ji(n, t, r, a);
          e.p(i, o);
        }
      }
      function Ii(e) {
        var n = {};
        for (var t in e) "$" !== t[0] && (n[t] = e[t]);
        return n;
      }
      new Set();
      function Ni() {
        !0;
      }
      function Li() {
        !1;
      }
      function $i(e, n) {
        e.appendChild(n);
      }
      function Bi(e, n, t) {
        e.insertBefore(n, t || null);
      }
      function zi(e) {
        e.parentNode.removeChild(e);
      }
      function Ki(e) {
        return document.createElement(e);
      }
      function Fi(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function Ui(e) {
        return document.createTextNode(e);
      }
      function Gi() {
        return Ui(" ");
      }
      function Hi(e, n, t, r) {
        return (
          e.addEventListener(n, t, r),
          function () {
            return e.removeEventListener(n, t, r);
          }
        );
      }
      function Zi(e, n, t) {
        null == t
          ? e.removeAttribute(n)
          : e.getAttribute(n) !== t && e.setAttribute(n, t);
      }
      function Yi(e) {
        return Array.from(e.childNodes);
      }
      function Vi(e, n, t, r) {
        e.style.setProperty(n, t, r ? "important" : "");
      }
      function Wi(e, n) {
        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = document.createEvent("CustomEvent");
        return r.initCustomEvent(e, t, !1, n), r;
      }
      var Ji;
      new Set();
      function qi(e) {
        Ji = e;
      }
      function Qi() {
        if (!Ji)
          throw new Error("Function called outside component initialization");
        return Ji;
      }
      var Xi = [],
        ec = [],
        nc = [],
        tc = [],
        rc = Promise.resolve(),
        oc = !1;
      function ac() {
        oc || ((oc = !0), rc.then(lc));
      }
      function ic(e) {
        nc.push(e);
      }
      var cc = !1,
        uc = new Set();
      function lc() {
        if (!cc) {
          cc = !0;
          do {
            for (var e = 0; e < Xi.length; e += 1) {
              var n = Xi[e];
              qi(n), sc(n.$$);
            }
            for (qi(null), Xi.length = 0; ec.length; ) ec.pop()();
            for (var t = 0; t < nc.length; t += 1) {
              var r = nc[t];
              uc.has(r) || (uc.add(r), r());
            }
            nc.length = 0;
          } while (Xi.length);
          for (; tc.length; ) tc.pop()();
          (oc = !1), (cc = !1), uc.clear();
        }
      }
      function sc(e) {
        if (null !== e.fragment) {
          e.update(), Ri(e.before_update);
          var n = e.dirty;
          (e.dirty = [-1]),
            e.fragment && e.fragment.p(e.ctx, n),
            e.after_update.forEach(ic);
        }
      }
      var dc,
        mc = new Set();
      function pc() {
        dc = { r: 0, c: [], p: dc };
      }
      function fc() {
        dc.r || Ri(dc.c), (dc = dc.p);
      }
      function hc(e, n) {
        e && e.i && (mc.delete(e), e.i(n));
      }
      function _c(e, n, t, r) {
        if (e && e.o) {
          if (mc.has(e)) return;
          mc.add(e),
            dc.c.push(function () {
              mc.delete(e), r && (t && e.d(1), r());
            }),
            e.o(n);
        }
      }
      "undefined" != typeof window
        ? window
        : "undefined" != typeof globalThis
        ? globalThis
        : global;
      new Set([
        "allowfullscreen",
        "allowpaymentrequest",
        "async",
        "autofocus",
        "autoplay",
        "checked",
        "controls",
        "default",
        "defer",
        "disabled",
        "formnovalidate",
        "hidden",
        "ismap",
        "loop",
        "multiple",
        "muted",
        "nomodule",
        "novalidate",
        "open",
        "playsinline",
        "readonly",
        "required",
        "reversed",
        "selected",
      ]);
      function gc(e) {
        e && e.c();
      }
      function vc(e, n, t, r) {
        var o = e.$$,
          a = o.fragment,
          i = o.on_mount,
          c = o.on_destroy,
          u = o.after_update;
        a && a.m(n, t),
          r ||
            ic(function () {
              var n = i.map(ki).filter(Ci);
              c ? c.push.apply(c, La(n)) : Ri(n), (e.$$.on_mount = []);
            }),
          u.forEach(ic);
      }
      function yc(e, n) {
        var t = e.$$;
        null !== t.fragment &&
          (Ri(t.on_destroy),
          t.fragment && t.fragment.d(n),
          (t.on_destroy = t.fragment = null),
          (t.ctx = []));
      }
      function bc(e, n) {
        -1 === e.$$.dirty[0] && (Xi.push(e), ac(), e.$$.dirty.fill(0)),
          (e.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
      }
      function Oc(e, n, t, r, o, a, i) {
        var c =
            arguments.length > 7 && void 0 !== arguments[7]
              ? arguments[7]
              : [-1],
          u = Ji;
        qi(e);
        var l = (e.$$ = {
          fragment: null,
          ctx: null,
          props: a,
          update: Si,
          not_equal: o,
          bound: Pi(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(n.context || (u ? u.$$.context : [])),
          callbacks: Pi(),
          dirty: c,
          skip_bound: !1,
          root: n.target || u.$$.root,
        });
        i && i(l.root);
        var s = !1;
        if (
          ((l.ctx = t
            ? t(e, n.props || {}, function (n, t) {
                var r =
                  !(arguments.length <= 2) && arguments.length - 2
                    ? arguments.length <= 2
                      ? void 0
                      : arguments[2]
                    : t;
                return (
                  l.ctx &&
                    o(l.ctx[n], (l.ctx[n] = r)) &&
                    (!l.skip_bound && l.bound[n] && l.bound[n](r),
                    s && bc(e, n)),
                  t
                );
              })
            : []),
          l.update(),
          (s = !0),
          Ri(l.before_update),
          (l.fragment = !!r && r(l.ctx)),
          n.target)
        ) {
          if (n.hydrate) {
            Ni();
            var d = Yi(n.target);
            l.fragment && l.fragment.l(d), d.forEach(zi);
          } else l.fragment && l.fragment.c();
          n.intro && hc(e.$$.fragment),
            vc(e, n.target, n.anchor, n.customElement),
            Li(),
            lc();
        }
        qi(u);
      }
      "function" == typeof HTMLElement && HTMLElement;
      var wc = (function () {
        function e() {
          P(this, e);
        }
        return (
          C(e, [
            {
              key: "$destroy",
              value: function () {
                yc(this, 1), (this.$destroy = Si);
              },
            },
            {
              key: "$on",
              value: function (e, n) {
                var t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                return (
                  t.push(n),
                  function () {
                    var e = t.indexOf(n);
                    -1 !== e && t.splice(e, 1);
                  }
                );
              },
            },
            {
              key: "$set",
              value: function (e) {
                this.$$set &&
                  !Ai(e) &&
                  ((this.$$.skip_bound = !0),
                  this.$$set(e),
                  (this.$$.skip_bound = !1));
              },
            },
          ]),
          e
        );
      })();
      function xc(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = hi(e);
          if (n) {
            var o = hi(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return fi(this, t);
        };
      }
      var Sc = function (e) {
          return {};
        },
        Ec = function (e) {
          return {};
        };
      function kc(e) {
        var n,
          t,
          r,
          o,
          a,
          i,
          c,
          u,
          l = e[6].title,
          s = (function (e, n, t, r) {
            if (e) {
              var o = ji(e, n, t, r);
              return e[0](o);
            }
          })(l, e, e[5], Ec),
          d =
            s ||
            (function (e) {
              var n, t;
              return {
                c: function () {
                  (n = Ki("span")), (t = Ui(e[1]));
                },
                m: function (e, r) {
                  Bi(e, n, r), $i(n, t);
                },
                p: function (e, n) {
                  var r, o;
                  2 & n &&
                    ((r = t),
                    (o = "" + (o = e[1])),
                    r.wholeText !== o && (r.data = o));
                },
                d: function (e) {
                  e && zi(n);
                },
              };
            })(e);
        return {
          c: function () {
            (n = Ki("button")),
              (t = Fi("svg")),
              (r = Fi("path")),
              (o = Fi("path")),
              (a = Gi()),
              d && d.c(),
              Zi(
                r,
                "d",
                "M5.14321 4.72412L4.47803 7.1758L8.28423 4.71034L5.7951 14.0119L8.32281 14.0142L11.9999 0.275635L5.14321 4.72412Z"
              ),
              Zi(r, "fill", "#F4F6FE"),
              Zi(
                o,
                "d",
                "M1.04646 10.1036L0 14.0138H5.18124C5.18124 14.0138 7.3005 6.06116 7.30109 6.05884C7.2991 6.06011 1.04646 10.1036 1.04646 10.1036Z"
              ),
              Zi(o, "fill", "#F4F6FE"),
              Zi(t, "width", "12"),
              Zi(t, "height", "15"),
              Zi(t, "viewBox", "0 0 12 15"),
              Zi(t, "fill", "none"),
              Zi(t, "xmlns", "http://www.w3.org/2000/svg"),
              Zi(t, "class", "icon"),
              Zi(n, "id", "razorpay-magic-btn"),
              Vi(n, "width", e[2]),
              Vi(n, "border-radius", e[3]),
              Vi(n, "background", e[4]),
              Zi(n, "data-testid", "razorpay-magic-btn"),
              Zi(n, "data-variant", "razorpay-magic-btn");
          },
          m: function (l, s) {
            Bi(l, n, s),
              $i(n, t),
              $i(t, r),
              $i(t, o),
              $i(n, a),
              d && d.m(n, null),
              (i = !0),
              c ||
                ((u = Hi(n, "click", function () {
                  Ci(e[0]) && e[0].apply(this, arguments);
                })),
                (c = !0));
          },
          p: function (t, r) {
            var o = U(r, 1)[0];
            (e = t),
              s
                ? s.p &&
                  (!i || 32 & o) &&
                  Mi(
                    s,
                    l,
                    e,
                    e[5],
                    i
                      ? Ti(l, e[5], o, Sc)
                      : (function (e) {
                          if (e.ctx.length > 32) {
                            for (
                              var n = [], t = e.ctx.length / 32, r = 0;
                              r < t;
                              r++
                            )
                              n[r] = -1;
                            return n;
                          }
                          return -1;
                        })(e[5]),
                    Ec
                  )
                : d && d.p && (!i || 2 & o) && d.p(e, i ? o : -1),
              (!i || 4 & o) && Vi(n, "width", e[2]),
              (!i || 8 & o) && Vi(n, "border-radius", e[3]),
              (!i || 16 & o) && Vi(n, "background", e[4]);
          },
          i: function (e) {
            i || (hc(d, e), (i = !0));
          },
          o: function (e) {
            _c(d, e), (i = !1);
          },
          d: function (e) {
            e && zi(n), d && d.d(e), (c = !1), u();
          },
        };
      }
      function Pc(e, n, t) {
        var r = n.$$slots,
          o = void 0 === r ? {} : r,
          a = n.$$scope,
          i = n.handleClick,
          c = n.btnText,
          u = void 0 === c ? "" : c,
          l = n.width,
          s = n.borderRadius,
          d = n.bgColor;
        return (
          (e.$$set = function (e) {
            "handleClick" in e && t(0, (i = e.handleClick)),
              "btnText" in e && t(1, (u = e.btnText)),
              "width" in e && t(2, (l = e.width)),
              "borderRadius" in e && t(3, (s = e.borderRadius)),
              "bgColor" in e && t(4, (d = e.bgColor)),
              "$$scope" in e && t(5, (a = e.$$scope));
          }),
          [i, u, l, s, d, a, o]
        );
      }
      var Rc = (function (e) {
        mi(t, e);
        var n = xc(t);
        function t(e) {
          var r;
          return (
            P(this, t),
            Oc(pi((r = n.call(this))), e, Pc, kc, Di, {
              handleClick: 0,
              btnText: 1,
              width: 2,
              borderRadius: 3,
              bgColor: 4,
            }),
            r
          );
        }
        return C(t);
      })(wc);
      function Cc(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = hi(e);
          if (n) {
            var o = hi(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return fi(this, t);
        };
      }
      function Dc(e, n) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (!e) return;
              if ("string" == typeof e) return Ac(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return Ac(e, n);
            })(e)) ||
            (n && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          c = !1;
        return {
          s: function () {
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (c = !0), (a = e);
          },
          f: function () {
            try {
              i || null == t.return || t.return();
            } finally {
              if (c) throw a;
            }
          },
        };
      }
      function Ac(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function jc(e) {
        var n, t, r;
        return {
          c: function () {
            (n = Fi("svg")),
              (t = Fi("path")),
              (r = Fi("path")),
              Zi(
                t,
                "d",
                "m7.82 6.77-1 3.73 5.78-3.75-3.79 14.14h3.85L18.26 0 7.81 6.77Z"
              ),
              Zi(t, "fill", "#3395FF"),
              Zi(r, "d", "M1.6 14.95 0 20.9h7.88l3.23-12.1-9.52 6.15Z"),
              Zi(r, "fill", "#fff"),
              Zi(n, "width", "19"),
              Zi(n, "height", "21"),
              Zi(n, "fill", "none"),
              Zi(n, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function (e, o) {
            Bi(e, n, o), $i(n, t), $i(n, r);
          },
          d: function (e) {
            e && zi(n);
          },
        };
      }
      function Tc(e) {
        var n;
        return {
          c: function () {
            ((n = Ki("span")).textContent = "All payment methods supported"),
              Zi(n, "class", "sub");
          },
          m: function (e, t) {
            Bi(e, n, t);
          },
          d: function (e) {
            e && zi(n);
          },
        };
      }
      function Mc(e) {
        var n;
        return {
          c: function () {
            ((n = Ki("div")).innerHTML =
              '<div class="method-icon" style="z-index: 2;transform: translateX(48px);"><img style="width: 65%;height: 65%;" alt="phonepe" src="https://cdn.razorpay.com/app/phonepe.svg"/></div> \n      <div class="method-icon" style="transform: translateX(42px);z-index: 1;"><img style="width: 65%;height: 65%;" alt="gpay" src="https://cdn.razorpay.com/app/googlepay.svg"/></div> \n      \n      <svg style="margin-bottom: -13px;" width="89" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g filter="url(#a)"><circle cx="73" cy="10.4" r="10.4" fill="#fff"></circle><path d="M75.6 10.6c0-.7.6-1.2 1.3-1.2.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.3-.5-1.3-1.2Zm-.8 0c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2Zm-3.3 0c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2Z" fill="#072654" stroke="#fff" stroke-width=".3"></path></g><g filter="url(#b)"><circle cx="58.5" cy="10.4" r="10.4" fill="#fff"></circle></g><path fill-rule="evenodd" clip-rule="evenodd" d="M56.5 8.4h-2.3c-.5 0-.9.4-.9.8v5.4c0 .5.4.8 1 .8h8c.4 0 .8-.3.8-.8v-2H56.5V8.3Zm0 .8h-2.3v5.4h8v-2h-5.7V9.1Z" fill="#005BF2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.5 6.4h-8c-.5 0-1 .3-1 .8v5.3c0 .5.5.9 1 .9h8c.5 0 .9-.4.9-.9V7.2c0-.5-.4-.8-1-.8Zm-8 6.1V7.2h8v5.3h-8Z" fill="#072654"></path><path d="M57.8 11.7c-.3 0-.5-.2-.5-.4s.2-.4.5-.4h.9c.2 0 .4.2.4.4s-.2.4-.4.4h-1ZM56.3 9.2c-.2 0-.4-.1-.4-.4 0-.2.2-.4.4-.4h8.5c.2 0 .4.2.4.4 0 .3-.2.4-.4.4h-8.5Z" fill="#072654"></path><g filter="url(#c)"><circle cx="45.4" cy="10.4" r="10.4" fill="#fff"></circle></g><path fill-rule="evenodd" clip-rule="evenodd" d="M49.4 7h-8.5c-.5 0-.9.3-.9.8v5.8c0 .4.4.8 1 .8h8.4c.5 0 .9-.4.9-.8V7.8c0-.5-.4-.8-1-.8Zm.9 2h-1V7.8H41v5.8h8.5v-2h.9V9Z" fill="#072654"></path><path d="M47.6 11.1c.2 0 .4-.2.4-.4s-.2-.4-.4-.4c-.3 0-.5.2-.5.4s.2.4.5.4Z" fill="#072654"></path><path d="M43.3 7 47 5.8V7h1V5.8l-.1-.3c-.2-.4-.7-.7-1.1-.5l-6.4 2h2.8Z" fill="#005BF2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M50.3 9h-3.6c-.5 0-.9.4-.9.9v1.6c0 .5.4.8.9.8h3.6c.4 0 .8-.3.8-.8V10c0-.5-.4-.9-.8-.9Zm-3.6 2.5V10h3.6v1.6h-3.6Z" fill="#005BF2"></path><defs><filter id="a" x="57.4" y="0" width="31.3" height="31.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5.3"></feOffset><feGaussianBlur stdDeviation="2.6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_4375"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_771_4375" result="shape"></feBlend></filter><filter id="b" x="42.9" y="0" width="31.3" height="31.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5.3"></feOffset><feGaussianBlur stdDeviation="2.6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_4375"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_771_4375" result="shape"></feBlend></filter><filter id="c" x="29.7" y="0" width="31.3" height="31.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5.3"></feOffset><feGaussianBlur stdDeviation="2.6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_4375"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_771_4375" result="shape"></feBlend></filter><filter id="d" x="14.7" y="0" width="31.3" height="31.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5.3"></feOffset><feGaussianBlur stdDeviation="2.6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_4375"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_771_4375" result="shape"></feBlend></filter><filter id="f" x=".7" y="0" width="31.3" height="31.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5.3"></feOffset><feGaussianBlur stdDeviation="2.6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_4375"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_771_4375" result="shape"></feBlend></filter><pattern id="e" patternContentUnits="objectBoundingBox" width="1" height="1"><use href="#h" transform="matrix(.00168 0 0 .00199 -.2 0)"></use></pattern></defs></svg>'),
              Zi(n, "class", "icon");
          },
          m: function (e, t) {
            Bi(e, n, t);
          },
          d: function (e) {
            e && zi(n);
          },
        };
      }
      function Ic(e) {
        var n,
          t,
          r,
          o,
          a,
          i,
          c,
          u,
          l,
          s,
          d,
          m = e[4] && jc(),
          p = e[5] && Tc(),
          f = e[3] && Mc();
        return {
          c: function () {
            (n = Ki("button")),
              (t = Ki("div")),
              m && m.c(),
              (r = Gi()),
              (o = Ki("div")),
              ((a = Ki("span")).textContent = "Proceed to buy"),
              (i = Gi()),
              p && p.c(),
              (c = Gi()),
              f && f.c(),
              (u = Gi()),
              ((l = Ki("div")).innerHTML =
                '<svg width="103" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#x)"><path d="M60.59 4.41c-.1.33-.26.57-.51.72-.25.15-.6.23-1.06.23h-1.44l.5-1.9h1.45c.45 0 .76.08.93.23.17.16.21.4.13.72Zm1.49-.04c.18-.68.1-1.21-.23-1.58-.33-.36-.92-.55-1.76-.55h-3.22L54.93 9.5h1.56l.78-2.92h1.03c.23 0 .41.04.54.11.14.08.22.2.24.4l.28 2.41h1.68l-.28-2.25c-.05-.5-.28-.8-.68-.88.51-.15.94-.4 1.29-.75.34-.34.58-.76.71-1.24ZM65.89 6.9c-.14.48-.34.86-.6 1.12-.28.25-.6.38-.99.38-.38 0-.65-.13-.78-.38-.14-.25-.15-.62-.02-1.1.13-.49.34-.86.62-1.13.28-.28.61-.41 1-.41.37 0 .63.13.76.39s.14.64 0 1.13Zm.68-2.57-.2.73a1.15 1.15 0 0 0-.49-.63 1.64 1.64 0 0 0-.9-.23c-.44 0-.86.11-1.27.34-.4.23-.76.55-1.07.96-.3.41-.52.89-.66 1.42-.15.53-.17 1-.09 1.4.09.4.27.71.56.93.28.21.65.32 1.1.32a2.43 2.43 0 0 0 1.85-.84l-.2.76h1.5l1.39-5.16h-1.52ZM73.53 4.33h-4.4l-.3 1.15h2.55L68 8.41l-.3 1.08h4.55l.31-1.15h-2.74l3.43-2.97.28-1.04ZM77.4 6.89c-.13.5-.33.88-.6 1.14-.27.25-.59.37-.97.37-.8 0-1.05-.5-.78-1.51.13-.5.34-.89.6-1.14.28-.25.6-.38 1-.38.37 0 .63.13.76.38s.13.63 0 1.14Zm.9-2.37c-.36-.21-.8-.32-1.34-.32-.55 0-1.06.1-1.53.32s-.87.53-1.2.94c-.32.4-.56.88-.7 1.43a2.72 2.72 0 0 0-.06 1.42c.11.4.34.72.7.94.35.21.8.32 1.35.32a3.33 3.33 0 0 0 2.7-1.26c.33-.4.57-.88.71-1.42.15-.55.16-1.02.05-1.43-.11-.4-.34-.72-.69-.94ZM94.13 6.9c-.13.48-.33.86-.6 1.12-.27.25-.6.38-.98.38-.39 0-.65-.13-.79-.38s-.14-.62-.01-1.1c.13-.49.33-.86.62-1.13.28-.28.6-.41.99-.41.38 0 .64.13.77.39s.13.64 0 1.13Zm.69-2.57-.2.73a1.15 1.15 0 0 0-.49-.63 1.64 1.64 0 0 0-.9-.23c-.44 0-.87.11-1.27.34-.4.23-.76.55-1.07.96-.3.41-.52.89-.67 1.42-.14.53-.17 1-.08 1.4.08.4.27.71.55.93.29.21.65.32 1.1.32a2.43 2.43 0 0 0 1.85-.84l-.2.76h1.51l1.38-5.16h-1.51ZM83.7 5.71l.38-1.4c-.13-.07-.3-.1-.52-.1a2.2 2.2 0 0 0-1.7.88l.19-.76h-1.51l-1.4 5.16h1.54l.72-2.7c.1-.39.3-.7.57-.92.27-.22.6-.33 1.02-.33.25 0 .48.06.7.17ZM87.97 6.92c-.13.48-.33.85-.6 1.1-.28.25-.6.38-.98.38s-.64-.13-.78-.39c-.13-.25-.14-.63 0-1.11.12-.5.33-.87.6-1.13.28-.26.6-.4.99-.4.37 0 .62.14.76.42.13.27.13.64 0 1.13Zm1.07-2.38a1.69 1.69 0 0 0-1.09-.34 2.4 2.4 0 0 0-1.95.98v-.03l.26-.82h-1.5l-.38 1.43-.01.05-1.58 5.88h1.54l.8-2.96c.07.26.23.47.48.62.24.15.54.22.9.22.45 0 .88-.1 1.28-.32s.75-.53 1.05-.93c.3-.4.52-.88.66-1.4.14-.53.17-1 .09-1.42a1.57 1.57 0 0 0-.55-.96ZM102.69 4.33h-1.5l-.24.35-.06.08-.03.04-1.96 2.73-.4-3.2h-1.61l.81 4.87-1.8 2.49h1.6l.44-.62.04-.05.5-.72.02-.02 2.27-3.23 1.92-2.72Z" fill="#0F2651"></path><path d="m50.98 3.07-.46 1.7 2.63-1.7-1.72 6.42h1.75L55.72 0l-4.74 3.07Z" fill="#3395FF"></path><path d="m48.15 6.79-.72 2.7H51L52.47 4l-4.32 2.8Z" fill="#0F2651"></path></g><path d="M4.71 8.74c-.44 0-.85-.06-1.23-.17a3.15 3.15 0 0 1-1-.5l.4-.74a3 3 0 0 0 1.86.6c.4 0 .7-.06.9-.19.2-.13.3-.32.3-.56a.5.5 0 0 0-.17-.4c-.1-.1-.26-.2-.44-.26a7.34 7.34 0 0 0-.6-.2l-.67-.2a2.85 2.85 0 0 1-.6-.3A1.53 1.53 0 0 1 3 5.36a1.34 1.34 0 0 1-.17-.7c0-.34.1-.64.28-.9.18-.25.45-.44.78-.58.34-.14.74-.2 1.2-.2.4 0 .77.05 1.12.17.36.11.66.28.9.49l-.4.74a2.67 2.67 0 0 0-1.65-.6c-.39 0-.69.07-.9.21a.66.66 0 0 0-.31.59c0 .17.05.3.16.42.12.11.27.2.45.28l.61.2c.23.05.45.12.67.2.22.07.42.17.6.29a1.22 1.22 0 0 1 .61 1.1c0 .35-.08.65-.26.9-.18.26-.44.45-.78.58-.33.12-.74.19-1.2.19Zm6.5-.5c-.19.15-.41.27-.69.36-.27.09-.55.13-.84.13-.41 0-.77-.08-1.07-.24-.3-.16-.53-.38-.7-.67a2.1 2.1 0 0 1-.24-1.04c0-.44.08-.82.25-1.15a1.9 1.9 0 0 1 1.75-1.06c.38 0 .71.09.99.26.27.16.47.4.6.72.13.33.17.72.1 1.18H8.54l.04-.53h2.26l-.28.14c.03-.35-.03-.6-.19-.79a.81.81 0 0 0-.65-.27.96.96 0 0 0-.8.37c-.19.25-.28.62-.28 1.12 0 .39.09.69.28.9.19.2.46.3.83.3a2.04 2.04 0 0 0 1.23-.41l.23.67Zm2.8.49c-.42 0-.77-.08-1.07-.24-.3-.16-.54-.38-.7-.67-.15-.3-.23-.64-.23-1.03 0-.45.09-.85.26-1.18.17-.33.42-.59.74-.77.33-.18.7-.27 1.14-.27.32 0 .6.05.86.14.26.09.48.21.66.37l-.34.7a2.27 2.27 0 0 0-.56-.32 1.54 1.54 0 0 0-.58-.11c-.37 0-.66.12-.87.38-.2.25-.3.6-.3 1.05 0 .38.1.67.28.87.19.2.45.31.78.31.2 0 .4-.03.57-.1.18-.08.36-.18.54-.33l.24.7c-.18.16-.4.28-.65.37-.25.09-.5.13-.78.13Zm3.48 0c-.47 0-.82-.14-1.05-.42-.24-.28-.33-.69-.28-1.23l.18-2.4h1l-.2 2.34c-.01.31.03.55.15.7.12.16.3.23.56.23.3 0 .53-.1.7-.28.17-.2.27-.45.3-.77l.18-2.23h.99l-.31 4h-.98l.07-.81.1.04c-.12.26-.3.47-.56.62-.24.14-.53.21-.85.21Zm3.27-.06.23-2.86A9.72 9.72 0 0 0 21 4.67h.94l.03 1.03-.11-.2c.1-.28.27-.51.52-.67a1.55 1.55 0 0 1 1.06-.23.7.7 0 0 1 .18.04l-.07.9a1.52 1.52 0 0 0-.52-.1c-.23 0-.43.04-.6.14a.9.9 0 0 0-.36.38c-.08.16-.13.34-.15.55l-.18 2.16h-1Zm6.5-.44c-.17.16-.4.28-.67.37-.27.09-.55.13-.84.13-.42 0-.77-.08-1.07-.24-.3-.16-.54-.38-.7-.67a2.1 2.1 0 0 1-.25-1.04c0-.44.09-.82.26-1.15a1.9 1.9 0 0 1 1.74-1.06c.39 0 .72.09.99.26.27.16.48.4.6.72.13.33.17.72.11 1.18H24.6l.04-.53h2.25l-.27.14c.03-.35-.03-.6-.2-.79a.81.81 0 0 0-.64-.27.96.96 0 0 0-.81.37c-.19.25-.28.62-.28 1.12 0 .39.1.69.28.9.19.2.47.3.83.3a2.04 2.04 0 0 0 1.24-.41l.23.67Zm2.5.5a1.7 1.7 0 0 1-.88-.23 1.54 1.54 0 0 1-.6-.67c-.14-.29-.2-.63-.2-1.02 0-.44.07-.83.22-1.16a1.76 1.76 0 0 1 1.66-1.08c.33 0 .61.08.85.22.23.15.4.36.51.63l-.11.2.21-2.77h1l-.47 5.82h-.97l.07-1 .09.23c-.07.17-.17.32-.31.45-.14.13-.3.22-.48.28-.18.07-.37.1-.58.1Zm.32-.75c.33 0 .6-.13.78-.38.2-.26.29-.6.29-1.04 0-.4-.1-.7-.27-.91a.92.92 0 0 0-.74-.31c-.34 0-.6.13-.8.38-.19.25-.28.6-.28 1.04 0 .39.08.69.26.9.18.21.44.32.76.32Zm7.45.75c-.34 0-.62-.07-.85-.21-.23-.15-.4-.36-.52-.63l.11-.23-.08 1.01h-.98l.45-5.82h1l-.23 2.78-.08-.21a1.35 1.35 0 0 1 .78-.75c.18-.06.38-.1.6-.1a1.62 1.62 0 0 1 1.48.9c.14.29.22.63.22 1.03 0 .45-.09.84-.25 1.18-.16.33-.38.59-.66.77-.29.19-.62.28-1 .28Zm-.17-.75c.33 0 .6-.13.78-.38.2-.26.3-.6.3-1.05 0-.38-.1-.68-.27-.9a.94.94 0 0 0-.76-.31.93.93 0 0 0-.79.39c-.19.25-.28.6-.28 1.03 0 .4.09.7.26.9.18.21.43.32.76.32Zm3.97.96-1.51-4.27h1l1.05 3.14-.54 1.13Zm-1.5 1.53-.17-.76c.25-.05.46-.11.63-.19.17-.07.31-.16.42-.28.12-.1.22-.25.31-.42l.26-.47.36-.54 1.53-3.14h1l-2.22 4.27c-.18.35-.38.63-.6.84-.2.2-.44.36-.7.47-.25.1-.52.18-.82.22Z" fill="#0F2651"></path><defs><clipPath id="x"><path fill="#fff" d="M47.43 0h55.26v11.69H47.43z"></path></clipPath></defs></svg>'),
              Zi(a, "class", "buy"),
              Zi(o, "class", "title"),
              Vi(t, "display", "flex"),
              Vi(t, "gap", "8px"),
              Vi(t, "align-items", "center"),
              Zi(n, "id", "razorpay-magic-btn"),
              Vi(n, "width", e[1]),
              Vi(n, "border-radius", e[2]),
              Vi(n, "position", "relative"),
              Zi(n, "data-testid", "magic-btn-v1"),
              Zi(n, "data-variant", "magic-btn-v1"),
              Vi(l, "text-align", "center"),
              Vi(l, "margin-top", "-2px");
          },
          m: function (h, _) {
            var g;
            Bi(h, n, _),
              $i(n, t),
              m && m.m(t, null),
              $i(t, r),
              $i(t, o),
              $i(o, a),
              $i(o, i),
              p && p.m(o, null),
              $i(n, c),
              f && f.m(n, null),
              Bi(h, u, _),
              Bi(h, l, _),
              s ||
                ((d = [
                  Hi(n, "click", function () {
                    Ci(e[0]) && e[0].apply(this, arguments);
                  }),
                  ((g = e[7].call(null, n)),
                  g && Ci(g.destroy) ? g.destroy : Si),
                  Hi(n, "btnresize", e[6]),
                ]),
                (s = !0));
          },
          p: function (a, i) {
            var c = U(i, 1)[0];
            (e = a)[4]
              ? m || ((m = jc()).c(), m.m(t, r))
              : m && (m.d(1), (m = null)),
              e[5]
                ? p || ((p = Tc()).c(), p.m(o, null))
                : p && (p.d(1), (p = null)),
              e[3]
                ? f || ((f = Mc()).c(), f.m(n, null))
                : f && (f.d(1), (f = null)),
              2 & c && Vi(n, "width", e[1]),
              4 & c && Vi(n, "border-radius", e[2]);
          },
          i: Si,
          o: Si,
          d: function (e) {
            e && zi(n),
              m && m.d(),
              p && p.d(),
              f && f.d(),
              e && zi(u),
              e && zi(l),
              (s = !1),
              Ri(d);
          },
        };
      }
      function Nc(e, n, t) {
        var r = n.handleClick,
          o = n.width,
          a = n.borderRadius,
          i = !0,
          c = !0,
          u = !0;
        return (
          (e.$$set = function (e) {
            "handleClick" in e && t(0, (r = e.handleClick)),
              "width" in e && t(1, (o = e.width)),
              "borderRadius" in e && t(2, (a = e.borderRadius));
          }),
          [
            r,
            o,
            a,
            i,
            c,
            u,
            function (e) {
              var n = e.detail.width;
              t(3, (i = n > 264)), t(4, (c = n > 180)), t(5, (u = n > 155));
            },
            function (e) {
              try {
                var n = new ResizeObserver(function (n) {
                  var t,
                    r = Dc(n);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var o = t.value;
                      o.borderBoxSize &&
                        e.dispatchEvent(
                          new CustomEvent("btnresize", {
                            detail: { width: o.borderBoxSize[0].inlineSize },
                          })
                        );
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                });
                return (
                  n.observe(e),
                  {
                    destroy: function () {
                      n.unobserve(e);
                    },
                  }
                );
              } catch (e) {
                fo.TrackIntegration("1cc_button_observe_error", {
                  data: null == e ? void 0 : e.message,
                });
              }
            },
          ]
        );
      }
      var Lc = (function (e) {
        mi(t, e);
        var n = Cc(t);
        function t(e) {
          var r;
          return (
            P(this, t),
            Oc(pi((r = n.call(this))), e, Nc, Ic, Di, {
              handleClick: 0,
              width: 1,
              borderRadius: 2,
            }),
            r
          );
        }
        return C(t);
      })(wc);
      function $c(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = hi(e);
          if (n) {
            var o = hi(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return fi(this, t);
        };
      }
      function Bc(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function zc(e) {
        var n,
          t,
          r,
          o = [e[1]],
          a = e[0];
        function i(e) {
          for (var n = {}, t = 0; t < o.length; t += 1) n = Ei(n, o[t]);
          return { props: n };
        }
        return (
          a && (n = new a(i())),
          {
            c: function () {
              n && gc(n.$$.fragment), (t = Ui(""));
            },
            m: function (e, o) {
              n && vc(n, e, o), Bi(e, t, o), (r = !0);
            },
            p: function (e, r) {
              var c,
                u =
                  2 & U(r, 1)[0]
                    ? (function (e, n) {
                        for (
                          var t = {}, r = {}, o = { $$scope: 1 }, a = e.length;
                          a--;

                        ) {
                          var i = e[a],
                            c = n[a];
                          if (c) {
                            for (var u in i) u in c || (r[u] = 1);
                            for (var l in c)
                              o[l] || ((t[l] = c[l]), (o[l] = 1));
                            e[a] = c;
                          } else for (var s in i) o[s] = 1;
                        }
                        for (var d in r) d in t || (t[d] = void 0);
                        return t;
                      })(o, [
                        ((c = e[1]), "object" === y(c) && null !== c ? c : {}),
                      ])
                    : {};
              if (a !== (a = e[0])) {
                if (n) {
                  pc();
                  var l = n;
                  _c(l.$$.fragment, 1, 0, function () {
                    yc(l, 1);
                  }),
                    fc();
                }
                a
                  ? (gc((n = new a(i())).$$.fragment),
                    hc(n.$$.fragment, 1),
                    vc(n, t.parentNode, t))
                  : (n = null);
              } else a && n.$set(u);
            },
            i: function (e) {
              r || (n && hc(n.$$.fragment, e), (r = !0));
            },
            o: function (e) {
              n && _c(n.$$.fragment, e), (r = !1);
            },
            d: function (e) {
              e && zi(t), n && yc(n, e);
            },
          }
        );
      }
      function Kc(e, n, t) {
        var r,
          o,
          a = n.width,
          i = void 0 === a ? "100%" : a,
          c = n.borderRadius,
          u = void 0 === c ? "4px" : c,
          l = n.pageType,
          s = void 0 === l ? Oi.CART : l,
          d = n.bgColor,
          m = void 0 === d ? "#0460f8" : d,
          p = n.title,
          f = void 0 === p ? "" : p,
          h = n.variant,
          _ = void 0 === h ? "v1" : h,
          g = n.position,
          y = void 0 === g ? "NA" : g,
          b =
            ((r = Qi()),
            function (e, n) {
              var t = r.$$.callbacks[e];
              if (t) {
                var o = Wi(e, n);
                t.slice().forEach(function (e) {
                  e.call(r, o);
                });
              }
            }),
          O = Rc,
          w = {
            width: i,
            borderRadius: u,
            bgColor: m,
            btnText: f || o,
            handleClick: x,
          };
        function x(e) {
          try {
            fo.setMeta("position", y),
              fo.TrackBehav(uo.BRANDED_BUTTON_CLICKED, { variant: _ });
          } catch (e) {}
          b("click", e);
        }
        return (
          (ac(), rc).then(function () {
            return fo.TrackIntegration(
              "magic_btn_props",
              (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? Bc(Object(t), !0).forEach(function (n) {
                        v(e, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : Bc(Object(t)).forEach(function (n) {
                        Object.defineProperty(
                          e,
                          n,
                          Object.getOwnPropertyDescriptor(t, n)
                        );
                      });
                }
                return e;
              })(
                {
                  width: i,
                  borderRadius: u,
                  pageType: s,
                  bgColor: m,
                  title: f,
                  variant: _,
                  position: y,
                },
                n
              )
            );
          }),
          (e.$$set = function (e) {
            t(12, (n = Ei(Ei({}, n), Ii(e)))),
              "width" in e && t(2, (i = e.width)),
              "borderRadius" in e && t(3, (u = e.borderRadius)),
              "pageType" in e && t(4, (s = e.pageType)),
              "bgColor" in e && t(5, (m = e.bgColor)),
              "title" in e && t(6, (f = e.title)),
              "variant" in e && t(7, (_ = e.variant)),
              "position" in e && t(8, (y = e.position));
          }),
          (e.$$.update = function () {
            if (16 & e.$$.dirty) {
              var n = Oi.PRODUCT,
                r = Oi.PRODUCT_SM,
                a = Oi.CART,
                c = Oi.CART_SM;
              switch (s) {
                case n.page:
                  t(9, (o = n.text));
                  break;
                case r.page:
                  t(9, (o = r.text));
                  break;
                case a.page:
                  t(9, (o = a.text));
                  break;
                case c.page:
                  t(9, (o = c.text));
                  break;
                default:
                  t(9, (o = "Checkout with Magic"));
              }
            }
            if (748 & e.$$.dirty)
              if ("v1" === _)
                t(0, (O = Lc)),
                  t(1, (w = { handleClick: x, width: i, borderRadius: u }));
              else
                t(0, (O = Rc)),
                  t(
                    1,
                    (w = {
                      width: i,
                      borderRadius: u,
                      bgColor: m,
                      btnText: f || o,
                      handleClick: x,
                    })
                  );
            256 & e.$$.dirty && fo.setMeta("position", y);
          }),
          (n = Ii(n)),
          [O, w, i, u, s, m, f, _, y, o]
        );
      }
      var Fc = (function (e) {
        mi(t, e);
        var n = $c(t);
        function t(e) {
          var r;
          return (
            P(this, t),
            Oc(pi((r = n.call(this))), e, Kc, zc, Di, {
              width: 2,
              borderRadius: 3,
              pageType: 4,
              bgColor: 5,
              title: 6,
              variant: 7,
              position: 8,
            }),
            r
          );
        }
        return (
          C(t, [
            {
              key: "width",
              get: function () {
                return this.$$.ctx[2];
              },
              set: function (e) {
                this.$$set({ width: e }), lc();
              },
            },
            {
              key: "borderRadius",
              get: function () {
                return this.$$.ctx[3];
              },
              set: function (e) {
                this.$$set({ borderRadius: e }), lc();
              },
            },
            {
              key: "pageType",
              get: function () {
                return this.$$.ctx[4];
              },
              set: function (e) {
                this.$$set({ pageType: e }), lc();
              },
            },
            {
              key: "bgColor",
              get: function () {
                return this.$$.ctx[5];
              },
              set: function (e) {
                this.$$set({ bgColor: e }), lc();
              },
            },
            {
              key: "title",
              get: function () {
                return this.$$.ctx[6];
              },
              set: function (e) {
                this.$$set({ title: e }), lc();
              },
            },
            {
              key: "variant",
              get: function () {
                return this.$$.ctx[7];
              },
              set: function (e) {
                this.$$set({ variant: e }), lc();
              },
            },
            {
              key: "position",
              get: function () {
                return this.$$.ctx[8];
              },
              set: function (e) {
                this.$$set({ position: e }), lc();
              },
            },
          ]),
          t
        );
      })(wc);
      function Uc(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = hi(e);
          if (n) {
            var o = hi(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return fi(this, t);
        };
      }
      var Gc = document.createElement("template");
      if (
        ((Gc.innerHTML =
          "\n  <style>\n    * {\n      padding: 0;\n      margin: 0;\n      border: 0;\n      box-sizing: border-box;\n    }\n\n    #razorpay-magic-btn {\n      width: 100%;\n      padding: 14px;\n      background: #0460F8;\n      color: #fff;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n\n    #razorpay-magic-btn[data-variant=razorpay-magic-btn] span {\n      font-family: 'Inter';\n      font-weight: bold;\n      font-size: 14px;\n    }\n\n    #razorpay-magic-btn[data-variant=razorpay-magic-btn] .icon {\n      margin-bottom: -1.1px;\n    }\n\n    #razorpay-magic-btn[data-variant=magic-btn-v1] {\n      font-family: 'Inter';\n      padding: 12px 16px;\n      background: linear-gradient(91.54deg, #005BF2 0.68%, #1E4C9C 99.55%);\n      display: flex;\n      justify-content: space-between;\n    }\n\n    #razorpay-magic-btn[data-variant=magic-btn-v1] .title {\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n    }\n\n    #razorpay-magic-btn[data-variant=magic-btn-v1] span.buy {\n      font-weight: 800;\n      font-size: 14px;\n    }\n\n    #razorpay-magic-btn[data-variant=magic-btn-v1] span.sub {\n      font-weight: 500;\n      font-size: 8px;\n      font-style: italic;\n    }\n\n    #razorpay-magic-btn[data-variant=magic-btn-v1] .icon {\n      position: absolute;\n      right: 10px;\n      display: flex;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n\n    .method-icon {\n      width: 20.8px;\n      height: 20.8px;\n      border-radius: 50%;\n      background: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: black -2px 3px 8px -3px;\n    }\n  </style>\n"),
        !Pe && "customElements" in window)
      ) {
        var Hc = (function (e) {
          mi(t, e);
          var n = Uc(t);
          function t() {
            var e;
            return (
              P(this, t),
              ((e = n.call(this))._root = e.attachShadow({ mode: "closed" })),
              (e._options = {}),
              (e._rzp = null),
              bi(),
              e._root.appendChild(Gc.content.cloneNode(!0)),
              (e._button = new Fc({ target: e._root })),
              e
            );
          }
          return (
            C(
              t,
              [
                {
                  key: "restyle",
                  value: function () {
                    var e = this;
                    wi.forEach(function (n) {
                      var t = e.getAttribute(n);
                      if ("overrides" !== n) {
                        if (t) {
                          var r = n.replace(/-([a-z])/g, function (e, n) {
                            return n.toUpperCase();
                          });
                          e._button[r] = t;
                        }
                      } else e.restyleFromOverrides(t);
                    });
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (e, n, t) {
                    t !== n && this.restyle();
                  },
                },
                {
                  key: "restyleFromOverrides",
                  value: function () {
                    var e = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                    try {
                      var t = JSON.parse(n);
                      t &&
                        "object" === y(t) &&
                        Object.keys(t).map(function (n) {
                          var r = n.replace(/-([a-z])/g, function (e, n) {
                            return n.toUpperCase();
                          });
                          e._button[r] !== t[n] && (e._button[r] = t[n]);
                        });
                    } catch (e) {}
                  },
                },
                {
                  key: "rzp",
                  get: function () {
                    return this._rzp;
                  },
                },
                {
                  key: "options",
                  set: function (e) {
                    (this._options = e),
                      (this._rzp = new window.Razorpay(this._options));
                  },
                },
                {
                  key: "openRzpModal",
                  value: function (e) {
                    e.stopPropagation();
                    var n = this._options,
                      t = n.key,
                      r = n.order_id,
                      o = n.amount;
                    "true" === this.getAttribute("auto-checkout") &&
                      ((t && o) || r) &&
                      ((this._rzp = new window.Razorpay(this._options)),
                      this._rzp.open()),
                      this.dispatchEvent(new CustomEvent("click", e));
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    var e = this;
                    this._root
                      .getElementById("razorpay-magic-btn")
                      .addEventListener("click", this.openRzpModal.bind(this)),
                      setTimeout(function () {
                        var n = e.querySelector('[slot="title"]');
                        null != n &&
                          n.textContent &&
                          (e._button.title = n.textContent);
                      }),
                      this.restyle();
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    var e = this._root.getElementById("razorpay-magic-btn");
                    null == e ||
                      e.removeEventListener(
                        "click",
                        this.openRzpModal.bind(this)
                      );
                  },
                },
              ],
              [
                {
                  key: "observedAttributes",
                  get: function () {
                    return wi;
                  },
                },
              ]
            ),
            t
          );
        })(vi(HTMLElement));
        window.customElements.get("magic-checkout-btn") ||
          window.customElements.define("magic-checkout-btn", Hc);
      }
      var Zc,
        Yc = "page_view",
        Vc = "payment_successful",
        Wc = "payment_failed",
        Jc = "pay_now_clicked",
        qc = "rzp_payments";
      function Qc(e, n) {
        var t;
        if (null !== (t = window) && void 0 !== t && t.ga)
          for (
            var r = window.ga,
              o = "function" == typeof r.getAll ? r.getAll() : [],
              a = 0;
            a < o.length;
            a++
          ) {
            r(o[a].get("name") + ".".concat(e), n);
          }
      }
      var Xc = ":-)";
      '\nvar pingReceived=!1,checkoutId="",sessionErrored=!1,checkoutContext={};function handlePingReceived(){pingReceived=!0,postMessage("pong")}function createEventObject(e,t){return[{name:"checkout.sessionErrored.metrics",labels:[{type:e,severity:t},]},]}function capture(e,t){try{let{analytics:r={},severity:s="S2",unhandled:n=!1}=t={},{data:c,immediately:a=!0}=r||{};try{if(!sessionErrored){let i={metrics:createEventObject("session_errored",s)},o=encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(i)))));sendRequest({url:"https://lumberjack-metrics.razorpay.com/v1/frontend-metrics",data:{key:"ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",data:o}}),sessionErrored=!0}}catch(u){}Track("js_error",{data:Object.assign({},"object"==typeof c?c:{},{error:constructErrorObject(e,{severity:s,unhandled:n})}),immediately:Boolean(a),isError:!0})}catch(d){}}self.onmessage=function(e){if("string"==typeof e.data){if("ping"===e.data){handlePingReceived();return}let t=e.data.split("'.concat(
        Xc,
        '");switch(t[0]){case"id":checkoutId=t[1];break;case"context":try{checkoutContext=JSON.parse(t[1])}catch(r){}}}},self.interval=setInterval(()=>{pingReceived?pingReceived=!1:(capture(Error("Iframe Freeze Alert")),clearInterval(self.interval))},3500);const EVT_Q=[],CHUNK_SIZE=5,pushToEventQ=e=>EVT_Q.push(e);function Track(e,{data:t={}}={}){let r={data:t};r.checkout_id=checkoutId,pushToEventQ({event:e,properties:r,timestamp:Date.now()})}function flushEvents(){if(!EVT_Q.length)return;let e={context:checkoutContext,addons:[{name:"ua_parser",input_key:"user_agent",output_key:"user_agent_parsed"},],events:EVT_Q.splice(0,5)},t=encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(e)))));sendRequest({url:"https://lumberjack.razorpay.com/v1/track",data:{key:"ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",data:t}})}function sendRequest(e){try{fetch(e.url,{method:"POST",body:JSON.stringify(e.data)})}catch(t){}}const FLUSH_INTERVAL_DURATION=1e3;function constructErrorObject(e,t){let r={tags:t};switch(!0){case!e:r.message="NA";break;case"string"==typeof e:r.message=e;break;case"object"==typeof e:{let{name:s,message:n,stack:c,fileName:a,lineNumber:i,columnNumber:o}=e;r=Object.assign(JSON.parse(JSON.stringify(e)),{name:s,message:n,stack:c,fileName:a,lineNumber:i,columnNumber:o,tags:t})}break;default:r.message=JSON.stringify(e)}return r}setInterval(()=>{flushEvents()},1e3);\n'
      );
      function eu() {
        try {
          Zc && Zc.terminate();
        } catch (e) {}
      }
      function nu(e) {
        ge() &&
          ((pe("features.one_cc_ga_analytics") || fe("enable_ga_analytics")) &&
            ai.sendMessage({ event: "gaevent", data: e }),
          (pe("features.one_cc_fb_analytics") || fe("enable_fb_analytics")) &&
            ai.sendMessage({ event: "fbaevent", data: e }));
      }
      function tu(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var ru,
        ou,
        au,
        iu,
        cu = i.g,
        uu = cu.screen,
        lu = cu.scrollTo,
        su = Re,
        du = !1,
        mu = {
          overflow: "",
          metas: null,
          orientationchange: function () {
            mu.resize.call(this), mu.scroll.call(this);
          },
          resize: function () {
            var e = i.g.innerHeight || uu.height;
            (_u.container.style.position = e < 450 ? "absolute" : "fixed"),
              (this.el.style.height = Math.max(e, 460) + "px");
          },
          scroll: function () {
            if ("number" == typeof i.g.pageYOffset)
              if (i.g.innerHeight < 460) {
                var e = 460 - i.g.innerHeight;
                i.g.pageYOffset > e + 120 && It(e);
              } else this.isFocused || It(0);
          },
        };
      function pu() {
        return (
          mu.metas ||
            (mu.metas = At(
              'head meta[name=viewport],head meta[name="theme-color"]'
            )),
          mu.metas
        );
      }
      function fu(e) {
        var n = $t.frame;
        if (!n) {
          n = Xa("checkout", !1);
          var t = ui(e);
          t ? (n = kn(n, t)) : (n += "/public");
        }
        return (
          (n = kn(n, { traffic_env: Ft, build: Ut })),
          ai.enableLite &&
            (n = kn(n, {
              merchant_key: $t.merchant_key,
              magic_shopify_key: $t.merchant_key,
            })),
          n
        );
      }
      function hu(e) {
        try {
          _u.backdrop.style.background = e;
        } catch (e) {}
      }
      function _u(e) {
        if (((ru = document.body), (ou = document.head), (au = ru.style), e))
          return this.getEl(e), this.openRzp(e);
        this.getEl(), (this.time = hn());
      }
      _u.prototype = {
        getEl: function (e) {
          if (!this.el) {
            var n = {
              style:
                "opacity: 1; height: 100%; position: relative; background: none; display: block; border: 0 none transparent; margin: 0px; padding: 0px; z-index: 2;",
              allowtransparency: !0,
              frameborder: 0,
              width: "100%",
              height: "100%",
              allowpaymentrequest: !0,
              src: fu(e),
              class: "razorpay-checkout-frame",
            };
            this.el = Vn(jn("iframe"), n);
          }
          return this.el;
        },
        openRzp: function (e) {
          var n = Wn(this.el, { width: "100%", height: "100%" }),
            t = e.get("parent");
          t && (t = jt(t));
          var r = t || _u.container;
          iu ||
            (iu = (function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body,
                t = arguments.length > 1 ? arguments[1] : void 0,
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              try {
                if (r) {
                  document.body.style.background = "#00000080";
                  var o = jn("style");
                  (o.innerText =
                    "@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}"),
                    Bn(o, n);
                }
                (e = document.createElement("div")).className =
                  "razorpay-loader";
                var a =
                  "margin:-25px 0 0 -25px;height:50px;width:50px;animation:rzp-rot 1s infinite linear;-webkit-animation:rzp-rot 1s infinite linear;border: 1px solid rgba(255, 255, 255, 0.2);border-top-color: rgba(255, 255, 255, 0.7);border-radius: 50%;";
                return (
                  (a += t
                    ? "margin: 100px auto -150px;border: 1px solid rgba(0, 0, 0, 0.2);border-top-color: rgba(0, 0, 0, 0.7);"
                    : "position:absolute;left:50%;top:50%;"),
                  e.setAttribute("style", a),
                  Bn(e, n),
                  e
                );
              } catch (e) {
                Ea(e, { severity: Tr, unhandled: !1 });
              }
            })(r, t)),
            e !== this.rzp && (Tn(n) !== r && zn(r, n), (this.rzp = e)),
            (function (e) {
              var n = fe("prefill.contact"),
                t = fe("prefill.email");
              n && ba.setContext(ea, n),
                t && ba.setContext(na, t),
                ye() && ba.setContext(Qo, ye()),
                e && ba.setContext(qo, e);
              var r = fe("_.integration");
              r && ba.setContext(Ho, r);
              var o = fe("_.integration_version");
              o && ba.setContext(Yo, o);
              var a = zo.INTEGRATION,
                i = Ko.WEB,
                c = fe("_.integration_type");
              c &&
                (c === zo.RZP_APP
                  ? (a = zo.RZP_APP)
                  : c === Ko.PLUGIN && (i = Ko.PLUGIN),
                ba.setContext(Zo, c)),
                ba.setContext(Go, a),
                ba.setContext(Wo, i);
              var u = fe("_.integration_parent_version");
              u && ba.setContext(Vo, u);
            })(this.rzp.getMode()),
            t
              ? (Yn(n, "minHeight", "530px"), (this.embedded = !0))
              : (Qn(Yn(r, "display", "block")),
                hu(e.get("theme.backdrop_color")),
                /^rzp_t/.test(e.get("key")) &&
                  _u.ribbon &&
                  (_u.ribbon.style.opacity = 1),
                this.setMetaAndOverflow()),
            this.bind(),
            this.onload();
        },
        makeMessage: function (e, n) {
          var t = this.rzp,
            r = t.get(),
            o = {
              integration: Er.props.integration,
              referer: Er.props.referer || location.href,
              options: r,
              library: Er.props.library,
              id: t.id,
            };
          return (
            e && (o.event = e),
            t._order && (o._order = t._order),
            t._prefs && (o._prefs = t._prefs),
            t.metadata && (o.metadata = t.metadata),
            n && (o.extra = n),
            X(t.modal.options, function (e, n) {
              r["modal." + n] = e;
            }),
            this.embedded && (delete r.parent, (o.embedded = !0)),
            (function (e) {
              var n = e.image;
              if (n && tn(n)) {
                if (wn(n)) return;
                if (n.indexOf("http")) {
                  var t =
                      location.protocol +
                      "//" +
                      location.hostname +
                      (location.port ? ":" + location.port : ""),
                    r = "";
                  "/" !== n[0] &&
                    "/" !==
                      (r += location.pathname.replace(/[^/]*$/g, ""))[0] &&
                    (r = "/" + r),
                    (e.image = t + r + n);
                }
              }
            })(r),
            o
          );
        },
        close: function () {
          hu(""),
            _u.ribbon && (_u.ribbon.style.opacity = 0),
            (function (e) {
              e && e.forEach(Fn);
              var n = pu();
              n && n.forEach(Bn(ou));
            })(this.$metas),
            (au.overflow = mu.overflow),
            this.unbind(),
            su && lu(0, mu.oldY),
            eu(),
            Er.flush();
        },
        bind: function () {
          var e = this;
          if (!this.listeners) {
            this.listeners = [];
            var n = {};
            su &&
              ((n.orientationchange = mu.orientationchange),
              this.rzp.get("parent") || (n.resize = mu.resize)),
              X(n, function (n, t) {
                e.listeners.push(rt(t, n.bind(e))(window));
              });
          }
        },
        unbind: function () {
          this.listeners.forEach(function (e) {
            "function" == typeof e && e();
          }),
            (this.listeners = null);
        },
        setMetaAndOverflow: function () {
          ou &&
            (pu().forEach(function (e) {
              return Fn(e);
            }),
            (this.$metas = [
              Vn(jn("meta"), {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
              }),
              Vn(jn("meta"), {
                name: "theme-color",
                content: this.rzp.get("theme.color"),
              }),
            ]),
            this.$metas.forEach(Bn(ou)),
            (mu.overflow = au.overflow),
            (au.overflow = "hidden"),
            su &&
              ((mu.oldY = i.g.pageYOffset),
              i.g.scrollTo(0, 0),
              mu.orientationchange.call(this)));
        },
        postMessage: function (e) {
          var n, t, r;
          y(e),
            (e.id =
              (null === (n = this.rzp) || void 0 === n ? void 0 : n.id) ||
              Ro()),
            (e = JSON.stringify(e)),
            null === (t = this.el) ||
              void 0 === t ||
              null === (r = t.contentWindow) ||
              void 0 === r ||
              r.postMessage(e, "*");
        },
        prefetchPrefs: function (e) {
          e !== this.rzp && (this.rzp = e),
            this.postMessage(this.makeMessage("prefetch"));
        },
        makeCheckoutCallForShopify: function (e, n) {
          e !== this.rzp && (this.rzp = e),
            du
              ? this.postMessage(
                  this.makeMessage("1cc_shopify_checkout_initiate", n)
                )
              : this.onevent({ event: "shopify_failure" });
        },
        onmessage: function (e) {
          var n = ee(e.data);
          if (n) {
            var t = n.event,
              r = this.rzp;
            if (
              e.origin &&
              "frame" === n.source &&
              e.source === this.el.contentWindow
            ) {
              try {
                if (
                  0 !== $t.api.indexOf(e.origin) &&
                  !/.*[.]razorpay.(com|in)$/.test(e.origin)
                )
                  return void ho.track("postmessage_origin_redflag", {
                    type: w,
                    data: { origin: e.origin },
                    immediately: !0,
                  });
              } catch (e) {}
              (n = n.data),
                this["on" + t](n),
                ("dismiss" !== t && "fault" !== t) ||
                  ho.track(t, { data: n, r: r, immediately: !0 });
            }
          }
        },
        onload: function (e) {
          e && "checkout-frame" === e.origin && ((du = !0), (oi = !0)),
            this.rzp && this.postMessage(this.makeMessage());
        },
        onfocus: function () {
          this.isFocused = !0;
        },
        onblur: function () {
          (this.isFocused = !1), mu.orientationchange.call(this);
        },
        onrender: function () {
          iu && (Fn(iu), (iu = null)), this.rzp.emit("render");
        },
        onevent: function (e) {
          this.rzp.emit(e.event, e.data);
        },
        ongaevent: function (e) {
          var n = e.event,
            t = e.category,
            r = e.params,
            o = void 0 === r ? {} : r;
          this.rzp.set("enable_ga_analytics", !0),
            "function" == typeof window.gtag &&
              window.gtag(
                "event",
                n,
                (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? tu(Object(t), !0).forEach(function (n) {
                          v(e, n, t[n]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : tu(Object(t)).forEach(function (n) {
                          Object.defineProperty(
                            e,
                            n,
                            Object.getOwnPropertyDescriptor(t, n)
                          );
                        });
                  }
                  return e;
                })({ event_category: t }, o)
              ),
            "function" == typeof window.ga &&
              Qc(
                "send",
                n === Yc
                  ? { hitType: "pageview", title: t }
                  : { hitType: "event", eventCategory: t, eventAction: n }
              );
        },
        onfbaevent: function (e) {
          var n = e.eventType,
            t = void 0 === n ? "trackCustom" : n,
            r = e.event,
            o = e.category,
            a = e.params,
            i = void 0 === a ? {} : a;
          "function" == typeof window.fbq &&
            (this.rzp.set("enable_fb_analytics", !0),
            o && (i.page = o),
            window.fbq(t, r, i));
        },
        onmoengageevent: function (e) {
          var n,
            t,
            r = e.eventData,
            o = void 0 === r ? {} : r,
            a = e.eventName,
            i = e.actionType,
            c = e.value;
          "function" !=
            typeof (null === (n = window.Moengage) || void 0 === n
              ? void 0
              : n.track_event) || i
            ? i &&
              "function" ==
                typeof (null === (t = window.Moengage) || void 0 === t
                  ? void 0
                  : t[i]) &&
              window.Moengage[i](c)
            : window.Moengage.track_event(a, o);
        },
        onredirect: function (e) {
          Er.flush(),
            e.target || (e.target = this.rzp.get("target") || "_top"),
            Tt(e);
        },
        onsubmit: function (e) {
          nu({ event: Jc, category: qc }), Er.flush();
          var n = this.rzp;
          "wallet" === e.method &&
            (n.get("external.wallets") || []).forEach(function (t) {
              if (t === e.wallet)
                try {
                  n.get("external.handler").call(n, e);
                } catch (e) {}
            }),
            n.emit("payment.submit", { method: e.method });
        },
        ondismiss: function (e) {
          this.close();
          var n = this.rzp.get("modal.ondismiss");
          rn(n) &&
            setTimeout(function () {
              return n(e);
            });
        },
        onhidden: function () {
          Er.flush(), this.afterClose();
          var e = this.rzp.get("modal.onhidden");
          rn(e) && e();
        },
        oncomplete: function (e) {
          var n = this.rzp.get(),
            t = n.enable_ga_analytics,
            r = n.enable_fb_analytics;
          t && this.ongaevent({ event: Vc, category: qc }),
            r && this.onfbaevent({ event: Vc, category: qc }),
            this.close();
          var o = this.rzp,
            a = o.get("handler");
          ho.track("checkout_success", { r: o, data: e, immediately: !0 }),
            rn(a) &&
              setTimeout(function () {
                a.call(o, e);
              }, 200);
        },
        onpaymenterror: function (e) {
          Er.flush();
          var n = this.rzp.get(),
            t = n.enable_ga_analytics,
            r = n.enable_fb_analytics;
          t && this.ongaevent({ event: Wc, category: qc }),
            r && this.onfbaevent({ event: Wc, category: qc });
          try {
            var o,
              a = this.rzp.get("callback_url"),
              i = this.rzp.get("redirect") || Fe,
              c = this.rzp.get("retry");
            if (i && a && !1 === c)
              return (
                null != e &&
                  null !== (o = e.error) &&
                  void 0 !== o &&
                  o.metadata &&
                  (e.error.metadata = JSON.stringify(e.error.metadata)),
                void Tt({
                  url: a,
                  content: e,
                  method: "post",
                  target: this.rzp.get("target") || "_top",
                })
              );
            this.rzp.emit("payment.error", e),
              this.rzp.emit("payment.failed", e);
          } catch (e) {}
        },
        onfailure: function (e) {
          var n = this.rzp.get(),
            t = n.enable_ga_analytics,
            r = n.enable_fb_analytics;
          t && this.ongaevent({ event: Wc, category: qc }),
            r && this.onfbaevent({ event: Wc, category: qc }),
            this.ondismiss(),
            i.g.alert("Payment Failed.\n" + e.error.description),
            this.onhidden();
        },
        onfault: function (e) {
          var n = "Something went wrong.";
          tn(e)
            ? (n = e)
            : on(e) &&
              (e.message || e.description) &&
              (n = e.message || e.description),
            Er.flush(),
            this.rzp.close(),
            this.rzp.emit("fault.close");
          var t = this.rzp.get("callback_url");
          (this.rzp.get("redirect") || Fe) && t
            ? gt({ url: t, params: { error: e }, method: "POST" })
            : i.g.alert("Oops! Something went wrong.\n" + n),
            this.afterClose();
        },
        afterClose: function () {
          eu(), (_u.container.style.display = "none");
        },
        onflush: function (e) {
          Er.flush(e);
        },
      };
      var gu = i(73145),
        vu = {
          RETRY_BUTTON: { name: "retry_button", type: O },
          RETRY_CLICKED: { name: "retry_ckicked", type: b },
          AFTER_RETRY_SCREEN: { name: "after_retry_screen", type: O },
          RETRY_VANISHED: { name: "retry_vanished", type: b },
          PAYMENT_CANCELLED: { name: "payment_cancelled", type: b },
        },
        yu = {
          P13N_INITIATED: { name: "p13n_initiated", type: E },
          P13N_RESPONSE: { name: "p13n_response", type: E },
          P13N_CALL_FAILED: { name: "p13n_call_failed", type: E },
          P13N_SECTION: { name: "p13n_section", type: O },
          P13N_METHOD_SHOWN: { name: "p13n_methods_shown", type: O },
        },
        bu = ya(
          {
            OPEN: { name: "checkout_open", type: O },
            INVOKED: { name: "checkout_invoked", type: S },
            CONTACT_NUMBER_FILLED: { name: "contact_number_filled", type: b },
            EMAIL_FILLED: { name: "email_filled", type: b },
            CONTACT_DETAILS: { name: "contact_details", type: O },
            METHOD_SELECTION_SCREEN: {
              name: "method_selection_screen",
              type: O,
            },
            CONTACT_DETAILS_PROCEED_CLICK: {
              name: "contact_details_proceed_clicked",
              type: b,
            },
            INSTRUMENTATION_SELECTION_SCREEN: {
              name: "Instrument_selection_screen",
              type: O,
            },
            METHOD_SELECTED: { name: "Method:selected", type: b },
            INSTRUMENT_SELECTED: { name: "instrument:selected", type: b },
            USER_LOGGED_IN: { name: "user_logged_in", type: b },
          },
          { funnel: Fo.HIGH_LEVEL }
        ),
        Ou =
          (ya(vu, { skipEvents: !0, funnel: Fo.HIGH_LEVEL }),
          ya(yu, { skipEvents: !0, funnel: Fo.HIGH_LEVEL }),
          Object.keys({
            en: "en",
            hi: "hi",
            mr: "mar",
            te: "tel",
            ml: !1,
            ur: !1,
            pa: !1,
            ta: "tam",
            bn: "ben",
            kn: "kan",
            sw: !1,
            ar: !1,
          }),
          "trigger_truecaller_intent");
      var wu,
        xu = "is_one_click_checkout_enabled_lite",
        Su = pn(ai);
      function Eu(e) {
        return function n() {
          return wu ? e.call(this) : (setTimeout(n.bind(this), 99), this);
        };
      }
      !(function e() {
        (wu = document.body || document.getElementsByTagName("body")[0]) ||
          setTimeout(e, 99);
      })();
      var ku,
        Pu = document.currentScript || (ku = At("script"))[ku.length - 1];
      function Ru(e) {
        var n = Tn(Pu);
        vt({ form: n, data: Ot(e) }), (n.onsubmit = No), n.submit();
      }
      var Cu, Du;
      function Au() {
        var e = {};
        X(Pu.attributes, function (n) {
          var t = n.name.toLowerCase();
          if (/^data-/.test(t)) {
            var r = e;
            t = t.replace(/^data-/, "");
            var o = n.value;
            "true" === o ? (o = !0) : "false" === o && (o = !1),
              /^notes\./.test(t) &&
                (e.notes || (e.notes = {}),
                (r = e.notes),
                (t = t.replace(/^notes\./, ""))),
              (r[t] = o);
          }
        });
        var n = e.key;
        if (n && n.length > 0) {
          e.handler = Ru;
          var t = ai(e);
          e.parent ||
            (fo.TrackRender(uo.AUTOMATIC_CHECKOUT_OPEN, t),
            (function (e) {
              var n = Tn(Pu);
              zn(
                n,
                Object.assign(jn("input"), {
                  type: "submit",
                  value: e.get("buttontext"),
                  className: "razorpay-payment-button",
                })
              ).onsubmit = function (n) {
                n.preventDefault();
                var t = this,
                  r = t.action,
                  o = t.method,
                  a = t.target,
                  i = e.get();
                if (tn(r) && r && !i.callback_url) {
                  var c = {
                    url: r,
                    content: Mt(t),
                    method: tn(o) ? o : "get",
                    target: tn(a) && a,
                  };
                  try {
                    var u = btoa(
                      JSON.stringify({
                        request: c,
                        options: JSON.stringify(i),
                        back: location.href,
                      })
                    );
                    i.callback_url = Xa("checkout/onyx") + "?data=" + u;
                  } catch (e) {}
                }
                return e.open(), fo.TrackBehav(uo.AUTOMATIC_CHECKOUT_CLICK), !1;
              };
            })(t));
        }
      }
      function ju() {
        if (!Cu) {
          var e = jn();
          (e.className = "razorpay-container"),
            Jn(
              e,
              "<style>@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}</style>"
            ),
            Wn(e, {
              zIndex: 2147483647,
              position: "fixed",
              top: 0,
              display: "none",
              left: 0,
              height: "100%",
              width: "100%",
              "-webkit-overflow-scrolling": "touch",
              "-webkit-backface-visibility": "hidden",
              "overflow-y": "visible",
            }),
            (Cu = Bn(e, wu)),
            (_u.container = Cu);
          var n =
            ((c = Cu),
            ((u = jn()).className = "razorpay-backdrop"),
            Wn(u, {
              "min-height": "100%",
              transition: "0.3s ease-out",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }),
            Bn(u, c));
          _u.backdrop = n;
          var t =
            ((r = n),
            (o = "rotate(45deg)"),
            (a = "opacity 0.3s ease-in"),
            ((i = jn("span")).textContent = "Test Mode"),
            Wn(i, {
              "text-decoration": "none",
              background: "#D64444",
              border: "1px dashed white",
              padding: "3px",
              opacity: "0",
              "-webkit-transform": o,
              "-moz-transform": o,
              "-ms-transform": o,
              "-o-transform": o,
              transform: o,
              "-webkit-transition": a,
              "-moz-transition": a,
              transition: a,
              "font-family": "lato,ubuntu,helvetica,sans-serif",
              color: "white",
              position: "absolute",
              width: "200px",
              "text-align": "center",
              right: "-50px",
              top: "50px",
            }),
            Bn(i, r));
          _u.ribbon = t;
        }
        var r, o, a, i, c, u;
        return Cu;
      }
      var Tu,
        Mu = !1,
        Iu = !1,
        Nu =
          ((Tu = (function (e) {
            try {
              var n = localStorage.getItem(e);
              if (!n) return null;
              var t = JSON.parse(n);
              return new Date().getTime() > t.expiry
                ? (localStorage.removeItem(e), null)
                : t;
            } catch (e) {
              return null;
            }
          })("razorpay_affordability_widget_fid")),
          null != Tu && Tu.id ? Tu.id : null);
      function Lu(e) {
        if (Du) Du.openRzp(e);
        else {
          var n;
          (Du = new _u(e)), (Zt.iframeReference = Du.el), Zt.setId(Er.id);
          var t = Du.onmessage.bind(Du);
          null === (n = rt("message", t)) || void 0 === n || n(i.g),
            zn(Cu, Du.el);
        }
        return Du;
      }
      Ye().then(function (e) {
        Mu = e;
      }),
        (0, gu.r)()
          .then(function (e) {
            Iu = e.isPrivate;
          })
          .catch(function () {}),
        (ai.open = function (e) {
          return ai(e).open();
        }),
        (Su.postInit = function () {
          var e = this;
          this.modal = { options: {} };
          var n = this.set;
          (this.set = function (t, r) {
            var o = e.checkoutFrame;
            o && o.postMessage({ event: "update_options", data: v({}, t, r) }),
              n(t, r);
          }),
            this.get("parent") && this.open();
        });
      var $u = Su.onNew;
      (Su.onNew = function (e, n) {
        "payment.error" === e && Er(this, "event_paymenterror", location.href),
          rn($u) && $u.call(this, e, n);
      }),
        (Su.initAndPrefetchPrefs = function () {
          return Du.prefetchPrefs(this), this;
        }),
        (Su.createCheckoutAndFetchPrefs = function (e) {
          Du
            ? Du.makeCheckoutCallForShopify(this, e)
            : this.emit("shopify_failure");
        }),
        (Su.open = Eu(function () {
          this.metadata ||
            ((this.metadata = { isBrave: Mu, isPrivate: Iu }),
            Nu && (this.metadata.affordability_widget_fid = Nu)),
            (this.metadata.openedAt = Date.now());
          var e = (this.checkoutFrame = Lu(this));
          fo.setMeta(xu, _e() && !fe("order_id")), fo.Track(uo.OPEN);
          try {
            bu.INVOKED({
              prefill: {
                contact: fe("prefill.contact"),
                email: fe("prefill.email"),
                method: fe("prefill.method") || "",
              },
            });
          } catch (e) {}
          return (
            e.el.contentWindow ||
              (e.close(),
              e.afterClose(),
              i.g.alert(
                "This browser is not supported.\nPlease try payment in another browser."
              )),
            "-new.js" === Pu.src.slice(-7) &&
              Er(this, "oldscript", location.href),
            this
          );
        })),
        (Su.resume = function (e) {
          var n = this.checkoutFrame;
          n && n.postMessage({ event: "resume", data: e });
        }),
        (Su.close = function () {
          var e = this.checkoutFrame;
          e && e.postMessage({ event: "close" });
        });
      var Bu = Eu(function () {
        fo.setMeta(po, (i.g.innerWidth && i.g.innerWidth < 485) || Ue || Ze()),
          ju(),
          window.Intl ? (Du = Lu()) : fo.Track(uo.INTL_MISSING),
          Zt.subscribe(Ou, function (e) {
            var n = (e.data || {}).url,
              t = window.onbeforeunload;
            window.onbeforeunload = null;
            try {
              Tt({ method: "GET", content: "", url: n });
            } catch (e) {}
            setTimeout(function () {
              Zt.sendMessage("".concat(Ou, ":finished"), {
                focused: document.hasFocus(),
              }),
                (window.onbeforeunload = t);
            }, 600);
          });
        try {
          Au();
        } catch (e) {}
      });
      i.g.addEventListener("rzp_error", function (e) {
        var n = e.detail;
        ho.track("cfu_error", { data: { error: n }, immediately: !0 });
      }),
        i.g.addEventListener("rzp_network_error", function (e) {
          var n = e.detail;
          (n && "https://lumberjack.razorpay.com/v1/track" === n.baseUrl) ||
            ho.track("network_error", { data: n, immediately: !0 });
        });
      var zu = "checkoutjs";
      (Er.props.library = zu),
        ba.setContext(Jo, zu),
        ba.setContext(Xo, Ut),
        (Pa.handler = function (e) {
          if (fn(this, ai)) {
            var n = this.get("callback_url");
            n && gt({ url: n, params: e, method: "POST" });
          }
        }),
        (Pa.buttontext = "Pay Now"),
        (Pa.parent = null),
        (si.parent = function (e) {
          if (!jt(e)) return "parent provided for embedded mode doesn't exist";
        }),
        Bu();
    })();
})();
