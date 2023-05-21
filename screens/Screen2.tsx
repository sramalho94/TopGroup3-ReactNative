import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  const navigation = useNavigation<Screen2NavigationProp>();
  const {name, dark, opacity} = route.params;
  return (
    <SafeAreaView
      className={`min-h-screen min-w-full bg-customcolor-500/40 justify-center align-middle mx-auto text-center  ${
        dark ? 'dark' : ''
      } dark:bg-black`}>
      <View className="flex-row justify-center">
        <View>
          <Text className={`text-${name}-500 font-bold text-xl`}>
            {' '}
            Welcome To Screen2
          </Text>
          <Text
            className={
              name === 'rred' || name === 'bblue'
                ? `text-${name}-500`
                : name === 'customcolor'
                ? `text-${name}`
                : `text-${name}`
            }>
            Name: {name}
          </Text>
          <Text className="text-bblue-500">Dark: {dark ? 'Yes' : 'No'}</Text>
          <Text className="text-rred-500">Opacity: {opacity}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="flex-row justify-center text-purple-50 mt-3 p-3 rounded-lg border border-ppurple-500 mx-auto">
              <Text className="text-ppurple">Go back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;
