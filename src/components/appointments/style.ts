import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',

    },
    content: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginBottom: 24,
        marginRight: 24
    },
    playersInfo: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    players: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 13,
        marginLeft: 7
    }

});