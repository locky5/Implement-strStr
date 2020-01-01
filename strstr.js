var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.substring(i, needle.length + i) === needle) {
                return i
            }
        }
    }

    return -1
};
