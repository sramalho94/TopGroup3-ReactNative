import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type AnimalsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AnimalsScreen'>;

type AnimalsScreenRouteProp = RouteProp<RootStackParamList, 'AnimalsScreen'>;

type Props = {
  navigation: AnimalsScreenNavigationProp;
  route: AnimalsScreenRouteProp;
};

const AnimalsScreen = ({ route }: Props) => {
  const navigation = useNavigation<AnimalsScreenNavigationProp>();
  const { name, latin, class1 } = route.params;
  return (
    <SafeAreaView className={'bg-blue-500 flex-1'}>
      <View className={'justify-center'}>
        <Text className={'flex-row mx-auto justify-center p-3 text-xl text-green-90 font-bold'}>
          {name} Detail Page
        </Text>
        <Text className={'flex-row mx-auto justify-center p-1 text-white'}>Common: {name}</Text>
        <Text className={'flex-row mx-auto justify-center p-2 text-white'}>Scientific: {latin}</Text>
        <Text className={'flex-row mx-auto justify-center p-2 text-white'}>Classification: {class1}</Text>
        <TouchableOpacity className={'p-1 border border-black w-1/5 bg-green-400 flex-row justify-center m-auto'} onPress={() => navigation.goBack()}>
          <View>
            <Text className={'text-red-600 font-bold'}>
              Go Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AnimalsScreen;
