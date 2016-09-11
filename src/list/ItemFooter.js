import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/list';

const ItemFooter = (props) => (
  <View {...props} style={[styles.itemFooter, props.style]}>
    <Text style={[styles.itemFooterText, props.textStyle]}>
      {props.children}
    </Text>
  </View>
);

ItemFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.any,
  textStyle: PropTypes.any
};
ItemFooter.defaultProps = {};

export default ItemFooter;
