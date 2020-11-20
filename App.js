import React from 'react';
import {View, Text} from 'react-native';
import Course from './Screens/Course';
import Home from './Screens/Home';
import Splach from './Screens/Splach';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Course /> */}
      <Home />
      {/* <Splach /> */}
    </View>
  );
}
