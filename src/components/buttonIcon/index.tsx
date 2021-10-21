import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import DiscordImg from '../../assets/discord.png';
import { styles } from './style';

type Props = {
    title?: String;
    activeOpacity : number;
}



export function ButtonIcon({ title , activeOpacity}: Props) {
    return (

        <TouchableOpacity  style={styles.container} activeOpacity={activeOpacity} >
            <View style={styles.iconWrapper}>
                <Image style={styles.icon} source={DiscordImg}></Image>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>

    );
}