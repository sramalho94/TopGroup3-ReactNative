import React from 'react';
import {View} from 'react-native';
import ChildComponent from './Home';

const Animals = () => {
  return (
    <View>
      <ChildComponent prop1="cat" prop2="dog" prop3="lizard" />
    </View>
  );
};

export default Animals;
