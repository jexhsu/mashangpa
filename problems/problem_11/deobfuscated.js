var _js = "jsjiami.com.v7";

function b(c, d) {
    const e = a();

    b = function (f, g) {
        f = f - 144;
        let h = e[f];

        if (b["MZrkWY"] === undefined) {
            var i = function (n) {
                const o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let p = "",
                    q = "";

                for (
                    let r = 0, s, t, u = 0;
                    (t = n["charAt"](u++));
                    ~t && ((s = r % 4 ? s * 64 + t : t), r++ % 4)
                        ? (p += String["fromCharCode"](255 & (s >> ((-2 * r) & 6))))
                        : 0
                ) {
                    t = o["indexOf"](t);
                }

                for (let v = 0, w = p["length"]; v < w; v++) {
                    q += "%" + ("00" + p["charCodeAt"](v)["toString"](16))["slice"](-2);
                }

                return decodeURIComponent(q);
            };

            const m = function (n, o) {
                let p = [],
                    q = 0,
                    r,
                    t = "";
                n = i(n);
                let u;

                for (u = 0; u < 256; u++) {
                    p[u] = u;
                }

                for (u = 0; u < 256; u++) {
                    q = (q + p[u] + o["charCodeAt"](u % o["length"])) % 256;
                    r = p[u];
                    p[u] = p[q];
                    p[q] = r;
                }

                u = 0;
                q = 0;

                for (let v = 0; v < n["length"]; v++) {
                    u = (u + 1) % 256;
                    q = (q + p[u]) % 256;
                    r = p[u];
                    p[u] = p[q];
                    p[q] = r;
                    t += String["fromCharCode"](n["charCodeAt"](v) ^ p[(p[u] + p[q]) % 256]);
                }

                return t;
            };

            b["ygIwjZ"] = m;
            c = arguments;
            b["MZrkWY"] = true;
        }

        const j = e[0],
            k = f + j,
            l = c[k];
        !l ? (b["dcXJGV"] === undefined && (b["dcXJGV"] = true), (h = b["ygIwjZ"](h, g)), (c[k] = h)) : (h = l);
        return h;
    };

    return b(c, d);
}

((function (c, d, e, f, g, h, i) {
    c = c >> 7;
    h = "hs";
    i = "hs";
    return (function (j, k, l, m, n) {
        m = "tfi";
        h = m + h;
        n = "up";
        i += n;
        h = l(h);
        i = l(i);
        l = 0;
        const o = j();

        while (true && --f + k) {
            try {
                m =
                    parseInt(b(175, "!2aG")) / 1 +
                    (parseInt(b(154, "!2aG")) / 2) * (parseInt(b(156, "o!rA")) / 3) +
                    parseInt(b(145, "%1dZ")) / 4 +
                    parseInt(b(157, "cL8T")) / 5 +
                    -parseInt(b(173, "*wl7")) / 6 +
                    parseInt(b(176, "fzio")) / 7 +
                    (parseInt(b(190, "$LGm")) / 8) * (-parseInt(b(193, "E1$%")) / 9);
            } catch (p) {
                m = l;
            } finally {
                n = o[h]();

                if (c <= f) {
                    l ? (g ? (m = n) : (g = n)) : (l = n);
                } else {
                    if (l == g["replace"](/[HdEMROFtkrJUVSDPILWeQ=]/g, "")) {
                        if (m === k) {
                            o["un" + h](n);
                            break;
                        }

                        o[i](n);
                    }
                }
            }
        }
    })(e, d, function (j, k, l, m, n, o, p) {
        k = "split";
        j = arguments[0];
        j = j[k]("");
        l = "reverse";
        j = j[l]("v");
        m = "join";
        1651357;
        return j[m]("");
    });
})(24448, 181101, a, 193),
a) && (_js = 6554);

function callEncryptFunction(c, d) {
    const f = {
        gDlFk: b(178, "8WDi"),
    };

    try {
        const g = window["exports"]["encrypt"](c, d);
        return g;
    } catch (h) {
        console[b(161, "wL$X")](f[b(198, "H(^%")], h);
    }
}

setInterval(() => {
    const c = {
        WaWvl: function (d, e) {
            return d(e);
        },
        XnZwK: function (d, e) {
            return d / e;
        },
        OnVnJ: function (d, e, f) {
            return d(e, f);
        },
        Dqasp: function (d, e) {
            return d + e;
        },
        vvvwR: b(199, "3pQi"),
        YvZzg: b(192, "b^tv"),
        DyAdx: function (d, e) {
            return d === e;
        },
        mnkCL: b(147, "9%mg"),
        FhpEn: b(174, "G%SU"),
        iQEhv: "bugger",
    };
    (function (d) {
        const e = {
            itJgy: function (f, g) {
                return c[b(171, "G%SU")](f, g);
            },
            ngeJB: function (f, g) {
                return c[b(179, "%1dZ")](f, g);
            },
            CnJvE: function (f, g, h) {
                return c[b(183, "p4Kq")](f, g, h);
            },
            WTxXr: function (f, g) {
                return c[b(195, "35yS")](f, g);
            },
            KnwnG: function (f, g) {
                return c["WaWvl"](f, g);
            },
            PyddV: function (f, g) {
                return c[b(194, "O5Wr")](f, g);
            },
            TQvqa: c[b(186, "9%mg")],
            vLhql: c[b(182, "fzio")],
        };

        if (c[b(152, "mA9X")](c[b(197, "7XK5")], c[b(180, "Vy3o")])) {
            const g = e[b(149, "iNWk")](
                n,
                o[b(167, "]Kc8")](e["ngeJB"](new p()[b(181, "5V*j")](), 1000))[b(165, "Dn$u")](),
            );
            let h = e[b(163, "fzio")](q, r, g);
            const i = {
                    page: s,
                    m: h,
                    _ts: g,
                },
                j = new t(i)["toString"]();
            e["WTxXr"](u, b(159, "MwzA") + v + "/data/?" + j)
                [b(169, "8WDi")]((D) => D[b(170, "$LGm")]())
                [b(148, "IZ]7")]((D) => g(D))
                [b(166, "*wl7")]((D) => g["error"](b(162, "wL$X"), D));
        } else {
            return (function (g) {
                return e["KnwnG"](Function, e[b(196, "*wl7")](e["PyddV"](e[b(177, "Dn$u")], g), e[b(191, "MwzA")]));
            })(d);
        }
    })(c[b(189, "fzio")])("de", 0, 0, (0, 0));
}, 1000);

