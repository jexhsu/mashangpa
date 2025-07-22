const crypto = require("crypto");

function generateParams(page) {
    const t = Date.now();
    const suburl = `fu/api/problem-detail/12/data/?page=${page}${t}`;
    const m = crypto.createHash("sha1").update(suburl).digest("hex");
    return { t, m };
}

const pageArg = process.argv[2] ? parseInt(process.argv[2], 10) : 1;

(function main(page) {
    const params = generateParams(page);
    console.log(JSON.stringify(params));
})(pageArg);
