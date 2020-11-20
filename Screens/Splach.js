import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Splach() {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>SPLACH</Text>
      <Button
        onPress={() => {
          console.log('open home');
        }}
        title={'start'}
      />
    </View>
  );
}