function loadPage(c) {
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
        e = parseInt(Math[b(188, "IeoU")](d[b(151, "b^tv")](new Date()[b(184, "jvOw")](), 1000))[b(153, "s(3L")]());
    let f = d[b(146, "PtOP")](callEncryptFunction, c, e);
    const g = {
            page: c,
            m: f,
            _ts: e,
        },
        h = new URLSearchParams(g)["toString"]();
    fetch(b(185, "h1wx") + problemId + b(150, ")M^u") + h)
        [b(144, "PtOP")]((i) => i[b(172, "jvOw")]())
        [b(164, "H(^%")]((i) => updatePageContent(i))
        ["catch"]((i) => console["error"]("Error fetching problem details:", i));
}

function a() {
    const P = (function () {
        return [
            _js,
            "EFLSjPQVsjReiPMOaFtrmJHiI.DcWUVoRmE.vd7k==",
            "bNTQlG",
            "ra7cVCkEW41VASo+W7y0vM3cLa",
            "mxStoSoW",
            "lHKJW5CVWQxcP8koW41iW4BdVa",
            "oSoJsbaXhc3cUmkbW63cTha",
            "W5zmW49fW4i",
            "uamBWP3cP8knESk+bHpcUSogmSoWWQvWW4Hus8kgWQddI8o8ACkCWR49pKeTWPi",
            "WRFcSmkcCN8",
            "W40cdSkMW4q",
            "bqCzwJ8aW4a",
            "umkHiLPM",
            "DSoZWRVcKCoP",
            "c21XfmktdmoD",
            "WONcSSkWWQ1ArtLBW7jhWPddUhX0W4lcMX7cJqy+",
            "W5ZdUgfpoq",
            "seOBW7NcO8oSWQu",
            "W6NdPmkQWPBcNq",
            "ymkgpuH3",
        ]["concat"](
            (function () {
                return [
                    "W5pcHHBdRhfSWQtdLCkLbCoXWPZcRa",
                    "rSoGmCo5WRi",
                    "Ch8hdG",
                    "W7ddGw3dGdHlbG",
                    "xs8ZdL4",
                    "q3ZdU8o/gq",
                    "jKBdRmojWQ0",
                    "W7zuWRBdUHK",
                    "WPzIW5FdLmoz",
                    "seeVW4ZcKSkxWP10WOxdU8keW6hdMrvNpmoTnvRcVcrOWOS",
                    "WPbNW6G/WRJcOmk+nhpdPmoQCLS",
                    "WOq4ySk0",
                    "W5RdRmoPmW3dQ8kIddtdGJyy",
                    "WOCfumkrW6q",
                    "W4xdGfXrgG",
                    "qcPCuG",
                    "WPdcSuS8WRG",
                    "CcJdImkltCkjcG",
                    "fqDmC8ov",
                    "W6uVWPPOW7G",
                ]["concat"](
                    (function () {
                        return [
                            "bxq4W4FcT8oaWP3cKG",
                            "lr0RW5D8W6NcTmkVW4bI",
                            "W5JdVMVdGmoxgCkPtstcICkVW6ZdPa",
                            "q8kDwXxdUwtcImkvW6C",
                            "W67cMCk/WPFdQSkVW5/cH8oplXZdSCkK",
                            "WPbLjqRcJxOXfN7cHSosvq",
                            "h8onkCoHW7hdPI/dGKRdRmoSWRj4BXOBW402WRlcPG",
                            "pab5WPNcJmkeWRrvW5JdNW",
                            "WPWZn8kzha",
                            "WRWZn8kzhgq6WO/dUgNdPCkZW47cJHekWOldUeddQmofFaVcNhfLEuPzoCod",
                            "sSk5mLze",
                            "WOvoW57dVa",
                            "W7zYW6PaW5eGW5FcGq",
                            "fv7dVmooWPm",
                            "w8k7WRZdImoK",
                            "W4awWOVcPmklzmkSW7BdKSorECoR",
                            "yrKmWPW",
                            "WOVdG0VcTW",
                            "lwWlj8oU",
                        ];
                    })(),
                );
            })(),
        );
    })();

    a = function () {
        return P;
    };

    return a();
}
