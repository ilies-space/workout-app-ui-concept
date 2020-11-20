import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../Colors';

export default function Home() {
  const rightcircleo = (
    <AntDesign name="rightcircleo" size={16} color={'white'} />
  );
  const book = (
    <Foundation name="book-bookmark" size={30} color={Colors.mainColor} />
  );
  const records = (
    <Foundation name="graph-bar" size={30} color={Colors.mainColor} />
  );
  const people = <Ionicons name="people" size={30} color={Colors.mainColor} />;
  const meal = (
    <MaterialCommunityIcons
      name="cup-water"
      size={30}
      color={Colors.mainColor}
    />
  );
  const nav = <MaterialCommunityIcons name="menu" size={30} color={'white'} />;
  const user = <FontAwesome5 name="user-circle" size={30} color={'white'} />;

  const navigation = useNavigation();

  const categories = [
    {
      title: 'RUNNING',
      alignItems: 'flex-end',
      programs: 5,
      backgroundImg: require('../assest/run.jpg'),
    },

    {
      title: 'CARDIO',
      alignItems: 'flex-start',

      programs: 12,
      backgroundImg: require('../assest/cardio.jpg'),
    },
    {
      title: 'WEIGHT LIFTING',
      alignItems: 'flex-end',

      programs: 9,
      backgroundImg: require('../assest/weight.jpg'),
    },
    {
      title: 'ABS',
      alignItems: 'flex-start',
      programs: 5,
      backgroundImg: require('../assest/abs.jpg'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      {/* HEADER */}
      <View
        style={{
          backgroundColor: Colors.backGroundColor,
          height: 50,
          alignItems: 'center',
          paddingHorizontal: 25,
          flexDirection: 'row',
        }}>
        {nav}
        <View style={{flex: 1, alignItems: 'flex-end'}}>{user}</View>
      </View>
      <ScrollView style={{backgroundColor: Colors.backGroundColor, flex: 1}}>
        {/* -------- VIEW 1 */}
        <View
          style={{
            backgroundColor: 'pink',
            height: 300,
          }}>
          <ImageBackground
            source={require('../assest/blogImg.jpg')}
            style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 40}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                10 Top Wokouts for the Summer
              </Text>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <Text style={styles.viewMore}>View More</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* -------- VIEW 2 */}

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            justifyContent: 'center',
            paddingVertical: 20,
          }}>
          <TouchableWithoutFeedback
            style={styles.btnSize}
            onPress={() => {
              navigation.navigate('Course');
            }}>
            {book}
            <Text style={styles.txt}>Course</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.btnSize}>
            {people}
            <Text style={styles.txt}>Dynamic</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.btnSize}>
            {meal}
            <Text style={styles.txt}>Diet</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.btnSize}>
            {records}
            <Text style={styles.txt}>Records</Text>
          </TouchableWithoutFeedback>
        </View>

        {/* -------- VIEW 3 */}

        <View>
          {categories.map((item) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log(item.title);
                }}
                key={item.title}>
                <ImageBackground
                  source={item.backgroundImg}
                  style={{
                    flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: 150,
                      justifyContent: 'center',
                      alignItems: item.alignItems,
                      paddingHorizontal: 20,
                      borderBottomWidth: 1,
                      borderColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: Colors.extraColor,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          paddingHorizontal: 5,
                        }}>
                        {item.programs} PROGRAMS
                      </Text>
                      {rightcircleo}
                    </View>
                  </View>
                </ImageBackground>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewMore: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: Colors.mainColor,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
  },
  btnSize: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txt: {
    color: Colors.mainColor,
    fontSize: 16,
  },
});
