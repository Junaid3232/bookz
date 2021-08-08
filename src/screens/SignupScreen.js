import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, ActivityIndicator, Text,ScrollView } from "react-native";
import Header from '../components/Header';
import TextInputBox from '../components/TextInputBox';
import AppButton from '../components/AppButton';

import client from "./../apollo";
import {gql} from "@apollo/client";
import LinearGradient from "react-native-linear-gradient";

const SignupScreen = ({navigation}) => {
  const [phoneNo, setPhoneNo] = useState()
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [postcode, setPostcode] = useState()
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)
  const [theError ,setTheError] =useState()

  const REGISTRATION = gql`mutation {
    createUser(phoneNumber:"${phoneNo}",username:"${userName}",password:"${password}",email:"${email}",postcode:"${postcode}"){
      user {
        id
        username
        email
        postcode
      }
    }
  }`;

  const register_user=()=>{
    setLoading(true)
    client.mutate({mutation: REGISTRATION}).then(function (data) {
      setLoading(false)
      // console.log("******USER*****",data);
      navigation.navigate('Login');

    }) .catch((error)=>{
      console.log(error);
      setTheError(error)
      setLoading(false)
    })

  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <Header
          header1="Sign up today"
          header2="Join our community of local readers in your area to share and find your next read"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <TextInputBox
          placeholder="Phone number"
          icon={require('../assets/icons/phone.png')}
          keyboardType='numeric'
          onChangeText={(text) =>{setPhoneNo(text)}}
        />

        <TextInputBox
          placeholder="Username"
          icon={require('../assets/icons/user.png')}
          onChangeText={(text) =>{setUserName(text)}}
        />
        <TextInputBox
          placeholder="Email"
          icon={require('../assets/icons/email.png')}
          onChangeText={(text) =>{setEmail(text)}}
        />
        <TextInputBox
          placeholder="Postcode"
          icon={require('../assets/icons/email.png')}
          onChangeText={(text) =>{setPostcode(text)}}
        />
        <TextInputBox
          placeholder="Password"
          secureTextEntry={true}
          icon={require('../assets/icons/lock.png')}
          onChangeText={(text) =>{setPassword(text)}}
        />

        <Text style={styles.textError}>{theError? "Incorrect Credentials ": null}</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
        <Text style={styles.text}>Already Have an Account?</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{

              width: '100%',
              height: 130,
              alignItems: 'center',
              marginBottom:1,
              marginTop:10
            }} onPress={()=>{register_user()}}>
            <LinearGradient

              colors={['darkorange', '#F76729']}
              style={styles.button}>
              {loading? <ActivityIndicator color={"white"}/>:
                <Text style={styles.buttonText}>Sign up</Text>}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  container2: {flex: 0.2, marginTop: '10%'},
  button: {
    borderRadius: 50,
    width: '75%',
    height: '28%',
    justifyContent: 'center',
    alignItems: 'center',
  },  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Nunito-bold',
  },
  textError: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '200',
    color:'red'
  },
  text: {

    fontSize: 16,
    fontWeight: '200',
    color: 'gray',
    fontFamily: 'Nunito-Light',
  },
});
export default SignupScreen;
