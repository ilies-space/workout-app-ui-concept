import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home() {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>HOME</Text>
      <Button
        onPress={() => {
          console.log('open home');
        }}
        title={'Course'}
      />
    </View>
  );
}
