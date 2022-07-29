import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppBottomTabs = createBottomTabNavigator();

import { Feed } from '../components/Feed';

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
            tabBarShowLabel: false
          })}
            tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray'
          }}>

              <AppBottomTabs.Screen name="Feed"  component={Feed} />
              <AppBottomTabs.Screen name="AddPhoto"  component={Feed} />
              <AppBottomTabs.Screen name="Profile"  component={Feed} />
          </AppBottomTabs.Navigator>
    );
}

export { DashboardRoutes };