import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, TextInput, Text, View, Alert } from "react-native";

import MyInput from "../components/MyInput";
import * as authService from '../services/auth.service';

export default function LoginPage() {

    const navigation = useNavigation<NavigationProp<any>>();

    let username = '';
    let password = '';

    function signIn() {
        if (username.trim() === '') {
            Alert.alert('Login', 'O campo de login é obrigatório!');
            return;
        }

        authService.login(username, password).then(success => {
            if (success) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Login/Senha Inválido(a)', 'Usuário ou senha inválidos!');
            }
        });
    }

    return (
        <View style={styles.container}>

            <MyInput label='Login' onChangeText={value => username = value} />

            <MyInput label='Senha' onChangeText={value => password = value} secureTextEntry />

            <View style={styles.buttonView}>
                <Button title="Entrar" onPress={signIn} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        marginBottom: 20,
    },
    buttonView: {
        width: '70%',
        marginTop: 20,
    },
})