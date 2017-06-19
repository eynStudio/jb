"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localStore_1 = require("./localStore");
exports.localStore = { setObj: localStore_1.setObj, getObj: localStore_1.getObj };
exports.getCookie = function (name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return (match ? decodeURIComponent(match[3]) : null);
};
exports.jbCookie = { getCookie: exports.getCookie };
//# sourceMappingURL=index.js.map