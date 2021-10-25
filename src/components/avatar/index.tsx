import React from "react";
import { Image } from "react-native";
import { styles } from "./style";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient colors={[theme.colors.secondary50, theme.colors.secondary70]} style={styles.container}>
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}

            />

        </LinearGradient>
    );
}