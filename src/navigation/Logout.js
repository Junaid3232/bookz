import React, { useEffect } from "react";
import { View, StyleSheet } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

 const Logout = ({navigation}) => {

   const logout=async ()=> {
     await AsyncStorage.removeItem("currentUserToken")
     navigation.reset({
       index: 0,
       routes: [
         {
           name:'Login',
         },
       ],
     })
   }
  useEffect(()=>{ logout() },[])
 return null

 }
  const styles = StyleSheet.create({
  })

  export default Logout ;
