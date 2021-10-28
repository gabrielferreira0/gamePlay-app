import React from "react";
import { useNavigation } from "@react-navigation/native";


import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/buttonIcon";

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={IllustrationImg} resizeMode='stretch' />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title="Entrar com Discord"
                    onPress={handleSignIn}
                />
            </View>
        </View>
    );
}