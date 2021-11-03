import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from "react-native";
import { styles } from "./style";
import { Avatar } from "../avatar";

import { GuildIcon } from '../guildIcons';
import { categories } from "../../utils/categories";
import PlayerSVG from '../../assets/player.svg';
import CalendarSVG from '../../assets/calendar.svg';
import { theme } from "../../global/styles/theme";


export type guildProps = {

    id: string;
    name: string;
    icon: null;
    owner: true;

}

export type appointmentsProps = {
    id: string,
    guild: guildProps,
    category: string,
    date: string,
    description: string
}

type Props = RectButtonProps & {
    data: appointmentsProps;
}


export function Appointments({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;



    return (
        <RectButton  {...rest}>
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>

                    <View style={styles.header}>

                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>

                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo} >
                            <CalendarSVG />
                            <Text style={styles.date} >
                                {data.date}
                            </Text>
                        </View>


                        <View style={styles.playersInfo}>

                            <PlayerSVG fill={owner ? theme.colors.primary : theme.colors.on} />

                            <Text style={[styles.players, { color: owner ? theme.colors.primary : theme.colors.on }]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>

                </View>

            </View>
        </RectButton >
    );
}