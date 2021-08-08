import React, {useEffect,useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({navigation}) => {
  const [userToken, setUserToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      getToken()
    }, 3000);
  }, []);



  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('currentUserToken')
      console.log("####TOKEN DIRECT FROM ASYB###",token)
      navigation.reset({
        index: 0,
        routes: [
          {
            name: token?'Home':'Login',
          },
        ],
      })
    } catch(e) {
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/splash.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  image: {width: '100%', height: '100%'},
});
export default SplashScreen;
