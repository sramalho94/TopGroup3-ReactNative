import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AnimalsScreen: React.FC = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>This is the Animal Screen</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default AnimalsScreen;
