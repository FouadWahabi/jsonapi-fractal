"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitelist = exports.changeCase = void 0;
const change_case_1 = require("change-case");
function changeCase(attributes, caseType, deep = false) {
    const caseTypes = {
        camelCase: change_case_1.camelCase,
        snakeCase: change_case_1.snakeCase,
        paramCase: change_case_1.paramCase,
        kebabCase: change_case_1.paramCase
    };
    const caseFn = caseTypes[caseType];
    if (!caseFn) {
        throw new Error('Invalid case type: ' + caseType);
    }
    const newAttributes = {};
    for (const key of Object.keys(attributes)) {
        if (deep &&
            Object.prototype.toString.call(attributes[key]) === '[object Object]') {
            newAttributes[caseFn(key)] = changeCase(attributes[key], caseType, deep);
        }
        else {
            newAttributes[caseFn(key)] = attributes[key];
        }
    }
    return newAttributes;
}
exports.changeCase = changeCase;
function whitelist(obj, list) {
    const result = {};
    for (const key of list) {
        result[key] = obj[key];
    }
    return result;
}
exports.whitelist = whitelist;
