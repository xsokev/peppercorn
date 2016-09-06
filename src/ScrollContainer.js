import React, {PropTypes} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles/container';

const ScrollContainer = (props) => {
  const contentStyle = [props.padding && styles.padding, props.style];
  return (
    <ScrollView {...props} style={styles.container} contentContainerStyle={contentStyle}>
      {props.children}
    </ScrollView>
  );
}

ScrollContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.bool,
  style: PropTypes.any
};
ScrollContainer.defaultProps = {};
export default ScrollContainer;
