import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Splach() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>SPLACH</Text>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title={'start'}
      />
    </View>
  );
}
