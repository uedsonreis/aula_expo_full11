import { Button, StyleSheet, TextInput, Text, View, Alert } from "react-native";

export default function LoginPage() {

    let username = '';
    let password = '';

    function signIn() {
        if (username.trim() === '') {
            Alert.alert('Login', 'O campo de login é obrigatório!');
        }

        if (username === 'uedsonreis' && password === '123456') {
            Alert.alert('Usuário Logado', 'Login realizado com sucesso!');
        } else {
            Alert.alert('Login/Senha Inválido(a)', 'Usuário ou senha inválidos!');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Página de Acesso</Text>
            </View>

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