import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect, useState } from "react";
import { WebView } from 'react-native-webview';
import { ActivityIndicator, Text, TouchableOpacity, View , StyleSheet} from "react-native";
import dynamicLinks from '@react-native-firebase/dynamic-links';
import LinearGradient from "react-native-linear-gradient";
// class PaymentScreen extends Component{
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: "",
//     };
//   }
const PaymentScreen = (props) => {
  console.log("Props:");
  console.log(props);

  const [loading, setLoading]= useState(false);
  const url=`https://www.neighbookz.com/pay/` + props.route.params.order_id;
  const successURL="intent://neighbookz.page.link/naxz#Intent;package=com.google.android.gms;action=com.google.firebase.dynamiclinks.VIEW_DYNAMIC_LINK;scheme=https;S.browser_fallback_url=https://play.google.com/store/apps/details%3Fid%3Dorg.neighbookz.com&pcampaignid%3Dfdl_short&url%3Dhttps://www.neighbookz.com/;end;"

  const handleMessage=(event)=>{
    let data = event.nativeEvent.data;
    data = JSON.parse(data);
    if(data.status == 'success'){
      alert(data.reference);
      props.navigation.navigate('OnWay')
    }else{
      this.setState({loading: false});
      alert('Failed, '+ data.message);

    }
  }

  const handleNavigation = (event) =>{
    console.log("******EVENT********",event)
    console.log("******url********",event.url)

    if (event.url===successURL){
      setLoading(true)
     props.navigation.navigate("OnWay") }
    else {
      console.log("********NO")

  }}

  return (
   loading ? <ActivityIndicator color="red"/> :
    <View style={{ flex: 1 }}>

      <WebView
        source={{ uri: url }}
        startInLoadingState={true}
        // originWhitelist={['intent://']}
        scalesPageToFit={true}
        // onNavigationStateChange={(state) => {
        //   handleNavigation()
        // }}

        onNavigationStateChange={(event) => handleNavigation(event)}
        // onMessage={(event) => handleMessage(event)}

      />
    </View>


  )
}

const styles = StyleSheet.create({
  button: {
       borderRadius : 5,
       marginTop : 10,
       width : '75%',
       padding : 10,
       justifyContent : 'center',
       alignItems : 'center', },
  buttonText: {
       color : 'white',
       fontSize : 18,
       fontFamily : 'Nunito-bold', },
  button2 : {
       width : '100%',
       alignItems : 'center',
  }
})


export default PaymentScreen
//
// export default function(props) {
//   const navigation = useNavigation();
//
//   const handleDynamicLink = link => {
//     // Handle dynamic link inside your own application
//     console.log(link);
//     if (link.url === 'https://www.neighbookz.com/') {
//       navigation.push('BookRequestedScreen');
//     }
//   };
//
//   useEffect(() => {
//     const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
//     // When the component is unmounted, remove the listener
//     return () => unsubscribe();
//   }, []);
//
//
//   return <PaymentScreen {...props} navigation={navigation} />;
// }
