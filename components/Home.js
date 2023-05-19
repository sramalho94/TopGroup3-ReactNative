import React from 'react';
import {View, Text} from 'react-native';

const Home = props => {
  return (
    <View>
      <Text>{props.prop1}</Text>
      <Text>{props.prop2}</Text>
      <Text>{props.prop3}</Text>
    </View>
  );
};

export default Home;
