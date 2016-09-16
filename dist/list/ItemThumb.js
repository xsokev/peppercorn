var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { listStyles as styles } from '../styles';
const ItemThumb = (props) => (React.createElement(View, __assign({}, props, {style: [styles.thumb, props.style]}), React.createElement(Image, {source: props.image, resizeMode: "cover", style: [styles.thumbImage, props.avatar && styles.avatar]})));
ItemThumb.propTypes = {
    image: PropTypes.any,
    avatar: PropTypes.bool,
    style: PropTypes.any
};
ItemThumb.defaultProps = {};
export default ItemThumb;
