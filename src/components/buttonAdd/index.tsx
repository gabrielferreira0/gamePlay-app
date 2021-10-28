import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';
import { theme } from "../../global/styles/theme";


type Props = RectButtonProps;

export function ButtonAdd({ }: Props) {
    return (
        <RectButton style={styles.container} >

            <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />
        </RectButton>
    );
}