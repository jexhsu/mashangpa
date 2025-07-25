const CryptoJS = require("crypto-js");
const { generateRandomString } = require('./generate_random_string')

function formatTimestamp() {
  const ts = new Date();
  const year = ts.getFullYear();
  const month = String(ts.getMonth() + 1).padStart(2, '0');
  const day = String(ts.getDate()).padStart(2, '0');
  const hours = String(ts.getHours()).padStart(2, '0');
  const minutes = String(ts.getMinutes()).padStart(2, '0');
  const seconds = String(ts.getSeconds()).padStart(2, '0');
  const milliseconds = String(ts.getMilliseconds()).padStart(3, '0');
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}

const tk = "tk03w76bd1b2118nhA3G1lPk1Aau3eoTVELb1pvbe5HPR4IT4tf9_59x_YlH1NUBKb6dC1pPfwOF83pUxvqM8oA5fWWS";
const fp = "wcp3a9xswxsrxr88";
const ai = "b5216";
const v = "5.0";
const rd = generateRandomString(12);
const ts = formatTimestamp();

function generateMD5Words(tk, fp, ts, ai) {
  const str = `${tk}${fp}${ts}${ai}${rd}`;
  return CryptoJS.MD5(str);
}

function processHashToHex(tk, fp, ts, ai) {
  const md5Hash = generateMD5Words(tk, fp, ts, ai);

  const sigBytes = md5Hash.sigBytes;
  const uint8Array = new Uint8Array(sigBytes);

  for (let i = 0;i < md5Hash.words.length;i++) {
    const word = md5Hash.words[i];
    uint8Array[i * 4] = (word >>> 24) & 0xff;
    uint8Array[i * 4 + 1] = (word >>> 16) & 0xff;
    uint8Array[i * 4 + 2] = (word >>> 8) & 0xff;
    uint8Array[i * 4 + 3] = word & 0xff;
  }

  const firstFive = uint8Array.slice(0, 5).reverse();
  const rest = uint8Array.slice(5);
  const finalArray = new Uint8Array([...firstFive, ...rest]);

  const hex = Array.from(finalArray)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return hex;
}

function generateCustomHex() {
  return processHashToHex(tk, fp, ts, ai);
}

module.exports = {
  ts,
  tk,
  fp,
  ai,
  v,
  rd,
  generateCustomHex
};
