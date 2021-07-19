import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createBottomTabNavigator();

const App = () => {

const tabBarOptions = {
    showLabel: false,
    style: {
        backgroundColor: "#FFF",
        paddingBottom: 12,
        paddingTop: 12
    },
    activeTintColor: "black"
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
        let iconName = "home"

        switch (route.name) {
            case "Home":
                iconName = "home"
                break;
            case "Profile":
                iconName = "person"
                break;
            case "Cart":
                iconName = "cart-outline"
                break;
            case "Menu":
                iconName = "menu"
                break;

            default:
                iconName = "home"
        }
            return  <Ionicons name={iconName} size={24} color={focused ? "#05a4ed" : "#989b9c"} />
    }
  })
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Cart" component={ShoppingCartScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

const HomeNavigator = () => {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen 
        name="Product" 
        component={ProductScreen} 
        options={{
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitle: () => null
        }}
      />
    </Stack.Navigator>
  )
}