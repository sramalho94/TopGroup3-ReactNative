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
    <SafeAreaView>
      <TouchableOpacity
        className={'p-2 border border-black w-20 h-30 bg-customcolor-500/40'}
        onPress={() =>
          navigation.navigate('Screen2', {
            name: name,
            dark: dark,
            opacity: opacity,
          })
        }>
        <Text className={`text-${name}`}>{name}</Text>
        <Text>Opacity: {opacity}</Text>
        {dark ? <Text>Dark Mode</Text> : null}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ItemCard;
