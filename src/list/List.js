import React, {PropTypes} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from '../styles/list';

const List = (props) => {
  const {inset, noscroll, children, stickyHeader} = props;
  let stickyIndices = [];
  children.forEach((child, i) => {
    if(stickyHeader){
      if(child && (child.type.name==="ItemDivider" || child.type.name==="ItemHeader")){
        stickyIndices.push(i);
      }
    }
    if(i===children.length-1 && child && child.type && child.type.name==="Item"){

    }
  });
  const contentStyle = [styles.list, inset && styles.listMargin, props.style];
  if(noscroll) {
    return (
      <View {...props} style={contentStyle}>
        {children}
      </View>
    );
  }
  return (
    <ScrollView {...props} style={contentStyle} stickyHeaderIndices={stickyIndices}>
      {props.children}
    </ScrollView>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  inset: PropTypes.bool,
  noscroll: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  style: PropTypes.any
};
List.defaultProps = {};

export default List;
