const CryptoJS = require("crypto-js");
const { _2bgg1, _1lwg1 } = require("./ultra_long_array")
const { a04afa8n } = require("./string_decoder")
const { rd } = require('./custom_Hash_generator')
const _$lY = {
    lib: {
        Base: CryptoJS.lib.Base,
        WordArray: CryptoJS.lib.WordArray,
        BufferedBlockAlgorithm: CryptoJS.lib.BufferedBlockAlgorithm,
        Hasher: CryptoJS.lib.Hasher
    },
    enc: {
        Hex: CryptoJS.enc.Hex,
        Latin1: CryptoJS.enc.Latin1,
        Utf8: CryptoJS.enc.Utf8,
        Base64: {
            ...CryptoJS.enc.Base64,
            _map1: "ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba",
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _reverseMap: [
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null, null, 62, null, null, null, 63,
                52, 53, 54, 55, 56, 57, 58, 59, 60, 61, null, null, null, 64, null, null, null,
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                16, 17, 18, 19, 20, 21, 22, 23, 24, 25, null, null, null, null, null, null,
                26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
                42, 43, 44, 45, 46, 47, 48, 49, 50, 51
            ]
        },
        "Utils": {
            "toWordArray": function (_$lg) {
                for (var _$ld = [], _$lh = -0x1 * -0x11da + 0x1ba6 + 0x5b0 * -0x8;_$lh < _$lg.length;_$lh++)
                    _$ld[_$lh >>> -0x2338 + -0x1379 * 0x1 + -0x43 * -0xd1] |= _$lg[_$lh] << 0x369 + 0x1082 * -0x1 + -0xb * -0x133 - _$lh % (0x1 * 0x1a51 + 0x407 * -0x7 + 0xb * 0x2c) * (0x339 * -0x5 + 0x22d5 * 0x1 + 0xd * -0x170);
                return CryptoJS.lib.WordArray.create(_$ld, _$lg.length);
            },
            "fromWordArray": function (_$lg) {
                for (var _$ld = new Uint8Array(_$lg.sigBytes), _$lh = -0x22de * 0x1 + 0x1 * -0x4af + -0x87 * -0x4b;_$lh < _$lg.sigBytes;_$lh++)
                    _$ld[_$lh] = _$lg.words[_$lh >>> -0xc2f + 0x1 * -0x1be0 + 0x2811] >>> -0xc5 * 0x1e + 0x13 * -0x195 + 0x4d7 * 0xb - _$lh % (-0x1d3 * -0x11 + -0x2cf * 0x1 + 0x1c30 * -0x1) * (0x1e4d * 0x1 + -0x824 * -0x2 + -0x2e8d) & -0x2355 + -0x369 + 0x27bd;
                return _$ld;
            }
        }
    },
    algo: {
        MD5: CryptoJS.algo.MD5,
        SHA256: CryptoJS.algo.SHA256,
        HMAC: CryptoJS.algo.HMAC
    }
};

var _$kN = Array.prototype.slice,
    _$ka = Function.prototype.call.bind(Object.prototype.isPrototypeOf),
    _$kr = _$kN,
    _$kx = Array.prototype,
    _$kP = function (_$lz) {
        var _$lG = _$lz.slice;
        return (_$lz === _$kx || _$ka(_$kx, _$lz)) && _$lG === _$kx.slice ? _$kr : _$lG;
    };
var _$ft = Function.prototype.call.bind(Object.prototype.isPrototypeOf)
    , _$fk = Array.prototype.reverse
    , _$fz = Array.prototype
    , _$fG = function (_$lR) {
        var _$lw = _$lR.reverse;
        return _$lR === _$fz || _$ft(_$fz, _$lR) && _$lw === _$fz.reverse ? _$fk : _$lw;
    }
