import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, TextInput, Text, View, Alert } from "react-native";

import * as authService from '../services/auth.service'

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

            <Text style={styles.label}>Login:</Text>
            <TextInput style={styles.input} onChangeText={value => username = value} />

            <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={value => password = value} />

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
    label: {
        width: '85%',
    },
    input: {
        padding: 10,
        width: '85%',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#ccc',
    },
    buttonView: {
        width: '70%',
        marginTop: 20,
    },
})