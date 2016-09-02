import React, {PropTypes} from 'react';
import {Item, ItemText, ItemThumb, ItemContent, ItemIcon} from './';

const ListItem = (props) => {
  let _thumb, _icon;
  const {text, children, note, icon, badge, accessory, noline, thumb, style, contentStyle, onPress} = props;
  const _content = children || text;
  if(thumb){
    if(thumb.image){
      _thumb = (<ItemThumb image={thumb.image} avatar={thumb.avatar} style={thumb.style} />);
    } else {
      if(typeof thumb === "string"){
        _thumb = (<ItemThumb image={require(thumb)} />);
      } else {
        _thumb = (<ItemThumb image={thumb} />);
      }
    }
  }
  if(icon){
    if(typeof icon === "string"){
      _icon = (<ItemIcon name={icon} />);
    } else {
      _icon = (<ItemIcon name={icon.icon} set={icon.set} color={icon.color} style={icon.style} />);
    }
  }
  return (
    <Item {...props} onPress={onPress} style={style}>
      {_thumb}
      {_icon}
      <ItemContent accessory={accessory} note={note} noline={noline} style={contentStyle}>
        <ItemText>{_content}</ItemText>
      </ItemContent>
    </Item>
  )
}

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  note: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      icon: PropTypes.string,
      set: PropTypes.string,
      color: PropTypes.string,
      style: PropTypes.any
    })
  ]),
  badge: PropTypes.string,
  accessory: PropTypes.oneOf(['checkmark', 'disclosure', 'detail']),
  noline: PropTypes.bool,
  thumb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
    PropTypes.shape({
      image: PropTypes.any,
      avatar: PropTypes.bool,
      style: PropTypes.any
    })
  ]),
  contentStyle: PropTypes.any,
  style: PropTypes.any
};
ListItem.defaultProps = {};

export default ListItem;
