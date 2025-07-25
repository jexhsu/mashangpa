window.dumpObject = (obj, name) => {
    const seen = new WeakSet();
    const safeStringify = (val) =>
        JSON.stringify(val, function (k, v) {
            if (typeof v === "object" && v !== null) {
                if (seen.has(v)) return "[[Circular]]";
                seen.add(v);
            }
            return v;
        });

    const valuesArray = Object.values(obj).map((v) => safeStringify(v));

    const varName = name || "valuesArray";
    const result = `${varName} = [\n  ${valuesArray.join(",\n  ")}\n];`;

    copy(result);
    console.log(`✅ Copied ${varName} (only values) to clipboard`);
};

// usage
dumpObject(_$t, "_$a04afa8c");
