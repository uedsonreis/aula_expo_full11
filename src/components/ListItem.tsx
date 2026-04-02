import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable'

import { User } from '../models'
import DeleteButton from './DeleteButton'

type Props = {
    user: User,
    edit: (user: User) => void,
    remove: (user: User) => void,
}

export default function ListItem({ user, edit, remove } : Props) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={() => <DeleteButton press={() => remove(user)} />}>
                <View style={styles.container} onTouchEnd={() => edit(user)}>
                    <Text style={styles.title}>{user.id} - {user.name}</Text>
                    <Text style={styles.subTitle}>{user.username}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 60,
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        color: 'gray',
    },
})
