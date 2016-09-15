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
var ImageHeader = function (props) {
    var _image;
    if (typeof props.image === "string") {
        _image = require(props.image);
    }
    else {
        _image = props.image;
    }
    return (react_1.default.createElement(react_native_1.Image, __assign({}, props, {source: _image, style: [styles_1.cardStyles.imageHeader, props.style], resizeMode: props.mode}), react_1.default.createElement(Typography_1.H5, {style: [styles_1.cardStyles.imageHeaderText, props.textStyle]}, props.caption)));
};
ImageHeader.propTypes = {
    image: react_1.PropTypes.oneOfType([
        react_1.PropTypes.string,
        react_1.PropTypes.any
    ]),
    mode: react_1.PropTypes.string,
    caption: react_1.PropTypes.string,
    style: react_1.PropTypes.object,
    textStyle: react_1.PropTypes.object
};
ImageHeader.defaultProps = {
    mode: "cover"
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageHeader;
