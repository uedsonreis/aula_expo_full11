import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/pages/Login';
import UserListPage from './src/pages/Users/list';
import UserCreatePage from './src/pages/Users/create';
import UserUpdatePage from './src/pages/Users/update';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Página de Acesso' }} />
          <Stack.Screen name="Home" component={UserListPage} />
          <Stack.Screen name="CreateUser" component={UserCreatePage} options={{ title: 'Novo Usuário' }} />
          <Stack.Screen name="UpdateUser" component={UserUpdatePage} options={{ title: 'Atualizar Usuário' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
