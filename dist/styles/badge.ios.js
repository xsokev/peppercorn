"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, padding = themes_1.default.padding;
var styles = react_native_1.StyleSheet.create({
    badge: {
        flex: 0,
        paddingHorizontal: padding,
        paddingVertical: 3,
        borderRadius: 50
    },
    badgeText: {
        backgroundColor: colors.clear,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
