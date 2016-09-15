"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, margin = themes_1.default.margin, padding = themes_1.default.padding, width = themes_1.default.width;
exports.styles = react_native_1.StyleSheet.create({
    card: {
        flexDirection: 'column',
        marginBottom: 2 * margin,
        borderRadius: 2,
        backgroundColor: colors.white
    },
    header: {
        padding: 2 * padding,
        paddingBottom: padding,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomColor: colors.border
    },
    headerText: {
        color: colors.dark
    },
    content: {
        padding: padding
    },
    footer: {
        padding: 2 * padding,
        paddingBottom: padding,
        borderTopWidth: react_native_1.StyleSheet.hairlineWidth,
        borderTopColor: colors.border
    },
    footerText: {
        color: colors.gray
    },
    imageHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: 200,
        width: width - 2 * margin
    },
    imageHeaderText: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: colors.white,
        padding: 10,
        fontSize: 16,
        fontWeight: '600'
    }
});
exports.shadow = {
    color: "rgba(0, 0, 0, 0.3)",
    offset: {
        width: 0,
        height: 1
    },
    opacity: 1,
    radius: 2
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.styles;
