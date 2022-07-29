import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardRoutes } from './dashboard.routes';

const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name='Home' component={DashboardRoutes} />
    </AppStack.Navigator>
  )
}

export { Routes };