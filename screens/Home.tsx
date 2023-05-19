import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import ActionRow from '../components/ActionRow';
import { useState } from 'react';
import { useColorScheme } from 'nativewind';

type Props = {};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Home = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  // const [theme, setTheme] = React.useState("")
  const { colorScheme, setColorScheme } = useColorScheme()

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark')
  //   }
  // }

  return (
    <SafeAreaView className="flex flex-row justify-center md:flex-col ">
      <ScrollView>

        <Text
          className="text-customcolor font-bold bg-orange-300"
        >
          TOP App
        </Text>

        <TouchableOpacity onPress={() => { navigation.navigate('SubmittedScreen') }}
          className='bg-purple-300'>
          <ActionRow
            title="Submit Test Result"
            screen="Demo"
            color="#7FFFD4"
            vertical
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setColorScheme(colorScheme === 'light' ? "dark" : "light")}>
          <Text>{`You are in ${colorScheme} mode.`}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
