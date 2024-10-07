/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenNames} from '../ScreenName';
import {Image} from 'react-native';
import HomeScreen from '../../screens/home';
import AccountScreen from '../../screens/accountScreen';
import FavouriteScreen from '../../screens/favouriteScreen';
import MenuScreen from '../../screens/menuScreen';

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            switch (route.name) {
              case ScreenNames.Home:
                iconName = focused
                  ? require('../../assets/icons/homeSelected.png')
                  : require('../../assets/icons/homeUnselected.png');
                break;
              case ScreenNames.Account:
                iconName = focused
                  ? require('../../assets/icons/accountSelected.png')
                  : require('../../assets/icons/accountUnselected.png');
                break;
              case ScreenNames.Favourite:
                iconName = focused
                  ? require('../../assets/icons/favouriteSelected.png')
                  : require('../../assets/icons/favouriteUnselected.png');
                break;
              case ScreenNames.Menu:
                iconName = focused
                  ? require('../../assets/icons/menuSelected.png')
                  : require('../../assets/icons/menuUnselected.png');
                break;
              default:
                iconName = require('../../assets/icons/homeSelected.png');
                break;
            }
            return <Image source={iconName} style={{width: 20, height: 20}} />;
          },
        })}>
        <Tab.Screen
          component={HomeScreen}
          name={ScreenNames.Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          component={AccountScreen}
          name={ScreenNames.Account}
          options={{headerShown: false}}
        />
        <Tab.Screen
          component={FavouriteScreen}
          name={ScreenNames.Favourite}
          options={{headerShown: false}}
        />
        <Tab.Screen
          component={MenuScreen}
          name={ScreenNames.Menu}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }
}
