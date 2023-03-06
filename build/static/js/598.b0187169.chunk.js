(self.webpackChunkportfolio = self.webpackChunkportfolio || []).push([
  [598],
  {
    76232: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(45073);
      function i(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 8),
          (t[r + 1] = e >>> 0),
          t
        );
      }
      function s(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 0),
          (t[r + 1] = e >>> 8),
          t
        );
      }
      function o(e, t) {
        return (
          void 0 === t && (t = 0),
          (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
        );
      }
      function a(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      function c(e, t) {
        return (
          void 0 === t && (t = 0),
          (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
        );
      }
      function u(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
        );
      }
      function f(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 24),
          (t[r + 1] = e >>> 16),
          (t[r + 2] = e >>> 8),
          (t[r + 3] = e >>> 0),
          t
        );
      }
      function l(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 0),
          (t[r + 1] = e >>> 8),
          (t[r + 2] = e >>> 16),
          (t[r + 3] = e >>> 24),
          t
        );
      }
      function p(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === r && (r = 0),
          f((e / 4294967296) >>> 0, t, r),
          f(e >>> 0, t, r + 4),
          t
        );
      }
      function h(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === r && (r = 0),
          l(e >>> 0, t, r),
          l((e / 4294967296) >>> 0, t, r + 4),
          t
        );
      }
      (t.readInt16BE = function (e, t) {
        return (
          void 0 === t && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16
        );
      }),
        (t.readUint16BE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
        }),
        (t.readInt16LE = function (e, t) {
          return (
            void 0 === t && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16
          );
        }),
        (t.readUint16LE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
        }),
        (t.writeUint16BE = i),
        (t.writeInt16BE = i),
        (t.writeUint16LE = s),
        (t.writeInt16LE = s),
        (t.readInt32BE = o),
        (t.readUint32BE = a),
        (t.readInt32LE = c),
        (t.readUint32LE = u),
        (t.writeUint32BE = f),
        (t.writeInt32BE = f),
        (t.writeUint32LE = l),
        (t.writeInt32LE = l),
        (t.readInt64BE = function (e, t) {
          void 0 === t && (t = 0);
          var r = o(e, t),
            n = o(e, t + 4);
          return 4294967296 * r + n - 4294967296 * (n >> 31);
        }),
        (t.readUint64BE = function (e, t) {
          return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4);
        }),
        (t.readInt64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = c(e, t);
          return 4294967296 * c(e, t + 4) + r - 4294967296 * (r >> 31);
        }),
        (t.readUint64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = u(e, t);
          return 4294967296 * u(e, t + 4) + r;
        }),
        (t.writeUint64BE = p),
        (t.writeInt64BE = p),
        (t.writeUint64LE = h),
        (t.writeInt64LE = h),
        (t.readUintBE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 !== 0))
            throw new Error(
              "readUintBE supports only bitLengths divisible by 8"
            );
          if (e / 8 > t.length - r)
            throw new Error(
              "readUintBE: array is too short for the given bitLength"
            );
          for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--)
            (n += t[s] * i), (i *= 256);
          return n;
        }),
        (t.readUintLE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 !== 0))
            throw new Error(
              "readUintLE supports only bitLengths divisible by 8"
            );
          if (e / 8 > t.length - r)
            throw new Error(
              "readUintLE: array is too short for the given bitLength"
            );
          for (var n = 0, i = 1, s = r; s < r + e / 8; s++)
            (n += t[s] * i), (i *= 256);
          return n;
        }),
        (t.writeUintBE = function (e, t, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === i && (i = 0),
            e % 8 !== 0)
          )
            throw new Error(
              "writeUintBE supports only bitLengths divisible by 8"
            );
          if (!n.isSafeInteger(t))
            throw new Error("writeUintBE value must be an integer");
          for (var s = 1, o = e / 8 + i - 1; o >= i; o--)
            (r[o] = (t / s) & 255), (s *= 256);
          return r;
        }),
        (t.writeUintLE = function (e, t, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === i && (i = 0),
            e % 8 !== 0)
          )
            throw new Error(
              "writeUintLE supports only bitLengths divisible by 8"
            );
          if (!n.isSafeInteger(t))
            throw new Error("writeUintLE value must be an integer");
          for (var s = 1, o = i; o < i + e / 8; o++)
            (r[o] = (t / s) & 255), (s *= 256);
          return r;
        }),
        (t.readFloat32BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
          );
        }),
        (t.readFloat32LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
          );
        }),
        (t.readFloat64BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
          );
        }),
        (t.readFloat64LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
          );
        }),
        (t.writeFloat32BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e),
            t
          );
        }),
        (t.writeFloat32LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(
              r,
              e,
              !0
            ),
            t
          );
        }),
        (t.writeFloat64BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e),
            t
          );
        }),
        (t.writeFloat64LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(
              r,
              e,
              !0
            ),
            t
          );
        });
    },
    78284: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(76232),
        i = r(9116),
        s = 20;
      function o(e, t, r) {
        for (
          var i = 1634760805,
            o = 857760878,
            a = 2036477234,
            c = 1797285236,
            u = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
            f = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
            l = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
            p = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
            h = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
            d = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
            v = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
            g = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
            y = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
            m = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
            b = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
            w = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
            _ = i,
            E = o,
            x = a,
            k = c,
            S = u,
            Z = f,
            I = l,
            O = p,
            N = h,
            P = d,
            A = v,
            R = g,
            U = y,
            T = m,
            C = b,
            j = w,
            L = 0;
          L < s;
          L += 2
        )
          (S =
            ((S ^= N =
              (N + (U = ((U ^= _ = (_ + S) | 0) >>> 16) | (U << 16))) | 0) >>>
              20) |
            (S << 12)),
            (Z =
              ((Z ^= P =
                (P + (T = ((T ^= E = (E + Z) | 0) >>> 16) | (T << 16))) | 0) >>>
                20) |
              (Z << 12)),
            (I =
              ((I ^= A =
                (A + (C = ((C ^= x = (x + I) | 0) >>> 16) | (C << 16))) | 0) >>>
                20) |
              (I << 12)),
            (O =
              ((O ^= R =
                (R + (j = ((j ^= k = (k + O) | 0) >>> 16) | (j << 16))) | 0) >>>
                20) |
              (O << 12)),
            (I =
              ((I ^= A =
                (A + (C = ((C ^= x = (x + I) | 0) >>> 24) | (C << 8))) | 0) >>>
                25) |
              (I << 7)),
            (O =
              ((O ^= R =
                (R + (j = ((j ^= k = (k + O) | 0) >>> 24) | (j << 8))) | 0) >>>
                25) |
              (O << 7)),
            (Z =
              ((Z ^= P =
                (P + (T = ((T ^= E = (E + Z) | 0) >>> 24) | (T << 8))) | 0) >>>
                25) |
              (Z << 7)),
            (S =
              ((S ^= N =
                (N + (U = ((U ^= _ = (_ + S) | 0) >>> 24) | (U << 8))) | 0) >>>
                25) |
              (S << 7)),
            (Z =
              ((Z ^= A =
                (A + (j = ((j ^= _ = (_ + Z) | 0) >>> 16) | (j << 16))) | 0) >>>
                20) |
              (Z << 12)),
            (I =
              ((I ^= R =
                (R + (U = ((U ^= E = (E + I) | 0) >>> 16) | (U << 16))) | 0) >>>
                20) |
              (I << 12)),
            (O =
              ((O ^= N =
                (N + (T = ((T ^= x = (x + O) | 0) >>> 16) | (T << 16))) | 0) >>>
                20) |
              (O << 12)),
            (S =
              ((S ^= P =
                (P + (C = ((C ^= k = (k + S) | 0) >>> 16) | (C << 16))) | 0) >>>
                20) |
              (S << 12)),
            (O =
              ((O ^= N =
                (N + (T = ((T ^= x = (x + O) | 0) >>> 24) | (T << 8))) | 0) >>>
                25) |
              (O << 7)),
            (S =
              ((S ^= P =
                (P + (C = ((C ^= k = (k + S) | 0) >>> 24) | (C << 8))) | 0) >>>
                25) |
              (S << 7)),
            (I =
              ((I ^= R =
                (R + (U = ((U ^= E = (E + I) | 0) >>> 24) | (U << 8))) | 0) >>>
                25) |
              (I << 7)),
            (Z =
              ((Z ^= A =
                (A + (j = ((j ^= _ = (_ + Z) | 0) >>> 24) | (j << 8))) | 0) >>>
                25) |
              (Z << 7));
        n.writeUint32LE((_ + i) | 0, e, 0),
          n.writeUint32LE((E + o) | 0, e, 4),
          n.writeUint32LE((x + a) | 0, e, 8),
          n.writeUint32LE((k + c) | 0, e, 12),
          n.writeUint32LE((S + u) | 0, e, 16),
          n.writeUint32LE((Z + f) | 0, e, 20),
          n.writeUint32LE((I + l) | 0, e, 24),
          n.writeUint32LE((O + p) | 0, e, 28),
          n.writeUint32LE((N + h) | 0, e, 32),
          n.writeUint32LE((P + d) | 0, e, 36),
          n.writeUint32LE((A + v) | 0, e, 40),
          n.writeUint32LE((R + g) | 0, e, 44),
          n.writeUint32LE((U + y) | 0, e, 48),
          n.writeUint32LE((T + m) | 0, e, 52),
          n.writeUint32LE((C + b) | 0, e, 56),
          n.writeUint32LE((j + w) | 0, e, 60);
      }
      function a(e, t, r, n, s) {
        if ((void 0 === s && (s = 0), 32 !== e.length))
          throw new Error("ChaCha: key size must be 32 bytes");
        if (n.length < r.length)
          throw new Error("ChaCha: destination is shorter than source");
        var a, u;
        if (0 === s) {
          if (8 !== t.length && 12 !== t.length)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
          (u = (a = new Uint8Array(16)).length - t.length), a.set(t, u);
        } else {
          if (16 !== t.length)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
          (a = t), (u = s);
        }
        for (var f = new Uint8Array(64), l = 0; l < r.length; l += 64) {
          o(f, a, e);
          for (var p = l; p < l + 64 && p < r.length; p++)
            n[p] = r[p] ^ f[p - l];
          c(a, 0, u);
        }
        return i.wipe(f), 0 === s && i.wipe(a), n;
      }
      function c(e, t, r) {
        for (var n = 1; r--; )
          (n = (n + (255 & e[t])) | 0), (e[t] = 255 & n), (n >>>= 8), t++;
        if (n > 0) throw new Error("ChaCha: counter overflow");
      }
      (t.streamXOR = a),
        (t.stream = function (e, t, r, n) {
          return void 0 === n && (n = 0), i.wipe(r), a(e, t, r, r, n);
        });
    },
    53642: function (e, t, r) {
      "use strict";
      var n = r(78284),
        i = r(75629),
        s = r(9116),
        o = r(76232),
        a = r(68770);
      (t.Cv = 32), (t.WH = 12), (t.pg = 16);
      var c = new Uint8Array(16),
        u = (function () {
          function e(e) {
            if (
              ((this.nonceLength = t.WH),
              (this.tagLength = t.pg),
              e.length !== t.Cv)
            )
              throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(e);
          }
          return (
            (e.prototype.seal = function (e, t, r, i) {
              if (e.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              var o = new Uint8Array(16);
              o.set(e, o.length - e.length);
              var a = new Uint8Array(32);
              n.stream(this._key, o, a, 4);
              var c,
                u = t.length + this.tagLength;
              if (i) {
                if (i.length !== u)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length"
                  );
                c = i;
              } else c = new Uint8Array(u);
              return (
                n.streamXOR(this._key, o, t, c, 4),
                this._authenticate(
                  c.subarray(c.length - this.tagLength, c.length),
                  a,
                  c.subarray(0, c.length - this.tagLength),
                  r
                ),
                s.wipe(o),
                c
              );
            }),
            (e.prototype.open = function (e, t, r, i) {
              if (e.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              if (t.length < this.tagLength) return null;
              var o = new Uint8Array(16);
              o.set(e, o.length - e.length);
              var c = new Uint8Array(32);
              n.stream(this._key, o, c, 4);
              var u = new Uint8Array(this.tagLength);
              if (
                (this._authenticate(
                  u,
                  c,
                  t.subarray(0, t.length - this.tagLength),
                  r
                ),
                !a.equal(u, t.subarray(t.length - this.tagLength, t.length)))
              )
                return null;
              var f,
                l = t.length - this.tagLength;
              if (i) {
                if (i.length !== l)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length"
                  );
                f = i;
              } else f = new Uint8Array(l);
              return (
                n.streamXOR(
                  this._key,
                  o,
                  t.subarray(0, t.length - this.tagLength),
                  f,
                  4
                ),
                s.wipe(o),
                f
              );
            }),
            (e.prototype.clean = function () {
              return s.wipe(this._key), this;
            }),
            (e.prototype._authenticate = function (e, t, r, n) {
              var a = new i.Poly1305(t);
              n &&
                (a.update(n),
                n.length % 16 > 0 && a.update(c.subarray(n.length % 16))),
                a.update(r),
                r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
              var u = new Uint8Array(8);
              n && o.writeUint64LE(n.length, u),
                a.update(u),
                o.writeUint64LE(r.length, u),
                a.update(u);
              for (var f = a.digest(), l = 0; l < f.length; l++) e[l] = f[l];
              a.clean(), s.wipe(f), s.wipe(u);
            }),
            e
          );
        })();
      t.OK = u;
    },
    68770: function (e, t) {
      "use strict";
      function r(e, t) {
        if (e.length !== t.length) return 0;
        for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
        return 1 & ((r - 1) >>> 8);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.select = function (e, t, r) {
          return (~(e - 1) & t) | ((e - 1) & r);
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1;
        }),
        (t.compare = r),
        (t.equal = function (e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== r(e, t);
        });
    },
    2421: function (e, t, r) {
      "use strict";
      t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
      var n = r(56271),
        i = r(40526),
        s = r(9116);
      function o(e) {
        var t = new Float64Array(16);
        if (e) for (var r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.jQ = 64), (t.KS = 64), (t.aP = 32), (new Uint8Array(32)[0] = 9);
      var a = o(),
        c = o([1]),
        u = o([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        f = o([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        l = o([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        p = o([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        h = o([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function d(e, t) {
        for (var r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function v(e) {
        for (var t = 1, r = 0; r < 16; r++) {
          var n = e[r] + t + 65535;
          (t = Math.floor(n / 65536)), (e[r] = n - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function g(e, t, r) {
        for (var n = ~(r - 1), i = 0; i < 16; i++) {
          var s = n & (e[i] ^ t[i]);
          (e[i] ^= s), (t[i] ^= s);
        }
      }
      function y(e, t) {
        for (var r = o(), n = o(), i = 0; i < 16; i++) n[i] = t[i];
        v(n), v(n), v(n);
        for (var s = 0; s < 2; s++) {
          r[0] = n[0] - 65517;
          for (var a = 1; a < 15; a++)
            (r[a] = n[a] - 65535 - ((r[a - 1] >> 16) & 1)), (r[a - 1] &= 65535);
          r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
          var c = (r[15] >> 16) & 1;
          (r[14] &= 65535), g(n, r, 1 - c);
        }
        for (var u = 0; u < 16; u++)
          (e[2 * u] = 255 & n[u]), (e[2 * u + 1] = n[u] >> 8);
      }
      function m(e, t) {
        for (var r = 0, n = 0; n < 32; n++) r |= e[n] ^ t[n];
        return (1 & ((r - 1) >>> 8)) - 1;
      }
      function b(e, t) {
        var r = new Uint8Array(32),
          n = new Uint8Array(32);
        return y(r, e), y(n, t), m(r, n);
      }
      function w(e) {
        var t = new Uint8Array(32);
        return y(t, e), 1 & t[0];
      }
      function _(e, t, r) {
        for (var n = 0; n < 16; n++) e[n] = t[n] + r[n];
      }
      function E(e, t, r) {
        for (var n = 0; n < 16; n++) e[n] = t[n] - r[n];
      }
      function x(e, t, r) {
        var n,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          f = 0,
          l = 0,
          p = 0,
          h = 0,
          d = 0,
          v = 0,
          g = 0,
          y = 0,
          m = 0,
          b = 0,
          w = 0,
          _ = 0,
          E = 0,
          x = 0,
          k = 0,
          S = 0,
          Z = 0,
          I = 0,
          O = 0,
          N = 0,
          P = 0,
          A = 0,
          R = 0,
          U = 0,
          T = 0,
          C = 0,
          j = r[0],
          L = r[1],
          D = r[2],
          M = r[3],
          z = r[4],
          q = r[5],
          H = r[6],
          V = r[7],
          K = r[8],
          B = r[9],
          F = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          X = r[15];
        (s += (n = t[0]) * j),
          (o += n * L),
          (a += n * D),
          (c += n * M),
          (u += n * z),
          (f += n * q),
          (l += n * H),
          (p += n * V),
          (h += n * K),
          (d += n * B),
          (v += n * F),
          (g += n * W),
          (y += n * G),
          (m += n * Y),
          (b += n * J),
          (w += n * X),
          (o += (n = t[1]) * j),
          (a += n * L),
          (c += n * D),
          (u += n * M),
          (f += n * z),
          (l += n * q),
          (p += n * H),
          (h += n * V),
          (d += n * K),
          (v += n * B),
          (g += n * F),
          (y += n * W),
          (m += n * G),
          (b += n * Y),
          (w += n * J),
          (_ += n * X),
          (a += (n = t[2]) * j),
          (c += n * L),
          (u += n * D),
          (f += n * M),
          (l += n * z),
          (p += n * q),
          (h += n * H),
          (d += n * V),
          (v += n * K),
          (g += n * B),
          (y += n * F),
          (m += n * W),
          (b += n * G),
          (w += n * Y),
          (_ += n * J),
          (E += n * X),
          (c += (n = t[3]) * j),
          (u += n * L),
          (f += n * D),
          (l += n * M),
          (p += n * z),
          (h += n * q),
          (d += n * H),
          (v += n * V),
          (g += n * K),
          (y += n * B),
          (m += n * F),
          (b += n * W),
          (w += n * G),
          (_ += n * Y),
          (E += n * J),
          (x += n * X),
          (u += (n = t[4]) * j),
          (f += n * L),
          (l += n * D),
          (p += n * M),
          (h += n * z),
          (d += n * q),
          (v += n * H),
          (g += n * V),
          (y += n * K),
          (m += n * B),
          (b += n * F),
          (w += n * W),
          (_ += n * G),
          (E += n * Y),
          (x += n * J),
          (k += n * X),
          (f += (n = t[5]) * j),
          (l += n * L),
          (p += n * D),
          (h += n * M),
          (d += n * z),
          (v += n * q),
          (g += n * H),
          (y += n * V),
          (m += n * K),
          (b += n * B),
          (w += n * F),
          (_ += n * W),
          (E += n * G),
          (x += n * Y),
          (k += n * J),
          (S += n * X),
          (l += (n = t[6]) * j),
          (p += n * L),
          (h += n * D),
          (d += n * M),
          (v += n * z),
          (g += n * q),
          (y += n * H),
          (m += n * V),
          (b += n * K),
          (w += n * B),
          (_ += n * F),
          (E += n * W),
          (x += n * G),
          (k += n * Y),
          (S += n * J),
          (Z += n * X),
          (p += (n = t[7]) * j),
          (h += n * L),
          (d += n * D),
          (v += n * M),
          (g += n * z),
          (y += n * q),
          (m += n * H),
          (b += n * V),
          (w += n * K),
          (_ += n * B),
          (E += n * F),
          (x += n * W),
          (k += n * G),
          (S += n * Y),
          (Z += n * J),
          (I += n * X),
          (h += (n = t[8]) * j),
          (d += n * L),
          (v += n * D),
          (g += n * M),
          (y += n * z),
          (m += n * q),
          (b += n * H),
          (w += n * V),
          (_ += n * K),
          (E += n * B),
          (x += n * F),
          (k += n * W),
          (S += n * G),
          (Z += n * Y),
          (I += n * J),
          (O += n * X),
          (d += (n = t[9]) * j),
          (v += n * L),
          (g += n * D),
          (y += n * M),
          (m += n * z),
          (b += n * q),
          (w += n * H),
          (_ += n * V),
          (E += n * K),
          (x += n * B),
          (k += n * F),
          (S += n * W),
          (Z += n * G),
          (I += n * Y),
          (O += n * J),
          (N += n * X),
          (v += (n = t[10]) * j),
          (g += n * L),
          (y += n * D),
          (m += n * M),
          (b += n * z),
          (w += n * q),
          (_ += n * H),
          (E += n * V),
          (x += n * K),
          (k += n * B),
          (S += n * F),
          (Z += n * W),
          (I += n * G),
          (O += n * Y),
          (N += n * J),
          (P += n * X),
          (g += (n = t[11]) * j),
          (y += n * L),
          (m += n * D),
          (b += n * M),
          (w += n * z),
          (_ += n * q),
          (E += n * H),
          (x += n * V),
          (k += n * K),
          (S += n * B),
          (Z += n * F),
          (I += n * W),
          (O += n * G),
          (N += n * Y),
          (P += n * J),
          (A += n * X),
          (y += (n = t[12]) * j),
          (m += n * L),
          (b += n * D),
          (w += n * M),
          (_ += n * z),
          (E += n * q),
          (x += n * H),
          (k += n * V),
          (S += n * K),
          (Z += n * B),
          (I += n * F),
          (O += n * W),
          (N += n * G),
          (P += n * Y),
          (A += n * J),
          (R += n * X),
          (m += (n = t[13]) * j),
          (b += n * L),
          (w += n * D),
          (_ += n * M),
          (E += n * z),
          (x += n * q),
          (k += n * H),
          (S += n * V),
          (Z += n * K),
          (I += n * B),
          (O += n * F),
          (N += n * W),
          (P += n * G),
          (A += n * Y),
          (R += n * J),
          (U += n * X),
          (b += (n = t[14]) * j),
          (w += n * L),
          (_ += n * D),
          (E += n * M),
          (x += n * z),
          (k += n * q),
          (S += n * H),
          (Z += n * V),
          (I += n * K),
          (O += n * B),
          (N += n * F),
          (P += n * W),
          (A += n * G),
          (R += n * Y),
          (U += n * J),
          (T += n * X),
          (w += (n = t[15]) * j),
          (o += 38 * (E += n * D)),
          (a += 38 * (x += n * M)),
          (c += 38 * (k += n * z)),
          (u += 38 * (S += n * q)),
          (f += 38 * (Z += n * H)),
          (l += 38 * (I += n * V)),
          (p += 38 * (O += n * K)),
          (h += 38 * (N += n * B)),
          (d += 38 * (P += n * F)),
          (v += 38 * (A += n * W)),
          (g += 38 * (R += n * G)),
          (y += 38 * (U += n * Y)),
          (m += 38 * (T += n * J)),
          (b += 38 * (C += n * X)),
          (s =
            (n = (s += 38 * (_ += n * L)) + (i = 1) + 65535) -
            65536 * (i = Math.floor(n / 65536))),
          (o = (n = o + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (s =
            (n = (s += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
            65536 * (i = Math.floor(n / 65536))),
          (o = (n = o + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (s += i - 1 + 37 * (i - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = f),
          (e[6] = l),
          (e[7] = p),
          (e[8] = h),
          (e[9] = d),
          (e[10] = v),
          (e[11] = g),
          (e[12] = y),
          (e[13] = m),
          (e[14] = b),
          (e[15] = w);
      }
      function k(e, t) {
        x(e, t, t);
      }
      function S(e, t) {
        var r,
          n = o();
        for (r = 0; r < 16; r++) n[r] = t[r];
        for (r = 253; r >= 0; r--) k(n, n), 2 !== r && 4 !== r && x(n, n, t);
        for (r = 0; r < 16; r++) e[r] = n[r];
      }
      function Z(e, t) {
        var r = o(),
          n = o(),
          i = o(),
          s = o(),
          a = o(),
          c = o(),
          u = o(),
          l = o(),
          p = o();
        E(r, e[1], e[0]),
          E(p, t[1], t[0]),
          x(r, r, p),
          _(n, e[0], e[1]),
          _(p, t[0], t[1]),
          x(n, n, p),
          x(i, e[3], t[3]),
          x(i, i, f),
          x(s, e[2], t[2]),
          _(s, s, s),
          E(a, n, r),
          E(c, s, i),
          _(u, s, i),
          _(l, n, r),
          x(e[0], a, c),
          x(e[1], l, u),
          x(e[2], u, c),
          x(e[3], a, l);
      }
      function I(e, t, r) {
        for (var n = 0; n < 4; n++) g(e[n], t[n], r);
      }
      function O(e, t) {
        var r = o(),
          n = o(),
          i = o();
        S(i, t[2]), x(r, t[0], i), x(n, t[1], i), y(e, n), (e[31] ^= w(r) << 7);
      }
      function N(e, t, r) {
        d(e[0], a), d(e[1], c), d(e[2], c), d(e[3], a);
        for (var n = 255; n >= 0; --n) {
          var i = (r[(n / 8) | 0] >> (7 & n)) & 1;
          I(e, t, i), Z(t, e), Z(e, e), I(e, t, i);
        }
      }
      function P(e, t) {
        var r = [o(), o(), o(), o()];
        d(r[0], l), d(r[1], p), d(r[2], c), x(r[3], l, p), N(e, r, t);
      }
      function A(e) {
        if (e.length !== t.aP)
          throw new Error("ed25519: seed must be ".concat(t.aP, " bytes"));
        var r = (0, i.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        var n = new Uint8Array(32),
          s = [o(), o(), o(), o()];
        P(s, r), O(n, s);
        var a = new Uint8Array(64);
        return a.set(e), a.set(n, 32), { publicKey: n, secretKey: a };
      }
      t._w = A;
      var R = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function U(e, t) {
        var r, n, i, s;
        for (n = 63; n >= 32; --n) {
          for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
            (t[i] += r - 16 * t[n] * R[i - (n - 32)]),
              (r = Math.floor((t[i] + 128) / 256)),
              (t[i] -= 256 * r);
          (t[i] += r), (t[n] = 0);
        }
        for (r = 0, i = 0; i < 32; i++)
          (t[i] += r - (t[31] >> 4) * R[i]), (r = t[i] >> 8), (t[i] &= 255);
        for (i = 0; i < 32; i++) t[i] -= r * R[i];
        for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]);
      }
      function T(e) {
        for (var t = new Float64Array(64), r = 0; r < 64; r++) t[r] = e[r];
        for (var n = 0; n < 64; n++) e[n] = 0;
        U(e, t);
      }
      function C(e, t) {
        var r = o(),
          n = o(),
          i = o(),
          s = o(),
          f = o(),
          l = o(),
          p = o();
        return (
          d(e[2], c),
          (function (e, t) {
            for (var r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(e[1], t),
          k(i, e[1]),
          x(s, i, u),
          E(i, i, e[2]),
          _(s, e[2], s),
          k(f, s),
          k(l, f),
          x(p, l, f),
          x(r, p, i),
          x(r, r, s),
          (function (e, t) {
            var r,
              n = o();
            for (r = 0; r < 16; r++) n[r] = t[r];
            for (r = 250; r >= 0; r--) k(n, n), 1 !== r && x(n, n, t);
            for (r = 0; r < 16; r++) e[r] = n[r];
          })(r, r),
          x(r, r, i),
          x(r, r, s),
          x(r, r, s),
          x(e[0], r, s),
          k(n, e[0]),
          x(n, n, s),
          b(n, i) && x(e[0], e[0], h),
          k(n, e[0]),
          x(n, n, s),
          b(n, i)
            ? -1
            : (w(e[0]) === t[31] >> 7 && E(e[0], a, e[0]),
              x(e[3], e[0], e[1]),
              0)
        );
      }
      t.Xx = function (e, t) {
        var r = new Float64Array(64),
          n = [o(), o(), o(), o()],
          s = (0, i.hash)(e.subarray(0, 32));
        (s[0] &= 248), (s[31] &= 127), (s[31] |= 64);
        var a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        var c = new i.SHA512();
        c.update(a.subarray(32)), c.update(t);
        var u = c.digest();
        c.clean(),
          T(u),
          P(n, u),
          O(a, n),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t);
        var f = c.digest();
        T(f);
        for (var l = 0; l < 32; l++) r[l] = u[l];
        for (var p = 0; p < 32; p++)
          for (var h = 0; h < 32; h++) r[p + h] += f[p] * s[h];
        return U(a.subarray(32), r), a;
      };
    },
    41412: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSerializableHash = function (e) {
          return (
            "undefined" !== typeof e.saveState &&
            "undefined" !== typeof e.restoreState &&
            "undefined" !== typeof e.cleanSavedState
          );
        });
    },
    52497: function (e, t, r) {
      "use strict";
      var n = r(5499),
        i = r(9116),
        s = (function () {
          function e(e, t, r, i) {
            void 0 === r && (r = new Uint8Array(0)),
              (this._counter = new Uint8Array(1)),
              (this._hash = e),
              (this._info = i);
            var s = n.hmac(this._hash, r, t);
            (this._hmac = new n.HMAC(e, s)),
              (this._buffer = new Uint8Array(this._hmac.digestLength)),
              (this._bufpos = this._buffer.length);
          }
          return (
            (e.prototype._fillBuffer = function () {
              this._counter[0]++;
              var e = this._counter[0];
              if (0 === e) throw new Error("hkdf: cannot expand more");
              this._hmac.reset(),
                e > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                (this._bufpos = 0);
            }),
            (e.prototype.expand = function (e) {
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                this._bufpos === this._buffer.length && this._fillBuffer(),
                  (t[r] = this._buffer[this._bufpos++]);
              return t;
            }),
            (e.prototype.clean = function () {
              this._hmac.clean(),
                i.wipe(this._buffer),
                i.wipe(this._counter),
                (this._bufpos = 0);
            }),
            e
          );
        })();
      t.t = s;
    },
    5499: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(41412),
        i = r(68770),
        s = r(9116),
        o = (function () {
          function e(e, t) {
            (this._finished = !1),
              (this._inner = new e()),
              (this._outer = new e()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var r = new Uint8Array(this.blockSize);
            t.length > this.blockSize
              ? this._inner.update(t).finish(r).clean()
              : r.set(t);
            for (var i = 0; i < r.length; i++) r[i] ^= 54;
            this._inner.update(r);
            for (i = 0; i < r.length; i++) r[i] ^= 106;
            this._outer.update(r),
              n.isSerializableHash(this._inner) &&
                n.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              s.wipe(r);
          }
          return (
            (e.prototype.reset = function () {
              if (
                !n.isSerializableHash(this._inner) ||
                !n.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()"
                );
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.clean = function () {
              n.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                n.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this;
            }),
            (e.prototype.finish = function (e) {
              return this._finished
                ? (this._outer.finish(e), this)
                : (this._inner.finish(e),
                  this._outer
                    .update(e.subarray(0, this.digestLength))
                    .finish(e),
                  (this._finished = !0),
                  this);
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (!n.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't saveState() because hash doesn't implement it"
                );
              return this._inner.saveState();
            }),
            (e.prototype.restoreState = function (e) {
              if (
                !n.isSerializableHash(this._inner) ||
                !n.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't restoreState() because hash doesn't implement it"
                );
              return (
                this._inner.restoreState(e),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!n.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it"
                );
              this._inner.cleanSavedState(e);
            }),
            e
          );
        })();
      (t.HMAC = o),
        (t.hmac = function (e, t, r) {
          var n = new o(e, t);
          n.update(r);
          var i = n.digest();
          return n.clean(), i;
        }),
        (t.equal = i.equal);
    },
    45073: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mul =
          Math.imul ||
          function (e, t) {
            var r = 65535 & e,
              n = 65535 & t;
            return (
              (r * n +
                (((((e >>> 16) & 65535) * n + r * ((t >>> 16) & 65535)) <<
                  16) >>>
                  0)) |
              0
            );
          }),
        (t.add = function (e, t) {
          return (e + t) | 0;
        }),
        (t.sub = function (e, t) {
          return (e - t) | 0;
        }),
        (t.rotl = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.isInteger =
          Number.isInteger ||
          function (e) {
            return "number" === typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (t.MAX_SAFE_INTEGER = 9007199254740991),
        (t.isSafeInteger = function (e) {
          return (
            t.isInteger(e) &&
            e >= -t.MAX_SAFE_INTEGER &&
            e <= t.MAX_SAFE_INTEGER
          );
        });
    },
    75629: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(68770),
        i = r(9116);
      t.DIGEST_LENGTH = 16;
      var s = (function () {
        function e(e) {
          (this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var r = e[0] | (e[1] << 8);
          this._r[0] = 8191 & r;
          var n = e[2] | (e[3] << 8);
          this._r[1] = 8191 & ((r >>> 13) | (n << 3));
          var i = e[4] | (e[5] << 8);
          this._r[2] = 7939 & ((n >>> 10) | (i << 6));
          var s = e[6] | (e[7] << 8);
          this._r[3] = 8191 & ((i >>> 7) | (s << 9));
          var o = e[8] | (e[9] << 8);
          (this._r[4] = 255 & ((s >>> 4) | (o << 12))),
            (this._r[5] = (o >>> 1) & 8190);
          var a = e[10] | (e[11] << 8);
          this._r[6] = 8191 & ((o >>> 14) | (a << 2));
          var c = e[12] | (e[13] << 8);
          this._r[7] = 8065 & ((a >>> 11) | (c << 5));
          var u = e[14] | (e[15] << 8);
          (this._r[8] = 8191 & ((c >>> 8) | (u << 8))),
            (this._r[9] = (u >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8));
        }
        return (
          (e.prototype._blocks = function (e, t, r) {
            for (
              var n = this._fin ? 0 : 2048,
                i = this._h[0],
                s = this._h[1],
                o = this._h[2],
                a = this._h[3],
                c = this._h[4],
                u = this._h[5],
                f = this._h[6],
                l = this._h[7],
                p = this._h[8],
                h = this._h[9],
                d = this._r[0],
                v = this._r[1],
                g = this._r[2],
                y = this._r[3],
                m = this._r[4],
                b = this._r[5],
                w = this._r[6],
                _ = this._r[7],
                E = this._r[8],
                x = this._r[9];
              r >= 16;

            ) {
              var k = e[t + 0] | (e[t + 1] << 8);
              i += 8191 & k;
              var S = e[t + 2] | (e[t + 3] << 8);
              s += 8191 & ((k >>> 13) | (S << 3));
              var Z = e[t + 4] | (e[t + 5] << 8);
              o += 8191 & ((S >>> 10) | (Z << 6));
              var I = e[t + 6] | (e[t + 7] << 8);
              a += 8191 & ((Z >>> 7) | (I << 9));
              var O = e[t + 8] | (e[t + 9] << 8);
              (c += 8191 & ((I >>> 4) | (O << 12))), (u += (O >>> 1) & 8191);
              var N = e[t + 10] | (e[t + 11] << 8);
              f += 8191 & ((O >>> 14) | (N << 2));
              var P = e[t + 12] | (e[t + 13] << 8);
              l += 8191 & ((N >>> 11) | (P << 5));
              var A = e[t + 14] | (e[t + 15] << 8),
                R = 0,
                U = R;
              (U += i * d),
                (U += s * (5 * x)),
                (U += o * (5 * E)),
                (U += a * (5 * _)),
                (R = (U += c * (5 * w)) >>> 13),
                (U &= 8191),
                (U += u * (5 * b)),
                (U += f * (5 * m)),
                (U += l * (5 * y)),
                (U += (p += 8191 & ((P >>> 8) | (A << 8))) * (5 * g));
              var T = (R += (U += (h += (A >>> 5) | n) * (5 * v)) >>> 13);
              (T += i * v),
                (T += s * d),
                (T += o * (5 * x)),
                (T += a * (5 * E)),
                (R = (T += c * (5 * _)) >>> 13),
                (T &= 8191),
                (T += u * (5 * w)),
                (T += f * (5 * b)),
                (T += l * (5 * m)),
                (T += p * (5 * y)),
                (R += (T += h * (5 * g)) >>> 13),
                (T &= 8191);
              var C = R;
              (C += i * g),
                (C += s * v),
                (C += o * d),
                (C += a * (5 * x)),
                (R = (C += c * (5 * E)) >>> 13),
                (C &= 8191),
                (C += u * (5 * _)),
                (C += f * (5 * w)),
                (C += l * (5 * b)),
                (C += p * (5 * m));
              var j = (R += (C += h * (5 * y)) >>> 13);
              (j += i * y),
                (j += s * g),
                (j += o * v),
                (j += a * d),
                (R = (j += c * (5 * x)) >>> 13),
                (j &= 8191),
                (j += u * (5 * E)),
                (j += f * (5 * _)),
                (j += l * (5 * w)),
                (j += p * (5 * b));
              var L = (R += (j += h * (5 * m)) >>> 13);
              (L += i * m),
                (L += s * y),
                (L += o * g),
                (L += a * v),
                (R = (L += c * d) >>> 13),
                (L &= 8191),
                (L += u * (5 * x)),
                (L += f * (5 * E)),
                (L += l * (5 * _)),
                (L += p * (5 * w));
              var D = (R += (L += h * (5 * b)) >>> 13);
              (D += i * b),
                (D += s * m),
                (D += o * y),
                (D += a * g),
                (R = (D += c * v) >>> 13),
                (D &= 8191),
                (D += u * d),
                (D += f * (5 * x)),
                (D += l * (5 * E)),
                (D += p * (5 * _));
              var M = (R += (D += h * (5 * w)) >>> 13);
              (M += i * w),
                (M += s * b),
                (M += o * m),
                (M += a * y),
                (R = (M += c * g) >>> 13),
                (M &= 8191),
                (M += u * v),
                (M += f * d),
                (M += l * (5 * x)),
                (M += p * (5 * E));
              var z = (R += (M += h * (5 * _)) >>> 13);
              (z += i * _),
                (z += s * w),
                (z += o * b),
                (z += a * m),
                (R = (z += c * y) >>> 13),
                (z &= 8191),
                (z += u * g),
                (z += f * v),
                (z += l * d),
                (z += p * (5 * x));
              var q = (R += (z += h * (5 * E)) >>> 13);
              (q += i * E),
                (q += s * _),
                (q += o * w),
                (q += a * b),
                (R = (q += c * m) >>> 13),
                (q &= 8191),
                (q += u * y),
                (q += f * g),
                (q += l * v),
                (q += p * d);
              var H = (R += (q += h * (5 * x)) >>> 13);
              (H += i * x),
                (H += s * E),
                (H += o * _),
                (H += a * w),
                (R = (H += c * b) >>> 13),
                (H &= 8191),
                (H += u * m),
                (H += f * y),
                (H += l * g),
                (H += p * v),
                (i = U =
                  8191 &
                  (R =
                    ((R = (((R += (H += h * d) >>> 13) << 2) + R) | 0) +
                      (U &= 8191)) |
                    0)),
                (s = T += R >>>= 13),
                (o = C &= 8191),
                (a = j &= 8191),
                (c = L &= 8191),
                (u = D &= 8191),
                (f = M &= 8191),
                (l = z &= 8191),
                (p = q &= 8191),
                (h = H &= 8191),
                (t += 16),
                (r -= 16);
            }
            (this._h[0] = i),
              (this._h[1] = s),
              (this._h[2] = o),
              (this._h[3] = a),
              (this._h[4] = c),
              (this._h[5] = u),
              (this._h[6] = f),
              (this._h[7] = l),
              (this._h[8] = p),
              (this._h[9] = h);
          }),
          (e.prototype.finish = function (e, t) {
            void 0 === t && (t = 0);
            var r,
              n,
              i,
              s,
              o = new Uint16Array(10);
            if (this._leftover) {
              for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++)
                this._buffer[s] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++)
              (this._h[s] += r), (r = this._h[s] >>> 13), (this._h[s] &= 8191);
            for (
              this._h[0] += 5 * r,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                o[0] = this._h[0] + 5,
                r = o[0] >>> 13,
                o[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              (o[s] = this._h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191);
            for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n;
            for (n = ~n, s = 0; s < 10; s++)
              this._h[s] = (this._h[s] & n) | o[s];
            for (
              this._h[0] = 65535 & (this._h[0] | (this._h[1] << 13)),
                this._h[1] = 65535 & ((this._h[1] >>> 3) | (this._h[2] << 10)),
                this._h[2] = 65535 & ((this._h[2] >>> 6) | (this._h[3] << 7)),
                this._h[3] = 65535 & ((this._h[3] >>> 9) | (this._h[4] << 4)),
                this._h[4] =
                  65535 &
                  ((this._h[4] >>> 12) |
                    (this._h[5] << 1) |
                    (this._h[6] << 14)),
                this._h[5] = 65535 & ((this._h[6] >>> 2) | (this._h[7] << 11)),
                this._h[6] = 65535 & ((this._h[7] >>> 5) | (this._h[8] << 8)),
                this._h[7] = 65535 & ((this._h[8] >>> 8) | (this._h[9] << 5)),
                i = this._h[0] + this._pad[0],
                this._h[0] = 65535 & i,
                s = 1;
              s < 8;
              s++
            )
              (i = (((this._h[s] + this._pad[s]) | 0) + (i >>> 16)) | 0),
                (this._h[s] = 65535 & i);
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t,
              r = 0,
              n = e.length;
            if (this._leftover) {
              (t = 16 - this._leftover) > n && (t = n);
              for (var i = 0; i < t; i++)
                this._buffer[this._leftover + i] = e[r + i];
              if (
                ((n -= t), (r += t), (this._leftover += t), this._leftover < 16)
              )
                return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if (
              (n >= 16 &&
                ((t = n - (n % 16)), this._blocks(e, r, t), (r += t), (n -= t)),
              n)
            ) {
              for (i = 0; i < n; i++)
                this._buffer[this._leftover + i] = e[r + i];
              this._leftover += n;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw new Error("Poly1305 was finished");
            var e = new Uint8Array(16);
            return this.finish(e), e;
          }),
          (e.prototype.clean = function () {
            return (
              i.wipe(this._buffer),
              i.wipe(this._r),
              i.wipe(this._h),
              i.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          e
        );
      })();
      (t.Poly1305 = s),
        (t.oneTimeAuth = function (e, t) {
          var r = new s(e);
          r.update(t);
          var n = r.digest();
          return r.clean(), n;
        }),
        (t.equal = function (e, r) {
          return (
            e.length === t.DIGEST_LENGTH &&
            r.length === t.DIGEST_LENGTH &&
            n.equal(e, r)
          );
        });
    },
    56271: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomStringForEntropy =
          t.randomString =
          t.randomUint32 =
          t.randomBytes =
          t.defaultRandomSource =
            void 0);
      var n = r(933),
        i = r(76232),
        s = r(9116);
      function o(e) {
        return (
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : t.defaultRandomSource
        ).randomBytes(e);
      }
      (t.defaultRandomSource = new n.SystemRandomSource()),
        (t.randomBytes = o),
        (t.randomUint32 = function () {
          var e = o(
              4,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : t.defaultRandomSource
            ),
            r = (0, i.readUint32LE)(e);
          return (0, s.wipe)(e), r;
        });
      var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function c(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : t.defaultRandomSource;
        if (r.length < 2) throw new Error("randomString charset is too short");
        if (r.length > 256) throw new Error("randomString charset is too long");
        for (var i = "", c = r.length, u = 256 - (256 % c); e > 0; ) {
          for (
            var f = o(Math.ceil((256 * e) / u), n), l = 0;
            l < f.length && e > 0;
            l++
          ) {
            var p = f[l];
            p < u && ((i += r.charAt(p % c)), e--);
          }
          (0, s.wipe)(f);
        }
        return i;
      }
      (t.randomString = c),
        (t.randomStringForEntropy = function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t.defaultRandomSource;
          return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, n);
        });
    },
    98136: function (e, t, r) {
      "use strict";
      var n = r(56690).default,
        i = r(89728).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BrowserRandomSource = void 0);
      var s = (function () {
        function e() {
          n(this, e), (this.isAvailable = !1), (this.isInstantiated = !1);
          var t =
            "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
          t &&
            void 0 !== t.getRandomValues &&
            ((this._crypto = t),
            (this.isAvailable = !0),
            (this.isInstantiated = !0));
        }
        return (
          i(e, [
            {
              key: "randomBytes",
              value: function (e) {
                if (!this.isAvailable || !this._crypto)
                  throw new Error(
                    "Browser random byte generator is not available."
                  );
                for (var t = new Uint8Array(e), r = 0; r < t.length; r += 65536)
                  this._crypto.getRandomValues(
                    t.subarray(r, r + Math.min(t.length - r, 65536))
                  );
                return t;
              },
            },
          ]),
          e
        );
      })();
      t.BrowserRandomSource = s;
    },
    38188: function (e, t, r) {
      "use strict";
      var n = r(56690).default,
        i = r(89728).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NodeRandomSource = void 0);
      var s = r(9116),
        o = (function () {
          function e() {
            n(this, e), (this.isAvailable = !1), (this.isInstantiated = !1);
            var t = r(35883);
            t &&
              t.randomBytes &&
              ((this._crypto = t),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
          return (
            i(e, [
              {
                key: "randomBytes",
                value: function (e) {
                  if (!this.isAvailable || !this._crypto)
                    throw new Error(
                      "Node.js random byte generator is not available."
                    );
                  var t = this._crypto.randomBytes(e);
                  if (t.length !== e)
                    throw new Error(
                      "NodeRandomSource: got fewer bytes than requested"
                    );
                  for (var r = new Uint8Array(e), n = 0; n < r.length; n++)
                    r[n] = t[n];
                  return (0, s.wipe)(t), r;
                },
              },
            ]),
            e
          );
        })();
      t.NodeRandomSource = o;
    },
    933: function (e, t, r) {
      "use strict";
      var n = r(56690).default,
        i = r(89728).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SystemRandomSource = void 0);
      var s = r(98136),
        o = r(38188),
        a = (function () {
          function e() {
            return (
              n(this, e),
              (this.isAvailable = !1),
              (this.name = ""),
              (this._source = new s.BrowserRandomSource()),
              this._source.isAvailable
                ? ((this.isAvailable = !0), void (this.name = "Browser"))
                : ((this._source = new o.NodeRandomSource()),
                  this._source.isAvailable
                    ? ((this.isAvailable = !0), void (this.name = "Node"))
                    : void 0)
            );
          }
          return (
            i(e, [
              {
                key: "randomBytes",
                value: function (e) {
                  if (!this.isAvailable)
                    throw new Error(
                      "System random byte generator is not available."
                    );
                  return this._source.randomBytes(e);
                },
              },
            ]),
            e
          );
        })();
      t.SystemRandomSource = a;
    },
    24888: function (e, t, r) {
      "use strict";
      var n = r(76232),
        i = r(9116);
      (t.k = 32), (t.cn = 64);
      var s = (function () {
        function e() {
          (this.digestLength = t.k),
            (this.blockSize = t.cn),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            i.wipe(this._buffer), i.wipe(this._temp), this.reset();
          }),
          (e.prototype.update = function (e, t) {
            if ((void 0 === t && (t = e.length), this._finished))
              throw new Error(
                "SHA256: can't update because hash was finished."
              );
            var r = 0;
            if (((this._bytesHashed += t), this._bufferLength > 0)) {
              for (; this._bufferLength < this.blockSize && t > 0; )
                (this._buffer[this._bufferLength++] = e[r++]), t--;
              this._bufferLength === this.blockSize &&
                (a(this._temp, this._state, this._buffer, 0, this.blockSize),
                (this._bufferLength = 0));
            }
            for (
              t >= this.blockSize &&
              ((r = a(this._temp, this._state, e, r, t)),
              (t %= this.blockSize));
              t > 0;

            )
              (this._buffer[this._bufferLength++] = e[r++]), t--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                i = (t / 536870912) | 0,
                s = t << 3,
                o = t % 64 < 56 ? 64 : 128;
              this._buffer[r] = 128;
              for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
              n.writeUint32BE(i, this._buffer, o - 8),
                n.writeUint32BE(s, this._buffer, o - 4),
                a(this._temp, this._state, this._buffer, 0, o),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 4; c++)
              n.writeUint32BE(this._state[c], e, 4 * c);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              state: new Int32Array(this._state),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._state.set(e.state),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            i.wipe(e.state),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.mE = s;
      var o = new Int32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      function a(e, t, r, i, s) {
        for (; s >= 64; ) {
          for (
            var a = t[0],
              c = t[1],
              u = t[2],
              f = t[3],
              l = t[4],
              p = t[5],
              h = t[6],
              d = t[7],
              v = 0;
            v < 16;
            v++
          ) {
            var g = i + 4 * v;
            e[v] = n.readUint32BE(r, g);
          }
          for (v = 16; v < 64; v++) {
            var y = e[v - 2],
              m =
                ((y >>> 17) | (y << 15)) ^
                ((y >>> 19) | (y << 13)) ^
                (y >>> 10),
              b =
                (((y = e[v - 15]) >>> 7) | (y << 25)) ^
                ((y >>> 18) | (y << 14)) ^
                (y >>> 3);
            e[v] = ((m + e[v - 7]) | 0) + ((b + e[v - 16]) | 0);
          }
          for (v = 0; v < 64; v++) {
            (m =
              ((((((l >>> 6) | (l << 26)) ^
                ((l >>> 11) | (l << 21)) ^
                ((l >>> 25) | (l << 7))) +
                ((l & p) ^ (~l & h))) |
                0) +
                ((d + ((o[v] + e[v]) | 0)) | 0)) |
              0),
              (b =
                ((((a >>> 2) | (a << 30)) ^
                  ((a >>> 13) | (a << 19)) ^
                  ((a >>> 22) | (a << 10))) +
                  ((a & c) ^ (a & u) ^ (c & u))) |
                0);
            (d = h),
              (h = p),
              (p = l),
              (l = (f + m) | 0),
              (f = u),
              (u = c),
              (c = a),
              (a = (m + b) | 0);
          }
          (t[0] += a),
            (t[1] += c),
            (t[2] += u),
            (t[3] += f),
            (t[4] += l),
            (t[5] += p),
            (t[6] += h),
            (t[7] += d),
            (i += 64),
            (s -= 64);
        }
        return i;
      }
      t.vp = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    40526: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(76232),
        i = r(9116);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            i.wipe(this._buffer),
              i.wipe(this._tempHi),
              i.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished."
              );
            var n = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = e[n++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((n = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                n,
                r
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = e[n++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                i = (t / 536870912) | 0,
                s = t << 3,
                o = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
              n.writeUint32BE(i, this._buffer, o - 8),
                n.writeUint32BE(s, this._buffer, o - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  o
                ),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 8; c++)
              n.writeUint32BE(this._stateHi[c], e, 8 * c),
                n.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            i.wipe(e.stateHi),
              i.wipe(e.stateLo),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, i, s, a, c) {
        for (
          var u,
            f,
            l,
            p,
            h,
            d,
            v,
            g,
            y = r[0],
            m = r[1],
            b = r[2],
            w = r[3],
            _ = r[4],
            E = r[5],
            x = r[6],
            k = r[7],
            S = i[0],
            Z = i[1],
            I = i[2],
            O = i[3],
            N = i[4],
            P = i[5],
            A = i[6],
            R = i[7];
          c >= 128;

        ) {
          for (var U = 0; U < 16; U++) {
            var T = 8 * U + a;
            (e[U] = n.readUint32BE(s, T)), (t[U] = n.readUint32BE(s, T + 4));
          }
          for (U = 0; U < 80; U++) {
            var C,
              j,
              L = y,
              D = m,
              M = b,
              z = w,
              q = _,
              H = E,
              V = x,
              K = S,
              B = Z,
              F = I,
              W = O,
              G = N,
              Y = P,
              J = A;
            if (
              ((h = 65535 & (f = R)),
              (d = f >>> 16),
              (v = 65535 & (u = k)),
              (g = u >>> 16),
              (h +=
                65535 &
                (f =
                  ((N >>> 14) | (_ << 18)) ^
                  ((N >>> 18) | (_ << 14)) ^
                  ((_ >>> 9) | (N << 23)))),
              (d += f >>> 16),
              (v +=
                65535 &
                (u =
                  ((_ >>> 14) | (N << 18)) ^
                  ((_ >>> 18) | (N << 14)) ^
                  ((N >>> 9) | (_ << 23)))),
              (g += u >>> 16),
              (h += 65535 & (f = (N & P) ^ (~N & A))),
              (d += f >>> 16),
              (v += 65535 & (u = (_ & E) ^ (~_ & x))),
              (g += u >>> 16),
              (u = o[2 * U]),
              (h += 65535 & (f = o[2 * U + 1])),
              (d += f >>> 16),
              (v += 65535 & u),
              (g += u >>> 16),
              (u = e[U % 16]),
              (d += (f = t[U % 16]) >>> 16),
              (v += 65535 & u),
              (g += u >>> 16),
              (v += (d += (h += 65535 & f) >>> 16) >>> 16),
              (h = 65535 & (f = p = (65535 & h) | (d << 16))),
              (d = f >>> 16),
              (v = 65535 & (u = l = (65535 & v) | ((g += v >>> 16) << 16))),
              (g = u >>> 16),
              (h +=
                65535 &
                (f =
                  ((S >>> 28) | (y << 4)) ^
                  ((y >>> 2) | (S << 30)) ^
                  ((y >>> 7) | (S << 25)))),
              (d += f >>> 16),
              (v +=
                65535 &
                (u =
                  ((y >>> 28) | (S << 4)) ^
                  ((S >>> 2) | (y << 30)) ^
                  ((S >>> 7) | (y << 25)))),
              (g += u >>> 16),
              (d += (f = (S & Z) ^ (S & I) ^ (Z & I)) >>> 16),
              (v += 65535 & (u = (y & m) ^ (y & b) ^ (m & b))),
              (g += u >>> 16),
              (C =
                (65535 & (v += (d += (h += 65535 & f) >>> 16) >>> 16)) |
                ((g += v >>> 16) << 16)),
              (j = (65535 & h) | (d << 16)),
              (h = 65535 & (f = W)),
              (d = f >>> 16),
              (v = 65535 & (u = z)),
              (g = u >>> 16),
              (d += (f = p) >>> 16),
              (v += 65535 & (u = l)),
              (g += u >>> 16),
              (m = L),
              (b = D),
              (w = M),
              (_ = z =
                (65535 & (v += (d += (h += 65535 & f) >>> 16) >>> 16)) |
                ((g += v >>> 16) << 16)),
              (E = q),
              (x = H),
              (k = V),
              (y = C),
              (Z = K),
              (I = B),
              (O = F),
              (N = W = (65535 & h) | (d << 16)),
              (P = G),
              (A = Y),
              (R = J),
              (S = j),
              U % 16 === 15)
            )
              for (T = 0; T < 16; T++)
                (u = e[T]),
                  (h = 65535 & (f = t[T])),
                  (d = f >>> 16),
                  (v = 65535 & u),
                  (g = u >>> 16),
                  (u = e[(T + 9) % 16]),
                  (h += 65535 & (f = t[(T + 9) % 16])),
                  (d += f >>> 16),
                  (v += 65535 & u),
                  (g += u >>> 16),
                  (l = e[(T + 1) % 16]),
                  (h +=
                    65535 &
                    (f =
                      (((p = t[(T + 1) % 16]) >>> 1) | (l << 31)) ^
                      ((p >>> 8) | (l << 24)) ^
                      ((p >>> 7) | (l << 25)))),
                  (d += f >>> 16),
                  (v +=
                    65535 &
                    (u =
                      ((l >>> 1) | (p << 31)) ^
                      ((l >>> 8) | (p << 24)) ^
                      (l >>> 7))),
                  (g += u >>> 16),
                  (l = e[(T + 14) % 16]),
                  (d +=
                    (f =
                      (((p = t[(T + 14) % 16]) >>> 19) | (l << 13)) ^
                      ((l >>> 29) | (p << 3)) ^
                      ((p >>> 6) | (l << 26))) >>> 16),
                  (v +=
                    65535 &
                    (u =
                      ((l >>> 19) | (p << 13)) ^
                      ((p >>> 29) | (l << 3)) ^
                      (l >>> 6))),
                  (g += u >>> 16),
                  (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
                  (e[T] = (65535 & v) | (g << 16)),
                  (t[T] = (65535 & h) | (d << 16));
          }
          (h = 65535 & (f = S)),
            (d = f >>> 16),
            (v = 65535 & (u = y)),
            (g = u >>> 16),
            (u = r[0]),
            (d += (f = i[0]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[0] = y = (65535 & v) | (g << 16)),
            (i[0] = S = (65535 & h) | (d << 16)),
            (h = 65535 & (f = Z)),
            (d = f >>> 16),
            (v = 65535 & (u = m)),
            (g = u >>> 16),
            (u = r[1]),
            (d += (f = i[1]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[1] = m = (65535 & v) | (g << 16)),
            (i[1] = Z = (65535 & h) | (d << 16)),
            (h = 65535 & (f = I)),
            (d = f >>> 16),
            (v = 65535 & (u = b)),
            (g = u >>> 16),
            (u = r[2]),
            (d += (f = i[2]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[2] = b = (65535 & v) | (g << 16)),
            (i[2] = I = (65535 & h) | (d << 16)),
            (h = 65535 & (f = O)),
            (d = f >>> 16),
            (v = 65535 & (u = w)),
            (g = u >>> 16),
            (u = r[3]),
            (d += (f = i[3]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[3] = w = (65535 & v) | (g << 16)),
            (i[3] = O = (65535 & h) | (d << 16)),
            (h = 65535 & (f = N)),
            (d = f >>> 16),
            (v = 65535 & (u = _)),
            (g = u >>> 16),
            (u = r[4]),
            (d += (f = i[4]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[4] = _ = (65535 & v) | (g << 16)),
            (i[4] = N = (65535 & h) | (d << 16)),
            (h = 65535 & (f = P)),
            (d = f >>> 16),
            (v = 65535 & (u = E)),
            (g = u >>> 16),
            (u = r[5]),
            (d += (f = i[5]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[5] = E = (65535 & v) | (g << 16)),
            (i[5] = P = (65535 & h) | (d << 16)),
            (h = 65535 & (f = A)),
            (d = f >>> 16),
            (v = 65535 & (u = x)),
            (g = u >>> 16),
            (u = r[6]),
            (d += (f = i[6]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[6] = x = (65535 & v) | (g << 16)),
            (i[6] = A = (65535 & h) | (d << 16)),
            (h = 65535 & (f = R)),
            (d = f >>> 16),
            (v = 65535 & (u = k)),
            (g = u >>> 16),
            (u = r[7]),
            (d += (f = i[7]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[7] = k = (65535 & v) | (g << 16)),
            (i[7] = R = (65535 & h) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    9116: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wipe = function (e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
          return e;
        });
    },
    52029: function (e, t, r) {
      "use strict";
      t.gi = t.Au = t.KS = t.kz = void 0;
      var n = r(56271),
        i = r(9116);
      function s(e) {
        var t = new Float64Array(16);
        if (e) for (var r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.kz = 32), (t.KS = 32);
      var o = new Uint8Array(32);
      o[0] = 9;
      var a = s([56129, 1]);
      function c(e) {
        for (var t = 1, r = 0; r < 16; r++) {
          var n = e[r] + t + 65535;
          (t = Math.floor(n / 65536)), (e[r] = n - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function u(e, t, r) {
        for (var n = ~(r - 1), i = 0; i < 16; i++) {
          var s = n & (e[i] ^ t[i]);
          (e[i] ^= s), (t[i] ^= s);
        }
      }
      function f(e, t, r) {
        for (var n = 0; n < 16; n++) e[n] = t[n] + r[n];
      }
      function l(e, t, r) {
        for (var n = 0; n < 16; n++) e[n] = t[n] - r[n];
      }
      function p(e, t, r) {
        var n,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          f = 0,
          l = 0,
          p = 0,
          h = 0,
          d = 0,
          v = 0,
          g = 0,
          y = 0,
          m = 0,
          b = 0,
          w = 0,
          _ = 0,
          E = 0,
          x = 0,
          k = 0,
          S = 0,
          Z = 0,
          I = 0,
          O = 0,
          N = 0,
          P = 0,
          A = 0,
          R = 0,
          U = 0,
          T = 0,
          C = 0,
          j = r[0],
          L = r[1],
          D = r[2],
          M = r[3],
          z = r[4],
          q = r[5],
          H = r[6],
          V = r[7],
          K = r[8],
          B = r[9],
          F = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          X = r[15];
        (s += (n = t[0]) * j),
          (o += n * L),
          (a += n * D),
          (c += n * M),
          (u += n * z),
          (f += n * q),
          (l += n * H),
          (p += n * V),
          (h += n * K),
          (d += n * B),
          (v += n * F),
          (g += n * W),
          (y += n * G),
          (m += n * Y),
          (b += n * J),
          (w += n * X),
          (o += (n = t[1]) * j),
          (a += n * L),
          (c += n * D),
          (u += n * M),
          (f += n * z),
          (l += n * q),
          (p += n * H),
          (h += n * V),
          (d += n * K),
          (v += n * B),
          (g += n * F),
          (y += n * W),
          (m += n * G),
          (b += n * Y),
          (w += n * J),
          (_ += n * X),
          (a += (n = t[2]) * j),
          (c += n * L),
          (u += n * D),
          (f += n * M),
          (l += n * z),
          (p += n * q),
          (h += n * H),
          (d += n * V),
          (v += n * K),
          (g += n * B),
          (y += n * F),
          (m += n * W),
          (b += n * G),
          (w += n * Y),
          (_ += n * J),
          (E += n * X),
          (c += (n = t[3]) * j),
          (u += n * L),
          (f += n * D),
          (l += n * M),
          (p += n * z),
          (h += n * q),
          (d += n * H),
          (v += n * V),
          (g += n * K),
          (y += n * B),
          (m += n * F),
          (b += n * W),
          (w += n * G),
          (_ += n * Y),
          (E += n * J),
          (x += n * X),
          (u += (n = t[4]) * j),
          (f += n * L),
          (l += n * D),
          (p += n * M),
          (h += n * z),
          (d += n * q),
          (v += n * H),
          (g += n * V),
          (y += n * K),
          (m += n * B),
          (b += n * F),
          (w += n * W),
          (_ += n * G),
          (E += n * Y),
          (x += n * J),
          (k += n * X),
          (f += (n = t[5]) * j),
          (l += n * L),
          (p += n * D),
          (h += n * M),
          (d += n * z),
          (v += n * q),
          (g += n * H),
          (y += n * V),
          (m += n * K),
          (b += n * B),
          (w += n * F),
          (_ += n * W),
          (E += n * G),
          (x += n * Y),
          (k += n * J),
          (S += n * X),
          (l += (n = t[6]) * j),
          (p += n * L),
          (h += n * D),
          (d += n * M),
          (v += n * z),
          (g += n * q),
          (y += n * H),
          (m += n * V),
          (b += n * K),
          (w += n * B),
          (_ += n * F),
          (E += n * W),
          (x += n * G),
          (k += n * Y),
          (S += n * J),
          (Z += n * X),
          (p += (n = t[7]) * j),
          (h += n * L),
          (d += n * D),
          (v += n * M),
          (g += n * z),
          (y += n * q),
          (m += n * H),
          (b += n * V),
          (w += n * K),
          (_ += n * B),
          (E += n * F),
          (x += n * W),
          (k += n * G),
          (S += n * Y),
          (Z += n * J),
          (I += n * X),
          (h += (n = t[8]) * j),
          (d += n * L),
          (v += n * D),
          (g += n * M),
          (y += n * z),
          (m += n * q),
          (b += n * H),
          (w += n * V),
          (_ += n * K),
          (E += n * B),
          (x += n * F),
          (k += n * W),
          (S += n * G),
          (Z += n * Y),
          (I += n * J),
          (O += n * X),
          (d += (n = t[9]) * j),
          (v += n * L),
          (g += n * D),
          (y += n * M),
          (m += n * z),
          (b += n * q),
          (w += n * H),
          (_ += n * V),
          (E += n * K),
          (x += n * B),
          (k += n * F),
          (S += n * W),
          (Z += n * G),
          (I += n * Y),
          (O += n * J),
          (N += n * X),
          (v += (n = t[10]) * j),
          (g += n * L),
          (y += n * D),
          (m += n * M),
          (b += n * z),
          (w += n * q),
          (_ += n * H),
          (E += n * V),
          (x += n * K),
          (k += n * B),
          (S += n * F),
          (Z += n * W),
          (I += n * G),
          (O += n * Y),
          (N += n * J),
          (P += n * X),
          (g += (n = t[11]) * j),
          (y += n * L),
          (m += n * D),
          (b += n * M),
          (w += n * z),
          (_ += n * q),
          (E += n * H),
          (x += n * V),
          (k += n * K),
          (S += n * B),
          (Z += n * F),
          (I += n * W),
          (O += n * G),
          (N += n * Y),
          (P += n * J),
          (A += n * X),
          (y += (n = t[12]) * j),
          (m += n * L),
          (b += n * D),
          (w += n * M),
          (_ += n * z),
          (E += n * q),
          (x += n * H),
          (k += n * V),
          (S += n * K),
          (Z += n * B),
          (I += n * F),
          (O += n * W),
          (N += n * G),
          (P += n * Y),
          (A += n * J),
          (R += n * X),
          (m += (n = t[13]) * j),
          (b += n * L),
          (w += n * D),
          (_ += n * M),
          (E += n * z),
          (x += n * q),
          (k += n * H),
          (S += n * V),
          (Z += n * K),
          (I += n * B),
          (O += n * F),
          (N += n * W),
          (P += n * G),
          (A += n * Y),
          (R += n * J),
          (U += n * X),
          (b += (n = t[14]) * j),
          (w += n * L),
          (_ += n * D),
          (E += n * M),
          (x += n * z),
          (k += n * q),
          (S += n * H),
          (Z += n * V),
          (I += n * K),
          (O += n * B),
          (N += n * F),
          (P += n * W),
          (A += n * G),
          (R += n * Y),
          (U += n * J),
          (T += n * X),
          (w += (n = t[15]) * j),
          (o += 38 * (E += n * D)),
          (a += 38 * (x += n * M)),
          (c += 38 * (k += n * z)),
          (u += 38 * (S += n * q)),
          (f += 38 * (Z += n * H)),
          (l += 38 * (I += n * V)),
          (p += 38 * (O += n * K)),
          (h += 38 * (N += n * B)),
          (d += 38 * (P += n * F)),
          (v += 38 * (A += n * W)),
          (g += 38 * (R += n * G)),
          (y += 38 * (U += n * Y)),
          (m += 38 * (T += n * J)),
          (b += 38 * (C += n * X)),
          (s =
            (n = (s += 38 * (_ += n * L)) + (i = 1) + 65535) -
            65536 * (i = Math.floor(n / 65536))),
          (o = (n = o + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (s =
            (n = (s += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
            65536 * (i = Math.floor(n / 65536))),
          (o = (n = o + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (s += i - 1 + 37 * (i - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = f),
          (e[6] = l),
          (e[7] = p),
          (e[8] = h),
          (e[9] = d),
          (e[10] = v),
          (e[11] = g),
          (e[12] = y),
          (e[13] = m),
          (e[14] = b),
          (e[15] = w);
      }
      function h(e, t) {
        p(e, t, t);
      }
      function d(e, t) {
        for (
          var r = new Uint8Array(32),
            n = new Float64Array(80),
            i = s(),
            o = s(),
            d = s(),
            v = s(),
            g = s(),
            y = s(),
            m = 0;
          m < 31;
          m++
        )
          r[m] = e[m];
        (r[31] = (127 & e[31]) | 64),
          (r[0] &= 248),
          (function (e, t) {
            for (var r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(n, t);
        for (var b = 0; b < 16; b++) o[b] = n[b];
        i[0] = v[0] = 1;
        for (var w = 254; w >= 0; --w) {
          var _ = (r[w >>> 3] >>> (7 & w)) & 1;
          u(i, o, _),
            u(d, v, _),
            f(g, i, d),
            l(i, i, d),
            f(d, o, v),
            l(o, o, v),
            h(v, g),
            h(y, i),
            p(i, d, i),
            p(d, o, g),
            f(g, i, d),
            l(i, i, d),
            h(o, i),
            l(d, v, y),
            p(i, d, a),
            f(i, i, v),
            p(d, d, i),
            p(i, v, y),
            p(v, o, n),
            h(o, g),
            u(i, o, _),
            u(d, v, _);
        }
        for (var E = 0; E < 16; E++)
          (n[E + 16] = i[E]),
            (n[E + 32] = d[E]),
            (n[E + 48] = o[E]),
            (n[E + 64] = v[E]);
        var x = n.subarray(32),
          k = n.subarray(16);
        !(function (e, t) {
          for (var r = s(), n = 0; n < 16; n++) r[n] = t[n];
          for (var i = 253; i >= 0; i--)
            h(r, r), 2 !== i && 4 !== i && p(r, r, t);
          for (var o = 0; o < 16; o++) e[o] = r[o];
        })(x, x),
          p(k, k, x);
        var S = new Uint8Array(32);
        return (
          (function (e, t) {
            for (var r = s(), n = s(), i = 0; i < 16; i++) n[i] = t[i];
            c(n), c(n), c(n);
            for (var o = 0; o < 2; o++) {
              r[0] = n[0] - 65517;
              for (var a = 1; a < 15; a++)
                (r[a] = n[a] - 65535 - ((r[a - 1] >> 16) & 1)),
                  (r[a - 1] &= 65535);
              r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
              var f = (r[15] >> 16) & 1;
              (r[14] &= 65535), u(n, r, 1 - f);
            }
            for (var l = 0; l < 16; l++)
              (e[2 * l] = 255 & n[l]), (e[2 * l + 1] = n[l] >> 8);
          })(S, k),
          S
        );
      }
      function v(e) {
        return d(e, o);
      }
      function g(e) {
        if (e.length !== t.KS)
          throw new Error("x25519: seed must be ".concat(t.KS, " bytes"));
        var r = new Uint8Array(e);
        return { publicKey: v(r), secretKey: r };
      }
      (t.Au = function (e) {
        var t = (0, n.randomBytes)(32, e),
          r = g(t);
        return (0, i.wipe)(t), r;
      }),
        (t.gi = function (e, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (e.length !== t.kz)
            throw new Error("X25519: incorrect secret key length");
          if (r.length !== t.kz)
            throw new Error("X25519: incorrect public key length");
          var i = d(e, r);
          if (n) {
            for (var s = 0, o = 0; o < i.length; o++) s |= i[o];
            if (0 === s) throw new Error("X25519: invalid shared key");
          }
          return i;
        });
    },
    39547: function (e, t, r) {
      "use strict";
      var n = r(29808);
    },
    49485: function (e, t, r) {
      "use strict";
      var n = r(38416).default,
        i = r(27424).default,
        s = r(74704).default,
        o = r(861).default,
        a = r(40499),
        c = r(59412),
        u = r(70845),
        f = r(62683),
        l = Symbol("encodeFragmentIdentifier");
      function p(e) {
        if ("string" !== typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function h(e, t) {
        return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e;
      }
      function d(e, t) {
        return t.decode ? c(e) : e;
      }
      function v(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" === typeof e
          ? v(Object.keys(e))
              .sort(function (e, t) {
                return Number(e) - Number(t);
              })
              .map(function (t) {
                return e[t];
              })
          : e;
      }
      function g(e) {
        var t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function y(e) {
        var t = (e = g(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function m(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" === typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function b(e, t) {
        p(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        var r = (function (e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function (e, r, n) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return function (e, r, n) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return function (e, r, n) {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return function (t, r, n) {
                  var i =
                      "string" === typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" === typeof r &&
                      !i &&
                      d(r, e).includes(e.arrayFormatSeparator);
                  r = s ? d(r, e) : r;
                  var o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map(function (t) {
                          return d(t, e);
                        })
                      : null === r
                      ? r
                      : d(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return function (t, r, n) {
                  var i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), i)) {
                    var s =
                      null === r
                        ? []
                        : r.split(e.arrayFormatSeparator).map(function (t) {
                            return d(t, e);
                          });
                    void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                  } else n[t] = r ? d(r, e) : r;
                };
              default:
                return function (e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" !== typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        var o,
          a = s(e.split("&"));
        try {
          for (a.s(); !(o = a.n()).done; ) {
            var c = o.value;
            if ("" !== c) {
              var f = u(t.decode ? c.replace(/\+/g, " ") : c, "="),
                l = i(f, 2),
                h = l[0],
                g = l[1];
              (g =
                void 0 === g
                  ? null
                  : ["comma", "separator", "bracket-separator"].includes(
                      t.arrayFormat
                    )
                  ? g
                  : d(g, t)),
                r(d(h, t), g, n);
            }
          }
        } catch (S) {
          a.e(S);
        } finally {
          a.f();
        }
        for (var y = 0, b = Object.keys(n); y < b.length; y++) {
          var w = b[y],
            _ = n[w];
          if ("object" === typeof _ && null !== _)
            for (var E = 0, x = Object.keys(_); E < x.length; E++) {
              var k = x[E];
              _[k] = m(_[k], t);
            }
          else n[w] = m(_, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce(function (e, t) {
              var r = n[t];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (e[t] = v(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = y),
        (t.parse = b),
        (t.stringify = function (e, t) {
          if (!e) return "";
          p(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          for (
            var r = function (r) {
                return (
                  (t.skipNull && (null === (n = e[r]) || void 0 === n)) ||
                  (t.skipEmptyString && "" === e[r])
                );
                var n;
              },
              n = (function (e) {
                switch (e.arrayFormat) {
                  case "index":
                    return function (t) {
                      return function (r, n) {
                        var i = r.length;
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), "[", i, "]"].join("")]
                                : [
                                    [h(t, e), "[", h(i, e), "]=", h(n, e)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), "[]"].join("")]
                                : [[h(t, e), "[]=", h(n, e)].join("")]
                            );
                      };
                    };
                  case "colon-list-separator":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), ":list="].join("")]
                                : [[h(t, e), ":list=", h(n, e)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                  case "bracket-separator":
                    var t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                    return function (r) {
                      return function (n, i) {
                        return void 0 === i ||
                          (e.skipNull && null === i) ||
                          (e.skipEmptyString && "" === i)
                          ? n
                          : ((i = null === i ? "" : i),
                            0 === n.length
                              ? [[h(r, e), t, h(i, e)].join("")]
                              : [[n, h(i, e)].join(e.arrayFormatSeparator)]);
                      };
                    };
                  default:
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [h(t, e)]
                                : [[h(t, e), "=", h(n, e)].join("")]
                            );
                      };
                    };
                }
              })(t),
              i = {},
              s = 0,
              a = Object.keys(e);
            s < a.length;
            s++
          ) {
            var c = a[s];
            r(c) || (i[c] = e[c]);
          }
          var u = Object.keys(i);
          return (
            !1 !== t.sort && u.sort(t.sort),
            u
              .map(function (r) {
                var i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? h(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? h(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : h(r, t) + "=" + h(i, t);
              })
              .filter(function (e) {
                return e.length > 0;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function (e, t) {
          t = Object.assign({ decode: !0 }, t);
          var r = u(e, "#"),
            n = i(r, 2),
            s = n[0],
            o = n[1];
          return Object.assign(
            { url: s.split("?")[0] || "", query: b(y(e), t) },
            t && t.parseFragmentIdentifier && o
              ? { fragmentIdentifier: d(o, t) }
              : {}
          );
        }),
        (t.stringifyUrl = function (e, r) {
          r = Object.assign(n({ encode: !0, strict: !0 }, l, !0), r);
          var i = g(e.url).split("?")[0] || "",
            s = t.extract(e.url),
            o = t.parse(s, { sort: !1 }),
            a = Object.assign(o, e.query),
            c = t.stringify(a, r);
          c && (c = "?".concat(c));
          var u = (function (e) {
            var t = "",
              r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (u = "#".concat(
                r[l] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier
              )),
            "".concat(i).concat(c).concat(u)
          );
        }),
        (t.pick = function (e, r, i) {
          i = Object.assign(n({ parseFragmentIdentifier: !0 }, l, !1), i);
          var s = t.parseUrl(e, i),
            o = s.url,
            a = s.query,
            c = s.fragmentIdentifier;
          return t.stringifyUrl(
            { url: o, query: f(a, r), fragmentIdentifier: c },
            i
          );
        }),
        (t.exclude = function (e, r, n) {
          var i = Array.isArray(r)
            ? function (e) {
                return !r.includes(e);
              }
            : function (e, t) {
                return !r(e, t);
              };
          return t.pick(e, i, n);
        });
    },
    90948: function (e, t, r) {
      "use strict";
      r.d(t, {
        q: function () {
          return s;
        },
      });
      var n = r(43144),
        i = r(15671),
        s = (0, n.Z)(function e() {
          (0, i.Z)(this, e);
        });
    },
    98196: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          IEvents: function () {
            return n.q;
          },
        });
      var n = r(90948);
    },
    94601: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      var n = r(63182);
      (t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    63007: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(3431).__exportStar(r(94601), t);
    },
    12101: function (e, t, r) {
      "use strict";
      var n = r(17061).default,
        i = r(56690).default,
        s = r(89728).default,
        o = r(61655).default,
        a = r(26389).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      var c = r(3431),
        u = r(47465),
        f = r(63182),
        l = r(58830),
        p = r(63007),
        h = (function (e) {
          o(r, e);
          var t = a(r);
          function r(e) {
            var n;
            return (
              i(this, r),
              ((n = t.call(this, e)).events = new u.EventEmitter()),
              (n.interval = p.HEARTBEAT_INTERVAL),
              (n.interval =
                (null === e || void 0 === e ? void 0 : e.interval) ||
                p.HEARTBEAT_INTERVAL),
              n
            );
          }
          return (
            s(
              r,
              [
                {
                  key: "init",
                  value: function () {
                    return c.__awaiter(
                      this,
                      void 0,
                      void 0,
                      n().mark(function e() {
                        return n().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.initialize();
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    clearInterval(this.intervalRef);
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    this.events.on(e, t);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    this.events.once(e, t);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    this.events.off(e, t);
                  },
                },
                {
                  key: "removeListener",
                  value: function (e, t) {
                    this.events.removeListener(e, t);
                  },
                },
                {
                  key: "initialize",
                  value: function () {
                    return c.__awaiter(
                      this,
                      void 0,
                      void 0,
                      n().mark(function e() {
                        var t = this;
                        return n().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.intervalRef = setInterval(function () {
                                    return t.pulse();
                                  }, f.toMiliseconds(this.interval));
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
                  },
                },
                {
                  key: "pulse",
                  value: function () {
                    this.events.emit(p.HEARTBEAT_EVENTS.pulse);
                  },
                },
              ],
              [
                {
                  key: "init",
                  value: function (e) {
                    return c.__awaiter(
                      this,
                      void 0,
                      void 0,
                      n().mark(function t() {
                        var i;
                        return n().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (i = new r(e)), (t.next = 3), i.init();
                              case 3:
                                return t.abrupt("return", i);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                  },
                },
              ]
            ),
            r
          );
        })(l.IHeartBeat);
      t.HeartBeat = h;
    },
    6961: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3431);
      n.__exportStar(r(12101), t),
        n.__exportStar(r(58830), t),
        n.__exportStar(r(63007), t);
    },
    65336: function (e, t, r) {
      "use strict";
      var n = r(89728).default,
        i = r(56690).default,
        s = r(61655).default,
        o = r(26389).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      var a = (function (e) {
        s(r, e);
        var t = o(r);
        function r(e) {
          return i(this, r), t.call(this);
        }
        return n(r);
      })(r(98196).IEvents);
      t.IHeartBeat = a;
    },
    58830: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(3431).__exportStar(r(65336), t);
    },
    53719: function (e, t, r) {
      "use strict";
      var n = r(17061).default,
        i = r(56690).default,
        s = r(89728).default;
      var o = r(3431),
        a = r(62038),
        c = o.__importDefault(r(72779)),
        u = r(83454),
        f = (function () {
          function e() {
            i(this, e), (this.localStorage = c.default);
          }
          return (
            s(e, [
              {
                key: "getKeys",
                value: function () {
                  return o.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function e() {
                      return n().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  Object.keys(this.localStorage)
                                );
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
                },
              },
              {
                key: "getEntries",
                value: function () {
                  return o.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function e() {
                      return n().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  Object.entries(this.localStorage).map(
                                    u.parseEntry
                                  )
                                );
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
                },
              },
              {
                key: "getItem",
                value: function (e) {
                  return o.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function t() {
                      var r;
                      return n().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null !== (r = this.localStorage.getItem(e))
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return", void 0);
                              case 3:
                                return t.abrupt("return", a.safeJsonParse(r));
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  return o.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function r() {
                      return n().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                this.localStorage.setItem(
                                  e,
                                  a.safeJsonStringify(t)
                                );
                              case 1:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  return o.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function t() {
                      return n().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                this.localStorage.removeItem(e);
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
      t.ZP = f;
    },
    72779: function (e, t, r) {
      "use strict";
      !(function () {
        var t;
        function n() {}
        ((t = n).prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (t.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (t.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (t.prototype.clear = function () {
            var e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (t.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "undefined" !== typeof r.g && r.g.localStorage
            ? (e.exports = r.g.localStorage)
            : "undefined" !== typeof window && window.localStorage
            ? (e.exports = window.localStorage)
            : (e.exports = new n());
      })();
    },
    83454: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3431);
      n.__exportStar(r(72423), t), n.__exportStar(r(64855), t);
    },
    72423: function (e, t, r) {
      "use strict";
      var n = r(89728).default,
        i = r(56690).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IKeyValueStorage = void 0);
      var s = n(function e() {
        i(this, e);
      });
      t.IKeyValueStorage = s;
    },
    64855: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseEntry = void 0);
      var n = r(62038);
      t.parseEntry = function (e) {
        var t;
        return [
          e[0],
          n.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : ""),
        ];
      };
    },
    49083: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0),
        (t.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (t.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    21581: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.pino = void 0);
      var n = r(3431),
        i = n.__importDefault(r(32656));
      Object.defineProperty(t, "pino", {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      }),
        n.__exportStar(r(49083), t),
        n.__exportStar(r(49889), t);
    },
    49889: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateChildLogger =
          t.formatChildLoggerContext =
          t.getLoggerContext =
          t.setBrowserLoggerContext =
          t.getBrowserLoggerContext =
          t.getDefaultLoggerOptions =
            void 0);
      var n = r(49083);
      function i(e) {
        return (
          e[
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : n.PINO_CUSTOM_CONTEXT_KEY
          ] || ""
        );
      }
      function s(e, t) {
        return (
          (e[
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.PINO_CUSTOM_CONTEXT_KEY
          ] = t),
          e
        );
      }
      function o(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : n.PINO_CUSTOM_CONTEXT_KEY;
        return "undefined" === typeof e.bindings
          ? i(e, t)
          : e.bindings().context || "";
      }
      function a(e, t) {
        var r = o(
          e,
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : n.PINO_CUSTOM_CONTEXT_KEY
        );
        return r.trim() ? "".concat(r, "/").concat(t) : t;
      }
      (t.getDefaultLoggerOptions = function (e) {
        return Object.assign(Object.assign({}, e), {
          level:
            (null === e || void 0 === e ? void 0 : e.level) ||
            n.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (t.getBrowserLoggerContext = i),
        (t.setBrowserLoggerContext = s),
        (t.getLoggerContext = o),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : n.PINO_CUSTOM_CONTEXT_KEY,
            i = a(e, t, r);
          return s(e.child({ context: i }), i, r);
        });
    },
    2023: function () {},
    6584: function () {},
    83815: function (e, t, r) {
      "use strict";
      t.D = void 0;
      var n = r(29808);
      t.D = function () {
        var e, t;
        try {
          (e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow());
        } catch (s) {
          return null;
        }
        function r() {
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          for (
            var i = e.getElementsByTagName("meta"),
              s = function () {
                var e = i[o],
                  t = ["itemprop", "property", "name"]
                    .map(function (t) {
                      return e.getAttribute(t);
                    })
                    .filter(function (e) {
                      return !!e && r.includes(e);
                    });
                if (t.length && t) {
                  var n = e.getAttribute("content");
                  if (n) return { v: n };
                }
              },
              o = 0;
            o < i.length;
            o++
          ) {
            var a = s();
            if ("object" === typeof a) return a.v;
          }
          return "";
        }
        var i = (function () {
          var t = r("name", "og:site_name", "og:title", "twitter:title");
          return t || (t = e.title), t;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: t.origin,
          icons: (function () {
            for (
              var r = e.getElementsByTagName("link"), n = [], i = 0;
              i < r.length;
              i++
            ) {
              var s = r[i],
                o = s.getAttribute("rel");
              if (o && o.toLowerCase().indexOf("icon") > -1) {
                var a = s.getAttribute("href");
                if (a)
                  if (
                    -1 === a.toLowerCase().indexOf("https:") &&
                    -1 === a.toLowerCase().indexOf("http:") &&
                    0 !== a.indexOf("//")
                  ) {
                    var c = t.protocol + "//" + t.host;
                    if (0 === a.indexOf("/")) c += a;
                    else {
                      var u = t.pathname.split("/");
                      u.pop(), (c += u.join("/") + "/" + a);
                    }
                    n.push(c);
                  } else if (0 === a.indexOf("//")) {
                    var f = t.protocol + a;
                    n.push(f);
                  } else n.push(a);
              }
            }
            return n;
          })(),
          name: i,
        };
      };
    },
    19915: function (e, t, r) {
      "use strict";
      var n = r(38416).default,
        i = r(27424).default,
        s = r(74704).default,
        o = r(861).default,
        a = r(40499),
        c = r(59412),
        u = r(70845),
        f = r(62683),
        l = Symbol("encodeFragmentIdentifier");
      function p(e) {
        if ("string" !== typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function h(e, t) {
        return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e;
      }
      function d(e, t) {
        return t.decode ? c(e) : e;
      }
      function v(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" === typeof e
          ? v(Object.keys(e))
              .sort(function (e, t) {
                return Number(e) - Number(t);
              })
              .map(function (t) {
                return e[t];
              })
          : e;
      }
      function g(e) {
        var t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function y(e) {
        var t = (e = g(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function m(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" === typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function b(e, t) {
        p(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        var r = (function (e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function (e, r, n) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return function (e, r, n) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return function (e, r, n) {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return function (t, r, n) {
                  var i =
                      "string" === typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" === typeof r &&
                      !i &&
                      d(r, e).includes(e.arrayFormatSeparator);
                  r = s ? d(r, e) : r;
                  var o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map(function (t) {
                          return d(t, e);
                        })
                      : null === r
                      ? r
                      : d(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return function (t, r, n) {
                  var i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), i)) {
                    var s =
                      null === r
                        ? []
                        : r.split(e.arrayFormatSeparator).map(function (t) {
                            return d(t, e);
                          });
                    void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                  } else n[t] = r ? d(r, e) : r;
                };
              default:
                return function (e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" !== typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        var o,
          a = s(e.split("&"));
        try {
          for (a.s(); !(o = a.n()).done; ) {
            var c = o.value;
            if ("" !== c) {
              var f = u(t.decode ? c.replace(/\+/g, " ") : c, "="),
                l = i(f, 2),
                h = l[0],
                g = l[1];
              (g =
                void 0 === g
                  ? null
                  : ["comma", "separator", "bracket-separator"].includes(
                      t.arrayFormat
                    )
                  ? g
                  : d(g, t)),
                r(d(h, t), g, n);
            }
          }
        } catch (S) {
          a.e(S);
        } finally {
          a.f();
        }
        for (var y = 0, b = Object.keys(n); y < b.length; y++) {
          var w = b[y],
            _ = n[w];
          if ("object" === typeof _ && null !== _)
            for (var E = 0, x = Object.keys(_); E < x.length; E++) {
              var k = x[E];
              _[k] = m(_[k], t);
            }
          else n[w] = m(_, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce(function (e, t) {
              var r = n[t];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (e[t] = v(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = y),
        (t.parse = b),
        (t.stringify = function (e, t) {
          if (!e) return "";
          p(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          for (
            var r = function (r) {
                return (
                  (t.skipNull && (null === (n = e[r]) || void 0 === n)) ||
                  (t.skipEmptyString && "" === e[r])
                );
                var n;
              },
              n = (function (e) {
                switch (e.arrayFormat) {
                  case "index":
                    return function (t) {
                      return function (r, n) {
                        var i = r.length;
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), "[", i, "]"].join("")]
                                : [
                                    [h(t, e), "[", h(i, e), "]=", h(n, e)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), "[]"].join("")]
                                : [[h(t, e), "[]=", h(n, e)].join("")]
                            );
                      };
                    };
                  case "colon-list-separator":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), ":list="].join("")]
                                : [[h(t, e), ":list=", h(n, e)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                  case "bracket-separator":
                    var t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                    return function (r) {
                      return function (n, i) {
                        return void 0 === i ||
                          (e.skipNull && null === i) ||
                          (e.skipEmptyString && "" === i)
                          ? n
                          : ((i = null === i ? "" : i),
                            0 === n.length
                              ? [[h(r, e), t, h(i, e)].join("")]
                              : [[n, h(i, e)].join(e.arrayFormatSeparator)]);
                      };
                    };
                  default:
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [h(t, e)]
                                : [[h(t, e), "=", h(n, e)].join("")]
                            );
                      };
                    };
                }
              })(t),
              i = {},
              s = 0,
              a = Object.keys(e);
            s < a.length;
            s++
          ) {
            var c = a[s];
            r(c) || (i[c] = e[c]);
          }
          var u = Object.keys(i);
          return (
            !1 !== t.sort && u.sort(t.sort),
            u
              .map(function (r) {
                var i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? h(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? h(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : h(r, t) + "=" + h(i, t);
              })
              .filter(function (e) {
                return e.length > 0;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function (e, t) {
          t = Object.assign({ decode: !0 }, t);
          var r = u(e, "#"),
            n = i(r, 2),
            s = n[0],
            o = n[1];
          return Object.assign(
            { url: s.split("?")[0] || "", query: b(y(e), t) },
            t && t.parseFragmentIdentifier && o
              ? { fragmentIdentifier: d(o, t) }
              : {}
          );
        }),
        (t.stringifyUrl = function (e, r) {
          r = Object.assign(n({ encode: !0, strict: !0 }, l, !0), r);
          var i = g(e.url).split("?")[0] || "",
            s = t.extract(e.url),
            o = t.parse(s, { sort: !1 }),
            a = Object.assign(o, e.query),
            c = t.stringify(a, r);
          c && (c = "?".concat(c));
          var u = (function (e) {
            var t = "",
              r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (u = "#".concat(
                r[l] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier
              )),
            "".concat(i).concat(c).concat(u)
          );
        }),
        (t.pick = function (e, r, i) {
          i = Object.assign(n({ parseFragmentIdentifier: !0 }, l, !1), i);
          var s = t.parseUrl(e, i),
            o = s.url,
            a = s.query,
            c = s.fragmentIdentifier;
          return t.stringifyUrl(
            { url: o, query: f(a, r), fragmentIdentifier: c },
            i
          );
        }),
        (t.exclude = function (e, r, n) {
          var i = Array.isArray(r)
            ? function (e) {
                return !r.includes(e);
              }
            : function (e, t) {
                return !r(e, t);
              };
          return t.pick(e, i, n);
        });
    },
    80060: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3431);
      n.__exportStar(r(22505), t), n.__exportStar(r(39614), t);
    },
    22505: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    39614: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    63182: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3431);
      n.__exportStar(r(86100), t),
        n.__exportStar(r(50706), t),
        n.__exportStar(r(29443), t),
        n.__exportStar(r(80060), t);
    },
    29443: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(3431).__exportStar(r(86596), t);
    },
    86596: function (e, t, r) {
      "use strict";
      var n = r(89728).default,
        i = r(56690).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0);
      var s = n(function e() {
        i(this, e);
      });
      t.IWatch = s;
    },
    17355: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      var n = r(80060);
      (t.toMiliseconds = function (e) {
        return e * n.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / n.ONE_THOUSAND);
        });
    },
    83900: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, e);
          });
        });
    },
    86100: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3431);
      n.__exportStar(r(83900), t), n.__exportStar(r(17355), t);
    },
    50706: function (e, t, r) {
      "use strict";
      var n = r(56690).default,
        i = r(89728).default;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      var s = (function () {
        function e() {
          n(this, e), (this.timestamps = new Map());
        }
        return (
          i(e, [
            {
              key: "start",
              value: function (e) {
                if (this.timestamps.has(e))
                  throw new Error(
                    "Watch already started for label: ".concat(e)
                  );
                this.timestamps.set(e, { started: Date.now() });
              },
            },
            {
              key: "stop",
              value: function (e) {
                var t = this.get(e);
                if ("undefined" !== typeof t.elapsed)
                  throw new Error(
                    "Watch already stopped for label: ".concat(e)
                  );
                var r = Date.now() - t.started;
                this.timestamps.set(e, { started: t.started, elapsed: r });
              },
            },
            {
              key: "get",
              value: function (e) {
                var t = this.timestamps.get(e);
                if ("undefined" === typeof t)
                  throw new Error("No timestamp found for label: ".concat(e));
                return t;
              },
            },
            {
              key: "elapsed",
              value: function (e) {
                var t = this.get(e),
                  r = t.elapsed || Date.now() - t.started;
                return r;
              },
            },
          ]),
          e
        );
      })();
      (t.Watch = s), (t.default = s);
    },
    60598: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          UniversalProvider: function () {
            return Tc;
          },
          default: function () {
            return Uc;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          identity: function () {
            return _e;
          },
        });
      var i = {};
      r.r(i),
        r.d(i, {
          base2: function () {
            return Ee;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          base8: function () {
            return xe;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          base10: function () {
            return ke;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          base16: function () {
            return Se;
          },
          base16upper: function () {
            return Ze;
          },
        });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: function () {
            return Ie;
          },
          base32hex: function () {
            return Ae;
          },
          base32hexpad: function () {
            return Ue;
          },
          base32hexpadupper: function () {
            return Te;
          },
          base32hexupper: function () {
            return Re;
          },
          base32pad: function () {
            return Ne;
          },
          base32padupper: function () {
            return Pe;
          },
          base32upper: function () {
            return Oe;
          },
          base32z: function () {
            return Ce;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          base36: function () {
            return je;
          },
          base36upper: function () {
            return Le;
          },
        });
      var f = {};
      r.r(f),
        r.d(f, {
          base58btc: function () {
            return De;
          },
          base58flickr: function () {
            return Me;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          base64: function () {
            return ze;
          },
          base64pad: function () {
            return qe;
          },
          base64url: function () {
            return He;
          },
          base64urlpad: function () {
            return Ve;
          },
        });
      var p = {};
      r.r(p),
        r.d(p, {
          base256emoji: function () {
            return We;
          },
        });
      var h = {};
      r.r(h),
        r.d(h, {
          sha256: function () {
            return bt;
          },
          sha512: function () {
            return wt;
          },
        });
      var d = {};
      r.r(d),
        r.d(d, {
          identity: function () {
            return Et;
          },
        });
      var v = {};
      r.r(v),
        r.d(v, {
          code: function () {
            return kt;
          },
          decode: function () {
            return Zt;
          },
          encode: function () {
            return St;
          },
          name: function () {
            return xt;
          },
        });
      var g = {};
      r.r(g),
        r.d(g, {
          code: function () {
            return Pt;
          },
          decode: function () {
            return Rt;
          },
          encode: function () {
            return At;
          },
          name: function () {
            return Nt;
          },
        });
      var y = r(29439),
        m = r(37762),
        b = r(74165),
        w = r(15861),
        _ = r(15671),
        E = r(43144),
        x = r(32656),
        k = r.n(x),
        S = r(97326),
        Z = r(93433),
        I = r(60136),
        O = r(29388),
        N = r(4942),
        P = r(1413),
        A = r(47465),
        R = r.n(A),
        U = r(53719),
        T = r(6961),
        C = r(21581),
        j = r(90948),
        L = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e) {
            var n;
            return (
              (0, _.Z)(this, r),
              ((n = t.call(this)).opts = e),
              (n.protocol = "wc"),
              (n.version = 2),
              n
            );
          }
          return (0, E.Z)(r);
        })(j.q),
        D = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this)).core = e),
              (i.logger = n),
              (i.records = new Map()),
              i
            );
          }
          return (0, E.Z)(r);
        })(j.q),
        M = (0, E.Z)(function e(t, r) {
          (0, _.Z)(this, e), (this.logger = t), (this.core = r);
        }),
        z = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this)).relayer = e),
              (i.logger = n),
              i
            );
          }
          return (0, E.Z)(r);
        })(j.q),
        q = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e) {
            return (0, _.Z)(this, r), t.call(this);
          }
          return (0, E.Z)(r);
        })(j.q),
        H = (0, E.Z)(function e(t, r, n, i) {
          (0, _.Z)(this, e),
            (this.core = t),
            (this.logger = r),
            (this.name = n);
        }),
        V = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this)).relayer = e),
              (i.logger = n),
              i
            );
          }
          return (0, E.Z)(r);
        })(j.q),
        K = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this)).core = e),
              (i.logger = n),
              i
            );
          }
          return (0, E.Z)(r);
        })(j.q),
        B = (R(), A.EventEmitter, r(75457)),
        F = r(2421),
        W = r(56271),
        G = r(63182),
        Y = "EdDSA",
        J = "JWT",
        X = ".",
        Q = "base64url",
        $ = "utf8",
        ee = "utf8",
        te = ":",
        re = "did",
        ne = "key",
        ie = "base58btc",
        se = "z",
        oe = "K36",
        ae = 32;
      function ce(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function ue() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? ce(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      var fe = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
            r[n] = 255;
          for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            f = Math.log(256) / Math.log(a);
          function l(e) {
            if ("string" !== typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var n = 0, i = 0; e[t] === c; ) n++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var f = r[e.charCodeAt(t)];
                if (255 === f) return;
                for (
                  var l = 0, p = s - 1;
                  (0 !== f || l < i) && -1 !== p;
                  p--, l++
                )
                  (f += (a * o[p]) >>> 0),
                    (o[p] = f % 256 >>> 0),
                    (f = (f / 256) >>> 0);
                if (0 !== f) throw new Error("Non-zero carry");
                (i = l), t++;
              }
              if (" " !== e[t]) {
                for (var h = s - i; h !== s && 0 === o[h]; ) h++;
                for (var d = new Uint8Array(n + (s - h)), v = n; h !== s; )
                  d[v++] = o[h++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, n = 0, i = 0, s = t.length;
                i !== s && 0 === t[i];

              )
                i++, r++;
              for (
                var o = ((s - i) * f + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var l = t[i], p = 0, h = o - 1;
                  (0 !== l || p < n) && -1 !== h;
                  h--, p++
                )
                  (l += (256 * u[h]) >>> 0),
                    (u[h] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (n = p), i++;
              }
              for (var d = o - n; d !== o && 0 === u[d]; ) d++;
              for (var v = c.repeat(r); d < o; ++d) v += e.charAt(u[d]);
              return v;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var r = l(e);
              if (r) return r;
              throw new Error("Non-".concat(t, " character"));
            },
          };
        },
        le = fe,
        pe =
          (new Uint8Array(0),
          function (e) {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
              return e;
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            throw new Error("Unknown type, must be binary type");
          }),
        he = (function () {
          function e(t, r, n) {
            (0, _.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              (this.baseEncode = n);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  if (e instanceof Uint8Array)
                    return "".concat(this.prefix).concat(this.baseEncode(e));
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        de = (function () {
          function e(t, r, n) {
            if (
              ((0, _.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              void 0 === r.codePointAt(0))
            )
              throw new Error("Invalid prefix character");
            (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "decode",
                value: function (e) {
                  if ("string" === typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                      throw Error(
                        "Unable to decode multibase string "
                          .concat(JSON.stringify(e), ", ")
                          .concat(
                            this.name,
                            " decoder only supports inputs prefixed with "
                          )
                          .concat(this.prefix)
                      );
                    return this.baseDecode(e.slice(this.prefix.length));
                  }
                  throw Error("Can only multibase decode strings");
                },
              },
              {
                key: "or",
                value: function (e) {
                  return ge(this, e);
                },
              },
            ]),
            e
          );
        })(),
        ve = (function () {
          function e(t) {
            (0, _.Z)(this, e), (this.decoders = t);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "or",
                value: function (e) {
                  return ge(this, e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  var t = e[0],
                    r = this.decoders[t];
                  if (r) return r.decode(e);
                  throw RangeError(
                    "Unable to decode multibase string "
                      .concat(JSON.stringify(e), ", only inputs prefixed with ")
                      .concat(Object.keys(this.decoders), " are supported")
                  );
                },
              },
            ]),
            e
          );
        })(),
        ge = function (e, t) {
          return new ve(
            (0, P.Z)(
              (0, P.Z)({}, e.decoders || (0, N.Z)({}, e.prefix, e)),
              t.decoders || (0, N.Z)({}, t.prefix, t)
            )
          );
        },
        ye = (function () {
          function e(t, r, n, i) {
            (0, _.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              (this.baseEncode = n),
              (this.baseDecode = i),
              (this.encoder = new he(t, r, n)),
              (this.decoder = new de(t, r, i));
          }
          return (
            (0, E.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  return this.encoder.encode(e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  return this.decoder.decode(e);
                },
              },
            ]),
            e
          );
        })(),
        me = function (e) {
          var t = e.name,
            r = e.prefix,
            n = e.encode,
            i = e.decode;
          return new ye(t, r, n, i);
        },
        be = function (e) {
          var t = e.prefix,
            r = e.name,
            n = e.alphabet,
            i = le(n, r),
            s = i.encode,
            o = i.decode;
          return me({
            prefix: t,
            name: r,
            encode: s,
            decode: function (e) {
              return pe(o(e));
            },
          });
        },
        we = function (e) {
          var t = e.name,
            r = e.prefix,
            n = e.bitsPerChar,
            i = e.alphabet;
          return me({
            prefix: r,
            name: t,
            encode: function (e) {
              return (function (e, t, r) {
                for (
                  var n = "=" === t[t.length - 1],
                    i = (1 << r) - 1,
                    s = "",
                    o = 0,
                    a = 0,
                    c = 0;
                  c < e.length;
                  ++c
                )
                  for (a = (a << 8) | e[c], o += 8; o > r; )
                    s += t[i & (a >> (o -= r))];
                if ((o && (s += t[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, i, n);
            },
            decode: function (e) {
              return (function (e, t, r, n) {
                for (var i = {}, s = 0; s < t.length; ++s) i[t[s]] = s;
                for (var o = e.length; "=" === e[o - 1]; ) --o;
                for (
                  var a = new Uint8Array(((o * r) / 8) | 0),
                    c = 0,
                    u = 0,
                    f = 0,
                    l = 0;
                  l < o;
                  ++l
                ) {
                  var p = i[e[l]];
                  if (void 0 === p)
                    throw new SyntaxError("Non-".concat(n, " character"));
                  (u = (u << r) | p),
                    (c += r) >= 8 && ((c -= 8), (a[f++] = 255 & (u >> c)));
                }
                if (c >= r || 255 & (u << (8 - c)))
                  throw new SyntaxError("Unexpected end of data");
                return a;
              })(e, i, n, t);
            },
          });
        },
        _e = me({
          prefix: "\0",
          name: "identity",
          encode: function (e) {
            return (function (e) {
              return new TextDecoder().decode(e);
            })(e);
          },
          decode: function (e) {
            return (function (e) {
              return new TextEncoder().encode(e);
            })(e);
          },
        }),
        Ee = we({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        xe = we({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        ke = be({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        Se = we({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Ze = we({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        Ie = we({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        Oe = we({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Ne = we({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Pe = we({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Ae = we({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Re = we({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Ue = we({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Te = we({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Ce = we({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        je = be({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Le = be({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        De = be({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Me = be({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        ze = we({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        qe = we({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        He = we({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Ve = we({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        Ke = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        Be = Ke.reduce(function (e, t, r) {
          return (e[r] = t), e;
        }, []),
        Fe = Ke.reduce(function (e, t, r) {
          return (e[t.codePointAt(0)] = r), e;
        }, []);
      var We = me({
          prefix: "\ud83d\ude80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce(function (e, t) {
              return (e += Be[t]);
            }, "");
          },
          decode: function (e) {
            var t,
              r = [],
              n = (0, m.Z)(e);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var i = t.value,
                  s = Fe[i.codePointAt(0)];
                if (void 0 === s)
                  throw new Error("Non-base256emoji character: ".concat(i));
                r.push(s);
              }
            } catch (o) {
              n.e(o);
            } finally {
              n.f();
            }
            return new Uint8Array(r);
          },
        }),
        Ge = function e(t, r, n) {
          r = r || [];
          var i = (n = n || 0);
          for (; t >= Xe; ) (r[n++] = (255 & t) | Ye), (t /= 128);
          for (; t & Je; ) (r[n++] = (255 & t) | Ye), (t >>>= 7);
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r;
        },
        Ye = 128,
        Je = -128,
        Xe = Math.pow(2, 31);
      var Qe = function e(t, r) {
          var n,
            i = 0,
            s = 0,
            o = (r = r || 0),
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (n = t[o++]),
              (i += s < 28 ? (n & et) << s : (n & et) * Math.pow(2, s)),
              (s += 7);
          } while (n >= $e);
          return (e.bytes = o - r), i;
        },
        $e = 128,
        et = 127;
      var tt = Math.pow(2, 7),
        rt = Math.pow(2, 14),
        nt = Math.pow(2, 21),
        it = Math.pow(2, 28),
        st = Math.pow(2, 35),
        ot = Math.pow(2, 42),
        at = Math.pow(2, 49),
        ct = Math.pow(2, 56),
        ut = Math.pow(2, 63),
        ft = {
          encode: Ge,
          decode: Qe,
          encodingLength: function (e) {
            return e < tt
              ? 1
              : e < rt
              ? 2
              : e < nt
              ? 3
              : e < it
              ? 4
              : e < st
              ? 5
              : e < ot
              ? 6
              : e < at
              ? 7
              : e < ct
              ? 8
              : e < ut
              ? 9
              : 10;
          },
        },
        lt = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return [ft.decode(e, t), ft.decode.bytes];
        },
        pt = function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return ft.encode(e, t, r), t;
        },
        ht = function (e) {
          return ft.encodingLength(e);
        },
        dt = function (e, t) {
          var r = t.byteLength,
            n = ht(e),
            i = n + ht(r),
            s = new Uint8Array(i + r);
          return pt(e, s, 0), pt(r, s, n), s.set(t, i), new vt(e, r, t, s);
        },
        vt = (0, E.Z)(function e(t, r, n, i) {
          (0, _.Z)(this, e),
            (this.code = t),
            (this.size = r),
            (this.digest = n),
            (this.bytes = i);
        }),
        gt = function (e) {
          var t = e.name,
            r = e.code,
            n = e.encode;
          return new yt(t, r, n);
        },
        yt = (function () {
          function e(t, r, n) {
            (0, _.Z)(this, e),
              (this.name = t),
              (this.code = r),
              (this.encode = n);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "digest",
                value: function (e) {
                  var t = this;
                  if (e instanceof Uint8Array) {
                    var r = this.encode(e);
                    return r instanceof Uint8Array
                      ? dt(this.code, r)
                      : r.then(function (e) {
                          return dt(t.code, e);
                        });
                  }
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        mt = function (e) {
          return (function () {
            var t = (0, w.Z)(
              (0, b.Z)().mark(function t(r) {
                return (0, b.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.t0 = Uint8Array),
                          (t.next = 3),
                          crypto.subtle.digest(e, r)
                        );
                      case 3:
                        return (
                          (t.t1 = t.sent), t.abrupt("return", new t.t0(t.t1))
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        bt = gt({ name: "sha2-256", code: 18, encode: mt("SHA-256") }),
        wt = gt({ name: "sha2-512", code: 19, encode: mt("SHA-512") }),
        _t = pe,
        Et = {
          code: 0,
          name: "identity",
          encode: _t,
          digest: function (e) {
            return dt(0, _t(e));
          },
        },
        xt = "raw",
        kt = 85,
        St = function (e) {
          return pe(e);
        },
        Zt = function (e) {
          return pe(e);
        },
        It = new TextEncoder(),
        Ot = new TextDecoder(),
        Nt = "json",
        Pt = 512,
        At = function (e) {
          return It.encode(JSON.stringify(e));
        },
        Rt = function (e) {
          return JSON.parse(Ot.decode(e));
        },
        Ut =
          (Symbol.toStringTag,
          Symbol.for("nodejs.util.inspect.custom"),
          function (e, t) {
            switch (e[0]) {
              case "Q":
                var r = t || De;
                return [De.prefix, r.decode("".concat(De.prefix).concat(e))];
              case De.prefix:
                var n = t || De;
                return [De.prefix, n.decode(e)];
              case Ie.prefix:
                var i = t || Ie;
                return [Ie.prefix, i.decode(e)];
              default:
                if (null == t)
                  throw Error(
                    "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                  );
                return [e[0], t.decode(e)];
            }
          }),
        Tt = function (e, t, r) {
          var n = r.prefix;
          if (n !== De.prefix)
            throw Error(
              "Cannot string encode V0 in ".concat(r.name, " encoding")
            );
          var i = t.get(n);
          if (null == i) {
            var s = r.encode(e).slice(1);
            return t.set(n, s), s;
          }
          return i;
        },
        Ct = function (e, t, r) {
          var n = r.prefix,
            i = t.get(n);
          if (null == i) {
            var s = r.encode(e);
            return t.set(n, s), s;
          }
          return i;
        },
        jt = 112,
        Lt = 18,
        Dt = function (e, t, r) {
          var n = ht(e),
            i = n + ht(t),
            s = new Uint8Array(i + r.byteLength);
          return pt(e, s, 0), pt(t, s, n), s.set(r, i), s;
        },
        Mt = Symbol.for("@ipld/js-cid/CID"),
        zt = { writable: !1, configurable: !1, enumerable: !0 },
        qt = { writable: !1, enumerable: !1, configurable: !1 },
        Ht = function (e, t) {
          if (!e.test("0.0.0-dev")) throw new Error(t);
          console.warn(t);
        },
        Vt =
          "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n",
        Kt = (0, P.Z)(
          (0, P.Z)(
            (0, P.Z)(
              (0, P.Z)(
                (0, P.Z)(
                  (0, P.Z)(
                    (0, P.Z)((0, P.Z)((0, P.Z)((0, P.Z)({}, n), i), s), o),
                    a
                  ),
                  c
                ),
                u
              ),
              f
            ),
            l
          ),
          p
        );
      (0, P.Z)((0, P.Z)({}, h), d);
      function Bt(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      var Ft = Bt(
          "utf8",
          "u",
          function (e) {
            return "u" + new TextDecoder("utf8").decode(e);
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1));
          }
        ),
        Wt = Bt(
          "ascii",
          "a",
          function (e) {
            for (var t = "a", r = 0; r < e.length; r++)
              t += String.fromCharCode(e[r]);
            return t;
          },
          function (e) {
            for (
              var t = ue((e = e.substring(1)).length), r = 0;
              r < e.length;
              r++
            )
              t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        Gt = (0, P.Z)(
          {
            utf8: Ft,
            "utf-8": Ft,
            hex: Kt.base16,
            latin1: Wt,
            ascii: Wt,
            binary: Wt,
          },
          Kt
        );
      function Yt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          r = Gt[t];
        if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8");
      }
      function Jt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          r = Gt[t];
        if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode("".concat(r.prefix).concat(e))
          : ce(globalThis.Buffer.from(e, "utf-8"));
      }
      function Xt(e) {
        return Yt(Jt((0, B.u)(e), $), Q);
      }
      function Qt(e) {
        var t = Jt(oe, ie),
          r =
            se +
            Yt(
              (function (e, t) {
                t ||
                  (t = e.reduce(function (e, t) {
                    return e + t.length;
                  }, 0));
                var r,
                  n = ue(t),
                  i = 0,
                  s = (0, m.Z)(e);
                try {
                  for (s.s(); !(r = s.n()).done; ) {
                    var o = r.value;
                    n.set(o, i), (i += o.length);
                  }
                } catch (a) {
                  s.e(a);
                } finally {
                  s.f();
                }
                return ce(n);
              })([t, e]),
              ie
            );
        return [re, ne, r].join(te);
      }
      function $t(e) {
        return [
          Xt(e.header),
          Xt(e.payload),
          ((t = e.signature), Yt(t, Q)),
        ].join(X);
        var t;
      }
      function er() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (0, W.randomBytes)(ae);
        return F._w(e);
      }
      function tr(e, t, r, n) {
        return rr.apply(this, arguments);
      }
      function rr() {
        return (
          (rr = (0, w.Z)(
            (0, b.Z)().mark(function e(t, r, n, i) {
              var s,
                o,
                a,
                c,
                u,
                f,
                l = arguments;
              return (0, b.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s =
                          l.length > 4 && void 0 !== l[4]
                            ? l[4]
                            : (0, G.fromMiliseconds)(Date.now())),
                        (o = { alg: Y, typ: J }),
                        (a = Qt(i.publicKey)),
                        (u = Jt(
                          [
                            Xt(
                              (p = {
                                header: o,
                                payload: (c = {
                                  iss: a,
                                  sub: t,
                                  aud: r,
                                  iat: s,
                                  exp: s + n,
                                }),
                              }).header
                            ),
                            Xt(p.payload),
                          ].join(X),
                          ee
                        )),
                        (f = F.Xx(i.secretKey, u)),
                        e.abrupt(
                          "return",
                          $t({ header: o, payload: c, signature: f })
                        )
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
                var p;
              }, e);
            })
          )),
          rr.apply(this, arguments)
        );
      }
      r(6584);
      var nr = r(53642),
        ir = r(52497),
        sr = r(24888),
        or = r(52029);
      function ar() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function cr(e, t) {
        t ||
          (t = e.reduce(function (e, t) {
            return e + t.length;
          }, 0));
        var r,
          n = ar(t),
          i = 0,
          s = (0, m.Z)(e);
        try {
          for (s.s(); !(r = s.n()).done; ) {
            var o = r.value;
            n.set(o, i), (i += o.length);
          }
        } catch (a) {
          s.e(a);
        } finally {
          s.f();
        }
        return n;
      }
      function ur(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      var fr = ur(
          "utf8",
          "u",
          function (e) {
            return "u" + new TextDecoder("utf8").decode(e);
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1));
          }
        ),
        lr = ur(
          "ascii",
          "a",
          function (e) {
            for (var t = "a", r = 0; r < e.length; r++)
              t += String.fromCharCode(e[r]);
            return t;
          },
          function (e) {
            for (
              var t = ar((e = e.substring(1)).length), r = 0;
              r < e.length;
              r++
            )
              t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        pr = (0, P.Z)(
          {
            utf8: fr,
            "utf-8": fr,
            hex: Kt.base16,
            latin1: lr,
            ascii: lr,
            binary: lr,
          },
          Kt
        );
      function hr(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          r = pr[t];
        if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode("".concat(r.prefix).concat(e))
          : globalThis.Buffer.from(e, "utf8");
      }
      function dr(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          r = pr[t];
        if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8");
      }
      var vr = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, s = t.length; i < s; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        gr = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        yr = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        mr = function (e, t, r, n) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = n),
            (this.type = "bot-device");
        },
        br = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        wr = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        _r =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        Er = 3,
        xr = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        kr = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function Sr(e) {
        return e
          ? Ir(e)
          : "undefined" === typeof document &&
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          ? new wr()
          : "undefined" !== typeof navigator
          ? Ir(navigator.userAgent)
          : "undefined" !== typeof process && process.version
          ? new yr(process.version.slice(1))
          : null;
      }
      function Zr(e) {
        return (
          "" !== e &&
          xr.reduce(function (t, r) {
            var n = r[0],
              i = r[1];
            if (t) return t;
            var s = i.exec(e);
            return !!s && [n, s];
          }, !1)
        );
      }
      function Ir(e) {
        var t = Zr(e);
        if (!t) return null;
        var r = t[0],
          n = t[1];
        if ("searchbot" === r) return new br();
        var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
        i
          ? i.length < Er &&
            (i = vr(
              vr([], i, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(Er - i.length),
              !0
            ))
          : (i = []);
        var s = i.join("."),
          o = (function (e) {
            for (var t = 0, r = kr.length; t < r; t++) {
              var n = kr[t],
                i = n[0];
              if (n[1].exec(e)) return i;
            }
            return null;
          })(e),
          a = _r.exec(e);
        return a && a[1] ? new mr(r, s, o, a[1]) : new gr(r, s, o);
      }
      var Or = r(29808),
        Nr = (r(39547), r(49485)),
        Pr =
          (r(2023),
          {
            waku: {
              publish: "waku_publish",
              batchPublish: "waku_batchPublish",
              subscribe: "waku_subscribe",
              batchSubscribe: "waku_batchSubscribe",
              subscription: "waku_subscription",
              unsubscribe: "waku_unsubscribe",
              batchUnsubscribe: "waku_batchUnsubscribe",
            },
            irn: {
              publish: "irn_publish",
              batchPublish: "irn_batchPublish",
              subscribe: "irn_subscribe",
              batchSubscribe: "irn_batchSubscribe",
              subscription: "irn_subscription",
              unsubscribe: "irn_unsubscribe",
              batchUnsubscribe: "irn_batchUnsubscribe",
            },
            iridium: {
              publish: "iridium_publish",
              batchPublish: "iridium_batchPublish",
              subscribe: "iridium_subscribe",
              batchSubscribe: "iridium_batchSubscribe",
              subscription: "iridium_subscription",
              unsubscribe: "iridium_unsubscribe",
              batchUnsubscribe: "iridium_batchUnsubscribe",
            },
          });
      var Ar = "base10",
        Rr = "base16",
        Ur = "base64pad",
        Tr = "utf8",
        Cr = 0,
        jr = 1,
        Lr = 0,
        Dr = 1,
        Mr = 12,
        zr = 32;
      function qr() {
        return dr((0, W.randomBytes)(zr), Rr);
      }
      function Hr(e) {
        return dr((0, sr.vp)(hr(e, Rr)), Rr);
      }
      function Vr(e) {
        return dr((0, sr.vp)(hr(e, Tr)), Rr);
      }
      function Kr(e) {
        return Number(dr(e, Ar));
      }
      function Br(e) {
        var t = (function (e) {
          return hr("".concat(e), Ar);
        })(typeof e.type < "u" ? e.type : Cr);
        if (Kr(t) === jr && typeof e.senderPublicKey > "u")
          throw new Error("Missing sender public key for type 1 envelope");
        var r =
            typeof e.senderPublicKey < "u" ? hr(e.senderPublicKey, Rr) : void 0,
          n = typeof e.iv < "u" ? hr(e.iv, Rr) : (0, W.randomBytes)(Mr);
        return (function (e) {
          if (Kr(e.type) === jr) {
            if (typeof e.senderPublicKey > "u")
              throw new Error("Missing sender public key for type 1 envelope");
            return dr(cr([e.type, e.senderPublicKey, e.iv, e.sealed]), Ur);
          }
          return dr(cr([e.type, e.iv, e.sealed]), Ur);
        })({
          type: t,
          sealed: new nr.OK(hr(e.symKey, Rr)).seal(n, hr(e.message, Tr)),
          iv: n,
          senderPublicKey: r,
        });
      }
      function Fr(e) {
        var t = new nr.OK(hr(e.symKey, Rr)),
          r = Wr(e.encoded),
          n = r.sealed,
          i = r.iv,
          s = t.open(i, n);
        if (null === s) throw new Error("Failed to decrypt");
        return dr(s, Tr);
      }
      function Wr(e) {
        var t = hr(e, Ur),
          r = t.slice(Lr, Dr),
          n = Dr;
        if (Kr(r) === jr) {
          var i = n + zr,
            s = i + Mr,
            o = t.slice(n, i),
            a = t.slice(i, s);
          return { type: r, sealed: t.slice(s), iv: a, senderPublicKey: o };
        }
        var c = n + Mr,
          u = t.slice(n, c);
        return { type: r, sealed: t.slice(c), iv: u };
      }
      function Gr(e, t) {
        var r = Wr(e);
        return Yr({
          type: Kr(r.type),
          senderPublicKey:
            typeof r.senderPublicKey < "u" ? dr(r.senderPublicKey, Rr) : void 0,
          receiverPublicKey:
            null === t || void 0 === t ? void 0 : t.receiverPublicKey,
        });
      }
      function Yr(e) {
        var t = (null === e || void 0 === e ? void 0 : e.type) || Cr;
        if (t === jr) {
          if (
            typeof (null === e || void 0 === e ? void 0 : e.senderPublicKey) >
            "u"
          )
            throw new Error("missing sender public key");
          if (
            typeof (null === e || void 0 === e ? void 0 : e.receiverPublicKey) >
            "u"
          )
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey:
            null === e || void 0 === e ? void 0 : e.senderPublicKey,
          receiverPublicKey:
            null === e || void 0 === e ? void 0 : e.receiverPublicKey,
        };
      }
      function Jr(e) {
        return (
          e.type === jr &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var Xr = Object.defineProperty,
        Qr = Object.getOwnPropertySymbols,
        $r = Object.prototype.hasOwnProperty,
        en = Object.prototype.propertyIsEnumerable,
        tn = function (e, t, r) {
          return t in e
            ? Xr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        rn = function (e, t) {
          for (var r in t || (t = {})) $r.call(t, r) && tn(e, r, t[r]);
          if (Qr) {
            var n,
              i = (0, m.Z)(Qr(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                en.call(t, r) && tn(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        nn = "ReactNative",
        sn = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        },
        on = "js";
      function an() {
        return (
          typeof process < "u" &&
          typeof process.versions < "u" &&
          typeof process.versions.node < "u"
        );
      }
      function cn() {
        return !(0, Or.getDocument)() &&
          (0, Or.getNavigator)() &&
          navigator.product === nn
          ? sn.reactNative
          : an()
          ? sn.node
          : !an() && (0, Or.getNavigator)()
          ? sn.browser
          : sn.unknown;
      }
      function un(e, t, r) {
        var n = (function () {
            var e = Sr();
            if (null === e) return "unknown";
            var t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          i = (function () {
            var e,
              t = cn();
            return t === sn.browser
              ? [
                  t,
                  (null == (e = (0, Or.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [on, r].join("-"), n, i].join("/");
      }
      function fn(e) {
        var t = e.protocol,
          r = e.version,
          n = e.relayUrl,
          i = e.sdkVersion,
          s = e.auth,
          o = e.projectId,
          a = n.split("?"),
          c = { auth: s, ua: un(t, r, i), projectId: o },
          u = (function (e, t) {
            var r = Nr.parse(e);
            return (r = rn(rn({}, r), t)), Nr.stringify(r);
          })(a[1] || "", c);
        return a[0] + "?" + u;
      }
      function ln(e) {
        return Object.fromEntries(e.entries());
      }
      function pn(e) {
        return new Map(Object.entries(e));
      }
      function hn(e, t) {
        return (0, G.fromMiliseconds)(
          (t || Date.now()) + (0, G.toMiliseconds)(e)
        );
      }
      function dn(e) {
        return (0, G.fromMiliseconds)(Date.now()) >= (0, G.toMiliseconds)(e);
      }
      function vn(e) {
        var t,
          r,
          n,
          i = (0, G.toMiliseconds)(e || G.FIVE_MINUTES);
        return {
          resolve: function (e) {
            n && t && (clearTimeout(n), t(e));
          },
          reject: function (e) {
            n && r && (clearTimeout(n), r(e));
          },
          done: function () {
            return new Promise(function (e, s) {
              (n = setTimeout(s, i)), (t = e), (r = s);
            });
          },
        };
      }
      function gn(e, t) {
        return new Promise(
          (function () {
            var r = (0, w.Z)(
              (0, b.Z)().mark(function r(n, i) {
                var s, o;
                return (0, b.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (s = setTimeout(function () {
                            return i();
                          }, t)),
                          (r.next = 3),
                          e
                        );
                      case 3:
                        (o = r.sent), clearTimeout(s), n(o);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })()
        );
      }
      function yn(e, t) {
        if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic'
            );
          return "topic:".concat(t);
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id'
            );
          return "id:".concat(t);
        }
        throw new Error("Unknown expirer target type: ".concat(e));
      }
      function mn(e) {
        var t = e.split(":"),
          r = (0, y.Z)(t, 2),
          n = r[0],
          i = r[1],
          s = { id: void 0, topic: void 0 };
        if ("topic" === n && "string" == typeof i) s.topic = i;
        else {
          if ("id" !== n || !Number.isInteger(Number(i)))
            throw new Error(
              "Invalid target, expected id:number or topic:string, got "
                .concat(n, ":")
                .concat(i)
            );
          s.id = Number(i);
        }
        return s;
      }
      function bn(e, t) {
        return "".concat(e).concat(t ? ":".concat(t) : "");
      }
      var wn = "irn";
      function _n(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.relay) || { protocol: wn }
        );
      }
      function En(e) {
        var t = Pr[e];
        if (typeof t > "u")
          throw new Error("Relay Protocol not supported: ".concat(e));
        return t;
      }
      var xn = Object.defineProperty,
        kn = Object.getOwnPropertySymbols,
        Sn = Object.prototype.hasOwnProperty,
        Zn = Object.prototype.propertyIsEnumerable,
        In = function (e, t, r) {
          return t in e
            ? xn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        On = function (e, t) {
          for (var r in t || (t = {})) Sn.call(t, r) && In(e, r, t[r]);
          if (kn) {
            var n,
              i = (0, m.Z)(kn(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                Zn.call(t, r) && In(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        };
      function Nn(e) {
        var t = {},
          r =
            "relay" +
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "-");
        return (
          Object.keys(e).forEach(function (n) {
            if (n.startsWith(r)) {
              var i = n.replace(r, ""),
                s = e[n];
              t[i] = s;
            }
          }),
          t
        );
      }
      function Pn(e) {
        var t = e.indexOf(":"),
          r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          n = e.substring(0, t),
          i = e.substring(t + 1, r).split("@"),
          s = typeof r < "u" ? e.substring(r) : "",
          o = Nr.parse(s);
        return {
          protocol: n,
          topic: i[0],
          version: parseInt(i[1], 10),
          symKey: o.symKey,
          relay: Nn(o),
        };
      }
      function An(e) {
        return (
          ""
            .concat(e.protocol, ":")
            .concat(e.topic, "@")
            .concat(e.version, "?") +
          Nr.stringify(
            On(
              { symKey: e.symKey },
              (function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "-",
                  r = {};
                return (
                  Object.keys(e).forEach(function (n) {
                    var i = "relay" + t + n;
                    e[n] && (r[i] = e[n]);
                  }),
                  r
                );
              })(e.relay)
            )
          )
        );
      }
      var Rn = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        Un = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function Tn(e, t) {
        var r = Un[e],
          n = r.message,
          i = r.code;
        return { message: t ? "".concat(n, " ").concat(t) : n, code: i };
      }
      function Cn(e, t) {
        var r = Rn[e],
          n = r.message,
          i = r.code;
        return { message: t ? "".concat(n, " ").concat(t) : n, code: i };
      }
      function jn(e) {
        return typeof e > "u";
      }
      function Ln(e, t) {
        return (
          !(!t || !jn(e)) || ("string" == typeof e && Boolean(e.trim().length))
        );
      }
      function Dn(e) {
        var t;
        return null == (t = null === e || void 0 === e ? void 0 : e.proposer)
          ? void 0
          : t.publicKey;
      }
      function Mn(e) {
        return null === e || void 0 === e ? void 0 : e.topic;
      }
      function zn(e) {
        return typeof e < "u" && null !== typeof e;
      }
      var qn = r(42829),
        Hn = r(28477),
        Vn = function () {
          return "undefined" !== typeof window;
        },
        Kn =
          "undefined" !== typeof r.g && "undefined" !== typeof r.g.WebSocket
            ? r.g.WebSocket
            : "undefined" !== typeof window &&
              "undefined" !== typeof window.WebSocket
            ? window.WebSocket
            : r(45559),
        Bn = (function () {
          function e(t) {
            if (
              ((0, _.Z)(this, e),
              (this.url = t),
              (this.events = new A.EventEmitter()),
              (this.registering = !1),
              !(0, Hn.isWsUrl)(t))
            )
              throw new Error(
                "Provided URL is not compatible with WebSocket connection: ".concat(
                  t
                )
              );
            this.url = t;
          }
          return (
            (0, E.Z)(e, [
              {
                key: "connected",
                get: function () {
                  return "undefined" !== typeof this.socket;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.registering;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  this.events.on(e, t);
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  this.events.once(e, t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this.events.off(e, t);
                },
              },
              {
                key: "removeListener",
                value: function (e, t) {
                  this.events.removeListener(e, t);
                },
              },
              {
                key: "open",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t,
                        r = arguments;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    r.length > 0 && void 0 !== r[0]
                                      ? r[0]
                                      : this.url),
                                  (e.next = 3),
                                  this.register(t)
                                );
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
                key: "close",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t = this;
                      return (0, b.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, r) {
                                  "undefined" !== typeof t.socket
                                    ? ((t.socket.onclose = function () {
                                        t.onClose(), e();
                                      }),
                                      t.socket.close())
                                    : r(new Error("Connection already closed"));
                                })
                              );
                            case 1:
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
                key: "send",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("undefined" !== typeof this.socket) {
                                  e.next = 4;
                                  break;
                                }
                                return (e.next = 3), this.register();
                              case 3:
                                this.socket = e.sent;
                              case 4:
                                try {
                                  this.socket.send((0, B.u)(t));
                                } catch (r) {
                                  this.onError(t.id, r);
                                }
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
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "register",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.url;
                  if (!(0, Hn.isWsUrl)(t))
                    throw new Error(
                      "Provided URL is not compatible with WebSocket connection: ".concat(
                        t
                      )
                    );
                  if (this.registering) {
                    var r = this.events.getMaxListeners();
                    return (
                      (this.events.listenerCount("register_error") >= r ||
                        this.events.listenerCount("open") >= r) &&
                        this.events.setMaxListeners(r + 1),
                      new Promise(function (t, r) {
                        e.events.once("register_error", function (t) {
                          e.resetMaxListeners(), r(t);
                        }),
                          e.events.once("open", function () {
                            if (
                              (e.resetMaxListeners(),
                              "undefined" === typeof e.socket)
                            )
                              return r(
                                new Error(
                                  "WebSocket connection is missing or invalid"
                                )
                              );
                            t(e.socket);
                          });
                      })
                    );
                  }
                  return (
                    (this.url = t),
                    (this.registering = !0),
                    new Promise(function (r, n) {
                      var i = (0, Hn.isReactNative)()
                          ? void 0
                          : { rejectUnauthorized: !(0, Hn.isLocalhostUrl)(t) },
                        s = new Kn(t, [], i);
                      Vn()
                        ? (s.onerror = function (t) {
                            var r = t;
                            n(e.emitError(r.error));
                          })
                        : s.on("error", function (t) {
                            n(e.emitError(t));
                          }),
                        (s.onopen = function () {
                          e.onOpen(s), r(s);
                        });
                    })
                  );
                },
              },
              {
                key: "onOpen",
                value: function (e) {
                  var t = this;
                  (e.onmessage = function (e) {
                    return t.onPayload(e);
                  }),
                    (e.onclose = function () {
                      return t.onClose();
                    }),
                    (this.socket = e),
                    (this.registering = !1),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.socket = void 0),
                    (this.registering = !1),
                    this.events.emit("close");
                },
              },
              {
                key: "onPayload",
                value: function (e) {
                  if ("undefined" !== typeof e.data) {
                    var t =
                      "string" === typeof e.data ? (0, B.D)(e.data) : e.data;
                    this.events.emit("payload", t);
                  }
                },
              },
              {
                key: "onError",
                value: function (e, t) {
                  var r = this.parseError(t),
                    n = r.message || r.toString(),
                    i = (0, Hn.formatJsonRpcError)(e, n);
                  this.events.emit("payload", i);
                },
              },
              {
                key: "parseError",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.url;
                  return (0, Hn.parseConnectionError)(e, t, "WS");
                },
              },
              {
                key: "resetMaxListeners",
                value: function () {
                  this.events.getMaxListeners() > 10 &&
                    this.events.setMaxListeners(10);
                },
              },
              {
                key: "emitError",
                value: function (e) {
                  var t = this.parseError(
                    new Error(
                      (null === e || void 0 === e ? void 0 : e.message) ||
                        "WebSocket connection failed for URL: ".concat(this.url)
                    )
                  );
                  return this.events.emit("register_error", t), t;
                },
              },
            ]),
            e
          );
        })(),
        Fn = Bn,
        Wn = r(32467),
        Gn = r.n(Wn);
      var Yn = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
            r[n] = 255;
          for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            f = Math.log(256) / Math.log(a);
          function l(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var n = 0, i = 0; e[t] === c; ) n++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var f = r[e.charCodeAt(t)];
                if (255 === f) return;
                for (
                  var l = 0, p = s - 1;
                  (0 !== f || l < i) && -1 !== p;
                  p--, l++
                )
                  (f += (a * o[p]) >>> 0),
                    (o[p] = f % 256 >>> 0),
                    (f = (f / 256) >>> 0);
                if (0 !== f) throw new Error("Non-zero carry");
                (i = l), t++;
              }
              if (" " !== e[t]) {
                for (var h = s - i; h !== s && 0 === o[h]; ) h++;
                for (var d = new Uint8Array(n + (s - h)), v = n; h !== s; )
                  d[v++] = o[h++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, n = 0, i = 0, s = t.length;
                i !== s && 0 === t[i];

              )
                i++, r++;
              for (
                var o = ((s - i) * f + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var l = t[i], p = 0, h = o - 1;
                  (0 !== l || p < n) && -1 !== h;
                  h--, p++
                )
                  (l += (256 * u[h]) >>> 0),
                    (u[h] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (n = p), i++;
              }
              for (var d = o - n; d !== o && 0 === u[d]; ) d++;
              for (var v = c.repeat(r); d < o; ++d) v += e.charAt(u[d]);
              return v;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var r = l(e);
              if (r) return r;
              throw new Error("Non-".concat(t, " character"));
            },
          };
        },
        Jn = Yn,
        Xn = function (e) {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw new Error("Unknown type, must be binary type");
        },
        Qn = (function () {
          function e(t, r, n) {
            (0, _.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              (this.baseEncode = n);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  if (e instanceof Uint8Array)
                    return "".concat(this.prefix).concat(this.baseEncode(e));
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        $n = (function () {
          function e(t, r, n) {
            if (
              ((0, _.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              void 0 === r.codePointAt(0))
            )
              throw new Error("Invalid prefix character");
            (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "decode",
                value: function (e) {
                  if ("string" == typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                      throw Error(
                        "Unable to decode multibase string "
                          .concat(JSON.stringify(e), ", ")
                          .concat(
                            this.name,
                            " decoder only supports inputs prefixed with "
                          )
                          .concat(this.prefix)
                      );
                    return this.baseDecode(e.slice(this.prefix.length));
                  }
                  throw Error("Can only multibase decode strings");
                },
              },
              {
                key: "or",
                value: function (e) {
                  return ti(this, e);
                },
              },
            ]),
            e
          );
        })(),
        ei = (function () {
          function e(t) {
            (0, _.Z)(this, e), (this.decoders = t);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "or",
                value: function (e) {
                  return ti(this, e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  var t = e[0],
                    r = this.decoders[t];
                  if (r) return r.decode(e);
                  throw RangeError(
                    "Unable to decode multibase string "
                      .concat(JSON.stringify(e), ", only inputs prefixed with ")
                      .concat(Object.keys(this.decoders), " are supported")
                  );
                },
              },
            ]),
            e
          );
        })(),
        ti = function (e, t) {
          return new ei(
            (0, P.Z)(
              (0, P.Z)({}, e.decoders || (0, N.Z)({}, e.prefix, e)),
              t.decoders || (0, N.Z)({}, t.prefix, t)
            )
          );
        },
        ri = (function () {
          function e(t, r, n, i) {
            (0, _.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              (this.baseEncode = n),
              (this.baseDecode = i),
              (this.encoder = new Qn(t, r, n)),
              (this.decoder = new $n(t, r, i));
          }
          return (
            (0, E.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  return this.encoder.encode(e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  return this.decoder.decode(e);
                },
              },
            ]),
            e
          );
        })(),
        ni = function (e) {
          var t = e.name,
            r = e.prefix,
            n = e.encode,
            i = e.decode;
          return new ri(t, r, n, i);
        },
        ii = function (e) {
          var t = e.prefix,
            r = e.name,
            n = e.alphabet,
            i = Jn(n, r),
            s = i.encode,
            o = i.decode;
          return ni({
            prefix: t,
            name: r,
            encode: s,
            decode: function (e) {
              return Xn(o(e));
            },
          });
        },
        si = function (e) {
          var t = e.name,
            r = e.prefix,
            n = e.bitsPerChar,
            i = e.alphabet;
          return ni({
            prefix: r,
            name: t,
            encode: function (e) {
              return (function (e, t, r) {
                for (
                  var n = "=" === t[t.length - 1],
                    i = (1 << r) - 1,
                    s = "",
                    o = 0,
                    a = 0,
                    c = 0;
                  c < e.length;
                  ++c
                )
                  for (a = (a << 8) | e[c], o += 8; o > r; )
                    s += t[i & (a >> (o -= r))];
                if ((o && (s += t[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, i, n);
            },
            decode: function (e) {
              return (function (e, t, r, n) {
                for (var i = {}, s = 0; s < t.length; ++s) i[t[s]] = s;
                for (var o = e.length; "=" === e[o - 1]; ) --o;
                for (
                  var a = new Uint8Array(((o * r) / 8) | 0),
                    c = 0,
                    u = 0,
                    f = 0,
                    l = 0;
                  l < o;
                  ++l
                ) {
                  var p = i[e[l]];
                  if (void 0 === p)
                    throw new SyntaxError("Non-".concat(n, " character"));
                  (u = (u << r) | p),
                    (c += r) >= 8 && ((c -= 8), (a[f++] = 255 & (u >> c)));
                }
                if (c >= r || 255 & (u << (8 - c)))
                  throw new SyntaxError("Unexpected end of data");
                return a;
              })(e, i, n, t);
            },
          });
        },
        oi = ni({
          prefix: "\0",
          name: "identity",
          encode: function (e) {
            return (function (e) {
              return new TextDecoder().decode(e);
            })(e);
          },
          decode: function (e) {
            return (function (e) {
              return new TextEncoder().encode(e);
            })(e);
          },
        }),
        ai = Object.freeze({ __proto__: null, identity: oi }),
        ci = si({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        ui = Object.freeze({ __proto__: null, base2: ci }),
        fi = si({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        li = Object.freeze({ __proto__: null, base8: fi }),
        pi = ii({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        hi = Object.freeze({ __proto__: null, base10: pi }),
        di = si({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        vi = si({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        gi = Object.freeze({ __proto__: null, base16: di, base16upper: vi }),
        yi = si({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        mi = si({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        bi = si({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        wi = si({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        _i = si({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Ei = si({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        xi = si({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        ki = si({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Si = si({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        Zi = Object.freeze({
          __proto__: null,
          base32: yi,
          base32upper: mi,
          base32pad: bi,
          base32padupper: wi,
          base32hex: _i,
          base32hexupper: Ei,
          base32hexpad: xi,
          base32hexpadupper: ki,
          base32z: Si,
        }),
        Ii = ii({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Oi = ii({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        Ni = Object.freeze({ __proto__: null, base36: Ii, base36upper: Oi }),
        Pi = ii({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Ai = ii({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        Ri = Object.freeze({
          __proto__: null,
          base58btc: Pi,
          base58flickr: Ai,
        }),
        Ui = si({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Ti = si({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Ci = si({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        ji = si({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        Li = Object.freeze({
          __proto__: null,
          base64: Ui,
          base64pad: Ti,
          base64url: Ci,
          base64urlpad: ji,
        }),
        Di = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        Mi = Di.reduce(function (e, t, r) {
          return (e[r] = t), e;
        }, []),
        zi = Di.reduce(function (e, t, r) {
          return (e[t.codePointAt(0)] = r), e;
        }, []);
      var qi = ni({
          prefix: "\ud83d\ude80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce(function (e, t) {
              return (e += Mi[t]);
            }, "");
          },
          decode: function (e) {
            var t,
              r = [],
              n = (0, m.Z)(e);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var i = t.value,
                  s = zi[i.codePointAt(0)];
                if (void 0 === s)
                  throw new Error("Non-base256emoji character: ".concat(i));
                r.push(s);
              }
            } catch (o) {
              n.e(o);
            } finally {
              n.f();
            }
            return new Uint8Array(r);
          },
        }),
        Hi = Object.freeze({ __proto__: null, base256emoji: qi }),
        Vi = function e(t, r, n) {
          r = r || [];
          for (var i = (n = n || 0); t >= Fi; )
            (r[n++] = (255 & t) | Ki), (t /= 128);
          for (; t & Bi; ) (r[n++] = (255 & t) | Ki), (t >>>= 7);
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r;
        },
        Ki = 128,
        Bi = -128,
        Fi = Math.pow(2, 31);
      var Wi = function e(t, r) {
          var n,
            i = 0,
            s = 0,
            o = (r = r || 0),
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (n = t[o++]),
              (i += s < 28 ? (n & Yi) << s : (n & Yi) * Math.pow(2, s)),
              (s += 7);
          } while (n >= Gi);
          return (e.bytes = o - r), i;
        },
        Gi = 128,
        Yi = 127;
      var Ji = Math.pow(2, 7),
        Xi = Math.pow(2, 14),
        Qi = Math.pow(2, 21),
        $i = Math.pow(2, 28),
        es = Math.pow(2, 35),
        ts = Math.pow(2, 42),
        rs = Math.pow(2, 49),
        ns = Math.pow(2, 56),
        is = Math.pow(2, 63),
        ss = {
          encode: Vi,
          decode: Wi,
          encodingLength: function (e) {
            return e < Ji
              ? 1
              : e < Xi
              ? 2
              : e < Qi
              ? 3
              : e < $i
              ? 4
              : e < es
              ? 5
              : e < ts
              ? 6
              : e < rs
              ? 7
              : e < ns
              ? 8
              : e < is
              ? 9
              : 10;
          },
        },
        os = ss,
        as = function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return os.encode(e, t, r), t;
        },
        cs = function (e) {
          return os.encodingLength(e);
        },
        us = function (e, t) {
          var r = t.byteLength,
            n = cs(e),
            i = n + cs(r),
            s = new Uint8Array(i + r);
          return as(e, s, 0), as(r, s, n), s.set(t, i), new fs(e, r, t, s);
        },
        fs = (0, E.Z)(function e(t, r, n, i) {
          (0, _.Z)(this, e),
            (this.code = t),
            (this.size = r),
            (this.digest = n),
            (this.bytes = i);
        }),
        ls = function (e) {
          var t = e.name,
            r = e.code,
            n = e.encode;
          return new ps(t, r, n);
        },
        ps = (function () {
          function e(t, r, n) {
            (0, _.Z)(this, e),
              (this.name = t),
              (this.code = r),
              (this.encode = n);
          }
          return (
            (0, E.Z)(e, [
              {
                key: "digest",
                value: function (e) {
                  var t = this;
                  if (e instanceof Uint8Array) {
                    var r = this.encode(e);
                    return r instanceof Uint8Array
                      ? us(this.code, r)
                      : r.then(function (e) {
                          return us(t.code, e);
                        });
                  }
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        hs = function (e) {
          return (function () {
            var t = (0, w.Z)(
              (0, b.Z)().mark(function t(r) {
                return (0, b.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.t0 = Uint8Array),
                          (t.next = 3),
                          crypto.subtle.digest(e, r)
                        );
                      case 3:
                        return (
                          (t.t1 = t.sent), t.abrupt("return", new t.t0(t.t1))
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ds = ls({ name: "sha2-256", code: 18, encode: hs("SHA-256") }),
        vs = ls({ name: "sha2-512", code: 19, encode: hs("SHA-512") }),
        gs = Object.freeze({ __proto__: null, sha256: ds, sha512: vs }),
        ys = Xn,
        ms = {
          code: 0,
          name: "identity",
          encode: ys,
          digest: function (e) {
            return us(0, ys(e));
          },
        },
        bs = Object.freeze({ __proto__: null, identity: ms });
      new TextEncoder(), new TextDecoder();
      var ws = (0, P.Z)(
        (0, P.Z)(
          (0, P.Z)(
            (0, P.Z)(
              (0, P.Z)(
                (0, P.Z)(
                  (0, P.Z)((0, P.Z)((0, P.Z)((0, P.Z)({}, ai), ui), li), hi),
                  gi
                ),
                Zi
              ),
              Ni
            ),
            Ri
          ),
          Li
        ),
        Hi
      );
      function _s(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      (0, P.Z)((0, P.Z)({}, gs), bs);
      var Es = _s(
          "utf8",
          "u",
          function (e) {
            return "u" + new TextDecoder("utf8").decode(e);
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1));
          }
        ),
        xs = _s(
          "ascii",
          "a",
          function (e) {
            for (var t = "a", r = 0; r < e.length; r++)
              t += String.fromCharCode(e[r]);
            return t;
          },
          function (e) {
            for (
              var t = (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return null != globalThis.Buffer &&
                    null != globalThis.Buffer.allocUnsafe
                    ? globalThis.Buffer.allocUnsafe(e)
                    : new Uint8Array(e);
                })((e = e.substring(1)).length),
                r = 0;
              r < e.length;
              r++
            )
              t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        ks = (0, P.Z)(
          {
            utf8: Es,
            "utf-8": Es,
            hex: ws.base16,
            latin1: xs,
            ascii: xs,
            binary: xs,
          },
          ws
        );
      function Ss(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          r = ks[t];
        if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode("".concat(r.prefix).concat(e))
          : globalThis.Buffer.from(e, "utf8");
      }
      var Zs = "wc",
        Is = 2,
        Os = "core",
        Ns = "".concat(Zs, "@", 2, ":").concat(Os, ":"),
        Ps = { name: Os, logger: "error" },
        As = { database: ":memory:" },
        Rs = "crypto",
        Us = "client_ed25519_seed",
        Ts = G.ONE_DAY,
        Cs = "keychain",
        js = "0.3",
        Ls = "messages",
        Ds = "0.3",
        Ms = G.SIX_HOURS,
        zs = "publisher",
        qs = "irn",
        Hs = "error",
        Vs = "wss://relay.walletconnect.com",
        Ks = "relayer",
        Bs = {
          message: "relayer_message",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          transport_closed: "relayer_transport_closed",
          publish: "relayer_publish",
        },
        Fs = "payload",
        Ws = "connect",
        Gs = "disconnect",
        Ys = "error",
        Js = G.ONE_SECOND,
        Xs = "0.3",
        Qs = "subscription_created",
        $s = "subscription_deleted",
        eo = "subscription_sync",
        to = "subscription_resubscribed",
        ro = (G.THIRTY_DAYS, "subscription"),
        no = "0.3",
        io = 1e3 * G.FIVE_SECONDS,
        so = "pairing",
        oo = "0.3",
        ao =
          (G.THIRTY_DAYS,
          {
            wc_pairingDelete: {
              req: { ttl: G.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: G.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: G.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: G.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: G.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: G.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        co = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        uo = "history",
        fo = "0.3",
        lo = "expirer",
        po = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        ho = "0.3",
        vo =
          (G.ONE_DAY,
          (function () {
            function e(t, r) {
              var n = this;
              (0, _.Z)(this, e),
                (this.core = t),
                (this.logger = r),
                (this.keychain = new Map()),
                (this.name = Cs),
                (this.version = js),
                (this.initialized = !1),
                (this.storagePrefix = Ns),
                (this.init = (0, w.Z)(
                  (0, b.Z)().mark(function e() {
                    var t;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (n.initialized) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 3), n.getKeyChain();
                          case 3:
                            typeof (t = e.sent) < "u" && (n.keychain = t),
                              (n.initialized = !0);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                (this.has = function (e) {
                  return n.isInitialized(), n.keychain.has(e);
                }),
                (this.set = (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      return (0, b.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.isInitialized(),
                                n.keychain.set(t, r),
                                (e.next = 4),
                                n.persist()
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })()),
                (this.get = function (e) {
                  n.isInitialized();
                  var t = n.keychain.get(e);
                  if (typeof t > "u") {
                    var r = Tn(
                      "NO_MATCHING_KEY",
                      "".concat(n.name, ": ").concat(e)
                    ).message;
                    throw new Error(r);
                  }
                  return t;
                }),
                (this.del = (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.isInitialized(),
                                n.keychain.delete(t),
                                (e.next = 4),
                                n.persist()
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
                })()),
                (this.core = t),
                (this.logger = (0, C.generateChildLogger)(r, this.name));
            }
            return (
              (0, E.Z)(e, [
                {
                  key: "context",
                  get: function () {
                    return (0, C.getLoggerContext)(this.logger);
                  },
                },
                {
                  key: "storageKey",
                  get: function () {
                    return this.storagePrefix + this.version + "//" + this.name;
                  },
                },
                {
                  key: "setKeyChain",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e(t) {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.core.storage.setItem(
                                      this.storageKey,
                                      ln(t)
                                    )
                                  );
                                case 2:
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
                  key: "getKeyChain",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        var t;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.core.storage.getItem(this.storageKey)
                                  );
                                case 2:
                                  return (
                                    (t = e.sent),
                                    e.abrupt(
                                      "return",
                                      typeof t < "u" ? pn(t) : void 0
                                    )
                                  );
                                case 4:
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
                  key: "persist",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.setKeyChain(this.keychain)
                                  );
                                case 2:
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
                  key: "isInitialized",
                  value: function () {
                    if (!this.initialized) {
                      var e = Tn("NOT_INITIALIZED", this.name).message;
                      throw new Error(e);
                    }
                  },
                },
              ]),
              e
            );
          })()),
        go = (function () {
          function e(t, r, n) {
            var i = this;
            (0, _.Z)(this, e),
              (this.core = t),
              (this.logger = r),
              (this.name = Rs),
              (this.initialized = !1),
              (this.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 4), i.keychain.init();
                        case 4:
                          i.initialized = !0;
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.hasKeys = function (e) {
                return i.isInitialized(), i.keychain.has(e);
              }),
              (this.getClientId = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  var t, r;
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i.isInitialized(), (e.next = 3), i.getClientSeed()
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (r = er(t)),
                            e.abrupt("return", Qt(r.publicKey))
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.generateKeyPair = function () {
                i.isInitialized();
                var e = (function () {
                  var e = or.Au();
                  return {
                    privateKey: dr(e.secretKey, Rr),
                    publicKey: dr(e.publicKey, Rr),
                  };
                })();
                return i.setPrivateKey(e.publicKey, e.privateKey);
              }),
              (this.signJWT = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, n, s, o;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(), (e.next = 3), i.getClientSeed()
                            );
                          case 3:
                            return (
                              (r = e.sent),
                              (n = er(r)),
                              (s = qr()),
                              (o = Ts),
                              (e.next = 9),
                              tr(s, t, o, n)
                            );
                          case 9:
                            return e.abrupt("return", e.sent);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.generateSharedKey = function (e, t, r) {
                i.isInitialized();
                var n = (function (e, t) {
                  var r = or.gi(hr(e, Rr), hr(t, Rr));
                  return dr(new ir.t(sr.mE, r).expand(zr), Rr);
                })(i.getPrivateKey(e), t);
                return i.setSymKey(n, r);
              }),
              (this.setSymKey = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var n;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(),
                              (n = r || Hr(t)),
                              (e.next = 4),
                              i.keychain.set(n, t)
                            );
                          case 4:
                            return e.abrupt("return", n);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.deleteKeyPair = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(), (e.next = 3), i.keychain.del(t)
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.deleteSymKey = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(), (e.next = 3), i.keychain.del(t)
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.encode = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, n) {
                    var s, o, a, c, u, f, l;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              (s = Yr(n)),
                              (o = (0, B.u)(r)),
                              !Jr(s))
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (a = s.senderPublicKey),
                              (c = s.receiverPublicKey),
                              (e.next = 6),
                              i.generateSharedKey(a, c)
                            );
                          case 6:
                            t = e.sent;
                          case 7:
                            return (
                              (u = i.getSymKey(t)),
                              (f = s.type),
                              (l = s.senderPublicKey),
                              e.abrupt(
                                "return",
                                Br({
                                  type: f,
                                  symKey: u,
                                  message: o,
                                  senderPublicKey: l,
                                })
                              )
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.decode = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, n) {
                    var s, o, a, c, u;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((i.isInitialized(), !Jr((s = Gr(r, n))))) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (o = s.receiverPublicKey),
                              (a = s.senderPublicKey),
                              (e.next = 6),
                              i.generateSharedKey(o, a)
                            );
                          case 6:
                            t = e.sent;
                          case 7:
                            return (
                              (c = i.getSymKey(t)),
                              (u = Fr({ symKey: c, encoded: r })),
                              e.abrupt("return", (0, B.D)(u))
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.core = t),
              (this.logger = (0, C.generateChildLogger)(r, this.name)),
              (this.keychain = n || new vo(this.core, this.logger));
          }
          return (
            (0, E.Z)(e, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "getPayloadType",
                value: function (e) {
                  return Kr(Wr(e).type);
                },
              },
              {
                key: "setPrivateKey",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.keychain.set(t, r);
                              case 2:
                                return e.abrupt("return", t);
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
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getPrivateKey",
                value: function (e) {
                  return this.keychain.get(e);
                },
              },
              {
                key: "getClientSeed",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = ""),
                                  (e.prev = 1),
                                  (t = this.keychain.get(Us)),
                                  (e.next = 10);
                                break;
                              case 5:
                                return (
                                  (e.prev = 5),
                                  (e.t0 = e.catch(1)),
                                  (t = qr()),
                                  (e.next = 10),
                                  this.keychain.set(Us, t)
                                );
                              case 10:
                                return e.abrupt("return", Ss(t, "base16"));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 5]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getSymKey",
                value: function (e) {
                  return this.keychain.get(e);
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            e
          );
        })(),
        yo = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n)).logger = e),
              (i.core = n),
              (i.messages = new Map()),
              (i.name = Ls),
              (i.version = Ds),
              (i.initialized = !1),
              (i.storagePrefix = Ns),
              (i.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  var t;
                  return (0, b.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (i.initialized) {
                              e.next = 15;
                              break;
                            }
                            return (
                              i.logger.trace("Initialized"),
                              (e.prev = 2),
                              (e.next = 5),
                              i.getRelayerMessages()
                            );
                          case 5:
                            typeof (t = e.sent) < "u" && (i.messages = t),
                              i.logger.debug(
                                "Successfully Restored records for ".concat(
                                  i.name
                                )
                              ),
                              i.logger.trace({
                                type: "method",
                                method: "restore",
                                size: i.messages.size,
                              }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(2)),
                              i.logger.debug(
                                "Failed to Restore records for ".concat(i.name)
                              ),
                              i.logger.error(e.t0);
                          case 12:
                            return (
                              (e.prev = 12), (i.initialized = !0), e.finish(12)
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 9, 12, 15]]
                  );
                })
              )),
              (i.set = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var n, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              (n = Vr(r)),
                              typeof (s = i.messages.get(t)) > "u" && (s = {}),
                              (e.t0 = typeof s[n] < "u"),
                              e.t0)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (s[n] = r),
                              i.messages.set(t, s),
                              (e.next = 10),
                              i.persist()
                            );
                          case 10:
                            return e.abrupt("return", n);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.get = function (e) {
                i.isInitialized();
                var t = i.messages.get(e);
                return typeof t > "u" && (t = {}), t;
              }),
              (i.has = function (e, t) {
                return i.isInitialized(), typeof i.get(e)[Vr(t)] < "u";
              }),
              (i.del = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(),
                              i.messages.delete(t),
                              (e.next = 4),
                              i.persist()
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
              })()),
              (i.logger = (0, C.generateChildLogger)(e, i.name)),
              (i.core = n),
              i
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "storageKey",
                get: function () {
                  return this.storagePrefix + this.version + "//" + this.name;
                },
              },
              {
                key: "setRelayerMessages",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(
                                    this.storageKey,
                                    ln(t)
                                  )
                                );
                              case 2:
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
                key: "getRelayerMessages",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    typeof t < "u" ? pn(t) : void 0
                                  )
                                );
                              case 4:
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
                key: "persist",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setRelayerMessages(this.messages)
                                );
                              case 2:
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
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            r
          );
        })(M),
        mo = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n)).relayer = e),
              (i.logger = n),
              (i.events = new A.EventEmitter()),
              (i.name = zs),
              (i.queue = new Map()),
              (i.publishTimeout = 1e4),
              (i.publish = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, n) {
                    var s, o, a, c, u, f;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                i.logger.debug("Publishing Payload"),
                                i.logger.trace({
                                  type: "method",
                                  method: "publish",
                                  params: { topic: t, message: r, opts: n },
                                }),
                                (e.prev = 1),
                                (s =
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.ttl) || Ms),
                                (o = _n(n)),
                                (a =
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.prompt) || !1),
                                (c =
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.tag) || 0),
                                (u = {
                                  topic: t,
                                  message: r,
                                  opts: { ttl: s, relay: o, prompt: a, tag: c },
                                }),
                                (f = Vr(r)),
                                i.queue.set(f, u),
                                (e.prev = 4),
                                (e.next = 7),
                                gn(
                                  i.rpcPublish(t, r, s, o, a, c),
                                  i.publishTimeout
                                )
                              );
                            case 7:
                              return (e.next = 9), e.sent;
                            case 9:
                              i.relayer.events.emit(Bs.publish, u),
                                (e.next = 16);
                              break;
                            case 12:
                              return (
                                (e.prev = 12),
                                (e.t0 = e.catch(4)),
                                i.logger.debug("Publishing Payload stalled"),
                                i.relayer.events.emit(Bs.connection_stalled),
                                e.abrupt("return")
                              );
                            case 16:
                              i.onPublish(f, u),
                                i.logger.debug(
                                  "Successfully Published Payload"
                                ),
                                i.logger.trace({
                                  type: "method",
                                  method: "publish",
                                  params: { topic: t, message: r, opts: n },
                                }),
                                (e.next = 22);
                              break;
                            case 19:
                              throw (
                                ((e.prev = 19),
                                (e.t1 = e.catch(1)),
                                i.logger.debug("Failed to Publish Payload"),
                                i.logger.error(e.t1),
                                e.t1)
                              );
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [1, 19],
                        [4, 12],
                      ]
                    );
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.on = function (e, t) {
                i.events.on(e, t);
              }),
              (i.once = function (e, t) {
                i.events.once(e, t);
              }),
              (i.off = function (e, t) {
                i.events.off(e, t);
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t);
              }),
              (i.relayer = e),
              (i.logger = (0, C.generateChildLogger)(n, i.name)),
              i.registerEventListeners(),
              i
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "rpcPublish",
                value: function (e, t, r, n, i, s) {
                  var o,
                    a,
                    c,
                    u,
                    f = {
                      method: En(n.protocol).publish,
                      params: {
                        topic: e,
                        message: t,
                        ttl: r,
                        prompt: i,
                        tag: s,
                      },
                    };
                  return (
                    jn(null == (o = f.params) ? void 0 : o.prompt) &&
                      (null == (a = f.params) || delete a.prompt),
                    jn(null == (c = f.params) ? void 0 : c.tag) &&
                      (null == (u = f.params) || delete u.tag),
                    this.logger.debug("Outgoing Relay Payload"),
                    this.logger.trace({
                      type: "message",
                      direction: "outgoing",
                      request: f,
                    }),
                    this.relayer.provider.request(f)
                  );
                },
              },
              {
                key: "onPublish",
                value: function (e, t) {
                  this.queue.delete(e);
                },
              },
              {
                key: "checkQueue",
                value: function () {
                  var e = this;
                  this.queue.forEach(
                    (function () {
                      var t = (0, w.Z)(
                        (0, b.Z)().mark(function t(r) {
                          var n, i, s;
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = r.topic),
                                    (i = r.message),
                                    (s = r.opts),
                                    (t.next = 3),
                                    e.publish(n, i, s)
                                  );
                                case 3:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this;
                  this.relayer.core.heartbeat.on(
                    T.HEARTBEAT_EVENTS.pulse,
                    function () {
                      e.checkQueue();
                    }
                  );
                },
              },
            ]),
            r
          );
        })(z),
        bo = (function () {
          function e() {
            var t = this;
            (0, _.Z)(this, e),
              (this.map = new Map()),
              (this.set = function (e, r) {
                var n = t.get(e);
                t.exists(e, r) || t.map.set(e, [].concat((0, Z.Z)(n), [r]));
              }),
              (this.get = function (e) {
                return t.map.get(e) || [];
              }),
              (this.exists = function (e, r) {
                return t.get(e).includes(r);
              }),
              (this.delete = function (e, r) {
                if (typeof r > "u") t.map.delete(e);
                else if (t.map.has(e)) {
                  var n = t.get(e);
                  if (t.exists(e, r)) {
                    var i = n.filter(function (e) {
                      return e !== r;
                    });
                    i.length ? t.map.set(e, i) : t.map.delete(e);
                  }
                }
              }),
              (this.clear = function () {
                t.map.clear();
              });
          }
          return (
            (0, E.Z)(e, [
              {
                key: "topics",
                get: function () {
                  return Array.from(this.map.keys());
                },
              },
            ]),
            e
          );
        })(),
        wo = Object.defineProperty,
        _o = Object.defineProperties,
        Eo = Object.getOwnPropertyDescriptors,
        xo = Object.getOwnPropertySymbols,
        ko = Object.prototype.hasOwnProperty,
        So = Object.prototype.propertyIsEnumerable,
        Zo = function (e, t, r) {
          return t in e
            ? wo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        Io = function (e, t) {
          for (var r in t || (t = {})) ko.call(t, r) && Zo(e, r, t[r]);
          if (xo) {
            var n,
              i = (0, m.Z)(xo(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                So.call(t, r) && Zo(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        Oo = function (e, t) {
          return _o(e, Eo(t));
        },
        No = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n)).relayer = e),
              (i.logger = n),
              (i.subscriptions = new Map()),
              (i.topicMap = new bo()),
              (i.events = new A.EventEmitter()),
              (i.name = ro),
              (i.version = no),
              (i.pending = new Map()),
              (i.cached = []),
              (i.initialized = !1),
              (i.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
              (i.pendingSubInterval = 20),
              (i.storagePrefix = Ns),
              (i.subscribeTimeout = 1e4),
              (i.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            i.logger.trace("Initialized"),
                            (e.next = 5),
                            i.restart()
                          );
                        case 5:
                          i.registerEventListeners(), i.onEnable();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (i.subscribe = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var n, s, o;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                i.isInitialized(),
                                i.logger.debug("Subscribing Topic"),
                                i.logger.trace({
                                  type: "method",
                                  method: "subscribe",
                                  params: { topic: t, opts: r },
                                }),
                                (e.prev = 1),
                                (n = _n(r)),
                                (s = { topic: t, relay: n }),
                                i.pending.set(t, s),
                                (e.next = 6),
                                i.rpcSubscribe(t, n)
                              );
                            case 6:
                              return (
                                (o = e.sent),
                                e.abrupt(
                                  "return",
                                  (i.onSubscribe(o, s),
                                  i.logger.debug(
                                    "Successfully Subscribed Topic"
                                  ),
                                  i.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: { topic: t, opts: r },
                                  }),
                                  o)
                                )
                              );
                            case 10:
                              throw (
                                ((e.prev = 10),
                                (e.t0 = e.catch(1)),
                                i.logger.debug("Failed to Subscribe Topic"),
                                i.logger.error(e.t0),
                                e.t0)
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.unsubscribe = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              !(
                                typeof (null === r || void 0 === r
                                  ? void 0
                                  : r.id) < "u"
                              ))
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 4), i.unsubscribeById(t, r.id, r);
                          case 4:
                            e.next = 8;
                            break;
                          case 6:
                            return (e.next = 8), i.unsubscribeByTopic(t, r);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.isSubscribed = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!i.topics.includes(t)) {
                              e.next = 4;
                              break;
                            }
                            (e.t0 = !0), (e.next = 7);
                            break;
                          case 4:
                            return (
                              (e.next = 6),
                              new Promise(function (e, r) {
                                var n = new G.Watch();
                                n.start(i.pendingSubscriptionWatchLabel);
                                var s = setInterval(function () {
                                  !i.pending.has(t) &&
                                    i.topics.includes(t) &&
                                    (clearInterval(s),
                                    n.stop(i.pendingSubscriptionWatchLabel),
                                    e(!0)),
                                    n.elapsed(
                                      i.pendingSubscriptionWatchLabel
                                    ) >= io &&
                                      (clearInterval(s),
                                      n.stop(i.pendingSubscriptionWatchLabel),
                                      r(!1));
                                }, i.pendingSubInterval);
                              })
                            );
                          case 6:
                            e.t0 = e.sent;
                          case 7:
                            return e.abrupt("return", e.t0);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.on = function (e, t) {
                i.events.on(e, t);
              }),
              (i.once = function (e, t) {
                i.events.once(e, t);
              }),
              (i.off = function (e, t) {
                i.events.off(e, t);
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t);
              }),
              (i.restart = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), i.restore();
                        case 2:
                          return (e.next = 4), i.reset();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (i.relayer = e),
              (i.logger = (0, C.generateChildLogger)(n, i.name)),
              i
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "storageKey",
                get: function () {
                  return this.storagePrefix + this.version + "//" + this.name;
                },
              },
              {
                key: "length",
                get: function () {
                  return this.subscriptions.size;
                },
              },
              {
                key: "ids",
                get: function () {
                  return Array.from(this.subscriptions.keys());
                },
              },
              {
                key: "values",
                get: function () {
                  return Array.from(this.subscriptions.values());
                },
              },
              {
                key: "topics",
                get: function () {
                  return this.topicMap.topics;
                },
              },
              {
                key: "hasSubscription",
                value: function (e, t) {
                  var r = !1;
                  try {
                    r = this.getSubscription(e).topic === t;
                  } catch (n) {}
                  return r;
                },
              },
              {
                key: "onEnable",
                value: function () {
                  (this.cached = []), (this.initialized = !0);
                },
              },
              {
                key: "onDisable",
                value: function () {
                  (this.cached = this.values),
                    this.subscriptions.clear(),
                    this.topicMap.clear(),
                    (this.initialized = !1);
                },
              },
              {
                key: "unsubscribeByTopic",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      var n,
                        i = this;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.topicMap.get(t)),
                                  (e.next = 3),
                                  Promise.all(
                                    n.map(
                                      (function () {
                                        var e = (0, w.Z)(
                                          (0, b.Z)().mark(function e(n) {
                                            return (0, b.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      i.unsubscribeById(t, n, r)
                                                    );
                                                  case 2:
                                                    return e.abrupt(
                                                      "return",
                                                      e.sent
                                                    );
                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
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
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unsubscribeById",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r, n) {
                      var i, s;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.debug("Unsubscribing Topic"),
                                  this.logger.trace({
                                    type: "method",
                                    method: "unsubscribe",
                                    params: { topic: t, id: r, opts: n },
                                  }),
                                  (e.prev = 1),
                                  (i = _n(n)),
                                  (e.next = 5),
                                  this.rpcUnsubscribe(t, r, i)
                                );
                              case 5:
                                return (
                                  (s = Cn(
                                    "USER_DISCONNECTED",
                                    "".concat(this.name, ", ").concat(t)
                                  )),
                                  (e.next = 8),
                                  this.onUnsubscribe(t, r, s)
                                );
                              case 8:
                                this.logger.debug(
                                  "Successfully Unsubscribed Topic"
                                ),
                                  this.logger.trace({
                                    type: "method",
                                    method: "unsubscribe",
                                    params: { topic: t, id: r, opts: n },
                                  }),
                                  (e.next = 15);
                                break;
                              case 12:
                                throw (
                                  ((e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  this.logger.debug(
                                    "Failed to Unsubscribe Topic"
                                  ),
                                  this.logger.error(e.t0),
                                  e.t0)
                                );
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
                  return function (t, r, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "rpcSubscribe",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      var n, i;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    method: En(r.protocol).subscribe,
                                    params: { topic: t },
                                  }),
                                  this.logger.debug("Outgoing Relay Payload"),
                                  this.logger.trace({
                                    type: "payload",
                                    direction: "outgoing",
                                    request: n,
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  gn(
                                    this.relayer.provider.request(n),
                                    this.subscribeTimeout
                                  )
                                );
                              case 5:
                                return (e.next = 7), e.sent;
                              case 7:
                                (i = e.sent), (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(2)),
                                  this.logger.debug(
                                    "Outgoing Relay Payload stalled"
                                  ),
                                  this.relayer.events.emit(
                                    Bs.connection_stalled
                                  );
                              case 13:
                                return e.abrupt("return", i);
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 10]]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "rpcUnsubscribe",
                value: function (e, t, r) {
                  var n = {
                    method: En(r.protocol).unsubscribe,
                    params: { topic: e, id: t },
                  };
                  return (
                    this.logger.debug("Outgoing Relay Payload"),
                    this.logger.trace({
                      type: "payload",
                      direction: "outgoing",
                      request: n,
                    }),
                    this.relayer.provider.request(n)
                  );
                },
              },
              {
                key: "onSubscribe",
                value: function (e, t) {
                  this.setSubscription(e, Oo(Io({}, t), { id: e })),
                    this.pending.delete(t.topic);
                },
              },
              {
                key: "onResubscribe",
                value: function (e, t) {
                  this.addSubscription(e, Oo(Io({}, t), { id: e })),
                    this.pending.delete(t.topic);
                },
              },
              {
                key: "onUnsubscribe",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r, n) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.events.removeAllListeners(r),
                                  this.hasSubscription(r, t) &&
                                    this.deleteSubscription(r, n),
                                  (e.next = 4),
                                  this.relayer.messages.del(t)
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, r, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setRelayerSubscriptions",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.relayer.core.storage.setItem(
                                    this.storageKey,
                                    t
                                  )
                                );
                              case 2:
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
                key: "getRelayerSubscriptions",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.relayer.core.storage.getItem(
                                    this.storageKey
                                  )
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
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
                key: "setSubscription",
                value: function (e, t) {
                  this.subscriptions.has(e) ||
                    (this.logger.debug("Setting subscription"),
                    this.logger.trace({
                      type: "method",
                      method: "setSubscription",
                      id: e,
                      subscription: t,
                    }),
                    this.addSubscription(e, t));
                },
              },
              {
                key: "addSubscription",
                value: function (e, t) {
                  this.subscriptions.set(e, Io({}, t)),
                    this.topicMap.set(t.topic, e),
                    this.events.emit(Qs, t);
                },
              },
              {
                key: "getSubscription",
                value: function (e) {
                  this.logger.debug("Getting subscription"),
                    this.logger.trace({
                      type: "method",
                      method: "getSubscription",
                      id: e,
                    });
                  var t = this.subscriptions.get(e);
                  if (!t) {
                    var r = Tn(
                      "NO_MATCHING_KEY",
                      "".concat(this.name, ": ").concat(e)
                    ).message;
                    throw new Error(r);
                  }
                  return t;
                },
              },
              {
                key: "deleteSubscription",
                value: function (e, t) {
                  this.logger.debug("Deleting subscription"),
                    this.logger.trace({
                      type: "method",
                      method: "deleteSubscription",
                      id: e,
                      reason: t,
                    });
                  var r = this.getSubscription(e);
                  this.subscriptions.delete(e),
                    this.topicMap.delete(r.topic, e),
                    this.events.emit($s, Oo(Io({}, r), { reason: t }));
                },
              },
              {
                key: "persist",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setRelayerSubscriptions(this.values)
                                );
                              case 2:
                                this.events.emit(eo);
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
                key: "reset",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t = this;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.t0 = this.cached.length), !e.t0)) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  Promise.all(
                                    this.cached.map(
                                      (function () {
                                        var e = (0, w.Z)(
                                          (0, b.Z)().mark(function e(r) {
                                            return (0, b.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      t.resubscribe(r)
                                                    );
                                                  case 2:
                                                    return e.abrupt(
                                                      "return",
                                                      e.sent
                                                    );
                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e);
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
                                this.events.emit(to);
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
                key: "restore",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t, r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getRelayerSubscriptions()
                                );
                              case 3:
                                if (!(typeof (t = e.sent) > "u") && t.length) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                if (!this.subscriptions.size) {
                                  e.next = 9;
                                  break;
                                }
                                throw (
                                  ((r = Tn("RESTORE_WILL_OVERRIDE", this.name)),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                );
                              case 9:
                                (this.cached = t),
                                  this.logger.debug(
                                    "Successfully Restored subscriptions for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    subscriptions: this.values,
                                  }),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  this.logger.debug(
                                    "Failed to Restore subscriptions for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.error(e.t0);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "resubscribe",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n, i, s;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.ids.includes(t.id)) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (r = t.topic),
                                  (n = t.relay),
                                  (i = { topic: r, relay: n }),
                                  this.pending.set(i.topic, i),
                                  (e.next = 5),
                                  this.rpcSubscribe(i.topic, i.relay)
                                );
                              case 5:
                                (s = e.sent), this.onResubscribe(s, i);
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onConnect",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.restart();
                              case 2:
                                this.onEnable();
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
                key: "onDisconnect",
                value: function () {
                  this.onDisable();
                },
              },
              {
                key: "checkPending",
                value: function () {
                  var e = this;
                  this.relayer.transportExplicitlyClosed ||
                    this.pending.forEach(
                      (function () {
                        var t = (0, w.Z)(
                          (0, b.Z)().mark(function t(r) {
                            var n;
                            return (0, b.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2),
                                      e.rpcSubscribe(r.topic, r.relay)
                                    );
                                  case 2:
                                    (n = t.sent), e.onSubscribe(n, r);
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                },
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this;
                  this.relayer.core.heartbeat.on(
                    T.HEARTBEAT_EVENTS.pulse,
                    function () {
                      e.checkPending();
                    }
                  ),
                    this.relayer.on(
                      Bs.connect,
                      (0, w.Z)(
                        (0, b.Z)().mark(function t() {
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.onConnect();
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )
                    ),
                    this.relayer.on(Bs.disconnect, function () {
                      e.onDisconnect();
                    }),
                    this.events.on(
                      Qs,
                      (function () {
                        var t = (0, w.Z)(
                          (0, b.Z)().mark(function t(r) {
                            var n;
                            return (0, b.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (n = Qs),
                                      e.logger.info("Emitting ".concat(n)),
                                      e.logger.debug({
                                        type: "event",
                                        event: n,
                                        data: r,
                                      }),
                                      (t.next = 5),
                                      e.persist()
                                    );
                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    ),
                    this.events.on(
                      $s,
                      (function () {
                        var t = (0, w.Z)(
                          (0, b.Z)().mark(function t(r) {
                            var n;
                            return (0, b.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (n = $s),
                                      e.logger.info("Emitting ".concat(n)),
                                      e.logger.debug({
                                        type: "event",
                                        event: n,
                                        data: r,
                                      }),
                                      (t.next = 5),
                                      e.persist()
                                    );
                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            r
          );
        })(V),
        Po = Object.defineProperty,
        Ao = Object.getOwnPropertySymbols,
        Ro = Object.prototype.hasOwnProperty,
        Uo = Object.prototype.propertyIsEnumerable,
        To = function (e, t, r) {
          return t in e
            ? Po(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        Co = function (e, t) {
          for (var r in t || (t = {})) Ro.call(t, r) && To(e, r, t[r]);
          if (Ao) {
            var n,
              i = (0, m.Z)(Ao(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                Uo.call(t, r) && To(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        jo = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e) {
            var n;
            return (
              (0, _.Z)(this, r),
              ((n = t.call(this, e)).protocol = "wc"),
              (n.version = 2),
              (n.events = new A.EventEmitter()),
              (n.name = Ks),
              (n.transportExplicitlyClosed = !1),
              (n.initialized = !1),
              (n.core = e.core),
              (n.logger =
                typeof e.logger < "u" && "string" != typeof e.logger
                  ? (0, C.generateChildLogger)(e.logger, n.name)
                  : k()(
                      (0, C.getDefaultLoggerOptions)({ level: e.logger || Hs })
                    )),
              (n.messages = new yo(n.logger, e.core)),
              (n.subscriber = new No((0, S.Z)(n), n.logger)),
              (n.publisher = new mo((0, S.Z)(n), n.logger)),
              (n.relayUrl =
                (null === e || void 0 === e ? void 0 : e.relayUrl) || Vs),
              (n.projectId = e.projectId),
              (n.provider = {}),
              n
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "init",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.trace("Initialized"),
                                  (e.next = 3),
                                  this.createProvider()
                                );
                              case 3:
                                return (
                                  (this.provider = e.sent),
                                  (e.next = 6),
                                  Promise.all([
                                    this.messages.init(),
                                    this.transportOpen(),
                                    this.subscriber.init(),
                                  ])
                                );
                              case 6:
                                this.registerEventListeners(),
                                  (this.initialized = !0);
                              case 8:
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
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "connected",
                get: function () {
                  return this.provider.connection.connected;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.provider.connection.connecting;
                },
              },
              {
                key: "publish",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r, n) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.isInitialized(),
                                  (e.next = 3),
                                  this.publisher.publish(t, r, n)
                                );
                              case 3:
                                return (
                                  (e.next = 5),
                                  this.recordMessageEvent({
                                    topic: t,
                                    message: r,
                                  })
                                );
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
                  return function (t, r, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "subscribe",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      var n,
                        i = this;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.isInitialized(),
                                  (n = ""),
                                  (e.next = 4),
                                  Promise.all([
                                    new Promise(function (e) {
                                      i.subscriber.once(Qs, function (r) {
                                        r.topic === t && e();
                                      });
                                    }),
                                    new Promise(
                                      (function () {
                                        var e = (0, w.Z)(
                                          (0, b.Z)().mark(function e(s) {
                                            return (0, b.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      i.subscriber.subscribe(
                                                        t,
                                                        r
                                                      )
                                                    );
                                                  case 2:
                                                    (n = e.sent), s();
                                                  case 4:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    ),
                                  ])
                                );
                              case 4:
                                return e.abrupt("return", n);
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
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unsubscribe",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t, r) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.isInitialized(),
                                  (e.next = 3),
                                  this.subscriber.unsubscribe(t, r)
                                );
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
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "on",
                value: function (e, t) {
                  this.events.on(e, t);
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  this.events.once(e, t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this.events.off(e, t);
                },
              },
              {
                key: "removeListener",
                value: function (e, t) {
                  this.events.removeListener(e, t);
                },
              },
              {
                key: "transportClose",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this.transportExplicitlyClosed = !0),
                                  (e.t0 = this.connected),
                                  !e.t0)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (e.next = 5), this.provider.disconnect();
                              case 5:
                                this.events.emit(Bs.transport_closed);
                              case 6:
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
                key: "transportOpen",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r,
                        n = this;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.relayUrl = t || this.relayUrl),
                                  (this.transportExplicitlyClosed = !1),
                                  (e.prev = 1),
                                  (e.t0 = Promise),
                                  (e.t1 = new Promise(function (e) {
                                    n.initialized || e(),
                                      n.subscriber.once(to, function () {
                                        e();
                                      });
                                  })),
                                  (e.next = 6),
                                  Promise.race([
                                    this.provider.connect(),
                                    new Promise(function (e, t) {
                                      return n.once(
                                        Bs.transport_closed,
                                        function () {
                                          t(
                                            new Error(
                                              "closeTransport called before connection was established"
                                            )
                                          );
                                        }
                                      );
                                    }),
                                  ])
                                );
                              case 6:
                                return (
                                  (e.t2 = e.sent),
                                  (e.t3 = [e.t1, e.t2]),
                                  (e.next = 10),
                                  e.t0.all.call(e.t0, e.t3)
                                );
                              case 10:
                                e.next = 18;
                                break;
                              case 12:
                                if (
                                  ((e.prev = 12),
                                  (e.t4 = e.catch(1)),
                                  (r = e.t4),
                                  /socket hang up/i.test(r.message))
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                throw new Error(r.message);
                              case 17:
                                this.logger.error(r),
                                  this.events.emit(Bs.transport_closed);
                              case 18:
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "restartTransport",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.transportClose();
                              case 2:
                                return (
                                  (e.next = 4),
                                  new Promise(function (e) {
                                    return setTimeout(e, Js);
                                  })
                                );
                              case 4:
                                return (e.next = 6), this.transportOpen(t);
                              case 6:
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
                key: "createProvider",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.crypto.signJWT(this.relayUrl)
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    new qn.r(
                                      new Fn(
                                        fn({
                                          sdkVersion: "2.3.3",
                                          protocol: this.protocol,
                                          version: this.version,
                                          relayUrl: this.relayUrl,
                                          projectId: this.projectId,
                                          auth: t,
                                        })
                                      )
                                    )
                                  )
                                );
                              case 4:
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
                key: "recordMessageEvent",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.topic),
                                  (n = t.message),
                                  (e.next = 3),
                                  this.messages.set(r, n)
                                );
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "shouldIgnoreMessageEvent",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.topic),
                                  (n = t.message),
                                  (e.next = 3),
                                  this.subscriber.isSubscribed(r)
                                );
                              case 3:
                                if (!e.sent) {
                                  e.next = 7;
                                  break;
                                }
                                (e.t0 = this.messages.has(r, n)), (e.next = 8);
                                break;
                              case 7:
                                e.t0 = !0;
                              case 8:
                                return e.abrupt("return", e.t0);
                              case 9:
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
                key: "onProviderPayload",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n, i, s, o;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.logger.debug("Incoming Relay Payload"),
                                  this.logger.trace({
                                    type: "payload",
                                    direction: "incoming",
                                    payload: t,
                                  }),
                                  !(0, Hn.isJsonRpcRequest)(t))
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                if (t.method.endsWith("_subscription")) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                return (
                                  (r = t.params),
                                  (n = r.data),
                                  (i = n.topic),
                                  (s = n.message),
                                  (o = { topic: i, message: s }),
                                  this.logger.debug("Emitting Relayer Payload"),
                                  this.logger.trace(
                                    Co({ type: "event", event: r.id }, o)
                                  ),
                                  this.events.emit(r.id, o),
                                  (e.next = 9),
                                  this.acknowledgePayload(t)
                                );
                              case 9:
                                return (e.next = 11), this.onMessageEvent(o);
                              case 11:
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
                key: "onMessageEvent",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.shouldIgnoreMessageEvent(t)
                                );
                              case 2:
                                if (((e.t0 = e.sent), e.t0)) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  this.events.emit(Bs.message, t),
                                  (e.next = 7),
                                  this.recordMessageEvent(t)
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "acknowledgePayload",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = (0, Hn.formatJsonRpcResult)(t.id, !0)),
                                  (e.next = 3),
                                  this.provider.connection.send(r)
                                );
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this;
                  this.provider.on(Fs, function (t) {
                    return e.onProviderPayload(t);
                  }),
                    this.provider.on(Ws, function () {
                      e.events.emit(Bs.connect);
                    }),
                    this.provider.on(Gs, function () {
                      e.events.emit(Bs.disconnect), e.attemptToReconnect();
                    }),
                    this.provider.on(Ys, function (t) {
                      return e.events.emit(Bs.error, t);
                    }),
                    this.events.on(
                      Bs.connection_stalled,
                      (0, w.Z)(
                        (0, b.Z)().mark(function t() {
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.restartTransport();
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )
                    );
                },
              },
              {
                key: "attemptToReconnect",
                value: function () {
                  var e = this;
                  this.transportExplicitlyClosed ||
                    setTimeout(
                      (0, w.Z)(
                        (0, b.Z)().mark(function t() {
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.transportOpen();
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      ),
                      (0, G.toMiliseconds)(Js)
                    );
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            r
          );
        })(q),
        Lo = Object.defineProperty,
        Do = Object.getOwnPropertySymbols,
        Mo = Object.prototype.hasOwnProperty,
        zo = Object.prototype.propertyIsEnumerable,
        qo = function (e, t, r) {
          return t in e
            ? Lo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        Ho = function (e, t) {
          for (var r in t || (t = {})) Mo.call(t, r) && qo(e, r, t[r]);
          if (Do) {
            var n,
              i = (0, m.Z)(Do(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                zo.call(t, r) && qo(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        Vo = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n, i) {
            var s,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : Ns,
              a =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : void 0;
            return (
              (0, _.Z)(this, r),
              ((s = t.call(this, e, n, i, o)).core = e),
              (s.logger = n),
              (s.name = i),
              (s.map = new Map()),
              (s.version = Xs),
              (s.cached = []),
              (s.initialized = !1),
              (s.storagePrefix = Ns),
              (s.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = s.initialized), e.t0)) {
                            e.next = 8;
                            break;
                          }
                          return (
                            s.logger.trace("Initialized"),
                            (e.next = 5),
                            s.restore()
                          );
                        case 5:
                          s.cached.forEach(function (e) {
                            Dn(e)
                              ? s.map.set(e.id, e)
                              : Mn(e)
                              ? s.map.set(e.topic, e)
                              : s.getKey &&
                                null !== e &&
                                !jn(e) &&
                                s.map.set(s.getKey(e), e);
                          }),
                            (s.cached = []),
                            (s.initialized = !0);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (s.set = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((s.isInitialized(), !s.map.has(t))) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 4), s.update(t, r);
                          case 4:
                            e.next = 11;
                            break;
                          case 6:
                            return (
                              s.logger.debug("Setting value"),
                              s.logger.trace({
                                type: "method",
                                method: "set",
                                key: t,
                                value: r,
                              }),
                              s.map.set(t, r),
                              (e.next = 11),
                              s.persist()
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (s.get = function (e) {
                return (
                  s.isInitialized(),
                  s.logger.debug("Getting value"),
                  s.logger.trace({ type: "method", method: "get", key: e }),
                  s.getData(e)
                );
              }),
              (s.getAll = function (e) {
                return (
                  s.isInitialized(),
                  e
                    ? s.values.filter(function (t) {
                        return Object.keys(e).every(function (r) {
                          return Gn()(t[r], e[r]);
                        });
                      })
                    : s.values
                );
              }),
              (s.update = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var n;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              s.isInitialized(),
                              s.logger.debug("Updating value"),
                              s.logger.trace({
                                type: "method",
                                method: "update",
                                key: t,
                                update: r,
                              }),
                              (n = Ho(Ho({}, s.getData(t)), r)),
                              s.map.set(t, n),
                              (e.next = 5),
                              s.persist()
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (s.delete = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (s.isInitialized(), (e.t0 = s.map.has(t)), !e.t0)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              s.logger.debug("Deleting value"),
                              s.logger.trace({
                                type: "method",
                                method: "delete",
                                key: t,
                                reason: r,
                              }),
                              s.map.delete(t),
                              (e.next = 8),
                              s.persist()
                            );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (s.logger = (0, C.generateChildLogger)(n, s.name)),
              (s.storagePrefix = o),
              (s.getKey = a),
              s
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "storageKey",
                get: function () {
                  return this.storagePrefix + this.version + "//" + this.name;
                },
              },
              {
                key: "length",
                get: function () {
                  return this.map.size;
                },
              },
              {
                key: "keys",
                get: function () {
                  return Array.from(this.map.keys());
                },
              },
              {
                key: "values",
                get: function () {
                  return Array.from(this.map.values());
                },
              },
              {
                key: "setDataStore",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(this.storageKey, t)
                                );
                              case 2:
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
                key: "getDataStore",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
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
                key: "getData",
                value: function (e) {
                  var t = this.map.get(e);
                  if (!t) {
                    var r = Tn(
                      "NO_MATCHING_KEY",
                      "".concat(this.name, ": ").concat(e)
                    ).message;
                    throw (this.logger.error(r), new Error(r));
                  }
                  return t;
                },
              },
              {
                key: "persist",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.setDataStore(this.values)
                                );
                              case 2:
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
                key: "restore",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t, r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getDataStore()
                                );
                              case 3:
                                if (!(typeof (t = e.sent) > "u") && t.length) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                if (!this.map.size) {
                                  e.next = 9;
                                  break;
                                }
                                throw (
                                  ((r = Tn("RESTORE_WILL_OVERRIDE", this.name)),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                );
                              case 9:
                                (this.cached = t),
                                  this.logger.debug(
                                    "Successfully Restored value for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    value: this.values,
                                  }),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  this.logger.debug(
                                    "Failed to Restore value for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.error(e.t0);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            r
          );
        })(H),
        Ko = (function () {
          function e(t, r) {
            var n = this;
            (0, _.Z)(this, e),
              (this.core = t),
              (this.logger = r),
              (this.name = so),
              (this.version = oo),
              (this.events = new (R())()),
              (this.initialized = !1),
              (this.storagePrefix = Ns),
              (this.ignoredPayloadTypes = [jr]),
              (this.registeredMethods = []),
              (this.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = n.initialized), e.t0)) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 4), n.pairings.init();
                        case 4:
                          return (e.next = 6), n.cleanup();
                        case 6:
                          n.registerRelayerEvents(),
                            n.registerExpirerEvents(),
                            (n.initialized = !0),
                            n.logger.trace("Initialized");
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.register = function (e) {
                var t = e.methods;
                n.isInitialized(),
                  (n.registeredMethods = (0, Z.Z)(
                    new Set(
                      [].concat((0, Z.Z)(n.registeredMethods), (0, Z.Z)(t))
                    )
                  ));
              }),
              (this.create = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  var t, r, i, s, o, a;
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.isInitialized(),
                            (t = qr()),
                            (e.next = 4),
                            n.core.crypto.setSymKey(t)
                          );
                        case 4:
                          return (
                            (r = e.sent),
                            (i = hn(G.FIVE_MINUTES)),
                            (o = {
                              topic: r,
                              expiry: i,
                              relay: (s = { protocol: qs }),
                              active: !1,
                            }),
                            (a = An({
                              protocol: n.core.protocol,
                              version: n.core.version,
                              topic: r,
                              symKey: t,
                              relay: s,
                            })),
                            (e.next = 11),
                            n.pairings.set(r, o)
                          );
                        case 11:
                          return (e.next = 13), n.core.relayer.subscribe(r);
                        case 13:
                          return (
                            n.core.expirer.set(r, i),
                            e.abrupt("return", { topic: r, uri: a })
                          );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.pair = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              n.isValidPair(t),
                              (r = Pn(t.uri)),
                              (i = r.topic),
                              (s = r.symKey),
                              (o = r.relay),
                              (a = hn(G.FIVE_MINUTES)),
                              (c = {
                                topic: i,
                                relay: o,
                                expiry: a,
                                active: !1,
                              }),
                              (e.next = 4),
                              n.pairings.set(i, c)
                            );
                          case 4:
                            return (e.next = 6), n.core.crypto.setSymKey(s, i);
                          case 6:
                            return (
                              (e.next = 8),
                              n.core.relayer.subscribe(i, { relay: o })
                            );
                          case 8:
                            if (
                              (n.core.expirer.set(i, a),
                              (e.t0 = t.activatePairing),
                              !e.t0)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (e.next = 13), n.activate({ topic: i });
                          case 13:
                            return e.abrupt("return", c);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.activate = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.topic),
                              n.isInitialized(),
                              (i = hn(G.THIRTY_DAYS)),
                              (e.next = 5),
                              n.pairings.update(r, { active: !0, expiry: i })
                            );
                          case 5:
                            n.core.expirer.set(r, i);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.ping = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(), (e.next = 3), n.isValidPing(t)
                            );
                          case 3:
                            if (((r = t.topic), !n.pairings.keys.includes(r))) {
                              e.next = 15;
                              break;
                            }
                            return (
                              (e.next = 7),
                              n.sendRequest(r, "wc_pairingPing", {})
                            );
                          case 7:
                            return (
                              (i = e.sent),
                              (s = vn()),
                              (o = s.done),
                              (a = s.resolve),
                              (c = s.reject),
                              n.events.once(
                                bn("pairing_ping", i),
                                function (e) {
                                  var t = e.error;
                                  t ? c(t) : a();
                                }
                              ),
                              (e.next = 15),
                              o()
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.updateExpiry = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.topic),
                              (i = t.expiry),
                              n.isInitialized(),
                              (e.next = 4),
                              n.pairings.update(r, { expiry: i })
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
              })()),
              (this.updateMetadata = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.topic),
                              (i = t.metadata),
                              n.isInitialized(),
                              (e.next = 4),
                              n.pairings.update(r, { peerMetadata: i })
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
              })()),
              (this.getPairings = function () {
                return n.isInitialized(), n.pairings.values;
              }),
              (this.disconnect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidDisconnect(t)
                            );
                          case 3:
                            if (
                              ((r = t.topic),
                              (e.t0 = n.pairings.keys.includes(r)),
                              !e.t0)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 8),
                              n.sendRequest(
                                r,
                                "wc_pairingDelete",
                                Cn("USER_DISCONNECTED")
                              )
                            );
                          case 8:
                            return (e.next = 10), n.deletePairing(r);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.sendRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, i) {
                    var s, o, a;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, Hn.formatJsonRpcRequest)(r, i)),
                              (e.next = 3),
                              n.core.crypto.encode(t, s)
                            );
                          case 3:
                            return (
                              (o = e.sent),
                              (a = ao[r].req),
                              n.core.history.set(t, s),
                              (e.next = 8),
                              n.core.relayer.publish(t, o, a)
                            );
                          case 8:
                            return e.abrupt("return", s.id);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.sendResult = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, i) {
                    var s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, Hn.formatJsonRpcResult)(t, i)),
                              (e.next = 3),
                              n.core.crypto.encode(r, s)
                            );
                          case 3:
                            return (
                              (o = e.sent),
                              (e.next = 6),
                              n.core.history.get(r, t)
                            );
                          case 6:
                            return (
                              (a = e.sent),
                              (c = ao[a.request.method].res),
                              (e.next = 10),
                              n.core.relayer.publish(r, o, c)
                            );
                          case 10:
                            return (e.next = 12), n.core.history.resolve(s);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.sendError = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, i) {
                    var s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, Hn.formatJsonRpcError)(t, i)),
                              (e.next = 3),
                              n.core.crypto.encode(r, s)
                            );
                          case 3:
                            return (
                              (o = e.sent),
                              (e.next = 6),
                              n.core.history.get(r, t)
                            );
                          case 6:
                            return (
                              (a = e.sent),
                              (c = ao[a.request.method]
                                ? ao[a.request.method].res
                                : ao.unregistered_method.res),
                              (e.next = 10),
                              n.core.relayer.publish(r, o, c)
                            );
                          case 10:
                            return (e.next = 12), n.core.history.resolve(s);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.deletePairing = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.core.relayer.unsubscribe(t);
                          case 2:
                            return (
                              (e.next = 4),
                              Promise.all([
                                n.pairings.delete(t, Cn("USER_DISCONNECTED")),
                                n.core.crypto.deleteSymKey(t),
                                r ? Promise.resolve() : n.core.expirer.del(t),
                              ])
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.cleanup = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  var t;
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.pairings.getAll().filter(function (e) {
                              return dn(e.expiry);
                            })),
                            (e.next = 3),
                            Promise.all(
                              t.map(function (e) {
                                return n.deletePairing(e.topic);
                              })
                            )
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.onRelayEventRequest = function (e) {
                var t = e.topic,
                  r = e.payload,
                  i = r.method;
                if (n.pairings.keys.includes(t))
                  switch (i) {
                    case "wc_pairingPing":
                      return n.onPairingPingRequest(t, r);
                    case "wc_pairingDelete":
                      return n.onPairingDeleteRequest(t, r);
                    default:
                      return n.onUnknownRpcMethodRequest(t, r);
                  }
              }),
              (this.onRelayEventResponse = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.topic),
                              (i = t.payload),
                              (e.next = 4),
                              n.core.history.get(r, i.id)
                            );
                          case 4:
                            if (
                              ((s = e.sent.request.method),
                              !n.pairings.keys.includes(r))
                            ) {
                              e.next = 11;
                              break;
                            }
                            (e.t0 = s),
                              (e.next = "wc_pairingPing" === e.t0 ? 9 : 10);
                            break;
                          case 9:
                            return e.abrupt(
                              "return",
                              n.onPairingPingResponse(r, i)
                            );
                          case 10:
                            return e.abrupt(
                              "return",
                              n.onUnknownRpcMethodResponse(s)
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.onPairingPingRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidPing({ topic: t }),
                                (e.next = 5),
                                n.sendResult(i, t, !0)
                              );
                            case 5:
                              n.events.emit("pairing_ping", {
                                id: i,
                                topic: t,
                              }),
                                (e.next = 13);
                              break;
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                (e.next = 12),
                                n.sendError(i, t, e.t0)
                              );
                            case 12:
                              n.logger.error(e.t0);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.onPairingPingResponse = function (e, t) {
                var r = t.id;
                setTimeout(function () {
                  (0, Hn.isJsonRpcResult)(t)
                    ? n.events.emit(bn("pairing_ping", r), {})
                    : (0, Hn.isJsonRpcError)(t) &&
                      n.events.emit(bn("pairing_ping", r), { error: t.error });
                }, 500);
              }),
              (this.onPairingDeleteRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidDisconnect({ topic: t }),
                                (e.next = 5),
                                n.sendResult(i, t, !0)
                              );
                            case 5:
                              return (e.next = 7), n.deletePairing(t);
                            case 7:
                              n.events.emit("pairing_delete", {
                                id: i,
                                topic: t,
                              }),
                                (e.next = 15);
                              break;
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                (e.next = 14),
                                n.sendError(i, t, e.t0)
                              );
                            case 14:
                              n.logger.error(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.onUnknownRpcMethodRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s, o;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((i = r.id),
                                (s = r.method),
                                (e.prev = 1),
                                !n.registeredMethods.includes(s))
                              ) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (o = Cn("WC_METHOD_UNSUPPORTED", s)),
                                (e.next = 7),
                                n.sendError(i, t, o)
                              );
                            case 7:
                              n.logger.error(o), (e.next = 15);
                              break;
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                (e.next = 14),
                                n.sendError(i, t, e.t0)
                              );
                            case 14:
                              n.logger.error(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.onUnknownRpcMethodResponse = function (e) {
                n.registeredMethods.includes(e) ||
                  n.logger.error(Cn("WC_METHOD_UNSUPPORTED", e));
              }),
              (this.isValidPair = function (e) {
                if (!zn(e)) {
                  var t = Tn(
                    "MISSING_OR_INVALID",
                    "pair() params: ".concat(e)
                  ).message;
                  throw new Error(t);
                }
                if (
                  !(function (e) {
                    if (Ln(e, !1))
                      try {
                        return typeof new URL(e) < "u";
                      } catch (t) {
                        return !1;
                      }
                    return !1;
                  })(e.uri)
                ) {
                  var r = Tn(
                    "MISSING_OR_INVALID",
                    "pair() uri: ".concat(e.uri)
                  ).message;
                  throw new Error(r);
                }
              }),
              (this.isValidPing = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (zn(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = Tn(
                                "MISSING_OR_INVALID",
                                "ping() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidPairingTopic(s)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.isValidDisconnect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (zn(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = Tn(
                                "MISSING_OR_INVALID",
                                "disconnect() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidPairingTopic(s)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.isValidPairingTopic = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ln(t, !1)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = Tn(
                                "MISSING_OR_INVALID",
                                "pairing topic should be a string: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            if (n.pairings.keys.includes(t)) {
                              e.next = 6;
                              break;
                            }
                            throw (
                              ((s = Tn(
                                "NO_MATCHING_KEY",
                                "pairing topic doesn't exist: ".concat(t)
                              )),
                              (o = s.message),
                              new Error(o))
                            );
                          case 6:
                            if (!dn(n.pairings.get(t).expiry)) {
                              e.next = 11;
                              break;
                            }
                            return (e.next = 9), n.deletePairing(t);
                          case 9:
                            throw (
                              ((a = Tn("EXPIRED", "pairing topic: ".concat(t))),
                              (c = a.message),
                              new Error(c))
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.core = t),
              (this.logger = (0, C.generateChildLogger)(r, this.name)),
              (this.pairings = new Vo(
                this.core,
                this.logger,
                this.name,
                this.storagePrefix
              ));
          }
          return (
            (0, E.Z)(e, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
              {
                key: "registerRelayerEvents",
                value: function () {
                  var e = this;
                  this.core.relayer.on(
                    Bs.message,
                    (function () {
                      var t = (0, w.Z)(
                        (0, b.Z)().mark(function t(r) {
                          var n, i, s;
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.topic),
                                    (i = r.message),
                                    !e.ignoredPayloadTypes.includes(
                                      e.core.crypto.getPayloadType(i)
                                    ))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 3:
                                  return (
                                    (t.next = 5), e.core.crypto.decode(n, i)
                                  );
                                case 5:
                                  if (
                                    ((s = t.sent), !(0, Hn.isJsonRpcRequest)(s))
                                  ) {
                                    t.next = 10;
                                    break;
                                  }
                                  e.core.history.set(n, s),
                                    e.onRelayEventRequest({
                                      topic: n,
                                      payload: s,
                                    }),
                                    (t.next = 15);
                                  break;
                                case 10:
                                  if (
                                    ((t.t0 = (0, Hn.isJsonRpcResponse)(s)),
                                    !t.t0)
                                  ) {
                                    t.next = 15;
                                    break;
                                  }
                                  return (
                                    (t.next = 14), e.core.history.resolve(s)
                                  );
                                case 14:
                                  e.onRelayEventResponse({
                                    topic: n,
                                    payload: s,
                                  });
                                case 15:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: "registerExpirerEvents",
                value: function () {
                  var e = this;
                  this.core.expirer.on(
                    po.expired,
                    (function () {
                      var t = (0, w.Z)(
                        (0, b.Z)().mark(function t(r) {
                          var n, i;
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = mn(r.target)),
                                    (i = n.topic),
                                    (t.t0 = i && e.pairings.keys.includes(i)),
                                    !t.t0)
                                  ) {
                                    t.next = 6;
                                    break;
                                  }
                                  return (t.next = 5), e.deletePairing(i, !0);
                                case 5:
                                  e.events.emit("pairing_expire", { topic: i });
                                case 6:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
            ]),
            e
          );
        })(),
        Bo = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n)).core = e),
              (i.logger = n),
              (i.records = new Map()),
              (i.events = new A.EventEmitter()),
              (i.name = uo),
              (i.version = fo),
              (i.cached = []),
              (i.initialized = !1),
              (i.storagePrefix = Ns),
              (i.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            i.logger.trace("Initialized"),
                            (e.next = 5),
                            i.restore()
                          );
                        case 5:
                          i.cached.forEach(function (e) {
                            return i.records.set(e.id, e);
                          }),
                            (i.cached = []),
                            i.registerEventListeners(),
                            (i.initialized = !0);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (i.set = function (e, t, r) {
                if (
                  (i.isInitialized(),
                  i.logger.debug("Setting JSON-RPC request history record"),
                  i.logger.trace({
                    type: "method",
                    method: "set",
                    topic: e,
                    request: t,
                    chainId: r,
                  }),
                  !i.records.has(t.id))
                ) {
                  var n = {
                    id: t.id,
                    topic: e,
                    request: { method: t.method, params: t.params || null },
                    chainId: r,
                  };
                  i.records.set(n.id, n), i.events.emit(co.created, n);
                }
              }),
              (i.resolve = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              i.logger.debug(
                                "Updating JSON-RPC response history record"
                              ),
                              i.logger.trace({
                                type: "method",
                                method: "update",
                                response: t,
                              }),
                              i.records.has(t.id))
                            ) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (e.next = 4), i.getRecord(t.id);
                          case 4:
                            typeof (r = e.sent).response > "u" &&
                              ((r.response = (0, Hn.isJsonRpcError)(t)
                                ? { error: t.error }
                                : { result: t.result }),
                              i.records.set(r.id, r),
                              i.events.emit(co.updated, r));
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.get = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(),
                              i.logger.debug("Getting record"),
                              i.logger.trace({
                                type: "method",
                                method: "get",
                                topic: t,
                                id: r,
                              }),
                              (e.next = 5),
                              i.getRecord(r)
                            );
                          case 5:
                            return e.abrupt("return", e.sent);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.delete = function (e, t) {
                i.isInitialized(),
                  i.logger.debug("Deleting record"),
                  i.logger.trace({ type: "method", method: "delete", id: t }),
                  i.values.forEach(function (r) {
                    if (r.topic === e) {
                      if (typeof t < "u" && r.id !== t) return;
                      i.records.delete(r.id), i.events.emit(co.deleted, r);
                    }
                  });
              }),
              (i.exists = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((i.isInitialized(), !i.records.has(r))) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 4), i.getRecord(r);
                          case 4:
                            (e.t1 = e.sent.topic),
                              (e.t2 = t),
                              (e.t0 = e.t1 === e.t2),
                              (e.next = 10);
                            break;
                          case 9:
                            e.t0 = !1;
                          case 10:
                            return e.abrupt("return", e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.on = function (e, t) {
                i.events.on(e, t);
              }),
              (i.once = function (e, t) {
                i.events.once(e, t);
              }),
              (i.off = function (e, t) {
                i.events.off(e, t);
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t);
              }),
              (i.logger = (0, C.generateChildLogger)(n, i.name)),
              i
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "storageKey",
                get: function () {
                  return this.storagePrefix + this.version + "//" + this.name;
                },
              },
              {
                key: "size",
                get: function () {
                  return this.records.size;
                },
              },
              {
                key: "keys",
                get: function () {
                  return Array.from(this.records.keys());
                },
              },
              {
                key: "values",
                get: function () {
                  return Array.from(this.records.values());
                },
              },
              {
                key: "pending",
                get: function () {
                  var e = [];
                  return (
                    this.values.forEach(function (t) {
                      if (!(typeof t.response < "u")) {
                        var r = {
                          topic: t.topic,
                          request: (0, Hn.formatJsonRpcRequest)(
                            t.request.method,
                            t.request.params,
                            t.id
                          ),
                          chainId: t.chainId,
                        };
                        return e.push(r);
                      }
                    }),
                    e
                  );
                },
              },
              {
                key: "setJsonRpcRecords",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(this.storageKey, t)
                                );
                              case 2:
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
                key: "getJsonRpcRecords",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
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
                key: "getRecord",
                value: function (e) {
                  this.isInitialized();
                  var t = this.records.get(e);
                  if (!t) {
                    var r = Tn(
                      "NO_MATCHING_KEY",
                      "".concat(this.name, ": ").concat(e)
                    ).message;
                    throw new Error(r);
                  }
                  return t;
                },
              },
              {
                key: "persist",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setJsonRpcRecords(this.values)
                                );
                              case 2:
                                this.events.emit(co.sync);
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
                key: "restore",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t, r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getJsonRpcRecords()
                                );
                              case 3:
                                if (!(typeof (t = e.sent) > "u") && t.length) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                if (!this.records.size) {
                                  e.next = 9;
                                  break;
                                }
                                throw (
                                  ((r = Tn("RESTORE_WILL_OVERRIDE", this.name)),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                );
                              case 9:
                                (this.cached = t),
                                  this.logger.debug(
                                    "Successfully Restored records for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    records: this.values,
                                  }),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  this.logger.debug(
                                    "Failed to Restore records for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.error(e.t0);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this;
                  this.events.on(co.created, function (t) {
                    var r = co.created;
                    e.logger.info("Emitting ".concat(r)),
                      e.logger.debug({ type: "event", event: r, record: t }),
                      e.persist();
                  }),
                    this.events.on(co.updated, function (t) {
                      var r = co.updated;
                      e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({ type: "event", event: r, record: t }),
                        e.persist();
                    }),
                    this.events.on(co.deleted, function (t) {
                      var r = co.deleted;
                      e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({ type: "event", event: r, record: t }),
                        e.persist();
                    });
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            r
          );
        })(D),
        Fo = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n)).core = e),
              (i.logger = n),
              (i.expirations = new Map()),
              (i.events = new A.EventEmitter()),
              (i.name = lo),
              (i.version = ho),
              (i.cached = []),
              (i.initialized = !1),
              (i.storagePrefix = Ns),
              (i.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            i.logger.trace("Initialized"),
                            (e.next = 5),
                            i.restore()
                          );
                        case 5:
                          i.cached.forEach(function (e) {
                            return i.expirations.set(e.target, e);
                          }),
                            (i.cached = []),
                            i.registerEventListeners(),
                            (i.initialized = !0);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (i.has = function (e) {
                try {
                  var t = i.formatTarget(e);
                  return typeof i.getExpiration(t) < "u";
                } catch (r) {
                  return !1;
                }
              }),
              (i.set = function (e, t) {
                i.isInitialized();
                var r = i.formatTarget(e),
                  n = { target: r, expiry: t };
                i.expirations.set(r, n),
                  i.checkExpiry(r, n),
                  i.events.emit(po.created, { target: r, expiration: n });
              }),
              (i.get = function (e) {
                i.isInitialized();
                var t = i.formatTarget(e);
                return i.getExpiration(t);
              }),
              (i.del = function (e) {
                if ((i.isInitialized(), i.has(e))) {
                  var t = i.formatTarget(e),
                    r = i.getExpiration(t);
                  i.expirations.delete(t),
                    i.events.emit(po.deleted, { target: t, expiration: r });
                }
              }),
              (i.on = function (e, t) {
                i.events.on(e, t);
              }),
              (i.once = function (e, t) {
                i.events.once(e, t);
              }),
              (i.off = function (e, t) {
                i.events.off(e, t);
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t);
              }),
              (i.logger = (0, C.generateChildLogger)(n, i.name)),
              i
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "context",
                get: function () {
                  return (0, C.getLoggerContext)(this.logger);
                },
              },
              {
                key: "storageKey",
                get: function () {
                  return this.storagePrefix + this.version + "//" + this.name;
                },
              },
              {
                key: "length",
                get: function () {
                  return this.expirations.size;
                },
              },
              {
                key: "keys",
                get: function () {
                  return Array.from(this.expirations.keys());
                },
              },
              {
                key: "values",
                get: function () {
                  return Array.from(this.expirations.values());
                },
              },
              {
                key: "formatTarget",
                value: function (e) {
                  if ("string" == typeof e)
                    return (function (e) {
                      return yn("topic", e);
                    })(e);
                  if ("number" == typeof e)
                    return (function (e) {
                      return yn("id", e);
                    })(e);
                  var t = Tn(
                    "UNKNOWN_TYPE",
                    "Target type: ".concat(typeof e)
                  ).message;
                  throw new Error(t);
                },
              },
              {
                key: "setExpirations",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(this.storageKey, t)
                                );
                              case 2:
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
                key: "getExpirations",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
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
                key: "persist",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.setExpirations(this.values)
                                );
                              case 2:
                                this.events.emit(po.sync);
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
                key: "restore",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e() {
                      var t, r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getExpirations()
                                );
                              case 3:
                                if (!(typeof (t = e.sent) > "u") && t.length) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                if (!this.expirations.size) {
                                  e.next = 9;
                                  break;
                                }
                                throw (
                                  ((r = Tn("RESTORE_WILL_OVERRIDE", this.name)),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                );
                              case 9:
                                (this.cached = t),
                                  this.logger.debug(
                                    "Successfully Restored expirations for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    expirations: this.values,
                                  }),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  this.logger.debug(
                                    "Failed to Restore expirations for ".concat(
                                      this.name
                                    )
                                  ),
                                  this.logger.error(e.t0);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getExpiration",
                value: function (e) {
                  var t = this.expirations.get(e);
                  if (!t) {
                    var r = Tn(
                      "NO_MATCHING_KEY",
                      "".concat(this.name, ": ").concat(e)
                    ).message;
                    throw (this.logger.error(r), new Error(r));
                  }
                  return t;
                },
              },
              {
                key: "checkExpiry",
                value: function (e, t) {
                  var r = t.expiry;
                  (0, G.toMiliseconds)(r) - Date.now() <= 0 &&
                    this.expire(e, t);
                },
              },
              {
                key: "expire",
                value: function (e, t) {
                  this.expirations.delete(e),
                    this.events.emit(po.expired, { target: e, expiration: t });
                },
              },
              {
                key: "checkExpirations",
                value: function () {
                  var e = this;
                  this.expirations.forEach(function (t, r) {
                    return e.checkExpiry(r, t);
                  });
                },
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this;
                  this.core.heartbeat.on(T.HEARTBEAT_EVENTS.pulse, function () {
                    return e.checkExpirations();
                  }),
                    this.events.on(po.created, function (t) {
                      var r = po.created;
                      e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({ type: "event", event: r, data: t }),
                        e.persist();
                    }),
                    this.events.on(po.expired, function (t) {
                      var r = po.expired;
                      e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({ type: "event", event: r, data: t }),
                        e.persist();
                    }),
                    this.events.on(po.deleted, function (t) {
                      var r = po.deleted;
                      e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({ type: "event", event: r, data: t }),
                        e.persist();
                    });
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = Tn("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
            ]),
            r
          );
        })(K),
        Wo = Object.defineProperty,
        Go = Object.getOwnPropertySymbols,
        Yo = Object.prototype.hasOwnProperty,
        Jo = Object.prototype.propertyIsEnumerable,
        Xo = function (e, t, r) {
          return t in e
            ? Wo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        Qo = function (e, t) {
          for (var r in t || (t = {})) Yo.call(t, r) && Xo(e, r, t[r]);
          if (Go) {
            var n,
              i = (0, m.Z)(Go(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                Jo.call(t, r) && Xo(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        $o = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e) {
            var n;
            (0, _.Z)(this, r),
              ((n = t.call(this, e)).protocol = Zs),
              (n.version = Is),
              (n.name = Os),
              (n.events = new A.EventEmitter()),
              (n.initialized = !1),
              (n.on = function (e, t) {
                return n.events.on(e, t);
              }),
              (n.once = function (e, t) {
                return n.events.once(e, t);
              }),
              (n.off = function (e, t) {
                return n.events.off(e, t);
              }),
              (n.removeListener = function (e, t) {
                return n.events.removeListener(e, t);
              }),
              (n.projectId = null === e || void 0 === e ? void 0 : e.projectId);
            var i =
              typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
              "string" !=
                typeof (null === e || void 0 === e ? void 0 : e.logger)
                ? e.logger
                : k()(
                    (0, C.getDefaultLoggerOptions)({
                      level:
                        (null === e || void 0 === e ? void 0 : e.logger) ||
                        Ps.logger,
                    })
                  );
            return (
              (n.logger = (0, C.generateChildLogger)(i, n.name)),
              (n.heartbeat = new T.HeartBeat()),
              (n.crypto = new go(
                (0, S.Z)(n),
                n.logger,
                null === e || void 0 === e ? void 0 : e.keychain
              )),
              (n.history = new Bo((0, S.Z)(n), n.logger)),
              (n.expirer = new Fo((0, S.Z)(n), n.logger)),
              (n.storage =
                null != e && e.storage
                  ? e.storage
                  : new U.ZP(
                      Qo(
                        Qo({}, As),
                        null === e || void 0 === e ? void 0 : e.storageOptions
                      )
                    )),
              (n.relayer = new jo({
                core: (0, S.Z)(n),
                logger: n.logger,
                relayUrl: null === e || void 0 === e ? void 0 : e.relayUrl,
                projectId: n.projectId,
              })),
              (n.pairing = new Ko((0, S.Z)(n), n.logger)),
              n
            );
          }
          return (
            (0, E.Z)(
              r,
              [
                {
                  key: "context",
                  get: function () {
                    return (0, C.getLoggerContext)(this.logger);
                  },
                },
                {
                  key: "start",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.t0 = this.initialized), e.t0)) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (e.next = 4), this.initialize();
                                case 4:
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
                  key: "initialize",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.logger.trace("Initialized"),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this.crypto.init()
                                  );
                                case 4:
                                  return (e.next = 6), this.history.init();
                                case 6:
                                  return (e.next = 8), this.expirer.init();
                                case 8:
                                  return (e.next = 10), this.relayer.init();
                                case 10:
                                  return (e.next = 12), this.heartbeat.init();
                                case 12:
                                  return (e.next = 14), this.pairing.init();
                                case 14:
                                  (this.initialized = !0),
                                    this.logger.info(
                                      "Core Initialization Success"
                                    ),
                                    (e.next = 21);
                                  break;
                                case 18:
                                  throw (
                                    ((e.prev = 18),
                                    (e.t0 = e.catch(1)),
                                    this.logger.warn(
                                      "Core Initialization Failure at epoch ".concat(
                                        Date.now()
                                      ),
                                      e.t0
                                    ),
                                    this.logger.error(e.t0.message),
                                    e.t0)
                                  );
                                case 21:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 18]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
              ],
              [
                {
                  key: "init",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e(t) {
                        var n;
                        return (0, b.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = new r(t)), (e.next = 3), n.initialize()
                                );
                              case 3:
                                return e.abrupt("return", n);
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
              ]
            ),
            r
          );
        })(L),
        ea = $o,
        ta =
          (j.q,
          j.q,
          j.q,
          j.q,
          j.q,
          j.q,
          R(),
          (0, E.Z)(function e(t) {
            (0, _.Z)(this, e),
              (this.opts = t),
              (this.protocol = "wc"),
              (this.version = 2);
          })),
        ra =
          (A.EventEmitter,
          (0, E.Z)(function e(t) {
            (0, _.Z)(this, e), (this.client = t);
          })),
        na = r(83815);
      r(19915);
      var ia = 1;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function sa(e, t) {
        return (
          e.filter(function (e) {
            return t.includes(e);
          }).length === e.length
        );
      }
      function oa(e, t) {
        return (0, G.fromMiliseconds)(
          (t || Date.now()) + (0, G.toMiliseconds)(e)
        );
      }
      function aa(e) {
        return (0, G.fromMiliseconds)(Date.now()) >= (0, G.toMiliseconds)(e);
      }
      function ca(e) {
        var t,
          r,
          n,
          i = (0, G.toMiliseconds)(e || G.FIVE_MINUTES);
        return {
          resolve: function (e) {
            n && t && (clearTimeout(n), t(e));
          },
          reject: function (e) {
            n && r && (clearTimeout(n), r(e));
          },
          done: function () {
            return new Promise(function (e, s) {
              (n = setTimeout(s, i)), (t = e), (r = s);
            });
          },
        };
      }
      function ua(e) {
        var t = e.split(":"),
          r = (0, y.Z)(t, 2),
          n = r[0],
          i = r[1],
          s = { id: void 0, topic: void 0 };
        if ("topic" === n && "string" == typeof i) s.topic = i;
        else {
          if ("id" !== n || !Number.isInteger(Number(i)))
            throw new Error(
              "Invalid target, expected id:number or topic:string, got "
                .concat(n, ":")
                .concat(i)
            );
          s.id = Number(i);
        }
        return s;
      }
      function fa(e, t) {
        return "".concat(e).concat(t ? ":".concat(t) : "");
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function la(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            var r = e.split(":"),
              n = (0, y.Z)(r, 2),
              i = n[0],
              s = n[1];
            t.push("".concat(i, ":").concat(s));
          }),
          t
        );
      }
      function pa(e, t) {
        var r = Oa(e, t);
        if (r) throw new Error(r.message);
        for (var n = {}, i = 0, s = Object.entries(e); i < s.length; i++) {
          var o = (0, y.Z)(s[i], 2),
            a = o[0],
            c = o[1];
          n[a] = {
            methods: c.methods,
            events: c.events,
            chains: c.accounts.map(function (e) {
              return "".concat(e.split(":")[0], ":").concat(e.split(":")[1]);
            }),
          };
        }
        return n;
      }
      var ha = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        da = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function va(e, t) {
        var r = da[e],
          n = r.message,
          i = r.code;
        return { message: t ? "".concat(n, " ").concat(t) : n, code: i };
      }
      function ga(e, t) {
        var r = ha[e],
          n = r.message,
          i = r.code;
        return { message: t ? "".concat(n, " ").concat(t) : n, code: i };
      }
      function ya(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function ma(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function ba(e) {
        return typeof e > "u";
      }
      function wa(e, t) {
        return (
          !(!t || !ba(e)) || ("string" == typeof e && Boolean(e.trim().length))
        );
      }
      function _a(e, t) {
        return !(!t || !ba(e)) || ("number" == typeof e && !isNaN(e));
      }
      function Ea(e) {
        return !(!wa(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function xa(e) {
        var t = !0;
        return (
          ya(e)
            ? e.length &&
              (t = e.every(function (e) {
                return wa(e, !1);
              }))
            : (t = !1),
          t
        );
      }
      function ka(e, t) {
        var r = null;
        return (
          Object.entries(e).forEach(function (e) {
            var n = (0, y.Z)(e, 2),
              i = n[0],
              s = n[1];
            if (!r) {
              var o = (function (e, t, r) {
                var n = null;
                return (
                  ya(t)
                    ? t.forEach(function (t) {
                        n ||
                          ((!Ea(t) || !t.includes(e)) &&
                            (n = ga(
                              "UNSUPPORTED_CHAINS",
                              ""
                                .concat(r, ", chain ")
                                .concat(
                                  t,
                                  ' should be a string and conform to "namespace:chainId" format'
                                )
                            )));
                      })
                    : (n = ga(
                        "UNSUPPORTED_CHAINS",
                        ""
                          .concat(r, ", chains ")
                          .concat(
                            t,
                            ' should be an array of strings conforming to "namespace:chainId" format'
                          )
                      )),
                  n
                );
              })(
                i,
                null === s || void 0 === s ? void 0 : s.chains,
                "".concat(t, " requiredNamespace")
              );
              o && (r = o);
            }
          }),
          r
        );
      }
      function Sa(e, t) {
        var r = null;
        return (
          ya(e)
            ? e.forEach(function (e) {
                r ||
                  (function (e) {
                    if (wa(e, !1) && e.includes(":")) {
                      var t = e.split(":");
                      if (3 === t.length) {
                        var r = t[0] + ":" + t[1];
                        return !!t[2] && Ea(r);
                      }
                    }
                    return !1;
                  })(e) ||
                  (r = ga(
                    "UNSUPPORTED_ACCOUNTS",
                    ""
                      .concat(t, ", account ")
                      .concat(
                        e,
                        ' should be a string and conform to "namespace:chainId:address" format'
                      )
                  ));
              })
            : (r = ga(
                "UNSUPPORTED_ACCOUNTS",
                "".concat(
                  t,
                  ', accounts should be an array of strings conforming to "namespace:chainId:address" format'
                )
              )),
          r
        );
      }
      function Za(e, t) {
        var r = null;
        return (
          Object.values(e).forEach(function (e) {
            if (!r) {
              var n = (function (e, t) {
                var r = null;
                return (
                  xa(null === e || void 0 === e ? void 0 : e.methods)
                    ? xa(null === e || void 0 === e ? void 0 : e.events) ||
                      (r = ga(
                        "UNSUPPORTED_EVENTS",
                        "".concat(
                          t,
                          ", events should be an array of strings or empty array for no events"
                        )
                      ))
                    : (r = ga(
                        "UNSUPPORTED_METHODS",
                        "".concat(
                          t,
                          ", methods should be an array of strings or empty array for no methods"
                        )
                      )),
                  r
                );
              })(e, "".concat(t, ", namespace"));
              n && (r = n);
            }
          }),
          r
        );
      }
      function Ia(e, t) {
        var r = null;
        if (e && ma(e)) {
          var n = Za(e, t);
          n && (r = n);
          var i = ka(e, t);
          i && (r = i);
        } else
          r = va(
            "MISSING_OR_INVALID",
            "".concat(t, ", requiredNamespaces should be an object with data")
          );
        return r;
      }
      function Oa(e, t) {
        var r = null;
        if (e && ma(e)) {
          var n = Za(e, t);
          n && (r = n);
          var i = (function (e, t) {
            var r = null;
            return (
              Object.values(e).forEach(function (e) {
                if (!r) {
                  var n = Sa(
                    null === e || void 0 === e ? void 0 : e.accounts,
                    "".concat(t, " namespace")
                  );
                  n && (r = n);
                }
              }),
              r
            );
          })(e, t);
          i && (r = i);
        } else
          r = va(
            "MISSING_OR_INVALID",
            "".concat(t, ", namespaces should be an object with data")
          );
        return r;
      }
      function Na(e) {
        return wa(e.protocol, !0);
      }
      function Pa(e, t) {
        var r = !1;
        return (
          t && !e
            ? (r = !0)
            : e &&
              ya(e) &&
              e.length &&
              e.forEach(function (e) {
                r = Na(e);
              }),
          r
        );
      }
      function Aa(e) {
        return "number" == typeof e;
      }
      function Ra(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function Ua(e) {
        return !(
          !e ||
          "object" != typeof e ||
          !e.code ||
          !_a(e.code, !1) ||
          !e.message ||
          !wa(e.message, !1)
        );
      }
      function Ta(e) {
        return !(ba(e) || !wa(e.method, !1));
      }
      function Ca(e) {
        return !(
          ba(e) ||
          (ba(e.result) && ba(e.error)) ||
          !_a(e.id, !1) ||
          !wa(e.jsonrpc, !1)
        );
      }
      function ja(e) {
        return !(ba(e) || !wa(e.name, !1));
      }
      function La(e, t) {
        return !(
          !Ea(t) ||
          !(function (e) {
            var t = [];
            return (
              Object.values(e).forEach(function (e) {
                t.push.apply(t, (0, Z.Z)(la(e.accounts)));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function Da(e, t, r) {
        return (
          !!wa(r, !1) &&
          (function (e, t) {
            var r = [];
            return (
              Object.values(e).forEach(function (e) {
                la(e.accounts).includes(t) &&
                  r.push.apply(r, (0, Z.Z)(e.methods));
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function Ma(e, t, r) {
        return (
          !!wa(r, !1) &&
          (function (e, t) {
            var r = [];
            return (
              Object.values(e).forEach(function (e) {
                la(e.accounts).includes(t) &&
                  r.push.apply(r, (0, Z.Z)(e.events));
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function za(e, t, r) {
        var n = null,
          i = Object.keys(e);
        return (
          sa(i, Object.keys(t))
            ? i.forEach(function (i) {
                n ||
                  (sa(e[i].chains, la(t[i].accounts))
                    ? sa(e[i].methods, t[i].methods)
                      ? sa(e[i].events, t[i].events) ||
                        (n = va(
                          "NON_CONFORMING_NAMESPACES",
                          ""
                            .concat(
                              r,
                              " namespaces events don't satisfy requiredNamespaces events for "
                            )
                            .concat(i)
                        ))
                      : (n = va(
                          "NON_CONFORMING_NAMESPACES",
                          ""
                            .concat(
                              r,
                              " namespaces methods don't satisfy requiredNamespaces methods for "
                            )
                            .concat(i)
                        ))
                    : (n = va(
                        "NON_CONFORMING_NAMESPACES",
                        ""
                          .concat(
                            r,
                            " namespaces accounts don't satisfy requiredNamespaces chains for "
                          )
                          .concat(i)
                      )));
              })
            : (n = va(
                "NON_CONFORMING_NAMESPACES",
                "".concat(
                  r,
                  " namespaces keys don't satisfy requiredNamespaces"
                )
              )),
          n
        );
      }
      function qa(e, t) {
        return _a(e, !1) && e <= t.max && e >= t.min;
      }
      var Ha = "wc",
        Va = 2,
        Ka = "client",
        Ba = "".concat(Ha, "@").concat(Va, ":").concat(Ka, ":"),
        Fa = {
          name: Ka,
          logger: "error",
          controller: !1,
          relayUrl: "wss://relay.walletconnect.com",
        },
        Wa = "proposal",
        Ga = (G.THIRTY_DAYS, "session"),
        Ya = G.SEVEN_DAYS,
        Ja = "engine",
        Xa = {
          wc_sessionPropose: {
            req: { ttl: G.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: G.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: G.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: G.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: G.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: G.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: G.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: G.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: G.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: G.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: G.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: G.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: G.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: G.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: G.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: G.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        Qa = { min: G.FIVE_MINUTES, max: G.SEVEN_DAYS },
        $a = "request",
        ec = Object.defineProperty,
        tc = Object.defineProperties,
        rc = Object.getOwnPropertyDescriptors,
        nc = Object.getOwnPropertySymbols,
        ic = Object.prototype.hasOwnProperty,
        sc = Object.prototype.propertyIsEnumerable,
        oc = function (e, t, r) {
          return t in e
            ? ec(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        ac = function (e, t) {
          for (var r in t || (t = {})) ic.call(t, r) && oc(e, r, t[r]);
          if (nc) {
            var n,
              i = (0, m.Z)(nc(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                sc.call(t, r) && oc(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        cc = function (e, t) {
          return tc(e, rc(t));
        },
        uc = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e) {
            var n;
            return (
              (0, _.Z)(this, r),
              ((n = t.call(this, e)).name = Ja),
              (n.events = new (R())()),
              (n.initialized = !1),
              (n.ignoredPayloadTypes = [ia]),
              (n.init = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = n.initialized), e.t0)) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 4), n.cleanup();
                        case 4:
                          n.registerRelayerEvents(),
                            n.registerExpirerEvents(),
                            n.client.core.pairing.register({
                              methods: Object.keys(Xa),
                            }),
                            (n.initialized = !0);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.connect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f, l, p, h, d, v, g, y, m, _, E, x;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidConnect(t)
                            );
                          case 3:
                            if (
                              ((r = t.pairingTopic),
                              (i = t.requiredNamespaces),
                              (s = t.relays),
                              (c = !1),
                              (o = r) &&
                                (c =
                                  n.client.core.pairing.pairings.get(o).active),
                              o && c)
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (e.next = 8), n.client.core.pairing.create();
                          case 8:
                            (u = e.sent),
                              (f = u.topic),
                              (l = u.uri),
                              (o = f),
                              (a = l);
                          case 12:
                            return (
                              (e.next = 14),
                              n.client.core.crypto.generateKeyPair()
                            );
                          case 14:
                            if (
                              ((p = e.sent),
                              (h = {
                                requiredNamespaces: i,
                                relays:
                                  null !== s && void 0 !== s
                                    ? s
                                    : [{ protocol: qs }],
                                proposer: {
                                  publicKey: p,
                                  metadata: n.client.metadata,
                                },
                              }),
                              (d = ca()),
                              (v = d.reject),
                              (g = d.resolve),
                              (y = d.done),
                              n.events.once(
                                fa("session_connect"),
                                (function () {
                                  var e = (0, w.Z)(
                                    (0, b.Z)().mark(function e(t) {
                                      var r, i, s;
                                      return (0, b.Z)().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((r = t.error),
                                                (i = t.session),
                                                !r)
                                              ) {
                                                e.next = 5;
                                                break;
                                              }
                                              v(r), (e.next = 17);
                                              break;
                                            case 5:
                                              if (!i) {
                                                e.next = 17;
                                                break;
                                              }
                                              return (
                                                (i.self.publicKey = p),
                                                (s = cc(ac({}, i), {
                                                  requiredNamespaces:
                                                    i.requiredNamespaces,
                                                })),
                                                (e.next = 10),
                                                n.client.session.set(i.topic, s)
                                              );
                                            case 10:
                                              return (
                                                (e.next = 12),
                                                n.setExpiry(i.topic, i.expiry)
                                              );
                                            case 12:
                                              if (((e.t0 = o), !e.t0)) {
                                                e.next = 16;
                                                break;
                                              }
                                              return (
                                                (e.next = 16),
                                                n.client.core.pairing.updateMetadata(
                                                  {
                                                    topic: o,
                                                    metadata: i.peer.metadata,
                                                  }
                                                )
                                              );
                                            case 16:
                                              g(s);
                                            case 17:
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
                              ),
                              o)
                            ) {
                              e.next = 23;
                              break;
                            }
                            throw (
                              ((m = va(
                                "NO_MATCHING_KEY",
                                "connect() pairing topic: ".concat(o)
                              )),
                              (_ = m.message),
                              new Error(_))
                            );
                          case 23:
                            return (
                              (e.next = 25),
                              n.sendRequest(o, "wc_sessionPropose", h)
                            );
                          case 25:
                            return (
                              (E = e.sent),
                              (x = oa(G.FIVE_MINUTES)),
                              (e.next = 29),
                              n.setProposal(E, ac({ id: E, expiry: x }, h))
                            );
                          case 29:
                            return e.abrupt("return", { uri: a, approval: y });
                          case 30:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.pair = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.client.core.pairing.pair(t)
                            );
                          case 3:
                            return e.abrupt("return", e.sent);
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
              })()),
              (n.approve = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f, l, p, h, d, v, g, y, m, w;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidApprove(t)
                            );
                          case 3:
                            return (
                              (r = t.id),
                              (i = t.relayProtocol),
                              (s = t.namespaces),
                              (o = n.client.proposal.get(r)),
                              (a = o.pairingTopic),
                              (c = o.proposer),
                              ma((u = o.requiredNamespaces)) ||
                                ((u = pa(s, "approve()")),
                                n.client.proposal.set(
                                  r,
                                  cc(ac({}, o), { requiredNamespaces: u })
                                )),
                              (e.next = 8),
                              n.client.core.crypto.generateKeyPair()
                            );
                          case 8:
                            return (
                              (f = e.sent),
                              (l = c.publicKey),
                              (e.next = 12),
                              n.client.core.crypto.generateSharedKey(f, l)
                            );
                          case 12:
                            return (
                              (p = e.sent),
                              (h = {
                                relay: {
                                  protocol:
                                    null !== i && void 0 !== i ? i : "irn",
                                },
                                namespaces: s,
                                requiredNamespaces: u,
                                controller: {
                                  publicKey: f,
                                  metadata: n.client.metadata,
                                },
                                expiry: oa(Ya),
                              }),
                              (e.next = 16),
                              n.client.core.relayer.subscribe(p)
                            );
                          case 16:
                            return (
                              (e.next = 18),
                              n.sendRequest(p, "wc_sessionSettle", h)
                            );
                          case 18:
                            return (
                              (d = e.sent),
                              (v = ca()),
                              (g = v.done),
                              (y = v.resolve),
                              (m = v.reject),
                              n.events.once(
                                fa("session_approve", d),
                                function (e) {
                                  var t = e.error;
                                  t ? m(t) : y(n.client.session.get(p));
                                }
                              ),
                              (w = cc(ac({}, h), {
                                topic: p,
                                acknowledged: !1,
                                self: h.controller,
                                peer: {
                                  publicKey: c.publicKey,
                                  metadata: c.metadata,
                                },
                                controller: f,
                              })),
                              (e.next = 27),
                              n.client.session.set(p, w)
                            );
                          case 27:
                            return (e.next = 29), n.setExpiry(p, oa(Ya));
                          case 29:
                            if (((e.t0 = a), !e.t0)) {
                              e.next = 33;
                              break;
                            }
                            return (
                              (e.next = 33),
                              n.client.core.pairing.updateMetadata({
                                topic: a,
                                metadata: w.peer.metadata,
                              })
                            );
                          case 33:
                            if (((e.t1 = a && r), !e.t1)) {
                              e.next = 41;
                              break;
                            }
                            return (
                              (e.next = 37),
                              n.sendResult(r, a, {
                                relay: {
                                  protocol:
                                    null !== i && void 0 !== i ? i : "irn",
                                },
                                responderPublicKey: f,
                              })
                            );
                          case 37:
                            return (
                              (e.next = 39),
                              n.client.proposal.delete(
                                r,
                                ga("USER_DISCONNECTED")
                              )
                            );
                          case 39:
                            return (
                              (e.next = 41),
                              n.client.core.pairing.activate({ topic: a })
                            );
                          case 41:
                            return e.abrupt("return", {
                              topic: p,
                              acknowledged: g,
                            });
                          case 42:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.reject = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidReject(t)
                            );
                          case 3:
                            if (
                              ((r = t.id),
                              (i = t.reason),
                              (s = n.client.proposal.get(r)),
                              (o = s.pairingTopic),
                              (e.t0 = o),
                              !e.t0)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 8), n.sendError(r, o, i);
                          case 8:
                            return (
                              (e.next = 10),
                              n.client.proposal.delete(
                                r,
                                ga("USER_DISCONNECTED")
                              )
                            );
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.update = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidUpdate(t)
                            );
                          case 3:
                            return (
                              (r = t.topic),
                              (i = t.namespaces),
                              (e.next = 7),
                              n.sendRequest(r, "wc_sessionUpdate", {
                                namespaces: i,
                              })
                            );
                          case 7:
                            return (
                              (s = e.sent),
                              (o = ca()),
                              (a = o.done),
                              (c = o.resolve),
                              (u = o.reject),
                              n.events.once(
                                fa("session_update", s),
                                function (e) {
                                  var t = e.error;
                                  t ? u(t) : c();
                                }
                              ),
                              (e.next = 15),
                              n.client.session.update(r, { namespaces: i })
                            );
                          case 15:
                            return e.abrupt("return", { acknowledged: a });
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
              })()),
              (n.extend = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidExtend(t)
                            );
                          case 3:
                            return (
                              (r = t.topic),
                              (e.next = 6),
                              n.sendRequest(r, "wc_sessionExtend", {})
                            );
                          case 6:
                            return (
                              (i = e.sent),
                              (s = ca()),
                              (o = s.done),
                              (a = s.resolve),
                              (c = s.reject),
                              n.events.once(
                                fa("session_extend", i),
                                function (e) {
                                  var t = e.error;
                                  t ? c(t) : a();
                                }
                              ),
                              (e.next = 14),
                              n.setExpiry(r, oa(Ya))
                            );
                          case 14:
                            return e.abrupt("return", { acknowledged: o });
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.request = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f, l;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidRequest(t)
                            );
                          case 3:
                            return (
                              (r = t.chainId),
                              (i = t.request),
                              (s = t.topic),
                              (o = t.expiry),
                              (e.next = 9),
                              n.sendRequest(
                                s,
                                "wc_sessionRequest",
                                { request: i, chainId: r },
                                o
                              )
                            );
                          case 9:
                            return (
                              (a = e.sent),
                              (c = ca(o)),
                              (u = c.done),
                              (f = c.resolve),
                              (l = c.reject),
                              n.events.once(
                                fa("session_request", a),
                                function (e) {
                                  var t = e.error,
                                    r = e.result;
                                  t ? l(t) : f(r);
                                }
                              ),
                              (e.next = 17),
                              u()
                            );
                          case 17:
                            return e.abrupt("return", e.sent);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.respond = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidRespond(t)
                            );
                          case 3:
                            if (
                              ((r = t.topic),
                              (i = t.response),
                              (s = i.id),
                              !(0, Hn.isJsonRpcResult)(i))
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 7), n.sendResult(s, r, i.result);
                          case 7:
                            e.next = 13;
                            break;
                          case 9:
                            if (((e.t0 = (0, Hn.isJsonRpcError)(i)), !e.t0)) {
                              e.next = 13;
                              break;
                            }
                            return (e.next = 13), n.sendError(s, r, i.error);
                          case 13:
                            n.deletePendingSessionRequest(t.response.id, {
                              message: "fulfilled",
                              code: 0,
                            });
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.ping = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(), (e.next = 3), n.isValidPing(t)
                            );
                          case 3:
                            if (
                              ((r = t.topic),
                              !n.client.session.keys.includes(r))
                            ) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (e.next = 7),
                              n.sendRequest(r, "wc_sessionPing", {})
                            );
                          case 7:
                            return (
                              (i = e.sent),
                              (s = ca()),
                              (o = s.done),
                              (a = s.resolve),
                              (c = s.reject),
                              n.events.once(
                                fa("session_ping", i),
                                function (e) {
                                  var t = e.error;
                                  t ? c(t) : a();
                                }
                              ),
                              (e.next = 15),
                              o()
                            );
                          case 15:
                            e.next = 21;
                            break;
                          case 17:
                            if (
                              ((e.t0 =
                                n.client.core.pairing.pairings.keys.includes(
                                  r
                                )),
                              !e.t0)
                            ) {
                              e.next = 21;
                              break;
                            }
                            return (
                              (e.next = 21),
                              n.client.core.pairing.ping({ topic: r })
                            );
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.emit = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(), (e.next = 3), n.isValidEmit(t)
                            );
                          case 3:
                            return (
                              (r = t.topic),
                              (i = t.event),
                              (s = t.chainId),
                              (e.next = 6),
                              n.sendRequest(r, "wc_sessionEvent", {
                                event: i,
                                chainId: s,
                              })
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.disconnect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidDisconnect(t)
                            );
                          case 3:
                            if (
                              ((r = t.topic),
                              !n.client.session.keys.includes(r))
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (
                              (e.next = 7),
                              n.sendRequest(
                                r,
                                "wc_sessionDelete",
                                ga("USER_DISCONNECTED")
                              )
                            );
                          case 7:
                            return (e.next = 9), n.deleteSession(r);
                          case 9:
                            e.next = 13;
                            break;
                          case 11:
                            return (
                              (e.next = 13),
                              n.client.core.pairing.disconnect({ topic: r })
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.find = function (e) {
                return (
                  n.isInitialized(),
                  n.client.session.getAll().filter(function (t) {
                    return (function (e, t) {
                      var r = t.requiredNamespaces,
                        n = Object.keys(e.namespaces),
                        i = Object.keys(r),
                        s = !0;
                      return (
                        !!sa(i, n) &&
                        (n.forEach(function (t) {
                          var n = e.namespaces[t],
                            i = n.accounts,
                            o = n.methods,
                            a = n.events,
                            c = la(i),
                            u = r[t];
                          (!sa(u.chains, c) ||
                            !sa(u.methods, o) ||
                            !sa(u.events, a)) &&
                            (s = !1);
                        }),
                        s)
                      );
                    })(t, e);
                  })
                );
              }),
              (n.getPendingSessionRequests = function () {
                return n.isInitialized(), n.client.pendingRequest.getAll();
              }),
              (n.deleteSession = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = n.client.session.get(t)),
                              (s = i.self),
                              (e.next = 3),
                              n.client.core.relayer.unsubscribe(t)
                            );
                          case 3:
                            return (
                              (e.next = 5),
                              Promise.all([
                                n.client.session.delete(
                                  t,
                                  ga("USER_DISCONNECTED")
                                ),
                                n.client.core.crypto.deleteKeyPair(s.publicKey),
                                n.client.core.crypto.deleteSymKey(t),
                                r
                                  ? Promise.resolve()
                                  : n.client.core.expirer.del(t),
                              ])
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.deleteProposal = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Promise.all([
                                n.client.proposal.delete(
                                  t,
                                  ga("USER_DISCONNECTED")
                                ),
                                r
                                  ? Promise.resolve()
                                  : n.client.core.expirer.del(t),
                              ])
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.deletePendingSessionRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i,
                      s = arguments;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = s.length > 2 && void 0 !== s[2] && s[2]),
                              (e.next = 3),
                              Promise.all([
                                n.client.pendingRequest.delete(t, r),
                                i
                                  ? Promise.resolve()
                                  : n.client.core.expirer.del(t),
                              ])
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.setExpiry = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.t0 = n.client.session.keys.includes(t)),
                              !e.t0)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (
                              (e.next = 4),
                              n.client.session.update(t, { expiry: r })
                            );
                          case 4:
                            n.client.core.expirer.set(t, r);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.setProposal = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.client.proposal.set(t, r);
                          case 2:
                            n.client.core.expirer.set(t, r.expiry);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.setPendingSessionRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = Xa.wc_sessionRequest.req.ttl),
                              (i = t.id),
                              (s = t.topic),
                              (o = t.params),
                              (e.next = 3),
                              n.client.pendingRequest.set(i, {
                                id: i,
                                topic: s,
                                params: o,
                              })
                            );
                          case 3:
                            r && n.client.core.expirer.set(i, oa(r));
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
              })()),
              (n.sendRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, i, s) {
                    var o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (o = (0, Hn.formatJsonRpcRequest)(r, i)),
                              (e.next = 3),
                              n.client.core.crypto.encode(t, o)
                            );
                          case 3:
                            return (
                              (a = e.sent),
                              (c = Xa[r].req),
                              e.abrupt(
                                "return",
                                (s && (c.ttl = s),
                                n.client.core.history.set(t, o),
                                n.client.core.relayer.publish(t, a, c),
                                o.id)
                              )
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n, i) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.sendResult = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, i) {
                    var s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, Hn.formatJsonRpcResult)(t, i)),
                              (e.next = 3),
                              n.client.core.crypto.encode(r, s)
                            );
                          case 3:
                            return (
                              (o = e.sent),
                              (e.next = 6),
                              n.client.core.history.get(r, t)
                            );
                          case 6:
                            return (
                              (a = e.sent),
                              (c = Xa[a.request.method].res),
                              n.client.core.relayer.publish(r, o, c),
                              (e.next = 11),
                              n.client.core.history.resolve(s)
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.sendError = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r, i) {
                    var s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, Hn.formatJsonRpcError)(t, i)),
                              (e.next = 3),
                              n.client.core.crypto.encode(r, s)
                            );
                          case 3:
                            return (
                              (o = e.sent),
                              (e.next = 6),
                              n.client.core.history.get(r, t)
                            );
                          case 6:
                            return (
                              (a = e.sent),
                              (c = Xa[a.request.method].res),
                              n.client.core.relayer.publish(r, o, c),
                              (e.next = 11),
                              n.client.core.history.resolve(s)
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.cleanup = (0, w.Z)(
                (0, b.Z)().mark(function e() {
                  var t, r;
                  return (0, b.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            (r = []),
                            n.client.session.getAll().forEach(function (e) {
                              aa(e.expiry) && t.push(e.topic);
                            }),
                            n.client.proposal.getAll().forEach(function (e) {
                              aa(e.expiry) && r.push(e.id);
                            }),
                            (e.next = 5),
                            Promise.all(
                              [].concat(
                                (0, Z.Z)(
                                  t.map(function (e) {
                                    return n.deleteSession(e);
                                  })
                                ),
                                (0, Z.Z)(
                                  r.map(function (e) {
                                    return n.deleteProposal(e);
                                  })
                                )
                              )
                            )
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.onRelayEventRequest = function (e) {
                var t = e.topic,
                  r = e.payload,
                  i = r.method;
                switch (i) {
                  case "wc_sessionPropose":
                    return n.onSessionProposeRequest(t, r);
                  case "wc_sessionSettle":
                    return n.onSessionSettleRequest(t, r);
                  case "wc_sessionUpdate":
                    return n.onSessionUpdateRequest(t, r);
                  case "wc_sessionExtend":
                    return n.onSessionExtendRequest(t, r);
                  case "wc_sessionPing":
                    return n.onSessionPingRequest(t, r);
                  case "wc_sessionDelete":
                    return n.onSessionDeleteRequest(t, r);
                  case "wc_sessionRequest":
                    return n.onSessionRequest(t, r);
                  case "wc_sessionEvent":
                    return n.onSessionEventRequest(t, r);
                  default:
                    return n.client.logger.info(
                      "Unsupported request method ".concat(i)
                    );
                }
              }),
              (n.onRelayEventResponse = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.topic),
                              (i = t.payload),
                              (e.next = 4),
                              n.client.core.history.get(r, i.id)
                            );
                          case 4:
                            (s = e.sent.request.method),
                              (e.t0 = s),
                              (e.next =
                                "wc_sessionPropose" === e.t0
                                  ? 8
                                  : "wc_sessionSettle" === e.t0
                                  ? 9
                                  : "wc_sessionUpdate" === e.t0
                                  ? 10
                                  : "wc_sessionExtend" === e.t0
                                  ? 11
                                  : "wc_sessionPing" === e.t0
                                  ? 12
                                  : "wc_sessionRequest" === e.t0
                                  ? 13
                                  : 14);
                            break;
                          case 8:
                            return e.abrupt(
                              "return",
                              n.onSessionProposeResponse(r, i)
                            );
                          case 9:
                            return e.abrupt(
                              "return",
                              n.onSessionSettleResponse(r, i)
                            );
                          case 10:
                            return e.abrupt(
                              "return",
                              n.onSessionUpdateResponse(r, i)
                            );
                          case 11:
                            return e.abrupt(
                              "return",
                              n.onSessionExtendResponse(r, i)
                            );
                          case 12:
                            return e.abrupt(
                              "return",
                              n.onSessionPingResponse(r, i)
                            );
                          case 13:
                            return e.abrupt(
                              "return",
                              n.onSessionRequestResponse(r, i)
                            );
                          case 14:
                            return e.abrupt(
                              "return",
                              n.client.logger.info(
                                "Unsupported response method ".concat(s)
                              )
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionProposeRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s, o, a;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.params),
                                (s = r.id),
                                (e.prev = 1),
                                n.isValidConnect(ac({}, r.params)),
                                (o = oa(G.FIVE_MINUTES)),
                                (a = ac(
                                  { id: s, pairingTopic: t, expiry: o },
                                  i
                                )),
                                (e.next = 6),
                                n.setProposal(s, a)
                              );
                            case 6:
                              n.client.events.emit("session_proposal", {
                                id: s,
                                params: a,
                              }),
                                (e.next = 14);
                              break;
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                (e.next = 13),
                                n.sendError(s, t, e.t0)
                              );
                            case 13:
                              n.client.logger.error(e.t0);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionProposeResponse = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s, o, a, c, u, f;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((i = r.id), !(0, Hn.isJsonRpcResult)(r))) {
                              e.next = 22;
                              break;
                            }
                            return (
                              (s = r.result),
                              n.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: s,
                              }),
                              (o = n.client.proposal.get(i)),
                              n.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: o,
                              }),
                              (a = o.proposer.publicKey),
                              n.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: a,
                              }),
                              (c = s.responderPublicKey),
                              n.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: c,
                              }),
                              (e.next = 12),
                              n.client.core.crypto.generateSharedKey(a, c)
                            );
                          case 12:
                            return (
                              (u = e.sent),
                              n.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: u,
                              }),
                              (e.next = 16),
                              n.client.core.relayer.subscribe(u)
                            );
                          case 16:
                            return (
                              (f = e.sent),
                              n.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: f,
                              }),
                              (e.next = 20),
                              n.client.core.pairing.activate({ topic: t })
                            );
                          case 20:
                            e.next = 27;
                            break;
                          case 22:
                            if (((e.t0 = (0, Hn.isJsonRpcError)(r)), !e.t0)) {
                              e.next = 27;
                              break;
                            }
                            return (
                              (e.next = 26),
                              n.client.proposal.delete(
                                i,
                                ga("USER_DISCONNECTED")
                              )
                            );
                          case 26:
                            n.events.emit(fa("session_connect"), {
                              error: r.error,
                            });
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionSettleRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s, o, a, c, u, f, l, p;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (s = r.params),
                                (e.prev = 1),
                                n.isValidSessionSettleRequest(s),
                                (o = r.params),
                                (a = o.relay),
                                (c = o.controller),
                                (u = o.expiry),
                                (f = o.namespaces),
                                (l = o.requiredNamespaces),
                                (p = {
                                  topic: t,
                                  relay: a,
                                  expiry: u,
                                  namespaces: f,
                                  acknowledged: !0,
                                  requiredNamespaces: l,
                                  controller: c.publicKey,
                                  self: {
                                    publicKey: "",
                                    metadata: n.client.metadata,
                                  },
                                  peer: {
                                    publicKey: c.publicKey,
                                    metadata: c.metadata,
                                  },
                                }),
                                (e.next = 6),
                                n.sendResult(r.id, t, !0)
                              );
                            case 6:
                              n.events.emit(fa("session_connect"), {
                                session: p,
                              }),
                                (e.next = 14);
                              break;
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                (e.next = 13),
                                n.sendError(i, t, e.t0)
                              );
                            case 13:
                              n.client.logger.error(e.t0);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionSettleResponse = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((i = r.id), !(0, Hn.isJsonRpcResult)(r))) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 4),
                              n.client.session.update(t, { acknowledged: !0 })
                            );
                          case 4:
                            n.events.emit(fa("session_approve", i), {}),
                              (e.next = 12);
                            break;
                          case 7:
                            if (((e.t0 = (0, Hn.isJsonRpcError)(r)), !e.t0)) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (e.next = 11),
                              n.client.session.delete(
                                t,
                                ga("USER_DISCONNECTED")
                              )
                            );
                          case 11:
                            n.events.emit(fa("session_approve", i), {
                              error: r.error,
                            });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionUpdateRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.params),
                                (s = r.id),
                                (e.prev = 1),
                                n.isValidUpdate(ac({ topic: t }, i)),
                                (e.next = 5),
                                n.client.session.update(t, {
                                  namespaces: i.namespaces,
                                })
                              );
                            case 5:
                              return (e.next = 7), n.sendResult(s, t, !0);
                            case 7:
                              n.client.events.emit("session_update", {
                                id: s,
                                topic: t,
                                params: i,
                              }),
                                (e.next = 15);
                              break;
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                (e.next = 14),
                                n.sendError(s, t, e.t0)
                              );
                            case 14:
                              n.client.logger.error(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionUpdateResponse = function (e, t) {
                var r = t.id;
                (0, Hn.isJsonRpcResult)(t)
                  ? n.events.emit(fa("session_update", r), {})
                  : (0, Hn.isJsonRpcError)(t) &&
                    n.events.emit(fa("session_update", r), { error: t.error });
              }),
              (n.onSessionExtendRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidExtend({ topic: t }),
                                (e.next = 5),
                                n.setExpiry(t, oa(Ya))
                              );
                            case 5:
                              return (e.next = 7), n.sendResult(i, t, !0);
                            case 7:
                              n.client.events.emit("session_extend", {
                                id: i,
                                topic: t,
                              }),
                                (e.next = 15);
                              break;
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                (e.next = 14),
                                n.sendError(i, t, e.t0)
                              );
                            case 14:
                              n.client.logger.error(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionExtendResponse = function (e, t) {
                var r = t.id;
                (0, Hn.isJsonRpcResult)(t)
                  ? n.events.emit(fa("session_extend", r), {})
                  : (0, Hn.isJsonRpcError)(t) &&
                    n.events.emit(fa("session_extend", r), { error: t.error });
              }),
              (n.onSessionPingRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidPing({ topic: t }),
                                (e.next = 5),
                                n.sendResult(i, t, !0)
                              );
                            case 5:
                              n.client.events.emit("session_ping", {
                                id: i,
                                topic: t,
                              }),
                                (e.next = 13);
                              break;
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                (e.next = 12),
                                n.sendError(i, t, e.t0)
                              );
                            case 12:
                              n.client.logger.error(e.t0);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionPingResponse = function (e, t) {
                var r = t.id;
                setTimeout(function () {
                  (0, Hn.isJsonRpcResult)(t)
                    ? n.events.emit(fa("session_ping", r), {})
                    : (0, Hn.isJsonRpcError)(t) &&
                      n.events.emit(fa("session_ping", r), { error: t.error });
                }, 500);
              }),
              (n.onSessionDeleteRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidDisconnect({
                                  topic: t,
                                  reason: r.params,
                                }),
                                n.client.core.relayer.once(
                                  Bs.publish,
                                  (0, w.Z)(
                                    (0, b.Z)().mark(function e() {
                                      return (0, b.Z)().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2), n.deleteSession(t)
                                              );
                                            case 2:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )
                                ),
                                (e.next = 6),
                                n.sendResult(i, t, !0)
                              );
                            case 6:
                              n.client.events.emit("session_delete", {
                                id: i,
                                topic: t,
                              }),
                                (e.next = 14);
                              break;
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                (e.next = 13),
                                n.sendError(i, t, e.t0)
                              );
                            case 13:
                              n.client.logger.error(e.t0);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (s = r.params),
                                (e.prev = 1),
                                n.isValidRequest(ac({ topic: t }, s)),
                                (e.next = 5),
                                n.setPendingSessionRequest({
                                  id: i,
                                  topic: t,
                                  params: s,
                                })
                              );
                            case 5:
                              n.client.events.emit("session_request", {
                                id: i,
                                topic: t,
                                params: s,
                              }),
                                (e.next = 13);
                              break;
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                (e.next = 12),
                                n.sendError(i, t, e.t0)
                              );
                            case 12:
                              n.client.logger.error(e.t0);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.onSessionRequestResponse = function (e, t) {
                var r = t.id;
                (0, Hn.isJsonRpcResult)(t)
                  ? n.events.emit(fa("session_request", r), {
                      result: t.result,
                    })
                  : (0, Hn.isJsonRpcError)(t) &&
                    n.events.emit(fa("session_request", r), { error: t.error });
              }),
              (n.onSessionEventRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t, r) {
                    var i, s;
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (i = r.id),
                                (s = r.params),
                                (e.prev = 1),
                                n.isValidEmit(ac({ topic: t }, s)),
                                n.client.events.emit("session_event", {
                                  id: i,
                                  topic: t,
                                  params: s,
                                }),
                                (e.next = 10);
                              break;
                            case 5:
                              return (
                                (e.prev = 5),
                                (e.t0 = e.catch(1)),
                                (e.next = 9),
                                n.sendError(i, t, e.t0)
                              );
                            case 9:
                              n.client.logger.error(e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 5]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidConnect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "connect() params: ".concat(JSON.stringify(t))
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            if (
                              ((s = t.pairingTopic),
                              (o = t.requiredNamespaces),
                              (a = t.relays),
                              (e.t0 = ba(s)),
                              e.t0)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (e.next = 8), n.isValidPairingTopic(s);
                          case 8:
                            if (ba(o) || 0 !== ma(o)) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt("return");
                          case 10:
                            if (!(c = Ia(o, "connect()"))) {
                              e.next = 13;
                              break;
                            }
                            throw new Error(c.message);
                          case 13:
                            if (Pa(a, !0)) {
                              e.next = 16;
                              break;
                            }
                            throw (
                              ((u = va(
                                "MISSING_OR_INVALID",
                                "connect() relays: ".concat(a)
                              )),
                              (f = u.message),
                              new Error(f))
                            );
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
              })()),
              (n.isValidApprove = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 2;
                              break;
                            }
                            throw new Error(
                              va(
                                "MISSING_OR_INVALID",
                                "approve() params: ".concat(t)
                              ).message
                            );
                          case 2:
                            return (
                              (r = t.id),
                              (i = t.namespaces),
                              (s = t.relayProtocol),
                              (e.next = 5),
                              n.isValidProposalId(r)
                            );
                          case 5:
                            if (
                              ((o = n.client.proposal.get(r)),
                              !(a = Oa(i, "approve()")))
                            ) {
                              e.next = 8;
                              break;
                            }
                            throw new Error(a.message);
                          case 8:
                            if (
                              !(c = za(o.requiredNamespaces, i, "update()"))
                            ) {
                              e.next = 11;
                              break;
                            }
                            throw new Error(c.message);
                          case 11:
                            if (wa(s, !0)) {
                              e.next = 14;
                              break;
                            }
                            throw (
                              ((u = va(
                                "MISSING_OR_INVALID",
                                "approve() relayProtocol: ".concat(s)
                              )),
                              (f = u.message),
                              new Error(f))
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidReject = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "reject() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.id),
                              (o = t.reason),
                              (e.next = 6),
                              n.isValidProposalId(s)
                            );
                          case 6:
                            if (Ua(o)) {
                              e.next = 9;
                              break;
                            }
                            throw (
                              ((a = va(
                                "MISSING_OR_INVALID",
                                "reject() reason: ".concat(JSON.stringify(o))
                              )),
                              (c = a.message),
                              new Error(c))
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidSessionSettleRequest = function (e) {
                if (!Ra(e)) {
                  var t = va(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() params: ".concat(e)
                  ).message;
                  throw new Error(t);
                }
                var r = e.relay,
                  n = e.controller,
                  i = e.namespaces,
                  s = e.expiry;
                if (!Na(r)) {
                  var o = va(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() relay protocol should be a string"
                  ).message;
                  throw new Error(o);
                }
                var a = (function (e, t) {
                  var r = null;
                  return (
                    wa(null === e || void 0 === e ? void 0 : e.publicKey, !1) ||
                      (r = va(
                        "MISSING_OR_INVALID",
                        "".concat(
                          t,
                          " controller public key should be a string"
                        )
                      )),
                    r
                  );
                })(n, "onSessionSettleRequest()");
                if (a) throw new Error(a.message);
                var c = Oa(i, "onSessionSettleRequest()");
                if (c) throw new Error(c.message);
                if (aa(s)) {
                  var u = va("EXPIRED", "onSessionSettleRequest()").message;
                  throw new Error(u);
                }
              }),
              (n.isValidUpdate = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "update() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (o = t.namespaces),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            );
                          case 6:
                            if (
                              ((a = n.client.session.get(s)),
                              !(c = Oa(o, "update()")))
                            ) {
                              e.next = 9;
                              break;
                            }
                            throw new Error(c.message);
                          case 9:
                            if (
                              !(u = za(a.requiredNamespaces, o, "update()"))
                            ) {
                              e.next = 12;
                              break;
                            }
                            throw new Error(u.message);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidExtend = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "extend() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidRequest = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f, l, p, h, d, v, g, y, m;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "request() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (o = t.request),
                              (a = t.chainId),
                              (c = t.expiry),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            );
                          case 6:
                            if (
                              ((u = n.client.session.get(s)),
                              La((f = u.namespaces), a))
                            ) {
                              e.next = 10;
                              break;
                            }
                            throw (
                              ((l = va(
                                "MISSING_OR_INVALID",
                                "request() chainId: ".concat(a)
                              )),
                              (p = l.message),
                              new Error(p))
                            );
                          case 10:
                            if (Ta(o)) {
                              e.next = 13;
                              break;
                            }
                            throw (
                              ((h = va(
                                "MISSING_OR_INVALID",
                                "request() ".concat(JSON.stringify(o))
                              )),
                              (d = h.message),
                              new Error(d))
                            );
                          case 13:
                            if (Da(f, a, o.method)) {
                              e.next = 16;
                              break;
                            }
                            throw (
                              ((v = va(
                                "MISSING_OR_INVALID",
                                "request() method: ".concat(o.method)
                              )),
                              (g = v.message),
                              new Error(g))
                            );
                          case 16:
                            if (!c || qa(c, Qa)) {
                              e.next = 19;
                              break;
                            }
                            throw (
                              ((y = va(
                                "MISSING_OR_INVALID",
                                "request() expiry: "
                                  .concat(
                                    c,
                                    ". Expiry must be a number (in seconds) between "
                                  )
                                  .concat(Qa.min, " and ")
                                  .concat(Qa.max)
                              )),
                              (m = y.message),
                              new Error(m))
                            );
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidRespond = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "respond() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (o = t.response),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            );
                          case 6:
                            if (Ca(o)) {
                              e.next = 9;
                              break;
                            }
                            throw (
                              ((a = va(
                                "MISSING_OR_INVALID",
                                "respond() response: ".concat(JSON.stringify(o))
                              )),
                              (c = a.message),
                              new Error(c))
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidPing = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "ping() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidSessionOrPairingTopic(s)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isValidEmit = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s, o, a, c, u, f, l, p, h, d, v;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "emit() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (o = t.event),
                              (a = t.chainId),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            );
                          case 6:
                            if (
                              ((c = n.client.session.get(s)),
                              La((u = c.namespaces), a))
                            ) {
                              e.next = 10;
                              break;
                            }
                            throw (
                              ((f = va(
                                "MISSING_OR_INVALID",
                                "emit() chainId: ".concat(a)
                              )),
                              (l = f.message),
                              new Error(l))
                            );
                          case 10:
                            if (ja(o)) {
                              e.next = 13;
                              break;
                            }
                            throw (
                              ((p = va(
                                "MISSING_OR_INVALID",
                                "emit() event: ".concat(JSON.stringify(o))
                              )),
                              (h = p.message),
                              new Error(h))
                            );
                          case 13:
                            if (Ma(u, a, o.name)) {
                              e.next = 16;
                              break;
                            }
                            throw (
                              ((d = va(
                                "MISSING_OR_INVALID",
                                "emit() event: ".concat(JSON.stringify(o))
                              )),
                              (v = d.message),
                              new Error(v))
                            );
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
              })()),
              (n.isValidDisconnect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    var r, i, s;
                    return (0, b.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ra(t)) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              ((r = va(
                                "MISSING_OR_INVALID",
                                "disconnect() params: ".concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            );
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidSessionOrPairingTopic(s)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              n
            );
          }
          return (
            (0, E.Z)(r, [
              {
                key: "isInitialized",
                value: function () {
                  if (!this.initialized) {
                    var e = va("NOT_INITIALIZED", this.name).message;
                    throw new Error(e);
                  }
                },
              },
              {
                key: "registerRelayerEvents",
                value: function () {
                  var e = this;
                  this.client.core.relayer.on(
                    Bs.message,
                    (function () {
                      var t = (0, w.Z)(
                        (0, b.Z)().mark(function t(r) {
                          var n, i, s;
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.topic),
                                    (i = r.message),
                                    !e.ignoredPayloadTypes.includes(
                                      e.client.core.crypto.getPayloadType(i)
                                    ))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 3:
                                  return (
                                    (t.next = 5),
                                    e.client.core.crypto.decode(n, i)
                                  );
                                case 5:
                                  if (
                                    ((s = t.sent), !(0, Hn.isJsonRpcRequest)(s))
                                  ) {
                                    t.next = 10;
                                    break;
                                  }
                                  e.client.core.history.set(n, s),
                                    e.onRelayEventRequest({
                                      topic: n,
                                      payload: s,
                                    }),
                                    (t.next = 15);
                                  break;
                                case 10:
                                  if (
                                    ((t.t0 = (0, Hn.isJsonRpcResponse)(s)),
                                    !t.t0)
                                  ) {
                                    t.next = 15;
                                    break;
                                  }
                                  return (
                                    (t.next = 14),
                                    e.client.core.history.resolve(s)
                                  );
                                case 14:
                                  e.onRelayEventResponse({
                                    topic: n,
                                    payload: s,
                                  });
                                case 15:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: "registerExpirerEvents",
                value: function () {
                  var e = this;
                  this.client.core.expirer.on(
                    po.expired,
                    (function () {
                      var t = (0, w.Z)(
                        (0, b.Z)().mark(function t(r) {
                          var n, i, s;
                          return (0, b.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = ua(r.target)),
                                    (i = n.topic),
                                    !(s = n.id) ||
                                      !e.client.pendingRequest.keys.includes(s))
                                  ) {
                                    t.next = 5;
                                    break;
                                  }
                                  return (
                                    (t.next = 4),
                                    e.deletePendingSessionRequest(
                                      s,
                                      va("EXPIRED"),
                                      !0
                                    )
                                  );
                                case 4:
                                  return t.abrupt("return", t.sent);
                                case 5:
                                  if (!i) {
                                    t.next = 13;
                                    break;
                                  }
                                  if (
                                    ((t.t0 = e.client.session.keys.includes(i)),
                                    !t.t0)
                                  ) {
                                    t.next = 11;
                                    break;
                                  }
                                  return (t.next = 10), e.deleteSession(i, !0);
                                case 10:
                                  e.client.events.emit("session_expire", {
                                    topic: i,
                                  });
                                case 11:
                                  t.next = 18;
                                  break;
                                case 13:
                                  if (((t.t1 = s), !t.t1)) {
                                    t.next = 18;
                                    break;
                                  }
                                  return (t.next = 17), e.deleteProposal(s, !0);
                                case 17:
                                  e.client.events.emit("proposal_expire", {
                                    id: s,
                                  });
                                case 18:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: "isValidPairingTopic",
                value: function (e) {
                  if (!wa(e, !1)) {
                    var t = va(
                      "MISSING_OR_INVALID",
                      "pairing topic should be a string: ".concat(e)
                    ).message;
                    throw new Error(t);
                  }
                  if (!this.client.core.pairing.pairings.keys.includes(e)) {
                    var r = va(
                      "NO_MATCHING_KEY",
                      "pairing topic doesn't exist: ".concat(e)
                    ).message;
                    throw new Error(r);
                  }
                  if (aa(this.client.core.pairing.pairings.get(e).expiry)) {
                    var n = va("EXPIRED", "pairing topic: ".concat(e)).message;
                    throw new Error(n);
                  }
                },
              },
              {
                key: "isValidSessionTopic",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n, i, s, o, a;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (wa(t, !1)) {
                                  e.next = 3;
                                  break;
                                }
                                throw (
                                  ((r = va(
                                    "MISSING_OR_INVALID",
                                    "session topic should be a string: ".concat(
                                      t
                                    )
                                  )),
                                  (n = r.message),
                                  new Error(n))
                                );
                              case 3:
                                if (this.client.session.keys.includes(t)) {
                                  e.next = 6;
                                  break;
                                }
                                throw (
                                  ((i = va(
                                    "NO_MATCHING_KEY",
                                    "session topic doesn't exist: ".concat(t)
                                  )),
                                  (s = i.message),
                                  new Error(s))
                                );
                              case 6:
                                if (!aa(this.client.session.get(t).expiry)) {
                                  e.next = 11;
                                  break;
                                }
                                return (e.next = 9), this.deleteSession(t);
                              case 9:
                                throw (
                                  ((o = va(
                                    "EXPIRED",
                                    "session topic: ".concat(t)
                                  )),
                                  (a = o.message),
                                  new Error(a))
                                );
                              case 11:
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
                key: "isValidSessionOrPairingTopic",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n, i, s;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.client.session.keys.includes(t)) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 3), this.isValidSessionTopic(t)
                                );
                              case 3:
                                e.next = 16;
                                break;
                              case 5:
                                if (
                                  !this.client.core.pairing.pairings.keys.includes(
                                    t
                                  )
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                this.isValidPairingTopic(t), (e.next = 16);
                                break;
                              case 9:
                                if (!wa(t, !1)) {
                                  e.next = 14;
                                  break;
                                }
                                throw (
                                  ((r = va(
                                    "NO_MATCHING_KEY",
                                    "session or pairing topic doesn't exist: ".concat(
                                      t
                                    )
                                  )),
                                  (n = r.message),
                                  new Error(n))
                                );
                              case 14:
                                throw (
                                  ((i = va(
                                    "MISSING_OR_INVALID",
                                    "session or pairing topic should be a string: ".concat(
                                      t
                                    )
                                  )),
                                  (s = i.message),
                                  new Error(s))
                                );
                              case 16:
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
                key: "isValidProposalId",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n, i, s, o, a;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (Aa(t)) {
                                  e.next = 3;
                                  break;
                                }
                                throw (
                                  ((r = va(
                                    "MISSING_OR_INVALID",
                                    "proposal id should be a number: ".concat(t)
                                  )),
                                  (n = r.message),
                                  new Error(n))
                                );
                              case 3:
                                if (this.client.proposal.keys.includes(t)) {
                                  e.next = 6;
                                  break;
                                }
                                throw (
                                  ((i = va(
                                    "NO_MATCHING_KEY",
                                    "proposal id doesn't exist: ".concat(t)
                                  )),
                                  (s = i.message),
                                  new Error(s))
                                );
                              case 6:
                                if (!aa(this.client.proposal.get(t).expiry)) {
                                  e.next = 11;
                                  break;
                                }
                                return (e.next = 9), this.deleteProposal(t);
                              case 9:
                                throw (
                                  ((o = va(
                                    "EXPIRED",
                                    "proposal id: ".concat(t)
                                  )),
                                  (a = o.message),
                                  new Error(a))
                                );
                              case 11:
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
            ]),
            r
          );
        })(ra),
        fc = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n, Wa, Ba)).core = e),
              (i.logger = n),
              i
            );
          }
          return (0, E.Z)(r);
        })(Vo),
        lc = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n, Ga, Ba)).core = e),
              (i.logger = n),
              i
            );
          }
          return (0, E.Z)(r);
        })(Vo),
        pc = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, _.Z)(this, r),
              ((i = t.call(this, e, n, $a, Ba)).core = e),
              (i.logger = n),
              i
            );
          }
          return (0, E.Z)(r);
        })(Vo),
        hc = (function (e) {
          (0, I.Z)(r, e);
          var t = (0, O.Z)(r);
          function r(e) {
            var n;
            (0, _.Z)(this, r),
              ((n = t.call(this, e)).protocol = Ha),
              (n.version = Va),
              (n.name = Fa.name),
              (n.events = new A.EventEmitter()),
              (n.on = function (e, t) {
                return n.events.on(e, t);
              }),
              (n.once = function (e, t) {
                return n.events.once(e, t);
              }),
              (n.off = function (e, t) {
                return n.events.off(e, t);
              }),
              (n.removeListener = function (e, t) {
                return n.events.removeListener(e, t);
              }),
              (n.removeAllListeners = function (e) {
                return n.events.removeAllListeners(e);
              }),
              (n.connect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.connect(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.pair = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.pair(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.approve = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.approve(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.reject = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.reject(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.update = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.update(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.extend = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.extend(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.request = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.request(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.respond = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.respond(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.ping = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.ping(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.emit = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), n.engine.emit(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.disconnect = (function () {
                var e = (0, w.Z)(
                  (0, b.Z)().mark(function e(t) {
                    return (0, b.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                n.engine.disconnect(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                n.logger.error(e.t0.message),
                                e.t0)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.find = function (e) {
                try {
                  return n.engine.find(e);
                } catch (t) {
                  throw (n.logger.error(t.message), t);
                }
              }),
              (n.getPendingSessionRequests = function () {
                try {
                  return n.engine.getPendingSessionRequests();
                } catch (e) {
                  throw (n.logger.error(e.message), e);
                }
              }),
              (n.name =
                (null === e || void 0 === e ? void 0 : e.name) || Fa.name),
              (n.metadata = (null === e || void 0 === e
                ? void 0
                : e.metadata) ||
                (0, na.D)() || {
                  name: "",
                  description: "",
                  url: "",
                  icons: [""],
                });
            var i =
              typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
              "string" !=
                typeof (null === e || void 0 === e ? void 0 : e.logger)
                ? e.logger
                : k()(
                    (0, C.getDefaultLoggerOptions)({
                      level:
                        (null === e || void 0 === e ? void 0 : e.logger) ||
                        Fa.logger,
                    })
                  );
            return (
              (n.core =
                (null === e || void 0 === e ? void 0 : e.core) || new ea(e)),
              (n.logger = (0, C.generateChildLogger)(i, n.name)),
              (n.session = new lc(n.core, n.logger)),
              (n.proposal = new fc(n.core, n.logger)),
              (n.pendingRequest = new pc(n.core, n.logger)),
              (n.engine = new uc((0, S.Z)(n))),
              n
            );
          }
          return (
            (0, E.Z)(
              r,
              [
                {
                  key: "context",
                  get: function () {
                    return (0, C.getLoggerContext)(this.logger);
                  },
                },
                {
                  key: "pairing",
                  get: function () {
                    return this.core.pairing.pairings;
                  },
                },
                {
                  key: "initialize",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.logger.trace("Initialized"),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this.core.start()
                                  );
                                case 4:
                                  return (e.next = 6), this.session.init();
                                case 6:
                                  return (e.next = 8), this.proposal.init();
                                case 8:
                                  return (
                                    (e.next = 10), this.pendingRequest.init()
                                  );
                                case 10:
                                  return (e.next = 12), this.engine.init();
                                case 12:
                                  this.logger.info(
                                    "SignClient Initialization Success"
                                  ),
                                    (e.next = 18);
                                  break;
                                case 15:
                                  throw (
                                    ((e.prev = 15),
                                    (e.t0 = e.catch(1)),
                                    this.logger.info(
                                      "SignClient Initialization Failure"
                                    ),
                                    this.logger.error(e.t0.message),
                                    e.t0)
                                  );
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 15]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
              ],
              [
                {
                  key: "init",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e(t) {
                        var n;
                        return (0, b.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = new r(t)), (e.next = 3), n.initialize()
                                );
                              case 3:
                                return e.abrupt("return", n);
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
              ]
            ),
            r
          );
        })(ta);
      r(67021), r(33584);
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var dc = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function vc(e, t) {
        var r = dc[e],
          n = r.message,
          i = r.code;
        return { message: t ? "".concat(n, " ").concat(t) : n, code: i };
      }
      function gc(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      var yc = r(10159);
      function mc(e, t) {
        var r;
        return (
          t.rpcMap &&
            (r =
              t.rpcMap[
                (function (e) {
                  return Number(e[0].split(":")[1]);
                })([e])
              ]),
          r
        );
      }
      var bc = (function () {
          function e(t) {
            (0, _.Z)(this, e),
              (this.name = "eip155"),
              (this.namespace = t.namespace),
              (this.client = t.client),
              (this.events = t.events),
              (this.httpProviders = this.createHttpProviders()),
              (this.chainId = this.getDefaultChainId());
          }
          return (
            (0, E.Z)(e, [
              {
                key: "request",
                value: (function () {
                  var e = (0, w.Z)(
                    (0, b.Z)().mark(function e(t) {
                      var r, n;
                      return (0, b.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (e.t0 = t.request.method),
                                  (e.next =
                                    "eth_requestAccounts" === e.t0
                                      ? 3
                                      : "eth_accounts" === e.t0
                                      ? 4
                                      : "wallet_switchEthereumChain" === e.t0
                                      ? 5
                                      : "eth_chainId" === e.t0
                                      ? 7
                                      : 8);
                                break;
                              case 3:
                              case 4:
                                return e.abrupt("return", this.getAccounts());
                              case 5:
                                return (
                                  (n = t.request.params
                                    ? null == (r = t.request.params[0])
                                      ? void 0
                                      : r.chainId
                                    : "0x0"),
                                  e.abrupt(
                                    "return",
                                    (this.setDefaultChain(
                                      parseInt(n, 16).toString()
                                    ),
                                    null)
                                  )
                                );
                              case 7:
                                return e.abrupt(
                                  "return",
                                  this.getDefaultChainId()
                                );
                              case 8:
                                if (
                                  !this.namespace.methods.includes(
                                    t.request.method
                                  )
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (e.next = 11), this.client.request(t);
                              case 11:
                                (e.t1 = e.sent), (e.next = 15);
                                break;
                              case 14:
                                e.t1 = this.getHttpProvider().request(
                                  t.request
                                );
                              case 15:
                                return e.abrupt("return", e.t1);
                              case 16:
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
                key: "updateNamespace",
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e);
                },
              },
              {
                key: "setDefaultChain",
                value: function (e, t) {
                  if (((this.chainId = parseInt(e)), !this.httpProviders[e])) {
                    var r =
                      t ||
                      mc("".concat(this.name, ":").concat(e), this.namespace);
                    if (!r)
                      throw new Error(
                        "No RPC url provided for chainId: ".concat(e)
                      );
                    this.setHttpProvider(e, r);
                  }
                  this.events.emit("chainChanged", this.chainId);
                },
              },
              {
                key: "requestAccounts",
                value: function () {
                  return this.getAccounts();
                },
              },
              {
                key: "createHttpProvider",
                value: function (e, t) {
                  var r = t || mc(e, this.namespace);
                  return typeof r > "u" ? void 0 : new qn.r(new yc.k(r));
                },
              },
              {
                key: "setHttpProvider",
                value: function (e, t) {
                  var r = this.createHttpProvider(e, t);
                  r && (this.httpProviders[e] = r);
                },
              },
              {
                key: "createHttpProviders",
                value: function () {
                  var e = this,
                    t = {};
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r);
                    }),
                    t
                  );
                },
              },
              {
                key: "getAccounts",
                value: function () {
                  var e = this,
                    t = this.namespace.accounts;
                  return (
                    (t &&
                      t
                        .filter(function (t) {
                          return t.split(":")[1] === e.chainId.toString();
                        })
                        .map(function (e) {
                          return e.split(":")[2];
                        })) ||
                    []
                  );
                },
              },
              {
                key: "getDefaultChainId",
                value: function () {
                  if (this.chainId) return this.chainId;
                  var e = this.namespace.chains[0];
                  if (!e) throw new Error("ChainId not found");
                  return parseInt(e.split(":")[1]);
                },
              },
              {
                key: "getHttpProvider",
                value: function () {
                  var e = "".concat(this.name, ":").concat(this.chainId),
                    t = this.httpProviders[e];
                  if (typeof t > "u")
                    throw new Error(
                      "JSON-RPC provider for ".concat(e, " not found")
                    );
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        wc = (function () {
          function e(t) {
            (0, _.Z)(this, e),
              (this.name = "solana"),
              (this.namespace = t.namespace),
              (this.events = t.events),
              (this.client = t.client),
              (this.chainId = this.getDefaultChainId()),
              (this.httpProviders = this.createHttpProviders());
          }
          return (
            (0, E.Z)(e, [
              {
                key: "updateNamespace",
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e);
                },
              },
              {
                key: "requestAccounts",
                value: function () {
                  return this.getAccounts();
                },
              },
              {
                key: "getAccounts",
                value: function () {
                  var e = this,
                    t = this.namespace.accounts;
                  return (
                    (t &&
                      t
                        .filter(function (t) {
                          return t.split(":")[1] === e.chainId.toString();
                        })
                        .map(function (e) {
                          return e.split(":")[2];
                        })) ||
                    []
                  );
                },
              },
              {
                key: "createHttpProviders",
                value: function () {
                  var e = this,
                    t = {};
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r);
                    }),
                    t
                  );
                },
              },
              {
                key: "getDefaultChainId",
                value: function () {
                  if (this.chainId) return this.chainId;
                  var e = this.namespace.chains[0];
                  if (!e) throw new Error("ChainId not found");
                  return e.split(":")[1];
                },
              },
              {
                key: "request",
                value: function (e) {
                  return this.namespace.methods.includes(e.request.method)
                    ? this.client.request(e)
                    : this.getHttpProvider().request(e.request);
                },
              },
              {
                key: "getHttpProvider",
                value: function () {
                  var e = "".concat(this.name, ":").concat(this.chainId),
                    t = this.httpProviders[e];
                  if (typeof t > "u")
                    throw new Error(
                      "JSON-RPC provider for ".concat(e, " not found")
                    );
                  return t;
                },
              },
              {
                key: "setDefaultChain",
                value: function (e, t) {
                  if (((this.chainId = e), !this.httpProviders[e])) {
                    var r =
                      t ||
                      mc("".concat(this.name, ":").concat(e), this.namespace);
                    if (!r)
                      throw new Error(
                        "No RPC url provided for chainId: ".concat(e)
                      );
                    this.setHttpProvider(e, r);
                  }
                  this.events.emit("chainChanged", this.chainId);
                },
              },
              {
                key: "setHttpProvider",
                value: function (e, t) {
                  var r = this.createHttpProvider(e, t);
                  r && (this.httpProviders[e] = r);
                },
              },
              {
                key: "createHttpProvider",
                value: function (e, t) {
                  var r = t || mc(e, this.namespace);
                  return typeof r > "u" ? void 0 : new qn.r(new yc.Z(r));
                },
              },
            ]),
            e
          );
        })(),
        _c = (function () {
          function e(t) {
            (0, _.Z)(this, e),
              (this.name = "cosmos"),
              (this.namespace = t.namespace),
              (this.events = t.events),
              (this.client = t.client),
              (this.chainId = this.getDefaultChainId()),
              (this.httpProviders = this.createHttpProviders());
          }
          return (
            (0, E.Z)(e, [
              {
                key: "updateNamespace",
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e);
                },
              },
              {
                key: "requestAccounts",
                value: function () {
                  return this.getAccounts();
                },
              },
              {
                key: "getAccounts",
                value: function () {
                  var e = this,
                    t = this.namespace.accounts;
                  return (
                    (t &&
                      t
                        .filter(function (t) {
                          return t.split(":")[1] === e.chainId.toString();
                        })
                        .map(function (e) {
                          return e.split(":")[2];
                        })) ||
                    []
                  );
                },
              },
              {
                key: "createHttpProviders",
                value: function () {
                  var e = this,
                    t = {};
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r);
                    }),
                    t
                  );
                },
              },
              {
                key: "getDefaultChainId",
                value: function () {
                  if (this.chainId) return this.chainId;
                  var e = this.namespace.chains[0];
                  if (!e) throw new Error("ChainId not found");
                  return e.split(":")[1];
                },
              },
              {
                key: "request",
                value: function (e) {
                  return this.namespace.methods.includes(e.request.method)
                    ? this.client.request(e)
                    : this.getHttpProvider().request(e.request);
                },
              },
              {
                key: "getHttpProvider",
                value: function () {
                  var e = "".concat(this.name, ":").concat(this.chainId),
                    t = this.httpProviders[e];
                  if (typeof t > "u")
                    throw new Error(
                      "JSON-RPC provider for ".concat(e, " not found")
                    );
                  return t;
                },
              },
              {
                key: "setDefaultChain",
                value: function (e, t) {
                  if (((this.chainId = e), !this.httpProviders[e])) {
                    var r =
                      t ||
                      mc("".concat(this.name, ":").concat(e), this.namespace);
                    if (!r)
                      throw new Error(
                        "No RPC url provided for chainId: ".concat(e)
                      );
                    this.setHttpProvider(e, r);
                  }
                  this.events.emit("chainChanged", this.chainId);
                },
              },
              {
                key: "setHttpProvider",
                value: function (e, t) {
                  var r = this.createHttpProvider(e, t);
                  r && (this.httpProviders[e] = r);
                },
              },
              {
                key: "createHttpProvider",
                value: function (e, t) {
                  var r = t || mc(e, this.namespace);
                  return typeof r > "u" ? void 0 : new qn.r(new yc.Z(r));
                },
              },
            ]),
            e
          );
        })(),
        Ec = (function () {
          function e(t) {
            (0, _.Z)(this, e),
              (this.name = "cip34"),
              (this.namespace = t.namespace),
              (this.events = t.events),
              (this.client = t.client),
              (this.chainId = this.getDefaultChainId()),
              (this.httpProviders = this.createHttpProviders());
          }
          return (
            (0, E.Z)(e, [
              {
                key: "updateNamespace",
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e);
                },
              },
              {
                key: "requestAccounts",
                value: function () {
                  return this.getAccounts();
                },
              },
              {
                key: "getAccounts",
                value: function () {
                  var e = this,
                    t = this.namespace.accounts;
                  return (
                    (t &&
                      t
                        .filter(function (t) {
                          return t.split(":")[1] === e.chainId.toString();
                        })
                        .map(function (e) {
                          return e.split(":")[2];
                        })) ||
                    []
                  );
                },
              },
              {
                key: "createHttpProviders",
                value: function () {
                  var e = this,
                    t = {};
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r);
                    }),
                    t
                  );
                },
              },
              {
                key: "getDefaultChainId",
                value: function () {
                  if (this.chainId) return this.chainId;
                  var e = this.namespace.chains[0];
                  if (!e) throw new Error("ChainId not found");
                  return e.split(":")[1];
                },
              },
              {
                key: "request",
                value: function (e) {
                  return this.namespace.methods.includes(e.request.method)
                    ? this.client.request(e)
                    : this.getHttpProvider().request(e.request);
                },
              },
              {
                key: "getHttpProvider",
                value: function () {
                  var e = "".concat(this.name, ":").concat(this.chainId),
                    t = this.httpProviders[e];
                  if (typeof t > "u")
                    throw new Error(
                      "JSON-RPC provider for ".concat(e, " not found")
                    );
                  return t;
                },
              },
              {
                key: "setDefaultChain",
                value: function (e, t) {
                  if (((this.chainId = e), !this.httpProviders[e])) {
                    var r =
                      t ||
                      mc("".concat(this.name, ":").concat(e), this.namespace);
                    if (!r)
                      throw new Error(
                        "No RPC url provided for chainId: ".concat(e)
                      );
                    this.setHttpProvider(e, r);
                  }
                  this.events.emit("chainChanged", this.chainId);
                },
              },
              {
                key: "setHttpProvider",
                value: function (e, t) {
                  var r = this.createHttpProvider(e, t);
                  r && (this.httpProviders[e] = r);
                },
              },
              {
                key: "createHttpProvider",
                value: function (e, t) {
                  var r = t || mc(e, this.namespace);
                  return typeof r > "u" ? void 0 : new qn.r(new yc.Z(r));
                },
              },
            ]),
            e
          );
        })(),
        xc = "error",
        kc = "".concat("wc", "@", 2, ":").concat("universal_provider", ":"),
        Sc = Object.defineProperty,
        Zc = Object.defineProperties,
        Ic = Object.getOwnPropertyDescriptors,
        Oc = Object.getOwnPropertySymbols,
        Nc = Object.prototype.hasOwnProperty,
        Pc = Object.prototype.propertyIsEnumerable,
        Ac = function (e, t, r) {
          return t in e
            ? Sc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        Rc = function (e, t) {
          for (var r in t || (t = {})) Nc.call(t, r) && Ac(e, r, t[r]);
          if (Oc) {
            var n,
              i = (0, m.Z)(Oc(t));
            try {
              for (i.s(); !(n = i.n()).done; ) {
                r = n.value;
                Pc.call(t, r) && Ac(e, r, t[r]);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        },
        Uc = (function () {
          function e(t) {
            (0, _.Z)(this, e),
              (this.events = new (R())()),
              (this.rpcProviders = {}),
              (this.providerOpts = t),
              (this.logger =
                typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" &&
                "string" !=
                  typeof (null === t || void 0 === t ? void 0 : t.logger)
                  ? t.logger
                  : k()(
                      (0, C.getDefaultLoggerOptions)({
                        level:
                          (null === t || void 0 === t ? void 0 : t.logger) ||
                          xc,
                      })
                    ));
          }
          return (
            (0, E.Z)(
              e,
              [
                {
                  key: "request",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e(t, r) {
                        var n, i, s, o;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((n = this.validateChain(r)),
                                    (i = (0, y.Z)(n, 2)),
                                    (s = i[0]),
                                    (o = i[1]),
                                    this.session)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "Please call connect() before request()"
                                  );
                                case 3:
                                  return (
                                    (e.next = 5),
                                    this.getProvider(s).request({
                                      request: Rc({}, t),
                                      chainId: "".concat(s, ":").concat(o),
                                      topic: this.session.topic,
                                    })
                                  );
                                case 5:
                                  return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, r) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "sendAsync",
                  value: function (e, t, r) {
                    this.request(e, r)
                      .then(function (e) {
                        return t(null, e);
                      })
                      .catch(function (e) {
                        return t(e, void 0);
                      });
                  },
                },
                {
                  key: "enable",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.client) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new Error(
                                    "Sign Client not initialized"
                                  );
                                case 2:
                                  if (((e.t0 = this.session), e.t0)) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 6),
                                    this.connect({
                                      namespaces: this.namespaces,
                                    })
                                  );
                                case 6:
                                  return (e.next = 8), this.requestAccounts();
                                case 8:
                                  return e.abrupt("return", e.sent);
                                case 9:
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
                  key: "disconnect",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        var t;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.session) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new Error(
                                    "Please call connect() before enable()"
                                  );
                                case 2:
                                  return (
                                    (e.next = 4),
                                    this.client.disconnect({
                                      topic:
                                        null == (t = this.session)
                                          ? void 0
                                          : t.topic,
                                      reason: vc("USER_DISCONNECTED"),
                                    })
                                  );
                                case 4:
                                  return (e.next = 6), this.cleanup();
                                case 6:
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
                  key: "connect",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e(t) {
                        var r;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.client) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new Error(
                                    "Sign Client not initialized"
                                  );
                                case 2:
                                  return (
                                    (r = t.namespaces),
                                    this.setNamespaces(r),
                                    this.createProviders(),
                                    (e.next = 7),
                                    this.cleanupPendingPairings()
                                  );
                                case 7:
                                  if (!0 !== t.skipPairing) {
                                    e.next = 11;
                                    break;
                                  }
                                  (e.t0 = void 0), (e.next = 14);
                                  break;
                                case 11:
                                  return (
                                    (e.next = 13), this.pair(t.pairingTopic)
                                  );
                                case 13:
                                  e.t0 = e.sent;
                                case 14:
                                  return e.abrupt("return", e.t0);
                                case 15:
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
                  key: "on",
                  value: function (e, t) {
                    this.events.on(e, t);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    this.events.once(e, t);
                  },
                },
                {
                  key: "removeListener",
                  value: function (e, t) {
                    this.events.removeListener(e, t);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    this.events.off(e, t);
                  },
                },
                {
                  key: "isWalletConnect",
                  get: function () {
                    return !0;
                  },
                },
                {
                  key: "pair",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e(t) {
                        var r, n, i;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.client.connect({
                                      pairingTopic: t,
                                      requiredNamespaces: this.namespaces,
                                    })
                                  );
                                case 2:
                                  return (
                                    (r = e.sent),
                                    (n = r.uri),
                                    (i = r.approval),
                                    n &&
                                      ((this.uri = n),
                                      this.events.emit("display_uri", n)),
                                    (e.next = 8),
                                    i()
                                  );
                                case 8:
                                  return (
                                    (this.session = e.sent),
                                    this.onSessionUpdate(),
                                    this.onConnect(),
                                    e.abrupt("return", this.session)
                                  );
                                case 12:
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
                  key: "setDefaultChain",
                  value: function (e, t) {
                    try {
                      var r = this.validateChain(e),
                        n = (0, y.Z)(r, 2),
                        i = n[0],
                        s = n[1];
                      this.getProvider(i).setDefaultChain(s, t);
                    } catch (i) {
                      if (!/Please call connect/.test(i.message)) throw i;
                    }
                  },
                },
                {
                  key: "cleanupPendingPairings",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        var t,
                          r,
                          n,
                          i,
                          s,
                          o = arguments;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      o.length > 0 && void 0 !== o[0]
                                        ? o[0]
                                        : {}),
                                    this.logger.info(
                                      "Cleaning up inactive pairings..."
                                    ),
                                    !gc((r = this.client.pairing.getAll())))
                                  ) {
                                    e.next = 26;
                                    break;
                                  }
                                  (n = (0, m.Z)(r)), (e.prev = 5), n.s();
                                case 7:
                                  if ((i = n.n()).done) {
                                    e.next = 17;
                                    break;
                                  }
                                  if (((s = i.value), !t.deletePairings)) {
                                    e.next = 13;
                                    break;
                                  }
                                  this.client.core.expirer.set(s.topic, 0),
                                    (e.next = 15);
                                  break;
                                case 13:
                                  return (
                                    (e.next = 15),
                                    this.client.core.relayer.subscriber.unsubscribe(
                                      s.topic
                                    )
                                  );
                                case 15:
                                  e.next = 7;
                                  break;
                                case 17:
                                  e.next = 22;
                                  break;
                                case 19:
                                  (e.prev = 19), (e.t0 = e.catch(5)), n.e(e.t0);
                                case 22:
                                  return (e.prev = 22), n.f(), e.finish(22);
                                case 25:
                                  this.logger.info(
                                    "Inactive pairings cleared: ".concat(
                                      r.length
                                    )
                                  );
                                case 26:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[5, 19, 22, 25]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "checkStorage",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        var t;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.client.core.storage.getItem(
                                      "".concat(kc, "/namespaces")
                                    )
                                  );
                                case 2:
                                  if (((e.t0 = e.sent), e.t0)) {
                                    e.next = 5;
                                    break;
                                  }
                                  e.t0 = {};
                                case 5:
                                  if (
                                    ((this.namespaces = e.t0),
                                    this.namespaces && this.createProviders(),
                                    !this.client.session.length)
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  (t = this.client.session.keys.length - 1),
                                    (this.session = this.client.session.get(
                                      this.client.session.keys[t]
                                    )),
                                    this.onSessionUpdate();
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
                  key: "initialize",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.logger.trace("Initialized"),
                                    (e.next = 3),
                                    this.createClient()
                                  );
                                case 3:
                                  this.checkStorage(),
                                    this.registerEventListeners();
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
                  key: "createClient",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((e.t0 = this.providerOpts.client), e.t0)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (e.next = 4),
                                    hc.init({
                                      logger: this.providerOpts.logger || xc,
                                      relayUrl:
                                        this.providerOpts.relayUrl ||
                                        "wss://relay.walletconnect.com",
                                      projectId: this.providerOpts.projectId,
                                      metadata: this.providerOpts.metadata,
                                      storageOptions:
                                        this.providerOpts.storageOptions,
                                      name: this.providerOpts.name,
                                    })
                                  );
                                case 4:
                                  e.t0 = e.sent;
                                case 5:
                                  (this.client = e.t0),
                                    this.logger.trace("SignClient Initialized");
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
                  key: "createProviders",
                  value: function () {
                    var e = this;
                    if (!this.client)
                      throw new Error("Sign Client not initialized");
                    Object.keys(this.namespaces).forEach(function (t) {
                      switch (t) {
                        case "eip155":
                          e.rpcProviders[t] = new bc({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events,
                          });
                          break;
                        case "solana":
                          e.rpcProviders[t] = new wc({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events,
                          });
                          break;
                        case "cosmos":
                          e.rpcProviders[t] = new _c({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events,
                          });
                          break;
                        case "polkadot":
                          break;
                        case "cip34":
                          e.rpcProviders[t] = new Ec({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events,
                          });
                      }
                    });
                  },
                },
                {
                  key: "registerEventListeners",
                  value: function () {
                    var e = this;
                    if (typeof this.client > "u")
                      throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", function (t) {
                      e.events.emit("session_ping", t);
                    }),
                      this.client.on("session_event", function (t) {
                        var r = t.params,
                          n = r.event;
                        "accountsChanged" === n.name
                          ? e.events.emit("accountsChanged", n.data)
                          : "chainChanged" === n.name
                          ? e.onChainChanged(n.data, r.chainId)
                          : e.events.emit(n.name, n.data),
                          e.events.emit("session_event", t);
                      }),
                      this.client.on("session_update", function (t) {
                        var r,
                          n = t.topic,
                          i = t.params,
                          s = i.namespaces,
                          o =
                            null == (r = e.client) ? void 0 : r.session.get(n);
                        (e.session = (function (e, t) {
                          return Zc(e, Ic(t));
                        })(Rc({}, o), { namespaces: s })),
                          e.onSessionUpdate(),
                          e.events.emit("session_update", {
                            topic: n,
                            params: i,
                          });
                      }),
                      this.client.on(
                        "session_delete",
                        (function () {
                          var t = (0, w.Z)(
                            (0, b.Z)().mark(function t(r) {
                              return (0, b.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.next = 2), e.cleanup();
                                    case 2:
                                      e.events.emit("session_delete", r);
                                    case 3:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      );
                  },
                },
                {
                  key: "getProvider",
                  value: function (e) {
                    if (!this.rpcProviders[e])
                      throw new Error("Provider not found: ".concat(e));
                    return this.rpcProviders[e];
                  },
                },
                {
                  key: "onSessionUpdate",
                  value: function () {
                    var e = this;
                    Object.keys(this.rpcProviders).forEach(function (t) {
                      var r;
                      e.getProvider(t).updateNamespace(
                        null == (r = e.session) ? void 0 : r.namespaces[t]
                      );
                    });
                  },
                },
                {
                  key: "setNamespaces",
                  value: function (e) {
                    if (!e || !Object.keys(e).length)
                      throw new Error("Namespaces must be not empty");
                    this.client.core.storage.setItem(
                      "".concat(kc, "/namespaces"),
                      e
                    ),
                      (this.namespaces = e);
                  },
                },
                {
                  key: "validateChain",
                  value: function (e) {
                    var t = (null === e || void 0 === e
                        ? void 0
                        : e.split(":")) || ["", ""],
                      r = (0, y.Z)(t, 2),
                      n = r[0],
                      i = r[1];
                    if (n && !Object.keys(this.namespaces).includes(n))
                      throw new Error(
                        "Namespace '".concat(
                          n,
                          "' is not configured. Please call connect() first with namespace config."
                        )
                      );
                    return n && i
                      ? [n, i]
                      : (function (e) {
                          var t,
                            r =
                              null == (t = e[Object.keys(e)[0]])
                                ? void 0
                                : t.chains[0];
                          return [r.split(":")[0], r.split(":")[1]];
                        })(this.namespaces);
                  },
                },
                {
                  key: "requestAccounts",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        var t, r, n;
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = this.validateChain()),
                                    (r = (0, y.Z)(t, 1)),
                                    (n = r[0]),
                                    (e.next = 3),
                                    this.getProvider(n).requestAccounts()
                                  );
                                case 3:
                                  return e.abrupt("return", e.sent);
                                case 4:
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
                  key: "onChainChanged",
                  value: function (e, t) {
                    var r = this.validateChain(t),
                      n = (0, y.Z)(r, 2),
                      i = n[0],
                      s = n[1];
                    this.getProvider(i).setDefaultChain(s),
                      this.events.emit("chainChanged", e);
                  },
                },
                {
                  key: "onConnect",
                  value: function () {
                    this.events.emit("connect", { session: this.session });
                  },
                },
                {
                  key: "cleanup",
                  value: (function () {
                    var e = (0, w.Z)(
                      (0, b.Z)().mark(function e() {
                        return (0, b.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.session = void 0),
                                    (e.next = 3),
                                    this.cleanupPendingPairings({
                                      deletePairings: !0,
                                    })
                                  );
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
              ],
              [
                {
                  key: "init",
                  value: (function () {
                    var t = (0, w.Z)(
                      (0, b.Z)().mark(function t(r) {
                        var n;
                        return (0, b.Z)().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = new e(r)), (t.next = 3), n.initialize()
                                );
                              case 3:
                                return t.abrupt("return", n);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
              ]
            ),
            e
          );
        })(),
        Tc = Uc;
    },
    67021: function (e, t, r) {
      "use strict";
      var n = r(29808);
    },
    33584: function (e, t, r) {
      "use strict";
      var n = r(38416).default,
        i = r(27424).default,
        s = r(74704).default,
        o = r(861).default,
        a = r(40499),
        c = r(59412),
        u = r(70845),
        f = r(62683),
        l = Symbol("encodeFragmentIdentifier");
      function p(e) {
        if ("string" !== typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function h(e, t) {
        return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e;
      }
      function d(e, t) {
        return t.decode ? c(e) : e;
      }
      function v(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" === typeof e
          ? v(Object.keys(e))
              .sort(function (e, t) {
                return Number(e) - Number(t);
              })
              .map(function (t) {
                return e[t];
              })
          : e;
      }
      function g(e) {
        var t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function y(e) {
        var t = (e = g(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function m(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" === typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function b(e, t) {
        p(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        var r = (function (e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function (e, r, n) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return function (e, r, n) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return function (e, r, n) {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return function (t, r, n) {
                  var i =
                      "string" === typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" === typeof r &&
                      !i &&
                      d(r, e).includes(e.arrayFormatSeparator);
                  r = s ? d(r, e) : r;
                  var o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map(function (t) {
                          return d(t, e);
                        })
                      : null === r
                      ? r
                      : d(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return function (t, r, n) {
                  var i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), i)) {
                    var s =
                      null === r
                        ? []
                        : r.split(e.arrayFormatSeparator).map(function (t) {
                            return d(t, e);
                          });
                    void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                  } else n[t] = r ? d(r, e) : r;
                };
              default:
                return function (e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" !== typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        var o,
          a = s(e.split("&"));
        try {
          for (a.s(); !(o = a.n()).done; ) {
            var c = o.value;
            if ("" !== c) {
              var f = u(t.decode ? c.replace(/\+/g, " ") : c, "="),
                l = i(f, 2),
                h = l[0],
                g = l[1];
              (g =
                void 0 === g
                  ? null
                  : ["comma", "separator", "bracket-separator"].includes(
                      t.arrayFormat
                    )
                  ? g
                  : d(g, t)),
                r(d(h, t), g, n);
            }
          }
        } catch (S) {
          a.e(S);
        } finally {
          a.f();
        }
        for (var y = 0, b = Object.keys(n); y < b.length; y++) {
          var w = b[y],
            _ = n[w];
          if ("object" === typeof _ && null !== _)
            for (var E = 0, x = Object.keys(_); E < x.length; E++) {
              var k = x[E];
              _[k] = m(_[k], t);
            }
          else n[w] = m(_, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce(function (e, t) {
              var r = n[t];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (e[t] = v(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = y),
        (t.parse = b),
        (t.stringify = function (e, t) {
          if (!e) return "";
          p(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          for (
            var r = function (r) {
                return (
                  (t.skipNull && (null === (n = e[r]) || void 0 === n)) ||
                  (t.skipEmptyString && "" === e[r])
                );
                var n;
              },
              n = (function (e) {
                switch (e.arrayFormat) {
                  case "index":
                    return function (t) {
                      return function (r, n) {
                        var i = r.length;
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), "[", i, "]"].join("")]
                                : [
                                    [h(t, e), "[", h(i, e), "]=", h(n, e)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), "[]"].join("")]
                                : [[h(t, e), "[]=", h(n, e)].join("")]
                            );
                      };
                    };
                  case "colon-list-separator":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[h(t, e), ":list="].join("")]
                                : [[h(t, e), ":list=", h(n, e)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                  case "bracket-separator":
                    var t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                    return function (r) {
                      return function (n, i) {
                        return void 0 === i ||
                          (e.skipNull && null === i) ||
                          (e.skipEmptyString && "" === i)
                          ? n
                          : ((i = null === i ? "" : i),
                            0 === n.length
                              ? [[h(r, e), t, h(i, e)].join("")]
                              : [[n, h(i, e)].join(e.arrayFormatSeparator)]);
                      };
                    };
                  default:
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [h(t, e)]
                                : [[h(t, e), "=", h(n, e)].join("")]
                            );
                      };
                    };
                }
              })(t),
              i = {},
              s = 0,
              a = Object.keys(e);
            s < a.length;
            s++
          ) {
            var c = a[s];
            r(c) || (i[c] = e[c]);
          }
          var u = Object.keys(i);
          return (
            !1 !== t.sort && u.sort(t.sort),
            u
              .map(function (r) {
                var i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? h(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? h(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : h(r, t) + "=" + h(i, t);
              })
              .filter(function (e) {
                return e.length > 0;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function (e, t) {
          t = Object.assign({ decode: !0 }, t);
          var r = u(e, "#"),
            n = i(r, 2),
            s = n[0],
            o = n[1];
          return Object.assign(
            { url: s.split("?")[0] || "", query: b(y(e), t) },
            t && t.parseFragmentIdentifier && o
              ? { fragmentIdentifier: d(o, t) }
              : {}
          );
        }),
        (t.stringifyUrl = function (e, r) {
          r = Object.assign(n({ encode: !0, strict: !0 }, l, !0), r);
          var i = g(e.url).split("?")[0] || "",
            s = t.extract(e.url),
            o = t.parse(s, { sort: !1 }),
            a = Object.assign(o, e.query),
            c = t.stringify(a, r);
          c && (c = "?".concat(c));
          var u = (function (e) {
            var t = "",
              r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (u = "#".concat(
                r[l] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier
              )),
            "".concat(i).concat(c).concat(u)
          );
        }),
        (t.pick = function (e, r, i) {
          i = Object.assign(n({ parseFragmentIdentifier: !0 }, l, !1), i);
          var s = t.parseUrl(e, i),
            o = s.url,
            a = s.query,
            c = s.fragmentIdentifier;
          return t.stringifyUrl(
            { url: o, query: f(a, r), fragmentIdentifier: c },
            i
          );
        }),
        (t.exclude = function (e, r, n) {
          var i = Array.isArray(r)
            ? function (e) {
                return !r.includes(e);
              }
            : function (e, t) {
                return !r(e, t);
              };
          return t.pick(e, i, n);
        });
    },
    62683: function (e) {
      "use strict";
      e.exports = function (e, t) {
        for (
          var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0;
          s < n.length;
          s++
        ) {
          var o = n[s],
            a = e[o];
          (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
        }
        return r;
      };
    },
    32467: function (e, t, r) {
      e = r.nmd(e);
      var n = 200,
        i = "__lodash_hash_undefined__",
        s = 1,
        o = 2,
        a = 9007199254740991,
        c = "[object Arguments]",
        u = "[object Array]",
        f = "[object AsyncFunction]",
        l = "[object Boolean]",
        p = "[object Date]",
        h = "[object Error]",
        d = "[object Function]",
        v = "[object GeneratorFunction]",
        g = "[object Map]",
        y = "[object Number]",
        m = "[object Null]",
        b = "[object Object]",
        w = "[object Promise]",
        _ = "[object Proxy]",
        E = "[object RegExp]",
        x = "[object Set]",
        k = "[object String]",
        S = "[object Symbol]",
        Z = "[object Undefined]",
        I = "[object WeakMap]",
        O = "[object ArrayBuffer]",
        N = "[object DataView]",
        P = /^\[object .+?Constructor\]$/,
        A = /^(?:0|[1-9]\d*)$/,
        R = {};
      (R["[object Float32Array]"] =
        R["[object Float64Array]"] =
        R["[object Int8Array]"] =
        R["[object Int16Array]"] =
        R["[object Int32Array]"] =
        R["[object Uint8Array]"] =
        R["[object Uint8ClampedArray]"] =
        R["[object Uint16Array]"] =
        R["[object Uint32Array]"] =
          !0),
        (R[c] =
          R[u] =
          R[O] =
          R[l] =
          R[N] =
          R[p] =
          R[h] =
          R[d] =
          R[g] =
          R[y] =
          R[b] =
          R[E] =
          R[x] =
          R[k] =
          R[I] =
            !1);
      var U = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        T = "object" == typeof self && self && self.Object === Object && self,
        C = U || T || Function("return this")(),
        j = t && !t.nodeType && t,
        L = j && e && !e.nodeType && e,
        D = L && L.exports === j,
        M = D && U.process,
        z = (function () {
          try {
            return M && M.binding && M.binding("util");
          } catch (e) {}
        })(),
        q = z && z.isTypedArray;
      function H(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      function V(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      }
      function K(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var B,
        F,
        W = Array.prototype,
        G = Function.prototype,
        Y = Object.prototype,
        J = C["__core-js_shared__"],
        X = G.toString,
        Q = Y.hasOwnProperty,
        $ = (function () {
          var e = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })(),
        ee = Y.toString,
        te = RegExp(
          "^" +
            X.call(Q)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        re = D ? C.Buffer : void 0,
        ne = C.Symbol,
        ie = C.Uint8Array,
        se = Y.propertyIsEnumerable,
        oe = W.splice,
        ae = ne ? ne.toStringTag : void 0,
        ce = Object.getOwnPropertySymbols,
        ue = re ? re.isBuffer : void 0,
        fe =
          ((B = Object.keys),
          (F = Object),
          function (e) {
            return B(F(e));
          }),
        le = Me(C, "DataView"),
        pe = Me(C, "Map"),
        he = Me(C, "Promise"),
        de = Me(C, "Set"),
        ve = Me(C, "WeakMap"),
        ge = Me(Object, "create"),
        ye = Ve(le),
        me = Ve(pe),
        be = Ve(he),
        we = Ve(de),
        _e = Ve(ve),
        Ee = ne ? ne.prototype : void 0,
        xe = Ee ? Ee.valueOf : void 0;
      function ke(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Se(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Ze(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Ie(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new Ze(); ++t < r; ) this.add(e[t]);
      }
      function Oe(e) {
        var t = (this.__data__ = new Se(e));
        this.size = t.size;
      }
      function Ne(e, t) {
        var r = Fe(e),
          n = !r && Be(e),
          i = !r && !n && We(e),
          s = !r && !n && !i && Qe(e),
          o = r || n || i || s,
          a = o
            ? (function (e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                return n;
              })(e.length, String)
            : [],
          c = a.length;
        for (var u in e)
          (!t && !Q.call(e, u)) ||
            (o &&
              ("length" == u ||
                (i && ("offset" == u || "parent" == u)) ||
                (s &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                He(u, c))) ||
            a.push(u);
        return a;
      }
      function Pe(e, t) {
        for (var r = e.length; r--; ) if (Ke(e[r][0], t)) return r;
        return -1;
      }
      function Ae(e) {
        return null == e
          ? void 0 === e
            ? Z
            : m
          : ae && ae in Object(e)
          ? (function (e) {
              var t = Q.call(e, ae),
                r = e[ae];
              try {
                e[ae] = void 0;
                var n = !0;
              } catch (s) {}
              var i = ee.call(e);
              n && (t ? (e[ae] = r) : delete e[ae]);
              return i;
            })(e)
          : (function (e) {
              return ee.call(e);
            })(e);
      }
      function Re(e) {
        return Xe(e) && Ae(e) == c;
      }
      function Ue(e, t, r, n, i) {
        return (
          e === t ||
          (null == e || null == t || (!Xe(e) && !Xe(t))
            ? e !== e && t !== t
            : (function (e, t, r, n, i, a) {
                var f = Fe(e),
                  d = Fe(t),
                  v = f ? u : qe(e),
                  m = d ? u : qe(t),
                  w = (v = v == c ? b : v) == b,
                  _ = (m = m == c ? b : m) == b,
                  Z = v == m;
                if (Z && We(e)) {
                  if (!We(t)) return !1;
                  (f = !0), (w = !1);
                }
                if (Z && !w)
                  return (
                    a || (a = new Oe()),
                    f || Qe(e)
                      ? je(e, t, r, n, i, a)
                      : (function (e, t, r, n, i, a, c) {
                          switch (r) {
                            case N:
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case O:
                              return !(
                                e.byteLength != t.byteLength ||
                                !a(new ie(e), new ie(t))
                              );
                            case l:
                            case p:
                            case y:
                              return Ke(+e, +t);
                            case h:
                              return e.name == t.name && e.message == t.message;
                            case E:
                            case k:
                              return e == t + "";
                            case g:
                              var u = V;
                            case x:
                              var f = n & s;
                              if ((u || (u = K), e.size != t.size && !f))
                                return !1;
                              var d = c.get(e);
                              if (d) return d == t;
                              (n |= o), c.set(e, t);
                              var v = je(u(e), u(t), n, i, a, c);
                              return c.delete(e), v;
                            case S:
                              if (xe) return xe.call(e) == xe.call(t);
                          }
                          return !1;
                        })(e, t, v, r, n, i, a)
                  );
                if (!(r & s)) {
                  var I = w && Q.call(e, "__wrapped__"),
                    P = _ && Q.call(t, "__wrapped__");
                  if (I || P) {
                    var A = I ? e.value() : e,
                      R = P ? t.value() : t;
                    return a || (a = new Oe()), i(A, R, r, n, a);
                  }
                }
                if (!Z) return !1;
                return (
                  a || (a = new Oe()),
                  (function (e, t, r, n, i, o) {
                    var a = r & s,
                      c = Le(e),
                      u = c.length,
                      f = Le(t),
                      l = f.length;
                    if (u != l && !a) return !1;
                    var p = u;
                    for (; p--; ) {
                      var h = c[p];
                      if (!(a ? h in t : Q.call(t, h))) return !1;
                    }
                    var d = o.get(e);
                    if (d && o.get(t)) return d == t;
                    var v = !0;
                    o.set(e, t), o.set(t, e);
                    var g = a;
                    for (; ++p < u; ) {
                      var y = e[(h = c[p])],
                        m = t[h];
                      if (n)
                        var b = a ? n(m, y, h, t, e, o) : n(y, m, h, e, t, o);
                      if (!(void 0 === b ? y === m || i(y, m, r, n, o) : b)) {
                        v = !1;
                        break;
                      }
                      g || (g = "constructor" == h);
                    }
                    if (v && !g) {
                      var w = e.constructor,
                        _ = t.constructor;
                      w == _ ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof w &&
                          w instanceof w &&
                          "function" == typeof _ &&
                          _ instanceof _) ||
                        (v = !1);
                    }
                    return o.delete(e), o.delete(t), v;
                  })(e, t, r, n, i, a)
                );
              })(e, t, r, n, Ue, i))
        );
      }
      function Te(e) {
        return (
          !(
            !Je(e) ||
            (function (e) {
              return !!$ && $ in e;
            })(e)
          ) && (Ge(e) ? te : P).test(Ve(e))
        );
      }
      function Ce(e) {
        if (
          !(function (e) {
            var t = e && e.constructor,
              r = ("function" == typeof t && t.prototype) || Y;
            return e === r;
          })(e)
        )
          return fe(e);
        var t = [];
        for (var r in Object(e))
          Q.call(e, r) && "constructor" != r && t.push(r);
        return t;
      }
      function je(e, t, r, n, i, a) {
        var c = r & s,
          u = e.length,
          f = t.length;
        if (u != f && !(c && f > u)) return !1;
        var l = a.get(e);
        if (l && a.get(t)) return l == t;
        var p = -1,
          h = !0,
          d = r & o ? new Ie() : void 0;
        for (a.set(e, t), a.set(t, e); ++p < u; ) {
          var v = e[p],
            g = t[p];
          if (n) var y = c ? n(g, v, p, t, e, a) : n(v, g, p, e, t, a);
          if (void 0 !== y) {
            if (y) continue;
            h = !1;
            break;
          }
          if (d) {
            if (
              !H(t, function (e, t) {
                if (((s = t), !d.has(s) && (v === e || i(v, e, r, n, a))))
                  return d.push(t);
                var s;
              })
            ) {
              h = !1;
              break;
            }
          } else if (v !== g && !i(v, g, r, n, a)) {
            h = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), h;
      }
      function Le(e) {
        return (function (e, t, r) {
          var n = t(e);
          return Fe(e)
            ? n
            : (function (e, t) {
                for (var r = -1, n = t.length, i = e.length; ++r < n; )
                  e[i + r] = t[r];
                return e;
              })(n, r(e));
        })(e, $e, ze);
      }
      function De(e, t) {
        var r = e.__data__;
        return (function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        })(t)
          ? r["string" == typeof t ? "string" : "hash"]
          : r.map;
      }
      function Me(e, t) {
        var r = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return Te(r) ? r : void 0;
      }
      (ke.prototype.clear = function () {
        (this.__data__ = ge ? ge(null) : {}), (this.size = 0);
      }),
        (ke.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (ke.prototype.get = function (e) {
          var t = this.__data__;
          if (ge) {
            var r = t[e];
            return r === i ? void 0 : r;
          }
          return Q.call(t, e) ? t[e] : void 0;
        }),
        (ke.prototype.has = function (e) {
          var t = this.__data__;
          return ge ? void 0 !== t[e] : Q.call(t, e);
        }),
        (ke.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = ge && void 0 === t ? i : t),
            this
          );
        }),
        (Se.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (Se.prototype.delete = function (e) {
          var t = this.__data__,
            r = Pe(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : oe.call(t, r, 1), --this.size, !0)
          );
        }),
        (Se.prototype.get = function (e) {
          var t = this.__data__,
            r = Pe(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (Se.prototype.has = function (e) {
          return Pe(this.__data__, e) > -1;
        }),
        (Se.prototype.set = function (e, t) {
          var r = this.__data__,
            n = Pe(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }),
        (Ze.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new ke(),
              map: new (pe || Se)(),
              string: new ke(),
            });
        }),
        (Ze.prototype.delete = function (e) {
          var t = De(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (Ze.prototype.get = function (e) {
          return De(this, e).get(e);
        }),
        (Ze.prototype.has = function (e) {
          return De(this, e).has(e);
        }),
        (Ze.prototype.set = function (e, t) {
          var r = De(this, e),
            n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }),
        (Ie.prototype.add = Ie.prototype.push =
          function (e) {
            return this.__data__.set(e, i), this;
          }),
        (Ie.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Oe.prototype.clear = function () {
          (this.__data__ = new Se()), (this.size = 0);
        }),
        (Oe.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (Oe.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (Oe.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Oe.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof Se) {
            var i = r.__data__;
            if (!pe || i.length < n - 1)
              return i.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new Ze(i);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var ze = ce
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function (e, t) {
                    for (
                      var r = -1, n = null == e ? 0 : e.length, i = 0, s = [];
                      ++r < n;

                    ) {
                      var o = e[r];
                      t(o, r, e) && (s[i++] = o);
                    }
                    return s;
                  })(ce(e), function (t) {
                    return se.call(e, t);
                  }));
            }
          : function () {
              return [];
            },
        qe = Ae;
      function He(e, t) {
        return (
          !!(t = null == t ? a : t) &&
          ("number" == typeof e || A.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function Ve(e) {
        if (null != e) {
          try {
            return X.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      }
      function Ke(e, t) {
        return e === t || (e !== e && t !== t);
      }
      ((le && qe(new le(new ArrayBuffer(1))) != N) ||
        (pe && qe(new pe()) != g) ||
        (he && qe(he.resolve()) != w) ||
        (de && qe(new de()) != x) ||
        (ve && qe(new ve()) != I)) &&
        (qe = function (e) {
          var t = Ae(e),
            r = t == b ? e.constructor : void 0,
            n = r ? Ve(r) : "";
          if (n)
            switch (n) {
              case ye:
                return N;
              case me:
                return g;
              case be:
                return w;
              case we:
                return x;
              case _e:
                return I;
            }
          return t;
        });
      var Be = Re(
          (function () {
            return arguments;
          })()
        )
          ? Re
          : function (e) {
              return Xe(e) && Q.call(e, "callee") && !se.call(e, "callee");
            },
        Fe = Array.isArray;
      var We =
        ue ||
        function () {
          return !1;
        };
      function Ge(e) {
        if (!Je(e)) return !1;
        var t = Ae(e);
        return t == d || t == v || t == f || t == _;
      }
      function Ye(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a;
      }
      function Je(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function Xe(e) {
        return null != e && "object" == typeof e;
      }
      var Qe = q
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })(q)
        : function (e) {
            return Xe(e) && Ye(e.length) && !!R[Ae(e)];
          };
      function $e(e) {
        return null != (t = e) && Ye(t.length) && !Ge(t) ? Ne(e) : Ce(e);
        var t;
      }
      e.exports = function (e, t) {
        return Ue(e, t);
      };
    },
    71157: function (e) {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, n) {
        var i = (n && n.stringify) || t;
        if ("object" === typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = new Array(s);
          o[0] = i(e);
          for (var a = 1; a < s; a++) o[a] = i(r[a]);
          return o.join(" ");
        }
        if ("string" !== typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var u = "", f = 0, l = -1, p = (e && e.length) || 0, h = 0;
          h < p;

        ) {
          if (37 === e.charCodeAt(h) && h + 1 < p) {
            switch (((l = l > -1 ? l : 0), e.charCodeAt(h + 1))) {
              case 100:
              case 102:
                if (f >= c) break;
                if (null == r[f]) break;
                l < h && (u += e.slice(l, h)),
                  (u += Number(r[f])),
                  (l = h + 2),
                  h++;
                break;
              case 105:
                if (f >= c) break;
                if (null == r[f]) break;
                l < h && (u += e.slice(l, h)),
                  (u += Math.floor(Number(r[f]))),
                  (l = h + 2),
                  h++;
                break;
              case 79:
              case 111:
              case 106:
                if (f >= c) break;
                if (void 0 === r[f]) break;
                l < h && (u += e.slice(l, h));
                var d = typeof r[f];
                if ("string" === d) {
                  (u += "'" + r[f] + "'"), (l = h + 2), h++;
                  break;
                }
                if ("function" === d) {
                  (u += r[f].name || "<anonymous>"), (l = h + 2), h++;
                  break;
                }
                (u += i(r[f])), (l = h + 2), h++;
                break;
              case 115:
                if (f >= c) break;
                l < h && (u += e.slice(l, h)),
                  (u += String(r[f])),
                  (l = h + 2),
                  h++;
                break;
              case 37:
                l < h && (u += e.slice(l, h)),
                  (u += "%"),
                  (l = h + 2),
                  h++,
                  f--;
            }
            ++f;
          }
          ++h;
        }
        if (-1 === l) return e;
        l < p && (u += e.slice(l));
        return u;
      };
    },
    62038: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.safeJsonParse = function (e) {
          if ("string" !== typeof e)
            throw new Error(
              "Cannot safe json parse value of type ".concat(typeof e)
            );
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }),
        (t.safeJsonStringify = function (e) {
          return "string" === typeof e
            ? e
            : JSON.stringify(e, function (e, t) {
                return "undefined" === typeof t ? null : t;
              });
        });
    },
    45559: function (e) {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    38416: function (e, t, r) {
      var n = r(64062);
      (e.exports = function (e, t, r) {
        return (
          (t = n(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    32656: function (e, t, r) {
      "use strict";
      var n = r(71157);
      e.exports = o;
      var i =
          (function () {
            function e(e) {
              return "undefined" !== typeof e && e;
            }
            try {
              return (
                "undefined" !== typeof globalThis ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {},
        s = {
          mapHttpRequest: p,
          mapHttpResponse: p,
          wrapRequestSerializer: h,
          wrapResponseSerializer: h,
          wrapErrorSerializer: h,
          req: p,
          res: p,
          err: function (e) {
            var t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (var r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        };
      function o(e) {
        (e = e || {}).browser = e.browser || {};
        var t = e.browser.transmit;
        if (t && "function" !== typeof t.send)
          throw Error("pino: transmit option must have a send function");
        var r = e.browser.write || i;
        e.browser.write && (e.browser.asObject = !0);
        var n = e.serializers || {},
          s = (function (e, t) {
            return Array.isArray(e)
              ? e.filter(function (e) {
                  return "!stdSerializers.err" !== e;
                })
              : !0 === e && Object.keys(t);
          })(e.browser.serialize, n),
          p = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (p = !1);
        "function" === typeof r &&
          (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = "silent");
        var h = e.level || "info",
          v = Object.create(r);
        v.log || (v.log = d),
          Object.defineProperty(v, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(v, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                a(g, v, "error", "log"),
                a(g, v, "fatal", "error"),
                a(g, v, "warn", "error"),
                a(g, v, "info", "log"),
                a(g, v, "debug", "log"),
                a(g, v, "trace", "log");
            },
          });
        var g = {
          transmit: t,
          serialize: s,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: l(e),
        };
        return (
          (v.levels = o.levels),
          (v.level = h),
          (v.setMaxListeners =
            v.getMaxListeners =
            v.emit =
            v.addListener =
            v.on =
            v.prependListener =
            v.once =
            v.prependOnceListener =
            v.removeListener =
            v.removeAllListeners =
            v.listeners =
            v.listenerCount =
            v.eventNames =
            v.write =
            v.flush =
              d),
          (v.serializers = n),
          (v._serialize = s),
          (v._stdErrSerialize = p),
          (v.child = function (r, i) {
            if (!r) throw new Error("missing bindings for child Pino");
            (i = i || {}),
              s && r.serializers && (i.serializers = r.serializers);
            var o = i.serializers;
            if (s && o) {
              var a = Object.assign({}, n, o),
                l = !0 === e.browser.serialize ? Object.keys(a) : s;
              delete r.serializers, c([r], l, a, this._stdErrSerialize);
            }
            function p(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = u(e, r, "error")),
                (this.fatal = u(e, r, "fatal")),
                (this.warn = u(e, r, "warn")),
                (this.info = u(e, r, "info")),
                (this.debug = u(e, r, "debug")),
                (this.trace = u(e, r, "trace")),
                a && ((this.serializers = a), (this._serialize = l)),
                t && (this._logEvent = f([].concat(e._logEvent.bindings, r)));
            }
            return (p.prototype = this), new p(this);
          }),
          t && (v._logEvent = f()),
          v
        );
      }
      function a(e, t, r, s) {
        var a = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? d
            : a[r]
            ? a[r]
            : i[r] || i[s] || d),
          (function (e, t, r) {
            if (!e.transmit && t[r] === d) return;
            t[r] =
              ((s = t[r]),
              function () {
                for (
                  var a = e.timestamp(),
                    u = new Array(arguments.length),
                    l =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                        ? i
                        : this,
                    p = 0;
                  p < u.length;
                  p++
                )
                  u[p] = arguments[p];
                if (
                  (e.serialize &&
                    !e.asObject &&
                    c(
                      u,
                      this._serialize,
                      this.serializers,
                      this._stdErrSerialize
                    ),
                  e.asObject
                    ? s.call(
                        l,
                        (function (e, t, r, i) {
                          e._serialize &&
                            c(
                              r,
                              e._serialize,
                              e.serializers,
                              e._stdErrSerialize
                            );
                          var s = r.slice(),
                            a = s[0],
                            u = {};
                          i && (u.time = i), (u.level = o.levels.values[t]);
                          var f = 1 + (0 | e._childLevel);
                          if (
                            (f < 1 && (f = 1),
                            null !== a && "object" === typeof a)
                          ) {
                            for (; f-- && "object" === typeof s[0]; )
                              Object.assign(u, s.shift());
                            a = s.length ? n(s.shift(), s) : void 0;
                          } else "string" === typeof a && (a = n(s.shift(), s));
                          return void 0 !== a && (u.msg = a), u;
                        })(this, r, u, a)
                      )
                    : s.apply(l, u),
                  e.transmit)
                ) {
                  var h = e.transmit.level || t.level,
                    d = o.levels.values[h],
                    v = o.levels.values[r];
                  if (v < d) return;
                  !(function (e, t, r) {
                    var n = t.send,
                      i = t.ts,
                      s = t.methodLevel,
                      o = t.methodValue,
                      a = t.val,
                      u = e._logEvent.bindings;
                    c(
                      r,
                      e._serialize || Object.keys(e.serializers),
                      e.serializers,
                      void 0 === e._stdErrSerialize || e._stdErrSerialize
                    ),
                      (e._logEvent.ts = i),
                      (e._logEvent.messages = r.filter(function (e) {
                        return -1 === u.indexOf(e);
                      })),
                      (e._logEvent.level.label = s),
                      (e._logEvent.level.value = o),
                      n(s, e._logEvent, a),
                      (e._logEvent = f(u));
                  })(
                    this,
                    {
                      ts: a,
                      methodLevel: r,
                      methodValue: v,
                      transmitLevel: h,
                      transmitValue:
                        o.levels.values[e.transmit.level || t.level],
                      send: e.transmit.send,
                      val: t.levelVal,
                    },
                    u
                  );
                }
              });
            var s;
          })(e, t, r);
      }
      function c(e, t, r, n) {
        for (var i in e)
          if (n && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
          else if ("object" === typeof e[i] && !Array.isArray(e[i]))
            for (var s in e[i])
              t && t.indexOf(s) > -1 && s in r && (e[i][s] = r[s](e[i][s]));
      }
      function u(e, t, r) {
        return function () {
          var n = new Array(1 + arguments.length);
          n[0] = t;
          for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
          return e[r].apply(this, n);
        };
      }
      function f(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function l(e) {
        return "function" === typeof e.timestamp
          ? e.timestamp
          : !1 === e.timestamp
          ? v
          : g;
      }
      function p() {
        return {};
      }
      function h(e) {
        return e;
      }
      function d() {}
      function v() {
        return !1;
      }
      function g() {
        return Date.now();
      }
      (o.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (o.stdSerializers = s),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: v,
            epochTime: g,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
//# sourceMappingURL=598.b0187169.chunk.js.map
