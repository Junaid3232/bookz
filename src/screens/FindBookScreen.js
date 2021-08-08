import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import TextInputBox from '../components/TextInputBox';
import DropDownPicker from 'react-native-dropdown-picker';
import AppButton from '../components/AppButton';
import {gql} from "@apollo/client";
import client from "./../apollo";
import LinearGradient from "react-native-linear-gradient";
const FindBookScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [searchBook, setSearchBook] = useState();
  const [books , setBooks] =useState([])
  const [loading, setLoading] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);

  const getBooks=(searchBook)=> {
    var myquery = gql`{
          books(q: "${searchBook}") {
            edges {
              node {
                id
                book {
                  id
                  title
                  numPages
                  publicationDate
                  authors {
                    name
                  }
                }
                owner{
                  username
                  postcode
                }
                condition
                deliveryMethod
              }
            }
          }
        }`;

   setLoading(true)
    client.query({ query: myquery }).then(function(data) {
      console.log('*****DATA*****',data);

      setLoading(false)
      var books = [];
      data.data.books.edges.forEach(function (data) {
        var owner_book = data?.node;

        console.log("Owner id:");
        console.log(owner_book.id);
        books.push({
           key: `${owner_book.id}-${owner_book.owner.username}`,
          owner_book_id: owner_book.id,
          book: owner_book.book.title,
          owner: owner_book.owner,
           deliveryMethod: owner_book.deliveryMethod,
           condition: owner_book.condition,
          numpages: owner_book.book.numPages,
          authors:owner_book.book.authors,
          publicationDate:owner_book.book.publicationDate
        });
      });
   setBooks(books)
      console.log('*****BOOOKSSS*****',books)
      if (books===null){
        <Text>Something Went Wrong</Text>
      }
      else{
      navigation.navigate("SearchResults",{book:books, searchBook:searchBook})}
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput
          autoCapitalize={"none"}
          underlineColorAndroid="#fff"
          onChangeText={(text) =>{ if (text===''){ {setSearchBook(text)
            setButtonDisable(true)}}
          else { {setSearchBook(text)
              setButtonDisable(false)}}}}
          style={styles.textInput}
          placeholder="Enter Title of Book"
          placeholderTextColor="black"

        />
        <View style={styles.separator}></View>
      </View>
      <View style={{flex: 1}}>
        <DropDownPicker
          items={[
            {
              label: 'Fictional',
              value: 'Fictional',
            },
            {
              label: 'Romance',
              value: 'Romance',
            },
            {
              label: 'Finance',
              value: 'Finance',
            },
          ]}
          containerStyle={{
            height: 40,
            // borderBottomWidth: 1,
          }}
          placeholder="Select Category"
          placeholderStyle={{
            fontFamily: 'Nunito-Light',
          }}
          selectedLabelStyle={{
            fontFamily: 'Nunito-Light',
          }}
          labelStyle={{
            fontSize: 16,

            fontFamily: 'Nunito-Light',
          }}
          itemStyle={{
            justifyContent: 'flex-start',
            color: 'gray',
          }}
          onChangeItem={item => setSelectedValue(item.value)}
        />

        <TextInputBox
          placeholder="Postcode"
          icon={require('../assets/icons/mail.png')}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            disabled={buttonDisable}
            style={{
              width: '100%',
              height: '50%',
              alignItems: 'center',
            }} onPress={()=>{
              getBooks(searchBook)
             }}>
            <LinearGradient
              colors={['darkorange', '#F76729']}
              style={!buttonDisable?styles.button:styles.conditionButton}>
              {loading? <ActivityIndicator color={"white"}/>:
              <Text style={styles.buttonText}>Find</Text>}
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {paddingHorizontal: '5%', backgroundColor: 'white', flex: 1},
  container2: {paddingVertical: '5%'},
  textInput: {
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Nunito-Light',
    width: '100%',
  },
  separator: {
    borderBottomColor: 'lightgray',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  button: {
    borderRadius: 50,
    width: '75%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',

  },
  conditionButton: {
    borderRadius: 50,
    width: '75%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.5

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Nunito-bold',
  },
});
export default FindBookScreen;
