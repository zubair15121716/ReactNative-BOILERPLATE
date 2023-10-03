import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Testing from '../../screens/app/testing';

const AuthStack = createNativeStackNavigator();

export default function StackNav() {
  return (
      <AuthStack.Navigator
        screenOptions={{headerShown:false}}
      >
        <AuthStack.Screen name="Testing" component={Testing} />
      </AuthStack.Navigator>
  )
}
