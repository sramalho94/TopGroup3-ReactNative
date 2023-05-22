import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {name: string; opacity: number; dark: boolean};

const ItemCard = ({name, opacity, dark}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="m-2">
      <TouchableOpacity
        className={`p-2  border border-${name}-500 w-20 h-30 bg-customcolor-500/40`}
        onPress={() =>
          navigation.navigate('Screen2', {
            name: name,
            dark: dark,
            opacity: opacity,
          })
        }>
        <Text
          className={
            name === 'customcolor' ? `text-${name}` : `text-${name}-500`
          }>
          {name}
        </Text>
        <Text
          className={
            name === 'customcolor' ? `text-${name}` : `text-${name}-500`
          }>
          Opacity: {opacity}
        </Text>
        {dark ? (
          <Text
            className={
              name === 'customcolor' ? `text-${name}` : `text-${name}-500`
            }>
            Dark Mode
          </Text>
        ) : null}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ItemCard;
