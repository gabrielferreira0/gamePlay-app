import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Profile } from "../../components/profile";
import { ButtonAdd } from "../../components/buttonAdd";
import { style } from "./style";
import { CategorySelect } from "../../components/categorySelect";
import { ListHeader } from '../../components/listHeader';
import { FlatList } from "react-native-gesture-handler";
import { Appointments } from '../../components/appointments'
import { Background } from "../../components/background";
import { useNavigation } from "@react-navigation/native";




export function Home() {

    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    const appointments = [{
        id: '1',
        guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: 'true'
        },
        category: '1',
        date: '01/11 as 15:50h',
        description: 'É hoje que vamos trollar na MD10',

    },
    {
        id: '2',
        guild: {
            id: '2',
            name: 'Lendários',
            icon: null,
            owner: 'true'
        },
        category: '1',
        date: '01/11 as 15:50h',
        description: 'É hoje que vamos trollar na MD10',

    }]


    function handleCategorySelect(categoryId: string) {


        if (categoryId === category) {
            setCategory('')
        }
        else {
            setCategory(categoryId);
        }

    }


    function handleAppointmentDetails() {

        navigation.navigate('AppointmentDetails')
    }

    return (
        <Background>
            <View>
                <View style={style.header}>
                    <Profile></Profile>
                    <ButtonAdd></ButtonAdd>
                </View>

                <View>
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
                </View>

                <View style={style.content}>
                    <ListHeader title="Partidas agendadas" subtitle="Total 6" />
                </View>


                <FlatList
                    style={style.matches}
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <>
                            <Appointments onPress={handleAppointmentDetails} data={item} />
                            <View style={style.divisor} />
                        </>
                    )} />
            </View>
        </Background>
    );
}