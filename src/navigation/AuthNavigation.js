import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

import ShareBookScreen from '../screens/ShareBookScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import FindBookScreen from '../screens/FindBookScreen';
import SignupScreen from '../screens/SignupScreen';
import SearchResults from '../screens/SearchResults';
import SearchResultDetails from '../screens/SearchResultDetails';
import OnTheWayScreen from '../screens/OnTheWayScreen';
import SplashScreen from '../screens/SplashScreen';
import PaymentScreen from "../screens/PaymentScreen";
import DrawerNavigation from "./DrawerNavigation";
const Stack = createStackNavigator();

const AuthNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},
          headerLeft: () => (
            null
            // <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image
            //     resizeMode={'contain'}
            //     style={styles.imageLeft}
            //     source={require('../assets/icons/arrow.png')}
            //   />
            // </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            null
            // <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image
            //     resizeMode={'contain'}
            //     style={styles.imageLeft}
            //     source={require('../assets/icons/arrow.png')}
            //   />
            // </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  imageLeft: {
    width: 20,
    height: 15,
    marginLeft: 30,
    overflow: 'visible',
  },
  imageRight: {
    width: 20,
    height: 15,
    marginRight: 30,
    overflow: 'visible',
  },
});
export default AuthNavigation;