_$lU = {
    'FZFZS': function (_$lv, _$lo) {
        return _$lv * _$lo;
    },
    'Huehz': function (_$lv, _$lo) {
        return _$lv >>> _$lo;
    },
    'bNFpJ': function (_$lv, _$lo) {
        return _$lv | _$lo;
    },
    'xUrte': function (_$lv, _$lo) {
        return _$lv & _$lo;
    },
    'ztUTM': function (_$lv, _$lo) {
        return _$lv < _$lo;
    },
    'gIIHo': function (_$lv, _$lo) {
        return _$lv < _$lo;
    },
    'VNOOv': function (_$lv, _$lo, _$lf, _$lT) {
        return _$lv(_$lo, _$lf, _$lT);
    },
    'itIKe': function (_$lv, _$lo) {
        return _$lv(_$lo);
    }
}

Base64 = {
    'stringify': function (_$lv) {
        return this.stringify1(_$lv, 0x16aa + -0x1 * -0x1b5d + -0x3206);
    },
    'stringify1': function (_$lv, _$lo) {
        var _$lf = _$lv.words
            , _$lT = _$lv.sigBytes
            , _$ll = -0x501 + -0x2 * 0x1e8 + 0x8d2 === _$lo ? this._map : this._map1;
        _$lv.clamp();
        for (var _$lm = [], _$lX = 0xfbe + 0xb1d + -0x1adb;_$lX < _$lT;_$lX += 0x2129 + -0x5c1 + -0x1b65)
            for (var _$lE = _$lU.bNFpJ(_$lU.xUrte(_$lf[_$lX >>> 0xf4f * -0x2 + 0x160 * 0x14 + 0x320] >>> -0x12b2 + -0x16a * 0x14 + 0x2f12 - _$lX % (-0x1 * 0x2061 + -0x10b9 + 0x311e) * (-0xb * -0x59 + -0xe34 + 0x1 * 0xa69), -0xc21 * 0x3 + -0x7f * 0x1f + 0x1 * 0x34c3) << -0x1747 * -0x1 + 0x90b + 0x2 * -0x1021, (_$lU.Huehz(_$lf[_$lU.Huehz(_$lX + (-0xc2 + 0x8ff + -0x83c), -0x12b5 + 0x2 * -0xaba + 0x282b)], 0x17e0 + -0x1d9f * 0x1 + 0x5d7 - (_$lX + (0x1 * -0xe39 + 0x1 * -0x713 + -0x29 * -0x85)) % (0x7f * 0x45 + 0x4f * 0x61 + -0x4026) * (0xb * -0x179 + -0x1b * -0x7f + 0x2d6)) & 0x2 * -0x114d + -0x15e2 + 0x397b) << -0x306 + -0x2214 * 0x1 + 0x2522) | _$lf[_$lX + (-0x16e7 + -0xebf + -0xf1 * -0x28) >>> -0xdf * -0x15 + 0x1c0f + -0x172c * 0x2] >>> -0x1734 + 0x439 + 0x1313 - (_$lX + (-0x1 * -0x117d + 0x92d + 0x1 * -0x1aa8)) % (0x6 * 0x4dc + -0x7 * -0x160 + -0x26c4) * (0x1da5 + -0xad7 + -0x12c6) & -0x1 * 0xf9f + -0x16c5 + 0x2763, _$lJ = -0x9 * 0x9f + -0x1 * 0xfb0 + -0x1 * -0x1547;_$lJ < -0x2 * -0x145 + 0x2 * -0x11a5 + 0x3a4 * 0x9 && _$lU.ztUTM(_$lX + (-0x6 * -0x468 + 0x1de4 + -0x3854 + 0.75) * _$lJ, _$lT);_$lJ++)
                _$lm.push(_$ll.charAt(_$lE >>> (-0x3 * -0x5e2 + -0x23 + -0x117d) * (-0xf79 + 0x209 + -0xb * -0x139 - _$lJ) & 0x1f * -0xcd + -0x216c + 0x3a7e));
        var _$lg = _$ll.charAt(-0x21ab + -0x1e31 + 0x401c);
        if (_$lg) {
            for (;_$lm.length % (0xf68 + 0x1e49 * -0x1 + 0xee5);)
                _$lm.push(_$lg);
        }
        return _$lm.join('');
    },
    'parse': function (_$lv) {
        var _$lo = _$lv.length
            , _$lf = this._map
            , _$lT = this._reverseMap;
        if (!_$lT) {
            _$lT = this._reverseMap = [];
            for (var _$ll = -0x22f * -0x7 + -0xc7f * -0x2 + 0x5c1 * -0x7;_$lU.gIIHo(_$ll, _$lf.length);_$ll++)
                _$lT[_$lf.charCodeAt(_$ll)] = _$ll;
        }
        var _$lm = _$lf.charAt(0x8 * -0x8 + 0x5d4 * 0x2 + 0x2ca * -0x4);
        if (_$lm) {
            var _$lX = _$z7(_$lv).call(_$lv, _$lm);
            -(-0x1f * 0x67 + -0x197c + 0x25f6) !== _$lX && (_$lo = _$lX);
        }
        return _$lU.VNOOv(_$lM, _$lv, _$lo, _$lT);
    },
    'encode': function (_$lv) {
        'use strict';
        var a = Function.prototype.call;
        var j = _2bgg1;
        var XA, _$lo, _$lf, _$lT, _$ll, _$lm, _$lX, _$lE, _$lJ, _$lg, _$ld, _$lh, _$lQ, _$lV, _$lK;
        var s = [];
        var r = 473;
        var i, n;

        l6: for (;;) {
            let curR = r;
            let opcode = j[r++];

            switch (opcode) {
                case 1:
                    _$lT = s[s.length - 1];
                    break;

                case 3:
                    s.push(_1lwg1[34 + j[r++]]);
                    break;

                case 6:
                    s.push(_$lK);
                    break;

                case 7:
                    s.push(_$lV);
                    break;

                case 8:
                    _$lV = s[s.length - 1];
                    break;

                case 9:
                    s.push(Array);
                    break;

                case 10:
                    if (s.pop()) {
                        r += j[r];
                    } else {
                        ++r;
                    }
                    break;

                case 12:
                    s.push(_$lm);
                    break;

                case 13:
                    _$ll = s[s.length - 1];
                    break;

                case 15:
                    s.push(_$lo);
                    break;

                case 16:
                    s.pop();
                    break;

                case 17:
                    i = s.pop();
                    s[s.length - 1] %= i;
                    break;

                case 18:
                    _$lh = s[s.length - 1];
                    break;

                case 20:
                    s.push(_$lh);
                    break;

                case 22:
                    s.push(_$kP);
                    break;

                case 23:
                    _$lf = s[s.length - 1];
                    break;

                case 24:
                    s.push(s[s.length - 1]);
                    s[s.length - 2] = s[s.length - 2][_1lwg1[34 + j[r++]]];
                    break;

                case 25:
                    s.push(_$fG);
                    break;

                case 27:
                    s.push(_$lf++);
                    break;

                case 30:
                    s[s.length - 1] = s[s.length - 1].length;
                    break;

                case 31:
                    s.push(XA);
                    break;

                case 32:
                    i = s.pop();
                    for (n = 0;n < j[r + 1];++n) {
                        if (i === _1lwg1[34 + j[r + n * 2 + 2]]) {
                            r += j[r + n * 2 + 3];
                            continue l6;
                        }
                    }
                    r += j[r];
                    break;

                case 33:
                    _$lE = s[s.length - 1];
                    break;

                case 34:
                    s.push(this);
                    break;

                case 37:
                    s.push(_$ll);
                    break;

                case 38:
                    _$lJ = s[s.length - 1];
                    break;

                case 39:
                    s.push(j[r++]);
                    break;

                case 40:
                    _$lQ = s[s.length - 1];
                    break;

                case 42:
                    if (s[s.length - 2] != null) {
                        s[s.length - 3] = a.call(s[s.length - 3], s[s.length - 2], s[s.length - 1]);
                        s.length -= 2;
                    } else {
                        i = s[s.length - 3];
                        s[s.length - 3] = i(s[s.length - 1]);
                        s.length -= 2;
                    }
                    break;

                case 44:
                    s.push(_$lv);
                    break;

                case 46:
                    XA = s[s.length - 1];
                    break;

                case 47:
                    s[s.length - 1] = !s[s.length - 1];
                    break;

                case 48:
                    s.push(_$lT);
                    break;

                case 49:
                    return s.pop();

                case 50:
                    r += j[r];
                    break;

                case 53:
                    i = s.pop();
                    s[s.length - 1] = s[s.length - 1] >= i;
                    break;

                case 54:
                    i = s.pop();
                    s[s.length - 1] -= i;
                    break;

                case 55:
                    _$lg = s[s.length - 1];
                    break;

                case 56:
                    _$ld = s[s.length - 1];
                    break;

                case 57:
                    s.push(a04afa8n);
                    break;

                case 59:
                    s.push(new Array(j[r++]));
                    break;

                case 60:
                    s.push(_$lQ);
                    break;

                case 61:
                    s.push(_$lU);
                    break;

                case 63:
                    s.push(_$lX);
                    break;

                case 64:
                    i = s.pop();
                    s[s.length - 1] = s[s.length - 1] < i;
                    break;

                case 65:
                    s[s.length - 2] = s[s.length - 2][s[s.length - 1]];
                    s.length--;
                    break;

                case 67:
                    s.push(_$ld);
                    break;

                case 69:
                    _$lm = s[s.length - 1];
                    break;

                case 70:
                    i = s.pop();
                    s[s.length - 1] += i;
                    break;

                case 75:
                    _$lX = s[s.length - 1];
                    break;

                case 76:
                    s[s.length - 1] = s[s.length - 1][_1lwg1[34 + j[r++]]];
                    break;

                case 77:
                    s.push(_$lY);
                    break;

                case 79:
                    s.push(0);
                    break;

                case 80:
                    return;

                case 82:
                    s[s.length - 4] = a.call(s[s.length - 4], s[s.length - 3], s[s.length - 2], s[s.length - 1]);
                    s.length -= 3;
                    break;

                case 83:
                    s[s.length - 5] = a.call(s[s.length - 5], s[s.length - 4], s[s.length - 3], s[s.length - 2], s[s.length - 1]);
                    s.length -= 4;
                    break;

                case 84:
                    _$lK = s[s.length - 1];
                    break;

                case 85:
                    s.push(_$lE);
                    break;

                case 86:
                    s.push(_$lg);
                    break;

                case 89:
                    s.push(_$lg++);
                    break;

                case 94:
                    s.push(_$lJ);
                    break;

                case 95:
                    _$lo = s[s.length - 1];
                    break;

                case 97:
                    s.push(null);
                    break;
            }
        }
    },
    '_map1': "ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba",
    '_map': "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};

var _$lg = `{
  "sua": "Macintosh; Intel Mac OS X 10_15_7",
  "pp": {},
  "extend": {
    "wd": 0,
    "l": 0,
    "ls": 5,
    "wk": 0,
    "bu1": "0.1.4",
    "bu2": 0,
    "bu3": 21,
    "bu4": 0,
    "bu5": 0,
    "bu6": 12,
    "bu7": 0,
    "bu8": 0,
    "bu10": 5
  },
  "pf": "MacIntel",
  "random": "${rd}",
  "v": "h5_file_v5.0.6",
  "canvas": "549067b05d08c0f64932d4f66532bb87",
  "webglFp": "790e0802eb1b47131636b6214c0e907c",
  "ccn": 4,
  "fp": "wcp3a9xswxsrxr88"
}`

parse = function (_$lg) {
    for (var _$ld = _$lg.length, _$lh = [], _$lQ = -0x35 * -0x65 + -0xf74 + -0x575 * 0x1;_$lQ < _$ld;_$lQ++)
        _$lh[_$lQ >>> 0x15d * 0x8 + 0x17fa + -0x22e0] |= (-0x1a * 0x128 + -0x1ab3 + 0x39c2 * 0x1 & _$lg.charCodeAt(_$lQ)) << -0xce * -0x2 + -0x5 * -0x5f5 + -0x1 * 0x1f4d - _$lQ % (0x82f * 0x3 + 0x1 * 0x1073 + 0xac * -0x3d) * (-0x3 * -0xa8b + 0x1b7 * 0x2 + -0x2307);
    return {
        sigBytes: _$ld,
        words: _$lh
    };
}

const _$lv = parse(_$lg)

module.exports = Base64.encode(_$lv);
