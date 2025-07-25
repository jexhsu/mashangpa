const { tk, fp, ai, v, ts, generateCustomHex } = require('./custom_hash_generator')
const getSign = require("./get_sign")
const BrwoserSigned = require("./base64")

function generateParams(page) {
  const t = new Date().getTime();
  const Hex = generateCustomHex();
  const URLSigned = getSign({ Hex, page })
  const FuncSigned = getSign({ Hex });
  const raw = `${ts};${fp};${ai};${tk};${URLSigned};${v};${t};${BrwoserSigned};${FuncSigned}`
  const h5st = btoa(raw + "" + t)
  return { h5st, t };
}

const pageArg = process.argv[2] ? parseInt(process.argv[2], 10) : 1;

(function main(page) {
  const params = generateParams(page);
  console.log(JSON.stringify(params));
})(pageArg);
