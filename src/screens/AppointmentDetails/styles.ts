import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

import {getBottomSpace} from 'react-native-iphone-x-helper';

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
    divisor : {
        width : '78%',
        height : 1,
        backgroundColor : theme.colors.secondary40,
        marginVertical : 31,
        alignSelf : 'flex-end',
        marginTop: 2,
    },
    members : {
        marginTop:27,
        marginLeft:24,
    },
    contentButton : {
    paddingHorizontal:24,
    paddingVertical:20,
    marginBottom : getBottomSpace(),
    }
   
})