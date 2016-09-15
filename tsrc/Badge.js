import React, {PropTypes} from 'react';
import {Text, View} from 'react-native';
import theme from './themes';
import {styles} from './styles/badge';

const Badge = (props) => {
  const tc = theme.color(props);
  return (
    <View {...props} style={[styles.badge, props.style, {backgroundColor: tc.backgroundColor}]}>
      <Text style={[styles.badgeText, {color: tc.textColor}]}>
        {props.text || props.children || ""}
      </Text>
    </View>
  )
}
Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  text: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.any
};
Badge.defaultProps = {};
export default Badge;
