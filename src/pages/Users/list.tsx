import React from "react";
import { Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Button } from "@react-navigation/elements";

export default function UserListPage() {

    const navigation = useNavigation<NavigationProp<any>>();

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button onPress={signOut}>Sair</Button>,
            title: 'Uedson Reis',
            headerRight: () => <Button onPress={goToCreate}>Add</Button>,
        });
    }, [])

    function signOut() {
        // Fazer ação de logout
        navigation.goBack();
    }

    function goToCreate() {
        navigation.navigate('CreateUser');
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text>Lista de Usuários</Text>
            </View>

        </View>
    )
}