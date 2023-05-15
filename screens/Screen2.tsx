import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = {};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Screen2'
>;

const Screen2 = (props: Props) => {
  return (
    <View>
      <Text>Screen2</Text>
    </View>
  );
};

export default Screen2;
