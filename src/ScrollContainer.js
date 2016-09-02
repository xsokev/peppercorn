import React, {PropTypes} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles/content';

const ScrollContainer = (props) => {
  const contentStyle = [styles.content, props.padding && styles.padding, props.style];
  if(props.scroll) {
    return (
      <ScrollView {...props} style={contentStyle}>
        {props.children}
      </ScrollView>
    );
  }
  return (
    <View {...props} style={contentStyle}>
      {props.children}
    </View>
  );
}

ScrollContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.bool,
  scroll: PropTypes.bool,
  style: PropTypes.any
};
ScrollContainer.defaultProps = {
  scroll: true
};
export default ScrollContainer;
