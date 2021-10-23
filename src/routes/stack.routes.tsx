import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Overview} from '../pages/Overview';
import {LaunchDetails} from '../pages/LaunchDetails';
import {HomeScreen} from '../pages/HomeScreen';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerTintColor: '#FFFF',
      headerStyle: {
        backgroundColor: '#030425',
      },
    }}>
    <stackRoutes.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <stackRoutes.Screen
      name="Overview"
      component={Overview}
      options={{
        title: '',
      }}
    />
    <stackRoutes.Screen
      name="LaunchDetails"
      component={LaunchDetails}
      options={{
        title: '',
      }}
    />
  </stackRoutes.Navigator>
);

export default AppRoutes;
