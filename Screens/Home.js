import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>HOME</Text>
      <Button
        onPress={() => {
          navigation.navigate('Course');
        }}
        title={'Course'}
      />
    </View>
  );
}
