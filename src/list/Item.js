import React, {PropTypes} from 'react';
import {Platform, TouchableNativeFeedback, TouchableHighlight, View} from 'react-native';
import {theme} from '../styles';
import {styles} from '../styles/list';

const Item = (props) => (
  (Platform.OS === 'android') ? 
  <TouchableNativeFeedback {...props}
    onPress={props.onPress}
    background={TouchableNativeFeedback.Ripple(theme.light, false)}>
    <View style={[styles.item, props.style]}>
      {props.children}
    </View>
  </TouchableNativeFeedback> :
  <TouchableHighlight {...props}
    underlay={theme.light}
    onPress={props.onPress}>
    <View style={[styles.item, props.style]}>
      {props.children}
    </View>
  </TouchableHighlight>
);

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onPress: PropTypes.func,
  style: PropTypes.any
};
Item.defaultProps = {};

export default Item;
