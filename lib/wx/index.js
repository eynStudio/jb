"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWx = function () {
    var ua = navigator.userAgent.toLowerCase();
    return (String)(ua.match(/MicroMessenger/i)) == "micromessenger";
};
exports.wx = {
    isWx: exports.isWx,
};
//# sourceMappingURL=index.js.map