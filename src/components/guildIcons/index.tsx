import React from "react";
import { View, Image } from "react-native";
import { styles } from "./style";
import DiscordImg from '../../assets/discord.png';

export function GuildIcon() {
    return (
        <Image source={DiscordImg} style={styles.image} resizeMode='cover' />
    );
}