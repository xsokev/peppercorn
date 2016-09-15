"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var margin = themes_1.default.margin, padding = themes_1.default.padding, width = themes_1.default.width, colors = themes_1.default.colors;
var styles = react_native_1.StyleSheet.create({
    h1: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 36
    },
    h2: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 30
    },
    h3: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 24
    },
    h4: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 18
    },
    h5: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 14
    },
    h6: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 12
    },
    hr: {
        marginBottom: margin,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomColor: colors.border
    },
    br: {
        marginBottom: margin * 2
    },
    p: {
        marginBottom: margin,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    blockquote: {
        paddingLeft: padding,
        borderLeftWidth: 10,
        borderLeftColor: colors.primary,
    },
    blockquoteText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontStyle: 'italic'
    },
    a: {
        color: colors.primary
    },
    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
