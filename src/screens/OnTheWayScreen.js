import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppButton from "../components/AppButton";
const OnTheWayScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          resizeMode={'contain'}
          style={styles.icon}
          source={require('../assets/icons/ontheway.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Book on the way</Text>
        <Text style={styles.bottomText}>
          The book owner has been notified of your{'\n'} request. You will recive the
          book within{'\n'} 1-2 days!
        </Text>
      </View>
      <AppButton title="Done" onPress={()=>navigation.navigate("Home")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  container2: {justifyContent: 'center', alignItems: 'center'},
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '6%',
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 30,

  },

  icon: {
    width: '60%',
    height: '60%',
    overflow: 'visible',
  },
  bottomText: {fontSize: 16, fontFamily: 'Nunito-Light', textAlign:'center'},
});
export default OnTheWayScreen;
