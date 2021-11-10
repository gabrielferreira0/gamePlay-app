import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Avatar } from "../avatar";

export type MembersProps = {
    id: string;
    username: string;
    avatar: string;
    status: string;
}

type Props = {
    data: MembersProps;
}

export function Member({ data }: Props) {

    let isOnline;

    if (data.status == 'online') {
        isOnline = true
    }
    else {
        isOnline = false
    }

    return (
        <View style={styles.container}>

            <Avatar urlImage={data.avatar}></Avatar>

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>

                <View style={styles.status}>
                    <Text style={styles.nameStatus}>
                    {isOnline ? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>

            </View>
        </View>
    );
}