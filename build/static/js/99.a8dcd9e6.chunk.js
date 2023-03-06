/*! For license information please see 99.a8dcd9e6.chunk.js.LICENSE.txt */
(self.webpackChunkportfolio = self.webpackChunkportfolio || []).push([
  [99],
  {
    90951: function (e) {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, n, r) {
          var i = {},
            o = {};
          o[n] = 0;
          var a,
            l,
            s,
            c,
            u,
            d,
            h,
            v = t.PriorityQueue.make();
          for (v.push(n, 0); !v.empty(); )
            for (s in ((l = (a = v.pop()).value),
            (c = a.cost),
            (u = e[l] || {})))
              u.hasOwnProperty(s) &&
                ((d = c + u[s]),
                (h = o[s]),
                ("undefined" === typeof o[s] || h > d) &&
                  ((o[s] = d), v.push(s, d), (i[s] = l)));
          if ("undefined" !== typeof r && "undefined" === typeof o[r]) {
            var f = ["Could not find a path from ", n, " to ", r, "."].join("");
            throw new Error(f);
          }
          return i;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var n = [], r = t; r; ) n.push(r), e[r], (r = e[r]);
          return n.reverse(), n;
        },
        find_path: function (e, n, r) {
          var i = t.single_source_shortest_paths(e, n, r);
          return t.extract_shortest_path_from_predecessor_list(i, r);
        },
        PriorityQueue: {
          make: function (e) {
            var n,
              r = t.PriorityQueue,
              i = {};
            for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (i[n] = r[n]);
            return (i.queue = []), (i.sorter = e.sorter || r.default_sorter), i;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            var n = { value: e, cost: t };
            this.queue.push(n), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    10153: function (e) {
      "use strict";
      e.exports = function (e) {
        for (var t = [], n = e.length, r = 0; r < n; r++) {
          var i = e.charCodeAt(r);
          if (i >= 55296 && i <= 56319 && n > r + 1) {
            var o = e.charCodeAt(r + 1);
            o >= 56320 &&
              o <= 57343 &&
              ((i = 1024 * (i - 55296) + o - 56320 + 65536), (r += 1));
          }
          i < 128
            ? t.push(i)
            : i < 2048
            ? (t.push((i >> 6) | 192), t.push((63 & i) | 128))
            : i < 55296 || (i >= 57344 && i < 65536)
            ? (t.push((i >> 12) | 224),
              t.push(((i >> 6) & 63) | 128),
              t.push((63 & i) | 128))
            : i >= 65536 && i <= 1114111
            ? (t.push((i >> 18) | 240),
              t.push(((i >> 12) & 63) | 128),
              t.push(((i >> 6) & 63) | 128),
              t.push((63 & i) | 128))
            : t.push(239, 191, 189);
        }
        return new Uint8Array(t).buffer;
      };
    },
    20741: function (e, t, n) {
      var r = n(36887),
        i = n(5054),
        o = n(30416),
        a = n(9413);
      function l(e, t, n, o, a) {
        var l = [].slice.call(arguments, 1),
          s = l.length,
          c = "function" === typeof l[s - 1];
        if (!c && !r()) throw new Error("Callback required as last argument");
        if (!c) {
          if (s < 1) throw new Error("Too few arguments provided");
          return (
            1 === s
              ? ((n = t), (t = o = void 0))
              : 2 !== s || t.getContext || ((o = n), (n = t), (t = void 0)),
            new Promise(function (r, a) {
              try {
                var l = i.create(n, o);
                r(e(l, t, o));
              } catch (s) {
                a(s);
              }
            })
          );
        }
        if (s < 2) throw new Error("Too few arguments provided");
        2 === s
          ? ((a = n), (n = t), (t = o = void 0))
          : 3 === s &&
            (t.getContext && "undefined" === typeof a
              ? ((a = o), (o = void 0))
              : ((a = o), (o = n), (n = t), (t = void 0)));
        try {
          var u = i.create(n, o);
          a(null, e(u, t, o));
        } catch (d) {
          a(d);
        }
      }
      (t.create = i.create),
        (t.toCanvas = l.bind(null, o.render)),
        (t.toDataURL = l.bind(null, o.renderToDataURL)),
        (t.toString = l.bind(null, function (e, t, n) {
          return a.render(e, n);
        }));
    },
    36887: function (e) {
      e.exports = function () {
        return (
          "function" === typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    23234: function (e, t, n) {
      var r = n(2338).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        for (
          var t = Math.floor(e / 7) + 2,
            n = r(e),
            i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
            o = [n - 7],
            a = 1;
          a < t - 1;
          a++
        )
          o[a] = o[a - 1] - i;
        return o.push(6), o.reverse();
      }),
        (t.getPositions = function (e) {
          for (
            var n = [], r = t.getRowColCoords(e), i = r.length, o = 0;
            o < i;
            o++
          )
            for (var a = 0; a < i; a++)
              (0 === o && 0 === a) ||
                (0 === o && a === i - 1) ||
                (o === i - 1 && 0 === a) ||
                n.push([r[o], r[a]]);
          return n;
        });
    },
    28295: function (e, t, n) {
      var r = n(91337),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(e) {
        (this.mode = r.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          var t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            var n = 45 * i.indexOf(this.data[t]);
            (n += i.indexOf(this.data[t + 1])), e.put(n, 11);
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    75673: function (e) {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 === ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var n = 0; n < t; n++)
            this.putBit(1 === ((e >>> (t - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    32988: function (e) {
      function t(e) {
        if (!e || e < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, n, r) {
        var i = e * this.size + t;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    40639: function (e, t, n) {
      var r = n(10153),
        i = n(91337);
      function o(e) {
        (this.mode = i.BYTE),
          "string" === typeof e && (e = r(e)),
          (this.data = new Uint8Array(e));
      }
      (o.getBitsLength = function (e) {
        return 8 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (var t = 0, n = this.data.length; t < n; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = o);
    },
    43180: function (e, t, n) {
      var r = n(78955),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case r.L:
            return i[4 * (e - 1) + 0];
          case r.M:
            return i[4 * (e - 1) + 1];
          case r.Q:
            return i[4 * (e - 1) + 2];
          case r.H:
            return i[4 * (e - 1) + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return o[4 * (e - 1) + 0];
            case r.M:
              return o[4 * (e - 1) + 1];
            case r.Q:
              return o[4 * (e - 1) + 2];
            case r.H:
              return o[4 * (e - 1) + 3];
            default:
              return;
          }
        });
    },
    78955: function (e, t) {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && "undefined" !== typeof e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" !== typeof e)
                throw new Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw new Error("Unknown EC Level: " + e);
              }
            })(e);
          } catch (r) {
            return n;
          }
        });
    },
    48947: function (e, t, n) {
      var r = n(2338).getSymbolSize;
      t.getPositions = function (e) {
        var t = r(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    27435: function (e, t, n) {
      var r = n(2338),
        i = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        for (var n = (e.bit << 3) | t, o = n << 10; r.getBCHDigit(o) - i >= 0; )
          o ^= 1335 << (r.getBCHDigit(o) - i);
        return 21522 ^ ((n << 10) | o);
      };
    },
    81239: function (e, t) {
      var n = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        for (var e = 1, t = 0; t < 255; t++)
          (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (var i = 255; i < 512; i++) n[i] = n[i - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw new Error("log(" + e + ")");
          return r[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
        });
    },
    58588: function (e, t, n) {
      var r = n(91337),
        i = n(2338);
      function o(e) {
        (this.mode = r.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          var t;
          for (t = 0; t < this.data.length; t++) {
            var n = i.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
              if (!(n >= 57408 && n <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[t] +
                    "\nMake sure your charset is UTF-8"
                );
              n -= 49472;
            }
            (n = 192 * ((n >>> 8) & 255) + (255 & n)), e.put(n, 13);
          }
        }),
        (e.exports = o);
    },
    66823: function (e, t) {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      var n = 3,
        r = 3,
        i = 40,
        o = 10;
      function a(e, n, r) {
        switch (e) {
          case t.Patterns.PATTERN000:
            return (n + r) % 2 === 0;
          case t.Patterns.PATTERN001:
            return n % 2 === 0;
          case t.Patterns.PATTERN010:
            return r % 3 === 0;
          case t.Patterns.PATTERN011:
            return (n + r) % 3 === 0;
          case t.Patterns.PATTERN100:
            return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
          case t.Patterns.PATTERN101:
            return ((n * r) % 2) + ((n * r) % 3) === 0;
          case t.Patterns.PATTERN110:
            return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0;
          case t.Patterns.PATTERN111:
            return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + e);
        }
      }
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          for (
            var t = e.size, r = 0, i = 0, o = 0, a = null, l = null, s = 0;
            s < t;
            s++
          ) {
            (i = o = 0), (a = l = null);
            for (var c = 0; c < t; c++) {
              var u = e.get(s, c);
              u === a ? i++ : (i >= 5 && (r += n + (i - 5)), (a = u), (i = 1)),
                (u = e.get(c, s)) === l
                  ? o++
                  : (o >= 5 && (r += n + (o - 5)), (l = u), (o = 1));
            }
            i >= 5 && (r += n + (i - 5)), o >= 5 && (r += n + (o - 5));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          for (var t = e.size, n = 0, i = 0; i < t - 1; i++)
            for (var o = 0; o < t - 1; o++) {
              var a =
                e.get(i, o) +
                e.get(i, o + 1) +
                e.get(i + 1, o) +
                e.get(i + 1, o + 1);
              (4 !== a && 0 !== a) || n++;
            }
          return n * r;
        }),
        (t.getPenaltyN3 = function (e) {
          for (var t = e.size, n = 0, r = 0, o = 0, a = 0; a < t; a++) {
            r = o = 0;
            for (var l = 0; l < t; l++)
              (r = ((r << 1) & 2047) | e.get(a, l)),
                l >= 10 && (1488 === r || 93 === r) && n++,
                (o = ((o << 1) & 2047) | e.get(l, a)),
                l >= 10 && (1488 === o || 93 === o) && n++;
          }
          return n * i;
        }),
        (t.getPenaltyN4 = function (e) {
          for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
          return Math.abs(Math.ceil((100 * t) / n / 5) - 10) * o;
        }),
        (t.applyMask = function (e, t) {
          for (var n = t.size, r = 0; r < n; r++)
            for (var i = 0; i < n; i++)
              t.isReserved(i, r) || t.xor(i, r, a(e, i, r));
        }),
        (t.getBestMask = function (e, n) {
          for (
            var r = Object.keys(t.Patterns).length, i = 0, o = 1 / 0, a = 0;
            a < r;
            a++
          ) {
            n(a), t.applyMask(a, e);
            var l =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), l < o && ((o = l), (i = a));
          }
          return i;
        });
    },
    91337: function (e, t, n) {
      var r = n(78402),
        i = n(28650);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw new Error("Invalid mode: " + e);
          if (!r.isValid(t)) throw new Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : i.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw new Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" !== typeof e)
                throw new Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw new Error("Unknown mode: " + e);
              }
            })(e);
          } catch (r) {
            return n;
          }
        });
    },
    20320: function (e, t, n) {
      var r = n(91337);
      function i(e) {
        (this.mode = r.NUMERIC), (this.data = e.toString());
      }
      (i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          var t, n, r;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (n = this.data.substr(t, 3)), (r = parseInt(n, 10)), e.put(r, 10);
          var i = this.data.length - t;
          i > 0 &&
            ((n = this.data.substr(t)),
            (r = parseInt(n, 10)),
            e.put(r, 3 * i + 1));
        }),
        (e.exports = i);
    },
    89203: function (e, t, n) {
      var r = n(81239);
      (t.mul = function (e, t) {
        for (
          var n = new Uint8Array(e.length + t.length - 1), i = 0;
          i < e.length;
          i++
        )
          for (var o = 0; o < t.length; o++) n[i + o] ^= r.mul(e[i], t[o]);
        return n;
      }),
        (t.mod = function (e, t) {
          for (var n = new Uint8Array(e); n.length - t.length >= 0; ) {
            for (var i = n[0], o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], i);
            for (var a = 0; a < n.length && 0 === n[a]; ) a++;
            n = n.slice(a);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          for (var n = new Uint8Array([1]), i = 0; i < e; i++)
            n = t.mul(n, new Uint8Array([1, r.exp(i)]));
          return n;
        });
    },
    5054: function (e, t, n) {
      var r = n(2338),
        i = n(78955),
        o = n(75673),
        a = n(32988),
        l = n(23234),
        s = n(48947),
        c = n(66823),
        u = n(43180),
        d = n(220),
        h = n(81265),
        v = n(27435),
        f = n(91337),
        p = n(72179);
      function m(e, t, n) {
        var r,
          i,
          o = e.size,
          a = v.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          (i = 1 === ((a >> r) & 1)),
            r < 6
              ? e.set(r, 8, i, !0)
              : r < 8
              ? e.set(r + 1, 8, i, !0)
              : e.set(o - 15 + r, 8, i, !0),
            r < 8
              ? e.set(8, o - r - 1, i, !0)
              : r < 9
              ? e.set(8, 15 - r - 1 + 1, i, !0)
              : e.set(8, 15 - r - 1, i, !0);
        e.set(o - 8, 8, 1, !0);
      }
      function g(e, t, n) {
        var i = new o();
        n.forEach(function (t) {
          i.put(t.mode.bit, 4),
            i.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
            t.write(i);
        });
        var a =
          8 * (r.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
        for (
          i.getLengthInBits() + 4 <= a && i.put(0, 4);
          i.getLengthInBits() % 8 !== 0;

        )
          i.putBit(0);
        for (var l = (a - i.getLengthInBits()) / 8, s = 0; s < l; s++)
          i.put(s % 2 ? 17 : 236, 8);
        return (function (e, t, n) {
          for (
            var i = r.getSymbolTotalCodewords(t),
              o = u.getTotalCodewordsCount(t, n),
              a = i - o,
              l = u.getBlocksCount(t, n),
              s = l - (i % l),
              c = Math.floor(i / l),
              h = Math.floor(a / l),
              v = h + 1,
              f = c - h,
              p = new d(f),
              m = 0,
              g = new Array(l),
              w = new Array(l),
              b = 0,
              y = new Uint8Array(e.buffer),
              x = 0;
            x < l;
            x++
          ) {
            var k = x < s ? h : v;
            (g[x] = y.slice(m, m + k)),
              (w[x] = p.encode(g[x])),
              (m += k),
              (b = Math.max(b, k));
          }
          var C,
            Z,
            A = new Uint8Array(i),
            E = 0;
          for (C = 0; C < b; C++)
            for (Z = 0; Z < l; Z++) C < g[Z].length && (A[E++] = g[Z][C]);
          for (C = 0; C < f; C++) for (Z = 0; Z < l; Z++) A[E++] = w[Z][C];
          return A;
        })(i, e, t);
      }
      function w(e, t, n, i) {
        var o;
        if (Array.isArray(e)) o = p.fromArray(e);
        else {
          if ("string" !== typeof e) throw new Error("Invalid data");
          var u = t;
          if (!u) {
            var d = p.rawSplit(e);
            u = h.getBestVersionForData(d, n);
          }
          o = p.fromString(e, u || 40);
        }
        var v = h.getBestVersionForData(o, n);
        if (!v)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (t) {
          if (t < v)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                v +
                ".\n"
            );
        } else t = v;
        var f = g(t, n, o),
          w = r.getSymbolSize(t),
          b = new a(w);
        return (
          (function (e, t) {
            for (
              var n = e.size, r = s.getPositions(t), i = 0;
              i < r.length;
              i++
            )
              for (var o = r[i][0], a = r[i][1], l = -1; l <= 7; l++)
                if (!(o + l <= -1 || n <= o + l))
                  for (var c = -1; c <= 7; c++)
                    a + c <= -1 ||
                      n <= a + c ||
                      ((l >= 0 && l <= 6 && (0 === c || 6 === c)) ||
                      (c >= 0 && c <= 6 && (0 === l || 6 === l)) ||
                      (l >= 2 && l <= 4 && c >= 2 && c <= 4)
                        ? e.set(o + l, a + c, !0, !0)
                        : e.set(o + l, a + c, !1, !0));
          })(b, t),
          (function (e) {
            for (var t = e.size, n = 8; n < t - 8; n++) {
              var r = n % 2 === 0;
              e.set(n, 6, r, !0), e.set(6, n, r, !0);
            }
          })(b),
          (function (e, t) {
            for (var n = l.getPositions(t), r = 0; r < n.length; r++)
              for (var i = n[r][0], o = n[r][1], a = -2; a <= 2; a++)
                for (var s = -2; s <= 2; s++)
                  -2 === a ||
                  2 === a ||
                  -2 === s ||
                  2 === s ||
                  (0 === a && 0 === s)
                    ? e.set(i + a, o + s, !0, !0)
                    : e.set(i + a, o + s, !1, !0);
          })(b, t),
          m(b, n, 0),
          t >= 7 &&
            (function (e, t) {
              for (
                var n, r, i, o = e.size, a = h.getEncodedBits(t), l = 0;
                l < 18;
                l++
              )
                (n = Math.floor(l / 3)),
                  (r = (l % 3) + o - 8 - 3),
                  (i = 1 === ((a >> l) & 1)),
                  e.set(n, r, i, !0),
                  e.set(r, n, i, !0);
            })(b, t),
          (function (e, t) {
            for (
              var n = e.size, r = -1, i = n - 1, o = 7, a = 0, l = n - 1;
              l > 0;
              l -= 2
            )
              for (6 === l && l--; ; ) {
                for (var s = 0; s < 2; s++)
                  if (!e.isReserved(i, l - s)) {
                    var c = !1;
                    a < t.length && (c = 1 === ((t[a] >>> o) & 1)),
                      e.set(i, l - s, c),
                      -1 === --o && (a++, (o = 7));
                  }
                if ((i += r) < 0 || n <= i) {
                  (i -= r), (r = -r);
                  break;
                }
              }
          })(b, f),
          isNaN(i) && (i = c.getBestMask(b, m.bind(null, b, n))),
          c.applyMask(i, b),
          m(b, n, i),
          {
            modules: b,
            version: t,
            errorCorrectionLevel: n,
            maskPattern: i,
            segments: o,
          }
        );
      }
      t.create = function (e, t) {
        if ("undefined" === typeof e || "" === e)
          throw new Error("No input text");
        var n,
          o,
          a = i.M;
        return (
          "undefined" !== typeof t &&
            ((a = i.from(t.errorCorrectionLevel, i.M)),
            (n = h.from(t.version)),
            (o = c.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          w(e, n, a, o)
        );
      };
    },
    220: function (e, t, n) {
      var r = n(89203);
      function i(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var t = new Uint8Array(e.length + this.degree);
          t.set(e);
          var n = r.mod(t, this.genPoly),
            i = this.degree - n.length;
          if (i > 0) {
            var o = new Uint8Array(this.degree);
            return o.set(n, i), o;
          }
          return n;
        }),
        (e.exports = i);
    },
    28650: function (e, t) {
      var n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = new RegExp(r, "g")),
        (t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = new RegExp(i, "g")),
        (t.NUMERIC = new RegExp(n, "g")),
        (t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var o = new RegExp("^" + r + "$"),
        a = new RegExp("^" + n + "$"),
        l = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return o.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return l.test(e);
        });
    },
    72179: function (e, t, n) {
      var r = n(91337),
        i = n(20320),
        o = n(28295),
        a = n(40639),
        l = n(58588),
        s = n(28650),
        c = n(2338),
        u = n(90951);
      function d(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function h(e, t, n) {
        for (var r, i = []; null !== (r = e.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return i;
      }
      function v(e) {
        var t,
          n,
          i = h(s.NUMERIC, r.NUMERIC, e),
          o = h(s.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          c.isKanjiModeEnabled()
            ? ((t = h(s.BYTE, r.BYTE, e)), (n = h(s.KANJI, r.KANJI, e)))
            : ((t = h(s.BYTE_KANJI, r.BYTE, e)), (n = [])),
          i
            .concat(o, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function f(e, t) {
        switch (t) {
          case r.NUMERIC:
            return i.getBitsLength(e);
          case r.ALPHANUMERIC:
            return o.getBitsLength(e);
          case r.KANJI:
            return l.getBitsLength(e);
          case r.BYTE:
            return a.getBitsLength(e);
        }
      }
      function p(e, t) {
        var n,
          s = r.getBestModeForData(e);
        if ((n = r.from(t, s)) !== r.BYTE && n.bit < s.bit)
          throw new Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(s)
          );
        switch ((n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new i(e);
          case r.ALPHANUMERIC:
            return new o(e);
          case r.KANJI:
            return new l(e);
          case r.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" === typeof t
              ? e.push(p(t, null))
              : t.data && e.push(p(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          for (
            var i = (function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      t.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                  }
                }
                return t;
              })(v(e, c.isKanjiModeEnabled())),
              o = (function (e, t) {
                for (
                  var n = {}, i = { start: {} }, o = ["start"], a = 0;
                  a < e.length;
                  a++
                ) {
                  for (var l = e[a], s = [], c = 0; c < l.length; c++) {
                    var u = l[c],
                      d = "" + a + c;
                    s.push(d), (n[d] = { node: u, lastCount: 0 }), (i[d] = {});
                    for (var h = 0; h < o.length; h++) {
                      var v = o[h];
                      n[v] && n[v].node.mode === u.mode
                        ? ((i[v][d] =
                            f(n[v].lastCount + u.length, u.mode) -
                            f(n[v].lastCount, u.mode)),
                          (n[v].lastCount += u.length))
                        : (n[v] && (n[v].lastCount = u.length),
                          (i[v][d] =
                            f(u.length, u.mode) +
                            4 +
                            r.getCharCountIndicator(u.mode, t)));
                    }
                  }
                  o = s;
                }
                for (var p = 0; p < o.length; p++) i[o[p]].end = 0;
                return { map: i, table: n };
              })(i, n),
              a = u.find_path(o.map, "start", "end"),
              l = [],
              s = 1;
            s < a.length - 1;
            s++
          )
            l.push(o.table[a[s]].node);
          return t.fromArray(
            (function (e) {
              return e.reduce(function (e, t) {
                var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return n && n.mode === t.mode
                  ? ((e[e.length - 1].data += t.data), e)
                  : (e.push(t), e);
              }, []);
            })(l)
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(v(e, c.isKanjiModeEnabled()));
        });
    },
    2338: function (e, t) {
      var n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (t.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e];
        }),
        (t.getBCHDigit = function (e) {
          for (var t = 0; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" !== typeof e)
            throw new Error('"toSJISFunc" is not a valid function.');
          n = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return "undefined" !== typeof n;
        }),
        (t.toSJIS = function (e) {
          return n(e);
        });
    },
    78402: function (e, t) {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    81265: function (e, t, n) {
      var r = n(2338),
        i = n(43180),
        o = n(78955),
        a = n(91337),
        l = n(78402),
        s = r.getBCHDigit(7973);
      function c(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      function u(e, t) {
        var n = 0;
        return (
          e.forEach(function (e) {
            var r = c(e.mode, t);
            n += r + e.getBitsLength();
          }),
          n
        );
      }
      (t.from = function (e, t) {
        return l.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, n) {
          if (!l.isValid(e)) throw new Error("Invalid QR Code version");
          "undefined" === typeof n && (n = a.BYTE);
          var o =
            8 * (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t));
          if (n === a.MIXED) return o;
          var s = o - c(n, e);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((s / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((s / 11) * 2);
            case a.KANJI:
              return Math.floor(s / 13);
            case a.BYTE:
            default:
              return Math.floor(s / 8);
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          var r,
            i = o.from(n, o.M);
          if (Array.isArray(e)) {
            if (e.length > 1)
              return (function (e, n) {
                for (var r = 1; r <= 40; r++)
                  if (u(e, r) <= t.getCapacity(r, n, a.MIXED)) return r;
              })(e, i);
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (var i = 1; i <= 40; i++)
              if (n <= t.getCapacity(i, r, e)) return i;
          })(r.mode, r.getLength(), i);
        }),
        (t.getEncodedBits = function (e) {
          if (!l.isValid(e) || e < 7)
            throw new Error("Invalid QR Code version");
          for (var t = e << 12; r.getBCHDigit(t) - s >= 0; )
            t ^= 7973 << (r.getBCHDigit(t) - s);
          return (e << 12) | t;
        });
    },
    30416: function (e, t, n) {
      var r = n(83605);
      (t.render = function (e, t, n) {
        var i = n,
          o = t;
        "undefined" !== typeof i ||
          (t && t.getContext) ||
          ((i = t), (t = void 0)),
          t ||
            (o = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (i = r.getOptions(i));
        var a = r.getImageWidth(e.modules.size, i),
          l = o.getContext("2d"),
          s = l.createImageData(a, a);
        return (
          r.qrToImageData(s.data, e, i),
          (function (e, t, n) {
            e.clearRect(0, 0, t.width, t.height),
              t.style || (t.style = {}),
              (t.height = n),
              (t.width = n),
              (t.style.height = n + "px"),
              (t.style.width = n + "px");
          })(l, o, a),
          l.putImageData(s, 0, 0),
          o
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          var i = r;
          "undefined" !== typeof i ||
            (n && n.getContext) ||
            ((i = n), (n = void 0)),
            i || (i = {});
          var o = t.render(e, n, i),
            a = i.type || "image/png",
            l = i.rendererOpts || {};
          return o.toDataURL(a, l.quality);
        });
    },
    9413: function (e, t, n) {
      var r = n(83605);
      function i(e, t) {
        var n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1
          ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function o(e, t, n) {
        var r = e + t;
        return "undefined" !== typeof n && (r += " " + n), r;
      }
      t.render = function (e, t, n) {
        var a = r.getOptions(t),
          l = e.modules.size,
          s = e.modules.data,
          c = l + 2 * a.margin,
          u = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          d =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              for (var r = "", i = 0, a = !1, l = 0, s = 0; s < e.length; s++) {
                var c = Math.floor(s % t),
                  u = Math.floor(s / t);
                c || a || (a = !0),
                  e[s]
                    ? (l++,
                      (s > 0 && c > 0 && e[s - 1]) ||
                        ((r += a ? o("M", c + n, 0.5 + u + n) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (c + 1 < t && e[s + 1]) || ((r += o("h", l)), (l = 0)))
                    : i++;
              }
              return r;
            })(s, l, a.margin) +
            '"/>',
          h = 'viewBox="0 0 ' + c + " " + c + '"',
          v =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            h +
            ' shape-rendering="crispEdges">' +
            u +
            d +
            "</svg>\n";
        return "function" === typeof n && n(null, v), v;
      };
    },
    83605: function (e, t) {
      function n(e) {
        if (
          ("number" === typeof e && (e = e.toString()), "string" !== typeof e)
        )
          throw new Error("Color should be defined as hex string");
        var t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw new Error("Invalid hex color: " + e);
        (3 !== t.length && 4 !== t.length) ||
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        var n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        var t =
            "undefined" === typeof e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          r = e.width && e.width >= 21 ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
          margin: t,
          color: {
            dark: n(e.color.dark || "#000000ff"),
            light: n(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, n) {
          var r = t.getScale(e, n);
          return Math.floor((e + 2 * n.margin) * r);
        }),
        (t.qrToImageData = function (e, n, r) {
          for (
            var i = n.modules.size,
              o = n.modules.data,
              a = t.getScale(i, r),
              l = Math.floor((i + 2 * r.margin) * a),
              s = r.margin * a,
              c = [r.color.light, r.color.dark],
              u = 0;
            u < l;
            u++
          )
            for (var d = 0; d < l; d++) {
              var h = 4 * (u * l + d),
                v = r.color.light;
              if (u >= s && d >= s && u < l - s && d < l - s)
                v =
                  c[
                    o[Math.floor((u - s) / a) * i + Math.floor((d - s) / a)]
                      ? 1
                      : 0
                  ];
              (e[h++] = v.r), (e[h++] = v.g), (e[h++] = v.b), (e[h] = v.a);
            }
        });
    },
    92099: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          W3mAccountButton: function () {
            return Kl;
          },
          W3mConnectButton: function () {
            return Zs;
          },
          W3mCoreButton: function () {
            return Is;
          },
          W3mModal: function () {
            return Ys;
          },
          W3mNetworkSwitch: function () {
            return tc;
          },
        });
      var r = n(82963),
        i = n(93433),
        o = n(4942),
        a = n(74165),
        l = n(15861),
        s = n(15671),
        c = n(43144),
        u = n(60136),
        d = n(29388);
      function h(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var v,
        f,
        p = n(29439),
        m = n(37762),
        g = n(28664),
        w = window,
        b =
          w.ShadowRoot &&
          (void 0 === w.ShadyCSS || w.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        y = Symbol(),
        x = new WeakMap(),
        k = (function () {
          function e(t, n, r) {
            if (((0, s.Z)(this, e), (this._$cssResult$ = !0), r !== y))
              throw Error(
                "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
              );
            (this.cssText = t), (this.t = n);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "styleSheet",
                get: function () {
                  var e = this.o,
                    t = this.t;
                  if (b && void 0 === e) {
                    var n = void 0 !== t && 1 === t.length;
                    n && (e = x.get(t)),
                      void 0 === e &&
                        ((this.o = e = new CSSStyleSheet()).replaceSync(
                          this.cssText
                        ),
                        n && x.set(t, e));
                  }
                  return e;
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.cssText;
                },
              },
            ]),
            e
          );
        })(),
        C = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i =
            1 === e.length
              ? e[0]
              : n.reduce(function (t, n, r) {
                  return (
                    t +
                    (function (e) {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          e +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(n) +
                    e[r + 1]
                  );
                }, e[0]);
          return new k(i, e, y);
        },
        Z = b
          ? function (e) {
              return e;
            }
          : function (e) {
              return e instanceof CSSStyleSheet
                ? (function (e) {
                    var t,
                      n = "",
                      r = (0, m.Z)(e.cssRules);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        n += t.value.cssText;
                      }
                    } catch (i) {
                      r.e(i);
                    } finally {
                      r.f();
                    }
                    return (function (e) {
                      return new k(
                        "string" == typeof e ? e : e + "",
                        void 0,
                        y
                      );
                    })(n);
                  })(e)
                : e;
            },
        A = window,
        E = A.trustedTypes,
        _ = E ? E.emptyScript : "",
        I = A.reactiveElementPolyfillSupport,
        O = {
          toAttribute: function (e, t) {
            switch (t) {
              case Boolean:
                e = e ? _ : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute: function (e, t) {
            var n = e;
            switch (t) {
              case Boolean:
                n = null !== e;
                break;
              case Number:
                n = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  n = JSON.parse(e);
                } catch (e) {
                  n = null;
                }
            }
            return n;
          },
        },
        M = function (e, t) {
          return t !== e && (t == t || e == e);
        },
        S = {
          attribute: !0,
          type: String,
          converter: O,
          reflect: !1,
          hasChanged: M,
        },
        P = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this))._$Ei = new Map()),
              (e.isUpdatePending = !1),
              (e.hasUpdated = !1),
              (e._$El = null),
              e.u(),
              e
            );
          }
          return (
            (0, c.Z)(
              n,
              [
                {
                  key: "u",
                  value: function () {
                    var e,
                      t = this;
                    (this._$E_ = new Promise(function (e) {
                      return (t.enableUpdating = e);
                    })),
                      (this._$AL = new Map()),
                      this._$Eg(),
                      this.requestUpdate(),
                      null === (e = this.constructor.h) ||
                        void 0 === e ||
                        e.forEach(function (e) {
                          return e(t);
                        });
                  },
                },
                {
                  key: "addController",
                  value: function (e) {
                    var t, n;
                    (null !== (t = this._$ES) && void 0 !== t
                      ? t
                      : (this._$ES = [])
                    ).push(e),
                      void 0 !== this.renderRoot &&
                        this.isConnected &&
                        (null === (n = e.hostConnected) ||
                          void 0 === n ||
                          n.call(e));
                  },
                },
                {
                  key: "removeController",
                  value: function (e) {
                    var t;
                    null === (t = this._$ES) ||
                      void 0 === t ||
                      t.splice(this._$ES.indexOf(e) >>> 0, 1);
                  },
                },
                {
                  key: "_$Eg",
                  value: function () {
                    var e = this;
                    this.constructor.elementProperties.forEach(function (t, n) {
                      e.hasOwnProperty(n) && (e._$Ei.set(n, e[n]), delete e[n]);
                    });
                  },
                },
                {
                  key: "createRenderRoot",
                  value: function () {
                    var e,
                      t =
                        null !== (e = this.shadowRoot) && void 0 !== e
                          ? e
                          : this.attachShadow(
                              this.constructor.shadowRootOptions
                            );
                    return (
                      (function (e, t) {
                        b
                          ? (e.adoptedStyleSheets = t.map(function (e) {
                              return e instanceof CSSStyleSheet
                                ? e
                                : e.styleSheet;
                            }))
                          : t.forEach(function (t) {
                              var n = document.createElement("style"),
                                r = w.litNonce;
                              void 0 !== r && n.setAttribute("nonce", r),
                                (n.textContent = t.cssText),
                                e.appendChild(n);
                            });
                      })(t, this.constructor.elementStyles),
                      t
                    );
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    var e;
                    void 0 === this.renderRoot &&
                      (this.renderRoot = this.createRenderRoot()),
                      this.enableUpdating(!0),
                      null === (e = this._$ES) ||
                        void 0 === e ||
                        e.forEach(function (e) {
                          var t;
                          return null === (t = e.hostConnected) || void 0 === t
                            ? void 0
                            : t.call(e);
                        });
                  },
                },
                { key: "enableUpdating", value: function (e) {} },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    var e;
                    null === (e = this._$ES) ||
                      void 0 === e ||
                      e.forEach(function (e) {
                        var t;
                        return null === (t = e.hostDisconnected) || void 0 === t
                          ? void 0
                          : t.call(e);
                      });
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (e, t, n) {
                    this._$AK(e, n);
                  },
                },
                {
                  key: "_$EO",
                  value: function (e, t) {
                    var n,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : S,
                      i = this.constructor._$Ep(e, r);
                    if (void 0 !== i && !0 === r.reflect) {
                      var o = (
                        void 0 !==
                        (null === (n = r.converter) || void 0 === n
                          ? void 0
                          : n.toAttribute)
                          ? r.converter
                          : O
                      ).toAttribute(t, r.type);
                      (this._$El = e),
                        null == o
                          ? this.removeAttribute(i)
                          : this.setAttribute(i, o),
                        (this._$El = null);
                    }
                  },
                },
                {
                  key: "_$AK",
                  value: function (e, t) {
                    var n,
                      r = this.constructor,
                      i = r._$Ev.get(e);
                    if (void 0 !== i && this._$El !== i) {
                      var o = r.getPropertyOptions(i),
                        a =
                          "function" == typeof o.converter
                            ? { fromAttribute: o.converter }
                            : void 0 !==
                              (null === (n = o.converter) || void 0 === n
                                ? void 0
                                : n.fromAttribute)
                            ? o.converter
                            : O;
                      (this._$El = i),
                        (this[i] = a.fromAttribute(t, o.type)),
                        (this._$El = null);
                    }
                  },
                },
                {
                  key: "requestUpdate",
                  value: function (e, t, n) {
                    var r = !0;
                    void 0 !== e &&
                      ((
                        (n = n || this.constructor.getPropertyOptions(e))
                          .hasChanged || M
                      )(this[e], t)
                        ? (this._$AL.has(e) || this._$AL.set(e, t),
                          !0 === n.reflect &&
                            this._$El !== e &&
                            (void 0 === this._$EC && (this._$EC = new Map()),
                            this._$EC.set(e, n)))
                        : (r = !1)),
                      !this.isUpdatePending && r && (this._$E_ = this._$Ej());
                  },
                },
                {
                  key: "_$Ej",
                  value: (function () {
                    var e = (0, l.Z)(
                      (0, a.Z)().mark(function e() {
                        var t;
                        return (0, a.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.isUpdatePending = !0),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this._$E_
                                  );
                                case 4:
                                  e.next = 9;
                                  break;
                                case 6:
                                  (e.prev = 6),
                                    (e.t0 = e.catch(1)),
                                    Promise.reject(e.t0);
                                case 9:
                                  if (
                                    ((t = this.scheduleUpdate()),
                                    (e.t1 = null != t),
                                    !e.t1)
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (e.next = 14), t;
                                case 14:
                                  return e.abrupt(
                                    "return",
                                    !this.isUpdatePending
                                  );
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 6]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "scheduleUpdate",
                  value: function () {
                    return this.performUpdate();
                  },
                },
                {
                  key: "performUpdate",
                  value: function () {
                    var e,
                      t = this;
                    if (this.isUpdatePending) {
                      this.hasUpdated,
                        this._$Ei &&
                          (this._$Ei.forEach(function (e, n) {
                            return (t[n] = e);
                          }),
                          (this._$Ei = void 0));
                      var n = !1,
                        r = this._$AL;
                      try {
                        (n = this.shouldUpdate(r))
                          ? (this.willUpdate(r),
                            null === (e = this._$ES) ||
                              void 0 === e ||
                              e.forEach(function (e) {
                                var t;
                                return null === (t = e.hostUpdate) ||
                                  void 0 === t
                                  ? void 0
                                  : t.call(e);
                              }),
                            this.update(r))
                          : this._$Ek();
                      } catch (e) {
                        throw ((n = !1), this._$Ek(), e);
                      }
                      n && this._$AE(r);
                    }
                  },
                },
                { key: "willUpdate", value: function (e) {} },
                {
                  key: "_$AE",
                  value: function (e) {
                    var t;
                    null === (t = this._$ES) ||
                      void 0 === t ||
                      t.forEach(function (e) {
                        var t;
                        return null === (t = e.hostUpdated) || void 0 === t
                          ? void 0
                          : t.call(e);
                      }),
                      this.hasUpdated ||
                        ((this.hasUpdated = !0), this.firstUpdated(e)),
                      this.updated(e);
                  },
                },
                {
                  key: "_$Ek",
                  value: function () {
                    (this._$AL = new Map()), (this.isUpdatePending = !1);
                  },
                },
                {
                  key: "updateComplete",
                  get: function () {
                    return this.getUpdateComplete();
                  },
                },
                {
                  key: "getUpdateComplete",
                  value: function () {
                    return this._$E_;
                  },
                },
                {
                  key: "shouldUpdate",
                  value: function (e) {
                    return !0;
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    var t = this;
                    void 0 !== this._$EC &&
                      (this._$EC.forEach(function (e, n) {
                        return t._$EO(n, t[n], e);
                      }),
                      (this._$EC = void 0)),
                      this._$Ek();
                  },
                },
                { key: "updated", value: function (e) {} },
                { key: "firstUpdated", value: function (e) {} },
              ],
              [
                {
                  key: "addInitializer",
                  value: function (e) {
                    var t;
                    this.finalize(),
                      (null !== (t = this.h) && void 0 !== t
                        ? t
                        : (this.h = [])
                      ).push(e);
                  },
                },
                {
                  key: "observedAttributes",
                  get: function () {
                    var e = this;
                    this.finalize();
                    var t = [];
                    return (
                      this.elementProperties.forEach(function (n, r) {
                        var i = e._$Ep(r, n);
                        void 0 !== i && (e._$Ev.set(i, r), t.push(i));
                      }),
                      t
                    );
                  },
                },
                {
                  key: "createProperty",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : S;
                    if (
                      (t.state && (t.attribute = !1),
                      this.finalize(),
                      this.elementProperties.set(e, t),
                      !t.noAccessor && !this.prototype.hasOwnProperty(e))
                    ) {
                      var n = "symbol" == typeof e ? Symbol() : "__" + e,
                        r = this.getPropertyDescriptor(e, n, t);
                      void 0 !== r &&
                        Object.defineProperty(this.prototype, e, r);
                    }
                  },
                },
                {
                  key: "getPropertyDescriptor",
                  value: function (e, t, n) {
                    return {
                      get: function () {
                        return this[t];
                      },
                      set: function (r) {
                        var i = this[e];
                        (this[t] = r), this.requestUpdate(e, i, n);
                      },
                      configurable: !0,
                      enumerable: !0,
                    };
                  },
                },
                {
                  key: "getPropertyOptions",
                  value: function (e) {
                    return this.elementProperties.get(e) || S;
                  },
                },
                {
                  key: "finalize",
                  value: function () {
                    if (this.hasOwnProperty("finalized")) return !1;
                    this.finalized = !0;
                    var e = Object.getPrototypeOf(this);
                    if (
                      (e.finalize(),
                      void 0 !== e.h && (this.h = (0, i.Z)(e.h)),
                      (this.elementProperties = new Map(e.elementProperties)),
                      (this._$Ev = new Map()),
                      this.hasOwnProperty("properties"))
                    ) {
                      var t,
                        n = this.properties,
                        r = [].concat(
                          (0, i.Z)(Object.getOwnPropertyNames(n)),
                          (0, i.Z)(Object.getOwnPropertySymbols(n))
                        ),
                        o = (0, m.Z)(r);
                      try {
                        for (o.s(); !(t = o.n()).done; ) {
                          var a = t.value;
                          this.createProperty(a, n[a]);
                        }
                      } catch (l) {
                        o.e(l);
                      } finally {
                        o.f();
                      }
                    }
                    return (
                      (this.elementStyles = this.finalizeStyles(this.styles)),
                      !0
                    );
                  },
                },
                {
                  key: "finalizeStyles",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e)) {
                      var n,
                        r = new Set(e.flat(1 / 0).reverse()),
                        i = (0, m.Z)(r);
                      try {
                        for (i.s(); !(n = i.n()).done; ) {
                          var o = n.value;
                          t.unshift(Z(o));
                        }
                      } catch (a) {
                        i.e(a);
                      } finally {
                        i.f();
                      }
                    } else void 0 !== e && t.push(Z(e));
                    return t;
                  },
                },
                {
                  key: "_$Ep",
                  value: function (e, t) {
                    var n = t.attribute;
                    return !1 === n
                      ? void 0
                      : "string" == typeof n
                      ? n
                      : "string" == typeof e
                      ? e.toLowerCase()
                      : void 0;
                  },
                },
              ]
            ),
            n
          );
        })((0, g.Z)(HTMLElement));
      (P.finalized = !0),
        (P.elementProperties = new Map()),
        (P.elementStyles = []),
        (P.shadowRootOptions = { mode: "open" }),
        null == I || I({ ReactiveElement: P }),
        (null !== (v = A.reactiveElementVersions) && void 0 !== v
          ? v
          : (A.reactiveElementVersions = [])
        ).push("1.6.1");
      var T = window,
        L = T.trustedTypes,
        j = L
          ? L.createPolicy("lit-html", {
              createHTML: function (e) {
                return e;
              },
            })
          : void 0,
        N = "lit$".concat((Math.random() + "").slice(9), "$"),
        R = "?" + N,
        D = "<".concat(R, ">"),
        B = document,
        z = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return B.createComment(e);
        },
        U = function (e) {
          return null === e || ("object" != typeof e && "function" != typeof e);
        },
        W = Array.isArray,
        $ = function (e) {
          return (
            W(e) ||
            "function" == typeof (null == e ? void 0 : e[Symbol.iterator])
          );
        },
        H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        V = /-->/g,
        F = />/g,
        q = RegExp(
          ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
          "g"
        ),
        G = /'/g,
        K = /"/g,
        Y = /^(?:script|style|textarea|title)$/i,
        J = function (e) {
          return function (t) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return { _$litType$: e, strings: t, values: r };
          };
        },
        Q = J(1),
        X = J(2),
        ee = Symbol.for("lit-noChange"),
        te = Symbol.for("lit-nothing"),
        ne = new WeakMap(),
        re = B.createTreeWalker(B, 129, null, !1),
        ie = function (e, t) {
          for (
            var n,
              r = e.length - 1,
              i = [],
              o = 2 === t ? "<svg>" : "",
              a = H,
              l = 0;
            l < r;
            l++
          ) {
            for (
              var s = e[l], c = void 0, u = void 0, d = -1, h = 0;
              h < s.length && ((a.lastIndex = h), null !== (u = a.exec(s)));

            )
              (h = a.lastIndex),
                a === H
                  ? "!--" === u[1]
                    ? (a = V)
                    : void 0 !== u[1]
                    ? (a = F)
                    : void 0 !== u[2]
                    ? (Y.test(u[2]) && (n = RegExp("</" + u[2], "g")), (a = q))
                    : void 0 !== u[3] && (a = q)
                  : a === q
                  ? ">" === u[0]
                    ? ((a = null != n ? n : H), (d = -1))
                    : void 0 === u[1]
                    ? (d = -2)
                    : ((d = a.lastIndex - u[2].length),
                      (c = u[1]),
                      (a = void 0 === u[3] ? q : '"' === u[3] ? K : G))
                  : a === K || a === G
                  ? (a = q)
                  : a === V || a === F
                  ? (a = H)
                  : ((a = q), (n = void 0));
            var v = a === q && e[l + 1].startsWith("/>") ? " " : "";
            o +=
              a === H
                ? s + D
                : d >= 0
                ? (i.push(c), s.slice(0, d) + "$lit$" + s.slice(d) + N + v)
                : s + N + (-2 === d ? (i.push(void 0), l) : v);
          }
          var f = o + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
          if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
            throw Error("invalid template strings array");
          return [void 0 !== j ? j.createHTML(f) : f, i];
        },
        oe = (function () {
          function e(t, n) {
            var r,
              o = t.strings,
              a = t._$litType$;
            (0, s.Z)(this, e), (this.parts = []);
            var l = 0,
              c = 0,
              u = o.length - 1,
              d = this.parts,
              h = ie(o, a),
              v = (0, p.Z)(h, 2),
              f = v[0],
              g = v[1];
            if (
              ((this.el = e.createElement(f, n)),
              (re.currentNode = this.el.content),
              2 === a)
            ) {
              var w = this.el.content,
                b = w.firstChild;
              b.remove(), w.append.apply(w, (0, i.Z)(b.childNodes));
            }
            for (; null !== (r = re.nextNode()) && d.length < u; ) {
              if (1 === r.nodeType) {
                if (r.hasAttributes()) {
                  var y,
                    x = [],
                    k = (0, m.Z)(r.getAttributeNames());
                  try {
                    for (k.s(); !(y = k.n()).done; ) {
                      var C = y.value;
                      if (C.endsWith("$lit$") || C.startsWith(N)) {
                        var Z = g[c++];
                        if ((x.push(C), void 0 !== Z)) {
                          var A = r
                              .getAttribute(Z.toLowerCase() + "$lit$")
                              .split(N),
                            E = /([.?@])?(.*)/.exec(Z);
                          d.push({
                            type: 1,
                            index: l,
                            name: E[2],
                            strings: A,
                            ctor:
                              "." === E[1]
                                ? ue
                                : "?" === E[1]
                                ? he
                                : "@" === E[1]
                                ? ve
                                : ce,
                          });
                        } else d.push({ type: 6, index: l });
                      }
                    }
                  } catch (j) {
                    k.e(j);
                  } finally {
                    k.f();
                  }
                  for (var _ = 0, I = x; _ < I.length; _++) {
                    var O = I[_];
                    r.removeAttribute(O);
                  }
                }
                if (Y.test(r.tagName)) {
                  var M = r.textContent.split(N),
                    S = M.length - 1;
                  if (S > 0) {
                    r.textContent = L ? L.emptyScript : "";
                    for (var P = 0; P < S; P++)
                      r.append(M[P], z()),
                        re.nextNode(),
                        d.push({ type: 2, index: ++l });
                    r.append(M[S], z());
                  }
                }
              } else if (8 === r.nodeType)
                if (r.data === R) d.push({ type: 2, index: l });
                else
                  for (var T = -1; -1 !== (T = r.data.indexOf(N, T + 1)); )
                    d.push({ type: 7, index: l }), (T += N.length - 1);
              l++;
            }
          }
          return (
            (0, c.Z)(e, null, [
              {
                key: "createElement",
                value: function (e, t) {
                  var n = B.createElement("template");
                  return (n.innerHTML = e), n;
                },
              },
            ]),
            e
          );
        })();
      function ae(e, t) {
        var n,
          r,
          i,
          o,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          l = arguments.length > 3 ? arguments[3] : void 0;
        if (t === ee) return t;
        var s =
            void 0 !== l
              ? null === (n = a._$Co) || void 0 === n
                ? void 0
                : n[l]
              : a._$Cl,
          c = U(t) ? void 0 : t._$litDirective$;
        return (
          (null == s ? void 0 : s.constructor) !== c &&
            (null === (r = null == s ? void 0 : s._$AO) ||
              void 0 === r ||
              r.call(s, !1),
            void 0 === c ? (s = void 0) : (s = new c(e))._$AT(e, a, l),
            void 0 !== l
              ? ((null !== (i = (o = a)._$Co) && void 0 !== i
                  ? i
                  : (o._$Co = []))[l] = s)
              : (a._$Cl = s)),
          void 0 !== s && (t = ae(e, s._$AS(e, t.values), s, l)),
          t
        );
      }
      var le = (function () {
          function e(t, n) {
            (0, s.Z)(this, e),
              (this.u = []),
              (this._$AN = void 0),
              (this._$AD = t),
              (this._$AM = n);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "parentNode",
                get: function () {
                  return this._$AM.parentNode;
                },
              },
              {
                key: "_$AU",
                get: function () {
                  return this._$AM._$AU;
                },
              },
              {
                key: "v",
                value: function (e) {
                  var t,
                    n = this._$AD,
                    r = n.el.content,
                    i = n.parts,
                    o = (
                      null !== (t = null == e ? void 0 : e.creationScope) &&
                      void 0 !== t
                        ? t
                        : B
                    ).importNode(r, !0);
                  re.currentNode = o;
                  for (
                    var a = re.nextNode(), l = 0, s = 0, c = i[0];
                    void 0 !== c;

                  ) {
                    if (l === c.index) {
                      var u = void 0;
                      2 === c.type
                        ? (u = new se(a, a.nextSibling, this, e))
                        : 1 === c.type
                        ? (u = new c.ctor(a, c.name, c.strings, this, e))
                        : 6 === c.type && (u = new fe(a, this, e)),
                        this.u.push(u),
                        (c = i[++s]);
                    }
                    l !== (null == c ? void 0 : c.index) &&
                      ((a = re.nextNode()), l++);
                  }
                  return o;
                },
              },
              {
                key: "p",
                value: function (e) {
                  var t,
                    n = 0,
                    r = (0, m.Z)(this.u);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var i = t.value;
                      void 0 !== i &&
                        (void 0 !== i.strings
                          ? (i._$AI(e, i, n), (n += i.strings.length - 2))
                          : i._$AI(e[n])),
                        n++;
                    }
                  } catch (o) {
                    r.e(o);
                  } finally {
                    r.f();
                  }
                },
              },
            ]),
            e
          );
        })(),
        se = (function () {
          function e(t, n, r, i) {
            var o;
            (0, s.Z)(this, e),
              (this.type = 2),
              (this._$AH = te),
              (this._$AN = void 0),
              (this._$AA = t),
              (this._$AB = n),
              (this._$AM = r),
              (this.options = i),
              (this._$Cm =
                null === (o = null == i ? void 0 : i.isConnected) ||
                void 0 === o ||
                o);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "_$AU",
                get: function () {
                  var e, t;
                  return null !==
                    (t =
                      null === (e = this._$AM) || void 0 === e
                        ? void 0
                        : e._$AU) && void 0 !== t
                    ? t
                    : this._$Cm;
                },
              },
              {
                key: "parentNode",
                get: function () {
                  var e = this._$AA.parentNode,
                    t = this._$AM;
                  return (
                    void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
                  );
                },
              },
              {
                key: "startNode",
                get: function () {
                  return this._$AA;
                },
              },
              {
                key: "endNode",
                get: function () {
                  return this._$AB;
                },
              },
              {
                key: "_$AI",
                value: function (e) {
                  (e = ae(
                    this,
                    e,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this
                  )),
                    U(e)
                      ? e === te || null == e || "" === e
                        ? (this._$AH !== te && this._$AR(), (this._$AH = te))
                        : e !== this._$AH && e !== ee && this.g(e)
                      : void 0 !== e._$litType$
                      ? this.$(e)
                      : void 0 !== e.nodeType
                      ? this.T(e)
                      : $(e)
                      ? this.k(e)
                      : this.g(e);
                },
              },
              {
                key: "O",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this._$AB;
                  return this._$AA.parentNode.insertBefore(e, t);
                },
              },
              {
                key: "T",
                value: function (e) {
                  this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
                },
              },
              {
                key: "g",
                value: function (e) {
                  this._$AH !== te && U(this._$AH)
                    ? (this._$AA.nextSibling.data = e)
                    : this.T(B.createTextNode(e)),
                    (this._$AH = e);
                },
              },
              {
                key: "$",
                value: function (e) {
                  var t,
                    n = e.values,
                    r = e._$litType$,
                    i =
                      "number" == typeof r
                        ? this._$AC(e)
                        : (void 0 === r.el &&
                            (r.el = oe.createElement(r.h, this.options)),
                          r);
                  if (
                    (null === (t = this._$AH) || void 0 === t
                      ? void 0
                      : t._$AD) === i
                  )
                    this._$AH.p(n);
                  else {
                    var o = new le(i, this),
                      a = o.v(this.options);
                    o.p(n), this.T(a), (this._$AH = o);
                  }
                },
              },
              {
                key: "_$AC",
                value: function (e) {
                  var t = ne.get(e.strings);
                  return void 0 === t && ne.set(e.strings, (t = new oe(e))), t;
                },
              },
              {
                key: "k",
                value: function (t) {
                  W(this._$AH) || ((this._$AH = []), this._$AR());
                  var n,
                    r,
                    i = this._$AH,
                    o = 0,
                    a = (0, m.Z)(t);
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      var l = r.value;
                      o === i.length
                        ? i.push(
                            (n = new e(
                              this.O(z()),
                              this.O(z()),
                              this,
                              this.options
                            ))
                          )
                        : (n = i[o]),
                        n._$AI(l),
                        o++;
                    }
                  } catch (s) {
                    a.e(s);
                  } finally {
                    a.f();
                  }
                  o < i.length &&
                    (this._$AR(n && n._$AB.nextSibling, o), (i.length = o));
                },
              },
              {
                key: "_$AR",
                value: function () {
                  var e,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this._$AA.nextSibling,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  for (
                    null === (e = this._$AP) ||
                    void 0 === e ||
                    e.call(this, !1, !0, n);
                    t && t !== this._$AB;

                  ) {
                    var r = t.nextSibling;
                    t.remove(), (t = r);
                  }
                },
              },
              {
                key: "setConnected",
                value: function (e) {
                  var t;
                  void 0 === this._$AM &&
                    ((this._$Cm = e),
                    null === (t = this._$AP) ||
                      void 0 === t ||
                      t.call(this, e));
                },
              },
            ]),
            e
          );
        })(),
        ce = (function () {
          function e(t, n, r, i, o) {
            (0, s.Z)(this, e),
              (this.type = 1),
              (this._$AH = te),
              (this._$AN = void 0),
              (this.element = t),
              (this.name = n),
              (this._$AM = i),
              (this.options = o),
              r.length > 2 || "" !== r[0] || "" !== r[1]
                ? ((this._$AH = Array(r.length - 1).fill(new String())),
                  (this.strings = r))
                : (this._$AH = te);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "tagName",
                get: function () {
                  return this.element.tagName;
                },
              },
              {
                key: "_$AU",
                get: function () {
                  return this._$AM._$AU;
                },
              },
              {
                key: "_$AI",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = this.strings,
                    o = !1;
                  if (void 0 === i)
                    (e = ae(this, e, t, 0)),
                      (o = !U(e) || (e !== this._$AH && e !== ee)) &&
                        (this._$AH = e);
                  else {
                    var a,
                      l,
                      s = e;
                    for (e = i[0], a = 0; a < i.length - 1; a++)
                      (l = ae(this, s[n + a], t, a)) === ee &&
                        (l = this._$AH[a]),
                        o || (o = !U(l) || l !== this._$AH[a]),
                        l === te
                          ? (e = te)
                          : e !== te && (e += (null != l ? l : "") + i[a + 1]),
                        (this._$AH[a] = l);
                  }
                  o && !r && this.j(e);
                },
              },
              {
                key: "j",
                value: function (e) {
                  e === te
                    ? this.element.removeAttribute(this.name)
                    : this.element.setAttribute(this.name, null != e ? e : "");
                },
              },
            ]),
            e
          );
        })(),
        ue = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n), ((e = t.apply(this, arguments)).type = 3), e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "j",
                value: function (e) {
                  this.element[this.name] = e === te ? void 0 : e;
                },
              },
            ]),
            n
          );
        })(ce),
        de = L ? L.emptyScript : "",
        he = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n), ((e = t.apply(this, arguments)).type = 4), e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "j",
                value: function (e) {
                  e && e !== te
                    ? this.element.setAttribute(this.name, de)
                    : this.element.removeAttribute(this.name);
                },
              },
            ]),
            n
          );
        })(ce),
        ve = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n(e, r, i, o, a) {
            var l;
            return (
              (0, s.Z)(this, n), ((l = t.call(this, e, r, i, o, a)).type = 5), l
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "_$AI",
                value: function (e) {
                  var t;
                  if (
                    (e =
                      null !==
                        (t = ae(
                          this,
                          e,
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this,
                          0
                        )) && void 0 !== t
                        ? t
                        : te) !== ee
                  ) {
                    var n = this._$AH,
                      r =
                        (e === te && n !== te) ||
                        e.capture !== n.capture ||
                        e.once !== n.once ||
                        e.passive !== n.passive,
                      i = e !== te && (n === te || r);
                    r && this.element.removeEventListener(this.name, this, n),
                      i && this.element.addEventListener(this.name, this, e),
                      (this._$AH = e);
                  }
                },
              },
              {
                key: "handleEvent",
                value: function (e) {
                  var t, n;
                  "function" == typeof this._$AH
                    ? this._$AH.call(
                        null !==
                          (n =
                            null === (t = this.options) || void 0 === t
                              ? void 0
                              : t.host) && void 0 !== n
                          ? n
                          : this.element,
                        e
                      )
                    : this._$AH.handleEvent(e);
                },
              },
            ]),
            n
          );
        })(ce),
        fe = (function () {
          function e(t, n, r) {
            (0, s.Z)(this, e),
              (this.element = t),
              (this.type = 6),
              (this._$AN = void 0),
              (this._$AM = n),
              (this.options = r);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "_$AU",
                get: function () {
                  return this._$AM._$AU;
                },
              },
              {
                key: "_$AI",
                value: function (e) {
                  ae(this, e);
                },
              },
            ]),
            e
          );
        })(),
        pe = T.litHtmlPolyfillSupport;
      null == pe || pe(oe, se),
        (null !== (f = T.litHtmlVersions) && void 0 !== f
          ? f
          : (T.litHtmlVersions = [])
        ).push("2.6.1");
      var me,
        ge,
        we = n(97326),
        be = n(11752),
        ye = n(61120),
        xe = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).renderOptions = {
                host: (0, we.Z)(e),
              }),
              (e._$Do = void 0),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "createRenderRoot",
                value: function () {
                  var e,
                    t,
                    r = (0, be.Z)(
                      (0, ye.Z)(n.prototype),
                      "createRenderRoot",
                      this
                    ).call(this);
                  return (
                    (null !== (e = (t = this.renderOptions).renderBefore) &&
                      void 0 !== e) ||
                      (t.renderBefore = r.firstChild),
                    r
                  );
                },
              },
              {
                key: "update",
                value: function (e) {
                  var t = this.render();
                  this.hasUpdated ||
                    (this.renderOptions.isConnected = this.isConnected),
                    (0, be.Z)((0, ye.Z)(n.prototype), "update", this).call(
                      this,
                      e
                    ),
                    (this._$Do = (function (e, t, n) {
                      var r,
                        i,
                        o =
                          null !== (r = null == n ? void 0 : n.renderBefore) &&
                          void 0 !== r
                            ? r
                            : t,
                        a = o._$litPart$;
                      if (void 0 === a) {
                        var l =
                          null !== (i = null == n ? void 0 : n.renderBefore) &&
                          void 0 !== i
                            ? i
                            : null;
                        o._$litPart$ = a = new se(
                          t.insertBefore(z(), l),
                          l,
                          void 0,
                          null != n ? n : {}
                        );
                      }
                      return a._$AI(e), a;
                    })(t, this.renderRoot, this.renderOptions));
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  var e;
                  (0, be.Z)(
                    (0, ye.Z)(n.prototype),
                    "connectedCallback",
                    this
                  ).call(this),
                    null === (e = this._$Do) ||
                      void 0 === e ||
                      e.setConnected(!0);
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  (0, be.Z)(
                    (0, ye.Z)(n.prototype),
                    "disconnectedCallback",
                    this
                  ).call(this),
                    null === (e = this._$Do) ||
                      void 0 === e ||
                      e.setConnected(!1);
                },
              },
              {
                key: "render",
                value: function () {
                  return ee;
                },
              },
            ]),
            n
          );
        })(P);
      (xe.finalized = !0),
        (xe._$litElement$ = !0),
        null === (me = globalThis.litElementHydrateSupport) ||
          void 0 === me ||
          me.call(globalThis, { LitElement: xe });
      var ke = globalThis.litElementPolyfillSupport;
      null == ke || ke({ LitElement: xe });
      (null !== (ge = globalThis.litElementVersions) && void 0 !== ge
        ? ge
        : (globalThis.litElementVersions = [])
      ).push("3.2.2");
      var Ce,
        Ze = function (e) {
          return function (t) {
            return "function" == typeof t
              ? (function (e, t) {
                  return customElements.define(e, t), t;
                })(e, t)
              : (function (e, t) {
                  return {
                    kind: t.kind,
                    elements: t.elements,
                    finisher: function (t) {
                      customElements.define(e, t);
                    },
                  };
                })(e, t);
          };
        },
        Ae = n(1413),
        Ee = function (e, t) {
          return "method" === t.kind &&
            t.descriptor &&
            !("value" in t.descriptor)
            ? (0, Ae.Z)(
                (0, Ae.Z)({}, t),
                {},
                {
                  finisher: function (n) {
                    n.createProperty(t.key, e);
                  },
                }
              )
            : {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: t.key,
                initializer: function () {
                  "function" == typeof t.initializer &&
                    (this[t.key] = t.initializer.call(this));
                },
                finisher: function (n) {
                  n.createProperty(t.key, e);
                },
              };
        };
      function _e(e) {
        return function (t, n) {
          return void 0 !== n
            ? (function (e, t, n) {
                t.constructor.createProperty(n, e);
              })(e, t, n)
            : Ee(e, t);
        };
      }
      function Ie(e) {
        return _e((0, Ae.Z)((0, Ae.Z)({}, e), {}, { state: !0 }));
      }
      null === (Ce = window.HTMLSlotElement) ||
        void 0 === Ce ||
        Ce.prototype.assignedElements;
      var Oe = n(29042),
        Me = {
          ATTRIBUTE: 1,
          CHILD: 2,
          PROPERTY: 3,
          BOOLEAN_ATTRIBUTE: 4,
          EVENT: 5,
          ELEMENT: 6,
        },
        Se = (function () {
          function e(t) {
            (0, s.Z)(this, e);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "_$AU",
                get: function () {
                  return this._$AM._$AU;
                },
              },
              {
                key: "_$AT",
                value: function (e, t, n) {
                  (this._$Ct = e), (this._$AM = t), (this._$Ci = n);
                },
              },
              {
                key: "_$AS",
                value: function (e, t) {
                  return this.update(e, t);
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  return this.render.apply(this, (0, i.Z)(t));
                },
              },
            ]),
            e
          );
        })(),
        Pe = (function (e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return { _$litDirective$: e, values: n };
          };
        })(
          (function (e) {
            (0, u.Z)(n, e);
            var t = (0, d.Z)(n);
            function n(e) {
              var i, o;
              if (
                ((0, s.Z)(this, n),
                (i = t.call(this, e)),
                e.type !== Me.ATTRIBUTE ||
                  "class" !== e.name ||
                  (null === (o = e.strings) || void 0 === o
                    ? void 0
                    : o.length) > 2)
              )
                throw Error(
                  "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
                );
              return (0, r.Z)(i);
            }
            return (
              (0, c.Z)(n, [
                {
                  key: "render",
                  value: function (e) {
                    return (
                      " " +
                      Object.keys(e)
                        .filter(function (t) {
                          return e[t];
                        })
                        .join(" ") +
                      " "
                    );
                  },
                },
                {
                  key: "update",
                  value: function (e, t) {
                    var n,
                      r,
                      i = this,
                      o = (0, p.Z)(t, 1)[0];
                    if (void 0 === this.nt) {
                      for (var a in ((this.nt = new Set()),
                      void 0 !== e.strings &&
                        (this.st = new Set(
                          e.strings
                            .join(" ")
                            .split(/\s/)
                            .filter(function (e) {
                              return "" !== e;
                            })
                        )),
                      o))
                        o[a] &&
                          !(null === (n = this.st) || void 0 === n
                            ? void 0
                            : n.has(a)) &&
                          this.nt.add(a);
                      return this.render(o);
                    }
                    var l = e.element.classList;
                    for (var s in (this.nt.forEach(function (e) {
                      e in o || (l.remove(e), i.nt.delete(e));
                    }),
                    o)) {
                      var c = !!o[s];
                      c === this.nt.has(s) ||
                        (null === (r = this.st) || void 0 === r
                          ? void 0
                          : r.has(s)) ||
                        (c
                          ? (l.add(s), this.nt.add(s))
                          : (l.remove(s), this.nt.delete(s)));
                    }
                    return ee;
                  },
                },
              ]),
              n
            );
          })(Se)
        ),
        Te = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        Le = {
          ms: function (e) {
            return 1e3 * e;
          },
          s: function (e) {
            return e / 1e3;
          },
        },
        je = function () {},
        Ne = function (e) {
          return e;
        };
      function Re(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e && "finished" !== e.playState)
          try {
            e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
          } catch (n) {}
      }
      var De = function (e) {
          return e();
        },
        Be = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Te.duration;
          return new Proxy(
            { animations: e.map(De).filter(Boolean), duration: n, options: t },
            ze
          );
        },
        ze = {
          get: function (e, t) {
            var n = e.animations[0];
            switch (t) {
              case "duration":
                return e.duration;
              case "currentTime":
                return Le.s((null === n || void 0 === n ? void 0 : n[t]) || 0);
              case "playbackRate":
              case "playState":
                return null === n || void 0 === n ? void 0 : n[t];
              case "finished":
                return (
                  e.finished ||
                    (e.finished = Promise.all(e.animations.map(Ue)).catch(je)),
                  e.finished
                );
              case "stop":
                return function () {
                  e.animations.forEach(function (e) {
                    return Re(e);
                  });
                };
              case "forEachNative":
                return function (t) {
                  e.animations.forEach(function (n) {
                    return t(n, e);
                  });
                };
              default:
                return "undefined" ===
                  typeof (null === n || void 0 === n ? void 0 : n[t])
                  ? void 0
                  : function () {
                      return e.animations.forEach(function (e) {
                        return e[t]();
                      });
                    };
            }
          },
          set: function (e, t, n) {
            switch (t) {
              case "currentTime":
                n = Le.ms(n);
              case "currentTime":
              case "playbackRate":
                for (var r = 0; r < e.animations.length; r++)
                  e.animations[r][t] = n;
                return !0;
            }
            return !1;
          },
        },
        Ue = function (e) {
          return e.finished;
        },
        We = function (e) {
          return "object" === typeof e && Boolean(e.createAnimation);
        },
        $e = function (e) {
          return "number" === typeof e;
        },
        He = function (e) {
          return Array.isArray(e) && !$e(e[0]);
        },
        Ve = function (e, t, n) {
          return -n * e + n * t + e;
        },
        Fe = function (e, t, n) {
          return t - e === 0 ? 1 : (n - e) / (t - e);
        };
      function qe(e, t) {
        for (var n = e[e.length - 1], r = 1; r <= t; r++) {
          var i = Fe(0, t, r);
          e.push(Ve(n, 1, i));
        }
      }
      var Ge = function (e, t, n) {
        var r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      };
      var Ke = function (e, t, n) {
        return Math.min(Math.max(n, e), t);
      };
      function Ye(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (function (e) {
                  var t = [0];
                  return qe(t, e - 1), t;
                })(e.length),
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ne,
          r = e.length,
          i = r - t.length;
        return (
          i > 0 && qe(t, i),
          function (i) {
            for (var o = 0; o < r - 2 && !(i < t[o + 1]); o++);
            var a = Ke(0, 1, Fe(t[o], t[o + 1], i)),
              l = (function (e, t) {
                return He(e) ? e[Ge(0, e.length, t)] : e;
              })(n, o);
            return (a = l(a)), Ve(e[o], e[o + 1], a);
          }
        );
      }
      var Je = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        },
        Qe = 1e-7,
        Xe = 12;
      function et(e, t, n, r) {
        if (e === t && n === r) return Ne;
        var i = function (t) {
          return (function (e, t, n, r, i) {
            var o,
              a,
              l = 0;
            do {
              (o = Je((a = t + (n - t) / 2), r, i) - e) > 0 ? (n = a) : (t = a);
            } while (Math.abs(o) > Qe && ++l < Xe);
            return a;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : Je(i(e), t, r);
        };
      }
      var tt = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "end";
          return function (n) {
            var r =
                (n = "end" === t ? Math.min(n, 0.999) : Math.max(n, 0.001)) * e,
              i = "end" === t ? Math.floor(r) : Math.ceil(r);
            return Ke(0, 1, i / e);
          };
        },
        nt = function (e) {
          return "function" === typeof e;
        },
        rt = function (e) {
          return Array.isArray(e) && $e(e[0]);
        },
        it = {
          ease: et(0.25, 0.1, 0.25, 1),
          "ease-in": et(0.42, 0, 1, 1),
          "ease-in-out": et(0.42, 0, 0.58, 1),
          "ease-out": et(0, 0, 0.58, 1),
        },
        ot = /\((.*?)\)/;
      function at(e) {
        if (nt(e)) return e;
        if (rt(e)) return et.apply(void 0, (0, i.Z)(e));
        if (it[e]) return it[e];
        if (e.startsWith("steps")) {
          var t = ot.exec(e);
          if (t) {
            var n = t[1].split(",");
            return tt(parseFloat(n[0]), n[1].trim());
          }
        }
        return Ne;
      }
      var lt = (function () {
          function e(t) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [0, 1],
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = i.easing,
              a = i.duration,
              l = void 0 === a ? Te.duration : a,
              c = i.delay,
              u = void 0 === c ? Te.delay : c,
              d = i.endDelay,
              h = void 0 === d ? Te.endDelay : d,
              v = i.repeat,
              f = void 0 === v ? Te.repeat : v,
              p = i.offset,
              m = i.direction,
              g = void 0 === m ? "normal" : m;
            if (
              ((0, s.Z)(this, e),
              (this.startTime = null),
              (this.rate = 1),
              (this.t = 0),
              (this.cancelTimestamp = null),
              (this.easing = Ne),
              (this.duration = 0),
              (this.totalDuration = 0),
              (this.repeat = 0),
              (this.playState = "idle"),
              (this.finished = new Promise(function (e, t) {
                (n.resolve = e), (n.reject = t);
              })),
              (o = o || Te.easing),
              We(o))
            ) {
              var w = o.createAnimation(r);
              (o = w.easing), (r = w.keyframes || r), (l = w.duration || l);
            }
            (this.repeat = f),
              (this.easing = He(o) ? Ne : at(o)),
              this.updateDuration(l);
            var b = Ye(r, p, He(o) ? o.map(at) : Ne);
            (this.tick = function (e) {
              var r,
                i = 0;
              (i =
                void 0 !== n.pauseTime
                  ? n.pauseTime
                  : (e - n.startTime) * n.rate),
                (n.t = i),
                (i /= 1e3),
                (i = Math.max(i - u, 0)),
                "finished" === n.playState &&
                  void 0 === n.pauseTime &&
                  (i = n.totalDuration);
              var o = i / n.duration,
                a = Math.floor(o),
                l = o % 1;
              !l && o >= 1 && (l = 1), 1 === l && a--;
              var s = a % 2;
              ("reverse" === g ||
                ("alternate" === g && s) ||
                ("alternate-reverse" === g && !s)) &&
                (l = 1 - l);
              var c = i >= n.totalDuration ? 1 : Math.min(l, 1),
                d = b(n.easing(c));
              t(d),
                void 0 === n.pauseTime &&
                ("finished" === n.playState || i >= n.totalDuration + h)
                  ? ((n.playState = "finished"),
                    null === (r = n.resolve) || void 0 === r || r.call(n, d))
                  : "idle" !== n.playState &&
                    (n.frameRequestId = requestAnimationFrame(n.tick));
            }),
              this.play();
          }
          return (
            (0, c.Z)(e, [
              {
                key: "play",
                value: function () {
                  var e = performance.now();
                  (this.playState = "running"),
                    void 0 !== this.pauseTime
                      ? (this.startTime = e - this.pauseTime)
                      : this.startTime || (this.startTime = e),
                    (this.cancelTimestamp = this.startTime),
                    (this.pauseTime = void 0),
                    (this.frameRequestId = requestAnimationFrame(this.tick));
                },
              },
              {
                key: "pause",
                value: function () {
                  (this.playState = "paused"), (this.pauseTime = this.t);
                },
              },
              {
                key: "finish",
                value: function () {
                  (this.playState = "finished"), this.tick(0);
                },
              },
              {
                key: "stop",
                value: function () {
                  var e;
                  (this.playState = "idle"),
                    void 0 !== this.frameRequestId &&
                      cancelAnimationFrame(this.frameRequestId),
                    null === (e = this.reject) ||
                      void 0 === e ||
                      e.call(this, !1);
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.stop(), this.tick(this.cancelTimestamp);
                },
              },
              {
                key: "reverse",
                value: function () {
                  this.rate *= -1;
                },
              },
              { key: "commitStyles", value: function () {} },
              {
                key: "updateDuration",
                value: function (e) {
                  (this.duration = e),
                    (this.totalDuration = e * (this.repeat + 1));
                },
              },
              {
                key: "currentTime",
                get: function () {
                  return this.t;
                },
                set: function (e) {
                  void 0 !== this.pauseTime || 0 === this.rate
                    ? (this.pauseTime = e)
                    : (this.startTime = performance.now() - e / this.rate);
                },
              },
              {
                key: "playbackRate",
                get: function () {
                  return this.rate;
                },
                set: function (e) {
                  this.rate = e;
                },
              },
            ]),
            e
          );
        })(),
        st = function () {};
      var ct = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "setAnimation",
                value: function (e) {
                  var t = this;
                  (this.animation = e),
                    null === e ||
                      void 0 === e ||
                      e.finished
                        .then(function () {
                          return t.clearAnimation();
                        })
                        .catch(function () {});
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.animation = this.generator = void 0;
                },
              },
            ]),
            e
          );
        })(),
        ut = new WeakMap();
      function dt(e) {
        return (
          ut.has(e) || ut.set(e, { transforms: [], values: new Map() }),
          ut.get(e)
        );
      }
      var ht = ["", "X", "Y", "Z"],
        vt = { x: "translateX", y: "translateY", z: "translateZ" },
        ft = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: function (e) {
            return e + "deg";
          },
        },
        pt = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: function (e) {
              return e + "px";
            },
          },
          rotate: ft,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Ne },
          skew: ft,
        },
        mt = new Map(),
        gt = function (e) {
          return "--motion-".concat(e);
        },
        wt = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach(function (e) {
        ht.forEach(function (t) {
          wt.push(e + t), mt.set(gt(e + t), pt[e]);
        });
      });
      var bt = function (e, t) {
          return wt.indexOf(e) - wt.indexOf(t);
        },
        yt = new Set(wt),
        xt = function (e) {
          return yt.has(e);
        },
        kt = function (e, t) {
          vt[t] && (t = vt[t]);
          var n,
            r,
            i = dt(e).transforms;
          (r = t),
            -1 === (n = i).indexOf(r) && n.push(r),
            (e.style.transform = Ct(i));
        },
        Ct = function (e) {
          return e.sort(bt).reduce(Zt, "").trim();
        },
        Zt = function (e, t) {
          return "".concat(e, " ").concat(t, "(var(").concat(gt(t), "))");
        },
        At = function (e) {
          return e.startsWith("--");
        },
        Et = new Set();
      var _t = function (e, t) {
          return document.createElement("div").animate(e, t);
        },
        It = {
          cssRegisterProperty: function () {
            return (
              "undefined" !== typeof CSS &&
              Object.hasOwnProperty.call(CSS, "registerProperty")
            );
          },
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, "animate");
          },
          partialKeyframes: function () {
            try {
              _t({ opacity: [1] });
            } catch (e) {
              return !1;
            }
            return !0;
          },
          finished: function () {
            return Boolean(
              _t({ opacity: [0, 1] }, { duration: 0.001 }).finished
            );
          },
          linearEasing: function () {
            try {
              _t({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (e) {
              return !1;
            }
            return !0;
          },
        },
        Ot = {},
        Mt = {},
        St = function (e) {
          Mt[e] = function () {
            return void 0 === Ot[e] && (Ot[e] = It[e]()), Ot[e];
          };
        };
      for (var Pt in It) St(Pt);
      var Tt = function (e, t) {
          return nt(e)
            ? Mt.linearEasing()
              ? "linear(".concat(
                  (function (e, t) {
                    for (
                      var n = "", r = Math.round(t / 0.015), i = 0;
                      i < r;
                      i++
                    )
                      n += e(Fe(0, r - 1, i)) + ", ";
                    return n.substring(0, n.length - 2);
                  })(e, t),
                  ")"
                )
              : Te.easing
            : rt(e)
            ? Lt(e)
            : e;
        },
        Lt = function (e) {
          var t = (0, p.Z)(e, 4),
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(i, ", ")
            .concat(o, ")");
        };
      var jt = function (e) {
        return Array.isArray(e) ? e : [e];
      };
      function Nt(e) {
        return vt[e] && (e = vt[e]), xt(e) ? gt(e) : e;
      }
      var Rt = {
          get: function (e, t) {
            t = Nt(t);
            var n = At(t)
              ? e.style.getPropertyValue(t)
              : getComputedStyle(e)[t];
            if (!n && 0 !== n) {
              var r = mt.get(t);
              r && (n = r.initialValue);
            }
            return n;
          },
          set: function (e, t, n) {
            (t = Nt(t)), At(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
          },
        },
        Dt = function (e) {
          return "string" === typeof e;
        };
      function Bt(e, t) {
        var n,
          r = (null === t || void 0 === t ? void 0 : t.toDefaultUnit) || Ne,
          i = e[e.length - 1];
        if (Dt(i)) {
          var o =
            (null === (n = i.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n
              ? void 0
              : n[2]) || "";
          o &&
            (r = function (e) {
              return e + o;
            });
        }
        return r;
      }
      function zt(e, t, n) {
        var r,
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a = arguments.length > 4 ? arguments[4] : void 0,
          l = window.__MOTION_DEV_TOOLS_RECORD,
          s = !1 !== i.record && l,
          c = i.duration,
          u = void 0 === c ? Te.duration : c,
          d = i.delay,
          h = void 0 === d ? Te.delay : d,
          v = i.endDelay,
          f = void 0 === v ? Te.endDelay : v,
          p = i.repeat,
          m = void 0 === p ? Te.repeat : p,
          g = i.easing,
          w = void 0 === g ? Te.easing : g,
          b = i.persist,
          y = void 0 !== b && b,
          x = i.direction,
          k = i.offset,
          C = i.allowWebkitAcceleration,
          Z = void 0 !== C && C,
          A = dt(e),
          E = xt(t),
          _ = Mt.waapi();
        E && kt(e, t);
        var I = Nt(t),
          O = (function (e, t) {
            return e.has(t) || e.set(t, new ct()), e.get(t);
          })(A.values, I),
          M = mt.get(I);
        return (
          Re(O.animation, !(We(w) && O.generator) && !1 !== i.record),
          function () {
            var c = function () {
                var t, n;
                return null !==
                  (n =
                    null !== (t = Rt.get(e, I)) && void 0 !== t
                      ? t
                      : null === M || void 0 === M
                      ? void 0
                      : M.initialValue) && void 0 !== n
                  ? n
                  : 0;
              },
              d = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  null === e[n] && (e[n] = n ? e[n - 1] : t());
                return e;
              })(jt(n), c),
              v = Bt(d, M);
            if (We(w)) {
              var p = w.createAnimation(d, "opacity" !== t, c, I, O);
              (w = p.easing), (d = p.keyframes || d), (u = p.duration || u);
            }
            if (
              (At(I) &&
                (Mt.cssRegisterProperty()
                  ? (function (e) {
                      if (!Et.has(e)) {
                        Et.add(e);
                        try {
                          var t = mt.has(e) ? mt.get(e) : {},
                            n = t.syntax,
                            r = t.initialValue;
                          CSS.registerProperty({
                            name: e,
                            inherits: !1,
                            syntax: n,
                            initialValue: r,
                          });
                        } catch (i) {}
                      }
                    })(I)
                  : (_ = !1)),
              E &&
                !Mt.linearEasing() &&
                (nt(w) || (He(w) && w.some(nt))) &&
                (_ = !1),
              _)
            ) {
              var g;
              M &&
                (d = d.map(function (e) {
                  return $e(e) ? M.toDefaultUnit(e) : e;
                })),
                1 !== d.length ||
                  (Mt.partialKeyframes() && !s) ||
                  d.unshift(c());
              var b = {
                delay: Le.ms(h),
                duration: Le.ms(u),
                endDelay: Le.ms(f),
                easing: He(w) ? void 0 : Tt(w, u),
                direction: x,
                iterations: m + 1,
                fill: "both",
              };
              (r = e.animate(
                ((g = {}),
                (0, o.Z)(g, I, d),
                (0, o.Z)(g, "offset", k),
                (0, o.Z)(
                  g,
                  "easing",
                  He(w)
                    ? w.map(function (e) {
                        return Tt(e, u);
                      })
                    : void 0
                ),
                g),
                b
              )).finished ||
                (r.finished = new Promise(function (e, t) {
                  (r.onfinish = e), (r.oncancel = t);
                }));
              var C = d[d.length - 1];
              r.finished
                .then(function () {
                  y || (Rt.set(e, I, C), r.cancel());
                })
                .catch(je),
                Z || (r.playbackRate = 1.000001);
            } else if (a && E)
              1 ===
                (d = d.map(function (e) {
                  return "string" === typeof e ? parseFloat(e) : e;
                })).length && d.unshift(parseFloat(c())),
                (r = new a(
                  function (t) {
                    Rt.set(e, I, v ? v(t) : t);
                  },
                  d,
                  Object.assign(Object.assign({}, i), {
                    duration: u,
                    easing: w,
                  })
                ));
            else {
              var A = d[d.length - 1];
              Rt.set(e, I, M && $e(A) ? M.toDefaultUnit(A) : A);
            }
            return (
              s &&
                l(
                  e,
                  t,
                  d,
                  { duration: u, delay: h, easing: w, repeat: m, offset: k },
                  "motion-one"
                ),
              O.setAnimation(r),
              r
            );
          }
        );
      }
      var Ut = function (e, t) {
        return e[t]
          ? Object.assign(Object.assign({}, e), e[t])
          : Object.assign({}, e);
      };
      function Wt(e, t, n) {
        return nt(e) ? e(t, n) : e;
      }
      var $t,
        Ht =
          (($t = lt),
          function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            e = (function (e, t) {
              var n;
              return (
                "string" === typeof e
                  ? t
                    ? ((null !== (n = t[e]) && void 0 !== n) ||
                        (t[e] = document.querySelectorAll(e)),
                      (e = t[e]))
                    : (e = document.querySelectorAll(e))
                  : e instanceof Element && (e = [e]),
                Array.from(e || [])
              );
            })(e);
            var r = e.length;
            st(Boolean(r), "No valid element provided."),
              st(Boolean(t), "No keyframes defined.");
            for (var i = [], o = 0; o < r; o++) {
              var a = e[o];
              for (var l in t) {
                var s = Ut(n, l);
                s.delay = Wt(s.delay, o, r);
                var c = zt(a, l, t[l], s, $t);
                i.push(c);
              }
            }
            return Be(i, n, n.duration);
          });
      function Vt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Be(
          [
            function () {
              var n = new lt(e, [0, 1], t);
              return n.finished.catch(function () {}), n;
            },
          ],
          t,
          t.duration
        );
      }
      function Ft(e, t, n) {
        return (nt(e) ? Vt : Ht)(e, t, n);
      }
      var qt = { stiffness: 100, damping: 10, mass: 1 },
        Gt = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : qt.stiffness,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : qt.damping,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : qt.mass;
          return t / (2 * Math.sqrt(e * n));
        };
      var Kt = 5;
      function Yt(e, t, n) {
        var r,
          i,
          o = Math.max(t - Kt, 0);
        return (r = n - e(o)), (i = t - o) ? r * (1e3 / i) : 0;
      }
      var Jt = 10,
        Qt = 1e4;
      function Xt(e) {
        return $e(e) && !isNaN(e);
      }
      function en(e) {
        return Dt(e) ? parseFloat(e) : e;
      }
      var tn,
        nn,
        rn,
        on,
        an,
        ln,
        sn,
        cn,
        un,
        dn,
        hn,
        vn,
        fn,
        pn,
        mn,
        gn,
        wn,
        bn,
        yn,
        xn,
        kn,
        Cn,
        Zn,
        An,
        En,
        _n,
        In,
        On,
        Mn,
        Sn,
        Pn,
        Tn,
        Ln,
        jn,
        Nn,
        Rn,
        Dn,
        Bn,
        zn,
        Un,
        Wn,
        $n,
        Hn,
        Vn,
        Fn,
        qn,
        Gn,
        Kn,
        Yn,
        Jn,
        Qn,
        Xn,
        er,
        tr,
        nr,
        rr,
        ir,
        or,
        ar,
        lr,
        sr,
        cr,
        ur,
        dr,
        hr,
        vr,
        fr,
        pr,
        mr,
        gr,
        wr,
        br,
        yr,
        xr,
        kr,
        Cr,
        Zr,
        Ar,
        Er,
        _r,
        Ir,
        Or,
        Mr,
        Sr,
        Pr,
        Tr,
        Lr,
        jr,
        Nr,
        Rr,
        Dr,
        Br,
        zr,
        Ur,
        Wr,
        $r,
        Hr,
        Vr,
        Fr,
        qr,
        Gr,
        Kr,
        Yr,
        Jr,
        Qr,
        Xr,
        ei,
        ti,
        ni,
        ri,
        ii,
        oi,
        ai,
        li,
        si,
        ci,
        ui,
        di,
        hi,
        vi,
        fi,
        pi,
        mi,
        gi,
        wi,
        bi,
        yi,
        xi,
        ki,
        Ci,
        Zi,
        Ai,
        Ei,
        _i,
        Ii,
        Oi,
        Mi,
        Si,
        Pi,
        Ti,
        Li,
        ji,
        Ni,
        Ri,
        Di,
        Bi,
        zi,
        Ui,
        Wi,
        $i,
        Hi,
        Vi,
        Fi,
        qi,
        Gi,
        Ki,
        Yi,
        Ji,
        Qi,
        Xi,
        eo,
        to,
        no,
        ro,
        io,
        oo,
        ao,
        lo,
        so,
        co,
        uo,
        ho,
        vo,
        fo,
        po,
        mo,
        go,
        wo,
        bo,
        yo,
        xo,
        ko,
        Co,
        Zo,
        Ao,
        Eo,
        _o,
        Io,
        Oo,
        Mo,
        So,
        Po,
        To,
        Lo,
        jo,
        No = (function (e) {
          var t = new WeakMap();
          return function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = new Map(),
              i = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  a =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  l = "".concat(t, "-").concat(i, "-").concat(o, "-").concat(a);
                return (
                  r.has(l) ||
                    r.set(
                      l,
                      e(
                        Object.assign(
                          {
                            from: t,
                            to: i,
                            velocity: o,
                            restSpeed: a ? 0.05 : 2,
                            restDistance: a ? 0.01 : 0.5,
                          },
                          n
                        )
                      )
                    ),
                  r.get(l)
                );
              },
              o = function (e, n) {
                return (
                  t.has(e) ||
                    t.set(
                      e,
                      (function (e) {
                        for (
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : Ne,
                            n = void 0,
                            r = Jt,
                            i = e(0),
                            o = [t(i.current)];
                          !i.done && r < Qt;

                        )
                          (i = e(r)),
                            o.push(t(i.done ? i.target : i.current)),
                            void 0 === n && i.hasReachedTarget && (n = r),
                            (r += Jt);
                        var a = r - Jt;
                        return (
                          1 === o.length && o.push(i.current),
                          {
                            keyframes: o,
                            duration: a / 1e3,
                            overshootDuration:
                              (null !== n && void 0 !== n ? n : a) / 1e3,
                          }
                        );
                      })(e, n)
                    ),
                  t.get(e)
                );
              };
            return {
              createAnimation: function (e) {
                var t,
                  n,
                  r,
                  a =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  l = arguments.length > 2 ? arguments[2] : void 0,
                  s = arguments.length > 3 ? arguments[3] : void 0,
                  c = arguments.length > 4 ? arguments[4] : void 0,
                  u = 0,
                  d = Ne,
                  h = e.length;
                if (a)
                  if (
                    ((d = Bt(e, s ? mt.get(Nt(s)) : void 0)),
                    (r = en(e[h - 1])),
                    h > 1 && null !== e[0])
                  )
                    n = en(e[0]);
                  else {
                    var v = null === c || void 0 === c ? void 0 : c.generator;
                    if (v) {
                      var f = c.animation,
                        p = c.generatorStartTime,
                        m =
                          (null === f || void 0 === f ? void 0 : f.startTime) ||
                          p ||
                          0,
                        g =
                          (null === f || void 0 === f
                            ? void 0
                            : f.currentTime) || performance.now() - m,
                        w = v(g).current;
                      (n = w),
                        (u = Yt(
                          function (e) {
                            return v(e).current;
                          },
                          g,
                          w
                        ));
                    } else l && (n = en(l()));
                  }
                if (Xt(n) && Xt(r)) {
                  var b = i(
                    n,
                    r,
                    u,
                    null === s || void 0 === s ? void 0 : s.includes("scale")
                  );
                  (t = Object.assign(Object.assign({}, o(b, d)), {
                    easing: "linear",
                  })),
                    c &&
                      ((c.generator = b),
                      (c.generatorStartTime = performance.now()));
                }
                t ||
                  (t = {
                    easing: "ease",
                    duration: o(i(0, 100)).overshootDuration,
                  });
                return t;
              },
            };
          };
        })(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.stiffness,
            n = void 0 === t ? qt.stiffness : t,
            r = e.damping,
            i = void 0 === r ? qt.damping : r,
            o = e.mass,
            a = void 0 === o ? qt.mass : o,
            l = e.from,
            s = void 0 === l ? 0 : l,
            c = e.to,
            u = void 0 === c ? 1 : c,
            d = e.velocity,
            h = void 0 === d ? 0 : d,
            v = e.restSpeed,
            f = void 0 === v ? 2 : v,
            p = e.restDistance,
            m = void 0 === p ? 0.5 : p;
          h = h ? Le.s(h) : 0;
          var g,
            w = { done: !1, hasReachedTarget: !1, current: s, target: u },
            b = u - s,
            y = Math.sqrt(n / a) / 1e3,
            x = Gt(n, i, a);
          if (x < 1) {
            var k = y * Math.sqrt(1 - x * x);
            g = function (e) {
              return (
                u -
                Math.exp(-x * y * e) *
                  (((x * y * b - h) / k) * Math.sin(k * e) +
                    b * Math.cos(k * e))
              );
            };
          } else
            g = function (e) {
              return u - Math.exp(-y * e) * (b + (y * b - h) * e);
            };
          return function (e) {
            w.current = g(e);
            var t,
              n,
              r,
              i = 0 === e ? h : Yt(g, e, w.current),
              o = Math.abs(i) <= f,
              a = Math.abs(u - w.current) <= m;
            return (
              (w.done = o && a),
              (w.hasReachedTarget =
                ((t = s),
                (n = u),
                (r = w.current),
                (t < n && r >= n) || (t > n && r <= n))),
              w
            );
          };
        }),
        Ro = function (e) {
          return null != e ? e : te;
        },
        Do = n(20741),
        Bo = Object.defineProperty,
        zo = Object.getOwnPropertySymbols,
        Uo = Object.prototype.hasOwnProperty,
        Wo = Object.prototype.propertyIsEnumerable,
        $o = function (e, t, n) {
          return t in e
            ? Bo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        Ho = function (e, t) {
          for (var n in t || (t = {})) Uo.call(t, n) && $o(e, n, t[n]);
          if (zo) {
            var r,
              i = (0, m.Z)(zo(t));
            try {
              for (i.s(); !(r = i.n()).done; ) {
                n = r.value;
                Wo.call(t, n) && $o(e, n, t[n]);
              }
            } catch (o) {
              i.e(o);
            } finally {
              i.f();
            }
          }
          return e;
        };
      var Vo = {
          color: function () {
            var e,
              t,
              n = null != (e = Oe.t0.state.themeColor) ? e : "default",
              r = null != (t = Oe.t0.state.themeMode) ? t : "dark",
              i = {
                default: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(51,150,255)",
                    background: "rgb(232,242,252)",
                  },
                  dark: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(71,161,255)",
                    background: "rgb(21,38,55)",
                  },
                },
                magenta: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(198,83,128)",
                    background: "rgb(244,221,230)",
                  },
                  dark: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(203,77,140)",
                    background: "rgb(57,35,43)",
                  },
                },
                blue: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(61,92,245)",
                    background: "rgb(232,235,252)",
                  },
                  dark: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(81,109,251)",
                    background: "rgb(28,33,59)",
                  },
                },
                orange: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(234,140,46)",
                    background: "rgb(244,236,221)",
                  },
                  dark: {
                    inverse: "rgb(0,0,0)",
                    foreground: "rgb(255,166,76)",
                    background: "rgb(57,50,34)",
                  },
                },
                green: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(38,181,98)",
                    background: "rgb(218,246,218)",
                  },
                  dark: {
                    inverse: "rgb(0,0,0)",
                    foreground: "rgb(38,217,98)",
                    background: "rgb(35,52,40)",
                  },
                },
                purple: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(121,76,255)",
                    background: "rgb(225,218,246)",
                  },
                  dark: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(144,110,247)",
                    background: "rgb(36,31,51)",
                  },
                },
                teal: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(43,182,182)",
                    background: "rgb(217,242,238)",
                  },
                  dark: {
                    inverse: "rgb(0,0,0)",
                    foreground: "rgb(54,226,226)",
                    background: "rgb(29,48,52)",
                  },
                },
                blackWhite: {
                  light: {
                    inverse: "rgb(255,255,255)",
                    foreground: "rgb(20,20,20)",
                    background: "rgb(255,255,255)",
                  },
                  dark: {
                    inverse: "rgb(0,0,0)",
                    foreground: "rgb(255,255,255)",
                    background: "rgb(20,20,20)",
                  },
                },
              }[n][r],
              o = {
                light: {
                  foreground: {
                    1: "rgb(20,20,20)",
                    2: "rgb(121,134,134)",
                    3: "rgb(158,169,169)",
                  },
                  background: {
                    1: "rgb(255,255,255)",
                    2: "rgb(241,243,243)",
                    3: "rgb(228,231,231)",
                  },
                  overlay: "rgba(0,0,0,0.1)",
                },
                dark: {
                  foreground: {
                    1: "rgb(228,231,231)",
                    2: "rgb(148,158,158)",
                    3: "rgb(110,119,119)",
                  },
                  background: {
                    1: "rgb(20,20,20)",
                    2: "rgb(39,42,42)",
                    3: "rgb(59,64,64)",
                  },
                  overlay: "rgba(255,255,255,0.1",
                },
              }[r],
              a = {
                default: {
                  1: "#B6B9C9",
                  2: "#C653C6",
                  3: "#794DFF",
                  4: "#2EB8B8",
                },
                blue: {
                  1: "#E8EBFD",
                  2: "#C653C6",
                  3: "#2DD2C5",
                  4: "#3D5CF5",
                },
                magenta: {
                  1: "#F4DDE6",
                  2: "#E0D452",
                  3: "#F09475",
                  4: "#D1618D",
                },
                orange: {
                  1: "#F4ECDD",
                  2: "#B4EB47",
                  3: "#3075E8",
                  4: "#EB9947",
                },
                green: {
                  1: "#DAF6DA",
                  2: "#E06B92",
                  3: "#99E54D",
                  4: "#26B562",
                },
                purple: {
                  1: "#E1DAF6",
                  2: "#EB9947",
                  3: "#E06B92",
                  4: "#794DFF",
                },
                teal: {
                  1: "#D9F2EE",
                  2: "#F09475",
                  3: "#794DFF",
                  4: "#2EB8B8",
                },
                blackWhite: {
                  1: "#E3E8E8",
                  2: "#98AEAE",
                  3: "#516767",
                  4: "#242E2E",
                },
              }[n];
            return {
              foreground: Ho(
                { accent: i.foreground, inverse: i.inverse },
                o.foreground
              ),
              background: Ho({ accent: i.background }, o.background),
              gradient: a,
              overlay: o.overlay,
              error: "rgb(242, 90, 103)",
            };
          },
          setTheme: function () {
            var e = document.querySelector(":root"),
              t = Oe.t0.state.themeZIndex;
            if (e) {
              var n = {
                "--w3m-color-fg-accent": Vo.color().foreground.accent,
                "--w3m-color-fg-inverse": Vo.color().foreground.inverse,
                "--w3m-color-fg-1": Vo.color().foreground[1],
                "--w3m-color-fg-2": Vo.color().foreground[2],
                "--w3m-color-fg-3": Vo.color().foreground[3],
                "--w3m-color-bg-1": Vo.color().background[1],
                "--w3m-color-bg-2": Vo.color().background[2],
                "--w3m-color-bg-3": Vo.color().background[3],
                "--w3m-color-overlay": Vo.color().overlay,
                "--w3m-color-err": Vo.color().error,
                "--w3m-color-success": "rgb(38,181,98)",
                "--w3m-gradient-1": Vo.color().gradient[1],
                "--w3m-gradient-2": Vo.color().gradient[2],
                "--w3m-gradient-3": Vo.color().gradient[3],
                "--w3m-gradient-4": Vo.color().gradient[4],
                "--w3m-modal-z-index": "".concat(t),
              };
              Object.entries(n).forEach(function (t) {
                var n = (0, p.Z)(t, 2),
                  r = n[0],
                  i = n[1];
                return e.style.setProperty(r, i);
              });
            }
          },
          globalCss: C(
            tn ||
              (tn = h([
                "*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent}button::after{content:'';position:absolute;inset:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-color-fg-inverse);background:var(--w3m-color-fg-accent)}",
              ]))
          ),
        },
        Fo = C(
          nn ||
            (nn = h([
              "button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-fg-accent);border-radius:50%;margin-bottom:4px}button path{fill:var(--w3m-color-fg-inverse)}",
            ]))
        ),
        qo = Object.defineProperty,
        Go = Object.getOwnPropertyDescriptor,
        Ko = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Go(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && qo(t, n, o), o;
        },
        Yo = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).icon = void 0),
              (e.label = ""),
              (e.onClick = function () {
                return null;
              }),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  return Q(
                    rn ||
                      (rn = h([
                        '<button @click="',
                        '"><div>',
                        '</div><w3m-text variant="xsmall-normal" color="accent">',
                        "</w3m-text></button>",
                      ])),
                    this.onClick,
                    this.icon,
                    this.label
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Yo.styles = [Vo.globalCss, Fo]),
        Ko([_e()], Yo.prototype, "icon", 2),
        Ko([_e()], Yo.prototype, "label", 2),
        Ko([_e()], Yo.prototype, "onClick", 2),
        (Yo = Ko([Ze("w3m-box-button")], Yo));
      var Jo = C(
          on ||
            (on = h([
              "button{border-radius:28px;height:28px;padding:0 10px;background-color:var(--w3m-color-fg-accent)}button path{fill:var(--w3m-color-fg-inverse)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3)}",
            ]))
        ),
        Qo = Object.defineProperty,
        Xo = Object.getOwnPropertyDescriptor,
        ea = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Xo(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Qo(t, n, o), o;
        },
        ta = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).disabled = !1),
              (e.iconLeft = void 0),
              (e.iconRight = void 0),
              (e.onClick = function () {
                return null;
              }),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = {
                    "w3m-icon-left": void 0 !== this.iconLeft,
                    "w3m-icon-right": void 0 !== this.iconRight,
                  };
                  return Q(
                    an ||
                      (an = h([
                        '<button class="',
                        '" ?disabled="',
                        '" @click="',
                        '">',
                        '<w3m-text variant="small-normal" color="inverse"><slot></slot></w3m-text>',
                        "</button>",
                      ])),
                    Pe(e),
                    this.disabled,
                    this.onClick,
                    this.iconLeft,
                    this.iconRight
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (ta.styles = [Vo.globalCss, Jo]),
        ea([_e()], ta.prototype, "disabled", 2),
        ea([_e()], ta.prototype, "iconLeft", 2),
        ea([_e()], ta.prototype, "iconRight", 2),
        ea([_e()], ta.prototype, "onClick", 2),
        (ta = ea([Ze("w3m-button")], ta));
      var na = C(
          ln ||
            (ln = h([
              ":host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-color-fg-accent);background-color:transparent}.w3m-secondary::after{display:none}",
            ]))
        ),
        ra = Object.defineProperty,
        ia = Object.getOwnPropertyDescriptor,
        oa = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ia(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && ra(t, n, o), o;
        },
        aa = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).disabled = !1),
              (e.variant = "primary"),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = { "w3m-secondary": "secondary" === this.variant };
                  return Q(
                    sn ||
                      (sn = h([
                        '<button ?disabled="',
                        '" class="',
                        '"><slot></slot></button>',
                      ])),
                    this.disabled,
                    Pe(e)
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (aa.styles = [Vo.globalCss, na]),
        oa([_e()], aa.prototype, "disabled", 2),
        oa([_e()], aa.prototype, "variant", 2),
        (aa = oa([Ze("w3m-button-big")], aa));
      var la = (function () {
        function e() {
          var t = this;
          (0, s.Z)(this, e),
            (this.angle = 0),
            (this.t = 1253106),
            (this.last = 0),
            (this.height = 500),
            (this.amp = 300),
            (this.seed = 15),
            (this.freqX = 14e-5),
            (this.freqY = 29e-5),
            (this.freqDelta = 1e-5),
            (this.activeColors = [1, 1, 1, 1]),
            (this.isMetaKey = !1),
            (this.playing = !1),
            ca(this, "resize", function () {
              (t.width = window.innerWidth),
                t.minigl.setSize(t.width, t.height),
                t.minigl.setOrthographicCamera(),
                (t.xSegCount = Math.ceil(t.width * t.conf.density[0])),
                (t.ySegCount = Math.ceil(t.height * t.conf.density[1])),
                t.mesh.geometry.setTopology(t.xSegCount, t.ySegCount),
                t.mesh.geometry.setSize(t.width, t.height),
                (t.mesh.material.uniforms.u_shadow_power.value =
                  t.width < 550 ? 5 : 6);
            }),
            ca(this, "animate", function (e) {
              if (t.playing) {
                if (
                  (t.shouldSkipFrame(e) ||
                    ((t.t += Math.min(e - t.last, 1e3 / 15)),
                    (t.last = e),
                    (t.mesh.material.uniforms.u_time.value = t.t),
                    t.minigl.render()),
                  0 !== t.last && t.isStatic)
                )
                  return t.minigl.render();
                requestAnimationFrame(t.animate);
              }
            });
        }
        return (
          (0, c.Z)(e, [
            {
              key: "play",
              value: function (e) {
                (this.el = e), this.connect();
              },
            },
            {
              key: "stop",
              value: function () {
                this.playing = !1;
              },
            },
            {
              key: "connect",
              value: (function () {
                var e = (0, l.Z)(
                  (0, a.Z)().mark(function e() {
                    var t = this;
                    return (0, a.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (this.shaderFiles = {
                                vertex:
                                  "varying vec3 v_color;void main(){float time=u_time*u_global.noiseSpeed;vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;vec2 st=1.-uvNorm.xy;float tilt=resolution.y/2.0*uvNorm.y;float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);float noise=snoise(vec3(noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,noiseCoord.y*u_vertDeform.noiseFreq.y,time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed))*u_vertDeform.noiseAmp;noise*=1.0-pow(abs(uvNorm.y),2.0);noise=max(0.0,noise);vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);if(u_active_colors[0]==1.){v_color=u_baseColor;}for(int i=0;i<u_waveLayers_length;i++){if(u_active_colors[i+1]==1.){WaveLayers layer=u_waveLayers[i];float noise=smoothstep(layer.noiseFloor,layer.noiseCeil,snoise(vec3(noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,noiseCoord.y*layer.noiseFreq.y,time*layer.noiseSpeed+layer.noiseSeed))/2.0+0.5);v_color=blendNormal(v_color,layer.color,pow(noise,4.));}}gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}",
                                noise:
                                  "\n// MIT License: Copyright (C) 2011 Ashima Arts. All rights reserved. https://github.com/ashima/webgl-noise, https://github.com/stegu/webgl-noise\nvec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}",
                                blend:
                                  "\n// MIT Licence: Copyright (C) 2015 Jamie Owen. All rights reserved. https://github.com/jamieowen/glsl-blend\nvec3 blendNormal(vec3 base, vec3 blend){return blend;}vec3 blendNormal(vec3 base,vec3 blend,float opacity){return (blendNormal(base,blend)*opacity+base*(1.0-opacity));}float blendScreen(float base,float blend){return 1.0-((1.0-base)*(1.0-blend));}vec3 blendScreen(vec3 base,vec3 blend){return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));}vec3 blendScreen(vec3 base,vec3 blend,float opacity){return (blendScreen(base, blend)*opacity+base*(1.0-opacity));}vec3 blendMultiply(vec3 base,vec3 blend){return base*blend;}vec3 blendMultiply(vec3 base,vec3 blend,float opacity){return (blendMultiply(base,blend)*opacity+base*(1.0-opacity));}float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return (blendOverlay(base,blend)*opacity+base*(1.0-opacity));}vec3 blendHardLight(vec3 base,vec3 blend){return blendOverlay(blend,base);}vec3 blendHardLight(vec3 base,vec3 blend,float opacity){return (blendHardLight(base,blend)*opacity+base*(1.0-opacity));}float blendSoftLight(float base,float blend){return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));}vec3 blendSoftLight(vec3 base,vec3 blend){return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));}vec3 blendSoftLight(vec3 base,vec3 blend,float opacity){return (blendSoftLight(base,blend)*opacity+base*(1.0-opacity));}float blendColorDodge(float base,float blend){return (blend==1.0)?blend:min(base/(1.0-blend),1.0);}vec3 blendColorDodge(vec3 base,vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(vec3 base,vec3 blend,float opacity){return (blendColorDodge(base, blend)*opacity+base*(1.0-opacity));}float blendColorBurn(float base,float blend){return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);}vec3 blendColorBurn(vec3 base,vec3 blend){return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));}vec3 blendColorBurn(vec3 base,vec3 blend,float opacity){return (blendColorBurn(base, blend)*opacity+base*(1.0-opacity));}float blendVividLight(float base,float blend){return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));}vec3 blendVividLight(vec3 base,vec3 blend){return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));}vec3 blendVividLight(vec3 base,vec3 blend,float opacity){return (blendVividLight(base,blend)*opacity+base*(1.0-opacity));}float blendLighten(float base,float blend){return max(blend,base);}vec3 blendLighten(vec3 base,vec3 blend){return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));}vec3 blendLighten(vec3 base,vec3 blend,float opacity){return (blendLighten(base,blend)*opacity+base*(1.0-opacity));}float blendLinearBurn(float base,float blend){return max(base+blend-1.0,0.0);}vec3 blendLinearBurn(vec3 base,vec3 blend){return max(base+blend-vec3(1.0),vec3(0.0));}vec3 blendLinearBurn(vec3 base,vec3 blend,float opacity){return (blendLinearBurn(base, blend)*opacity+base*(1.0-opacity));}float blendLinearDodge(float base,float blend){return min(base+blend,1.0);}vec3 blendLinearDodge(vec3 base,vec3 blend){return min(base+blend,vec3(1.0));}vec3 blendLinearDodge(vec3 base,vec3 blend,float opacity){return (blendLinearDodge(base,blend)*opacity+base*(1.0-opacity));}float blendLinearLight(float base,float blend){return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));}vec3 blendLinearLight(vec3 base,vec3 blend){return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));}vec3 blendLinearLight(vec3 base,vec3 blend,float opacity){return (blendLinearLight(base,blend)*opacity+base*(1.0-opacity));}",
                                fragment:
                                  "varying vec3 v_color;void main(){vec3 color=v_color;if(u_darken_top==1.0){vec2 st=gl_FragCoord.xy/resolution.xy;color.g-=pow(st.y+sin(-12.0)*st.x,u_shadow_power)*0.4;}gl_FragColor=vec4(color,1.0);}",
                              }),
                                (this.conf = { density: [0.06, 0.16] }),
                                (this.minigl = new ua(this.el, null, null, !0)),
                                requestAnimationFrame(function () {
                                  t.el &&
                                    ((t.computedCanvasStyle = getComputedStyle(
                                      t.el
                                    )),
                                    t.waitForCssVars());
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "initMaterial",
              value: function () {
                this.uniforms = {
                  u_time: new this.minigl.Uniform({ value: 0 }),
                  u_shadow_power: new this.minigl.Uniform({ value: 5 }),
                  u_darken_top: new this.minigl.Uniform({
                    value: "" === this.el.dataset.jsDarkenTop ? 1 : 0,
                  }),
                  u_active_colors: new this.minigl.Uniform({
                    value: this.activeColors,
                    type: "vec4",
                  }),
                  u_global: new this.minigl.Uniform({
                    value: {
                      noiseFreq: new this.minigl.Uniform({
                        value: [this.freqX, this.freqY],
                        type: "vec2",
                      }),
                      noiseSpeed: new this.minigl.Uniform({ value: 5e-6 }),
                    },
                    type: "struct",
                  }),
                  u_vertDeform: new this.minigl.Uniform({
                    value: {
                      incline: new this.minigl.Uniform({
                        value: Math.sin(this.angle) / Math.cos(this.angle),
                      }),
                      offsetTop: new this.minigl.Uniform({ value: -0.5 }),
                      offsetBottom: new this.minigl.Uniform({ value: -0.5 }),
                      noiseFreq: new this.minigl.Uniform({
                        value: [3, 4],
                        type: "vec2",
                      }),
                      noiseAmp: new this.minigl.Uniform({ value: this.amp }),
                      noiseSpeed: new this.minigl.Uniform({ value: 10 }),
                      noiseFlow: new this.minigl.Uniform({ value: 3 }),
                      noiseSeed: new this.minigl.Uniform({ value: this.seed }),
                    },
                    type: "struct",
                    excludeFrom: "fragment",
                  }),
                  u_baseColor: new this.minigl.Uniform({
                    value: this.sectionColors[0],
                    type: "vec3",
                    excludeFrom: "fragment",
                  }),
                  u_waveLayers: new this.minigl.Uniform({
                    value: [],
                    excludeFrom: "fragment",
                    type: "array",
                  }),
                };
                for (var e = 1; e < this.sectionColors.length; e += 1)
                  this.uniforms.u_waveLayers.value.push(
                    new this.minigl.Uniform({
                      value: {
                        color: new this.minigl.Uniform({
                          value: this.sectionColors[e],
                          type: "vec3",
                        }),
                        noiseFreq: new this.minigl.Uniform({
                          value: [
                            2 + e / this.sectionColors.length,
                            3 + e / this.sectionColors.length,
                          ],
                          type: "vec2",
                        }),
                        noiseSpeed: new this.minigl.Uniform({
                          value: 11 + 0.3 * e,
                        }),
                        noiseFlow: new this.minigl.Uniform({
                          value: 6.5 + 0.3 * e,
                        }),
                        noiseSeed: new this.minigl.Uniform({
                          value: this.seed + 10 * e,
                        }),
                        noiseFloor: new this.minigl.Uniform({ value: 0.1 }),
                        noiseCeil: new this.minigl.Uniform({
                          value: 0.63 + 0.07 * e,
                        }),
                      },
                      type: "struct",
                    })
                  );
                return (
                  (this.vertexShader = [
                    this.shaderFiles.noise,
                    this.shaderFiles.blend,
                    this.shaderFiles.vertex,
                  ].join("")),
                  new this.minigl.Material(
                    this.vertexShader,
                    this.shaderFiles.fragment,
                    this.uniforms
                  )
                );
              },
            },
            {
              key: "initMesh",
              value: function () {
                (this.material = this.initMaterial()),
                  (this.geometry = new this.minigl.PlaneGeometry()),
                  (this.mesh = new this.minigl.Mesh(
                    this.geometry,
                    this.material
                  ));
              },
            },
            {
              key: "shouldSkipFrame",
              value: function (e) {
                return (
                  !!window.document.hidden || parseInt(e, 10) % 2 == 0 || void 0
                );
              },
            },
            {
              key: "updateFrequency",
              value: function (e) {
                (this.freqX += e), (this.freqY += e);
              },
            },
            {
              key: "toggleColor",
              value: function (e) {
                this.activeColors[e] = 0 === this.activeColors[e] ? 1 : 0;
              },
            },
            {
              key: "init",
              value: function () {
                (this.playing = !0),
                  this.initGradientColors(),
                  this.initMesh(),
                  this.resize(),
                  requestAnimationFrame(this.animate);
              },
            },
            {
              key: "waitForCssVars",
              value: function () {
                this.computedCanvasStyle &&
                  this.computedCanvasStyle
                    .getPropertyValue("--w3m-gradient-1")
                    .indexOf("#"),
                  this.init();
              },
            },
            {
              key: "initGradientColors",
              value: function () {
                var e = this;
                this.sectionColors = [
                  "--w3m-gradient-1",
                  "--w3m-gradient-2",
                  "--w3m-gradient-3",
                  "--w3m-gradient-4",
                ]
                  .map(function (t) {
                    var n = e.computedCanvasStyle.getPropertyValue(t).trim();
                    return (
                      4 === n.length &&
                        (n = "#".concat(
                          n
                            .substr(1)
                            .split("")
                            .map(function (e) {
                              return e + e;
                            })
                            .join("")
                        )),
                      n && "0x".concat(n.substr(1))
                    );
                  })
                  .filter(Boolean)
                  .map(sa);
              },
            },
          ]),
          e
        );
      })();
      function sa(e) {
        return [
          ((e >> 16) & 255) / 255,
          ((e >> 8) & 255) / 255,
          (255 & e) / 255,
        ];
      }
      function ca(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ua = (function () {
          function e(t, n, r) {
            (0, s.Z)(this, e);
            var i = this;
            (i.canvas = t),
              (i.gl = i.canvas.getContext("webgl", { antialias: !0 })),
              (i.meshes = []);
            var o = i.gl;
            n && r && this.setSize(n, r),
              Object.defineProperties(i, {
                Material: {
                  enumerable: !1,
                  value: (function () {
                    function e(t, n) {
                      var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      (0, s.Z)(this, e);
                      var a = this;
                      function l(e, t) {
                        var n = o.createShader(e);
                        return (
                          o.shaderSource(n, t),
                          o.compileShader(n),
                          o.getShaderParameter(n, o.COMPILE_STATUS) ||
                            console.error(o.getShaderInfoLog(n)),
                          n
                        );
                      }
                      function c(e, t) {
                        return Object.entries(e)
                          .map(function (e) {
                            var n = (0, p.Z)(e, 2),
                              r = n[0];
                            return n[1].getDeclaration(r, t);
                          })
                          .join("");
                      }
                      (a.uniforms = r), (a.uniformInstances = []);
                      var u = "precision highp float;";
                      (a.vertexSource = ""
                        .concat(
                          u,
                          " attribute vec4 position;attribute vec2 uv;attribute vec2 uvNorm;"
                        )
                        .concat(c(i.commonUniforms, "vertex"), " ")
                        .concat(c(r, "vertex"), " ")
                        .concat(t)),
                        (a.Source = ""
                          .concat(u, " ")
                          .concat(c(i.commonUniforms, "fragment"), " ")
                          .concat(c(r, "fragment"), " ")
                          .concat(n, " ")),
                        (a.vertexShader = l(o.VERTEX_SHADER, a.vertexSource)),
                        (a.fragmentShader = l(o.FRAGMENT_SHADER, a.Source)),
                        (a.program = o.createProgram()),
                        o.attachShader(a.program, a.vertexShader),
                        o.attachShader(a.program, a.fragmentShader),
                        o.linkProgram(a.program),
                        o.getProgramParameter(a.program, o.LINK_STATUS) ||
                          console.error(o.getProgramInfoLog(a.program)),
                        o.useProgram(a.program),
                        a.attachUniforms(void 0, i.commonUniforms),
                        a.attachUniforms(void 0, a.uniforms);
                    }
                    return (
                      (0, c.Z)(e, [
                        {
                          key: "attachUniforms",
                          value: function (e, t) {
                            var n = this;
                            void 0 === e
                              ? Object.entries(t).forEach(function (e) {
                                  var t = (0, p.Z)(e, 2),
                                    r = t[0],
                                    i = t[1];
                                  n.attachUniforms(r, i);
                                })
                              : "array" == t.type
                              ? t.value.forEach(function (t, r) {
                                  return n.attachUniforms(
                                    "".concat(e, "[").concat(r, "]"),
                                    t
                                  );
                                })
                              : "struct" == t.type
                              ? Object.entries(t.value).forEach(function (t) {
                                  var r = (0, p.Z)(t, 2),
                                    i = r[0],
                                    o = r[1];
                                  return n.attachUniforms(
                                    "".concat(e, ".").concat(i),
                                    o
                                  );
                                })
                              : n.uniformInstances.push({
                                  uniform: t,
                                  location: o.getUniformLocation(n.program, e),
                                });
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                },
                Uniform: {
                  enumerable: !1,
                  value: (function () {
                    function e(t) {
                      (0, s.Z)(this, e),
                        (this.type = "float"),
                        Object.assign(this, t),
                        (this.typeFn =
                          {
                            float: "1f",
                            int: "1i",
                            vec2: "2fv",
                            vec3: "3fv",
                            vec4: "4fv",
                            mat4: "Matrix4fv",
                          }[this.type] || "1f"),
                        this.update();
                    }
                    return (
                      (0, c.Z)(e, [
                        {
                          key: "update",
                          value: function (e) {
                            void 0 !== this.value &&
                              o["uniform".concat(this.typeFn)](
                                e,
                                0 === this.typeFn.indexOf("Matrix")
                                  ? this.transpose
                                  : this.value,
                                0 === this.typeFn.indexOf("Matrix")
                                  ? this.value
                                  : null
                              );
                          },
                        },
                        {
                          key: "getDeclaration",
                          value: function (e, t, n) {
                            var r = this;
                            if (r.excludeFrom !== t) {
                              if ("array" === r.type)
                                return (
                                  r.value[0].getDeclaration(
                                    e,
                                    t,
                                    r.value.length
                                  ) +
                                  "const int "
                                    .concat(e, "_length=")
                                    .concat(r.value.length, ";")
                                );
                              if ("struct" === r.type) {
                                var i = e.replace("u_", "");
                                return (
                                  (i = i.charAt(0).toUpperCase() + i.slice(1)),
                                  "uniform struct ".concat(i, " {") +
                                    Object.entries(r.value)
                                      .map(function (e) {
                                        var n = (0, p.Z)(e, 2),
                                          r = n[0];
                                        return n[1]
                                          .getDeclaration(r, t)
                                          .replace(/^uniform/, "");
                                      })
                                      .join("") +
                                    "} "
                                      .concat(e)
                                      .concat(
                                        n > 0 ? "[".concat(n, "]") : "",
                                        ";"
                                      )
                                );
                              }
                              return "uniform "
                                .concat(r.type, " ")
                                .concat(e)
                                .concat(n > 0 ? "[".concat(n, "]") : "", ";");
                            }
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                },
                PlaneGeometry: {
                  enumerable: !1,
                  value: (function () {
                    function e(t, n, r, a, l) {
                      (0, s.Z)(this, e),
                        o.createBuffer(),
                        (this.attributes = {
                          position: new i.Attribute({
                            target: o.ARRAY_BUFFER,
                            size: 3,
                          }),
                          uv: new i.Attribute({
                            target: o.ARRAY_BUFFER,
                            size: 2,
                          }),
                          uvNorm: new i.Attribute({
                            target: o.ARRAY_BUFFER,
                            size: 2,
                          }),
                          index: new i.Attribute({
                            target: o.ELEMENT_ARRAY_BUFFER,
                            size: 3,
                            type: o.UNSIGNED_SHORT,
                          }),
                        }),
                        this.setTopology(r, a),
                        this.setSize(t, n, l);
                    }
                    return (
                      (0, c.Z)(e, [
                        {
                          key: "setTopology",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 1,
                              t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 1,
                              n = this;
                            (n.xSegCount = e),
                              (n.ySegCount = t),
                              (n.vertexCount =
                                (n.xSegCount + 1) * (n.ySegCount + 1)),
                              (n.quadCount = n.xSegCount * n.ySegCount * 2),
                              (n.attributes.uv.values = new Float32Array(
                                2 * n.vertexCount
                              )),
                              (n.attributes.uvNorm.values = new Float32Array(
                                2 * n.vertexCount
                              )),
                              (n.attributes.index.values = new Uint16Array(
                                3 * n.quadCount
                              ));
                            for (var r = 0; r <= n.ySegCount; r++)
                              for (var i = 0; i <= n.xSegCount; i++) {
                                var o = r * (n.xSegCount + 1) + i;
                                if (
                                  ((n.attributes.uv.values[2 * o] =
                                    i / n.xSegCount),
                                  (n.attributes.uv.values[2 * o + 1] =
                                    1 - r / n.ySegCount),
                                  (n.attributes.uvNorm.values[2 * o] =
                                    (i / n.xSegCount) * 2 - 1),
                                  (n.attributes.uvNorm.values[2 * o + 1] =
                                    1 - (r / n.ySegCount) * 2),
                                  i < n.xSegCount && r < n.ySegCount)
                                ) {
                                  var a = r * n.xSegCount + i;
                                  (n.attributes.index.values[6 * a] = o),
                                    (n.attributes.index.values[6 * a + 1] =
                                      o + 1 + n.xSegCount),
                                    (n.attributes.index.values[6 * a + 2] =
                                      o + 1),
                                    (n.attributes.index.values[6 * a + 3] =
                                      o + 1),
                                    (n.attributes.index.values[6 * a + 4] =
                                      o + 1 + n.xSegCount),
                                    (n.attributes.index.values[6 * a + 5] =
                                      o + 2 + n.xSegCount);
                                }
                              }
                            n.attributes.uv.update(),
                              n.attributes.uvNorm.update(),
                              n.attributes.index.update();
                          },
                        },
                        {
                          key: "setSize",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 1,
                              t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 1,
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : "xz",
                              r = this;
                            (r.width = e),
                              (r.height = t),
                              (r.orientation = n),
                              (r.attributes.position.values &&
                                r.attributes.position.values.length ===
                                  3 * r.vertexCount) ||
                                (r.attributes.position.values =
                                  new Float32Array(3 * r.vertexCount));
                            for (
                              var i = e / -2,
                                o = t / -2,
                                a = e / r.xSegCount,
                                l = t / r.ySegCount,
                                s = 0;
                              s <= r.ySegCount;
                              s++
                            )
                              for (
                                var c = o + s * l, u = 0;
                                u <= r.xSegCount;
                                u++
                              ) {
                                var d = i + u * a,
                                  h = s * (r.xSegCount + 1) + u;
                                (r.attributes.position.values[
                                  3 * h + "xyz".indexOf(n[0])
                                ] = d),
                                  (r.attributes.position.values[
                                    3 * h + "xyz".indexOf(n[1])
                                  ] = -c);
                              }
                            r.attributes.position.update();
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                },
                Mesh: {
                  enumerable: !1,
                  value: (function () {
                    function e(t, n) {
                      (0, s.Z)(this, e);
                      var r = this;
                      (r.geometry = t),
                        (r.material = n),
                        (r.attributeInstances = []),
                        Object.entries(r.geometry.attributes).forEach(function (
                          e
                        ) {
                          var t = (0, p.Z)(e, 2),
                            n = t[0],
                            i = t[1];
                          r.attributeInstances.push({
                            attribute: i,
                            location: i.attach(n, r.material.program),
                          });
                        }),
                        i.meshes.push(r);
                    }
                    return (
                      (0, c.Z)(e, [
                        {
                          key: "draw",
                          value: function () {
                            o.useProgram(this.material.program),
                              this.material.uniformInstances.forEach(function (
                                e
                              ) {
                                var t = e.uniform,
                                  n = e.location;
                                return t.update(n);
                              }),
                              this.attributeInstances.forEach(function (e) {
                                var t = e.attribute,
                                  n = e.location;
                                return t.use(n);
                              }),
                              o.drawElements(
                                o.TRIANGLES,
                                this.geometry.attributes.index.values.length,
                                o.UNSIGNED_SHORT,
                                0
                              );
                          },
                        },
                        {
                          key: "remove",
                          value: function () {
                            var e = this;
                            i.meshes = i.meshes.filter(function (t) {
                              return t != e;
                            });
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                },
                Attribute: {
                  enumerable: !1,
                  value: (function () {
                    function e(t) {
                      (0, s.Z)(this, e),
                        (this.type = o.FLOAT),
                        (this.normalized = !1),
                        (this.buffer = o.createBuffer()),
                        Object.assign(this, t),
                        this.update();
                    }
                    return (
                      (0, c.Z)(e, [
                        {
                          key: "update",
                          value: function () {
                            void 0 !== this.values &&
                              (o.bindBuffer(this.target, this.buffer),
                              o.bufferData(
                                this.target,
                                this.values,
                                o.STATIC_DRAW
                              ));
                          },
                        },
                        {
                          key: "attach",
                          value: function (e, t) {
                            var n = o.getAttribLocation(t, e);
                            return (
                              this.target === o.ARRAY_BUFFER &&
                                (o.enableVertexAttribArray(n),
                                o.vertexAttribPointer(
                                  n,
                                  this.size,
                                  this.type,
                                  this.normalized,
                                  0,
                                  0
                                )),
                              n
                            );
                          },
                        },
                        {
                          key: "use",
                          value: function (e) {
                            o.bindBuffer(this.target, this.buffer),
                              this.target === o.ARRAY_BUFFER &&
                                (o.enableVertexAttribArray(e),
                                o.vertexAttribPointer(
                                  e,
                                  this.size,
                                  this.type,
                                  this.normalized,
                                  0,
                                  0
                                ));
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                },
              });
            var a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            i.commonUniforms = {
              projectionMatrix: new i.Uniform({ type: "mat4", value: a }),
              modelViewMatrix: new i.Uniform({ type: "mat4", value: a }),
              resolution: new i.Uniform({ type: "vec2", value: [1, 1] }),
              aspectRatio: new i.Uniform({ type: "float", value: 1 }),
            };
          }
          return (
            (0, c.Z)(e, [
              {
                key: "setSize",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 640,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 480;
                  (this.width = e),
                    (this.height = t),
                    (this.canvas.width = e),
                    (this.canvas.height = t),
                    this.gl.viewport(0, 0, e, t),
                    (this.commonUniforms.resolution.value = [e, t]),
                    (this.commonUniforms.aspectRatio.value = e / t);
                },
              },
              {
                key: "setOrthographicCamera",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : -2e3,
                    i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 2e3;
                  this.commonUniforms.projectionMatrix.value = [
                    2 / this.width,
                    0,
                    0,
                    0,
                    0,
                    2 / this.height,
                    0,
                    0,
                    0,
                    0,
                    2 / (r - i),
                    0,
                    e,
                    t,
                    n,
                    1,
                  ];
                },
              },
              {
                key: "render",
                value: function () {
                  this.gl.clearColor(0, 0, 0, 0),
                    this.gl.clearDepth(1),
                    this.meshes.forEach(function (e) {
                      return e.draw();
                    });
                },
              },
            ]),
            e
          );
        })(),
        da = {
          CROSS_ICON: X(
            cn ||
              (cn = h([
                '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>',
              ]))
          ),
          NOISE_TEXTURE: X(
            un ||
              (un = h([
                '<svg id="w3m-transparent-noise"><filter id="w3m-noise"><feTurbulence type="fractalNoise" baseFrequency="0.8"/></filter><rect width="100%" height="100%" filter="url(#w3m-noise)"/></svg>',
              ]))
          ),
          WALLET_CONNECT_LOGO: X(
            dn ||
              (dn = h([
                '<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>',
              ]))
          ),
          WALLET_CONNECT_ICON: X(
            hn ||
              (hn = h([
                '<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>',
              ]))
          ),
          WALLET_CONNECT_ICON_COLORED: X(
            vn ||
              (vn = h([
                '<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>',
              ]))
          ),
          BACK_ICON: X(
            fn ||
              (fn = h([
                '<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>',
              ]))
          ),
          COPY_ICON: X(
            pn ||
              (pn = h([
                '<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>',
              ]))
          ),
          RETRY_ICON: X(
            mn ||
              (mn = h([
                '<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>',
              ]))
          ),
          DESKTOP_ICON: X(
            gn ||
              (gn = h([
                '<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>',
              ]))
          ),
          MOBILE_ICON: X(
            wn ||
              (wn = h([
                '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>',
              ]))
          ),
          ARROW_DOWN_ICON: X(
            bn ||
              (bn = h([
                '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>',
              ]))
          ),
          ARROW_UP_RIGHT_ICON: X(
            yn ||
              (yn = h([
                '<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>',
              ]))
          ),
          ARROW_RIGHT_ICON: X(
            xn ||
              (xn = h([
                '<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>',
              ]))
          ),
          QRCODE_ICON: X(
            kn ||
              (kn = h([
                '<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>',
              ]))
          ),
          SCAN_ICON: X(
            Cn ||
              (Cn = h([
                '<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>',
              ]))
          ),
          CHECKMARK_ICON: X(
            Zn ||
              (Zn = h([
                '<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>',
              ]))
          ),
          HELP_ETH_IMG: X(
            An ||
              (An = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>',
              ]))
          ),
          HELP_PAINTING_IMG: X(
            En ||
              (En = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>',
              ]))
          ),
          HELP_CHART_IMG: X(
            _n ||
              (_n = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>',
              ]))
          ),
          HELP_KEY_IMG: X(
            In ||
              (In = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>',
              ]))
          ),
          HELP_USER_IMG: X(
            On ||
              (On = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>',
              ]))
          ),
          HELP_LOCK_IMG: X(
            Mn ||
              (Mn = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>',
              ]))
          ),
          HELP_COMPAS_IMG: X(
            Sn ||
              (Sn = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>',
              ]))
          ),
          HELP_NOUN_IMG: X(
            Pn ||
              (Pn = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>',
              ]))
          ),
          HELP_DAO_IMG: X(
            Tn ||
              (Tn = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>',
              ]))
          ),
          SEARCH_ICON: X(
            Ln ||
              (Ln = h([
                '<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>',
              ]))
          ),
          HELP_ICON: X(
            jn ||
              (jn = h([
                '<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>',
              ]))
          ),
          WALLET_ICON: X(
            Nn ||
              (Nn = h([
                '<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>',
              ]))
          ),
          NETWORK_PLACEHOLDER: X(
            Rn ||
              (Rn = h([
                '<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>',
              ]))
          ),
          WALLET_PLACEHOLDER: X(
            Dn ||
              (Dn = h([
                '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>',
              ]))
          ),
          TOKEN_PLACEHOLDER: X(
            Bn ||
              (Bn = h([
                '<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>',
              ]))
          ),
          ACCOUNT_COPY: X(
            zn ||
              (zn = h([
                '<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>',
              ]))
          ),
          ACCOUNT_DISCONNECT: X(
            Un ||
              (Un = h([
                '<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>',
              ]))
          ),
        },
        ha = {
          1: "692ed6ba-e569-459a-556a-776476829e00",
          42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
          43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
          56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
          250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
          10: "ab9c186a-c52f-464b-2906-ca59d760a400",
          137: "41d04d42-da3b-4453-8506-668cc0727900",
          100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
          9001: "f926ff41-260d-4028-635e-91913fc28e00",
          324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
          314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
          4689: "34e68754-e536-40da-c153-6ef2e7188a00",
          1088: "3897a66d-40b9-4833-162f-a2c90531c900",
          1284: "161038da-44ae-4ec7-1208-0ea569454b00",
          1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
        },
        va = (function (e) {
          return (
            (e.metaMask = "metaMask"),
            (e.trust = "trust"),
            (e.phantom = "phantom"),
            (e.brave = "brave"),
            (e.spotEthWallet = "spotEthWallet"),
            (e.exodus = "exodus"),
            (e.tokenPocket = "tokenPocket"),
            (e.frame = "frame"),
            (e.tally = "tally"),
            (e.coinbaseWallet = "coinbaseWallet"),
            (e.core = "core"),
            (e.bitkeep = "bitkeep"),
            (e.mathWallet = "mathWallet"),
            (e.opera = "opera"),
            (e.tokenary = "tokenary"),
            (e["1inch"] = "1inch"),
            (e.kuCoinWallet = "kuCoinWallet"),
            (e.ledger = "ledger"),
            e
          );
        })(va || {}),
        fa = {
          injectedPreset: (0, o.Z)(
            {
              metaMask: {
                name: "MetaMask",
                icon: "619537c0-2ff3-4c78-9ed8-a05e7567f300",
                url: "https://metamask.io",
                isMobile: !0,
                isInjected: !0,
              },
              trust: {
                name: "Trust",
                icon: "0528ee7e-16d1-4089-21e3-bbfb41933100",
                url: "https://trustwallet.com",
                isMobile: !0,
                isInjected: !0,
              },
              spotEthWallet: {
                name: "Spot",
                icon: "1bf33a89-b049-4a1c-d1f6-4dd7419ee400",
                url: "https://www.spot-wallet.com",
                isMobile: !0,
                isInjected: !0,
              },
              phantom: {
                name: "Phantom",
                icon: "62471a22-33cb-4e65-5b54-c3d9ea24b900",
                url: "https://phantom.app",
                isInjected: !0,
              },
              core: {
                name: "Core",
                icon: "35f9c46e-cc57-4aa7-315d-e6ccb2a1d600",
                url: "https://core.app",
                isMobile: !0,
                isInjected: !0,
              },
              bitkeep: {
                name: "BitKeep",
                icon: "3f7075d0-4ab7-4db5-404d-3e4c05e6fe00",
                url: "https://bitkeep.com",
                isMobile: !0,
                isInjected: !0,
              },
              tokenPocket: {
                name: "TokenPocket",
                icon: "f3119826-4ef5-4d31-4789-d4ae5c18e400",
                url: "https://www.tokenpocket.pro",
                isMobile: !0,
                isInjected: !0,
              },
              mathWallet: {
                name: "MathWallet",
                icon: "26a8f588-3231-4411-60ce-5bb6b805a700",
                url: "https://mathwallet.org",
                isMobile: !0,
                isInjected: !0,
              },
              exodus: {
                name: "Exodus",
                icon: "4c16cad4-cac9-4643-6726-c696efaf5200",
                url: "https://www.exodus.com",
                isMobile: !0,
                isDesktop: !0,
                isInjected: !0,
              },
              kuCoinWallet: {
                name: "KuCoin Wallet",
                icon: "1e47340b-8fd7-4ad6-17e7-b2bd651fae00",
                url: "https://kuwallet.com",
                isMobile: !0,
                isInjected: !0,
              },
              ledger: {
                name: "Ledger",
                icon: "a7f416de-aa03-4c5e-3280-ab49269aef00",
                url: "https://www.ledger.com",
                isDesktop: !0,
              },
              brave: {
                name: "Brave",
                icon: "125e828e-9936-4451-a8f2-949c119b7400",
                url: "https://brave.com/wallet",
                isInjected: !0,
              },
              frame: {
                name: "Frame",
                icon: "cd492418-ea85-4ef1-aeed-1c9e20b58900",
                url: "https://frame.sh",
                isInjected: !0,
              },
              tally: {
                name: "Tally",
                icon: "98d2620c-9fc8-4a1c-31bc-78d59d00a300",
                url: "https://tallyho.org",
                isInjected: !0,
              },
              coinbaseWallet: {
                name: "Coinbase",
                icon: "f8068a7f-83d7-4190-1f94-78154a12c600",
                url: "https://www.coinbase.com/wallet",
                isInjected: !0,
              },
              opera: {
                name: "Opera",
                icon: "877fa1a4-304d-4d45-ca8e-f76d1a556f00",
                url: "https://www.opera.com/crypto",
                isInjected: !0,
              },
              tokenary: {
                name: "Tokenary",
                icon: "5e481041-dc3c-4a81-373a-76bbde91b800",
                url: "https://tokenary.io",
                isDesktop: !0,
                isInjected: !0,
              },
            },
            "1inch",
            {
              name: "1inch Wallet",
              icon: "dce1ee99-403f-44a9-9f94-20de30616500",
              url: "https://1inch.io/wallet",
              isMobile: !0,
            }
          ),
          getInjectedId: function (e) {
            if ("INJECTED" !== e.toUpperCase() && e.length) return e;
            var t = window,
              n = t.ethereum,
              r = t.spotEthWallet,
              i = t.coinbaseWalletExtension;
            return n
              ? n.isTrust || n.isTrustWallet
                ? "trust"
                : n.isPhantom
                ? "phantom"
                : n.isBraveWallet
                ? "brave"
                : r
                ? "spotEthWallet"
                : n.isExodus
                ? "exodus"
                : n.isTokenPocket
                ? "tokenPocket"
                : n.isFrame
                ? "frame"
                : n.isTally
                ? "tally"
                : i
                ? "coinbaseWallet"
                : n.isAvalanche
                ? "core"
                : n.isBitKeep
                ? "bitkeep"
                : n.isMathWallet
                ? "mathWallet"
                : n.isOpera
                ? "opera"
                : n.isTokenary
                ? "tokenary"
                : n.isOneInchIOSWallet || n.isOneInchAndroidWallet
                ? "1inch"
                : n.isKuCoinWallet
                ? "kuCoinWallet"
                : n.isMetaMask
                ? "metaMask"
                : "injected"
              : "metaMask";
          },
          getInjectedName: function (e) {
            var t, n;
            if (e.length && "INJECTED" !== e.toUpperCase()) return e;
            var r = fa.getInjectedId("");
            return null !=
              (n = null == (t = fa.injectedPreset[r]) ? void 0 : t.name)
              ? n
              : "Injected";
          },
        },
        pa = {
          ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" },
          FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" },
          BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" },
          MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" },
          OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" },
          xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" },
          EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" },
          METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" },
          IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" },
        },
        ma = Object.defineProperty,
        ga = Object.getOwnPropertySymbols,
        wa = Object.prototype.hasOwnProperty,
        ba = Object.prototype.propertyIsEnumerable,
        ya = function (e, t, n) {
          return t in e
            ? ma(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        xa = function (e, t) {
          for (var n in t || (t = {})) wa.call(t, n) && ya(e, n, t[n]);
          if (ga) {
            var r,
              i = (0, m.Z)(ga(t));
            try {
              for (i.s(); !(r = i.n()).done; ) {
                n = r.value;
                ba.call(t, n) && ya(e, n, t[n]);
              }
            } catch (o) {
              i.e(o);
            } finally {
              i.f();
            }
          }
          return e;
        },
        ka = {
          MOBILE_BREAKPOINT: 600,
          W3M_RECENT_WALLET: "W3M_RECENT_WALLET",
          rejectStandaloneButtonComponent: function () {
            if (Oe.zb.state.isStandalone)
              throw new Error(
                "Web3Modal button components are not available in standalone mode."
              );
          },
          getShadowRootElement: function (e, t) {
            var n = e.renderRoot.querySelector(t);
            if (!n) throw new Error("".concat(t, " not found"));
            return n;
          },
          getWalletId: function (e) {
            return fa.getInjectedId(e);
          },
          getWalletIcon: function (e) {
            var t,
              n,
              r = null == (t = fa.injectedPreset[e]) ? void 0 : t.icon,
              i = Oe.t0.state,
              o = i.projectId,
              a = i.walletImages;
            return null != (n = null === a || void 0 === a ? void 0 : a[e])
              ? n
              : o && r
              ? Oe.uc.getImageUrl(r)
              : "";
          },
          getWalletName: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = fa.getInjectedName(e);
            return t ? n.split(" ")[0] : n;
          },
          getChainIcon: function (e) {
            var t,
              n = ha[e],
              r = Oe.t0.state,
              i = r.projectId,
              o = r.chainImages;
            return null != (t = null === o || void 0 === o ? void 0 : o[e])
              ? t
              : i && n
              ? Oe.uc.getImageUrl(n)
              : "";
          },
          getTokenIcon: function (e) {
            var t,
              n,
              r = null == (t = pa[e]) ? void 0 : t.icon,
              i = Oe.t0.state,
              o = i.projectId,
              a = i.tokenImages;
            return null != (n = null === a || void 0 === a ? void 0 : a[e])
              ? n
              : o && r
              ? Oe.uc.getImageUrl(r)
              : "";
          },
          isMobileAnimation: function () {
            return window.innerWidth <= ka.MOBILE_BREAKPOINT;
          },
          preloadImage: function (e) {
            return (0, l.Z)(
              (0, a.Z)().mark(function t() {
                return (0, a.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(function (t, n) {
                            var r = new Image();
                            (r.onload = t), (r.onerror = n), (r.src = e);
                          })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getErrorMessage: function (e) {
            return e instanceof Error ? e.message : "Unknown Error";
          },
          debounce: function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 500;
            return function () {
              for (
                var r = arguments.length, i = new Array(r), o = 0;
                o < r;
                o++
              )
                i[o] = arguments[o];
              t && clearTimeout(t),
                (t = setTimeout(function () {
                  e.apply(void 0, i);
                }, n));
            };
          },
          handleMobileLinking: function (e) {
            return (0, l.Z)(
              (0, a.Z)().mark(function t() {
                var n, r, i, o, l, s;
                return (0, a.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((s = function (e) {
                            var t = "";
                            null != o && o.universal
                              ? (t = Oe.zv.formatUniversalUrl(
                                  o.universal,
                                  e,
                                  l
                                ))
                              : null != o &&
                                o.native &&
                                (t = Oe.zv.formatNativeUrl(o.native, e, l)),
                              Oe.zv.openHref(t);
                          }),
                          (n = Oe.zb.state),
                          (r = n.standaloneUri),
                          (i = n.selectedChain),
                          (o = e.links),
                          (l = e.name),
                          !r)
                        ) {
                          t.next = 6;
                          break;
                        }
                        ka.setRecentWallet(e), s(r), (t.next = 10);
                        break;
                      case 6:
                        return (
                          (t.next = 8),
                          Oe.Id.client().connectWalletConnect(
                            function (e) {
                              s(e);
                            },
                            null === i || void 0 === i ? void 0 : i.id
                          )
                        );
                      case 8:
                        ka.setRecentWallet(e), Oe.jb.close();
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          handleAndroidLinking: function () {
            return (0, l.Z)(
              (0, a.Z)().mark(function e() {
                var t, n, r;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = Oe.zb.state),
                          (n = t.standaloneUri),
                          (r = t.selectedChain),
                          !n)
                        ) {
                          e.next = 5;
                          break;
                        }
                        Oe.zv.openHref(n), (e.next = 8);
                        break;
                      case 5:
                        return (
                          (e.next = 7),
                          Oe.Id.client().connectWalletConnect(
                            function (e) {
                              Oe.zv.setWalletConnectAndroidDeepLink(e),
                                Oe.zv.openHref(e);
                            },
                            null === r || void 0 === r ? void 0 : r.id
                          )
                        );
                      case 7:
                        Oe.jb.close();
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          handleUriCopy: function () {
            return (0, l.Z)(
              (0, a.Z)().mark(function e() {
                var t, n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(t = Oe.zb.state.standaloneUri)) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 4), navigator.clipboard.writeText(t);
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        return (
                          (n = Oe.Id.client().walletConnectUri),
                          (e.next = 9),
                          navigator.clipboard.writeText(n)
                        );
                      case 9:
                        Oe.Vs.openToast("Link copied", "success");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          handleConnectorConnection: function (e, t) {
            return (0, l.Z)(
              (0, a.Z)().mark(function n() {
                var r;
                return (0, a.Z)().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (r = Oe.zb.state.selectedChain),
                            (n.next = 4),
                            Oe.Id.client().connectConnector(
                              e,
                              null === r || void 0 === r ? void 0 : r.id
                            )
                          );
                        case 4:
                          Oe.jb.close(), (n.next = 10);
                          break;
                        case 7:
                          (n.prev = 7),
                            (n.t0 = n.catch(0)),
                            console.error(n.t0),
                            t
                              ? t()
                              : Oe.Vs.openToast(
                                  ka.getErrorMessage(n.t0),
                                  "error"
                                );
                        case 10:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                );
              })
            )();
          },
          getCustomWallets: function () {
            var e,
              t = Oe.t0.state,
              n = t.desktopWallets,
              r = t.mobileWallets;
            return null != (e = Oe.zv.isMobile() ? r : n) ? e : [];
          },
          getCustomImageUrls: function () {
            var e = Oe.t0.state,
              t = e.chainImages,
              n = e.walletImages,
              r = Object.values(null !== t && void 0 !== t ? t : {}),
              i = Object.values(null !== n && void 0 !== n ? n : {});
            return Object.values([].concat(r, i));
          },
          getConnectorImageUrls: function () {
            return Oe.Id.client()
              .getConnectors()
              .map(function (e) {
                var t = e.id;
                return fa.getInjectedId(t);
              })
              .map(function (e) {
                return ka.getWalletIcon(e);
              });
          },
          truncate: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8;
            return e.length <= t
              ? e
              : ""
                  .concat(e.substring(0, 4), "...")
                  .concat(e.substring(e.length - 4));
          },
          generateAvatarColors: function (e) {
            var t,
              n = null == (t = e.match(/.{1,7}/g)) ? void 0 : t.splice(0, 5),
              r = [];
            null === n ||
              void 0 === n ||
              n.forEach(function (e) {
                for (var t = 0, n = 0; n < e.length; n += 1)
                  (t = e.charCodeAt(n) + ((t << 5) - t)), (t &= t);
                for (var i = [0, 0, 0], o = 0; o < 3; o += 1) {
                  var a = (t >> (8 * o)) & 255;
                  i[o] = a;
                }
                r.push(
                  "rgb(".concat(i[0], ", ").concat(i[1], ", ").concat(i[2], ")")
                );
              });
            var i = document.querySelector(":root");
            if (i) {
              var o = {
                "--w3m-color-av-1": r[0],
                "--w3m-color-av-2": r[1],
                "--w3m-color-av-3": r[2],
                "--w3m-color-av-4": r[3],
                "--w3m-color-av-5": r[4],
              };
              Object.entries(o).forEach(function (e) {
                var t = (0, p.Z)(e, 2),
                  n = t[0],
                  r = t[1];
                return i.style.setProperty(n, r);
              });
            }
          },
          setRecentWallet: function (e) {
            var t = Oe.zb.state.walletConnectVersion;
            localStorage.setItem(
              ka.W3M_RECENT_WALLET,
              JSON.stringify((0, o.Z)({}, t, e))
            );
          },
          getRecentWallet: function () {
            var e = localStorage.getItem(ka.W3M_RECENT_WALLET);
            if (e) {
              var t = Oe.zb.state.walletConnectVersion,
                n = JSON.parse(e);
              if (n[t]) return n[t];
            }
          },
          getExtensionWallets: function () {
            for (
              var e = [], t = 0, n = Object.entries(fa.injectedPreset);
              t < n.length;
              t++
            ) {
              var r = (0, p.Z)(n[t], 2),
                i = r[0],
                o = r[1];
              i !== va.coinbaseWallet &&
                o &&
                o.isInjected &&
                !o.isDesktop &&
                e.push(xa({ id: i }, o));
            }
            return e;
          },
          caseSafeIncludes: function (e, t) {
            return e.toUpperCase().includes(t.toUpperCase());
          },
        },
        Ca = C(
          Wn ||
            (Wn = h([
              "#w3m-transparent-noise,.w3m-canvas,.w3m-color-placeholder,.w3m-gradient-placeholder,.w3m-highlight{inset:0;position:absolute;display:block;pointer-events:none;width:100%;height:100px;border-radius:8px 8px 0 0;transform:translateY(-5px)}.w3m-gradient-placeholder{background:linear-gradient(var(--w3m-gradient-1),var(--w3m-gradient-2),var(--w3m-gradient-3),var(--w3m-gradient-4))}.w3m-color-placeholder{background-color:var(--w3m-color-fg-accent)}.w3m-highlight{border:1px solid var(--w3m-color-overlay)}.w3m-canvas{opacity:0;transition:opacity 2s ease;box-shadow:0 8px 28px -6px rgba(10,16,31,.12),0 18px 88px -4px rgba(10,16,31,.14)}.w3m-canvas-visible{opacity:1}#w3m-transparent-noise{mix-blend-mode:multiply;opacity:.35}.w3m-toolbar{height:28px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-color-fg-inverse)}.w3m-action-btn{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color,.2s ease;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay),0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08)}.w3m-action-btn:hover{background-color:var(--w3m-color-bg-2)}.w3m-action-btn svg{display:block;object-position:center}.w3m-action-btn path{fill:var(--w3m-color-fg-1)}.w3m-actions{display:flex}.w3m-actions button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}",
            ]))
        ),
        Za = Object.defineProperty,
        Aa = Object.getOwnPropertyDescriptor,
        Ea = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Aa(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Za(t, n, o), o;
        },
        _a = new la(),
        Ia = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).open = !1),
              (e.isHelp = !1),
              (e.unsubscribeRouter = void 0),
              (e.playTimeout = void 0),
              (e.unsubscribeRouter = Oe.AV.subscribe(function (t) {
                e.isHelp = "Help" === t.view;
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "firstUpdated",
                value: function () {
                  var e = this;
                  "gradient" === Oe.t0.state.themeBackground &&
                    (this.playTimeout = setTimeout(function () {
                      _a.play(e.canvasEl), (e.open = !0);
                    }, 800));
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeRouter) || e.call(this),
                    clearTimeout(this.playTimeout),
                    _a.stop();
                },
              },
              {
                key: "canvasEl",
                get: function () {
                  return ka.getShadowRootElement(this, ".w3m-canvas");
                },
              },
              {
                key: "onHelp",
                value: function () {
                  Oe.AV.push("Help");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.t0.state.themeBackground,
                    t = { "w3m-canvas": !0, "w3m-canvas-visible": this.open },
                    n = { "w3m-actions": !0, "w3m-help-active": this.isHelp };
                  return Q(
                    $n ||
                      ($n = h([
                        "",
                        " ",
                        '<div class="w3m-highlight"></div><div class="w3m-toolbar">',
                        '<div class="',
                        '"><button class="w3m-action-btn" @click="',
                        '">',
                        '</button> <button class="w3m-action-btn" @click="',
                        '">',
                        "</button></div></div>",
                      ])),
                    "themeColor" === e
                      ? Q(
                          Hn ||
                            (Hn = h([
                              '<div class="w3m-color-placeholder"></div>',
                            ]))
                        )
                      : null,
                    "gradient" === e
                      ? Q(
                          Vn ||
                            (Vn = h([
                              '<div class="w3m-gradient-placeholder"></div><canvas class="',
                              '"></canvas>',
                              "",
                            ])),
                          Pe(t),
                          da.NOISE_TEXTURE
                        )
                      : null,
                    da.WALLET_CONNECT_LOGO,
                    Pe(n),
                    this.onHelp,
                    da.HELP_ICON,
                    Oe.jb.close,
                    da.CROSS_ICON
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Ia.styles = [Vo.globalCss, Ca]),
        Ea([Ie()], Ia.prototype, "open", 2),
        Ea([Ie()], Ia.prototype, "isHelp", 2),
        (Ia = Ea([Ze("w3m-modal-backcard")], Ia));
      var Oa = C(
          Fn || (Fn = h(["main{padding:20px;padding-top:0;width:100%}"]))
        ),
        Ma = Object.defineProperty,
        Sa = Object.getOwnPropertyDescriptor,
        Pa = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  return Q(qn || (qn = h(["<main><slot></slot></main>"])));
                },
              },
            ]),
            n
          );
        })(xe);
      (Pa.styles = [Vo.globalCss, Oa]),
        (Pa = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Sa(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Ma(t, n, o), o;
        })([Ze("w3m-modal-content")], Pa));
      var Ta = C(
          Gn ||
            (Gn = h([
              "footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}",
            ]))
        ),
        La = Object.defineProperty,
        ja = Object.getOwnPropertyDescriptor,
        Na = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  return Q(Kn || (Kn = h(["<footer><slot></slot></footer>"])));
                },
              },
            ]),
            n
          );
        })(xe);
      (Na.styles = [Vo.globalCss, Ta]),
        (Na = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ja(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && La(t, n, o), o;
        })([Ze("w3m-modal-footer")], Na));
      var Ra = C(
          Yn ||
            (Yn = h([
              "header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px;transition:opacity .2s ease}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-color-fg-accent)}",
            ]))
        ),
        Da = Object.defineProperty,
        Ba = Object.getOwnPropertyDescriptor,
        za = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Ba(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Da(t, n, o), o;
        },
        Ua = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).title = ""),
              (e.onAction = void 0),
              (e.actionIcon = void 0),
              (e.border = !1),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "backBtnTemplate",
                value: function () {
                  return Q(
                    Jn ||
                      (Jn = h([
                        '<button class="w3m-back-btn" @click="',
                        '">',
                        "</button>",
                      ])),
                    Oe.AV.goBack,
                    da.BACK_ICON
                  );
                },
              },
              {
                key: "actionBtnTemplate",
                value: function () {
                  return Q(
                    Qn ||
                      (Qn = h([
                        '<button class="w3m-action-btn" @click="',
                        '">',
                        "</button>",
                      ])),
                    this.onAction,
                    this.actionIcon
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { "w3m-border": this.border },
                    t = Oe.AV.state.history.length > 1,
                    n = this.title
                      ? Q(
                          Xn ||
                            (Xn = h([
                              '<w3m-text variant="large-bold">',
                              "</w3m-text>",
                            ])),
                          this.title
                        )
                      : Q(er || (er = h(["<slot></slot>"])));
                  return Q(
                    tr ||
                      (tr = h([
                        '<header class="',
                        '">',
                        " ",
                        " ",
                        "</header>",
                      ])),
                    Pe(e),
                    t ? this.backBtnTemplate() : null,
                    n,
                    this.onAction ? this.actionBtnTemplate() : null
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Ua.styles = [Vo.globalCss, Ra]),
        za([_e()], Ua.prototype, "title", 2),
        za([_e()], Ua.prototype, "onAction", 2),
        za([_e()], Ua.prototype, "actionIcon", 2),
        za([_e()], Ua.prototype, "border", 2),
        (Ua = za([Ze("w3m-modal-header")], Ua));
      var Wa = C(
          nr ||
            (nr = h([
              ".w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}",
            ]))
        ),
        $a = Object.defineProperty,
        Ha = Object.getOwnPropertyDescriptor,
        Va = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Ha(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && $a(t, n, o), o;
        },
        Fa = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).view = Oe.AV.state.view),
              (e.prevView = Oe.AV.state.view),
              (e.unsubscribe = void 0),
              (e.oldHeight = "0px"),
              (e.resizeObserver = void 0),
              (e.unsubscribe = Oe.AV.subscribe(function (t) {
                e.view !== t.view && e.onChangeRoute();
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "firstUpdated",
                value: function () {
                  var e = this;
                  (this.resizeObserver = new ResizeObserver(function (t) {
                    var n = (0, p.Z)(t, 1)[0],
                      r = "".concat(n.contentRect.height, "px");
                    "0px" !== e.oldHeight &&
                      (Ft(
                        e.routerEl,
                        { height: [e.oldHeight, r] },
                        { duration: 0.2 }
                      ),
                      Ft(
                        e.routerEl,
                        { opacity: [0, 1], scale: [0.99, 1] },
                        { duration: 0.37, delay: 0.03 }
                      )),
                      (e.oldHeight = r);
                  })),
                    this.resizeObserver.observe(this.contentEl);
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  var e, t;
                  null == (e = this.unsubscribe) || e.call(this),
                    null == (t = this.resizeObserver) || t.disconnect();
                },
              },
              {
                key: "routerEl",
                get: function () {
                  return ka.getShadowRootElement(this, ".w3m-router");
                },
              },
              {
                key: "contentEl",
                get: function () {
                  return ka.getShadowRootElement(this, ".w3m-content");
                },
              },
              {
                key: "viewTemplate",
                value: function () {
                  switch (this.view) {
                    case "ConnectWallet":
                      return Q(
                        rr ||
                          (rr = h([
                            "<w3m-connect-wallet-view></w3m-connect-wallet-view>",
                          ]))
                      );
                    case "SelectNetwork":
                      return Q(
                        ir ||
                          (ir = h([
                            "<w3m-select-network-view></w3m-select-network-view>",
                          ]))
                      );
                    case "InjectedConnector":
                      return Q(
                        or ||
                          (or = h([
                            "<w3m-injected-connector-view></w3m-injected-connector-view>",
                          ]))
                      );
                    case "InstallConnector":
                      return Q(
                        ar ||
                          (ar = h([
                            "<w3m-install-connector-view></w3m-install-connector-view>",
                          ]))
                      );
                    case "GetWallet":
                      return Q(
                        lr ||
                          (lr = h([
                            "<w3m-get-wallet-view></w3m-get-wallet-view>",
                          ]))
                      );
                    case "DesktopConnector":
                      return Q(
                        sr ||
                          (sr = h([
                            "<w3m-desktop-connector-view></w3m-desktop-connector-view>",
                          ]))
                      );
                    case "WalletExplorer":
                      return Q(
                        cr ||
                          (cr = h([
                            "<w3m-wallet-explorer-view></w3m-wallet-explorer-view>",
                          ]))
                      );
                    case "Qrcode":
                      return Q(
                        ur || (ur = h(["<w3m-qrcode-view></w3m-qrcode-view>"]))
                      );
                    case "Help":
                      return Q(
                        dr || (dr = h(["<w3m-help-view></w3m-help-view>"]))
                      );
                    case "Account":
                      return Q(
                        hr ||
                          (hr = h(["<w3m-account-view></w3m-account-view>"]))
                      );
                    case "SwitchNetwork":
                      return Q(
                        vr ||
                          (vr = h([
                            "<w3m-switch-network-view></w3m-switch-network-view>",
                          ]))
                      );
                    default:
                      return Q(fr || (fr = h(["<div>Not Found</div>"])));
                  }
                },
              },
              {
                key: "onChangeRoute",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Ft(
                                    this.routerEl,
                                    { opacity: [1, 0], scale: [1, 1.02] },
                                    { duration: 0.15 }
                                  ).finished
                                );
                              case 2:
                                this.view = Oe.AV.state.view;
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  return Q(
                    pr ||
                      (pr = h([
                        '<div class="w3m-router"><div class="w3m-content">',
                        "</div></div>",
                      ])),
                    this.viewTemplate()
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Fa.styles = [Vo.globalCss, Wa]),
        Va([Ie()], Fa.prototype, "view", 2),
        Va([Ie()], Fa.prototype, "prevView", 2),
        (Fa = Va([Ze("w3m-modal-router")], Fa));
      var qa = C(
          mr ||
            (mr = h([
              "div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:10px 15px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:36px;border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-color-fg-accent)}.w3m-error path{fill:var(--w3m-color-err)}",
            ]))
        ),
        Ga = Object.defineProperty,
        Ka = Object.getOwnPropertyDescriptor,
        Ya = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Ka(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Ga(t, n, o), o;
        },
        Ja = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).open = !1),
              (e.unsubscribe = void 0),
              (e.timeout = void 0),
              (e.unsubscribe = Oe.Vs.subscribe(function (t) {
                t.open
                  ? ((e.open = !0),
                    (e.timeout = setTimeout(function () {
                      return Oe.Vs.closeToast();
                    }, 2200)))
                  : ((e.open = !1), clearTimeout(e.timeout));
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribe) || e.call(this),
                    clearTimeout(this.timeout),
                    Oe.Vs.closeToast();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.Vs.state,
                    t = e.message,
                    n = e.variant,
                    r = {
                      "w3m-success": "success" === n,
                      "w3m-error": "error" === n,
                    };
                  return this.open
                    ? Q(
                        gr ||
                          (gr = h([
                            '<div class="',
                            '">',
                            " ",
                            '<w3m-text variant="small-normal">',
                            "</w3m-text></div>",
                          ])),
                        Pe(r),
                        "success" === n ? da.CHECKMARK_ICON : null,
                        "error" === n ? da.CROSS_ICON : null,
                        t
                      )
                    : null;
                },
              },
            ]),
            n
          );
        })(xe);
      (Ja.styles = [Vo.globalCss, qa]),
        Ya([Ie()], Ja.prototype, "open", 2),
        (Ja = Ya([Ze("w3m-modal-toast")], Ja));
      var Qa = C(
          wr ||
            (wr = h([
              "button{padding:5px;border-radius:10px;transition:all .2s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}",
            ]))
        ),
        Xa = Object.defineProperty,
        el = Object.getOwnPropertyDescriptor,
        tl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? el(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Xa(t, n, o), o;
        },
        nl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).onClick = function () {
                return null;
              }),
              (e.name = ""),
              (e.chainId = ""),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  return Q(
                    br ||
                      (br = h([
                        '<button @click="',
                        '"><w3m-network-image chainId="',
                        '"></w3m-network-image><w3m-text variant="xsmall-normal">',
                        "</w3m-text></button>",
                      ])),
                    this.onClick,
                    this.chainId,
                    this.name
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (nl.styles = [Vo.globalCss, Qa]),
        tl([_e()], nl.prototype, "onClick", 2),
        tl([_e()], nl.prototype, "name", 2),
        tl([_e()], nl.prototype, "chainId", 2),
        (nl = tl([Ze("w3m-network-button")], nl));
      var rl = C(
          yr ||
            (yr = h([
              "div{width:inherit;height:inherit}.polygon-stroke{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}",
            ]))
        ),
        il = Object.defineProperty,
        ol = Object.getOwnPropertyDescriptor,
        al = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ol(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && il(t, n, o), o;
        },
        ll = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).chainId = ""),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = ka.getChainIcon(this.chainId);
                  return e
                    ? Q(
                        xr ||
                          (xr = h([
                            '<div><svg width="54" height="59" viewBox="0 0 54 59" fill="none"><defs><clipPath id="polygon"><path d="M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z"/></clipPath></defs><image clip-path="url(#polygon)" href="',
                            '" width="58" height="59" x="-2" y="0"/><path class="polygon-stroke" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z" stroke="#fff"/></svg></div>',
                          ])),
                        e
                      )
                    : Q(kr || (kr = h(["", ""])), da.NETWORK_PLACEHOLDER);
                },
              },
            ]),
            n
          );
        })(xe);
      (ll.styles = [Vo.globalCss, rl]),
        al([_e()], ll.prototype, "chainId", 2),
        (ll = al([Ze("w3m-network-image")], ll));
      var sl = 0.1;
      function cl(e, t, n) {
        return e !== t && (e - t < 0 ? t - e : e - t) <= n + sl;
      }
      var ul = function (e, t, n, r) {
          var i = "light" === r ? "#141414" : "#fff",
            o = "light" === r ? "#fff" : "#141414",
            a = [],
            l = (function (e, t) {
              var n = Array.prototype.slice.call(
                  Do.create(e, { errorCorrectionLevel: t }).modules.data,
                  0
                ),
                r = Math.sqrt(n.length);
              return n.reduce(function (e, t, n) {
                return (
                  (n % r === 0 ? e.push([t]) : e[e.length - 1].push(t)) && e
                );
              }, []);
            })(e, "Q"),
            s = t / l.length,
            c = [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: 1 },
            ];
          c.forEach(function (e) {
            for (
              var t = e.x,
                n = e.y,
                r = (l.length - 7) * s * t,
                u = (l.length - 7) * s * n,
                d = 0;
              d < c.length;
              d += 1
            ) {
              var v = s * (7 - 2 * d);
              a.push(
                X(
                  Cr ||
                    (Cr = h([
                      '<rect fill="',
                      '" height="',
                      '" rx="',
                      '" ry="',
                      '" width="',
                      '" x="',
                      '" y="',
                      '">',
                    ])),
                  d % 2 === 0 ? i : o,
                  v,
                  0.32 * v,
                  0.32 * v,
                  v,
                  r + s * d,
                  u + s * d
                )
              );
            }
          });
          var u = Math.floor((n + 25) / s),
            d = l.length / 2 - u / 2,
            v = l.length / 2 + u / 2 - 1,
            f = [];
          l.forEach(function (e, t) {
            e.forEach(function (e, n) {
              if (
                l[t][n] &&
                !(
                  (t < 7 && n < 7) ||
                  (t > l.length - 8 && n < 7) ||
                  (t < 7 && n > l.length - 8)
                ) &&
                !(t > d && t < v && n > d && n < v)
              ) {
                var r = t * s + s / 2,
                  i = n * s + s / 2;
                f.push([r, i]);
              }
            });
          });
          var g = {};
          return (
            f.forEach(function (e) {
              var t = (0, p.Z)(e, 2),
                n = t[0],
                r = t[1];
              g[n] ? g[n].push(r) : (g[n] = [r]);
            }),
            Object.entries(g)
              .map(function (e) {
                var t = (0, p.Z)(e, 2),
                  n = t[0],
                  r = t[1],
                  i = r.filter(function (e) {
                    return r.every(function (t) {
                      return !cl(e, t, s);
                    });
                  });
                return [Number(n), i];
              })
              .forEach(function (e) {
                var t = (0, p.Z)(e, 2),
                  n = t[0];
                t[1].forEach(function (e) {
                  a.push(
                    X(
                      Zr ||
                        (Zr = h([
                          '<circle cx="',
                          '" cy="',
                          '" fill="',
                          '" r="',
                          '">',
                        ])),
                      n,
                      e,
                      i,
                      s / 2.5
                    )
                  );
                });
              }),
            Object.entries(g)
              .filter(function (e) {
                var t = (0, p.Z)(e, 2);
                t[0];
                return t[1].length > 1;
              })
              .map(function (e) {
                var t = (0, p.Z)(e, 2),
                  n = t[0],
                  r = t[1],
                  i = r.filter(function (e) {
                    return r.some(function (t) {
                      return cl(e, t, s);
                    });
                  });
                return [Number(n), i];
              })
              .map(function (e) {
                var t = (0, p.Z)(e, 2),
                  n = t[0],
                  r = t[1];
                r.sort(function (e, t) {
                  return e < t ? -1 : 1;
                });
                var i,
                  o = [],
                  a = (0, m.Z)(r);
                try {
                  var l = function () {
                    var e = i.value,
                      t = o.find(function (t) {
                        return t.some(function (t) {
                          return cl(e, t, s);
                        });
                      });
                    t ? t.push(e) : o.push([e]);
                  };
                  for (a.s(); !(i = a.n()).done; ) l();
                } catch (c) {
                  a.e(c);
                } finally {
                  a.f();
                }
                return [
                  n,
                  o.map(function (e) {
                    return [e[0], e[e.length - 1]];
                  }),
                ];
              })
              .forEach(function (e) {
                var t = (0, p.Z)(e, 2),
                  n = t[0];
                t[1].forEach(function (e) {
                  var t = (0, p.Z)(e, 2),
                    r = t[0],
                    o = t[1];
                  a.push(
                    X(
                      Ar ||
                        (Ar = h([
                          '<line x1="',
                          '" x2="',
                          '" y1="',
                          '" y2="',
                          '" stroke="',
                          '" stroke-width="',
                          '" stroke-linecap="round">',
                        ])),
                      n,
                      n,
                      r,
                      o,
                      i,
                      s / 1.25
                    )
                  );
                });
              }),
            a
          );
        },
        dl = C(
          Er ||
            (Er = h([
              "@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:15px}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-color-fg-accent)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}",
            ]))
        ),
        hl = Object.defineProperty,
        vl = Object.getOwnPropertyDescriptor,
        fl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? vl(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && hl(t, n, o), o;
        },
        pl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).uri = ""),
              (e.size = 0),
              (e.logoSrc = ""),
              (e.walletId = ""),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "svgTemplate",
                value: function () {
                  var e,
                    t = null != (e = Oe.t0.state.themeMode) ? e : "light";
                  return X(
                    _r ||
                      (_r = h(['<svg height="', '" width="', '">', "</svg>"])),
                    this.size,
                    this.size,
                    ul(this.uri, this.size, this.size / 4, t)
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return Q(
                    Ir || (Ir = h(["<div>", " ", "</div>"])),
                    this.walletId || this.logoSrc
                      ? Q(
                          Or ||
                            (Or = h([
                              '<w3m-wallet-image walletId="',
                              '" src="',
                              '"></w3m-wallet-image>',
                            ])),
                          Ro(this.walletId),
                          Ro(this.logoSrc)
                        )
                      : da.WALLET_CONNECT_ICON_COLORED,
                    this.svgTemplate()
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (pl.styles = [Vo.globalCss, dl]),
        fl([_e()], pl.prototype, "uri", 2),
        fl([_e({ type: Number })], pl.prototype, "size", 2),
        fl([_e()], pl.prototype, "logoSrc", 2),
        fl([_e()], pl.prototype, "walletId", 2),
        (pl = fl([Ze("w3m-qrcode")], pl));
      var ml = C(
          Mr ||
            (Mr = h([
              ":host{position:relative;height:28px;width:75%}input{width:100%;height:100%;line-height:28px!important;border-radius:28px;font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin-right:4px}.w3m-placeholder{top:0;left:50%;transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:fit-content;position:relative}input:focus-within+.w3m-placeholder,input:not(:placeholder-shown)+.w3m-placeholder{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+.w3m-placeholder w3m-text,input:not(:placeholder-shown)+.w3m-placeholder w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-color-fg-accent)}path{fill:var(--w3m-color-fg-2)}",
            ]))
        ),
        gl = Object.defineProperty,
        wl = Object.getOwnPropertyDescriptor,
        bl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? wl(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && gl(t, n, o), o;
        },
        yl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).onChange = function () {
                return null;
              }),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = Oe.zv.isMobile()
                    ? "Search mobile wallets"
                    : "Search desktop wallets";
                  return Q(
                    Sr ||
                      (Sr = h([
                        '<input type="text" @input="',
                        '" placeholder="',
                        '"><div class="w3m-placeholder">',
                        '<w3m-text color="secondary" variant="medium-thin">',
                        "</w3m-text></div>",
                      ])),
                    this.onChange,
                    e,
                    da.SEARCH_ICON,
                    e
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (yl.styles = [Vo.globalCss, ml]),
        bl([_e()], yl.prototype, "onChange", 2),
        (yl = bl([Ze("w3m-search-input")], yl));
      var xl = C(
          Pr ||
            (Pr = h([
              "@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-color-fg-accent)}",
            ]))
        ),
        kl = Object.defineProperty,
        Cl = Object.getOwnPropertyDescriptor,
        Zl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  return Q(
                    Tr ||
                      (Tr = h([
                        '<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>',
                      ]))
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Zl.styles = [Vo.globalCss, xl]),
        (Zl = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Cl(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && kl(t, n, o), o;
        })([Ze("w3m-spinner")], Zl));
      var Al = C(
          Lr ||
            (Lr = h([
              "span{font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xxsmall-bold{font-weight:700;font-size:10px;line-height:12px;letter-spacing:.02em;text-transform:uppercase}.w3m-xsmall-normal{font-weight:600;font-size:12px;line-height:14px;letter-spacing:-.03em}.w3m-small-thin{font-weight:500;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-small-normal{font-weight:600;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-medium-thin{font-weight:500;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-normal{font-weight:600;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-bold{font-weight:700;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-large-bold{font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.03em}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-color-fg-inverse)}.w3m-color-accnt{color:var(--w3m-color-fg-accent)}.w3m-color-error{color:var(--w3m-color-err)}",
            ]))
        ),
        El = Object.defineProperty,
        _l = Object.getOwnPropertyDescriptor,
        Il = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? _l(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && El(t, n, o), o;
        },
        Ol = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).variant = "medium-normal"),
              (e.color = "primary"),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = {
                    "w3m-large-bold": "large-bold" === this.variant,
                    "w3m-medium-bold": "medium-bold" === this.variant,
                    "w3m-medium-normal": "medium-normal" === this.variant,
                    "w3m-medium-thin": "medium-thin" === this.variant,
                    "w3m-small-normal": "small-normal" === this.variant,
                    "w3m-small-thin": "small-thin" === this.variant,
                    "w3m-xsmall-normal": "xsmall-normal" === this.variant,
                    "w3m-xxsmall-bold": "xxsmall-bold" === this.variant,
                    "w3m-color-primary": "primary" === this.color,
                    "w3m-color-secondary": "secondary" === this.color,
                    "w3m-color-tertiary": "tertiary" === this.color,
                    "w3m-color-inverse": "inverse" === this.color,
                    "w3m-color-accnt": "accent" === this.color,
                    "w3m-color-error": "error" === this.color,
                  };
                  return Q(
                    jr || (jr = h(['<span class="', '"><slot></slot></span>'])),
                    Pe(e)
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Ol.styles = [Vo.globalCss, Al]),
        Il([_e()], Ol.prototype, "variant", 2),
        Il([_e()], Ol.prototype, "color", 2),
        (Ol = Il([Ze("w3m-text")], Ol));
      var Ml = C(
          Nr ||
            (Nr = h([
              "div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}",
            ]))
        ),
        Sl = Object.defineProperty,
        Pl = Object.getOwnPropertyDescriptor,
        Tl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Pl(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Sl(t, n, o), o;
        },
        Ll = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).symbol = void 0),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = ka.getTokenIcon(null != (e = this.symbol) ? e : "");
                  return t
                    ? Q(
                        Rr ||
                          (Rr = h(['<div><img src="', '" alt="', '"></div>'])),
                        t,
                        this.id
                      )
                    : da.TOKEN_PLACEHOLDER;
                },
              },
            ]),
            n
          );
        })(xe);
      (Ll.styles = [Vo.globalCss, Ml]),
        Tl([_e()], Ll.prototype, "symbol", 2),
        (Ll = Tl([Ze("w3m-token-image")], Ll));
      var jl = C(
          Dr ||
            (Dr = h([
              "button{transition:all .2s ease;width:100%;height:100%;border-radius:10px;display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:15px;margin-bottom:5px}.w3m-sublabel{margin-top:2px}",
            ]))
        ),
        Nl = Object.defineProperty,
        Rl = Object.getOwnPropertyDescriptor,
        Dl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Rl(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Nl(t, n, o), o;
        },
        Bl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).onClick = function () {
                return null;
              }),
              (e.name = ""),
              (e.walletId = ""),
              (e.label = void 0),
              (e.src = void 0),
              (e.installed = !1),
              (e.recent = !1),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "sublabelTemplate",
                value: function () {
                  return this.recent
                    ? Q(
                        Br ||
                          (Br = h([
                            '<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">RECENT</w3m-text>',
                          ]))
                      )
                    : this.installed
                    ? Q(
                        zr ||
                          (zr = h([
                            '<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">INSTALLED</w3m-text>',
                          ]))
                      )
                    : null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e;
                  return Q(
                    Ur ||
                      (Ur = h([
                        '<button @click="',
                        '"><div><w3m-wallet-image walletId="',
                        '" .src="',
                        '"></w3m-wallet-image><w3m-text variant="xsmall-normal">',
                        "</w3m-text>",
                        "</div></button>",
                      ])),
                    this.onClick,
                    this.walletId,
                    this.src,
                    null != (e = this.label)
                      ? e
                      : ka.getWalletName(this.name, !0),
                    this.sublabelTemplate()
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Bl.styles = [Vo.globalCss, jl]),
        Dl([_e()], Bl.prototype, "onClick", 2),
        Dl([_e()], Bl.prototype, "name", 2),
        Dl([_e()], Bl.prototype, "walletId", 2),
        Dl([_e()], Bl.prototype, "label", 2),
        Dl([_e()], Bl.prototype, "src", 2),
        Dl([_e()], Bl.prototype, "installed", 2),
        Dl([_e()], Bl.prototype, "recent", 2),
        (Bl = Dl([Ze("w3m-wallet-button")], Bl));
      var zl = C(
          Wr ||
            (Wr = h([
              "div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}",
            ]))
        ),
        Ul = Object.defineProperty,
        Wl = Object.getOwnPropertyDescriptor,
        $l = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Wl(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Ul(t, n, o), o;
        },
        Hl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).walletId = void 0),
              (e.src = void 0),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = ka.getWalletId(null != (e = this.walletId) ? e : ""),
                    n = ka.getWalletId(t),
                    r = this.src ? this.src : ka.getWalletIcon(n);
                  return Q(
                    $r || ($r = h(["", ""])),
                    r.length
                      ? Q(
                          Hr ||
                            (Hr = h([
                              '<div><img src="',
                              '" alt="',
                              '"></div>',
                            ])),
                          r,
                          this.id
                        )
                      : da.WALLET_PLACEHOLDER
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Hl.styles = [Vo.globalCss, zl]),
        $l([_e()], Hl.prototype, "walletId", 2),
        $l([_e()], Hl.prototype, "src", 2),
        (Hl = $l([Ze("w3m-wallet-image")], Hl));
      var Vl = C(
          Vr ||
            (Vr = h([
              ":host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:10px;padding:4px 4px 4px 8px}div button{border-radius:16px;padding:4px 8px 4px 4px;height:auto;margin-left:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}",
            ]))
        ),
        Fl = Object.defineProperty,
        ql = Object.getOwnPropertyDescriptor,
        Gl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ql(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Fl(t, n, o), o;
        },
        Kl = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).balance = "hide"),
              ka.rejectStandaloneButtonComponent(),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onOpen",
                value: function () {
                  Oe.zb.state.isStandalone || Oe.jb.open({ route: "Account" });
                },
              },
              {
                key: "accountTemplate",
                value: function () {
                  return Q(
                    Fr ||
                      (Fr = h([
                        "<w3m-avatar></w3m-avatar><w3m-address-text></w3m-address-text>",
                      ]))
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return "show" === this.balance
                    ? Q(
                        qr ||
                          (qr = h([
                            '<div><w3m-balance></w3m-balance><button @click="',
                            '">',
                            "</button></div>",
                          ])),
                        this.onOpen,
                        this.accountTemplate()
                      )
                    : Q(
                        Gr ||
                          (Gr = h([
                            '<w3m-button-big @click="',
                            '">',
                            "</w3m-button-big>",
                          ])),
                        this.onOpen,
                        this.accountTemplate()
                      );
                },
              },
            ]),
            n
          );
        })(xe);
      (Kl.styles = [Vo.globalCss, Vl]),
        Gl([_e()], Kl.prototype, "balance", 2),
        (Kl = Gl([Ze("w3m-account-button")], Kl));
      var Yl = C(
          Kr ||
            (Kr = h([
              "button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}",
            ]))
        ),
        Jl = Object.defineProperty,
        Ql = Object.getOwnPropertyDescriptor,
        Xl = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Ql(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Jl(t, n, o), o;
        },
        es = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            (0, s.Z)(this, n),
              ((e = t.call(this)).chainId = ""),
              (e.label = ""),
              (e.unsubscribeNetwork = void 0);
            var r = Oe.zb.state.selectedChain;
            return (
              (e.chainId =
                null === r || void 0 === r ? void 0 : r.id.toString()),
              (e.label = null === r || void 0 === r ? void 0 : r.name),
              (e.unsubscribeNetwork = Oe.zb.subscribe(function (t) {
                var n = t.selectedChain;
                (e.chainId =
                  null === n || void 0 === n ? void 0 : n.id.toString()),
                  (e.label = null === n || void 0 === n ? void 0 : n.name);
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeNetwork) || e.call(this);
                },
              },
              {
                key: "onClick",
                value: function () {
                  Oe.AV.push("SelectNetwork");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.zb.state.chains,
                    t = e && e.length > 1;
                  return Q(
                    Yr ||
                      (Yr = h([
                        '<button @click="',
                        '" ?disabled="',
                        '"><w3m-network-image chainId="',
                        '"></w3m-network-image><w3m-text variant="xsmall-normal" color="accent">',
                        "</w3m-text></button>",
                      ])),
                    this.onClick,
                    !t,
                    Ro(this.chainId),
                    this.label
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (es.styles = [Vo.globalCss, Yl]),
        Xl([Ie()], es.prototype, "chainId", 2),
        Xl([Ie()], es.prototype, "label", 2),
        (es = Xl([Ze("w3m-account-network-button")], es));
      var ts = C(
          Jr ||
            (Jr = h([
              "@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}",
            ]))
        ),
        ns = Object.defineProperty,
        rs = Object.getOwnPropertyDescriptor,
        is = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? rs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && ns(t, n, o), o;
        },
        os = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).address = void 0),
              (e.name = void 0),
              (e.loading = !0),
              (e.variant = "button"),
              (e.unsubscribeAccount = void 0),
              (e.address = Oe.zb.state.address),
              (e.name = Oe.zb.state.profileName),
              (e.loading = Boolean(Oe.zb.state.profileLoading)),
              (e.unsubscribeAccount = Oe.zb.subscribe(function (t) {
                var n = t.address,
                  r = t.profileName,
                  i = t.profileLoading;
                (e.address = n), (e.name = r), (e.loading = Boolean(i));
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeAccount) || e.call(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = "button" === this.variant,
                    n = { "w3m-loading": this.loading };
                  return Q(
                    Qr ||
                      (Qr = h([
                        '<w3m-text class="',
                        '" variant="',
                        '" color="',
                        '">',
                        "</w3m-text>",
                      ])),
                    Pe(n),
                    t ? "medium-normal" : "large-bold",
                    t ? "inverse" : "primary",
                    this.name
                      ? this.name
                      : ka.truncate(null != (e = this.address) ? e : "")
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (os.styles = [Vo.globalCss, ts]),
        is([Ie()], os.prototype, "address", 2),
        is([Ie()], os.prototype, "name", 2),
        is([Ie()], os.prototype, "loading", 2),
        is([_e()], os.prototype, "variant", 2),
        (os = is([Ze("w3m-address-text")], os));
      var as = C(
          Xr ||
            (Xr = h([
              "@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 10),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px}.w3m-slider::after,.w3m-slider::before{content:'';height:100%;width:50px;z-index:2;position:absolute;background:linear-gradient(to right,var(--w3m-color-bg-1) 0,transparent 100%);top:0}.w3m-slider::before{left:0}.w3m-slider::after{right:0;transform:rotateZ(180deg)}.w3m-track{display:flex;width:calc(70px * 20);animation:scroll 20s linear infinite}.w3m-action{padding:30px 0 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.w3m-action w3m-button-big:last-child{margin-top:10px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;box-shadow:0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08);border-radius:15px}",
            ]))
        ),
        ls = Object.defineProperty,
        ss = Object.getOwnPropertyDescriptor,
        cs = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onGoToQrcode",
                value: function () {
                  Oe.AV.push("Qrcode");
                },
              },
              {
                key: "onGoToGetWallet",
                value: function () {
                  Oe.AV.push("GetWallet");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.uc.state.previewWallets,
                    t = e.length,
                    n = [].concat((0, i.Z)(e), (0, i.Z)(e));
                  return Q(
                    ei ||
                      (ei = h([
                        '<w3m-modal-header title="Connect your wallet" .onAction="',
                        '" .actionIcon="',
                        '"></w3m-modal-header><w3m-modal-content>',
                        '<div class="w3m-action"><w3m-button-big @click="',
                        '"><w3m-text variant="medium-normal" color="inverse">Select Wallet</w3m-text></w3m-button-big><w3m-button-big variant="secondary" @click="',
                        '"><w3m-text variant="medium-normal" color="accent">I don\u2019t have a wallet</w3m-text></w3m-button-big></div></w3m-modal-content>',
                      ])),
                    this.onGoToQrcode,
                    da.QRCODE_ICON,
                    t
                      ? Q(
                          ti ||
                            (ti = h([
                              '<div class="w3m-slider"><div class="w3m-track">',
                              "</div></div>",
                            ])),
                          n.map(function (e) {
                            var t = e.image_url;
                            return Q(
                              ni ||
                                (ni = h([
                                  '<w3m-wallet-image src="',
                                  '"></w3m-wallet-image>',
                                ])),
                              t.lg
                            );
                          })
                        )
                      : null,
                    ka.handleAndroidLinking,
                    this.onGoToGetWallet
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (cs.styles = [Vo.globalCss, as]),
        (cs = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ss(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && ls(t, n, o), o;
        })([Ze("w3m-android-wallet-selection")], cs));
      var us = C(
          ri ||
            (ri = h([
              "@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}",
            ]))
        ),
        ds = Object.defineProperty,
        hs = Object.getOwnPropertyDescriptor,
        vs = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? hs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && ds(t, n, o), o;
        },
        fs = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).address = void 0),
              (e.avatar = void 0),
              (e.loading = !0),
              (e.size = "small"),
              (e.unsubscribeAccount = void 0),
              (e.address = Oe.zb.state.address),
              (e.avatar = Oe.zb.state.profileAvatar),
              (e.loading = Boolean(Oe.zb.state.profileLoading)),
              (e.unsubscribeAccount = Oe.zb.subscribe(function (t) {
                var n = t.address,
                  r = t.profileAvatar,
                  i = t.profileLoading;
                (e.address = n), (e.avatar = r), (e.loading = Boolean(i));
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeAccount) || e.call(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = {
                    "w3m-placeholder": !0,
                    "w3m-small": "small" === this.size,
                    "w3m-medium": "medium" === this.size,
                  };
                  return this.avatar
                    ? Q(
                        ii || (ii = h(['<img class="', '" src="', '">'])),
                        Pe(e),
                        this.avatar
                      )
                    : this.address
                    ? (ka.generateAvatarColors(this.address),
                      Q(
                        oi || (oi = h(['<div class="', '">', "</div>"])),
                        Pe(e),
                        this.loading
                          ? Q(
                              ai || (ai = h(['<div class="w3m-loader"></div>']))
                            )
                          : null
                      ))
                    : null;
                },
              },
            ]),
            n
          );
        })(xe);
      (fs.styles = [Vo.globalCss, us]),
        vs([Ie()], fs.prototype, "address", 2),
        vs([Ie()], fs.prototype, "avatar", 2),
        vs([Ie()], fs.prototype, "loading", 2),
        vs([_e()], fs.prototype, "size", 2),
        (fs = vs([Ze("w3m-avatar")], fs));
      var ps = C(
          li ||
            (li = h([
              "div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}",
            ]))
        ),
        ms = Object.defineProperty,
        gs = Object.getOwnPropertyDescriptor,
        ws = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? gs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && ms(t, n, o), o;
        },
        bs = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e, r, i;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).symbol = void 0),
              (e.amount = void 0),
              (e.unsubscribeAccount = void 0),
              (e.symbol =
                null == (r = Oe.zb.state.balance) ? void 0 : r.symbol),
              (e.amount =
                null == (i = Oe.zb.state.balance) ? void 0 : i.amount),
              (e.unsubscribeAccount = Oe.zb.subscribe(function (t) {
                var n = t.balance;
                (e.symbol = null === n || void 0 === n ? void 0 : n.symbol),
                  (e.amount = null === n || void 0 === n ? void 0 : n.amount);
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeAccount) || e.call(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = "_._";
                  return (
                    "0.0" === this.amount && (e = 0),
                    this.amount &&
                      this.amount.length > 6 &&
                      (e = parseFloat(this.amount).toFixed(3)),
                    Q(
                      si ||
                        (si = h([
                          '<div><w3m-token-image symbol="',
                          '"></w3m-token-image><w3m-text variant="medium-normal" color="primary">',
                          " ",
                          "</w3m-text></div>",
                        ])),
                      Ro(this.symbol),
                      e,
                      this.symbol
                    )
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (bs.styles = [Vo.globalCss, ps]),
        ws([Ie()], bs.prototype, "symbol", 2),
        ws([Ie()], bs.prototype, "amount", 2),
        (bs = ws([Ze("w3m-balance")], bs));
      var ys = C(
          ci ||
            (ci = h([
              ":host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-color-fg-inverse)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}",
            ]))
        ),
        xs = Object.defineProperty,
        ks = Object.getOwnPropertyDescriptor,
        Cs = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ks(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && xs(t, n, o), o;
        },
        Zs = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).loading = !1),
              (e.label = "Connect Wallet"),
              (e.icon = "show"),
              (e.modalUnsub = void 0),
              ka.rejectStandaloneButtonComponent(),
              (e.modalUnsub = Oe.jb.subscribe(function (t) {
                t.open && (e.loading = !0), t.open || (e.loading = !1);
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.modalUnsub) || e.call(this);
                },
              },
              {
                key: "iconTemplate",
                value: function () {
                  return "show" === this.icon ? da.WALLET_CONNECT_ICON : null;
                },
              },
              {
                key: "onClick",
                value: function () {
                  Oe.zb.state.isConnected
                    ? this.onDisconnect()
                    : this.onConnect();
                },
              },
              {
                key: "onConnect",
                value: function () {
                  this.loading = !0;
                  var e = Oe.t0.state.enableNetworkView,
                    t = Oe.zb.state,
                    n = t.chains,
                    r = t.selectedChain,
                    i =
                      (null === n || void 0 === n ? void 0 : n.length) &&
                      n.length > 1;
                  e || (i && !r)
                    ? Oe.jb.open({ route: "SelectNetwork" })
                    : Oe.jb.open({ route: "ConnectWallet" });
                },
              },
              {
                key: "onDisconnect",
                value: function () {
                  Oe.Id.client().disconnect(), Oe.zb.resetAccount();
                },
              },
              {
                key: "render",
                value: function () {
                  return Q(
                    ui ||
                      (ui = h([
                        '<w3m-button-big .disabled="',
                        '" @click="',
                        '">',
                        "</w3m-button-big>",
                      ])),
                    this.loading,
                    this.onClick,
                    this.loading
                      ? Q(
                          di ||
                            (di = h([
                              '<w3m-spinner></w3m-spinner><w3m-text variant="medium-normal" color="accent">Connecting...</w3m-text>',
                            ]))
                        )
                      : Q(
                          hi ||
                            (hi = h([
                              "",
                              '<w3m-text variant="medium-normal" color="inverse">',
                              "</w3m-text>",
                            ])),
                          this.iconTemplate(),
                          this.label
                        )
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Zs.styles = [Vo.globalCss, ys]),
        Cs([Ie()], Zs.prototype, "loading", 2),
        Cs([_e()], Zs.prototype, "label", 2),
        Cs([_e()], Zs.prototype, "icon", 2),
        (Zs = Cs([Ze("w3m-connect-button")], Zs));
      var As = Object.defineProperty,
        Es = Object.getOwnPropertyDescriptor,
        _s = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Es(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && As(t, n, o), o;
        },
        Is = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).isConnected = !1),
              (e.label = "Connect Wallet"),
              (e.icon = "show"),
              (e.balance = "hide"),
              (e.unsubscribeAccount = void 0),
              ka.rejectStandaloneButtonComponent(),
              (e.isConnected = Oe.zb.state.isConnected),
              (e.unsubscribeAccount = Oe.zb.subscribe(function (t) {
                var n = t.isConnected;
                e.isConnected = n;
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeAccount) || e.call(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.t0.state.enableAccountView;
                  return this.isConnected && e
                    ? Q(
                        vi ||
                          (vi = h([
                            '<w3m-account-button balance="',
                            '"></w3m-account-button>',
                          ])),
                        Ro(this.balance)
                      )
                    : Q(
                        fi ||
                          (fi = h([
                            '<w3m-connect-button label="',
                            '" icon="',
                            '"></w3m-connect-button>',
                          ])),
                        this.isConnected ? "Disconnect" : Ro(this.label),
                        Ro(this.icon)
                      );
                },
              },
            ]),
            n
          );
        })(xe);
      _s([Ie()], Is.prototype, "isConnected", 2),
        _s([_e()], Is.prototype, "label", 2),
        _s([_e()], Is.prototype, "icon", 2),
        _s([_e()], Is.prototype, "balance", 2),
        (Is = _s([Ze("w3m-core-button")], Is));
      var Os = function (e) {
          var t = Oe.t0.state,
            n = t.explorerAllowList,
            r = t.explorerDenyList,
            o = (0, i.Z)(e);
          return (
            n &&
              (o = o.filter(function (e) {
                return n.includes(e.id);
              })),
            r &&
              (o = o.filter(function (e) {
                return !r.includes(e.id);
              })),
            o
          );
        },
        Ms = function (e) {
          var t = (0, i.Z)(null !== e && void 0 !== e ? e : []);
          if (window.ethereum) {
            var n = ka.getWalletName("");
            t = t.filter(function (e) {
              var t = e.name;
              return !ka.caseSafeIncludes(t, n);
            });
          }
          return t;
        },
        Ss = function () {
          if (Oe.zb.state.isStandalone) return [];
          var e = Oe.Id.client().getConnectors();
          return (
            !window.ethereum &&
              Oe.zv.isMobile() &&
              (e = e.filter(function (e) {
                var t = e.id;
                return "injected" !== t && t !== va.metaMask;
              })),
            e
          );
        },
        Ps = function (e, t) {
          var n = (0, i.Z)(e);
          if (t) {
            var r = ka.getRecentWallet();
            (n = n.filter(function (e) {
              return !e.values.includes(
                null === r || void 0 === r ? void 0 : r.name
              );
            })).splice(1, 0, t);
          }
          return n;
        },
        Ts = function (e) {
          if (Oe.zb.state.isStandalone) return e;
          var t = Oe.Id.client()
            .getConnectors()
            .map(function (e) {
              return e.name.toUpperCase();
            });
          return e.filter(function (e) {
            var n = e.name;
            return !t.includes(n.toUpperCase());
          });
        },
        Ls = C(
          pi ||
            (pi = h([
              ".w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-color-fg-accent)}",
            ]))
        ),
        js = Object.defineProperty,
        Ns = Object.getOwnPropertyDescriptor,
        Rs = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onDesktopWallet",
                value: function (e) {
                  Oe.AV.push("DesktopConnector", { DesktopConnector: e });
                },
              },
              {
                key: "onInjectedWallet",
                value: function () {
                  Oe.AV.push("InjectedConnector");
                },
              },
              {
                key: "onInstallConnector",
                value: function () {
                  Oe.AV.push("InstallConnector", {
                    InstallConnector: {
                      id: "metaMask",
                      name: "MetaMask",
                      isMobile: !0,
                      url: "https://metamask.io",
                    },
                  });
                },
              },
              {
                key: "onConnectorWallet",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e(t) {
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!window.ethereum) {
                                  e.next = 9;
                                  break;
                                }
                                if ("injected" !== t && t !== va.metaMask) {
                                  e.next = 5;
                                  break;
                                }
                                this.onInjectedWallet(), (e.next = 7);
                                break;
                              case 5:
                                return (
                                  (e.next = 7), ka.handleConnectorConnection(t)
                                );
                              case 7:
                                e.next = 10;
                                break;
                              case 9:
                                this.onInstallConnector();
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "desktopWalletsTemplate",
                value: function () {
                  var e = this,
                    t = Oe.t0.state.desktopWallets;
                  return null === t || void 0 === t
                    ? void 0
                    : t.map(function (t) {
                        var n = t.id,
                          r = t.name,
                          i = t.links,
                          o = i.universal,
                          a = i.native;
                        return Q(
                          mi ||
                            (mi = h([
                              '<w3m-wallet-button walletId="',
                              '" name="',
                              '" .onClick="',
                              '"></w3m-wallet-button>',
                            ])),
                          n,
                          r,
                          function () {
                            return e.onDesktopWallet({
                              name: r,
                              walletId: n,
                              universal: o,
                              native: a,
                            });
                          }
                        );
                      });
                },
              },
              {
                key: "previewWalletsTemplate",
                value: function () {
                  var e = this,
                    t = Os(Oe.uc.state.previewWallets);
                  return (t = Ts(t)).map(function (t) {
                    var n = t.name,
                      r = t.desktop,
                      i = r.universal,
                      o = r.native,
                      a = t.homepage,
                      l = t.image_url,
                      s = t.id;
                    return Q(
                      gi ||
                        (gi = h([
                          '<w3m-wallet-button src="',
                          '" name="',
                          '" .onClick="',
                          '"></w3m-wallet-button>',
                        ])),
                      l.lg,
                      n,
                      function () {
                        return e.onDesktopWallet({
                          walletId: s,
                          name: n,
                          native: o,
                          universal: i || a,
                          icon: l.lg,
                        });
                      }
                    );
                  });
                },
              },
              {
                key: "connectorWalletsTemplate",
                value: function () {
                  var e = this;
                  return Ss().map(function (t) {
                    var n = t.id,
                      r = t.name,
                      i = t.ready;
                    return Q(
                      wi ||
                        (wi = h([
                          '<w3m-wallet-button .installed="',
                          '" name="',
                          '" walletId="',
                          '" .onClick="',
                          '"></w3m-wallet-button>',
                        ])),
                      ["injected", "metaMask"].includes(n) && i,
                      r,
                      n,
                      (0, l.Z)(
                        (0, a.Z)().mark(function t() {
                          return (0, a.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return t.abrupt(
                                    "return",
                                    e.onConnectorWallet(n)
                                  );
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )
                    );
                  });
                },
              },
              {
                key: "recentWalletTemplate",
                value: function () {
                  var e = this,
                    t = ka.getRecentWallet();
                  if (t) {
                    var n = t.id,
                      r = t.name,
                      i = t.links,
                      o = t.image;
                    return Q(
                      bi ||
                        (bi = h([
                          '<w3m-wallet-button .recent="',
                          '" name="',
                          '" walletId="',
                          '" src="',
                          '" .onClick="',
                          '"></w3m-wallet-button>',
                        ])),
                      !0,
                      r,
                      Ro(n),
                      Ro(o),
                      function () {
                        return e.onDesktopWallet({
                          name: r,
                          walletId: n,
                          universal:
                            null === i || void 0 === i ? void 0 : i.universal,
                          native:
                            null === i || void 0 === i ? void 0 : i.native,
                          icon: o,
                        });
                      }
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.zb.state.standaloneUri,
                    t = this.desktopWalletsTemplate(),
                    n = this.previewWalletsTemplate(),
                    r = this.connectorWalletsTemplate(),
                    o = this.recentWalletTemplate(),
                    a = [].concat(
                      (0, i.Z)(null !== t && void 0 !== t ? t : []),
                      (0, i.Z)(n)
                    ),
                    l = [].concat((0, i.Z)(r), (0, i.Z)(a)),
                    s = Ps(l, o),
                    c = Ps(a, o),
                    u = e ? c : s,
                    d = u.length > 4,
                    v = [];
                  v = d
                    ? u
                        .filter(function (e) {
                          return !e.values.includes(va.coinbaseWallet);
                        })
                        .slice(0, 3)
                    : u;
                  var f = Boolean(v.length);
                  return Q(
                    yi ||
                      (yi = h([
                        '<w3m-modal-header border="',
                        '" title="Connect your wallet" .onAction="',
                        '" .actionIcon="',
                        '"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">',
                        '<w3m-text variant="small-normal" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">',
                        '<w3m-text variant="small-normal" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>',
                        "",
                      ])),
                    !0,
                    ka.handleUriCopy,
                    da.COPY_ICON,
                    da.MOBILE_ICON,
                    da.SCAN_ICON,
                    f
                      ? Q(
                          xi ||
                            (xi = h([
                              '<w3m-modal-footer><div class="w3m-desktop-title">',
                              '<w3m-text variant="small-normal" color="accent">Desktop</w3m-text></div><div class="w3m-grid">',
                              " ",
                              "</div></w3m-modal-footer>",
                            ])),
                          da.DESKTOP_ICON,
                          v,
                          d
                            ? Q(
                                ki ||
                                  (ki = h([
                                    "<w3m-view-all-wallets-button></w3m-view-all-wallets-button>",
                                  ]))
                              )
                            : null
                        )
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Rs.styles = [Vo.globalCss, Ls]),
        (Rs = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Ns(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && js(t, n, o), o;
        })([Ze("w3m-desktop-wallet-selection")], Rs));
      var Ds = C(
          Ci ||
            (Ci = h([
              "div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-color-fg-accent);text-decoration:none;transition:opacity .2s ease-in-out}a:hover{opacity:.8}",
            ]))
        ),
        Bs = Object.defineProperty,
        zs = Object.getOwnPropertyDescriptor,
        Us = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = Oe.t0.state,
                    t = e.termsOfServiceUrl,
                    n = e.privacyPolicyUrl;
                  return (null !== t && void 0 !== t ? t : n)
                    ? Q(
                        Zi ||
                          (Zi = h([
                            '<div><w3m-text variant="small-normal" color="secondary">By connecting your wallet, you agree to our<br>',
                            " ",
                            " ",
                            "</w3m-text></div>",
                          ])),
                        t
                          ? Q(
                              Ai ||
                                (Ai = h([
                                  '<a href="',
                                  '" target="_blank" rel="noopener noreferrer">Terms of Service</a>',
                                ])),
                              t
                            )
                          : null,
                        t && n ? "and" : null,
                        n
                          ? Q(
                              Ei ||
                                (Ei = h([
                                  '<a href="',
                                  '" target="_blank" rel="noopener noreferrer">Privacy Policy</a>',
                                ])),
                              n
                            )
                          : null
                      )
                    : null;
                },
              },
            ]),
            n
          );
        })(xe);
      (Us.styles = [Vo.globalCss, Ds]),
        (Us = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? zs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Bs(t, n, o), o;
        })([Ze("w3m-legal-notice")], Us));
      var Ws = C(
          _i ||
            (_i = h([
              ".w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}",
            ]))
        ),
        $s = Object.defineProperty,
        Hs = Object.getOwnPropertyDescriptor,
        Vs = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onGoToQrcode",
                value: function () {
                  Oe.AV.push("Qrcode");
                },
              },
              {
                key: "onConnectorWallet",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e(t) {
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), ka.handleConnectorConnection(t)
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "mobileWalletsTemplate",
                value: function () {
                  var e = Oe.t0.state.mobileWallets,
                    t = Ms(e);
                  if (t.length)
                    return t.map(function (e) {
                      var t = e.id,
                        n = e.name,
                        r = e.links,
                        i = r.universal,
                        o = r.native;
                      return Q(
                        Ii ||
                          (Ii = h([
                            '<w3m-wallet-button name="',
                            '" walletId="',
                            '" .onClick="',
                            '"></w3m-wallet-button>',
                          ])),
                        n,
                        t,
                        (0, l.Z)(
                          (0, a.Z)().mark(function e() {
                            return (0, a.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      "return",
                                      ka.handleMobileLinking({
                                        links: { native: o, universal: i },
                                        name: n,
                                        id: t,
                                      })
                                    );
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      );
                    });
                },
              },
              {
                key: "previewWalletsTemplate",
                value: function () {
                  var e = Oe.uc.state.previewWallets,
                    t = Ms(e);
                  return (
                    (t = Os(t)),
                    (t = Ts(t)).map(function (e) {
                      var t = e.image_url,
                        n = e.name,
                        r = e.mobile,
                        i = r.native,
                        o = r.universal,
                        s = e.id;
                      return Q(
                        Oi ||
                          (Oi = h([
                            '<w3m-wallet-button name="',
                            '" src="',
                            '" .onClick="',
                            '"></w3m-wallet-button>',
                          ])),
                        n,
                        t.lg,
                        (0, l.Z)(
                          (0, a.Z)().mark(function e() {
                            return (0, a.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      "return",
                                      ka.handleMobileLinking({
                                        links: { native: i, universal: o },
                                        name: n,
                                        id: s,
                                        image: t.lg,
                                      })
                                    );
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      );
                    })
                  );
                },
              },
              {
                key: "connectorWalletsTemplate",
                value: function () {
                  var e = this,
                    t = Ss();
                  return (
                    window.ethereum ||
                      (t = t.filter(function (e) {
                        var t = e.id;
                        return "injected" !== t && t !== va.metaMask;
                      })),
                    t.map(function (t) {
                      var n = t.name,
                        r = t.id,
                        i = t.ready;
                      return Q(
                        Mi ||
                          (Mi = h([
                            '<w3m-wallet-button .installed="',
                            '" name="',
                            '" walletId="',
                            '" .onClick="',
                            '"></w3m-wallet-button>',
                          ])),
                        ["injected", "metaMask"].includes(r) && i,
                        n,
                        r,
                        (0, l.Z)(
                          (0, a.Z)().mark(function t() {
                            return (0, a.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return t.abrupt(
                                      "return",
                                      e.onConnectorWallet(r)
                                    );
                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      );
                    })
                  );
                },
              },
              {
                key: "recentWalletTemplate",
                value: function () {
                  var e = ka.getRecentWallet();
                  if (e) {
                    var t = e.id,
                      n = e.name,
                      r = e.links,
                      i = e.image;
                    return Q(
                      Si ||
                        (Si = h([
                          '<w3m-wallet-button .recent="',
                          '" name="',
                          '" walletId="',
                          '" src="',
                          '" .onClick="',
                          '"></w3m-wallet-button>',
                        ])),
                      !0,
                      n,
                      Ro(t),
                      Ro(i),
                      (0, l.Z)(
                        (0, a.Z)().mark(function e() {
                          return (0, a.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    ka.handleMobileLinking({
                                      name: n,
                                      id: t,
                                      links: r,
                                      image: i,
                                    })
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.zb.state.standaloneUri,
                    t = this.connectorWalletsTemplate(),
                    n = this.mobileWalletsTemplate(),
                    r = this.previewWalletsTemplate(),
                    o = this.recentWalletTemplate(),
                    a = null !== n && void 0 !== n ? n : r,
                    l = [].concat((0, i.Z)(t), (0, i.Z)(a)),
                    s = Ps(l, o),
                    c = Ps(a, o),
                    u = e ? c : s,
                    d = u.length > 8,
                    v = [];
                  v = d
                    ? u
                        .filter(function (e) {
                          return !e.values.includes(va.coinbaseWallet);
                        })
                        .slice(0, 7)
                    : u;
                  var f = v.slice(0, 4),
                    p = v.slice(4, 8),
                    m = Boolean(v.length);
                  return Q(
                    Pi ||
                      (Pi = h([
                        '<w3m-modal-header title="Connect your wallet" .onAction="',
                        '" .actionIcon="',
                        '"></w3m-modal-header>',
                        "",
                      ])),
                    this.onGoToQrcode,
                    da.QRCODE_ICON,
                    m
                      ? Q(
                          Ti ||
                            (Ti = h([
                              '<w3m-modal-content><div class="w3m-grid">',
                              " ",
                              "</div></w3m-modal-content>",
                            ])),
                          f,
                          p.length
                            ? Q(
                                Li || (Li = h(["", " ", ""])),
                                p,
                                d
                                  ? Q(
                                      ji ||
                                        (ji = h([
                                          "<w3m-view-all-wallets-button></w3m-view-all-wallets-button>",
                                        ]))
                                    )
                                  : null
                              )
                            : null
                        )
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Vs.styles = [Vo.globalCss, Ws]),
        (Vs = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Hs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && $s(t, n, o), o;
        })([Ze("w3m-mobile-wallet-selection")], Vs));
      var Fs = C(
          Ni ||
            (Ni = h([
              ":host{all:initial}.w3m-overlay{inset:0;position:fixed;z-index:var(--w3m-modal-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}.w3m-open{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0}.w3m-card{width:100%;position:relative;transform:translateY(5px);border-radius:30px;overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{transform:translateY(5px);border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}",
            ]))
        ),
        qs = Object.defineProperty,
        Gs = Object.getOwnPropertyDescriptor,
        Ks = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Gs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && qs(t, n, o), o;
        },
        Ys = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            if (
              ((0, s.Z)(this, n),
              ((e = t.call(this)).open = !1),
              (e.preload = !0),
              (e.activeChainId = void 0),
              (e.unsubscribeModal = void 0),
              (e.unsubscribeConfig = void 0),
              (e.unwatchAccount = void 0),
              (e.unwatchNetwork = void 0),
              (e.abortController = void 0),
              Vo.setTheme(),
              (e.unsubscribeConfig = Oe.t0.subscribe(Vo.setTheme)),
              (e.unsubscribeModal = Oe.jb.subscribe(function (t) {
                t.open ? e.onOpenModalEvent() : e.onCloseModalEvent();
              })),
              !Oe.zb.state.isStandalone)
            ) {
              Oe.zb.getAccount();
              var i = Oe.zb.getSelectedChain();
              (e.activeChainId = null === i || void 0 === i ? void 0 : i.id),
                e.fetchEnsProfile(),
                e.fetchBalance(),
                (e.unwatchNetwork = Oe.Id.client().watchNetwork(function (t) {
                  var n = t.chain;
                  n &&
                    e.activeChainId !== n.id &&
                    (Oe.zb.setSelectedChain(n),
                    (e.activeChainId = n.id),
                    Oe.zb.resetBalance(),
                    e.fetchBalance());
                })),
                (e.unwatchAccount = Oe.Id.client().watchAccount(function (t) {
                  var n = Oe.zb.state.address;
                  t.address !== n &&
                    (e.fetchEnsProfile(t.address), e.fetchBalance(t.address)),
                    Oe.zb.setAddress(t.address),
                    Oe.zb.setIsConnected(t.isConnected);
                }));
            }
            return e.preloadModalData(), (0, r.Z)(e);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e, t, n, r;
                  null == (e = this.unsubscribeModal) || e.call(this),
                    null == (t = this.unsubscribeConfig) || t.call(this),
                    null == (n = this.unwatchAccount) || n.call(this),
                    null == (r = this.unwatchNetwork) || r.call(this);
                },
              },
              {
                key: "overlayEl",
                get: function () {
                  return ka.getShadowRootElement(this, ".w3m-overlay");
                },
              },
              {
                key: "containerEl",
                get: function () {
                  return ka.getShadowRootElement(this, ".w3m-container");
                },
              },
              {
                key: "fetchEnsProfile",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e(t) {
                      var n, r, i, o, l, s, c;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0), !Oe.t0.state.enableAccountView)
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                if (
                                  (Oe.zb.setProfileLoading(!0),
                                  (n =
                                    null !== t && void 0 !== t
                                      ? t
                                      : Oe.zb.state.address),
                                  (r = Oe.Id.client().getDefaultChain()),
                                  (i = r.id),
                                  !n || 1 !== i)
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  Promise.all([
                                    Oe.Id.client().fetchEnsName({
                                      address: n,
                                      chainId: 1,
                                    }),
                                    Oe.Id.client().fetchEnsAvatar({
                                      address: n,
                                      chainId: 1,
                                    }),
                                  ])
                                );
                              case 7:
                                if (
                                  ((o = e.sent),
                                  (l = (0, p.Z)(o, 2)),
                                  (s = l[0]),
                                  (c = l[1]),
                                  (e.t0 = c),
                                  !e.t0)
                                ) {
                                  e.next = 15;
                                  break;
                                }
                                return (e.next = 15), ka.preloadImage(c);
                              case 15:
                                Oe.zb.setProfileName(s),
                                  Oe.zb.setProfileAvatar(c);
                              case 17:
                                e.next = 22;
                                break;
                              case 19:
                                (e.prev = 19),
                                  (e.t1 = e.catch(0)),
                                  console.error(e.t1),
                                  Oe.Vs.openToast(
                                    ka.getErrorMessage(e.t1),
                                    "error"
                                  );
                              case 22:
                                return (
                                  (e.prev = 22),
                                  Oe.zb.setProfileLoading(!1),
                                  e.finish(22)
                                );
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 19, 22, 25]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "fetchBalance",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e(t) {
                      var n, r;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0), !Oe.t0.state.enableAccountView)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                if (
                                  (Oe.zb.setBalanceLoading(!0),
                                  !(n =
                                    null !== t && void 0 !== t
                                      ? t
                                      : Oe.zb.state.address))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  Oe.Id.client().fetchBalance({ address: n })
                                );
                              case 7:
                                (r = e.sent),
                                  Oe.zb.setBalance({
                                    amount: r.formatted,
                                    symbol: r.symbol,
                                  });
                              case 9:
                                e.next = 14;
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  console.error(e.t0),
                                  Oe.Vs.openToast(
                                    ka.getErrorMessage(e.t0),
                                    "error"
                                  );
                              case 14:
                                return (
                                  (e.prev = 14),
                                  Oe.zb.setBalanceLoading(!1),
                                  e.finish(14)
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 11, 14, 17]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "toggleBodyScroll",
                value: function (e) {
                  if (document.querySelector("body"))
                    if (e) {
                      var t = document.getElementById("w3m-styles");
                      null === t || void 0 === t || t.remove();
                    } else
                      document.head.insertAdjacentHTML(
                        "beforeend",
                        '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
                      );
                },
              },
              {
                key: "preloadExplorerData",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t, n, r, o, l, s, c, u, d, h, v;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = Oe.zb.state),
                                  (r = n.standaloneChains),
                                  (o = n.chains),
                                  (l = n.walletConnectVersion),
                                  (s =
                                    null === r || void 0 === r
                                      ? void 0
                                      : r.join(",")),
                                  (e.next = 3),
                                  Promise.all([
                                    Oe.uc.getPreviewWallets({
                                      page: 1,
                                      entries: 10,
                                      chains: s,
                                      device: Oe.zv.isMobile()
                                        ? "mobile"
                                        : "desktop",
                                      version: l,
                                    }),
                                    Oe.uc.getRecomendedWallets(),
                                  ])
                                );
                              case 3:
                                return (
                                  Oe.zb.setIsDataLoaded(!0),
                                  (c = Oe.uc.state),
                                  (u = c.previewWallets),
                                  (d = c.recomendedWallets),
                                  (h =
                                    null !=
                                    (t =
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.map(function (e) {
                                            return ka.getChainIcon(e.id);
                                          }))
                                      ? t
                                      : []),
                                  (v = []
                                    .concat((0, i.Z)(u), (0, i.Z)(d))
                                    .map(function (e) {
                                      return e.image_url.lg;
                                    })),
                                  (e.next = 7),
                                  this.preloadExplorerImages(
                                    [].concat((0, i.Z)(h), (0, i.Z)(v))
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "preloadExplorerImages",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e(t) {
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.t0 = t.length), !e.t0)) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 4),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      var e = (0, l.Z)(
                                        (0, a.Z)().mark(function e(t) {
                                          return (0, a.Z)().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    ka.preloadImage(t)
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "preloadCustomImages",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t;
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = ka.getCustomImageUrls()),
                                (e.t0 = t.length),
                                !e.t0)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (e.next = 5),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      var e = (0, l.Z)(
                                        (0, a.Z)().mark(function e(t) {
                                          return (0, a.Z)().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    ka.preloadImage(t)
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
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
              {
                key: "preloadConnectorImages",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t;
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (Oe.zb.state.isStandalone) {
                                e.next = 6;
                                break;
                              }
                              if (
                                ((t = ka.getConnectorImageUrls()),
                                (e.t0 = t.length),
                                !e.t0)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (e.next = 6),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      var e = (0, l.Z)(
                                        (0, a.Z)().mark(function e(t) {
                                          return (0, a.Z)().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    ka.preloadImage(t)
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 6:
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
              {
                key: "preloadModalData",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0), (e.t0 = this.preload), !e.t0)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (this.preload = !1),
                                  (e.next = 6),
                                  Promise.all([
                                    this.preloadExplorerData(),
                                    this.preloadCustomImages(),
                                    this.preloadConnectorImages(),
                                  ])
                                );
                              case 6:
                                e.next = 11;
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t1 = e.catch(0)),
                                  console.error(e.t1),
                                  Oe.Vs.openToast("Failed preloading", "error");
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onCloseModal",
                value: function (e) {
                  e.target === e.currentTarget && Oe.jb.close();
                },
              },
              {
                key: "onOpenModalEvent",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.preloadModalData();
                              case 2:
                                return (
                                  this.toggleBodyScroll(!1),
                                  (t = 0.2),
                                  (e.next = 6),
                                  Ft(
                                    this.containerEl,
                                    { y: 0 },
                                    { duration: 0 }
                                  ).finished
                                );
                              case 6:
                                Ft(
                                  this.overlayEl,
                                  { opacity: [0, 1] },
                                  { duration: 0.2, delay: t }
                                ),
                                  Ft(
                                    this.containerEl,
                                    ka.isMobileAnimation()
                                      ? { y: ["50vh", 0] }
                                      : { scale: [0.98, 1] },
                                    {
                                      scale: { easing: No({ velocity: 0.4 }) },
                                      y: { easing: No({ mass: 0.5 }) },
                                      delay: t,
                                    }
                                  ),
                                  this.addKeyboardEvents(),
                                  (this.open = !0);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onCloseModalEvent",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.toggleBodyScroll(!0),
                                  this.removeKeyboardEvents(),
                                  (e.next = 4),
                                  Promise.all([
                                    Ft(
                                      this.containerEl,
                                      ka.isMobileAnimation()
                                        ? { y: [0, "50vh"] }
                                        : { scale: [1, 0.98] },
                                      {
                                        scale: { easing: No({ velocity: 0 }) },
                                        y: { easing: No({ mass: 0.5 }) },
                                      }
                                    ).finished,
                                    Ft(
                                      this.overlayEl,
                                      { opacity: [1, 0] },
                                      { duration: 0.2 }
                                    ).finished,
                                  ])
                                );
                              case 4:
                                this.open = !1;
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addKeyboardEvents",
                value: function () {
                  var e = this;
                  (this.abortController = new AbortController()),
                    window.addEventListener(
                      "keydown",
                      function (t) {
                        var n;
                        "Escape" === t.key
                          ? Oe.jb.close()
                          : "Tab" === t.key &&
                            ((null != (n = t.target) &&
                              n.tagName.includes("W3M-")) ||
                              e.containerEl.focus());
                      },
                      this.abortController
                    ),
                    this.containerEl.focus();
                },
              },
              {
                key: "removeKeyboardEvents",
                value: function () {
                  var e;
                  null == (e = this.abortController) || e.abort(),
                    (this.abortController = void 0);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { "w3m-overlay": !0, "w3m-open": this.open };
                  return Q(
                    Ri ||
                      (Ri = h([
                        '<div id="w3m-modal" class="',
                        '" @click="',
                        '" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">',
                        "</div></div>",
                      ])),
                    Pe(e),
                    this.onCloseModal,
                    this.open
                      ? Q(
                          Di ||
                            (Di = h([
                              '<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>',
                            ]))
                        )
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Ys.styles = [Vo.globalCss, Fs]),
        Ks([Ie()], Ys.prototype, "open", 2),
        Ks([Ie()], Ys.prototype, "preload", 2),
        Ks([Ie()], Ys.prototype, "activeChainId", 2),
        (Ys = Ks([Ze("w3m-modal")], Ys));
      var Js = C(
          Bi ||
            (Bi = h([
              ":host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}",
            ]))
        ),
        Qs = Object.defineProperty,
        Xs = Object.getOwnPropertyDescriptor,
        ec = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Xs(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Qs(t, n, o), o;
        },
        tc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            (0, s.Z)(this, n),
              ((e = t.call(this)).chainId = ""),
              (e.label = ""),
              (e.wrongNetwork = !1),
              (e.unsubscribeNetwork = void 0),
              ka.rejectStandaloneButtonComponent();
            var r = Oe.zb.state.selectedChain;
            return (
              e.onSetChainData(r),
              (e.unsubscribeNetwork = Oe.zb.subscribe(function (t) {
                var n = t.selectedChain;
                e.onSetChainData(n);
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.unsubscribeNetwork) || e.call(this);
                },
              },
              {
                key: "onSetChainData",
                value: function (e) {
                  if (e) {
                    var t = Oe.zb.state.chains,
                      n =
                        null === t || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return e.id;
                            });
                    (this.chainId = e.id.toString()),
                      (this.wrongNetwork = !(null != n && n.includes(e.id))),
                      (this.label = this.wrongNetwork
                        ? "Wrong Network"
                        : e.name);
                  }
                },
              },
              {
                key: "onClick",
                value: function () {
                  Oe.jb.open({ route: "SelectNetwork" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = Oe.zb.state.chains,
                    n = t && t.length > 1;
                  return Q(
                    zi ||
                      (zi = h([
                        '<w3m-button-big @click="',
                        '" ?disabled="',
                        '"><w3m-network-image chainId="',
                        '"></w3m-network-image><w3m-text variant="medium-normal" color="inverse">',
                        "</w3m-text></w3m-button-big>",
                      ])),
                    this.onClick,
                    !n,
                    Ro(this.chainId),
                    null != (e = this.label) && e.length
                      ? this.label
                      : "Select Network"
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (tc.styles = [Vo.globalCss, Js]),
        ec([Ie()], tc.prototype, "chainId", 2),
        ec([Ie()], tc.prototype, "label", 2),
        ec([Ie()], tc.prototype, "wrongNetwork", 2),
        (tc = ec([Ze("w3m-network-switch")], tc));
      var nc = C(
          Ui ||
            (Ui = h([
              "button{display:flex;flex-direction:column;padding:5px 10px;border-radius:10px;transition:background-color .2s ease;height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:15px;justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:8px;border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}",
            ]))
        ),
        rc = Object.defineProperty,
        ic = Object.getOwnPropertyDescriptor,
        oc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onClick",
                value: function () {
                  Oe.AV.push("WalletExplorer");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Oe.uc.state.previewWallets,
                    t = ka.getCustomWallets(),
                    n = []
                      .concat((0, i.Z)(e), (0, i.Z)(t))
                      .reverse()
                      .slice(0, 4);
                  return Q(
                    Wi ||
                      (Wi = h([
                        '<button @click="',
                        '"><div class="w3m-icons">',
                        '</div><w3m-text variant="xsmall-normal">View All</w3m-text></button>',
                      ])),
                    this.onClick,
                    n.map(function (e) {
                      var t,
                        n = null == (t = e.image_url) ? void 0 : t.lg;
                      if (n) return Q($i || ($i = h(['<img src="', '">'])), n);
                      var r = ka.getWalletId(e.id),
                        i = ka.getWalletIcon(r);
                      return i
                        ? Q(Hi || (Hi = h(['<img src="', '">'])), i)
                        : da.WALLET_PLACEHOLDER;
                    })
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (oc.styles = [Vo.globalCss, nc]),
        (oc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? ic(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && rc(t, n, o), o;
        })([Ze("w3m-view-all-wallets-button")], oc));
      var ac = C(
          Vi ||
            (Vi = h([
              ".w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}",
            ]))
        ),
        lc = Object.defineProperty,
        sc = Object.getOwnPropertyDescriptor,
        cc = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? sc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && lc(t, n, o), o;
        },
        uc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).uri = ""),
              e.createConnectionAndWait(),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "overlayEl",
                get: function () {
                  return ka.getShadowRootElement(this, ".w3m-qr-container");
                },
              },
              {
                key: "createConnectionAndWait",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t,
                        n,
                        r,
                        i = this,
                        o = arguments;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    o.length > 0 && void 0 !== o[0] ? o[0] : 0),
                                  (e.prev = 1),
                                  !(r = Oe.zb.state.standaloneUri))
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                setTimeout(function () {
                                  return (i.uri = r);
                                }, 0),
                                  (e.next = 10);
                                break;
                              case 7:
                                return (
                                  (e.next = 9),
                                  Oe.Id.client().connectWalletConnect(
                                    function (e) {
                                      return (i.uri = e);
                                    },
                                    null == (n = Oe.zb.state.selectedChain)
                                      ? void 0
                                      : n.id
                                  )
                                );
                              case 9:
                                Oe.jb.close();
                              case 10:
                                e.next = 15;
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  console.error(e.t0),
                                  Oe.Vs.openToast(
                                    "Connection request declined",
                                    "error"
                                  ),
                                  t < 2 && this.createConnectionAndWait(t + 1);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  return Q(
                    Fi ||
                      (Fi = h(['<div class="w3m-qr-container">', "</div>"])),
                    this.uri
                      ? Q(
                          qi ||
                            (qi = h([
                              '<w3m-qrcode size="',
                              '" uri="',
                              '"></w3m-qrcode>',
                            ])),
                          this.overlayEl.offsetWidth,
                          this.uri
                        )
                      : Q(Gi || (Gi = h(["<w3m-spinner></w3m-spinner>"])))
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (uc.styles = [Vo.globalCss, ac]),
        cc([Ie()], uc.prototype, "uri", 2),
        (uc = cc([Ze("w3m-walletconnect-qr")], uc));
      var dc = C(
          Ki ||
            (Ki = h([
              ".w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-color-success);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-color-success),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}",
            ]))
        ),
        hc = Object.defineProperty,
        vc = Object.getOwnPropertyDescriptor,
        fc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onDisconnect",
                value: function () {
                  Oe.jb.close(),
                    Oe.Id.client().disconnect(),
                    Oe.zb.resetAccount();
                },
              },
              {
                key: "onCopyAddress",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t;
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                navigator.clipboard.writeText(
                                  null != (t = Oe.zb.state.address) ? t : ""
                                )
                              );
                            case 2:
                              Oe.Vs.openToast("Address copied", "success");
                            case 3:
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
              {
                key: "render",
                value: function () {
                  return Q(
                    Yi ||
                      (Yi = h([
                        '<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-normal" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="',
                        '" .icon="',
                        '"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="',
                        '" .icon="',
                        '"></w3m-box-button></div></w3m-modal-footer>',
                      ])),
                    this.onCopyAddress,
                    da.ACCOUNT_COPY,
                    this.onDisconnect,
                    da.ACCOUNT_DISCONNECT
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (fc.styles = [Vo.globalCss, dc]),
        (fc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? vc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && hc(t, n, o), o;
        })([Ze("w3m-account-view")], fc));
      var pc = Object.defineProperty,
        mc = Object.getOwnPropertyDescriptor,
        gc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "viewTemplate",
                value: function () {
                  return Oe.zv.isAndroid()
                    ? Q(
                        Ji ||
                          (Ji = h([
                            "<w3m-android-wallet-selection></w3m-android-wallet-selection>",
                          ]))
                      )
                    : Oe.zv.isMobile()
                    ? Q(
                        Qi ||
                          (Qi = h([
                            "<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>",
                          ]))
                      )
                    : Q(
                        Xi ||
                          (Xi = h([
                            "<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>",
                          ]))
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  return Q(
                    eo ||
                      (eo = h(["", "<w3m-legal-notice></w3m-legal-notice>"])),
                    this.viewTemplate()
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (gc.styles = [Vo.globalCss]),
        (gc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? mc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && pc(t, n, o), o;
        })([Ze("w3m-connect-wallet-view")], gc));
      var wc = C(
          to ||
            (to = h([
              ".w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}.w3m-install-actions{display:flex}.w3m-install-actions w3m-button{margin:0 5px;opacity:1}",
            ]))
        ),
        bc = Object.defineProperty,
        yc = Object.getOwnPropertyDescriptor,
        xc = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? yc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && bc(t, n, o), o;
        },
        kc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).uri = ""),
              e.createConnectionAndWait(),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "getRouterData",
                value: function () {
                  var e,
                    t =
                      null == (e = Oe.AV.state.data)
                        ? void 0
                        : e.DesktopConnector;
                  if (!t) throw new Error("Missing router data");
                  return t;
                },
              },
              {
                key: "onFormatAndRedirect",
                value: function (e) {
                  var t = this.getRouterData(),
                    n = t.native,
                    r = t.universal,
                    i = t.name;
                  if (n) {
                    var o = Oe.zv.formatNativeUrl(n, e, i);
                    Oe.zv.openHref(o);
                  } else if (r) {
                    var a = Oe.zv.formatUniversalUrl(r, e, i);
                    Oe.zv.openHref(a, "_blank");
                  }
                },
              },
              {
                key: "createConnectionAndWait",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t,
                        n,
                        r,
                        i,
                        o,
                        l,
                        s,
                        c,
                        u,
                        d,
                        h = this,
                        v = arguments;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    v.length > 0 && void 0 !== v[0] ? v[0] : 0),
                                  (r = Oe.zb.state.standaloneUri),
                                  (i = this.getRouterData()),
                                  (o = i.name),
                                  (l = i.walletId),
                                  (s = i.native),
                                  (c = i.universal),
                                  (u = i.icon),
                                  (d = {
                                    name: o,
                                    id: l,
                                    links: { native: s, universal: c },
                                    image: u,
                                  }),
                                  !r)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                ka.setRecentWallet(d),
                                  this.onFormatAndRedirect(r),
                                  (e.next = 16);
                                break;
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (e.next = 9),
                                  Oe.Id.client().connectWalletConnect(
                                    function (e) {
                                      (h.uri = e), h.onFormatAndRedirect(e);
                                    },
                                    null == (n = Oe.zb.state.selectedChain)
                                      ? void 0
                                      : n.id
                                  )
                                );
                              case 9:
                                ka.setRecentWallet(d),
                                  Oe.jb.close(),
                                  (e.next = 16);
                                break;
                              case 13:
                                (e.prev = 13),
                                  (e.t0 = e.catch(6)),
                                  console.error(e.t0),
                                  Oe.Vs.openToast(
                                    "Connection request declined",
                                    "error"
                                  ),
                                  t < 2 && this.createConnectionAndWait(t + 1);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 13]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onConnectWithMobile",
                value: function () {
                  Oe.AV.push("Qrcode");
                },
              },
              {
                key: "onGoToWallet",
                value: function () {
                  var e = this.getRouterData(),
                    t = e.universal,
                    n = e.name;
                  if (t) {
                    var r = Oe.zv.formatUniversalUrl(t, this.uri, n);
                    Oe.zv.openHref(r, "_blank");
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.getRouterData(),
                    n = t.name,
                    r = t.icon,
                    i = t.universal,
                    o = t.walletId,
                    s = ka.getWalletName(n);
                  return Q(
                    no ||
                      (no = h([
                        '<w3m-modal-header title="',
                        '"></w3m-modal-header><w3m-modal-content><div class="w3m-wrapper">',
                        '<div class="w3m-connecting-title"><w3m-spinner></w3m-spinner><w3m-text variant="large-bold" color="secondary">',
                        '</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="',
                        '" .iconRight="',
                        '">Retry</w3m-button>',
                        "</div></div></w3m-modal-content>",
                      ])),
                    s,
                    r
                      ? Q(
                          ro ||
                            (ro = h([
                              '<w3m-wallet-image src="',
                              '" size="lg"></w3m-wallet-image>',
                            ])),
                          r
                        )
                      : Q(
                          io ||
                            (io = h([
                              '<w3m-wallet-image size="lg" walletid="',
                              '"></w3m-wallet-image>',
                            ])),
                          Ro(o)
                        ),
                    "Continue in ".concat(s, "..."),
                    (0, l.Z)(
                      (0, a.Z)().mark(function t() {
                        return (0, a.Z)().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  e.createConnectionAndWait()
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    ),
                    da.RETRY_ICON,
                    i
                      ? Q(
                          oo ||
                            (oo = h([
                              '<w3m-button .onClick="',
                              '" .iconLeft="',
                              '">Go to Wallet</w3m-button>',
                            ])),
                          this.onGoToWallet.bind(this),
                          da.ARROW_UP_RIGHT_ICON
                        )
                      : Q(
                          ao ||
                            (ao = h([
                              '<w3m-button .onClick="',
                              '" .iconLeft="',
                              '">Connect with Mobile</w3m-button>',
                            ])),
                          this.onConnectWithMobile,
                          da.MOBILE_ICON
                        )
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (kc.styles = [Vo.globalCss, wc]),
        xc([Ie()], kc.prototype, "uri", 2),
        (kc = xc([Ze("w3m-desktop-connector-view")], kc));
      var Cc = C(
          lo ||
            (lo = h([
              ".w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}",
            ]))
        ),
        Zc = Object.defineProperty,
        Ac = Object.getOwnPropertyDescriptor,
        Ec = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).explorerUrl =
                "https://explorer.walletconnect.com/"),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onGet",
                value: function (e) {
                  Oe.zv.openHref(e, "_blank");
                },
              },
              {
                key: "onExplore",
                value: function () {
                  Oe.zv.openHref(this.explorerUrl, "_blank");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = Oe.uc.state.recomendedWallets,
                    n = ka.getCustomWallets().slice(0, 6),
                    r = t.length,
                    i = n.length;
                  return Q(
                    so ||
                      (so = h([
                        '<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>',
                        " ",
                        '</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-normal">Not what you\'re looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there\'s something for everyone</w3m-text><w3m-button .onClick="',
                        '" .iconRight="',
                        '">Explore Wallets</w3m-button></div>',
                      ])),
                    r
                      ? t.map(function (t) {
                          var n = t.name,
                            r = t.image_url,
                            i = t.homepage;
                          return Q(
                            co ||
                              (co = h([
                                '<div class="w3m-wallet-item"><w3m-wallet-image src="',
                                '"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">',
                                '</w3m-text><w3m-button .iconRight="',
                                '" .onClick="',
                                '">Get</w3m-button></div></div>',
                              ])),
                            r.lg,
                            n,
                            da.ARROW_RIGHT_ICON,
                            function () {
                              return e.onGet(i);
                            }
                          );
                        })
                      : null,
                    i
                      ? n.map(function (t) {
                          var n = t.name,
                            r = t.id,
                            i = t.links;
                          return Q(
                            uo ||
                              (uo = h([
                                '<div class="w3m-wallet-item"><w3m-wallet-image walletId="',
                                '"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">',
                                '</w3m-text><w3m-button .iconRight="',
                                '" .onClick="',
                                '">Get</w3m-button></div></div>',
                              ])),
                            r,
                            n,
                            da.ARROW_RIGHT_ICON,
                            function () {
                              return e.onGet(i.universal);
                            }
                          );
                        })
                      : null,
                    this.onExplore.bind(this),
                    da.ARROW_UP_RIGHT_ICON
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Ec.styles = [Vo.globalCss, Cc]),
        (Ec = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Ac(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Zc(t, n, o), o;
        })([Ze("w3m-get-wallet-view")], Ec));
      var _c = C(
          ho ||
            (ho = h([
              ".w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}",
            ]))
        ),
        Ic = Object.defineProperty,
        Oc = Object.getOwnPropertyDescriptor,
        Mc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).learnUrl =
                "https://ethereum.org/en/wallets/"),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onGet",
                value: function () {
                  Oe.AV.push("GetWallet");
                },
              },
              {
                key: "onLearnMore",
                value: function () {
                  Oe.zv.openHref(this.learnUrl, "_blank");
                },
              },
              {
                key: "render",
                value: function () {
                  return Q(
                    vo ||
                      (vo = h([
                        '<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">',
                        " ",
                        " ",
                        '</div><w3m-text variant="medium-normal">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">',
                        " ",
                        " ",
                        '</div><w3m-text variant="medium-normal">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">',
                        " ",
                        " ",
                        '</div><w3m-text variant="medium-normal">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="',
                        '" .iconLeft="',
                        '">Get a Wallet</w3m-button><w3m-button .onClick="',
                        '" .iconRight="',
                        '">Learn More</w3m-button></div></w3m-modal-content>',
                      ])),
                    da.HELP_CHART_IMG,
                    da.HELP_PAINTING_IMG,
                    da.HELP_ETH_IMG,
                    da.HELP_KEY_IMG,
                    da.HELP_USER_IMG,
                    da.HELP_LOCK_IMG,
                    da.HELP_COMPAS_IMG,
                    da.HELP_NOUN_IMG,
                    da.HELP_DAO_IMG,
                    this.onGet.bind(this),
                    da.WALLET_ICON,
                    this.onLearnMore.bind(this),
                    da.ARROW_UP_RIGHT_ICON
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Mc.styles = [Vo.globalCss, _c]),
        (Mc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Oc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Ic(t, n, o), o;
        })([Ze("w3m-help-view")], Mc));
      var Sc = C(
          fo ||
            (fo = h([
              ".w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:20px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-injected-error w3m-button{opacity:1}",
            ]))
        ),
        Pc = Object.defineProperty,
        Tc = Object.getOwnPropertyDescriptor,
        Lc = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Tc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Pc(t, n, o), o;
        },
        jc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).connecting = !0),
              (e.error = !1),
              (e.connector = Oe.Id.client().getConnectorById("injected")),
              e.onConnect(),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onConnect",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t,
                        n = this;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.connector.ready),
                                  (e.t0 = t),
                                  !e.t0)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (this.error = !1),
                                  (this.connecting = !0),
                                  (e.next = 7),
                                  ka.handleConnectorConnection(
                                    "injected",
                                    function () {
                                      (n.error = !0), (n.connecting = !1);
                                    }
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = ka.getWalletName(this.connector.name),
                    t = ka.getWalletId(this.connector.id),
                    n = {
                      "w3m-injected-wrapper": !0,
                      "w3m-injected-error": this.error,
                    };
                  return Q(
                    po ||
                      (po = h([
                        '<w3m-modal-header title="',
                        '"></w3m-modal-header><w3m-modal-content><div class="',
                        '"><w3m-wallet-image walletId="',
                        '" size="lg"></w3m-wallet-image><div class="w3m-connecting-title">',
                        '<w3m-text variant="large-bold" color="',
                        '">',
                        '</w3m-text></div><w3m-button .onClick="',
                        '" .disabled="',
                        '" .iconRight="',
                        '">Try Again</w3m-button></div></w3m-modal-content>',
                      ])),
                    e,
                    Pe(n),
                    t,
                    this.connecting
                      ? Q(mo || (mo = h(["<w3m-spinner></w3m-spinner>"])))
                      : null,
                    this.error ? "error" : "secondary",
                    this.error
                      ? "Connection declined"
                      : "Continue in ".concat(e, "..."),
                    this.onConnect.bind(this),
                    !this.error,
                    da.RETRY_ICON
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (jc.styles = [Vo.globalCss, Sc]),
        Lc([Ie()], jc.prototype, "connecting", 2),
        Lc([Ie()], jc.prototype, "error", 2),
        (jc = Lc([Ze("w3m-injected-connector-view")], jc));
      var Nc = C(
          go ||
            (go = h([
              ".w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}.w3m-install-title{display:flex;align-items:center;justify-content:center;flex-direction:column}.w3m-install-title w3m-text:last-child{margin-top:10px;max-width:240px}.w3m-install-actions{display:flex;margin-top:15px;align-items:center;flex-direction:column}@media(max-width:355px){.w3m-install-actions{flex-direction:column;align-items:center}}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-install-actions w3m-button{margin:5px;opacity:1}.w3m-info-text{text-align:center}",
            ]))
        ),
        Rc = Object.defineProperty,
        Dc = Object.getOwnPropertyDescriptor,
        Bc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "getRouterData",
                value: function () {
                  var e,
                    t =
                      null == (e = Oe.AV.state.data)
                        ? void 0
                        : e.InstallConnector;
                  if (!t) throw new Error("Missing router data");
                  return t;
                },
              },
              {
                key: "onInstall",
                value: function () {
                  var e = this.getRouterData().url;
                  Oe.zv.openHref(e, "_blank");
                },
              },
              {
                key: "onMobile",
                value: function () {
                  var e = this.getRouterData().name;
                  Oe.AV.push("ConnectWallet"),
                    Oe.Vs.openToast("Scan the code with ".concat(e), "success");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.getRouterData(),
                    t = e.name,
                    n = e.id,
                    r = e.isMobile;
                  return Q(
                    wo ||
                      (wo = h([
                        '<w3m-modal-header title="',
                        '"></w3m-modal-header><w3m-modal-content><div class="w3m-injected-wrapper"><w3m-wallet-image walletId="',
                        '" size="lg"></w3m-wallet-image><div class="w3m-install-title"><w3m-text variant="large-bold">Install ',
                        '</w3m-text><w3m-text color="secondary" variant="medium-thin" class="w3m-info-text">To connect ',
                        ', install the browser extension.</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="',
                        '" .iconLeft="',
                        '">Install Extension</w3m-button>',
                        "</div></div></w3m-modal-content>",
                      ])),
                    t,
                    n,
                    t,
                    t,
                    this.onInstall.bind(this),
                    da.ARROW_DOWN_ICON,
                    r
                      ? Q(
                          bo ||
                            (bo = h([
                              '<w3m-button .onClick="',
                              '" .iconLeft="',
                              '">',
                              " Mobile</w3m-button>",
                            ])),
                          this.onMobile.bind(this),
                          da.MOBILE_ICON,
                          t
                        )
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Bc.styles = [Vo.globalCss, Nc]),
        (Bc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Dc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Rc(t, n, o), o;
        })([Ze("w3m-install-connector-view")], Bc));
      var zc = Object.defineProperty,
        Uc = Object.getOwnPropertyDescriptor,
        Wc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "render",
                value: function () {
                  return Q(
                    yo ||
                      (yo = h([
                        '<w3m-modal-header title="Scan the code" .onAction="',
                        '" .actionIcon="',
                        '"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>',
                      ])),
                    ka.handleUriCopy,
                    da.COPY_ICON
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Wc.styles = [Vo.globalCss]),
        (Wc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Uc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && zc(t, n, o), o;
        })([Ze("w3m-qrcode-view")], Wc));
      var $c = C(
          xo ||
            (xo = h([
              ".w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}",
            ]))
        ),
        Hc = Object.defineProperty,
        Vc = Object.getOwnPropertyDescriptor,
        Fc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, c.Z)(n, [
              {
                key: "onSelectChain",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e(t) {
                      var n, r, i, o;
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = Oe.zb.state),
                                (r = n.isConnected),
                                (i = n.selectedChain),
                                (o = n.walletConnectVersion),
                                !r)
                              ) {
                                e.next = 15;
                                break;
                              }
                              if (
                                (null === i || void 0 === i ? void 0 : i.id) !==
                                t.id
                              ) {
                                e.next = 6;
                                break;
                              }
                              Oe.AV.replace("Account"), (e.next = 13);
                              break;
                            case 6:
                              if (2 !== o) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.next = 9),
                                Oe.Id.client().switchNetwork({ chainId: t.id })
                              );
                            case 9:
                              Oe.AV.replace("Account"), (e.next = 13);
                              break;
                            case 12:
                              Oe.AV.push("SwitchNetwork", { SwitchNetwork: t });
                            case 13:
                              e.next = 16;
                              break;
                            case 15:
                              Oe.AV.push("ConnectWallet"),
                                Oe.zb.setSelectedChain(t);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = Oe.zb.state.chains;
                  return Q(
                    ko ||
                      (ko = h([
                        '<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div class="w3m-grid">',
                        "</div></w3m-modal-content>",
                      ])),
                    null === t || void 0 === t
                      ? void 0
                      : t.map(function (t) {
                          return Q(
                            Co ||
                              (Co = h([
                                '<w3m-network-button name="',
                                '" chainId="',
                                '" .onClick="',
                                '">',
                                "</w3m-network-button>",
                              ])),
                            t.name,
                            t.id,
                            (0, l.Z)(
                              (0, a.Z)().mark(function n() {
                                return (0, a.Z)().wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return n.abrupt(
                                          "return",
                                          e.onSelectChain(t)
                                        );
                                      case 1:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                              })
                            ),
                            t.name
                          );
                        })
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Fc.styles = [Vo.globalCss, $c]),
        (Fc = (function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Vc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Hc(t, n, o), o;
        })([Ze("w3m-select-network-view")], Fc));
      var qc = C(
          Zo ||
            (Zo = h([
              ".w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-network-image{width:96px;height:96px;margin-bottom:20px}w3m-button{opacity:0}.w3m-error w3m-button{opacity:1}",
            ]))
        ),
        Gc = Object.defineProperty,
        Kc = Object.getOwnPropertyDescriptor,
        Yc = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? Kc(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Gc(t, n, o), o;
        },
        Jc = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).error = !1),
              e.onSwitchNetwork(),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "getRouterData",
                value: function () {
                  var e,
                    t =
                      null == (e = Oe.AV.state.data) ? void 0 : e.SwitchNetwork;
                  if (!t) throw new Error("Missing router data");
                  return t;
                },
              },
              {
                key: "onSwitchNetwork",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (this.error = !1),
                                  (t = this.getRouterData()),
                                  (e.next = 5),
                                  Oe.Id.client().switchNetwork({
                                    chainId: t.id,
                                  })
                                );
                              case 5:
                                Oe.zb.setSelectedChain(t),
                                  Oe.AV.replace("Account"),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  (this.error = !0);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this.getRouterData(),
                    t = e.id,
                    n = e.name,
                    r = { "w3m-wrapper": !0, "w3m-error": this.error };
                  return Q(
                    Ao ||
                      (Ao = h([
                        '<w3m-modal-header title="',
                        '"></w3m-modal-header><w3m-modal-content><div class="',
                        '"><w3m-network-image chainId="',
                        '"></w3m-network-image><div class="w3m-connecting-title">',
                        '<w3m-text variant="large-bold" color="',
                        '">',
                        '</w3m-text></div><w3m-button .onClick="',
                        '" .disabled="',
                        '" .iconRight="',
                        '">Try Again</w3m-button></div></w3m-modal-content>',
                      ])),
                    "Connect to ".concat(n),
                    Pe(r),
                    t,
                    this.error
                      ? null
                      : Q(Eo || (Eo = h(["<w3m-spinner></w3m-spinner>"]))),
                    this.error ? "error" : "secondary",
                    this.error
                      ? "Connection declined"
                      : "Approve in your wallet",
                    this.onSwitchNetwork.bind(this),
                    !this.error,
                    da.RETRY_ICON
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (Jc.styles = [Vo.globalCss, qc]),
        Yc([Ie()], Jc.prototype, "error", 2),
        (Jc = Yc([Ze("w3m-switch-network-view")], Jc));
      var Qc = C(
          _o ||
            (_o = h([
              "w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}",
            ]))
        ),
        Xc = Object.defineProperty,
        eu = Object.getOwnPropertyDescriptor,
        tu = function (e, t, n, r) {
          for (
            var i, o = r > 1 ? void 0 : r ? eu(t, n) : t, a = e.length - 1;
            a >= 0;
            a--
          )
            (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
          return r && o && Xc(t, n, o), o;
        },
        nu = (function (e) {
          (0, u.Z)(n, e);
          var t = (0, d.Z)(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.apply(this, arguments)).loading =
                !Oe.uc.state.wallets.listings.length),
              (e.firstFetch = !Oe.uc.state.wallets.listings.length),
              (e.search = ""),
              (e.endReached = !1),
              (e.intersectionObserver = void 0),
              (e.searchDebounce = ka.debounce(function (t) {
                t.length >= 3
                  ? ((e.firstFetch = !0),
                    (e.endReached = !1),
                    (e.search = t),
                    Oe.uc.resetSearch(),
                    e.fetchWallets())
                  : e.search &&
                    ((e.search = ""),
                    (e.endReached = e.isLastPage()),
                    Oe.uc.resetSearch());
              })),
              e
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "firstUpdated",
                value: function () {
                  this.createPaginationObserver();
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  var e;
                  null == (e = this.intersectionObserver) || e.disconnect();
                },
              },
              {
                key: "placeholderEl",
                get: function () {
                  return ka.getShadowRootElement(
                    this,
                    ".w3m-placeholder-block"
                  );
                },
              },
              {
                key: "createPaginationObserver",
                value: function () {
                  var e = this;
                  (this.intersectionObserver = new IntersectionObserver(
                    function (t) {
                      (0, p.Z)(t, 1)[0].isIntersecting &&
                        (!e.search || !e.firstFetch) &&
                        e.fetchWallets();
                    }
                  )),
                    this.intersectionObserver.observe(this.placeholderEl);
                },
              },
              {
                key: "isLastPage",
                value: function () {
                  var e = Oe.uc.state,
                    t = e.wallets,
                    n = e.search,
                    r = this.search ? n : t,
                    i = r.listings,
                    o = r.total;
                  return o <= 40 || i.length >= o;
                },
              },
              {
                key: "fetchWallets",
                value: (function () {
                  var e = (0, l.Z)(
                    (0, a.Z)().mark(function e() {
                      var t, n, r, o, s, c, u, d, h, v, f, p, m, g;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = Oe.uc.state),
                                  (r = n.wallets),
                                  (o = n.search),
                                  (s = ka.getExtensionWallets()),
                                  (c = this.search ? o : r),
                                  (u = c.listings),
                                  (d = c.total),
                                  (h = c.page),
                                  this.endReached ||
                                    !(
                                      this.firstFetch ||
                                      (d > 40 && u.length < d)
                                    ))
                                ) {
                                  e.next = 22;
                                  break;
                                }
                                return (
                                  (e.prev = 2),
                                  (this.loading = !0),
                                  (v =
                                    null == (t = Oe.zb.state.standaloneChains)
                                      ? void 0
                                      : t.join(",")),
                                  (e.next = 7),
                                  Oe.uc.getPaginatedWallets({
                                    page: this.firstFetch ? 1 : h + 1,
                                    entries: 40,
                                    device: Oe.zv.isMobile()
                                      ? "mobile"
                                      : "desktop",
                                    search: this.search,
                                    version: Oe.zb.state.walletConnectVersion,
                                    chains: v,
                                  })
                                );
                              case 7:
                                return (
                                  (f = e.sent),
                                  (p = f.listings),
                                  (m = p.map(function (e) {
                                    return e.image_url.lg;
                                  })),
                                  (g = s.map(function (e) {
                                    var t = e.id;
                                    return ka.getWalletIcon(t);
                                  })),
                                  (e.next = 13),
                                  Promise.all(
                                    [].concat(
                                      (0, i.Z)(
                                        m.map(
                                          (function () {
                                            var e = (0, l.Z)(
                                              (0, a.Z)().mark(function e(t) {
                                                return (0, a.Z)().wrap(
                                                  function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return e.abrupt(
                                                            "return",
                                                            ka.preloadImage(t)
                                                          );
                                                        case 1:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  },
                                                  e
                                                );
                                              })
                                            );
                                            return function (t) {
                                              return e.apply(this, arguments);
                                            };
                                          })()
                                        )
                                      ),
                                      (0, i.Z)(
                                        g.map(
                                          (function () {
                                            var e = (0, l.Z)(
                                              (0, a.Z)().mark(function e(t) {
                                                return (0, a.Z)().wrap(
                                                  function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return e.abrupt(
                                                            "return",
                                                            ka.preloadImage(t)
                                                          );
                                                        case 1:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  },
                                                  e
                                                );
                                              })
                                            );
                                            return function (t) {
                                              return e.apply(this, arguments);
                                            };
                                          })()
                                        )
                                      ),
                                      [Oe.zv.wait(300)]
                                    )
                                  )
                                );
                              case 13:
                                (this.endReached = this.isLastPage()),
                                  (e.next = 19);
                                break;
                              case 16:
                                (e.prev = 16),
                                  (e.t0 = e.catch(2)),
                                  console.error(e.t0),
                                  Oe.Vs.openToast(
                                    ka.getErrorMessage(e.t0),
                                    "error"
                                  );
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (this.loading = !1),
                                  (this.firstFetch = !1),
                                  e.finish(19)
                                );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 16, 19, 22]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onConnectCustom",
                value: function (e) {
                  var t = e.name,
                    n = e.id,
                    r = e.links;
                  Oe.zv.isMobile()
                    ? ka.handleMobileLinking({ links: r, name: t, id: n })
                    : Oe.AV.push("DesktopConnector", {
                        DesktopConnector: {
                          name: t,
                          walletId: n,
                          universal: r.universal,
                          native: r.native,
                        },
                      });
                },
              },
              {
                key: "onConnectListing",
                value: function (e) {
                  if (Oe.zv.isMobile()) {
                    var t = e.id,
                      n = e.image_url,
                      r = e.mobile,
                      i = r.native,
                      o = r.universal;
                    ka.handleMobileLinking({
                      links: { native: i, universal: o },
                      name: e.name,
                      id: t,
                      image: n.lg,
                    });
                  } else
                    Oe.AV.push("DesktopConnector", {
                      DesktopConnector: {
                        name: e.name,
                        icon: e.image_url.lg,
                        universal: e.desktop.universal || e.homepage,
                        native: e.desktop.native,
                      },
                    });
                },
              },
              {
                key: "onConnectExtension",
                value: function (e) {
                  ka.getWalletId("") === e.id
                    ? Oe.AV.push("InjectedConnector")
                    : Oe.AV.push("InstallConnector", { InstallConnector: e });
                },
              },
              {
                key: "onSearchChange",
                value: function (e) {
                  var t = e.target.value;
                  this.searchDebounce(t);
                },
              },
              {
                key: "coinbaseConnectorTemplate",
                value: function () {
                  try {
                    var e = Oe.Id.client().getConnectorById(va.coinbaseWallet);
                    return Q(
                      Io ||
                        (Io = h([
                          '<w3m-wallet-button name="',
                          '" walletId="',
                          '" .onClick="',
                          '"></w3m-wallet-button>',
                        ])),
                      e.name,
                      e.id,
                      (0, l.Z)(
                        (0, a.Z)().mark(function e() {
                          return (0, a.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    ka.handleConnectorConnection(
                                      va.coinbaseWallet
                                    )
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    );
                  } catch (t) {
                    return null;
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = Oe.uc.state,
                    n = t.wallets,
                    r = t.search,
                    o = Oe.zb.state.isStandalone,
                    a = (this.search ? r : n).listings;
                  a = Os(a);
                  var l = this.loading && !a.length,
                    s = this.search.length >= 3,
                    c =
                      !l &&
                      (!s ||
                        ka.caseSafeIncludes(va.coinbaseWallet, this.search)),
                    u = o || Oe.zv.isMobile() ? [] : ka.getExtensionWallets(),
                    d = ka.getCustomWallets();
                  s &&
                    ((u = u.filter(function (t) {
                      var n = t.name;
                      return ka.caseSafeIncludes(n, e.search);
                    })),
                    (d = d.filter(function (t) {
                      var n = t.name;
                      return ka.caseSafeIncludes(n, e.search);
                    })));
                  var v = !this.loading && !a.length && !u.length && !c,
                    f = Math.max(u.length, a.length),
                    p = {
                      "w3m-loading": l,
                      "w3m-end-reached": this.endReached || !this.loading,
                      "w3m-empty": v,
                    };
                  return Q(
                    Oo ||
                      (Oo = h([
                        '<w3m-modal-header><w3m-search-input .onChange="',
                        '"></w3m-search-input></w3m-modal-header><w3m-modal-content class="',
                        '"><div class="w3m-grid">',
                        " ",
                        '</div><div class="w3m-placeholder-block">',
                        " ",
                        "</div></w3m-modal-content>",
                      ])),
                    this.onSearchChange.bind(this),
                    Pe(p),
                    l
                      ? null
                      : (0, i.Z)(Array(f)).map(function (t, n) {
                          return Q(
                            Mo || (Mo = h(["", " ", " ", ""])),
                            d[n]
                              ? Q(
                                  So ||
                                    (So = h([
                                      '<w3m-wallet-button name="',
                                      '" walletId="',
                                      '" .onClick="',
                                      '"></w3m-wallet-button>',
                                    ])),
                                  d[n].name,
                                  d[n].id,
                                  function () {
                                    return e.onConnectCustom(d[n]);
                                  }
                                )
                              : null,
                            u[n]
                              ? Q(
                                  Po ||
                                    (Po = h([
                                      '<w3m-wallet-button name="',
                                      '" walletId="',
                                      '" .onClick="',
                                      '"></w3m-wallet-button>',
                                    ])),
                                  u[n].name,
                                  u[n].id,
                                  function () {
                                    return e.onConnectExtension(u[n]);
                                  }
                                )
                              : null,
                            a[n]
                              ? Q(
                                  To ||
                                    (To = h([
                                      '<w3m-wallet-button src="',
                                      '" name="',
                                      '" walletId="',
                                      '" .onClick="',
                                      '"></w3m-wallet-button>',
                                    ])),
                                  a[n].image_url.lg,
                                  a[n].name,
                                  a[n].id,
                                  function () {
                                    return e.onConnectListing(a[n]);
                                  }
                                )
                              : null
                          );
                        }),
                    c ? this.coinbaseConnectorTemplate() : null,
                    v
                      ? Q(
                          Lo ||
                            (Lo = h([
                              '<w3m-text variant="large-bold" color="secondary">No results found</w3m-text>',
                            ]))
                        )
                      : null,
                    !v && this.loading
                      ? Q(jo || (jo = h(["<w3m-spinner></w3m-spinner>"])))
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(xe);
      (nu.styles = [Vo.globalCss, Qc]),
        tu([Ie()], nu.prototype, "loading", 2),
        tu([Ie()], nu.prototype, "firstFetch", 2),
        tu([Ie()], nu.prototype, "search", 2),
        tu([Ie()], nu.prototype, "endReached", 2),
        (nu = tu([Ze("w3m-wallet-explorer-view")], nu));
    },
  },
]);
//# sourceMappingURL=99.a8dcd9e6.chunk.js.map
