import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
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
  const { colorScheme, setColorScheme } = useColorScheme()

  const isDarkMode = colorScheme === 'dark'


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
        <TouchableOpacity style={colorScheme === 'dark' ? styles.darkMode : styles.lightMode} onPress={() => setColorScheme(colorScheme === 'dark' ? "light" : "dark")}>
          <Text style={isDarkMode ? styles.darkModeText : styles.lightModeText}>{`You are in ${colorScheme} mode.`}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: 'black',
    font: 'white',
    flex: 1
  },
  darkModeText: {
    color: "white"
  },
  lightMode: {
    backgroundColor: 'green',
    color: 'black',
    flex: 1
  },
  lightModeText: {
    color: "black"
  }
})

export default Home;
