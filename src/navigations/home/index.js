import React,{useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false}} > 
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image source={(focused? images.homedark:images.home)} style={{width:width(8),height:height(4)}} resizeMode='contain'></Image>
          ),
        }}/>
      </Tab.Navigator>
  )
}

// resizeMode='contain'