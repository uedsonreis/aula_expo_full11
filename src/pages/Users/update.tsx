import { useState } from "react";
import { Button, View, Alert } from "react-native";
import { StackActions, NavigationProp, useNavigation, useRoute } from "@react-navigation/native";

import { User } from '../../models';
import MyInput from "../../components/MyInput";
import * as userService from '../../services/user.service';

import styles from "./styles";

export default function UserCreatePage() {

    const navigation = useNavigation<NavigationProp<any>>();
    const route = useRoute();
    const user = route.params as User;

    const [name, setName] = useState(user.name);

    function save() {
        if (name.trim() === '') {
            Alert.alert('Nome', 'O campo de nome é obrigatório!');
            return;
        }

        userService.update({ id: user.id, username: user.username, name }).then(success => {
            if (success) {
                navigation.goBack();
            } else {
                Alert.alert('Usuário não alterado', 'Login já existente!');
            }
        }).catch(error => {
            console.error('Error to update user', error)
            navigation.dispatch(StackActions.popToTop());
        })
    }

    return (
        <View style={styles.container}>

            <MyInput label='Nome' value={name} onChangeText={setName} />

            <MyInput label='Login' value={user.username} readOnly />

            <View style={styles.buttonView}>
                <Button title="Salvar" onPress={save} />
            </View>

        </View>
    )
}
