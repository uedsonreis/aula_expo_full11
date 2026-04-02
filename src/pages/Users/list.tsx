import React from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import * as userService from "../../services/user.service";
import ListItem from "../../components/ListItem";
import { User } from '../../models';
import styles from "./styles";

export default function UserListPage() {

    const navigation = useNavigation<NavigationProp<any>>();
    
    const [users, setUsers] = React.useState<User[]>([])

    function fetchUsers() {
        userService.getList().then(data => {
            setUsers(data)
        }).catch(error => {
            signOut()
        })
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button onPress={signOut}>Sair</Button>,
            title: 'Uedson Reis',
            headerRight: () => <Button onPress={goToCreate}>Add</Button>,
        });

        navigation.addListener('focus', fetchUsers)

        fetchUsers()
    }, [])

    function signOut() {
        // Fazer ação de logout
        navigation.goBack();
    }

    function goToCreate() {
        navigation.navigate('CreateUser');
    }

    function goToUpdate(user: User) {
        navigation.navigate('UpdateUser', user);
    }

    function removeUser(user: User) {
        userService.remove(user.id!)
            .then(deleted => fetchUsers())
            .catch(error => navigation.goBack())
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>{users.length} usuários cadastrados.</Text>
            </View>

            <FlatList
                data={users}
                keyExtractor={item => item.username}
                renderItem={({ item }) => <ListItem user={item} edit={goToUpdate} remove={removeUser} />}
            />

        </View>
    )
}