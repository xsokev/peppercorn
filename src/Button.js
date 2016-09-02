import React, {Component, PropTypes} from 'react';
import {Platform, Text, View, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity} from 'react-native';
import {themeColor, margin} from './styles';
import {styles, buttonRadius} from './styles/button';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this._highlight = this._highlight.bind(this);
    this._unhighlight = this._unhighlight.bind(this);
  }
  render(){
    const tc = themeColor(this.props, this.state.active);
    const {text, children, size, full, clear, outline, round, color, disabled, style} = this.props;
    const onPress = disabled ? null : this.props.onPress;
    const contents = text || children || "";
    const textContents = (<Text style={[
        styles.buttonText,
        {color: tc.textColor},
        size && styles["text"+size]]}>
        {contents}
      </Text>);

    if(clear){
      return (
        <TouchableOpacity {...this.props} style={[style, !full && {borderRadius: buttonRadius, marginVertical: margin/2, marginHorizontal: margin}]} onPress={onPress}>
          <View
            style={[
              styles.button, styles.clear,
              size && styles[size],
              full && styles.full,
              disabled && styles.disabled,
              {backgroundColor: tc.backgroundColor}
            ]}>
            {textContents}
          </View>
        </TouchableOpacity>
      );
    } else if(outline){
      return (
        (Platform.OS === 'android') ?
        <TouchableNativeFeedback {...this.props}
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple(tc.activeColor, false)}
          style={[
            {backgroundColor: tc.backgroundColor},
            !full && {borderRadius: buttonRadius, marginVertical: margin/2, marginHorizontal: margin},
            round && styles.round,
            disabled && styles.disabled,
            style
          ]}>
          <View
            style={[
              styles.button, styles.outline,
              size && styles[size],
              full && styles.full,
              disabled && styles.disabled,
              {borderColor: tc.borderColor, backgroundColor: tc.backgroundColor}
            ]}>
            {textContents}
          </View>
        </TouchableNativeFeedback> :
        <TouchableHighlight
          onPress={onPress}
          underlayColor={tc.activeColor}
          activeOpacity={1}
          onShowUnderlay={this._highlight}
          onHideUnderlay={this._unhighlight}
          {...this.props} style={[
            {backgroundColor: tc.backgroundColor},
            !full && {borderRadius: buttonRadius, marginVertical: margin/2, marginHorizontal: margin},
            round && styles.round,
            disabled && styles.disabled,
            style
          ]}>
          <View
            style={[
              styles.button, styles.outline,
              size && styles[size],
              full && styles.full,
              disabled && styles.disabled,
              {borderColor: tc.borderColor, backgroundColor: tc.backgroundColor}
            ]}>
            {textContents}
          </View>
        </TouchableHighlight>
      );
    }
    return (
      (Platform.OS === 'android') ?
      <TouchableNativeFeedback {...this.props}
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(tc.activeColor, false)}
        style={[
          {backgroundColor: tc.backgroundColor},
          !full && {borderRadius: buttonRadius, marginVertical: margin/2, marginHorizontal: margin},
          round && styles.round,
          disabled && styles.disabled,
          style
        ]}>
        <View
          style={[
            styles.button,
            size && styles[size],
            full && styles.full,
            disabled && styles.disabled,
            {backgroundColor: this.state.active ? tc.activeColor : tc.backgroundColor}
          ]}>
          {textContents}
        </View>
      </TouchableNativeFeedback> :
      <TouchableHighlight
        onPress={onPress}
        underlayColor={tc.activeColor}
        activeOpacity={1}
        onShowUnderlay={this._highlight}
        onHideUnderlay={this._unhighlight}
        {...this.props} style={[
          {backgroundColor: tc.backgroundColor},
          !full && {borderRadius: buttonRadius, marginVertical: margin/2, marginHorizontal: margin},
          round && styles.round,
          disabled && styles.disabled,
          style
        ]}>
        <View
          style={[
            styles.button,
            size && styles[size],
            full && styles.full,
            disabled && styles.disabled,
            {backgroundColor: this.state.active ? tc.activeColor : tc.backgroundColor}
          ]}>
          {textContents}
        </View>
      </TouchableHighlight>
    );
  }
  _highlight() {
    this.setState({ active: true });
  }
  _unhighlight() {
    this.setState({ active: false });
  }
}
Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  text: PropTypes.any,
  size: PropTypes.string,
  full: PropTypes.bool,
  round: PropTypes.bool,
  clear: PropTypes.bool,
  outline: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.any
};
Button.defaultProps = {};
export default Button;
