import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';


const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
      <AuthStack.Navigator
        screenOptions={{headerShown:false}}
      >
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
  )
}
