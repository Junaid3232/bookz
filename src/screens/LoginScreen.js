import React, { useState , useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity, ActivityIndicator,
} from "react-native";
import client from "./../apollo";
import {gql} from "@apollo/client";
import Header from '../components/Header';
import TextInputBox from '../components/TextInputBox';
import AppButton from '../components/AppButton';
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';
import hasFlag from "has-flag";

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [loading , setLoading] = useState(false)
  const [theError , setTheError ] = useState()
  const [userToken, setUserToken] = useState()
  const [userNameFilled , setUserNameFilled]= useState(false)
  const [userPasswordFilled , setUsePasswordFilled]= useState(false)



  const LOGIN = gql`mutation{
 tokenAuth(username:"${userName}", password:"${password}"){ 
   token
   user {
    id
   } 
   payload 
   __typename
 }
  }`;


  const login_user=()=> {
     setLoading(true)
       client.mutate({ mutation: LOGIN }).then(function(data) {
      setLoading(false)
      const token=data?.data?.tokenAuth?.token;
      const userId=data?.data?.tokenAuth?.user.id;

      storeToken(token);

      console.log(userId);
      storeUserId(userId);

      // navigation.navigate('Home',{data});
         navigation.reset({
           index: 0,
           routes: [
             {
               name: 'Home', params: {data},
             },
           ],
         })

    }).catch((error)=>{
      setTheError(error);
         setLoading(false)
    })
  }
    const storeToken = async (token) => {
      console.log(token);
      try {
        await AsyncStorage.setItem('currentUserToken', token)
        console.log("Token stored")
      } catch (e) {
        console.log("ERROR",e)
      }
    }

    const storeUserId = async (userId) => {
      try {
        await AsyncStorage.setItem('userId', userId)
        console.log("userId stored:" + userId);
      } catch (e) {
        console.log("ERROR",e)
      }
    }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.headerView}>
          <Header
            header1="Login"
            header2="Join our community of local readers in your
           area to share and find your next read"
          />
        </View>

        <View style={{flex: 3}}>
          <TextInputBox
            placeholder="Username"
            // keyboardType='numeric'
            icon={require('../assets/icons/user.png')}
            onChangeText={(text) => {if (text===''){{setUserName(text)
            setUserName(false)}}

            else {setUserName(text)
            setUserNameFilled(true)}}}
          />
          <TextInputBox
          secureTextEntry={true}
            placeholder="Password"
            icon={require('../assets/icons/lock.png')}
          onChangeText={(text)=>{if (text===''){setPassword(text)
            setUsePasswordFilled(false)}
          else {setPassword(text)
            setUsePasswordFilled(true) }}}
          />
          <Text style={styles.textError}>{theError? "Incorrect Username or Password": null}</Text>
          <TouchableOpacity>
            <Text style={styles.text}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
            <Text style={styles.text}>Don't Have an Account?</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              disabled={userNameFilled && userPasswordFilled? false : true}
              style={styles.button2 } onPress={()=>{ login_user();
               storeToken();}}>
              <LinearGradient

                colors={['darkorange', '#F76729']}
                style={userNameFilled && userPasswordFilled?  styles.button : styles.buttonDisable}>
                {loading? <ActivityIndicator color={"white"}/>:
                  <Text style={styles.buttonText}>Login</Text>}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
   marginTop: 5,
    fontSize: 16,
    fontWeight: '200',
    color: 'gray',
    fontFamily: 'Nunito-Light',
  },
  textError: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '200',
    color:'red'
  },
  container: {backgroundColor: 'white', flex: 1},
  safe: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  headerView: {flex: 1, justifyContent: 'center'},
  button: {
    borderRadius: 50,
    width: '75%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Nunito-bold',
  },
  button2:{
    marginTop:'10%',
    width: '100%',
    height: 38,
    alignItems: 'center',

  },
  buttonDisable:{
    borderRadius: 50,
    width: '75%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.5

  }
});
export default LoginScreen;
