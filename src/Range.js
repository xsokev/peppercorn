import React, {Component, PropTypes} from 'react';
import {View, Text, Slider, Platform} from 'react-native';
import Icon from './Icon';
import {theme, themeColor} from './styles';
import {styles} from './styles/range';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || 0
    };
  }
  render(){
    const {style, textLeft, textRight, iconLeft, iconRight} = this.props;
    const hasAttachment = textLeft || textRight || iconLeft || iconRight;
    const themeColor = theme[this.props.theme];
    const tint = (() => {
      if(Platform.OS==='ios'){
        return themeColor;
      }
    })();
    if(hasAttachment){
      let left, right;
      if(textLeft || iconLeft){
        if(typeof textLeft === "string"){
          left = <Text style={[styles.text, themeColor && {color: themeColor}]}>{textLeft}</Text>;
        } else if(typeof textLeft === "object") {
          left = typeof textLeft.text === 'undefined' ? null : <Text style={[
            styles.text,
            themeColor && {color: themeColor},
            textLeft.color && {color: textLeft.color},
            textLeft.size && {fontSize: textLeft.size},
            textLeft.style
          ]}>{textLeft.text}</Text>;
        }
        if(typeof iconLeft === "string"){
          left = <Icon style={[styles.icon]} name={iconLeft} />;
        } else if(typeof iconLeft === "object") {
          left = iconLeft.name ? <Icon style={[styles.icon]}
            name={iconLeft.name}
            size={iconLeft.size || 18}
            color={themeColor || iconLeft.color} /> : null;
        }
      }
      if(textRight || iconRight){
        if(typeof textRight === "string"){
          right = <Text style={[styles.text, styles.textright, themeColor && {color: themeColor}]}>{textRight}</Text>;
        } else if(typeof textRight === "object") {
          right = typeof textRight.text === 'undefined' ? null : <Text style={[
            styles.text,
            styles.textright,
            themeColor && {color: themeColor},
            textRight.color && {color: textRight.color},
            textRight.size && {fontSize: textRight.size},
            textRight.style
          ]}>{textRight.text}</Text>;
        }
        if(typeof iconRight === "string"){
          right = <Icon style={[styles.icon]} name={iconRight} />;
        } else if(typeof iconRight === "object") {
          right = iconRight.name ? <Icon style={[styles.icon]}
            name={iconRight.name}
            size={iconRight.size || 24}
            color={themeColor || iconRight.color} /> : null;
        }
      }
      return (
        <View style={[styles.range]}>
            {left}
            <Slider {...this.props} minimumTrackTintColor={tint} style={[styles.slider, style]} />
            {right}
        </View>
      )
    } else {
      return (<Slider {...this.props} minimumTrackTintColor={tint} style={[styles.slider, style]} />);
    }
  }
}
Range.propTypes = {
  theme: PropTypes.string,
  textLeft: PropTypes.oneOfType([
    PropTypes.shape({text: PropTypes.string, color: PropTypes.string, size: PropTypes.number}),
    PropTypes.object,
    PropTypes.string
  ]),
  textRight: PropTypes.oneOfType([
    PropTypes.shape({text: PropTypes.string, color: PropTypes.string, size: PropTypes.number}),
    PropTypes.object,
    PropTypes.string
  ]),
  iconLeft: PropTypes.oneOfType([
    PropTypes.shape({name: PropTypes.string, color: PropTypes.string, size: PropTypes.number}),
    PropTypes.object,
    PropTypes.string
  ]),
  iconRight: PropTypes.oneOfType([
    PropTypes.shape({name: PropTypes.string, color: PropTypes.string, size: PropTypes.number}),
    PropTypes.object,
    PropTypes.string
  ]),
  style: PropTypes.any
};
Range.defaultProps = {
  theme: 'primary'
};
export default Range;
