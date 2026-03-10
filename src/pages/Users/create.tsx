import { Button, TextInput, Text, View, Alert } from "react-native";

import styles from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";

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

        // Salvar o usuário
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

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
