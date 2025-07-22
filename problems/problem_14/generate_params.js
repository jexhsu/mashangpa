z = {
    GygXY: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    kWHRV: function (e, b) {
        return e >> b;
    },
    BwNcK: function (e, b) {
        return e & b;
    },
    zNuXO: function (e, b) {
        return e << b;
    },
    fDawx: function (e, b) {
        return e + b;
    },
    WHiaC: function (e, b) {
        return e !== b;
    },
    // JYBsi: X(399),
    // mxJvM: X(393),
    // EgTlB: "CGWMT",
    // IWChf: X(406),
    EpqwK: function (e, b) {
        return e ^ b;
    },
    BohQq: function (e, b) {
        return e < b;
    },
    ZmbOa: function (e, b) {
        return e < b;
    },
    xBUPA: function (e, b) {
        return e >> b;
    },
    sidYy: function (e, b) {
        return e | b;
    },
    fYalM: function (e, b) {
        return e << b;
    },
    XmzRs: function (e, b) {
        return e >> b;
    },
    dUltK: function (e, b) {
        return e(b);
    },
    tHWUQ: function (e, b) {
        return e < b;
    },
    GQLce: function (e, b) {
        return e % b;
    },
    qlWPI: function (e, b) {
        return e === b;
    },
    yEzeL: "dasdasdarqwdasdasqwdasda",
    sThMM: function (e, b) {
        return e(b);
    },
    IZCdB: function (e, b, f) {
        return e(b, f);
    },
};

f = {
    RLvtt: function (N, W) {
        return z["tHWUQ"](N, W);
    },
    IdJpS: function (N, W) {
        return z["GQLce"](N, W);
    },
};

function B(b, f, p) {
    return b ^ z["zNuXO"](f, p % 8);
}

function J(b, f, p) {
    return z["IWChf"] === z["IWChf"] ? z["EpqwK"](b, f >> p % 8) : Q ^ z["zNuXO"](v, d % 8);
}

function Y(b, f) {
    return (b = b + f - f) ^ f;
}

ts = new Date().getTime();
var p = (function (N) {
    let W = 0;
    for (let L = 0; z.tHWUQ(L, N.length); L++) {
        var O = N.charCodeAt(L);
        for (let y = 0; y < 20; y++) {
            switch (f["IdJpS"](y, 3)) {
                case 0:
                    W = B.apply(null, [W, O, y]);
                    break;
                case 1:
                    W = J.apply(null, [W, O, y]);
                    break;
                case 2:
                    W = Y["apply"](null, [W, O]);
            }
        }
    }
    return W;
})(z.yEzeL + ts);
p = p.toString(16);
m = (function (N) {
    var W = z.GygXY;
    let O = "",
        L,
        y,
        k,
        H,
        D,
        K,
        S,
        I = 0;
    for (; z.BohQq(I, N.length); ) {
        L = N.charCodeAt(I++);
        y = z.ZmbOa(I, N.length) ? N.charCodeAt(I++) : 0;
        k = I < N["length"] ? N.charCodeAt(I++) : 0;
        H = L >> 2;
        D = ((3 & L) << 4) | z.xBUPA(y, 4);
        K = z.sidYy(z.fYalM(15 & y, 2), z["XmzRs"](k, 6));
        S = 63 & k;
        isNaN(y) ? (K = S = 64) : z["dUltK"](isNaN, k) && (S = 64);
        O = z.fDawx(O, W.charAt(H)) + W["charAt"](D) + W["charAt"](K) + W.charAt(S);
    }
    return O;
})(z.fDawx(p, ts));

function generateParams() {
    ts = new Date().getTime();
    var p = (function (N) {
        let W = 0;
        for (let L = 0; z.tHWUQ(L, N.length); L++) {
            var O = N.charCodeAt(L);
            for (let y = 0; y < 20; y++) {
                switch (f["IdJpS"](y, 3)) {
                    case 0:
                        W = B.apply(null, [W, O, y]);
                        break;
                    case 1:
                        W = J.apply(null, [W, O, y]);
                        break;
                    case 2:
                        W = Y["apply"](null, [W, O]);
                }
            }
        }
        return W;
    })(z.yEzeL + ts);
    p = p.toString(16);
    m = (function (N) {
        var W = z.GygXY;
        let O = "",
            L,
            y,
            k,
            H,
            D,
            K,
            S,
            I = 0;
        for (; z.BohQq(I, N.length); ) {
            L = N.charCodeAt(I++);
            y = z.ZmbOa(I, N.length) ? N.charCodeAt(I++) : 0;
            k = I < N["length"] ? N.charCodeAt(I++) : 0;
            H = L >> 2;
            D = ((3 & L) << 4) | z.xBUPA(y, 4);
            K = z.sidYy(z.fYalM(15 & y, 2), z["XmzRs"](k, 6));
            S = 63 & k;
            isNaN(y) ? (K = S = 64) : z["dUltK"](isNaN, k) && (S = 64);
            O = z.fDawx(O, W.charAt(H)) + W["charAt"](D) + W["charAt"](K) + W.charAt(S);
        }
        return O;
    })(z.fDawx(p, ts));
    return { m };
}
(function main() {
    const params = generateParams();
    console.log(JSON.stringify(params));
})();
