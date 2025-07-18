/* get mapping in real browser
mapping = {};

for (let k in window) {
  try {
    const v = window[k];
    if (typeof v === "string") {
      if (v.length < 20 && /^[a-zA-Z]+$/.test(v)) {
        mapping[k] = v;
      }
    }
  } catch (e) {}
}

copy(mapping);
*/
mapping = {
  Zms: "log",
  bms: "split",
  hms: "parse",
  pms: "error",
  das: "method",
  rms: "join",
  jas: "url",
  las: "xhrFields",
  zms: "map",
  Ams: "bugger",
  Cms: "from",
  vas: "withCredentials",
  Ims: "length",
  Mms: "concat",
  Oms: "de",
  Qms: "stringify",
  Eas: "POST",
  Sms: "xoxoxoxo",
  Gas: "headers",
  Ums: "padStart",
  Wms: "getTime",
  Yms: "cookie",
  _ms: "toString",
  ams: "extend",
  cms: "ajax",
  $ms: "fromCharCode",
  sms: "oooooo",
  gas: "page",
  yms: "slice",
  Dms: "success",
  Fms: "charCodeAt",
  Nms: "flat",
  Pms: "forEach",
  Tms: "hostname",
  Has: "data",
  Xms: "push",
  Las: "status",
};

// -------------------headers (t)----------------------
function OOOoOo(_0x240504, _0x8eefdc) {
  const _0x3a3671 = _0x240504.split(""),
    _0x1959d4 = _0x8eefdc.split(""),
    _0x582226 = 4;

  let _0x5ad857 = [];

  for (
    let _0x2d33d3 = 0;
    _0x2d33d3 < _0x3a3671.length;
    _0x2d33d3 += _0x582226
  ) {
    let _0x38ae5f = _0x3a3671.slice(_0x2d33d3, _0x2d33d3 + _0x582226);

    for (let _0x31873b = 0; _0x31873b < _0x38ae5f.length; _0x31873b++) {
      const _0x11057a = _0x38ae5f[_0x31873b].charCodeAt(0),
        _0x1a6269 = _0x1959d4[_0x31873b % _0x1959d4.length].charCodeAt(0),
        _0x25c979 = (_0x11057a + _0x1a6269) % 256;

      _0x38ae5f[_0x31873b] = String.fromCharCode(_0x25c979);
    }

    _0x5ad857 = _0x5ad857.concat(_0x38ae5f);
  }

  const _0x28d8b9 = _0x5ad857.join(""),
    _0x36bdd2 = Array.from(_0x28d8b9)
      .map((_0x3c7e7a) => _0x3c7e7a.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");

  return _0x36bdd2;
}
// -------------------cookies (s)----------------------

function encryptGroup(_0x555578) {
  return _0x555578[mapping.zms]((_0x538aee) => {
    const _0x16263a = _0x538aee[mapping.Fms](0);

    let _0x1d0d16 = _0x16263a;
    _0x1d0d16 = (_0x1d0d16 << 3) | (_0x1d0d16 >>> 5);
    _0x1d0d16 ^= 90;
    _0x1d0d16 = (_0x1d0d16 << 2) | (_0x1d0d16 >>> 6);
    _0x1d0d16 ^= 63;
    _0x1d0d16 = _0x1d0d16 % 256;
    return String[mapping.$ms](_0x1d0d16);
  });
}
function groupMessage(_0x2dffee, _0x79d0b8) {
  const _0x135e82 = _0x2dffee.split(""),
    _0x1d7950 = [];

  for (
    let _0x2a5c42 = 0;
    _0x2a5c42 < _0x135e82.length;
    _0x2a5c42 += _0x79d0b8
  ) {
    _0x1d7950.push(_0x135e82.slice(_0x2a5c42, _0x2a5c42 + _0x79d0b8));
  }

  return _0x1d7950;
}

function mergeGroups(_0x264398) {
  return _0x264398.flat().join("");
}

function toHexString(_0x1ebd7f) {
  return Array.from(_0x1ebd7f)
    .map((_0xc67c4c) => _0xc67c4c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}
function OOOoO(_0x4e90fb) {
  const _0x1c3852 = 4,
    _0x1ba87b = groupMessage(_0x4e90fb, _0x1c3852),
    _0x588ee8 = _0x1ba87b.map(encryptGroup),
    _0x391e71 = mergeGroups(_0x588ee8),
    _0x45845b = toHexString(_0x391e71);

  return _0x45845b;
}

function generateParams(page) {
  const _0x1575b7 = "oooooo";
  var _0x1167c7 = new Date().getTime();
  m = OOOoOo(_0x1575b7 + _0x1167c7 + page, _0x1575b7);
  t = btoa(_0x1167c7);
  s = OOOoO("xoxoxoxo" + _0x1167c7);
  return { m, t, s };
}
const pageArg = process.argv[2] ? parseInt(process.argv[2], 10) : 1;
(function main(page) {
  const params = generateParams(page);
  console.log(JSON.stringify(params));
})(pageArg);
