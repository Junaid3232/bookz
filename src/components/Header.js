import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({header1, header2}) => {
  return (
    <View style={styles.constiner}>
      <Text style={styles.header1}>{header1}</Text>
      <Text style={styles.header2}>{header2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Header;
