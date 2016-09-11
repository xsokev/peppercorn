import React, {PropTypes} from 'react';
import {Platform, View, Text} from 'react-native';
import Icon from '../Icon';
import Badge from '../Badge';
import {styles} from '../styles/list';

const ItemRight = ({children}) => (
  <View style={[styles.itemRight]}>{children}</View>
)

const ItemContent = (props) => {
  // check Platform and use
  let accessory;
  if(typeof props.accessory !== 'undefined'){
    if(props.accessory==='checkmark'){
      accessory = (<Icon name="check" style={styles.accessory} right={true} primary />);
    } else if(props.accessory==='disclosure'){
      accessory = (<Icon name={Platform.OS==='android'?'md-arrow-forward':'ios-arrow-forward'} set="Ionicons" style={styles.accessory} right={true} gray />);
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
      <View style={[styles.itemRight]}>
        {note}
        {accessory}
      </View>
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
