"use strict";
var react_native_1 = require('react-native');
var themes_1 = require('../themes');
var colors = themes_1.default.colors, margin = themes_1.default.margin, padding = themes_1.default.padding, width = themes_1.default.width, actionbarHeight = themes_1.default.actionbarHeight;
var sideWidth = 50;
var statusbarHeight = 20;
var styles = react_native_1.StyleSheet.create({
    actionbar: {
        height: actionbarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actionbarHeader: {
        position: 'relative',
        top: 0, left: 0, right: 0,
        height: actionbarHeight + statusbarHeight,
        paddingTop: statusbarHeight
    },
    actionbarFooter: {
        alignSelf: 'flex-end',
        width: width,
        height: actionbarHeight
    },
    actionItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 0,
        backgroundColor: colors.clear
    },
    actionItemText: {
        flex: 1,
        fontSize: 17
    },
    actionItemIcon: {
        flex: 0,
        marginRight: margin / 2
    },
    actionBarItem: {
        flexDirection: 'row',
        backgroundColor: colors.clear
    },
    actionBarCenter: {
        flex: 1,
        backgroundColor: colors.clear
    },
    actionBarTitle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17
    },
    actionBarLeft: {
        width: sideWidth,
        justifyContent: 'flex-start',
        paddingVertical: 0,
    },
    actionBarRight: {
        width: sideWidth,
        justifyContent: 'flex-end',
        paddingLeft: padding
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = styles;
