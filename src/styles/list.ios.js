import {StyleSheet} from 'react-native';
import {theme, margin, padding, rowHeight} from './';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.clear,
    backgroundColor: Colors.light
  },
  listMargin: {
    paddingHorizontal: margin*2
  },
  item: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingLeft: padding,
      minHeight: rowHeight,
      backgroundColor: theme.white
    },
  itemContent: {
    flex: 1,
    minHeight: rowHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: margin,
    backgroundColor: theme.white,
    borderBottomColor: theme.border,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  multilineContainer: {
    minHeight: rowHeight,
    backgroundColor: Colors.clear,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: margin
  },
  itemMultilinePrimaryText: {
    flex: 0,
    fontSize: 16,
    fontWeight: '400'
  },
  itemText: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  itemDivider: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: margin,
    paddingTop: margin*2,
    paddingBottom: margin,
    backgroundColor: theme.light
  },
  itemDividerText: {
    fontSize: 14,
    fontWeight: '600'
  },
  noteText: {
    flex: 0,
    textAlign: 'right',
    color: theme.primary
  },
  accessory: {
    flex: 0
  },
  itemNoLine: {
    borderBottomColor: theme.clear
  },
  itemHeader: {
    flex: 0,
    height: rowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: padding,
    backgroundColor: theme.white,
    borderBottomColor: theme.border,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  itemHeaderText: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemFooter: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: padding,
    backgroundColor: theme.light,
  },
  itemFooterText: {
    flex: 1,
    fontSize: 12,
    marginVertical: padding,
    fontWeight: '200',
    color: theme.darkActive
  },
  thumb: {
    flex: 0,
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: margin
  },
  thumbImage: {
    width: 40,
    height: 40
  },
  avatar: {
    borderRadius: 20
  },
  icon: {
    flex: 0,
    minWidth: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: margin
  },
  iconRight: {
    minWidth: 16,
    marginRight: 0,
    marginLeft: margin
  }
});
