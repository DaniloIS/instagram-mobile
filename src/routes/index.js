import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardRoutes } from './dashboard.routes';
import { SignInOrSignUp } from '../screens/SignInOrSignUp';
import { Splash } from '../screens/Splash';

const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name='Splash' component={Splash} />
      <AppStack.Screen name='Auth' component={SignInOrSignUp} />
      <AppStack.Screen name='Home' component={DashboardRoutes} />
    </AppStack.Navigator>
  )
}

export { Routes };