import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../bottom/BottomTabNavigator';
import AlertScreen from './AlertScreen';
import BuyScreen from './BuyScreen';
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';
import RegisterScreen from './Register';
import TicketBuyScreen from './TicketBuyScreen';
import TicketImageScreen from './TicketImage';
import TicketScreen from './TicketScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Buy"
          component={BuyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ticket"
          component={TicketScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Alert"
          component={AlertScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TicketBuy"
          component={TicketBuyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TicketImage"
          component={TicketImageScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
