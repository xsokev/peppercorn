"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, margin = themes_1.default.margin, floatMiniRadius = themes_1.default.floatMiniRadius, floatRadius = themes_1.default.floatRadius;
var radius = react_native_1.PixelRatio.getPixelSizeForLayoutSize(floatRadius);
exports.radius = radius;
var radiusMini = react_native_1.PixelRatio.getPixelSizeForLayoutSize(floatMiniRadius);
exports.radiusMini = radiusMini;
var styles = react_native_1.StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
    },
    button: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: radius,
        width: radius,
        borderRadius: radius / 2
    },
    mini: {
        height: radiusMini,
        width: radiusMini,
        borderRadius: radiusMini / 2
    },
    buttonIcon: {
        flex: 0,
        backgroundColor: colors.clear,
    },
    disabled: {
        opacity: 0.7
    },
    disabledtext: {}
});
exports.styles = styles;
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
exports.default = styles;
