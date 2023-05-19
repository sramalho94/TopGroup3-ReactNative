import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../components/Navigator';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const goToAnimalsScreen = () => {
    navigation.navigate('Animals');
  };

  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button title="Check out these Animals!" onPress={goToAnimalsScreen} />
    </View>
  );
};

export default HomeScreen;
