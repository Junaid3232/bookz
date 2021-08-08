import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from '../components/Icon';
const SearchCard = ({header, owner, shape, delivery, onpress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress} style={styles.searchIcon}>
        <View>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('../assets/search.png')}
          />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.header}>{owner.postcode.substring(0, 3)} - {header}</Text>
          <View style={styles.iconView}>
            <Icon icon={require('../assets/icons/shape.png')} />
            <Text style={styles.text}>{shape}</Text>
          </View>
          <View style={styles.iconView}>
            <Icon icon={require('../assets/icons/delivery.png')} />
            <Text style={styles.text}>{delivery}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    overflow: 'visible',
  },
  header: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',


  },
  text: {
    fontFamily: 'Nunito-Light',
    marginLeft: '1%',
    color: 'black',
  },
  iconView: {flexDirection: 'row', marginTop: '2%'},
  container: { marginLeft:'3%',flex:1,flexWrap:'wrap'},
  searchIcon: {flexDirection: 'row'},
  headerView: {marginLeft: '3%',width:'65%'},
});
export default SearchCard;
