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
import SettingScreen from "../screens/SettingScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                resizeMode={'contain'}
                style={styles.imageLeft}
                source={require('../assets/icons/group.png')}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Find a Book')}>
              <Image
                resizeMode={'contain'}
                style={styles.imageRight}
                source={require('../assets/icons/search.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Share a Book"
        component={ShareBookScreen}
        options={{
          // headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode={'contain'}
                style={styles.imageLeft}
                source={require('../assets/icons/arrow.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Find a Book"
        component={FindBookScreen}
        options={{
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode={'contain'}
                style={styles.imageLeft}
                source={require('../assets/icons/arrow.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode={'contain'}
                style={styles.imageLeft}
                source={require('../assets/icons/arrow.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Book Request"
        component={SearchResultDetails}
        options={{
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode={'contain'}
                style={styles.imageLeft}
                source={require('../assets/icons/arrow.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode={'contain'}
                style={styles.imageLeft}
                source={require('../assets/icons/arrow.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="OnWay"
        component={OnTheWayScreen}
        options={{
          headerTitle: false,
          headerStyle: {shadowColor: 'transparent'},

          headerLeft: () => (
           null
          ),
        }}
      />
      <Stack.Screen name="Setting" component={SettingScreen}
                    options={{
                      headerStyle: {shadowColor: 'transparent'},

                      headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                          <Image
                            resizeMode={'contain'}
                            style={styles.imageLeft}
                            source={require('../assets/icons/arrow.png')}
                          />
                        </TouchableOpacity>
                      ),
                    }}
      />
      <Stack.Screen name="MyOrders" component={MyOrderScreen}/>
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
export {MainStackNavigator};
