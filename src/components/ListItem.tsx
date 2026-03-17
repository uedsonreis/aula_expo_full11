import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { User } from '../models'

type Props = {
    user: User,
    edit: (user: User) => void,
}

export default function ListItem({ user, edit } : Props) {
    return (
        <View style={styles.container} onTouchEnd={() => edit(user)}>
            <Text style={styles.title}>{user.id} - {user.name}</Text>
            <Text style={styles.subTitle}>{user.username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginBottom: 20,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 60,
    },
    title: {
        fontSize: 16,
    },
    subTitle: {
        color: 'gray',
    },
})
