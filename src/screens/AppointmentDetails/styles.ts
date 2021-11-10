import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: '100%',
        height: 234,
        marginBottom : 30,
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize:28,
    },
    subtitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize:13
    },
    content : {
        flex:1,
        justifyContent : 'flex-end',
        marginHorizontal: 24,
        marginBottom:30
    },
   
})