import { Dimensions } from 'react-native';
import theme from './themes/materialui';

const {height, width} = Dimensions.get('window');
const margin = 8;
const padding = 8;
const rowHeight = 50;
const actionbarHeight = 44;

const componentToHex = c => {
  const hex = c.toString(16);
  return hex.length===1 ? "0"+hex : hex;
}
const rgbToHex = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
const hexToRGB = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
const textFromRGB = (r, g, b) => (r*0.299 + g*0.587 + b*0.114) > 186 ? theme.black : theme.white;
const textFromHex = (hex) => {
  const rgb = hexToRGB(hex);
  return textFromRGB(rgb.r, rgb.g, rgb.b);
}
const shade = (hex, lum) => {
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;
	let rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}
const themeColor = (props, active) => {
  let color = theme.stable;
  if(props.color){
    color = props.color;
  } else if(props.primary){
    color = theme.primary;
  } else if(props.secondary){
    color = theme.secondary;
  } else if(props.calm){
    color = theme.calm;
  } else if(props.energized){
    color = theme.energized;
  } else if(props.danger){
    color = theme.danger;
  } else if(props.royal){
    color = theme.royal;
  } else if(props.dark){
    color = theme.dark;
  } else if(props.white){
    color = theme.white;
  } else if(props.black){
    color = theme.black;
  } else if(props.clear){
    color = theme.black;
  }
  const activeColor = shade(color, -0.15);
  if(props.outline){
    if(active){
      return {
        borderColor: color,
        backgroundColor: color,
        textColor: textFromHex(color),
        activeColor: shade(color, 0)
      };
    } else {
      return {
        borderColor: color,
        backgroundColor: theme.clear,
        textColor: color,
        activeColor
      };
    }
  } else if(props.clear) {
    return {
      borderColor: theme.clear,
      backgroundColor: theme.clear,
      textColor: color,
      activeColor
    };
  }
  return {
    borderColor: color,
    backgroundColor: color,
    textColor: textFromHex(color),
    activeColor
  };
}
const setPosition = function (pos, dim, off){
  const center = (width - dim.w)/2;
  const middle = (height - dim.h)/2;
  let positionStyles = {position: 'absolute'};
  switch(pos){
    case "TL":
      positionStyles.top = off.v+margin;
      positionStyles.left = off.h+margin;
    break;
    case "T":
      positionStyles.top = off.v+margin;
      positionStyles.left = center+margin;
    break;
    case "TR":
      positionStyles.top = off.v+margin;
      positionStyles.right = off.h+margin;
    break;
    case "ML":
      positionStyles.top = middle+margin;
      positionStyles.left = off.h+margin;
    break;
    case "M":
      positionStyles.top = middle+margin;
      positionStyles.left = center+margin;
    break;
    case "MR":
      positionStyles.top = middle+margin;
      positionStyles.right = off.h+margin;
    break;
    case "BL":
      positionStyles.bottom = off.v+margin;
      positionStyles.left = off.h+margin;
    break;
    case "B":
      positionStyles.bottom = off.v+margin;
      positionStyles.left = center+margin;
    break;
    case "BR":
      positionStyles.bottom = off.v+margin;
      positionStyles.right = off.h+margin;
    break;
  }
  return positionStyles;
}

export {
  rgbToHex, hexToRGB, textFromRGB, textFromHex, shade, theme, themeColor,
  height, width, margin, padding, rowHeight, actionbarHeight, setPosition
}
export default theme;
