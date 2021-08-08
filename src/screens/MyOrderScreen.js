import React from 'react'
import { View, StyleSheet,Text } from 'react-native'

 const MyOrderScreen = () => {
     return<View style={styles.constainer} >
         <Text>My Orders Screen - Coming soon</Text>
     </View>
 }
  const styles = StyleSheet.create({
    constainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })

  export default MyOrderScreen ;
