import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {H5} from '../Typography';
import {styles, shadow} from '../styles/card';

const Card = (props) => {
  let header, footer;
  if(typeof props.header !== 'undefined'){
    if(typeof props.header === 'string'){
      header = (<View style={styles.header}>
        <H5 style={styles.headerText}>{props.header}</H5>
      </View>);
    } else {
      header = props.header;
    }
  }
  if(typeof props.footer !== 'undefined'){
    if(typeof props.footer === 'string'){
      footer = (<View style={styles.footer}>
        <H5 style={styles.footerText}>{props.footer}</H5>
      </View>);
    } else {
      footer = (<View style={[styles.footer, {padding: 0, paddingBottom: 0}]}>{props.footer}</View>);
    }
  }
  return (
    <View {...props}
      shadowColor={shadow.color}
      shadowOffset={shadow.offset}
      shadowOpacity={shadow.opacity}
      shadowRadius={shadow.radius}
      style={[styles.card, props.style]}>
      {header}
      <View style={props.padding && styles.content}>{props.children}</View>
      {footer}
    </View>
  )
}
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  padding: PropTypes.bool,
  style: PropTypes.any
};
Card.defaultProps = {};
export default Card;
