import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <BottomTab.Screen
        name="Map"
        component={HomeScreen}
        options={{
          title: 'Map',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Admin"
        component={HomeScreen}
        options={{
          title: 'Admin',
          tabBarIcon: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
}
