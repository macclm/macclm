!(function t(e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define("tccl", [], n)
    : "object" == typeof exports
    ? (exports["tccl"] = n())
    : (e["tccl"] = n());
})(window, function () {
  return (
    (r = {}),
    (o.m = n =
      [
        function (t, e, n) {
          "use strict";
          e.parseCookie =
            e.isSupported =
            e.isCorporateHost =
            e.getWindow =
            e.getNavigator =
            e.getDocument =
            e.getBaseHost =
              undefined;
          var r = (function t(e) {
            return e && e.__esModule ? e : { default: e };
          })(n(3));
          n(2);
          var o,
            i,
            a,
            s,
            u =
              ((o = ""),
              (a = {
                document: (i = Object.create({
                  get cookie() {
                    return o;
                  },
                  set cookie(t) {
                    o = t;
                  },
                })),
              }),
              (s = {}),
              "undefined" == typeof window
                ? { window: a, document: i, navigator: s }
                : {
                    window: window || a,
                    document: window.document || i,
                    navigator: navigator || s,
                  }),
            c = function () {
              return u.window;
            },
            f = function () {
              return u.document;
            };
          var p = function () {
              return u.navigator;
            },
            l = function () {
              var t = c().location;
              return t && t.hostname ? t.hostname : "";
            },
            d = function (t) {
              var e = l();
              t && r.default.isSet(t) && (e = r.default.get(t));
              var n = e.split(".");
              2 <= n.length && (e = n.slice(n.length - 2).join("."));
              return e;
            };
          (function t(e, n, r) {
            var o = r || 1;
            if (n && !(10 < o)) {
              var i = e(n);
              return !i && n.parentNode ? t(e, n.parentNode, o + 1) : i;
            }
          });
          (e.getBaseHost = d),
            (e.getDocument = f),
            (e.getNavigator = p),
            (e.getWindow = c),
            (e.isCorporateHost = function (t) {
              var e = t || d();
              return (
                !!~e.indexOf("godaddy.com") || !!~e.indexOf("secureserver.net")
              );
            }),
            (e.isSupported = function () {
              var t = p().userAgent.toLowerCase();
              return !/msie [1-8]\./.test(t);
            }),
            (e.parseCookie = function t(e) {
              for (
                var n = e.split(";"), r = Object.create(null), o = 0;
                o < n.length;
                o++
              ) {
                var i = /([^=]*)*=([\s\S]*)/.exec(n[o]);
                if (i && i[2]) {
                  var a = i[1].trim(),
                    s = decodeURIComponent(i[2].trim());
                  r[a] = s;
                }
              }
              return r;
            });
        },
        function (t, e, n) {
          "use strict";
          (e.__esModule = !0),
            (e._errorInit =
              e._logInit =
              e.error =
              e.info =
              e.debug =
              e.log =
                undefined);
          var o = n(7),
            i = n(0),
            r = function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              var r = (0, i.getWindow)().console;
              return !(0, o.isProduction)() && r && r.log
                ? Function.prototype.bind
                  ? Function.prototype.bind.call(r.log, r)
                  : function () {
                      Function.prototype.apply.call(r.log, r, e);
                    }
                : function () {};
            },
            a = r(),
            s = function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              var r = (0, i.getWindow)().console;
              return !(0, o.isProduction)() && r && r.error
                ? Function.prototype.bind
                  ? Function.prototype.bind.call(r.error, r)
                  : function () {
                      Function.prototype.apply.call(r.error, r, e);
                    }
                : function () {};
            },
            u = s();
          (e.log = a),
            (e.debug = function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              (0, o.isDebug)() && a.apply(null, e);
            }),
            (e.info = a),
            (e.error = u),
            (e._logInit = r),
            (e._errorInit = s);
        },
        function (t, e, n) {
          "use strict";
          var a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            s = arguments,
            u = function (t, e) {
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var r = t[n];
                  try {
                    if (e(n, r)) return t;
                  } catch (t) {}
                }
              return t;
            },
            c = function (t) {
              return 2 === t.length ? t[1] : undefined;
            };
          (e.cleanKeyNames = function (r, o, i) {
            r &&
              o &&
              u(r, function (t, e) {
                var n = (t + "").split(o).join(i || "");
                delete r[t], (r[n] = e);
              });
          }),
            (e.map = u),
            (e.merge = function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              for (var r = {}, o = 0; o < s.length; o++) {
                var i = e[o];
                "object" === (void 0 === i ? "undefined" : a(i)) &&
                  u(i, function (t, e) {
                    r[t] = e;
                  });
              }
              return r;
            }),
            (e.parseString = function (t, e, n) {
              if ("string" != typeof t) return {};
              for (var r = {}, o = t.split(e), i = 0; i < o.length; i++) {
                var a = o[i].split(n);
                r[a[0]] = c(a);
              }
              return r;
            }),
            (e.parseValue = c),
            (e.stringify = function (t, e, n) {
              var r = [];
              return (
                u(t, function (t, e) {
                  r.push("" + t + n + e);
                }),
                0 === r.length ? "" : r.join(e)
              );
            }),
            (e.removeUndefined = function (t) {
              for (var e in t) "undefined" == typeof t[e] && delete t[e];
            });
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = new ((function t(e) {
            return e && e.__esModule ? e : { default: e };
          })(n(5)).default)();
          e.default = r;
        },
        function (t, e, n) {
          "use strict";
          e.libraryLoaded =
            e.setClientName =
            e.setWindowVar =
            e.setInternalVar =
            e.getInternalVar =
              undefined;
          var r = n(0),
            o = (n(1), void 0),
            i = void 0,
            a = function (t, e) {
              (0, r.getWindow)()[o] && ((0, r.getWindow)()[o][t] = e);
            },
            s = function (t, e) {
              ((0, r.getWindow)()[t] = e), a(t, e);
            };
          (e.getInternalVar = function (t) {
            if ((0, r.getWindow)()[o]) return (0, r.getWindow)()[o][t];
          }),
            (e.setInternalVar = a),
            (e.setWindowVar = s),
            (e.setClientName = function (t) {
              o = "_" + (i = t) + "Internal";
            }),
            (e.libraryLoaded = function () {
              var t = "_" + i + "PageReqFired";
              return (
                !!(0, r.getWindow)()[t] ||
                (s(t, !0),
                "undefined" != typeof (0, r.getWindow)()[o] ||
                  !((0, r.getWindow)()[o] = {}))
              );
            });
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var o = n(2);
          var r =
            ((i.prototype.clear = function () {
              this.properties = {};
            }),
            (i.prototype.get = function (t) {
              if (this.properties.hasOwnProperty(t)) return this.properties[t];
            }),
            (i.prototype.set = function (t, e) {
              this.properties[t] = e;
            }),
            (i.prototype.isSet = function (t) {
              if (this.properties.hasOwnProperty(t)) return !0;
            }),
            (i.prototype.delete = function (t) {
              delete this.properties[t];
            }),
            (i.prototype.getProperties = function (t) {
              var n = {},
                r = function () {
                  return !1;
                };
              return (
                t || "function" != typeof t || (r = t),
                (0, o.map)(this.properties, function (t, e) {
                  r(t) || (n[t] = e);
                }),
                n
              );
            }),
            (i.prototype.merge = function (t) {
              var n = this,
                e = t;
              e instanceof i && (e = t.getProperties()),
                (0, o.map)(e, function (t, e) {
                  n.set(t, e);
                });
            }),
            i);
          function i(t) {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              (this.properties = t || {});
          }
          e.default = r;
        },
        function (t, e, n) {
          "use strict";
          e.getUnique = e.logToArray = e.isArray = undefined;
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            o = n(13),
            i = function (t) {
              return (
                "object" === (void 0 === t ? "undefined" : r(t)) &&
                t instanceof Array
              );
            };
          (e.isArray = i),
            (e.logToArray = function (t, e) {
              i(t) && t.push({ timestamp: (0, o.getISODate)(), data: e });
            }),
            (e.getUnique = function (t) {
              return t
                ? t.filter(function (t, e, n) {
                    return e === n.indexOf(t);
                  })
                : t;
            });
        },
        function (t, e, n) {
          "use strict";
          e.getEnvName =
            e.initEnv =
            e.setDebug =
            e.isProduction =
            e.isDebug =
              undefined;
          var r = n(0),
            o = n(8),
            i = void 0,
            a = function (t) {
              var e = (0, r.getBaseHost)(t);
              return (
                !e ||
                (0, o.startsWith)(e, "dev-") ||
                (0, o.startsWith)(e, "localhost") ||
                (0, o.startsWith)(e, "dev.") ||
                (0, o.startsWith)(e, "test.")
              );
            },
            s = function (t) {
              var e = (0, r.getBaseHost)(t);
              return (
                (0, o.startsWith)(e, "test-") || (0, o.startsWith)(e, "stg-")
              );
            },
            u = function () {
              return !a() && !s();
            },
            c = function () {
              return i || (s() ? "test" : u() ? "prod" : "dev");
            },
            f = !1;
          (e.isDebug = function () {
            return f;
          }),
            (e.isProduction = u),
            (e.setDebug = function (t) {
              f = !0 === t || "true" === t;
            }),
            (e.initEnv = function (t) {
              i = t || c();
            }),
            (e.getEnvName = c);
        },
        function (t, e, n) {
          "use strict";
          (e.pad = function (t, e) {
            if (void 0 === t) return t;
            void 0 === e && (e = 2);
            for (var n = t + ""; n.length < e; ) n = "0" + n;
            return n;
          }),
            (e.stringifyArray = function (t, e, n) {
              for (var r = "", o = 0; o < (t.length < e ? t.length : e); o++)
                r += n(t[o]) + "^";
              return r.substring(0, r.length - 1);
            }),
            (e.startsWith = function (t, e, n) {
              return t.substr(!n || n < 0 ? 0 : +n, e.length) === e;
            });
        },
        function (t, e, n) {
          "use strict";
          e.setCookie = e.findCookie = undefined;
          var a = n(0),
            s =
              (n(2),
              (function t(e) {
                return e && e.__esModule ? e : { default: e };
              })(n(3)));
          var r = void 0,
            o = void 0,
            i = function (t, e, n, r) {
              var o = s.default.get("tcc.cookies.sameSite") || "",
                i = new Date();
              i.setTime(i.getTime() + 60 * n * 1e3),
                ((0, a.getDocument)().cookie =
                  t +
                  "=" +
                  encodeURI(e) +
                  "; domain=" +
                  (0, a.getBaseHost)() +
                  "; " +
                  (n ? "expires=" + i.toGMTString() + "; " : "") +
                  (r ? "path=" + r + "; " : "") +
                  (o ? "SameSite=" + o + "; " : "") +
                  ("NONE" == o.toUpperCase() ? " Secure;" : ""));
            },
            u = function (t) {
              var e = (0, a.getDocument)().cookie;
              return r !== e && ((o = (0, a.parseCookie)(e)), (r = e)), o[t];
            };
          (e.findCookie = u), (e.setCookie = i);
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = l(n(38)),
            o = l(n(5)),
            i = n(14),
            a = n(39),
            s = n(16),
            u = l(n(19)),
            c = l(n(11)),
            f = n(12),
            p = l(n(3));
          function l(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var d,
            h = (0, s.rand)(),
            y =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(v, (d = r.default)),
              (v.prototype.process = function () {
                var t = this;
                d.prototype.process.call(this, {
                  ALL: function () {
                    t._handleEventSvc();
                  },
                });
              }),
              (v.prototype._handleEventSvc = function () {
                (0, i.sendEvent)(
                  this.pageEvent.getProperties(),
                  "/t/1/tl/event",
                  "GET"
                );
              }),
              (v.prototype.preProcess = function () {
                (this.tData = new c.default()),
                  this.tData.merge(this.data.ALL.custom_properties),
                  (this.pageEvent = new o.default()),
                  this.pageEvent.set("usrin", this.tData.stringify());
                var t = new u.default().getVisitInfo(),
                  e = t.visitorGuid,
                  n = t.visitGuid;
                this.pageEvent.set("cts", new Date().getTime()),
                  this.pageEvent.set("dh", (0, a.getHostname)()),
                  this.pageEvent.set("dr", (0, a.getReferrer)(1e3)),
                  this.pageEvent.set("ua", (0, a.getUserAgent)()),
                  this.pageEvent.set("vci", h),
                  this.pageEvent.set("cv", p.default.get("tccl.buildVersion")),
                  this.pageEvent.set("z", (0, s.rand)()),
                  this.pageEvent.set("vg", n),
                  this.pageEvent.set("vtg", e),
                  this.pageEvent.set("dp", (0, a.getPageName)());
                var r = (0, f.processPageLevelProperties)();
                this.pageEvent.set("ap", r.ap ? r.ap : "not_set"),
                  this.pageEvent.set("trfd", JSON.stringify(r)),
                  this.pageEvent.merge(this.extras);
              }),
              v);
          function v() {
            return (
              (function t(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, v),
              (function t(e, n) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              })(this, d.apply(this, arguments))
            );
          }
          e.default = y;
        },
        function (t, e, n) {
          "use strict";
          (e.__esModule = !0),
            (e.getObjFromTDataString = e.getObjFromTDataList = undefined);
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            o = n(1),
            i = n(6),
            a = n(2),
            s = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(5));
          var u,
            c = function (t) {
              return (0, a.parseString)(t, "^", ",");
            },
            f =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(p, (u = s.default)),
              (p.prototype.setTDataString = function (t) {
                u.prototype.merge.call(this, c(t));
              }),
              (p.prototype.stringify = function () {
                var t = this.getProperties();
                (0, a.cleanKeyNames)(t, ".", "_");
                var e = (0, a.stringify)(t, "^", ",");
                if (e) return e;
              }),
              (p.prototype.set = function (t, e) {
                "object" !== (void 0 === e ? "undefined" : r(e)) &&
                "[object Function]" !== {}.toString.call(e)
                  ? u.prototype.set.call(this, t, e)
                  : (0, o.error)(
                      "Invalid key/value pair found in Traffic's custom properties (tData). Objects, arrays, and functions are not supported.\n\nKey: '" +
                        t +
                        "' Value: '" +
                        e +
                        "' Type: '" +
                        (void 0 === e ? "undefined" : r(e)) +
                        "'."
                    );
              }),
              p);
          function p() {
            return (
              (function t(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              (function t(e, n) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              })(this, u.apply(this, arguments))
            );
          }
          (e.default = f),
            (e.getObjFromTDataList = function (t) {
              var e = {};
              if ((0, i.isArray)(t))
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (0, i.isArray)(r) && (e[r[0]] = (0, a.parseValue)(r));
                }
              return e;
            }),
            (e.getObjFromTDataString = c);
        },
        function (t, e, n) {
          "use strict";
          e.processPageLevelProperties = e.init = undefined;
          var o = n(6),
            i = n(4),
            r = n(7),
            a = n(0),
            s = (n(1), n(2)),
            u = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(3));
          var c = void 0,
            f = void 0,
            p = [],
            l = void 0,
            d = void 0,
            h = {},
            y = 0,
            v = function (t) {
              for (
                var e = Array.isArray((r = l)),
                  n = 0,
                  r = e ? r : r[Symbol.iterator]();
                ;

              ) {
                var o;
                if (e) {
                  if (n >= r.length) break;
                  o = r[n++];
                } else {
                  if ((n = r.next()).done) break;
                  o = n.value;
                }
                var i = o;
                if (t.startsWith(i + ".")) return !1;
              }
              return !0;
            },
            g = function (t, e) {
              "debug" === t && (0, r.setDebug)(e);
            };
          (e.init = function (t, e, n) {
            (d = n || []),
              (f = t),
              (l = e),
              (c = (0, a.getWindow)()[f] || []),
              (0, i.setWindowVar)(f, c),
              (0, i.setInternalVar)(f + "Log", p);
            var r = (function () {
              for (var n = {}, t = 0; t < c.length; t++) {
                var e = c[t];
                (0, s.map)(e, function (t, e) {
                  ~d.indexOf(t.toLowerCase()) || (g(t, e), v(t) || (n[t] = e));
                });
              }
              return n;
            })();
            u.default.merge(r), (0, o.logToArray)(p, r);
          }),
            (e.processPageLevelProperties = function () {
              for (; y < c.length; ) {
                var t = c[y];
                (0, s.map)(t, function (t, e) {
                  ~d.indexOf(t.toLowerCase()) ||
                    (v(t) && (g(t, e), (h[t] = e)));
                }),
                  y++;
              }
              return (0, s.merge)(h);
            });
        },
        function (t, e, n) {
          "use strict";
          e.getDate = e.getISODate = undefined;
          var r = n(8);
          (e.getISODate = function () {
            return (
              (e =
                (t = new Date()).getUTCFullYear() +
                "-" +
                (0, r.pad)(1 + t.getUTCMonth())),
              (e +=
                "-" +
                (0, r.pad)(t.getUTCDate()) +
                "T" +
                (0, r.pad)(t.getUTCHours()) +
                ":"),
              (e +=
                (0, r.pad)(t.getUTCMinutes()) +
                ":" +
                (0, r.pad)(t.getUTCSeconds()) +
                "."),
              (e +=
                ((t.getUTCMilliseconds() / 1e3).toFixed(3) + "").slice(2, 5) +
                "Z")
            );
            var t, e;
          }),
            (e.getDate = function () {
              return new Date();
            });
        },
        function (t, e, n) {
          "use strict";
          e.sendEvent = e.init = undefined;
          var l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            i = n(4),
            s = n(0),
            a = n(6),
            d = n(21),
            r = n(7),
            h = n(2),
            u = (n(1), "_trfqSendLog"),
            o = !1,
            c = void 0,
            f = [],
            p = function () {
              var t = (0, s.getBaseHost)();
              if ("localhost" === t) return "dev-secureserver.net";
              if (
                "secureserver.net" ===
                (t = (0, s.isCorporateHost)(t) ? t : "secureserver.net")
              ) {
                var e = (0, r.getEnvName)();
                t = "prod" === e ? t : e + "-" + t;
              }
              return t;
            },
            y = function () {
              return "https://events.api." + (c || p());
            },
            v = function (t, e, n, r) {
              var o = { endpoint: t, queryParams: e, method: n, payload: r };
              (0, a.logToArray)((0, i.getInternalVar)(u), o);
            },
            g = function (t, e, n, r, o) {
              var i =
                5 < arguments.length && arguments[5] !== undefined
                  ? arguments[5]
                  : {};
              if ((0, s.getWindow)().XMLHttpRequest) {
                var a = new ((0, s.getWindow)().XMLHttpRequest)();
                a.open(n, t, !0),
                  i.setContentType &&
                    a.setRequestHeader("Content-Type", "application/json"),
                  (a.withCredentials = !0),
                  (a.onreadystatechange = o),
                  a.send(r ? JSON.stringify(r) : null),
                  v(t, e, n, r);
              } else 0;
            },
            m = function (t, e, n, r) {
              var o,
                i,
                a,
                s = y() + e,
                u =
                  ((o = t),
                  (i = n),
                  (a = {}),
                  (0, h.map)(o, function (t, e) {
                    void 0 === e ||
                      ("GET" === i &&
                        "object" === (void 0 === e ? "undefined" : l(e))) ||
                      "[object Function]" === {}.toString.call(e) ||
                      (a[t] = e);
                  }),
                  a),
                c = {};
              if ("GET" === n) {
                var f = (0, d.encodeProperties)(u),
                  p = (0, d.assembleUrl)(f, s);
                g(p, (0, h.stringify)(f, "&", "="), n, null, r, c);
              } else (c.setContentType = !0), g(s, null, n, u, r, c);
            };
          (e.init = function () {
            for (c = p(), o = !0; 0 < f.length; ) m.apply(undefined, f.shift());
          }),
            (e.sendEvent = function (t, e, n, r) {
              o ? m(t, e, n, r) : f.push([t, e, n, r]);
            });
        },
        function (t, e, n) {
          "use strict";
          e.createGuid = undefined;
          var r = f(n(24)),
            o = n(0),
            i = n(9),
            a = n(28),
            s = n(16),
            u = n(13),
            c = f(n(30));
          function f(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var p = function () {
              var e = (0, o.getWindow)().crypto;
              return (p =
                e && e.getRandomValues
                  ? function () {
                      try {
                        var t = new Int32Array(1);
                        return e.getRandomValues(t), t[0];
                      } catch (t) {
                        return (p = s.rand)();
                      }
                    }
                  : s.rand)();
            },
            l = void 0,
            d = void 0;
          e.createGuid = function () {
            return (0, r.default)(
              (function () {
                var t = (0, o.getWindow)();
                if (!l) {
                  var e = (0, o.getNavigator)();
                  l = e.userAgent.replace(/\D+/g, "") + e.plugins.length;
                  var n = t.screen;
                  d = (n.height || "") + (n.width || "") + (n.pixelDepth || "");
                }
                var r = [
                  (0, s.rand)(),
                  l,
                  (0, u.getDate)().getMilliseconds(),
                  d,
                  p(),
                  (0, i.findCookie)("market"),
                  (0, a.getCustomerId)() || "",
                  (0, o.getDocument)().referrer,
                  t.location.href,
                  JSON.stringify(c.default.getProperties()),
                ];
                return (
                  t.performance &&
                    t.performance.now &&
                    r.push(t.performance.now()),
                  r.join("")
                );
              })(),
              "d9a11081-301d-478b-98df-6511799184e5"
            );
          };
        },
        function (t, e, n) {
          "use strict";
          e.rand = function () {
            return Math.floor(2147483647 * Math.random());
          };
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = n(0),
            o = n(4),
            i = n(6);
          n(1);
          var a =
            ((s.prototype.start = function () {
              this.loadAsyncCommands();
            }),
            (s.prototype.pushLog = function (t) {
              (0, i.logToArray)(this.dataLayerLog, t);
            }),
            (s.prototype.process = function () {}),
            (s.prototype.push = function (t) {
              this.loaded ? this.process(t) : this.asyncCommands.push(t);
            }),
            (s.prototype.loadAsyncCommands = function () {
              for (; 0 < this.asyncCommands.length; )
                this.process(this.asyncCommands.shift());
              this.loaded = !0;
            }),
            s);
          function s(t) {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
              (this.dataLayerName = t),
              (this.dataLayerLog = []),
              (this.asyncCommands = []);
            var e = ((this.loaded = !1), r.getWindow)()[this.dataLayerName];
            e && (this.asyncCommands = e),
              (0, o.setWindowVar)(this.dataLayerName, this),
              (this.dataLayer = (0, r.getWindow)()[this.dataLayerName]);
          }
          e.default = a;
        },
        function (t, e, n) {
          "use strict";
          e.ObjectDefinitionBlock =
            e.PropertyDefinitionBlock =
            e.SchemaDefinitionBlock =
              undefined;
          var p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            l = n(6),
            c = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(5));
          function i(t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          }
          function r(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          }
          function a(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          var o = "OPTIONAL",
            s = "REQUIRED",
            f = "CALCULATED",
            d = "map",
            h = "sub",
            u = function (t, e) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (e === r.type) return r;
              }
            },
            y = function (t, e, n, r) {
              var o = t[e];
              if (!o) return undefined;
              var i = o;
              if (((0, l.isArray)(i) || n) && !(i = u(i, n))) return undefined;
              var a = i[r];
              return a || undefined;
            },
            v = function (t, e) {
              var n = t.name;
              return (
                void 0 !== e &&
                  (t.outputKeys[e] || t.outputKeys.ALL) &&
                  (n = t.outputKeys[e] || t.outputKeys.ALL),
                n
              );
            },
            g = function (t, e, n, r) {
              if ("object" !== p(t.transformMap))
                return "function" == typeof t.transformMap
                  ? t.transformMap(n, r)
                  : t.transformMap;
              for (
                var o,
                  i,
                  a,
                  s,
                  u,
                  c = (0, l.isArray)(t.transformMap)
                    ? t.transformMap
                    : ((o = t.transformMap),
                      (i = e),
                      (a = o.ALL || []),
                      (s = o[i] || []),
                      (u = [].concat(a).concat(s)),
                      (0, l.getUnique)(u)),
                  f = 0;
                f < c.length;
                f++
              )
                n = c[f](n, r);
              return n;
            },
            m =
              ((b.prototype.parse = function (t, e) {
                for (
                  var n = new c.default(), r = 0;
                  r < this.properties.length;
                  r++
                ) {
                  var o = this.properties[r];
                  if (!(0 < o.sinkList.length) || ~o.sinkList.indexOf(e)) {
                    var i = void 0;
                    if (o.validationType !== f) {
                      var a = t[o.name];
                      o.resolutionType === h && (a = t), (i = o.parse(a, e));
                    }
                    (i = g(o, e, i, n.getProperties())),
                      o.resolutionType === d ? n.set(v(o, e), i) : n.merge(i);
                  }
                }
                for (var s = 0; s < this.properties.length; s++) {
                  var u = this.properties[s].doNotOutputList;
                  (u.includes(e) || u.includes("ALL")) &&
                    n.delete(v(this.properties[s], e));
                }
                return n.getProperties();
              }),
              (b.prototype.load = function (t) {
                for (var e = 0; e < this.properties.length; e++) {
                  var n = this.properties[e];
                  (n.commandSchemaDefinitions = this.commandSchemaDefinitions),
                    n.load(t);
                }
              }),
              (b.prototype.stringify = function () {
                for (
                  var t = new c.default(), e = 0;
                  e < this.properties.length;
                  e++
                ) {
                  var n = this.properties[e];
                  t.merge(n.stringify());
                }
                return t.getProperties();
              }),
              (b.prototype.clean = function () {
                for (var t = 0; t < this.properties.length; t++)
                  this.properties[t].clean();
                this.properties = [];
              }),
              (b.prototype.transform = function (t) {
                return (this.transformMap = t), this;
              }),
              (b.prototype.transformKeys = function (t) {
                return (this.outputKeys = t), this;
              }),
              (b.prototype.sinks = function (t) {
                return (this.sinkList = t), this;
              }),
              (b.prototype.doNotOutput = function (t) {
                return (
                  void 0 === t
                    ? (this.doNotOutputList = ["ALL"])
                    : "string" == typeof t
                    ? (this.doNotOutputList = [t])
                    : (0, l.isArray)(t) && (this.doNotOutputList = t),
                  this
                );
              }),
              b);
          function b(t) {
            a(this, b),
              (this.name = t),
              (this.properties = []),
              (this.definitionType = ""),
              (this.resolutionType = d),
              (this.doNotOutputList = []),
              (this.outputKeys = {}),
              (this.sinkList = []),
              (this.commandSchemaDefinitions = {}),
              (this.transformMap = {});
          }
          var _,
            w =
              (r(S, (_ = m)),
              (S.prototype.load = function (t) {
                (this.properties = this.properties.concat(this.schema.data)),
                  _.prototype.load.call(this, t);
              }),
              (S.prototype.parse = function (e, t) {
                var n = t || this.schema.sinks || [],
                  r = {};
                if (this.schema.data && 0 < this.schema.data.length)
                  try {
                    ~n.indexOf("ALL") || (n = n.concat(["ALL"]));
                    for (var o = 0; o < n.length; o++) {
                      var i = n[o];
                      this.load(i),
                        (r[i] = _.prototype.parse.call(this, e || {}, i)),
                        this.clean();
                    }
                  } catch (t) {
                    throw [
                      t,
                      "\n\nExpected Parameters:\n",
                      this.stringify(),
                      "\n\nReceived Parameters:\n",
                      e,
                    ];
                  }
                return Object.freeze(r);
              }),
              S);
          function S(t, e, n, r) {
            a(this, S);
            var o = i(this, _.call(this, e));
            return (
              (o.commandSchemaDefinitions = t),
              (o.type = n),
              (o.version = r),
              (o.definitionType = "Schema"),
              (o.schema = y(
                o.commandSchemaDefinitions,
                o.name,
                o.type,
                o.version
              )),
              o
            );
          }
          var E,
            L =
              (r(O, (E = m)),
              (O.prototype.parse = function (t) {
                if (this.validationType === s && !t)
                  throw "Missing required property '" + this.name + "'";
                return t;
              }),
              (O.prototype.stringify = function () {
                var t = {};
                return (t[this.name] = this.validationType), t;
              }),
              (O.prototype.optional = function () {
                return (this.validationType = o), this;
              }),
              (O.prototype.required = function () {
                return (this.validationType = s), this;
              }),
              O);
          function O(t) {
            return a(this, O), i(this, E.call(this, t));
          }
          var C,
            T =
              (r(P, (C = m)),
              (P.prototype.load = function (t) {
                (this.properties = this.properties.concat(this.objDefinitions)),
                  this.extraDefinitions &&
                    (this.properties = this.properties.concat(
                      this.extraDefinitions
                    )),
                  C.prototype.load.call(this, t);
              }),
              (P.prototype.stringify = function () {
                if (this.resolutionType !== d)
                  return C.prototype.stringify.call(this);
                var t = {};
                return (
                  "Collection" === this.definitionType
                    ? (t[this.name] = {
                        "1...n": C.prototype.stringify.call(this),
                      })
                    : (t[this.name] = C.prototype.stringify.call(this)),
                  t
                );
              }),
              (P.prototype.substitute = function (t) {
                return (
                  (this.objDefinitions = t), (this.resolutionType = h), this
                );
              }),
              (P.prototype.map = function (t, e) {
                return (
                  (this.name = t),
                  (this.objDefinitions = e),
                  (this.resolutionType = d),
                  this
                );
              }),
              (P.prototype.extend = function (t) {
                return (this.extraDefinitions = t), this;
              }),
              P);
          function P() {
            a(this, P);
            var t = i(this, C.call(this));
            return (t.objDefinitions = []), (t.definitionType = "Object"), t;
          }
          var j;
          r(D, (j = T)),
            (D.prototype.parse = function (t, e) {
              if (
                this.minElements &&
                (void 0 === t || t.length < this.minElements)
              )
                throw (
                  "Collection '" +
                  this.name +
                  "' does not contain enough data. Expected at least " +
                  this.minElements +
                  " element(s)."
                );
              var n = [];
              if (t)
                for (var r = 0; r < t.length; r++)
                  n.push(j.prototype.parse.call(this, t[r], e));
              return n;
            }),
            (D.prototype.withMinElements = function (t) {
              return (this.minElements = t), this;
            });
          function D() {
            a(this, D);
            var t = i(this, j.call(this));
            return (t.definitionType = "Collection"), (t.minElements = 0), t;
          }
          var A;
          r(M, (A = m));
          function M(t) {
            a(this, M);
            var e = i(this, A.call(this, t));
            return (e.validationType = f), e;
          }
          (e.SchemaDefinitionBlock = w),
            (e.PropertyDefinitionBlock = L),
            (e.ObjectDefinitionBlock = T);
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var o = n(9),
            i = n(15),
            r = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(40));
          var a,
            s =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(u, (a = r.default)),
              (u.prototype.getVisitInfo = function () {
                var t = "_tccl_visitor",
                  e = "_tccl_visit",
                  n = (0, o.findCookie)(t),
                  r = (0, o.findCookie)(e);
                return (
                  n || r
                    ? ((n = n || (0, i.createGuid)()),
                      (r = r || (0, i.createGuid)()))
                    : (n = r = (0, i.createGuid)()),
                  (0, o.setCookie)(t, n, 525600, "/"),
                  (0, o.setCookie)(e, r, 30, "/"),
                  { visitorGuid: n, visitGuid: r }
                );
              }),
              u);
          function u() {
            return (
              (function t(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              (function t(e, n) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              })(this, a.apply(this, arguments))
            );
          }
          e.default = s;
        },
        function (t, e, n) {
          "use strict";
          var r = n(4),
            o = n(0),
            i = n(1),
            a = n(12),
            s = n(14),
            u = n(23),
            c = n(31),
            f = n(7),
            p = b(n(32)),
            l = b(n(33)),
            d = n(34),
            h = b(d),
            y = b(n(36)),
            v = b(n(19)),
            g = (function t(e) {
              {
                if (e && e.__esModule) return e;
                var n = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return (n.default = e), n;
              }
            })(n(43)),
            m = n(46);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var _ = !1,
            w = "tccl",
            S = function () {
              _ ||
                ((_ = !0),
                (function () {
                  var t = l.default.get(w + ".baseHost");
                  if (t) {
                    var e = "dev";
                    "secureserver.net" === t
                      ? (e = "prod")
                      : "test-secureserver.net" === t && (e = "test"),
                      (0, f.initEnv)(e);
                  } else (0, f.initEnv)(l.default.get(w + ".buildEnv"));
                })(),
                h.default.init(
                  "complete" === (0, o.getDocument)().readyState,
                  function (t) {
                    (0, o.getWindow)().addEventListener("load", t);
                  }
                ),
                new v.default().getVisitInfo(),
                h.default.registerOnLoadFn(function () {
                  (0, s.init)();
                }),
                (0, u.init)(new p.default(y.default), "add_page_view", !1),
                (0, c.init)(g),
                l.default.get(w + ".perfOn") &&
                  h.default.registerOnLoadFn(function () {
                    (0, m.getPerformanceData)(w, "auto");
                  }),
                (0, i.log)("TCCL STARTED", l.default.getProperties()));
            };
          (0, d.withCookieCache)(function () {
            if ((0, o.isSupported)())
              if (((0, r.setClientName)(w), (0, r.libraryLoaded)()))
                (0, i.error)("TCCL Library has already been loaded on page");
              else {
                (0, a.init)("_trfd", [w]);
                var t = (0, o.getDocument)();
                "prerender" !== t.visibilityState
                  ? S()
                  : t.addEventListener("visibilitychange", function () {
                      "prerender" !== t.visibilityState &&
                        "unloaded" !== t.visibilityState &&
                        S();
                    });
              }
          });
        },
        function (t, e, n) {
          "use strict";
          e.assembleUrl = e.encodeProperties = undefined;
          n(0);
          var r = n(2),
            o =
              (n(22),
              n(8),
              function (t) {
                var n = {};
                return (
                  (0, r.map)(t, function (t, e) {
                    void 0 !== e && (n[t] = encodeURIComponent(e));
                  }),
                  n
                );
              }),
            i = function (t, e) {
              var n = ~e.indexOf("?") ? "&" : "?";
              return e + n + (0, r.stringify)(t, "&", "=");
            };
          (e.encodeProperties = o), (e.assembleUrl = i);
        },
        function (t, e, n) {
          "use strict";
          e.removePII = undefined;
          n(1);
          var a = [{ name: "EMAIL", regex: /[^@^=]+@[^@]+\.[^@^&]+/ }];
          e.removePII = function (t, e) {
            if ("string" != typeof t) return t;
            for (var n = t, r = 0; r < a.length; r++)
              for (var o = a[r].regex, i = n.match(o); i && i[0]; )
                i = (n = n.replace(i[0], "REDACTED")).match(o);
            return n;
          };
        },
        function (t, e, n) {
          "use strict";
          e.init = undefined;
          var u = (function t(e) {
              {
                if (e && e.__esModule) return e;
                var n = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return (n.default = e), n;
              }
            })(n(1)),
            c = n(15),
            r = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(17));
          var f,
            o =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(i, (f = r.default)),
              (i.prototype._initPageView = function () {
                if (!this.automaticPageViewDisabled) {
                  for (var t = 0; t < this.asyncCommands.length; t++)
                    if (this.asyncCommands[t].schema === this.pageViewSchema)
                      return;
                  this.process({ schema: this.pageViewSchema });
                }
              }),
              (i.prototype.loadAsyncCommands = function () {
                this._initPageView(), f.prototype.loadAsyncCommands.call(this);
              }),
              (i.prototype.process = function (e) {
                f.prototype.pushLog.call(this, e);
                try {
                  var t = e.data,
                    n = e.schema,
                    r = e.type,
                    o = e.version || "v1",
                    i = e.sinks,
                    a = { hit_id: (0, c.createGuid)() };
                  this.expSchemaHelper.handleSchema(n, r, o, t, a, i);
                } catch (t) {
                  var s = ["Unable to process", e, "\n\n"];
                  u.error.apply(u, s.concat(t));
                }
              }),
              i);
          function i(t, e, n) {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            var r = (function t(e, n) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !n || ("object" != typeof n && "function" != typeof n)
                ? e
                : n;
            })(this, f.call(this, "_expDataLayer"));
            return (
              (r.expSchemaHelper = t),
              (r.pageViewSchema = e),
              (r.automaticPageViewDisabled = n),
              r.start(),
              r
            );
          }
          e.init = function (t, e, n) {
            return new o(t, e, n);
          };
        },
        function (t, e, n) {
          var r = n(25),
            o = n(27);
          t.exports = r("v5", 80, o);
        },
        function (t, e, n) {
          var c = n(26);
          t.exports = function (t, s, u) {
            var e = function (t, e, n, r) {
              var o = (n && r) || 0;
              if (
                ("string" == typeof t &&
                  (t = (function t(e) {
                    for (
                      var n = Array(
                          (e = unescape(encodeURIComponent(e))).length
                        ),
                        r = 0;
                      r < e.length;
                      r++
                    )
                      n[r] = e.charCodeAt(r);
                    return n;
                  })(t)),
                "string" == typeof e &&
                  (e = (function t(e) {
                    var n = [];
                    return (
                      e.replace(/[a-fA-F0-9]{2}/g, function (t) {
                        n.push(parseInt(t, 16));
                      }),
                      n
                    );
                  })(e)),
                !Array.isArray(t))
              )
                throw TypeError("value must be an array of bytes");
              if (!Array.isArray(e) || 16 !== e.length)
                throw TypeError(
                  "namespace must be uuid string or an Array of 16 byte values"
                );
              var i = u(e.concat(t));
              if (((i[6] = (15 & i[6]) | s), (i[8] = (63 & i[8]) | 128), n))
                for (var a = 0; a < 16; ++a) n[o + a] = i[a];
              return n || c(i);
            };
            try {
              e.name = t;
            } catch (t) {}
            return (
              (e.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
              (e.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
              e
            );
          };
        },
        function (t, e) {
          for (var o = [], n = 0; n < 256; ++n)
            o[n] = (n + 256).toString(16).substr(1);
          t.exports = function t(e, n) {
            var r = n || 0;
            return (
              "" +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]]
            );
          };
        },
        function (t, e, n) {
          "use strict";
          function b(t, e, n, r) {
            switch (t) {
              case 0:
                return (e & n) ^ (~e & r);
              case 1:
                return e ^ n ^ r;
              case 2:
                return (e & n) ^ (e & r) ^ (n & r);
              case 3:
                return e ^ n ^ r;
            }
          }
          function _(t, e) {
            return (t << e) | (t >>> (32 - e));
          }
          t.exports = function t(e) {
            var n = [1518500249, 1859775393, 2400959708, 3395469782],
              r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
              var o = unescape(encodeURIComponent(e));
              e = Array(o.length);
              for (var i = 0; i < o.length; i++) e[i] = o.charCodeAt(i);
            }
            e.push(128);
            var a = e.length / 4 + 2,
              s = Math.ceil(a / 16),
              u = Array(s);
            for (i = 0; i < s; i++) {
              u[i] = Array(16);
              for (var c = 0; c < 16; c++)
                u[i][c] =
                  (e[64 * i + 4 * c] << 24) |
                  (e[64 * i + 4 * c + 1] << 16) |
                  (e[64 * i + 4 * c + 2] << 8) |
                  e[64 * i + 4 * c + 3];
            }
            for (
              u[s - 1][14] = (8 * (e.length - 1)) / 4294967296,
                u[s - 1][14] = Math.floor(u[s - 1][14]),
                u[s - 1][15] = (8 * (e.length - 1)) & 4294967295,
                i = 0;
              i < s;
              i++
            ) {
              for (var f = Array(80), p = 0; p < 16; p++) f[p] = u[i][p];
              for (p = 16; p < 80; p++)
                f[p] = _(f[p - 3] ^ f[p - 8] ^ f[p - 14] ^ f[p - 16], 1);
              var l = r[0],
                d = r[1],
                h = r[2],
                y = r[3],
                v = r[4];
              for (p = 0; p < 80; p++) {
                var g = Math.floor(p / 20),
                  m = (_(l, 5) + b(g, d, h, y) + v + n[g] + f[p]) >>> 0;
                (v = y), (y = h), (h = _(d, 30) >>> 0), (d = l), (l = m);
              }
              (r[0] = (r[0] + l) >>> 0),
                (r[1] = (r[1] + d) >>> 0),
                (r[2] = (r[2] + h) >>> 0),
                (r[3] = (r[3] + y) >>> 0),
                (r[4] = (r[4] + v) >>> 0);
            }
            return [
              (r[0] >> 24) & 255,
              (r[0] >> 16) & 255,
              (r[0] >> 8) & 255,
              255 & r[0],
              (r[1] >> 24) & 255,
              (r[1] >> 16) & 255,
              (r[1] >> 8) & 255,
              255 & r[1],
              (r[2] >> 24) & 255,
              (r[2] >> 16) & 255,
              (r[2] >> 8) & 255,
              255 & r[2],
              (r[3] >> 24) & 255,
              (r[3] >> 16) & 255,
              (r[3] >> 8) & 255,
              255 & r[3],
              (r[4] >> 24) & 255,
              (r[4] >> 16) & 255,
              (r[4] >> 8) & 255,
              255 & r[4],
            ];
          };
        },
        function (t, e, n) {
          "use strict";
          e.getCustomerId = undefined;
          n(9);
          var r = n(29),
            o = {},
            i = function (t) {
              return Object.keys(t).length < 1;
            },
            a = function () {
              return !i(o);
            },
            s =
              (function t(e) {
                return "del" in e ? t(e.del) : e;
              },
              function (t, e) {
                return t ? (e ? (0, r.sha256)(e) : void 0) : e;
              }),
            u = function t(e, n, r) {
              var o = e.typ;
              if (void 0 === r || !o || o === r) {
                var i = void 0,
                  a = e.auth;
                if (a && "basic" !== a) {
                  var s = e[a];
                  i = t(s, n, r);
                } else i = e[n];
                return i;
              }
            };
          e.getCustomerId = function (t) {
            if (a()) return s(t, u(o, "info_cid"));
          };
        },
        function (t, e, n) {
          "use strict";
          e.sha256 = function (t) {
            var O = function (t, e) {
                var n = (65535 & t) + (65535 & e);
                return (
                  (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              },
              C = function (t, e) {
                return (t >>> e) | (t << (32 - e));
              },
              T = function (t, e) {
                return t >>> e;
              };
            return (function (t) {
              for (
                var e = "0123456789abcdef", n = "", r = 0;
                r < 4 * t.length;
                r++
              )
                n +=
                  e[0 | ((t[r >> 2] >> (8 * (3 - (r % 4)) + 4)) & 15)] +
                  e[0 | ((t[r >> 2] >> (8 * (3 - (r % 4)))) & 15)];
              return n;
            })(
              (function (t, e) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  f = [
                    1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                    1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                    607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                    3248222580, 3835390401, 4022224774, 264347078, 604807628,
                    770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                    2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                    113926993, 338241895, 666307205, 773529912, 1294757372,
                    1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                    2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                    3600352804, 4094571909, 275423344, 430227734, 506948616,
                    659060556, 883997877, 958139571, 1322822218, 1537002063,
                    1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                    2428436474, 2756734187, 3204031479, 3329325298,
                  ],
                  p = [
                    1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                    2600822924, 528734635, 1541459225,
                  ],
                  l = Array(64),
                  d = void 0,
                  h = void 0,
                  y = void 0,
                  v = void 0,
                  g = void 0,
                  m = void 0,
                  b = void 0,
                  _ = void 0,
                  w = void 0,
                  S = void 0,
                  E = void 0,
                  L = void 0;
                for (
                  t[e >> 5] |= 128 << (24 - (e % 32)),
                    t[15 + (((e + 64) >> 9) << 4)] = e,
                    w = 0;
                  w < t.length;
                  w += 16
                ) {
                  for (
                    d = p[0],
                      h = p[1],
                      y = p[2],
                      v = p[3],
                      g = p[4],
                      m = p[5],
                      b = p[6],
                      _ = p[7],
                      S = 0;
                    S < 64;
                    S++
                  )
                    (l[S] =
                      S < 16
                        ? t[S + w]
                        : O(
                            O(
                              O(
                                ((c = l[S - 2]),
                                C(c, 17) ^ C(c, 19) ^ T(c, 10)),
                                l[S - 7]
                              ),
                              ((u = l[S - 15]), C(u, 7) ^ C(u, 18) ^ T(u, 3))
                            ),
                            l[S - 16]
                          )),
                      (E = O(
                        O(
                          O(
                            O(_, C((s = g), 6) ^ C(s, 11) ^ C(s, 25)),
                            ((a = g) & m) ^ (~a & b)
                          ),
                          f[S]
                        ),
                        l[S]
                      )),
                      (L = O(
                        C((i = d), 2) ^ C(i, 13) ^ C(i, 22),
                        ((n = d) & (r = h)) ^ (n & (o = y)) ^ (r & o)
                      )),
                      (_ = b),
                      (b = m),
                      (m = g),
                      (g = O(v, E)),
                      (v = y),
                      (y = h),
                      (h = d),
                      (d = O(E, L));
                  (p[0] = O(d, p[0])),
                    (p[1] = O(h, p[1])),
                    (p[2] = O(y, p[2])),
                    (p[3] = O(v, p[3])),
                    (p[4] = O(g, p[4])),
                    (p[5] = O(m, p[5])),
                    (p[6] = O(b, p[6])),
                    (p[7] = O(_, p[7]));
                }
                return p;
              })(
                (function (t) {
                  for (var e = [], n = 0; n < 8 * t.length; n += 8)
                    e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << (24 - (n % 32));
                  return e;
                })(
                  (t = (function (t) {
                    t = t.replace(/\r\n/g, "\n");
                    for (var e = "", n = 0; n < t.length; n++) {
                      var r = t.charCodeAt(n);
                      r < 128
                        ? (e += String.fromCharCode(r))
                        : (127 < r && r < 2048
                            ? (e += String.fromCharCode((r >> 6) | 192))
                            : ((e += String.fromCharCode((r >> 12) | 224)),
                              (e += String.fromCharCode(
                                ((r >> 6) & 63) | 128
                              ))),
                          (e += String.fromCharCode((63 & r) | 128)));
                    }
                    return e;
                  })(t))
                ),
                8 * t.length
              )
            );
          };
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = new ((function t(e) {
            return e && e.__esModule ? e : { default: e };
          })(n(5)).default)();
          e.default = r;
        },
        function (t, e, n) {
          "use strict";
          e.init = undefined;
          var r = n(4),
            o = n(1),
            i = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(17));
          var a,
            s =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(u, (a = i.default)),
              (u.prototype.process = function (e) {
                a.prototype.pushLog.call(this, e);
                try {
                  var t = Array.prototype.slice.call(e, 1),
                    n = e[0];
                  this.handlers[n]
                    ? this.handlers[n].apply(this.dataLayer, t)
                    : (0, o.error)(
                        "Invalid command sent to data layer",
                        this.dataLayerName,
                        e
                      );
                } catch (t) {
                  (0, o.error)("Unable to process", e, t);
                }
              }),
              u);
          function u(t) {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, u);
            var e = (function t(e, n) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !n || ("object" != typeof n && "function" != typeof n)
                ? e
                : n;
            })(this, a.call(this, "_trfq"));
            return (
              (e.dataSendLog = []),
              (0, r.setInternalVar)("_trfqSendLog", e.dataSendLog),
              (e.handlers = t),
              e.start(),
              e
            );
          }
          e.init = function (t) {
            return new s(t);
          };
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var c = n(18);
          var r =
            ((o.prototype.handleSchema = function (t, e, n, r, o, i) {
              var a = new c.SchemaDefinitionBlock(
                this.commandSchemaDefinitions,
                t,
                e,
                n
              );
              if (a.schema.handler) {
                var s = i || a.schema.sinks || [],
                  u = a.parse(r, s);
                new a.schema.handler(this).load(a.type, a.version, s, u, o);
              }
            }),
            o);
          function o(t) {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
              (this.commandSchemaDefinitions = t);
          }
          e.default = r;
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = (function t(e) {
            return e && e.__esModule ? e : { default: e };
          })(n(3));
          r.default.merge({
            "tccl.perfOn": !0,
            "tccl.buildVersion": "2.0.0",
            "tccl.buildEnv": "prod",
          }),
            (e.default = r.default);
        },
        function (t, e, n) {
          "use strict";
          (e.__esModule = !0), (e.withCookieCache = undefined);
          var r = n(0);
          var o = new ((function t(e) {
            return e && e.__esModule ? e : { default: e };
          })(n(35)).default)();
          (e.default = o),
            (e.withCookieCache = function (t) {
              try {
                var e = (0, r.getDocument)().cookie,
                  n = void 0;
                Object.defineProperty(document, "cookie", {
                  get: function () {
                    return e;
                  },
                  set: function (t) {
                    (n =
                      n ||
                      Object.getOwnPropertyDescriptor(
                        Document.prototype,
                        "cookie"
                      )).set.call(document, t),
                      (e = n.get.call(document));
                  },
                  configurable: !0,
                  enumerable: !0,
                }),
                  t();
              } finally {
                delete (0, r.getDocument)().cookie;
              }
            });
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = n(1);
          var o =
            ((i.prototype._executeFn = function (e) {
              try {
                e();
              } catch (t) {
                (0, r.error)("Exception while executing onLoad callback", e, t);
              }
            }),
            (i.prototype._triggerOnLoad = function () {
              this._loaded = !0;
              for (var t = 0; t < this._onLoadFns.length; t++)
                this._executeFn(this._onLoadFns[t]);
            }),
            (i.prototype.registerOnLoadFn = function (t) {
              var e;
              (e = t) &&
                "[object Function]" === {}.toString.call(e) &&
                (this._loaded ? this._executeFn(t) : this._onLoadFns.push(t));
            }),
            (i.prototype.init = function (t, e) {
              (this._loaded = !1),
                (this._onLoadFns = []),
                t ? (this._loaded = !0) : e(this._triggerOnLoad.bind(this));
            }),
            i);
          function i() {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
          }
          e.default = o;
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = n(18),
            o = s(n(37)),
            i = s(n(41)),
            a = s(n(42));
          function s(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var u = function () {
              return [
                new r.PropertyDefinitionBlock("custom_properties").optional(),
              ];
            },
            c = function () {
              return [new r.PropertyDefinitionBlock("eid").optional()];
            },
            f = {
              add_event: {
                v1: {
                  handler: o.default,
                  data: [
                    new r.PropertyDefinitionBlock("type").required(),
                    new r.ObjectDefinitionBlock().substitute(c()),
                    new r.ObjectDefinitionBlock().substitute(u()),
                  ],
                },
              },
              add_page_view: {
                v1: {
                  handler: i.default,
                  data: [
                    new r.PropertyDefinitionBlock("path").optional(),
                    new r.ObjectDefinitionBlock().substitute(c()),
                    new r.ObjectDefinitionBlock().substitute(u()),
                  ],
                },
              },
              add_perf: {
                v1: {
                  handler: a.default,
                  data: [
                    new r.PropertyDefinitionBlock("timing_object").required(),
                    new r.PropertyDefinitionBlock(
                      "is_hard_navigation"
                    ).optional(),
                    new r.ObjectDefinitionBlock().substitute(u()),
                  ],
                },
              },
            };
          e.default = f;
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            o = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(10));
          var i,
            a =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(s, (i = o.default)),
              (s.prototype.preProcess = function () {
                i.prototype.preProcess.call(this),
                  this._setPageEventTcclProperties();
              }),
              (s.prototype._setPageEventTcclProperties = function () {
                this.pageEvent.set("ht", "pageevent"),
                  this.pageEvent.set("ea", this.data.ALL.type),
                  this.pageEvent.set("eid", this.data.ALL.eid),
                  "object" === r(this.data.ALL.fields_object) &&
                    this.pageEvent.merge(this.data.ALL.fields_object);
              }),
              s);
          function s() {
            return (
              (function t(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              (function t(e, n) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              })(this, i.apply(this, arguments))
            );
          }
          e.default = a;
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = n(2);
          var o =
            ((i.prototype.preProcess = function () {}),
            (i.prototype.load = function (t, e, n, r, o) {
              (this.schemaType = t),
                (this.schemaVersion = e),
                (this.sinks = ["ALL"].concat(n)),
                (this.data = r),
                (this.extras = o || {}),
                this.preProcess(),
                this.process();
            }),
            (i.prototype.process = function (t) {
              var n = this;
              this.sinks &&
                0 < this.sinks.length &&
                (0, r.map)(t, function (t, e) {
                  ~n.sinks.indexOf(t) && e(n.data[t]);
                });
            }),
            i);
          function i(t) {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              (this.schemaHelper = t);
          }
          e.default = o;
        },
        function (t, e, n) {
          "use strict";
          var r = n(0),
            o = r.getDocument,
            i = r.getWindow,
            a = r.getNavigator;
          (e.getHostname = function () {
            return i().location.hostname;
          }),
            (e.getPageName = function (t) {
              return "string" != typeof (t = t || i().location.pathname) ||
                void 0 === t ||
                "" === t
                ? "notspecified"
                : (t.lastIndexOf("/") == t.length - 1 &&
                    (t = t.substring(0, t.length - 1)),
                  t.indexOf("/") && (t = "/" + t),
                  t);
            }),
            (e.getReferrer = function (t) {
              var e = o().referrer;
              return e !== undefined ? e.substr(0, t) : undefined;
            }),
            (e.getUserAgent = function () {
              return a().userAgent;
            });
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = ((o.prototype.getVisitInfo = function () {}), o);
          function o() {
            !(function t(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, o);
          }
          e.default = r;
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            o = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(10));
          var i,
            a =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(s, (i = o.default)),
              (s.prototype.preProcess = function () {
                i.prototype.preProcess.call(this),
                  this._setPageViewTcclProperties();
              }),
              (s.prototype._setPageViewTcclProperties = function () {
                this.pageEvent.set("ht", "pageview"),
                  this.pageEvent.set("eid", this.data.ALL.eid),
                  "object" === r(this.data.ALL.fields_object) &&
                    this.pageEvent.merge(this.data.ALL.fields_object);
              }),
              s);
          function s() {
            return (
              (function t(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              (function t(e, n) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              })(this, i.apply(this, arguments))
            );
          }
          e.default = a;
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = (function t(e) {
            return e && e.__esModule ? e : { default: e };
          })(n(10));
          var o,
            i =
              ((function t(e, n) {
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, n)
                      : (e.__proto__ = n));
              })(a, (o = r.default)),
              (a.prototype.preProcess = function () {
                o.prototype.preProcess.call(this),
                  this._setPerfTcclProperties();
              }),
              (a.prototype._setPerfTcclProperties = function () {
                this.pageEvent.set("ht", "perf");
                var t = this.data.ALL.timing_object || {};
                this.pageEvent.merge(
                  "navigationStart" in t
                    ? {
                        tce: t.connectEnd,
                        tcs: t.connectStart,
                        tdc: t.domComplete,
                        tdclee: t.domContentLoadedEventEnd,
                        tdcles: t.domContentLoadedEventStart,
                        tdi: t.domInteractive,
                        tdl: t.domLoading,
                        tdle: t.domainLookupEnd,
                        tdls: t.domainLookupStart,
                        tfs: t.fetchStart,
                        tns: t.navigationStart,
                        trqs: t.requestStart,
                        tre: t.responseEnd,
                        trps: t.responseStart,
                        tles: t.loadEventStart,
                        tlee: t.loadEventEnd,
                        nt: t.navigationType,
                      }
                    : t
                ),
                  this.data.ALL.is_hard_navigation
                    ? this.pageEvent.set("nav_type", "hard")
                    : this.pageEvent.set("nav_type", "soft");
              }),
              a);
          function a() {
            return (
              (function t(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              (function t(e, n) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              })(this, o.apply(this, arguments))
            );
          }
          e.default = i;
        },
        function (t, e, n) {
          "use strict";
          (e.__esModule = !0), (e.cmdLogPerf = e.cmdLogEvent = undefined);
          var r = i(n(44)),
            o = i(n(45));
          function i(t) {
            return t && t.__esModule ? t : { default: t };
          }
          (e.cmdLogEvent = r.default), (e.cmdLogPerf = o.default);
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var o = n(0),
            i = n(11);
          e.default = function (t, e, n, r) {
            (0, o.getWindow)()._expDataLayer.push({
              schema: "add_event",
              version: "v1",
              data: {
                type: t,
                eid: e,
                custom_properties: (0, i.getObjFromTDataList)(n),
                fields_object: r,
              },
            });
          };
        },
        function (t, e, n) {
          "use strict";
          e.__esModule = !0;
          var r = n(0),
            o = n(11);
          e.default = function (t, e) {
            (0, r.getWindow)()._expDataLayer.push({
              schema: "add_perf",
              version: "v1",
              data: {
                timing_object: t,
                custom_properties: (0, o.getObjFromTDataList)(e),
              },
            });
          };
        },
        function (t, e, n) {
          "use strict";
          e.getPerformanceData = undefined;
          var r = n(1),
            o = n(8),
            i = n(0),
            a = n(2),
            s = (function t(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(3));
          var u = void 0,
            c = {},
            f = { "first-paint": "fp", "first-contentful-paint": "fcp" },
            p = [
              "connectEnd",
              "connectStart",
              "domComplete",
              "domContentLoadedEventEnd",
              "domContentLoadedEventStart",
              "domInteractive",
              "domLoading",
              "domainLookupEnd",
              "domainLookupStart",
              "fetchStart",
              "navigationStart",
              "requestStart",
              "responseEnd",
              "responseStart",
              "loadEventStart",
              "loadEventEnd",
            ],
            l = ["transferSize", "encodedBodySize", "decodedBodySize"],
            d = function (t, e, n) {
              for (var r = 0; r < n.length; r++) t[n[r]] = e[n[r]] || 0;
            },
            h = function (t, e) {
              var n = {};
              "tcc" === t && (n.tccin = e || "na");
              try {
                (u = (0, i.getWindow)().performance) && u.timing
                  ? ((function (t) {
                      if ((d(t, u.timing, p), u.getEntriesByName)) {
                        var e = u.getEntriesByName(
                          (0, i.getDocument)().location.href
                        )[0];
                        if (!e && u.getEntriesByType) {
                          var n = u.getEntriesByType("navigation");
                          e = n[n.length - 1];
                        }
                        e && (d(t, e, l), (t.navigationType = e.type));
                      }
                    })(n),
                    "tcc" === t &&
                      ((function (t) {
                        if (u.getEntriesByType) {
                          var e = u.getEntriesByType("mark");
                          if (e.length || 0 < e.length) {
                            t.marks = (0, o.stringifyArray)(
                              e,
                              10,
                              function (t) {
                                return (
                                  encodeURIComponent(t.name) +
                                  "," +
                                  t.startTime.toFixed(0)
                                );
                              }
                            );
                            var n = u.getEntriesByType("measure");
                            n.length &&
                              0 < n.length &&
                              (t.measures = (0, o.stringifyArray)(
                                n,
                                10,
                                function (t) {
                                  return (
                                    encodeURIComponent(t.name) +
                                    "," +
                                    t.duration.toFixed(0)
                                  );
                                }
                              ));
                          }
                        }
                      })(n),
                      (function (e) {
                        if (u.getEntriesByType) {
                          var t = u.getEntriesByType("paint");
                          t &&
                            t.forEach(function (t) {
                              e[f[t.name]] = Math.round(t.startTime);
                            });
                        }
                      })(n)))
                  : ("tcc" === t && (n.tccperfapi = "not supported"),
                    (0, r.error)("Error loading performance lib"));
              } catch (t) {
                (0, r.error)("_collect unable to get performance data", t);
              }
              return n;
            },
            y = function (t, e, n) {
              setTimeout(
                "tcc" === t
                  ? function () {
                      (0, i.getWindow)()._expDataLayer &&
                        (0, i.getWindow)()._expDataLayer.push({
                          schema: "add_perf",
                          version: "v1",
                          data: {
                            type: "pageperf",
                            properties: (0, a.merge)(e, c, {
                              nav_type: "hard",
                            }),
                            custom_properties: n,
                          },
                        });
                    }
                  : function () {
                      (0, i.getWindow)()._expDataLayer &&
                        (0, i.getWindow)()._expDataLayer.push({
                          schema: "add_perf",
                          version: "v1",
                          data: {
                            timing_object: (0, a.merge)(e, c),
                            is_hard_navigation: !0,
                            custom_properties: n,
                          },
                        });
                    },
                0
              );
            },
            v = function () {
              return (
                !(u = (0, i.getWindow)().performance) ||
                !u.timing ||
                0 < u.timing.loadEventStart
              );
            },
            g = !1;
          e.getPerformanceData = function (t, e, n) {
            if ("manual" === e || !g)
              if (((g = !0), v())) y(t, h(t, e), n);
              else
                var r = s.default.get(t + ".perfDelayMs") || 250,
                  o = setInterval(function () {
                    v() && (clearInterval(o), y(t, h(t, e), n));
                  }, r);
          };
        },
      ]),
    (o.c = r),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 20))
  );
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  var n, r;
});
//# sourceMappingURL=tccl.min.js.map
