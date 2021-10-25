import React from "react";
import { View } from "react-native";
import { Profile } from "../../components/profile";
import { styles } from "../SignIn/styles";
import { style } from "./style";
export function Home() {
    return (
        <View>
            <View style={style.header}>
            <Profile></Profile>
            </View>
        </View>
    );
}