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

    const formatted = Object.entries(obj)
        .map(([key, value]) => `  ${key}: ${safeStringify(value)}`)
        .join(",\n");

    const varName = name || "obj";
    const result = `${varName} = {\n${formatted}\n};`;
    copy(result);
    console.log(`✅ Copied ${varName} to clipboard`);
};

// usage
dumpObject(t, "t");
dumpObject(n, "n");
dumpObject(i, "i");
