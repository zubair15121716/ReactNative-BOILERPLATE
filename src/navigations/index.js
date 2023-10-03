import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNav from './stackNav';

const AppStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
      screenOptions={{headerShown:false}}
      >
        <AppStack.Screen name='app' component={StackNav}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}