import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppBottomTabs = createBottomTabNavigator();

import { Feed } from '../components/Feed';
import { AddPhoto } from '../screens/AddPhoto';
import { Profile } from '../screens/Profile';

const DashboardRoutes = () => {

    return (
        <AppBottomTabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch(route.name) {
                case 'Feed':
                  return <Feather name='home' size={size} color={color} />;
                case 'AddPhoto':
                  return <Feather name='camera' size={size} color={color} />;
                case 'Profile':
                  return <Feather name='user' size={size} color={color} />;
              }
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray'
          })}>

              <AppBottomTabs.Screen name="Feed"  component={Feed} />
              <AppBottomTabs.Screen name="AddPhoto"  component={AddPhoto} />
              <AppBottomTabs.Screen name="Profile"  component={Profile} />
          </AppBottomTabs.Navigator>
    );
}

export { DashboardRoutes };