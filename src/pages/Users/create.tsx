import { Button, TextInput, Text, View, Alert } from "react-native";

import styles from "./styles";

export default function UserCreatePage() {

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

        // Salvar o usuário
        Alert.alert('Usuário Criado', 'Usuário criado com sucesso!');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Cadastro de Usuário</Text>
            </View>

            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} onChangeText={value => name = value} />

            <Text style={styles.label}>Login:</Text>
            <TextInput style={styles.input} onChangeText={value => username = value} />

            <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={value => password = value} />

            <Text style={styles.label}>Confirmar Senha:</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={value => confirmPassword = value} />

            <View style={styles.buttonView}>
                <Button title="Salvar" onPress={save} />
            </View>

        </View>
    )
}
