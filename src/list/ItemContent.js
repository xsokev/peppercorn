import React, {PropTypes} from 'react';
import {Platform, View, Text} from 'react-native';
import ItemIcon from './ItemIcon';
import Badge from '../Badge';
import {styles} from '../styles/list';

const ItemContent = (props) => {
  // check Platform and use
  let accessory;
  if(typeof props.accessory !== 'undefined'){
    if(props.accessory==='checkmark'){
      accessory = (<ItemIcon name="check" theme="primary" style={styles.accessory} right={true} />);
    } else if(props.accessory==='disclosure'){
      accessory = (<ItemIcon name={Platform.OS==='android'?'md-arrow-forward':'ios-arrow-forward'} set="Ionicons" theme="gray" style={styles.accessory} right={true} />);
    } else if(props.accessory==='detail'){

    }
  }
  const noline = (typeof props.noline !== 'undefined');
  let note;
  if(typeof props.note !== 'undefined'){
    note = (<Text style={styles.noteText}>{props.note}</Text>);
  } else if(typeof props.badge !== 'undefined'){
    if(typeof props.badge==='string'){
      note = (<Badge text={props.badge} />);
    } else {
      note = props.badge;
    }
  }
  return (
    <View {...props} style={[styles.itemContent, noline && styles.itemNoLine, props.style]}>
      <View style={styles.itemText}>{props.children}</View>
      {note}
      {accessory}
    </View>
  );
}
ItemContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  note: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  badge: PropTypes.oneOfType([
    PropTypes.string,
    React.PropTypes.instanceOf(Badge)
  ]),
  accessory: PropTypes.oneOf(['checkmark', 'disclosure', 'detail']),
  noline: PropTypes.bool,
  style: PropTypes.any
};
ItemContent.defaultProps = {};

export default ItemContent;
