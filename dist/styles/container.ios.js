"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, padding = themes_1.default.padding;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    },
    padding: {
        padding: padding
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
