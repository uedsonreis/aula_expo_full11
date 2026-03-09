import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import LoginPage from './src/pages/Login';
import UserCreatePage from './src/pages/Users/create';

export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <UserCreatePage />
      </>
  );
}
