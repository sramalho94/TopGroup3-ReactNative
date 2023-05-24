import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AnimalsScreen from './screens/AnimalsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: {name: string;}
  AnimalsScreen: {name: string; latin: string; class1: string;}
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AnimalsScreen"
          component={AnimalsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
