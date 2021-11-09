import React from "react";
import { View } from "react-native";
import { styles } from './styles';
import { Background } from "../../components/background";
import { Header } from "../../components/header";


export function AppointmentDetails() {
    return (
        <Background>

            <View>
                <Header title="Detalhes" ></Header>
            </View>
        </Background>

    )
}