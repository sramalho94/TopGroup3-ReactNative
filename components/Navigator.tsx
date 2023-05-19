import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AnimalsScreen from '../screens/AnimalsScreen';

export type RootStackParamList = {
  Home: undefined;
  Animals: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animals" component={AnimalsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
