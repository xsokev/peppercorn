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
var Typography_1 = require('../Typography');
var styles_1 = require('../styles');
var Card = function (props) {
    var header, footer;
    if (typeof props.header !== 'undefined') {
        if (typeof props.header === 'string') {
            header = (react_1.default.createElement(react_native_1.View, {style: styles_1.cardStyles.header}, react_1.default.createElement(Typography_1.H5, {style: styles_1.cardStyles.headerText}, props.header)));
        }
        else {
            header = props.header;
        }
    }
    if (typeof props.footer !== 'undefined') {
        if (typeof props.footer === 'string') {
            footer = (react_1.default.createElement(react_native_1.View, {style: styles_1.cardStyles.footer}, react_1.default.createElement(Typography_1.H5, {style: styles_1.cardStyles.footerText}, props.footer)));
        }
        else {
            footer = (react_1.default.createElement(react_native_1.View, {style: [styles_1.cardStyles.footer, { padding: 0, paddingBottom: 0 }]}, props.footer));
        }
    }
    return (react_1.default.createElement(react_native_1.View, __assign({}, props, {shadowColor: styles_1.cardShadow.color, shadowOffset: styles_1.cardShadow.offset, shadowOpacity: styles_1.cardShadow.opacity, shadowRadius: styles_1.cardShadow.radius, style: [styles_1.cardStyles.card, props.style]}), header, react_1.default.createElement(react_native_1.View, {style: props.padding && styles_1.cardStyles.content}, props.children), footer));
};
Card.propTypes = {
    children: react_1.PropTypes.oneOfType([
        react_1.PropTypes.arrayOf(react_1.PropTypes.node),
        react_1.PropTypes.node
    ]),
    header: react_1.PropTypes.oneOfType([
        react_1.PropTypes.string,
        react_1.PropTypes.node
    ]),
    footer: react_1.PropTypes.oneOfType([
        react_1.PropTypes.string,
        react_1.PropTypes.node
    ]),
    padding: react_1.PropTypes.bool,
    style: react_1.PropTypes.any
};
Card.defaultProps = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
