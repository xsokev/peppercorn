import { Dimensions } from 'react-native';
import theme from './materialui';

const defaulttheme = {
    white: "#FFFFFF",
    black: "#000000",
    light: "#FAFAFA",
    gray: "#E0E0E0",
    stable: "#F5F5F5",
    primary: "#2196F3",
    secondary: "#FFC107",
    calm: "#0097A7",
    energized: "#FF9800",
    danger: "#F44336",
    royal: "#7E57C2",
    dark: "#424242",
    border: "#EEEEEE",
    underlay: "#EEEEEE",
    clear: "rgba(0, 0, 0, 0)",
    
    margin: 8,
    padding: 8,
    rowHeight: 50,
    actionbarHeight: 44,
    activeColorShade: -0.15,
    buttonRadius: 10,
    floatRadius: 10,
    floatMiniRadius: 10,
    floatShadow: 10
}

const {height, width} = Dimensions.get('window');

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
const textFromRGB = (r, g, b) => (r*0.299 + g*0.587 + b*0.114) > 186 ? (theme.black || defaulttheme.black) : (theme.white || defaulttheme.white);
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
  let color = theme.stable || defaulttheme.stable;
  if(props.color){
    color = props.color;
  } else if(props.primary){
    color = theme.primary || defaulttheme.primary;
  } else if(props.secondary){
    color = theme.secondary || defaulttheme.secondary;
  } else if(props.calm){
    color = theme.calm || defaulttheme.calm;
  } else if(props.energized){
    color = theme.energized || defaulttheme.energized;
  } else if(props.danger){
    color = theme.danger || defaulttheme.danger;
  } else if(props.royal){
    color = theme.royal || defaulttheme.royal;
  } else if(props.dark){
    color = theme.dark || defaulttheme.dark;
  } else if(props.white){
    color = theme.white || defaulttheme.white;
  } else if(props.black){
    color = theme.black || defaulttheme.black;
  } else if(props.clear){
    color = theme.black || defaulttheme.black;
  }
  const activeColor = shade(color, theme.activeColorShade || defaulttheme.activeColorShade || -0.15);
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
        backgroundColor: theme.clear || defaulttheme.clear,
        textColor: color,
        activeColor
      };
    }
  } else if(props.clear) {
    return {
      borderColor: theme.clear || defaulttheme.clear,
      backgroundColor: theme.clear || defaulttheme.clear,
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
  const margin = theme.margin || defaulttheme.margin;
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

const helpers = {
    colors: theme,
    rgbToHex, hexToRGB, textFromRGB, textFromHex, 
    shade, height, width,

    color: themeColor,
    position: setPosition,

    margin: theme.margin || defaulttheme.margin,
    padding: theme.padding || defaulttheme.padding,
    rowHeight: theme.rowHeight || defaulttheme.rowHeight,
    actionbarHeight: theme.actionbarHeight || defaulttheme.actionbarHeight,
    activeColorShade: theme.activeColorShade || defaulttheme.activeColorShade,
    buttonRadius: theme.buttonRadius || defaulttheme.buttonRadius,
    floatRadius: theme.floatRadius || defaulttheme.floatRadius,
    floatMiniRadius: theme.floatMiniRadius || defaulttheme.floatMiniRadius,
    floatShadow: theme.floatShadow || defaulttheme.floatShadow
}

export default helpers;