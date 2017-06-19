"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryVal = function (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
};
exports.url = {
    getQueryVal: exports.getQueryVal,
};
//# sourceMappingURL=url.js.map