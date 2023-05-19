import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import ActionRow from '../components/ActionRow';

type Props = {};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SubmittedScreen'
>;

const SubmittedScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className='m min-h-screen min-w-full bg-green-400'>
      <ScrollView>
        <Text
          className='color justify-center bg-green-400 py-5 px-5'
        >
          Test Results Submitted
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Home') }}
          className='justify-center bg-green-700 border-8 border-blue-200'
        >
          <ActionRow
            title="Return Home"
            screen="Demo"
            color="#7FFFD4"
            vertical />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubmittedScreen;
