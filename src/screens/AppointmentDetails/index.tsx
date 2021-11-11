import React from "react";
import { styles } from './styles';
import { Background } from "../../components/background";
import { Header } from "../../components/header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { ListHeader } from "../../components/listHeader";

import BannerImg from '../../assets/banner.png'
import { Member } from "../../components/members";

import { ButtonIcon } from "../../components/buttonIcon";

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Gabriel',
            avatar: 'https://github.com/gabrielferreira0.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Gabriel',
            avatar: 'https://github.com/gabrielferreira0.png',
            status: 'offline'
        }
    ]


    return (
        <Background>
            <Header title="Detalhes" action={
                <BorderlessButton>
                    <Fontisto color={theme.colors.primary} name="share" size={24} />
                </BorderlessButton>
            } ></Header>

            <ImageBackground style={styles.banner} source={BannerImg}>

                <View style={styles.content}>

                    <Text style={styles.title}>Lendários</Text>

                    <Text style={styles.subtitle}>É hoje que vamos trollar as ranked de todo mundo</Text>
                </View>
            </ImageBackground>

            <View>
                <ListHeader title="Jogadores" subtitle="Total 2" />
            </View>

            <FlatList style={styles.members} data={members} keyExtractor={item => item.id} renderItem={({ item }) => (
                <>
                    <Member data={item}></Member>
                    <View style={styles.divisor} />
                </>
            )} />

            <View style={styles.contentButton}>
                <ButtonIcon title="Entrar na partida"></ButtonIcon>
            </View>
        </Background >

    )
}