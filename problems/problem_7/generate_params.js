function G(p, v) {
  var L = (65535 & p) + (65535 & v);
  return (((p >> 16) + (v >> 16) + (L >> 16)) << 16) | (65535 & L);
}
function z(p, v, L, j, E, b) {
  return G(
    (function (Q, U) {
      return (Q << E) | (Q >>> (32 - E));
    })(G(G(v, p), G(j, b))),
    L
  );
}
function S(p, v, L, j, E, b, H) {
  return z((v & L) | (~v & j), p, v, E, b, H);
}
function F(p, v, L, j, E, b, H) {
  return z((v & j) | (L & ~j), p, v, E, b, H);
}
function C(p, v, L, j, E, b, H) {
  return z(v ^ L ^ j, p, v, E, b, H);
}
function s(p) {
  var L,
    j = [];
  for (j[(p.length >> 2) - 1] = void 0, L = 0; L < j.length; L += 1) {
    j[L] = 0;
  }
  var E = 8 * p.length;
  for (L = 0; L < E; L += 8) {
    j[L >> 5] |= (255 & p.charCodeAt(L / 8)) << L % 32;
  }
  return j;
}
function Z(p, v, L, j, E, b, H) {
  return z(L ^ (v | ~j), p, v, E, b, H);
}
function X(p, L) {
  var U, D, J, N0, N1;
  p[L >> 5] |= 128 << L % 32;
  p[14 + (((L + 64) >>> 9) << 4)] = L;
  var b = 1732584193,
    H = -271733879,
    m = -1732584194,
    Q = 271733878;
  for (U = 0; U < p.length; U += 16) {
    H = Z(
      (H = Z(
        (H = Z(
          (H = Z(
            (H = C(
              (H = C(
                (H = C(
                  (H = C(
                    (H = F(
                      (H = F(
                        (H = F(
                          (H = F(
                            (H = S(
                              (H = S(
                                (H = S(
                                  (H = S(
                                    (J = H),
                                    (m = S(
                                      (N0 = m),
                                      (Q = S(
                                        (N1 = Q),
                                        (b = S(
                                          (D = b),
                                          H,
                                          m,
                                          Q,
                                          p[U],
                                          7,
                                          -680876936
                                        )),
                                        H,
                                        m,
                                        p[U + 1],
                                        12,
                                        -389564586
                                      )),
                                      b,
                                      H,
                                      p[U + 2],
                                      17,
                                      606105819
                                    )),
                                    Q,
                                    b,
                                    p[U + 3],
                                    22,
                                    -1044525330
                                  )),
                                  (m = S(
                                    m,
                                    (Q = S(
                                      Q,
                                      (b = S(
                                        b,
                                        H,
                                        m,
                                        Q,
                                        p[U + 4],
                                        7,
                                        -176418897
                                      )),
                                      H,
                                      m,
                                      p[U + 5],
                                      12,
                                      1200080426
                                    )),
                                    b,
                                    H,
                                    p[U + 6],
                                    17,
                                    -1473231341
                                  )),
                                  Q,
                                  b,
                                  p[U + 7],
                                  22,
                                  -45705983
                                )),
                                (m = S(
                                  m,
                                  (Q = S(
                                    Q,
                                    (b = S(
                                      b,
                                      H,
                                      m,
                                      Q,
                                      p[U + 8],
                                      7,
                                      1770035416
                                    )),
                                    H,
                                    m,
                                    p[U + 9],
                                    12,
                                    -1958414417
                                  )),
                                  b,
                                  H,
                                  p[U + 10],
                                  17,
                                  -42063
                                )),
                                Q,
                                b,
                                p[U + 11],
                                22,
                                -1990404162
                              )),
                              (m = S(
                                m,
                                (Q = S(
                                  Q,
                                  (b = S(b, H, m, Q, p[U + 12], 7, 1804603682)),
                                  H,
                                  m,
                                  p[U + 13],
                                  12,
                                  -40341101
                                )),
                                b,
                                H,
                                p[U + 14],
                                17,
                                -1502002290
                              )),
                              Q,
                              b,
                              p[U + 15],
                              22,
                              1236535329
                            )),
                            (m = F(
                              m,
                              (Q = F(
                                Q,
                                (b = F(b, H, m, Q, p[U + 1], 5, -165796510)),
                                H,
                                m,
                                p[U + 6],
                                9,
                                -1069501632
                              )),
                              b,
                              H,
                              p[U + 11],
                              14,
                              643717713
                            )),
                            Q,
                            b,
                            p[U],
                            20,
                            -373897302
                          )),
                          (m = F(
                            m,
                            (Q = F(
                              Q,
                              (b = F(b, H, m, Q, p[U + 5], 5, -701558691)),
                              H,
                              m,
                              p[U + 10],
                              9,
                              38016083
                            )),
                            b,
                            H,
                            p[U + 15],
                            14,
                            -660478335
                          )),
                          Q,
                          b,
                          p[U + 4],
                          20,
                          -405537848
                        )),
                        (m = F(
                          m,
                          (Q = F(
                            Q,
                            (b = F(b, H, m, Q, p[U + 9], 5, 568446438)),
                            H,
                            m,
                            p[U + 14],
                            9,
                            -1019803690
                          )),
                          b,
                          H,
                          p[U + 3],
                          14,
                          -187363961
                        )),
                        Q,
                        b,
                        p[U + 8],
                        20,
                        1163531501
                      )),
                      (m = F(
                        m,
                        (Q = F(
                          Q,
                          (b = F(b, H, m, Q, p[U + 13], 5, -1444681467)),
                          H,
                          m,
                          p[U + 2],
                          9,
                          -51403784
                        )),
                        b,
                        H,
                        p[U + 7],
                        14,
                        1735328473
                      )),
                      Q,
                      b,
                      p[U + 12],
                      20,
                      -1926607734
                    )),
                    (m = C(
                      m,
                      (Q = C(
                        Q,
                        (b = C(b, H, m, Q, p[U + 5], 4, -378558)),
                        H,
                        m,
                        p[U + 8],
                        11,
                        -2022574463
                      )),
                      b,
                      H,
                      p[U + 11],
                      16,
                      1839030562
                    )),
                    Q,
                    b,
                    p[U + 14],
                    23,
                    -35309556
                  )),
                  (m = C(
                    m,
                    (Q = C(
                      Q,
                      (b = C(b, H, m, Q, p[U + 1], 4, -1530992060)),
                      H,
                      m,
                      p[U + 4],
                      11,
                      1272893353
                    )),
                    b,
                    H,
                    p[U + 7],
                    16,
                    -155497632
                  )),
                  Q,
                  b,
                  p[U + 10],
                  23,
                  -1094730640
                )),
                (m = C(
                  m,
                  (Q = C(
                    Q,
                    (b = C(b, H, m, Q, p[U + 13], 4, 681279174)),
                    H,
                    m,
                    p[U],
                    11,
                    -358537222
                  )),
                  b,
                  H,
                  p[U + 3],
                  16,
                  -722521979
                )),
                Q,
                b,
                p[U + 6],
                23,
                76029189
              )),
              (m = C(
                m,
                (Q = C(
                  Q,
                  (b = C(b, H, m, Q, p[U + 9], 4, -640364487)),
                  H,
                  m,
                  p[U + 12],
                  11,
                  -421815835
                )),
                b,
                H,
                p[U + 15],
                16,
                530742520
              )),
              Q,
              b,
              p[U + 2],
              23,
              -995338651
            )),
            (m = Z(
              m,
              (Q = Z(
                Q,
                (b = Z(b, H, m, Q, p[U], 6, -198630844)),
                H,
                m,
                p[U + 7],
                10,
                1126891415
              )),
              b,
              H,
              p[U + 14],
              15,
              -1416354905
            )),
            Q,
            b,
            p[U + 5],
            21,
            -57434055
          )),
          (m = Z(
            m,
            (Q = Z(
              Q,
              (b = Z(b, H, m, Q, p[U + 12], 6, 1700485571)),
              H,
              m,
              p[U + 3],
              10,
              -1894986606
            )),
            b,
            H,
            p[U + 10],
            15,
            -1051523
          )),
          Q,
          b,
          p[U + 1],
          21,
          -2054922799
        )),
        (m = Z(
          m,
          (Q = Z(
            Q,
            (b = Z(b, H, m, Q, p[U + 8], 6, 1873313359)),
            H,
            m,
            p[U + 15],
            10,
            -30611744
          )),
          b,
          H,
          p[U + 6],
          15,
          -1560198380
        )),
        Q,
        b,
        p[U + 13],
        21,
        1309151649
      )),
      (m = Z(
        m,
        (Q = Z(
          Q,
          (b = Z(b, H, m, Q, p[U + 4], 6, -145523070)),
          H,
          m,
          p[U + 11],
          10,
          -1120210379
        )),
        b,
        H,
        p[U + 2],
        15,
        718787259
      )),
      Q,
      b,
      p[U + 9],
      21,
      -343485551
    );
    b = G(b, D);
    H = G(H, J);
    m = G(m, N0);
    Q = G(Q, N1);
  }
  return [b, H, m, Q];
}
function V(p) {
  var v,
    L = "",
    j = 32 * p.length;
  for (v = 0; v < j; v += 8) {
    L += String.fromCharCode((p[v >> 5] >>> v % 32) & 255);
  }
  return L;
}
function P(p) {
  var v,
    L,
    j = "0123456789abcdef",
    E = "";
  for (L = 0; L < p.length; L += 1) {
    v = p.charCodeAt(L);
    E += j.charAt((v >>> 4) & 15) + j.charAt(15 & v);
  }
  return E;
}
function k(p) {
  return unescape(encodeURIComponent(p));
}
function q(p) {
  return (function (L) {
    return V(X(s(L), 8 * L.length));
  })(k(p));
}
function K(p, v) {
  return (function (j, E) {
    var b,
      H,
      m = s(j),
      Q = [],
      U = [];
    for (
      Q[15] = U[15] = void 0, 16 < m.length && (m = X(m, 8 * j.length)), b = 0;
      b < 16;
      b += 1
    ) {
      Q[b] = 909522486 ^ m[b];
      U[b] = 1549556828 ^ m[b];
    }
    return (H = X(Q.concat(s(E)), 512 + 8 * E.length)), V(X(U.concat(H), 640));
  })(k(p), k(v));
}
window = {};
window.eeee = function (p, v, L) {
  return v
    ? L
      ? K(v, p)
      : (function (E, b) {
          return P(K(E, b));
        })(v, p)
    : L
    ? q(p)
    : (function (E) {
        return P(q(E));
      })(p);
};
const CryptoJS = require("crypto-js");
function generateParams() {
  const ts = new Date().getTime();

  const m = window.eeee("xialuo" + ts);

  const x = encodeURIComponent(CryptoJS.SHA256(m + "xxoo").toString());

  return { ts, m, x };
}

(function main() {
  const params = generateParams();
  console.log(JSON.stringify(params));
})();
