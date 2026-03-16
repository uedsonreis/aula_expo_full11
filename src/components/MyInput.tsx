import { StyleSheet, View, Text, TextInput, TextInputProps } from "react-native"

interface MyInputProps extends TextInputProps {
    label: string;
}

export default function MyInput({ label, ...rest }: MyInputProps) {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput style={styles.input} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        alignItems: 'center',
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
})