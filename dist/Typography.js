"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var react_1 = require('react');
var react_native_1 = require('react-native');
var styles_1 = require('./styles');
var propTypes = {
    children: react_1.PropTypes.oneOfType([
        react_1.PropTypes.arrayOf(react_1.PropTypes.node),
        react_1.PropTypes.node,
        react_1.PropTypes.string,
    ]),
    style: react_1.PropTypes.any,
};
var H1 = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.h1, props.style]}), props.children)); };
exports.H1 = H1;
H1.propTypes = propTypes;
var H2 = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.h2, props.style]}), props.children)); };
exports.H2 = H2;
H2.propTypes = propTypes;
var H3 = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.h3, props.style]}), props.children)); };
exports.H3 = H3;
H3.propTypes = propTypes;
var H4 = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.h4, props.style]}), props.children)); };
exports.H4 = H4;
H4.propTypes = propTypes;
var H5 = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.h5, props.style]}), props.children)); };
exports.H5 = H5;
H5.propTypes = propTypes;
var H6 = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.h6, props.style]}), props.children)); };
exports.H6 = H6;
H6.propTypes = propTypes;
var P = function (props) {
    var center = typeof props.center !== 'undefined';
    var right = typeof props.right !== 'undefined';
    return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.p, props.style, center && styles_1.typographyStyles.textCenter, right && styles_1.typographyStyles.textRight]}), props.children));
};
exports.P = P;
P.propTypes = propTypes;
var A = function (props) { return (react_1.default.createElement(react_native_1.Text, __assign({}, props, {style: [styles_1.typographyStyles.a, props.style]}), props.children)); };
exports.A = A;
A.propTypes = propTypes;
var BLOCKQUOTE = function (props) { return (react_1.default.createElement(react_native_1.View, __assign({}, props, {style: styles_1.typographyStyles.blockquote}), react_1.default.createElement(react_native_1.Text, {style: [styles_1.typographyStyles.blockquoteText, props.style]}, props.children))); };
exports.BLOCKQUOTE = BLOCKQUOTE;
BLOCKQUOTE.propTypes = propTypes;
var HR = function (props) { return (react_1.default.createElement(react_native_1.View, __assign({}, props, {style: [styles_1.typographyStyles.hr, props.style]}))); };
exports.HR = HR;
HR.propTypes = propTypes;
var BR = function (props) { return (react_1.default.createElement(react_native_1.View, __assign({}, props, {style: [styles_1.typographyStyles.br, props.style]}))); };
exports.BR = BR;
BR.propTypes = propTypes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6, P: P, A: A, BLOCKQUOTE: BLOCKQUOTE, HR: HR, BR: BR
};
