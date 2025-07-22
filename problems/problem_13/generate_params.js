const MD5 = require("crypto-js/md5");
function _0x1e5c29() {
    var _0xee3b28 = [];
    var _0x454710 = "0123456789abcdef";

    for (var _0x20183e = 0; _0x20183e < 32; _0x20183e++) {
        _0xee3b28[_0x20183e] = _0x454710["substr"](Math["floor"](Math["random"]() * 16), 1);
    }

    _0xee3b28[14] = "4";
    _0xee3b28[19] = _0x454710["substr"]((_0xee3b28[19] & 3) | 8, 1);
    _0xee3b28[8] = _0xee3b28[13] = _0xee3b28[18] = _0xee3b28[23];

    var _0x4b1861 = _0xee3b28["join"]("");

    return _0x4b1861;
}

function generateParams(page) {
    const t = Date["parse"](new Date());
    const r = _0x1e5c29();
    const s = MD5(`{"page"="${page}"}${r}${t}`).toString();
    // const s = mmm(`{"page"="${page}"}${r}${t}`);
    return { t, r, s };
}

const pageArg = process.argv[2] ? parseInt(process.argv[2], 10) : 1;

(function main(page) {
    const params = generateParams(page);
    console.log(JSON.stringify(params));
})(pageArg);
