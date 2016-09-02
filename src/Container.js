import React, {PropTypes} from 'react';
import {View} from 'react-native';
import {styles} from './styles/container';

const Container = (props) => {
  const contentStyle = [styles.content, props.padding && styles.padding, props.style];
  return (
    <View {...props} style={contentStyle}>
      {props.children}
    </View>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.bool,
  style: PropTypes.any
};
Container.defaultProps = {};
export default Container;
