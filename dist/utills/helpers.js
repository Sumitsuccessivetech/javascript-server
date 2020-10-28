"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(email) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (pattern.test(email));
}
exports.default = validateEmail;
//# sourceMappingURL=helpers.js.map