const { _2bgg1, _1lwg1, _$a04afa8c } = require("./ultra_long_array")
const { a04afa8n } = require("./string_decoder")

const _$lR = {
    E: 2.718281828459045,
    LN2: 0.6931471805599453,
    LN10: 2.302585092994046,
    LOG2E: 1.4426950408889634,
    LOG10E: 0.4342944819032518,
    PI: 3.141592653589793,
    SQRT1_2: 0.7071067811865476,
    SQRT2: 1.4142135623730951
};
iUZdI = function (_$lz, _$lG) {
    return _$lz / _$lG;
},
    lQVDz = function (_$lz, _$lG) {
        return _$lz < _$lG;
    },
    _$lD = {
        'nJMls': function (_$lJ, _$lg) {
            return _$lJ % _$lg;
        },
        'lhVQG': function (_$lJ, _$lg) {
            return iUZdI(_$lJ, _$lg);
        },
        'UnvGL': function (_$lJ, _$lg) {
            return _$lJ == _$lg;
        },
        'javdy': function (_$lJ, _$lg) {
            return _$lJ * _$lg;
        },
        'JrwNu': function (_$lJ, _$lg) {
            return lQVDz(_$lJ, _$lg);
        },
        'ZliJj': a04afa8n(0x225),
        'pkNbW': function (_$lJ, _$lg) {
            return _$lJ < _$lg;
        }
    };

const mathMethods = [
    'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh',
    'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor',
    'fround', 'hypot', 'imul', 'log', 'log10', 'log1p', 'log2', 'max',
    'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt',
    'tan', 'tanh', 'trunc'
];

mathMethods.forEach(method => {
    if (typeof Math[method] === 'function') {
        _$lR[method] = Math[method];
    }
});

_seData = function (_$lg) {
    return this._seData1(_$lg);
};
_seData1 = function (_$lg) {
    'use strict';
    var k = Function.prototype.call;
    var w = _2bgg1;
    var XB, _$ld, _$lh, _$lQ, _$lV, _$lK, _$lC, _$le, _$ly, _$lH, _$lA, _$lI;
    var p = [];
    var a = 200;
    var j, m;
    l3: for (;;) {
        switch (w[a++]) {
            case 1:
                j = p.pop();
                p[p.length - 1] = p[p.length - 1] < j;
                break;
            case 2:
                p.push(null);
                break;
            case 4:
                j = p.pop();
                p[p.length - 1] -= j;
                break;
            case 7:
                p[p.length - 4] = k.call(p[p.length - 4], p[p.length - 3], p[p.length - 2], p[p.length - 1]);
                p.length -= 3;
                break;
            case 8:
                p.push(_$le);
                break;
            case 11:
                p.push(_$lD);
                break;
            case 13:
                _$lQ = p[p.length - 1];
                break;
            case 16:
                p.push(_$lg);
                break;
            case 19:
                p.push(_$ly);
                break;
            case 23:
                _$lV = p[p.length - 1];
                break;
            case 24:
                p.push(XB);
                break;
            case 25:
                _$lH = p[p.length - 1];
                break;
            case 26:
                p.push(p[p.length - 1]);
                p[p.length - 2] = p[p.length - 2][_1lwg1[17 + w[a++]]];
                break;
            case 27:
                return;
            case 28:
                p.push(_$lR);
                break;
            case 29:
                j = p.pop();
                p[p.length - 1] = p[p.length - 1] === j;
                break;
            case 30:
                p[p.length - 1] = p[p.length - 1].length;
                break;
            case 31:
                _$ly = p[p.length - 1];
                break;
            case 32:
                if (p[p.length - 1]) {
                    ++a;
                    --p.length;
                } else
                    a += w[a];
                break;
            case 37:
                _$lh = p[p.length - 1];
                break;
            case 42:
                p.push(w[a++]);
                break;
            case 43:
                p.push(_$lC);
                break;
            case 45:
                XB = p[p.length - 1];
                break;
            case 46:
                if (p[p.length - 2] != null) {
                    p[p.length - 3] = k.call(p[p.length - 3], p[p.length - 2], p[p.length - 1]);
                    p.length -= 2;
                } else {
                    j = p[p.length - 3];
                    p[p.length - 3] = j(p[p.length - 1]);
                    p.length -= 2;
                }
                break;
            case 49:
                p.push(_$lI);
                break;
            case 51:
                p.push(_$lA++);
                break;
            case 53:
                p.push(a04afa8n);
                break;
            case 54:
                p.push(_$lh);
                break;
            case 55:
                p.push(_$lA);
                break;
            case 57:
                p.push(_$ld);
                break;
            case 59:
                p.push(_$lH);
                break;
            case 61:
                _$ld = p[p.length - 1];
                break;
            case 62:
                _$lI = p[p.length - 1];
                break;
            case 63:
                if (p.pop())
                    a += w[a];
                else
                    ++a;
                break;
            case 65:
                a += w[a];
                break;
            case 66:
                j = p.pop();
                p[p.length - 1] += j;
                break;
            case 67:
                p.pop();
                break;
            case 68:
                return p.pop();
            case 69:
                _$lC = p[p.length - 1];
                break;
            case 70:
                p.push(_$lK);
                break;
            case 72:
                j = p.pop();
                p[p.length - 1] /= j;
                break;
            case 73:
                p.push(_$lC++);
                break;
            case 79:
                if (p.pop())
                    ++a;
                else
                    a += w[a];
                break;
            case 80:
                _$lK = p[p.length - 1];
                break;
            case 81:
                p.push(new Array(w[a++]));
                break;
            case 82:
                p.push(_$lQ);
                break;
            case 85:
                p.push(_1lwg1[17 + w[a++]]);
                break;
            case 86:
                j = p.pop();
                p[p.length - 1] *= j;
                break;
            case 93:
                _$le = p[p.length - 1];
                break;
            case 94:
                _$lA = p[p.length - 1];
                break;
            case 95:
                p.push(_$lV);
                break;
        }
    }
};
const CryptoJS = require("crypto-js");

function wordsToUint8Array(words) {
    const u8 = new Uint8Array(words.length * 4);
    for (let i = 0;i < words.length;i++) {
        u8[i * 4] = (words[i] >>> 24) & 0xff;
        u8[i * 4 + 1] = (words[i] >>> 16) & 0xff;
        u8[i * 4 + 2] = (words[i] >>> 8) & 0xff;
        u8[i * 4 + 3] = words[i] & 0xff;
    }
    return u8;
}

function generateSign({ hex, page }) {
    let rawData;
    if (typeof page !== "undefined") {
        rawData = `${hex}page:${page}&t:${hex}`;
    } else {
        rawData = `${hex}appid:appid&functionId:functionId${hex}`;
    }

    // encode
    const input = _seData(rawData) + "R]dev/";

    // 1. SHA-256 digest (32 bytes)
    const sha256Hash = CryptoJS.SHA256(input);
    const digestBytes = wordsToUint8Array(sha256Hash.words);

    // 2. Reverse first 5 bytes, but overwrite, not prepend
    const reversed5 = Array.from(digestBytes.slice(0, 5)).reverse();
    for (let i = 0;i < 5;i++) {
        digestBytes[i] = reversed5[i];
    }

    // 3. Still 32 bytes → 64 hex chars
    const fixedWordArray = CryptoJS.lib.WordArray.create(digestBytes);
    return CryptoJS.enc.Hex.stringify(fixedWordArray);
}

module.exports = generateSign;
