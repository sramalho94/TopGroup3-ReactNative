import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ItemCard from '../components/ItemCard';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const themes = [
  {name: 'bblue', opacity: 100, dark: true},
  {name: 'ppurple', opacity: 75, dark: true},
  {name: 'rred', opacity: 50, dark: false},
  {name: 'customcolor', opacity: 40, dark: false},
];

const Home = () => {
  return (
    <SafeAreaView className="justify-center md:flex-col align-middle min-h-screen min-w-screen bg-yellow-400/40">
      <View className="justify-center align-middle">
        <View className="flex-row justify-center">
          <Text className="font-bold text-xl text-customcolor">
            Welcome to My Mini Project
          </Text>
        </View>
        <View className="flex-row justify-center">
          <Text className="font-bold text-md text-customcolor ">
            Select A Color Theme to Move on to the page
          </Text>
        </View>
        <View className="flex-row  max-w-screen mx-1">
          {themes.map(theme => (
            <ItemCard
              key={theme.name}
              name={theme.name}
              dark={theme.dark}
              opacity={theme.opacity}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
