import React from 'react';
import {View, Text} from 'react-native';
import Course from './Screens/Course';
import Home from './Screens/Home';
import Splach from './Screens/Splach';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splach"
            component={Splach}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Course"
            component={Course}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
