"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, margin = themes_1.default.margin, padding = themes_1.default.padding, rowHeight = themes_1.default.rowHeight;
var styles = react_native_1.StyleSheet.create({
    list: {
        flex: 1,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderColor: colors.clear,
        backgroundColor: colors.light
    },
    listMargin: {
        paddingHorizontal: padding * 2
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: padding,
        paddingRight: 0,
        minHeight: rowHeight,
        backgroundColor: colors.white
    },
    itemContent: {
        flex: 1,
        minHeight: rowHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: padding,
        backgroundColor: colors.white,
        borderBottomColor: colors.border,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth
    },
    multilineContainer: {
        minHeight: rowHeight,
        backgroundColor: colors.clear,
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
        paddingTop: margin * 2,
        paddingBottom: margin,
        backgroundColor: colors.light
    },
    itemDividerText: {
        fontSize: 14,
        fontWeight: '600'
    },
    noteText: {
        flex: 0,
        marginRight: margin,
        textAlign: 'right',
        color: colors.primary
    },
    badgeText: {
        flex: 0,
        marginRight: margin,
        color: colors.primary
    },
    accessory: {
        flex: 0,
        marginRight: 0
    },
    itemNoLine: {
        borderBottomColor: colors.clear
    },
    itemHeader: {
        flex: 0,
        height: rowHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: padding,
        backgroundColor: colors.white,
        borderBottomColor: colors.border,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth
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
        backgroundColor: colors.light,
    },
    itemFooterText: {
        flex: 1,
        fontSize: 12,
        marginVertical: padding,
        fontWeight: '200',
        color: colors.dark
    },
    thumb: {
        flex: 0,
        width: rowHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: margin
    },
    thumbImage: {
        width: rowHeight,
        height: rowHeight
    },
    avatar: {
        borderRadius: 20
    },
    icon: {
        flex: 0,
        width: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: margin
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
