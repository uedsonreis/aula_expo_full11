import { StyleSheet, View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

type Props = {
    press: () => void,
}

export default function DeleteButton({ press } : Props) {
    return (
        <View style={styles.deleteContainer}>
            <BorderlessButton style={styles.deleteButton} onPress={press}>
                <Text style={styles.textDeleteButton}>Remover</Text>
            </BorderlessButton>
        </View>
    )
}

const styles = StyleSheet.create({
    deleteContainer: {
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    deleteButton: {
        height: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    textDeleteButton: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
})