import { StyleSheet, PixelRatio } from 'react-native';
import theme from '../themes';
const { colors, margin, floatMiniRadius, floatRadius } = theme;
const radius = PixelRatio.getPixelSizeForLayoutSize(floatRadius);
const radiusMini = PixelRatio.getPixelSizeForLayoutSize(floatMiniRadius);
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
    },
    button: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: radius,
        width: radius,
        borderRadius: radius / 2
    },
    mini: {
        height: radiusMini,
        width: radiusMini,
        borderRadius: radiusMini / 2
    },
    buttonIcon: {
        flex: 0,
        backgroundColor: colors.clear,
    },
    disabled: {
        opacity: 0.7
    },
    disabledtext: {}
});
export { radius, radiusMini, styles };
export const shadow = {
    color: "rgba(0, 0, 0, 0.3)",
    offset: {
        width: 0,
        height: 1
    },
    opacity: 1,
    radius: 2
};
export default styles;
