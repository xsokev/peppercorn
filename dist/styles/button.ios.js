"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, padding = themes_1.default.padding, buttonRadius = themes_1.default.buttonRadius;
var styles = react_native_1.StyleSheet.create({
    button: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: padding * 2,
        paddingVertical: padding,
        borderRadius: buttonRadius
    },
    buttonText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.clear,
        textAlign: 'center',
        fontSize: 14
    },
    outline: {
        borderWidth: 1
    },
    clear: {
        borderWidth: 0,
        backgroundColor: colors.clear
    },
    round: {
        borderRadius: 50
    },
    full: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 0
    },
    xsmall: {
        paddingHorizontal: padding,
        paddingVertical: padding / 2
    },
    small: {
        paddingHorizontal: padding,
        paddingVertical: padding
    },
    large: {
        padding: padding * 2
    },
    textxsmall: {
        fontSize: 10
    },
    textsmall: {
        fontSize: 12
    },
    textlarge: {
        fontSize: 20
    },
    disabled: {
        opacity: 0.7
    },
    disabledtext: {}
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
