import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type Props = {};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Home = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex flex-row justify-center md:flex-col ">
      <Text
        className="text-customcolor"
        onPress={() => navigation.navigate('Screen2')}>
        Hello world
      </Text>
    </SafeAreaView>
  );
};

export default Home;
