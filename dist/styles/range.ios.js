"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, margin = themes_1.default.margin, padding = themes_1.default.padding, width = themes_1.default.width;
var styles = react_native_1.StyleSheet.create({
    range: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: padding,
        paddingVertical: padding / 2
    },
    slider: {
        flex: 1,
        height: 10,
        margin: margin
    },
    text: {
        flex: 0,
        color: colors.black,
        fontWeight: '400',
        fontSize: 12,
        paddingHorizontal: padding / 2,
        justifyContent: 'flex-start'
    },
    textRight: {
        textAlign: 'left',
        fontSize: 14,
        justifyContent: 'flex-end'
    },
    icon: {
        justifyContent: 'flex-start'
    },
    iconRight: {
        justifyContent: 'flex-end'
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
