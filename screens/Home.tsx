import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const themes = [
  {name: 'blue-600', opacity: 100, dark: true},
  {name: 'purple-600', opacity: 75, dark: true},
  {name: 'red-600', opacity: 50, dark: false},
  {name: 'customcolor', opacity: 40, dark: false},
];

const Home = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="justify-center md:flex-col align-middle min-h-screen bg-yellow-400/40">
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
        <View className="flex-row">
          {themes.map(theme => (
            <TouchableOpacity
              className={`p-2 border border-black w-1/4 bg-${theme.name}`}
              key={theme.name}
              onPress={() =>
                navigation.navigate('Screen2', {
                  name: theme.name,
                  dark: theme.dark,
                  opacity: theme.opacity,
                })
              }>
              <Text>{theme.name}</Text>
              <Text>Opacity: {theme.opacity}</Text>
              {theme.dark ? <Text>Dark Mode</Text> : null}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
