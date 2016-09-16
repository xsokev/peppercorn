import { StyleSheet } from 'react-native';
import theme from '../themes';
const { margin, padding, width, colors } = theme;
const styles = StyleSheet.create({
    h1: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 36
    },
    h2: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 30
    },
    h3: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 24
    },
    h4: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 18
    },
    h5: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 14
    },
    h6: {
        marginBottom: margin,
        fontWeight: '500',
        fontSize: 12
    },
    hr: {
        marginBottom: margin,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border
    },
    br: {
        marginBottom: margin * 2
    },
    p: {
        marginBottom: margin,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    blockquote: {
        paddingLeft: padding,
        borderLeftWidth: 10,
        borderLeftColor: colors.primary,
    },
    blockquoteText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontStyle: 'italic'
    },
    a: {
        color: colors.primary
    },
    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    }
});
export default styles;
