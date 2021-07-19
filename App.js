import React from 'react';
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
import CheckOutScreen from './screens/CheckOutScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';

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
        <Stack.Screen name="Profile" component={ProfileNavigator} />
        <Stack.Screen name="Cart" component={CartNavigator} />
        <Stack.Screen name="Menu" component={MenuNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

const HomeNavigator = () => {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "bold",
            letterSpacing: 5
          }
        }} 
      />
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
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitle: () => null
        }}
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
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

const ProfileNavigator = () => {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "bold",
            letterSpacing: 5
          }
        }} 
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
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

const MenuNavigator = () => {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MenuScreen" 
        component={MenuScreen} 
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "bold",
            letterSpacing: 5
          }
        }} 
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
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

const CartNavigator = () => {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ShoppingCart" 
        component={ShoppingCartScreen} 
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "bold",
            letterSpacing: 5
          }
        }} 
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{
          headerStyle: {
            backgroundColor: "#6bcdfa"
          },
          headerTitle: () => null
        }}
      />
      <Stack.Screen 
        name="CheckOut" 
        component={CheckOutScreen} 
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