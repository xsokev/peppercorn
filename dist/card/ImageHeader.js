var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { Image } from 'react-native';
import { H5 } from '../Typography';
import { cardStyles as styles } from '../styles';
const ImageHeader = (props) => {
    let _image;
    if (typeof props.image === "string") {
        _image = require(props.image);
    }
    else {
        _image = props.image;
    }
    return (React.createElement(Image, __assign({}, props, {source: _image, style: [styles.imageHeader, props.style], resizeMode: props.mode}), React.createElement(H5, {style: [styles.imageHeaderText, props.textStyle]}, props.caption)));
};
ImageHeader.propTypes = {
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.any
    ]),
    mode: PropTypes.string,
    caption: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object
};
ImageHeader.defaultProps = {
    mode: "cover"
};
export default ImageHeader;
