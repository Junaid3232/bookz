import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({navigation,route}) => {


  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('currentUserToken')
      if(token !== null) {
        // value previously stored
        console.log("****AYNC TOKEN****", token)
      }
    } catch(e) {
      // error reading value
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>NEIGHBOOKZ</Text>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.iconPress} //find a book
          onPress={() => navigation.navigate('Find a Book')}>
          <Image
          resizeMode={'contain'}
            style={styles.icon}
            source={require('../assets/HomeLogo1.png')}
          />
          <Text style={styles.text2}>Find Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconPress}
          onPress={() => navigation.navigate('Share a Book')}>
          <Image
          resizeMode={'contain'}
            style={styles.icon}
            source={require('../assets/HomeLogo2.png')}
          />
          <Text style={styles.text}>Share your Book</Text>
        </TouchableOpacity>
      </View>

      <ImageBackground
     resizeMode={'cover'}

      style={styles.backgroundImageStyle} source={require('../assets/round.png'
        )} >
      {/*<View style={styles.container3}>*/}


      {/*  <TouchableOpacity*/}
      {/*    style={styles.button}*/}
      {/*    onPress={() => navigation.navigate('Signup')}>*/}
      {/*    <Text style={styles.text}>Sign up</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity*/}
      {/*    style={styles.button}*/}
      {/*    onPress={() => navigation.navigate('Login')}>*/}
      {/*    <Text style={styles.text}>Log in</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  </View>*/}
        </ImageBackground>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    flex: 3,
   marginRight:'10%'


  },
  icon: {width: '90%', height: '90%'},

  headingText: {
    fontFamily: Platform.OS==='ios'?'Staatliches':'Staatliches-Regular',

    fontSize: 55,
    color: 'darkorange',
    flex: 1,
    marginTop: '18%',
  },
  text: {
    fontFamily: 'Nunito-Light',
    marginTop: 15,

    fontSize: 16,


  },
  text2: {
    fontFamily: 'Nunito-Light',
    marginTop: 15,
    marginLeft: '15%',
    fontSize: 16,


  },
  iconPress: {flex: 1, marginLeft: '14%',   height:"30%",
  },
  container3: {
    flexDirection: 'row',
    flex: 0.7,
   marginTop:'5%'
  },
  button: {flex: 1, alignItems: 'center'},
  backgroundImageStyle:{width:'100%',height:450,position:'absolute', bottom:-290,justifyContent:'center'}
});

export default HomeScreen;
