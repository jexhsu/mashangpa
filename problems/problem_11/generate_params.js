// from wasm
function encrypt(a, b) {
    return a + Math.trunc(b / 3) + 16358;
}

function callEncryptFunction(c, d) {
    const g = encrypt(c, d);
    return g;
}

function generateParams(page) {
    const d = {
            iRmDq: function (i, j) {
                return i(j);
            },
            GQcTJ: function (i, j) {
                return i / j;
            },
            wUWKM: function (i, j, k) {
                return i(j, k);
            },
            Saaxu: function (i, j) {
                return i(j);
            },
        },
        e = parseInt(Math.round(d["GQcTJ"](new Date().getTime(), 1000)).toString());
    f = d["wUWKM"](callEncryptFunction, page, e);
    return { e, f };
}
const pageArg = process.argv[2] ? parseInt(process.argv[2], 10) : 1;
(function main(page) {
    const params = generateParams(page);
    console.log(JSON.stringify(params));
})(pageArg);
