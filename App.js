// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import PlanetsScreen from './PlanetsScreen'; // Import the PlanetsScreen
import UserProfileScreen from './UserProfileScreen';
import SettingsScreen from './SettingsScreen';;
import Planet1 from './Planet1';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator(); // Create a Stack Navigator for the Home tab

// Define the Stack Navigator for the Home tab
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Planets" component={PlanetsScreen} />
      <HomeStack.Screen name="Planet1" component={Planet1} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Replace HomeScreen with HomeStackNavigator */}
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="User Profile" component={UserProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
