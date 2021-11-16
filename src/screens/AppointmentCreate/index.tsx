import React, { useState } from "react";
import { styles } from './styles';
import { Background } from "../../components/background";
import { Header } from "../../components/header";

import { CategorySelect } from "../../components/categorySelect";
import { theme } from "../../global/styles/theme";
import { Text, View, } from "react-native";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {


        if (categoryId === category) {
            setCategory('')
        }
        else {
            setCategory(categoryId);
        }

    }


    return (
        <Background>
            <Header title="Agendar partida" ></Header>


            <Text style={styles.label}>
                Categoria
            </Text>
            <CategorySelect hasCheckBox={true} categorySelected={category} setCategory={handleCategorySelect}
            />
        </Background >



    )
}