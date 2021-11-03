import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    },
    content: {
        marginTop: 42,
    },
    matches: {
        marginTop: 24,
        marginLeft : 24
    },
    divisor : {
        width : '80%',
        height : 1,
        backgroundColor : theme.colors.secondary40,
        marginVertical : 21,
        alignSelf : 'flex-end'
    }
});