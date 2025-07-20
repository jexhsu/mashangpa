const VM_OPS = {
    1: function (_0x36a893) {
        return new Date()["getTime"]();
    },
    2: function (_0x4deae8) {
        return getCrawlerInfo(_0x4deae8["ts"]);
    },
    3: function (_0x1c307f) {
        return btoa(_0x1c307f["input"]);
    },
    4: function (_0xafc5c1) {
        return new URLSearchParams(_0xafc5c1["params"])["toString"]();
    },
    5: function (_0x4d7705) {
        return console["error"]["apply"](null, _0x4d7705["args"]);
    },
};

function vmExecute(_0x4d87c8, _0x32370b) {
    return VM_OPS[_0x4d87c8]["apply"](null, [_0x32370b]);
}

$["ajaxPrefilter"](function (_0x5e86b1, _0x4a363f, _0x259d98) {
    let _0x44e2c2 = 0,
        _0x2ef45b = {
            headers: _0x5e86b1["headers"] || {},
            ts: 0,
            crawler: "",
        };
    const _0xd39935 = [
        () => {
            _0x2ef45b["ts"] = vmExecute(1, _0x2ef45b);
            _0x44e2c2 = 1;
        },
        () => {
            _0x2ef45b["crawler"] = vmExecute(2, _0x2ef45b);
            _0x44e2c2 = 2;
        },
        () => {
            _0x2ef45b["headers"]["m"] =
                _0x2ef45b["crawler"] +
                vmExecute(3, {
                    input: "luoge" + _0x2ef45b["ts"],
                });
            _0x2ef45b["headers"]["timestamp"] = _0x2ef45b["ts"];
            _0x2ef45b["headers"]["client-version"] = "1.0.0";
            _0x5e86b1["headers"] = _0x2ef45b["headers"];
            _0x44e2c2 = 3;
        },
    ];

    try {
        while (_0x44e2c2 < _0xd39935["length"]) {
            _0xd39935[_0x44e2c2]();
        }
    } catch (_0x36b474) {
        vmExecute(5, {
            args: ["获取请求参数失败:", _0x36b474],
        });
    }
});

function getCrawlerInfo(_0x2926eb) {
    return B(_0x2926eb);
}

var B = function (_0x3f0d72) {
    return anti(4)({
        serverTime: _0x3f0d72,
    })["messagePack"]();
};

function loadPage(_0x2676ad) {
    let _0x5e4569 = 0,
        _0x2e406f = {
            params: {
                page: _0x2676ad,
            },
            query: "",
            config: {},
        };
    const _0x522c3d = [
        () => {
            _0x2e406f["query"] = vmExecute(4, _0x2e406f);
            _0x5e4569 = 1;
        },
        () => {
            _0x2e406f["config"] = {
                url: "/api/problem-detail/" + problemId + "/data/?" + _0x2e406f["query"],
                method: "GET",
                async: true,
                dataType: "json",
                beforeSend: function (_0x13dd33) {},
                success: function (_0x2626c5) {
                    updatePageContent(_0x2626c5);
                },
                error: function (_0x301aec, _0x3b1b41, _0x1dd192) {
                    vmExecute(5, {
                        args: ["Error fetching problem details:", _0x3b1b41, _0x1dd192],
                    });
                },
            };
            _0x5e4569 = 2;
        },
        () => {
            $["ajax"](_0x2e406f["config"]);
            _0x5e4569 = 3;
        },
    ];

    while (_0x5e4569 < _0x522c3d["length"]) {
        _0x522c3d[_0x5e4569]();
    }
}
