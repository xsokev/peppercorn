var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { typographyStyles as styles } from './styles';
const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
    style: PropTypes.any,
};
const H1 = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.h1, props.style]}), props.children));
H1.propTypes = propTypes;
const H2 = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.h2, props.style]}), props.children));
H2.propTypes = propTypes;
const H3 = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.h3, props.style]}), props.children));
H3.propTypes = propTypes;
const H4 = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.h4, props.style]}), props.children));
H4.propTypes = propTypes;
const H5 = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.h5, props.style]}), props.children));
H5.propTypes = propTypes;
const H6 = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.h6, props.style]}), props.children));
H6.propTypes = propTypes;
const P = (props) => {
    const center = typeof props.center !== 'undefined';
    const right = typeof props.right !== 'undefined';
    return (React.createElement(Text, __assign({}, props, {style: [styles.p, props.style, center && styles.textCenter, right && styles.textRight]}), props.children));
};
P.propTypes = propTypes;
const A = (props) => (React.createElement(Text, __assign({}, props, {style: [styles.a, props.style]}), props.children));
A.propTypes = propTypes;
const BLOCKQUOTE = (props) => (React.createElement(View, __assign({}, props, {style: styles.blockquote}), React.createElement(Text, {style: [styles.blockquoteText, props.style]}, props.children)));
BLOCKQUOTE.propTypes = propTypes;
const HR = (props) => (React.createElement(View, __assign({}, props, {style: [styles.hr, props.style]})));
HR.propTypes = propTypes;
const BR = (props) => (React.createElement(View, __assign({}, props, {style: [styles.br, props.style]})));
BR.propTypes = propTypes;
export { H1, H2, H3, H4, H5, H6, P, A, BLOCKQUOTE, HR, BR };
export default {
    H1, H2, H3, H4, H5, H6, P, A, BLOCKQUOTE, HR, BR
};
