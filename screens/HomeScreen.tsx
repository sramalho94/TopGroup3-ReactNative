import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;


const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  return (
    <SafeAreaView className={'bg-blue-500 flex-1'}>
      <View className={'flex-row justify-center'}>
        <Text className={'p-3 text-xl font-extrabold'}>
          Welcome to the Reptile Page!
        </Text>
      </View>
      <View className={'flex-row justify-center'}>
        <Text className={'flex-row italic justify-center p-4 text-l'}>
          Click an Animal Below...
        </Text>
      </View>
      <TouchableOpacity className={'flex-row mx-auto justify-center p-2 border border-black w-1/3 bg-green-200'}onPress={() => navigation.navigate('AnimalsScreen', {
        name: 'Lizard',
        latin: 'Lacertilia',
        class1: 'Scaled Reptile'
      })
    }>
      <Text>Lizard</Text>
    </TouchableOpacity>
    <TouchableOpacity className={'flex-row mx-auto justify-center p-2 border border-black w-1/3 bg-green-200'}onPress={() => navigation.navigate('AnimalsScreen', {
        name: 'Snake',
        latin: 'Serpentes',
        class1: 'Ophidia'        
      })
    }>
      <Text>Snake</Text>
    </TouchableOpacity>
    <TouchableOpacity className={'flex-row mx-auto justify-center p-2 border border-black w-1/3 bg-green-200'}onPress={() => navigation.navigate('AnimalsScreen', {
        name: 'Turtle',
        latin: 'Testudines',
        class1: 'Testudinata'        
      })
    }>
      <Text>Turtle</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen