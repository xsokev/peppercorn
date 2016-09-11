import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/list';

const ItemHeader = (props) => (
  <View {...props} style={[styles.itemHeader, props.style]}>
    <Text style={[styles.itemHeaderText, props.textStyle]}>
      {props.children}
    </Text>
  </View>
);

ItemHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.any,
  textStyle: PropTypes.any
};
ItemHeader.defaultProps = {};

export default ItemHeader;
