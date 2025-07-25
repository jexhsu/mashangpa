const KAurB = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

function generateRandomString(length) {
    let result = '';
    const chars = KAurB;
    while (length--) {
        // Generate a random index within chars length
        const index = Math.floor(Math.random() * chars.length);
        result += chars[index];
    }
    return result;
}

module.exports = {
    generateRandomString,
};
