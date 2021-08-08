import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
// import ShareBookScreen from './src/screens/ShareBookScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import FindBookScreen from './src/screens/FindBookScreen';
// import SignupScreen from './src/screens/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigation from './src/navigation/DrawerNavigation';
import AuthNavigation from "./src/navigation/AuthNavigation";

Icon.loadFont();

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/*<DrawerNavigation />*/}
      <AuthNavigation/>
    </NavigationContainer>
    // <View style={{flex: 1, marginTop: 50}}>
    //   <Text>TESTST</Text>
    // </View>
  );
};
export default App;
