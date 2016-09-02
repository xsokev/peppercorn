import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/list';

const ItemDivider = (props) => (
  <View {...props} style={[styles.itemDivider, props.style]}>
    <Text {...props} style={[styles.itemDividerText, props.textStyle]}>
      {(props.text || props.children || "").toUpperCase()}
    </Text>
  </View>
);

ItemDivider.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.any,
  textStyle: PropTypes.any
};
ItemDivider.defaultProps = {};

export default ItemDivider;
