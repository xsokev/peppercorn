import React, {PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {styles} from './styles/typography';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};

const H1 = (props) => (
  <Text {...props} style={[styles.h1, props.style]}>{props.children}</Text>
);
H1.propTypes = propTypes;
const H2 = (props) => (
  <Text {...props} style={[styles.h2, props.style]}>{props.children}</Text>
);
H2.propTypes = propTypes;
const H3 = (props) => (
  <Text {...props} style={[styles.h3, props.style]}>{props.children}</Text>
);
H3.propTypes = propTypes;
const H4 = (props) => (
  <Text {...props} style={[styles.h4, props.style]}>{props.children}</Text>
);
H4.propTypes = propTypes;
const H5 = (props) => (
  <Text {...props} style={[styles.h5, props.style]}>{props.children}</Text>
);
H5.propTypes = propTypes;
const H6 = (props) => (
  <Text {...props} style={[styles.h6, props.style]}>{props.children}</Text>
);
H6.propTypes = propTypes;
const P = (props) => {
  const center = typeof props.center !== 'undefined';
  const right = typeof props.right !== 'undefined';
  return (
    <Text {...props} style={[styles.p, props.style, center && styles.textCenter, right && styles.textRight]}>{props.children}</Text>
  )
}
P.propTypes = propTypes;
const A = (props) => (
  <Text {...props} style={[styles.a, props.style]}>{props.children}</Text>
);
A.propTypes = propTypes;
const BLOCKQUOTE = (props) => (
  <View {...props} style={styles.blockquote}>
    <Text style={[styles.blockquoteText, props.style]}>{props.children}</Text>
  </View>
);
BLOCKQUOTE.propTypes = propTypes;
const HR = (props) => (
  <View {...props} style={[styles.hr, props.style]} />
);
HR.propTypes = propTypes;
const BR = (props) => (
  <View {...props} style={[styles.br, props.style]} />
);
BR.propTypes = propTypes;

export { H1, H2, H3, H4, H5, H6, P, A, BLOCKQUOTE, HR, BR };

export default {
  H1, H2, H3, H4, H5, H6, P, A, BLOCKQUOTE, HR, BR
};
