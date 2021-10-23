import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Overview} from '../pages/Overview';
import {LaunchDetails} from '../pages/LaunchDetails';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator initialRouteName="Overview">
    <stackRoutes.Screen name="Overview" component={Overview} />
    <stackRoutes.Screen name="LaunchDetails" component={LaunchDetails} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
