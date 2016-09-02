import {StyleSheet} from 'react-native';
import {theme, margin, padding, width} from './index';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    marginBottom: 2*margin,
    borderRadius: 2,
    backgroundColor: theme.white
  },
  header: {
    padding: 2*padding,
    paddingBottom: padding,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border
  },
  headerText: {
    color: theme.dark
  },
  content: {
    padding: padding
  },
  footer: {
    padding: 2*padding,
    paddingBottom: padding,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: theme.border
  },
  footerText: {
    color: theme.gray
  },
  imageHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: 200,
    width: width-2*margin
  },
  imageHeaderText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: theme.white,
    padding: 10,
    fontSize: 16,
    fontWeight: '600'
  }
});
export const shadow = {
  color: "rgba(0, 0, 0, 0.3)",
  offset: {
    width: 0,
    height: 1
  },
  opacity: 1,
  radius: 2
};
