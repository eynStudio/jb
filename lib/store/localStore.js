"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setObj = function (key, obj) { return localStorage.setItem(key, JSON.stringify(obj)); };
exports.getObj = function (key) { return JSON.parse(localStorage.getItem(key)); };
//# sourceMappingURL=localStore.js.map