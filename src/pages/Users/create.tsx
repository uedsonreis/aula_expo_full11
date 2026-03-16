import { Button, TextInput, Text, View, Alert } from "react-native";
import { StackActions, NavigationProp, useNavigation } from "@react-navigation/native";

import MyInput from "../../components/MyInput";
import * as userService from '../../services/user.service';

import styles from "./styles";

export default function UserCreatePage() {

    const navigation = useNavigation<NavigationProp<any>>();

    let name = '';
    let username = '';
    let password = '';
    let confirmPassword = '';

    function save() {
        if (name.trim() === '') {
            Alert.alert('Nome', 'O campo de nome é obrigatório!');
            return;
        }
        if (username.trim() === '') {
            Alert.alert('Login', 'O campo de login é obrigatório!');
            return;
        }
        if (password.trim() === '') {
            Alert.alert('Senha', 'O campo de senha é obrigatória!');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Senha', 'As senhas não coincidem!');
            return;
        }

        const user = { name, username, password };
        userService.create(user).then(success => {
            if (success) {
                navigation.goBack();
            } else {
                Alert.alert('Usuário não criado', 'Login já existente!');
            }
        }).catch(error => {
            console.error('Error to save user', error)
            navigation.dispatch(StackActions.popToTop());
        })
    }

    return (
        <View style={styles.container}>

            <MyInput label='Nome' onChangeText={value => name = value} />

            <MyInput label='Login' onChangeText={value => username = value} />

            <MyInput label='Senha' secureTextEntry={true} onChangeText={value => password = value} />

            <MyInput label='Confirmar Senha' secureTextEntry onChangeText={value => confirmPassword = value} />

            <View style={styles.buttonView}>
                <Button title="Salvar" onPress={save} />
            </View>

        </View>
    )
}
