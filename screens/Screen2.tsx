import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
type Screen2NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Screen2'
>;

type Screen2RouteProp = RouteProp<RootStackParamList, 'Screen2'>;

type Props = {
  navigation: Screen2NavigationProp;
  route: Screen2RouteProp;
};

const Screen2 = ({route}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const {name, dark, opacity} = route.params;
  return (
    <View
      className={`min-h-screen bg-${name} justify-center align-middle mx-auto `}>
      <Text className={`text-${name}`}>Screen2</Text>
      <Text>Name: {name}</Text>
      <Text>Dark: {dark ? 'Yes' : 'No'}</Text>
      <Text>Opacity: {opacity}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="flex-row justify-center">
          <Text>Go back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
