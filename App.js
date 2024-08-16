import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Alert, Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{
            headerStyle: { backgroundColor: '#16536e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }} />
        <Stack.Screen name='About' component={AboutScreen} options={{
            headerStyle: { backgroundColor: '#16536e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => (
              <Pressable onPress={() => Alert.alert('Menu clicked.')}>
                <Text style={{fontSize: 20, paddingHorizontal: 10}}>Menu</Text>
              </Pressable>
            )
          }} initialParams={{ name: "Obito" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}