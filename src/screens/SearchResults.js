import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet,FlatList,Text} from 'react-native';
import Header from '../components/Header';
import SearchCard from '../components/SearchCard';
const SearchResults = ({route,navigation}) =>{

  const {book,deliveryMethod,condition,searchBook}=route.params
  const length=book.length
  // console.log("*****PARAMS book length*****",book)

  console.log(book);

  return (
     <View style={styles.container}>
      <View style={styles.container2}>

        { length===1?  <View style={styles.constiner}>
            <Text style={styles.header1}>{length} Result Found</Text>
            <Text style={styles.header2}>{book[0].book} - {book[0].authors[0].name}</Text>
          </View>:
          length===0?
            <View style={styles.constiner}>
              <Text style={styles.header1}>No Results Found</Text>
            </View>:
            length>0?
          <View style={styles.constiner}>
            <Text style={styles.header1}>{length} Results Found</Text>
            <Text style={styles.header2}>for "{searchBook}"</Text>
          </View> : null}
      </View>
      <FlatList data={book} renderItem={({item})=>{
        return <View style={styles.searchContainer}>
          <SearchCard
            header={item.book}
            owner={item.owner}
            shape={item.condition}
            delivery={item.deliveryMethod}
            onpress={() => navigation.navigate('Book Request',{book:item})}/></View>
      }}/>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    flex: 1,
  },
  searchContainer: {marginTop: '7%'},
  container2: {marginTop: '3%',marginHorizontal:10,},
  header1: {
    fontSize: 35,
    fontFamily: 'Nunito-Bold',
  },
  header2: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '200',
    fontFamily: 'Nunito-Light',
  },
});
export default SearchResults;
