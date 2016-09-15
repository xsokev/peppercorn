"use strict";
var react_native_1 = require('react-native');
var materialui_1 = require('./materialui');
var defaulttheme = {
    white: "#FFFFFF",
    black: "#000000",
    light: "#FAFAFA",
    gray: "#E0E0E0",
    stable: "#F5F5F5",
    primary: "#2196F3",
    secondary: "#FFC107",
    calm: "#0097A7",
    energized: "#FF9800",
    danger: "#F44336",
    royal: "#7E57C2",
    dark: "#424242",
    border: "#EEEEEE",
    underlay: "#EEEEEE",
    clear: "rgba(0, 0, 0, 0)",
    margin: 8,
    padding: 8,
    rowHeight: 50,
    actionbarHeight: 44,
    activeColorShade: -0.15,
    buttonRadius: 5,
    floatRadius: 28,
    floatMiniRadius: 20,
    floatShadow: 10
};
var _a = react_native_1.Dimensions.get('window'), height = _a.height, width = _a.width;
var componentToHex = function (c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};
var rgbToHex = function (r, g, b) { return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); };
var hexToRGB = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
var textFromRGB = function (r, g, b) { return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? (materialui_1.default.black || defaulttheme.black) : (materialui_1.default.white || defaulttheme.white); };
var textFromHex = function (hex) {
    var rgb = hexToRGB(hex);
    return textFromRGB(rgb.r, rgb.g, rgb.b);
};
var shade = function (hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
};
var themeColor = function (props, active) {
    var color = materialui_1.default.stable || defaulttheme.stable;
    if (props.color) {
        color = props.color;
    }
    else if (props.primary) {
        color = materialui_1.default.primary || defaulttheme.primary;
    }
    else if (props.secondary) {
        color = materialui_1.default.secondary || defaulttheme.secondary;
    }
    else if (props.calm) {
        color = materialui_1.default.calm || defaulttheme.calm;
    }
    else if (props.energized) {
        color = materialui_1.default.energized || defaulttheme.energized;
    }
    else if (props.danger) {
        color = materialui_1.default.danger || defaulttheme.danger;
    }
    else if (props.royal) {
        color = materialui_1.default.royal || defaulttheme.royal;
    }
    else if (props.dark) {
        color = materialui_1.default.dark || defaulttheme.dark;
    }
    else if (props.light) {
        color = materialui_1.default.light || defaulttheme.light;
    }
    else if (props.gray) {
        color = materialui_1.default.gray || defaulttheme.gray;
    }
    else if (props.stable) {
        color = materialui_1.default.stable || defaulttheme.stable;
    }
    else if (props.white) {
        color = materialui_1.default.white || defaulttheme.white;
    }
    else if (props.black) {
        color = materialui_1.default.black || defaulttheme.black;
    }
    else if (props.clear) {
        color = materialui_1.default.black || defaulttheme.black;
    }
    var activeColor = shade(color, materialui_1.default.activeColorShade || defaulttheme.activeColorShade || -0.15);
    if (props.outline) {
        if (active) {
            return {
                borderColor: color,
                backgroundColor: color,
                textColor: textFromHex(color),
                activeColor: shade(color, 0)
            };
        }
        else {
            return {
                borderColor: color,
                backgroundColor: materialui_1.default.clear || defaulttheme.clear,
                textColor: color,
                activeColor: activeColor
            };
        }
    }
    else if (props.clear) {
        return {
            borderColor: materialui_1.default.clear || defaulttheme.clear,
            backgroundColor: materialui_1.default.clear || defaulttheme.clear,
            textColor: color,
            activeColor: activeColor
        };
    }
    return {
        borderColor: color,
        backgroundColor: color,
        textColor: textFromHex(color),
        activeColor: activeColor
    };
};
var hasTheme = function (props) {
    if (props.primary ||
        props.secondary ||
        props.calm ||
        props.energized ||
        props.danger ||
        props.royal ||
        props.dark ||
        props.light ||
        props.gray ||
        props.stable ||
        props.white ||
        props.black ||
        props.clear) {
        return true;
    }
    return false;
};
var setPosition = function (pos, dim, off) {
    var center = (width - dim.w) / 2;
    var middle = (height - dim.h) / 2;
    var margin = materialui_1.default.margin || defaulttheme.margin;
    var positionStyles = { position: 'absolute' };
    switch (pos) {
        case "TL":
            positionStyles.top = off.v + margin;
            positionStyles.left = off.h + margin;
            break;
        case "T":
            positionStyles.top = off.v + margin;
            positionStyles.left = center + margin;
            break;
        case "TR":
            positionStyles.top = off.v + margin;
            positionStyles.right = off.h + margin;
            break;
        case "ML":
            positionStyles.top = middle + margin;
            positionStyles.left = off.h + margin;
            break;
        case "M":
            positionStyles.top = middle + margin;
            positionStyles.left = center + margin;
            break;
        case "MR":
            positionStyles.top = middle + margin;
            positionStyles.right = off.h + margin;
            break;
        case "BL":
            positionStyles.bottom = off.v + margin;
            positionStyles.left = off.h + margin;
            break;
        case "B":
            positionStyles.bottom = off.v + margin;
            positionStyles.left = center + margin;
            break;
        case "BR":
            positionStyles.bottom = off.v + margin;
            positionStyles.right = off.h + margin;
            break;
    }
    return positionStyles;
};
var helpers = {
    colors: materialui_1.default,
    rgbToHex: rgbToHex, hexToRGB: hexToRGB, textFromRGB: textFromRGB, textFromHex: textFromHex,
    shade: shade, height: height, width: width,
    hasTheme: hasTheme,
    color: themeColor,
    position: setPosition,
    margin: materialui_1.default.margin || defaulttheme.margin,
    padding: materialui_1.default.padding || defaulttheme.padding,
    rowHeight: materialui_1.default.rowHeight || defaulttheme.rowHeight,
    actionbarHeight: materialui_1.default.actionbarHeight || defaulttheme.actionbarHeight,
    activeColorShade: materialui_1.default.activeColorShade || defaulttheme.activeColorShade,
    buttonRadius: materialui_1.default.buttonRadius || defaulttheme.buttonRadius,
    floatRadius: materialui_1.default.floatRadius || defaulttheme.floatRadius,
    floatMiniRadius: materialui_1.default.floatMiniRadius || defaulttheme.floatMiniRadius,
    floatShadow: materialui_1.default.floatShadow || defaulttheme.floatShadow
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = helpers;
