import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home';
import BottomTab from './bottomTab';
import Chat from '../screens/chat';
import ContactScreen from '../screens/contact';
import SplashScreen from '../screens/SplashScreen';
import {IMessage} from 'react-native-gifted-chat';

export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  Chat: {
    contact: any;
    messages: IMessage[];
    onSendMessage: (msg: IMessage[]) => void;
  };
  BottomBar: undefined;
  ContactScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="BottomBar" component={BottomTab} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
