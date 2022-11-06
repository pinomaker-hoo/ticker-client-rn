import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AdminScreen from './AdminScreen';
import MapScreen from './MapScreen';
import HomeScreen from './HomeScreen';
import {Image, StyleSheet} from 'react-native';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              style={styles.logo}
              source={require('../../assets/map.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              style={styles.logo}
              source={require('../../assets/home.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              style={styles.logo}
              source={require('../../assets/admin.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginTop: 35,
    width: 30,
    height: 30,
  },
});
