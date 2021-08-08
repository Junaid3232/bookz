import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity, ActivityIndicator,
  ScrollView
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import client from "./../apollo";
import {gql} from "@apollo/client";
import Toast from 'react-native-simple-toast';

import TextInputBox from '../components/TextInputBox';
import AppButton from '../components/AppButton';
import LinearGradient from "react-native-linear-gradient";






const ShareBookScreen = ({navigation}) => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pages, setPages] = useState();
  const [shape, setShape] = useState();
  const [loading, setLoading] = useState(false)

  const [selectedValue, setSelectedValue] = useState();
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const ChangeColor1 = () => {
    if (clicked1 === false) {
      setClicked1(true);
      setClicked2(false);
      setClicked3(false);
    }
  };
  const ChangeColor2 = () => {
    if (clicked2 === false) {
      setClicked1(false);
      setClicked2(true);
      setClicked3(false);
    }
  };
  const ChangeColor3 = () => {
    if (clicked3 === false) {
      setClicked1(false);
      setClicked2(false);
      setClicked3(true);
    }
  };


  const create_book = () => {
  /* Prepare book data */

  const CREATE_BOOK = gql`mutation {
            createBook(bookData:{
                isbn: "123456",
                averageRatings: 0,
                title:"${title}",
                publicationDate: "2020-10-10",
                numPages: ${pages},
                authors:[{name:"${author}"}]}
            ){
              book {
                title
                numPages
                authors{
                  name
                  
                }
              }
              ok
            }
        }`;

  /* Send request */
    setLoading(true)
  client.mutate({mutation: CREATE_BOOK}).then(function (data) {
    const status = data?.data?.createBook?.ok
    setLoading(false)

    {status? Toast.show('Book successfully added to our library', Toast.SHORT, [
      'UIAlertController',
    ]) : Toast.show ("Something went wrong", Toast.SHORT)}



    // console.log("ADDED BOOK****" ,data.data.createBook);
    navigation.navigate("Home")

  });

}

  return (
    <ScrollView style={styles.container3}>
      <SafeAreaView style={styles.safe}>
        <TextInputBox placeholder="Enter Title of Book" onChangeText={(text)=>setTitle(text)} />
        <TextInputBox placeholder="Enter Author Name" onChangeText={(text)=> setAuthor(text)} />
        <TextInputBox placeholder="No of Pages" onChangeText={(text)=>setPages(text)} />
        <View style={styles.dropdownContainer}>
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
          <Text style={styles.textSelectBook}>Select Shape of Book</Text>
          <View style={styles.container2}>
            <TouchableOpacity
              style={
                clicked1 === true
                  ? styles.emojiClickedView
                  : styles.emojiUnClickedView
              }
              onPress={ChangeColor1}>
              <Image
                style={styles.emoji}
                source={require('../assets/new.png')}
              />
              <Text style={styles.text}>New</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                clicked2 === true
                  ? styles.emojiClickedView
                  : styles.emojiUnClickedView
              }
              onPress={ChangeColor2}>
              <Image
                style={styles.emoji}
                source={require('../assets/good.png')}
              />
              <Text style={styles.text}>Good</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                clicked3 === true
                  ? styles.emojiClickedView
                  : styles.emojiUnClickedView
              }
              onPress={ChangeColor3}>
              <Image
                style={styles.emoji}
                source={require('../assets/used.png')}
              />
              <Text style={styles.text}>Used</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button2} onPress={()=>{ create_book()
            }}>
            <LinearGradient

              colors={['darkorange', '#F76729']}
              style={styles.button}>
              {loading? <ActivityIndicator color={"white"}/>:
                <Text style={styles.buttonText}>Share</Text>}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '200',
    marginLeft: 10,
    marginTop: 5,
    fontFamily: 'Nunito-Light',
  },
  textSelectBook: {
    fontSize: 16,
    fontWeight: '200',
    marginLeft: 10,
    marginTop: 25,
    fontFamily: 'Nunito-Light',
  },

  emoji: {width: 35, height: 35, marginLeft: 6},
  emojiClickedView: {
    backgroundColor: '#f8f8f8',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'orange',
  },
  emojiUnClickedView: {
    backgroundColor: '#f8f8f8',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  container3: {backgroundColor: 'white', flex: 1},
  safe: {
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  dropdownContainer: {marginTop: 30},
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
    marginBottom:150,
    width: '100%',
    height: '50%',
    alignItems: 'center',
  }
});

export default ShareBookScreen;
