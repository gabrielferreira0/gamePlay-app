import React from "react";
import { View } from "react-native";
import { Profile } from "../../components/profile";
import { ButtonAdd } from "../../components/buttonAdd";
import { styles } from "../SignIn/styles";
import { style } from "./style";
import { CategorySelect } from "../../components/categorySelect";
export function Home() {
    return (
        <View>
            <View style={style.header}>
                <Profile></Profile>
                <ButtonAdd></ButtonAdd>
            </View>

            <View>
                <CategorySelect></CategorySelect>
            </View>
        </View>
    );
}