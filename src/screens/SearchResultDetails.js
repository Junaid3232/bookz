import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import Header from '../components/Header';
import AppButton from '../components/AppButton';
import client from "./../apollo";
import {gql} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from '../components/Icon';
import LinearGradient from "react-native-linear-gradient";
const SearchResultDetails = ({navigation,route}) => {
  const {book}=route.params;
  const authors=book.authors;
  // console.log("^^^^^Publish^^^^^^",book.publicationDate)
  const [loading, setLoading] = useState(false);
  const [dueDate, setDueDate] = useState();
  const listItems = authors.map((authors) =>authors.name);

  console.log(book.owner_book_id);

  let userId = null;

  const getUserId = async () => {
    AsyncStorage.getItem('userId', (err, result) => {
      console.log(result);
      userId = result;
    });
  };
  console.log(userId);
  getUserId();

  const create_order=()=>{
    setLoading(true);

    let CREATE_ORDER = gql`mutation {
        createOrder(orderData:{ownerbook: ${book.owner_book_id}, user:"${userId}", dueDate:"2021-01-12"}){
        order{
          status
          id
          dueDate   
        }
      }
    }`;

    client.mutate({mutation: CREATE_ORDER}).then(function (data) {
      let order_id = data.data.createOrder.order.id;
      let order_status = data.data.createOrder.order.status;
      let dueDate= data.data.createOrder.order.dueDate;
      // console.log("******ORDER*****",data);
      setDueDate(dueDate);
      setLoading(false);
      // Alert.alert(`Book Status: ${order_status}` )

      navigation.navigate('Payment',{
          order_id: order_id
      });

    });
  }





  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OnWay')}
        style={styles.searchIcon}>
        <Image
          style={styles.image}

          source={require('../assets/search.png')}
        />

        <View style={styles.container2}>
          <Text numberOfLines={2} style={styles.textHeader}>{book.book}</Text>
          <View style={styles.iconStyle}>
            <Icon icon={require('../assets/icons/author.png')} />

            <Text style={{width:"83%"}}>{listItems}</Text>
          </View>

          <View style={styles.iconStyle}>
            <Icon icon={require('../assets/icons/pages.png')} />
            <Text>{book.numpages}</Text>
          </View>

          <View style={styles.iconStyle}>
            {dueDate?  <Icon icon={require('../assets/icons/date.png')} /> : null}
            <Text>{dueDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.TextDeposit}>Deposit: $40</Text>
        <Text style={styles.detailText}>
          The deposit will be put on hold to make sure that the book is coming
          home in good shape.
        </Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.textHeader}>+2$ to support us</Text>
          <Text style={styles.TextDeposit}>Total: $42</Text>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button2} onPress={()=>create_order()}>
          <LinearGradient
            colors={['darkorange', '#F76729']}
            style={styles.button}>
            {loading? <ActivityIndicator color={"white"}/>:
            <Text style={styles.buttonText}>Confirm</Text>}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    marginRight:"10%",
    width:'50%'



  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Nunito-bold',
  },
  image: {width: '32%', height: 120, marginLeft: "-6%"},
  iconStyle: {
    flexDirection: 'row',
    marginTop: '1%',
  },button: {
    borderRadius: 50,
    width: '75%',
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextDeposit: {
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
  container: {flex: 1, backgroundColor: 'white'},
  searchIcon: {margin: '8%', flexDirection: 'row'},
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: '7%',
  },
  detailText: {fontSize: 17, fontFamily: 'Nunito-Light'},
  container2: {
    justifyContent: 'center',
    marginLeft: '4%',
  },
  bottomContainer: {marginTop: '8%'},
  button2:{
    width: '100%',
    height: '50%',
    alignItems: 'center',

  }
});
export default SearchResultDetails;
