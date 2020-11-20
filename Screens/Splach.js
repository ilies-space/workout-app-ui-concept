import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export default function Splach() {
  const navigation = useNavigation();
  const ArrowIcon = <Icon name="arrowright" size={20} color="#fff" />;
  const AppIcon = <Icon2 name="sports-volleyball" size={120} color="#fff" />;

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assest/splach.jpg')}
        style={styles.image}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {AppIcon}
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
              paddingVertical: 20,
            }}>
            WORKOUT
          </Text>
        </View>
        <View style={{paddingVertical: 30}}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{alignItems: 'center', paddingHorizontal: '20%'}}>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 60,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 70,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  paddingHorizontal: 10,
                }}>
                GET STARTED
              </Text>
              {ArrowIcon}
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
