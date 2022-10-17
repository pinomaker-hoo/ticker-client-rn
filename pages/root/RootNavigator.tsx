import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../bottom/BottomTabNavigator';
import AlertScreen from './AlertScreen';
import BoardDetailScreen from './BoardDetailScreen';
import BoardScreen from './BoardScreen';
import BoardWriteScreen from './BoardWriteScreen';
import BuyScreen from './BuyScreen';
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';
import SetPasswordScreen from './SetPasswordScreen';
import RegisterScreen from './Register';
import TicketBuyScreen from './TicketBuyScreen';
import TicketImageScreen from './TicketImage';
import TicketScreen from './TicketScreen';
import EnterPasswordScreen from './EnterPasswordScreen';

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
        <Stack.Screen
          name="Board"
          component={BoardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BoardDetail"
          component={BoardDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BoardWrite"
          component={BoardWriteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetPassword"
          component={SetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPassword"
          component={EnterPasswordScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
