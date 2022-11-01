import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './pages/Drawer/DrawerNavigator';
import RootNavigator from './pages/root/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator></RootNavigator>
    </NavigationContainer>
  );
}
