"use strict";
(self.webpackChunkportfolio = self.webpackChunkportfolio || []).push([
  [774],
  {
    90774: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Web3Modal: function () {
            return h;
          },
        });
      var r = n(74165),
        o = n(15861),
        i = n(15671),
        a = n(43144),
        c = n(37762),
        s = n(29042),
        u = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        p = function (e, t, n) {
          return t in e
            ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        d = function (e, t) {
          for (var n in t || (t = {})) f.call(t, n) && p(e, n, t[n]);
          if (l) {
            var r,
              o = (0, c.Z)(l(t));
            try {
              for (o.s(); !(r = o.n()).done; ) {
                n = r.value;
                b.call(t, n) && p(e, n, t[n]);
              }
            } catch (i) {
              o.e(i);
            } finally {
              o.f();
            }
          }
          return e;
        },
        h = (function () {
          function e(t) {
            (0, i.Z)(this, e),
              (this.openModal = s.jb.open),
              (this.closeModal = s.jb.close),
              (this.subscribeModal = s.jb.subscribe),
              (this.setTheme = s.t0.setThemeConfig),
              s.t0.setConfig(d({ enableStandaloneMode: !0 }, t)),
              this.initUi();
          }
          return (
            (0, a.Z)(e, [
              {
                key: "initUi",
                value: (function () {
                  var e = (0, o.Z)(
                    (0, r.Z)().mark(function e() {
                      var t;
                      return (0, r.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(typeof window < "u")) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (e.next = 3), n.e(99).then(n.bind(n, 92099))
                              );
                            case 3:
                              (t = document.createElement("w3m-modal")),
                                document.body.insertAdjacentElement(
                                  "beforeend",
                                  t
                                ),
                                s.zb.setIsUiLoaded(!0);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
    },
  },
]);
//# sourceMappingURL=774.6359b5b5.chunk.js.map
