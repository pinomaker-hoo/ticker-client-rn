import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootNavigator from '../root/RootNavigator';
import HomeScreen from '../bottom/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{drawerLabel: 'HOME'}}
      />
      {/* <Drawer.Screen
        name="About"
        component={About}
        options={{drawerLabel: 'ABOUT'}}
      /> */}
    </Drawer.Navigator>
  );
}
