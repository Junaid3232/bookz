import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerSideBarMenu = props => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container2}>
        <Image
          source={require('../assets/icons/account.png')}
          style={styles.sideMenuProfileIcon}
        />
        <Text style={styles.text}>Account: Logged-In</Text>
      </View>
      <View style={styles.container}></View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginLeft: '3%',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  container: {
    marginTop: Platform.OS === 'ios' ? null : '10%',
    paddingBottom: Platform.OS === 'ios' ? null : null,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Nunito-Light',
    fontWeight: '400',
  },
  safe: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#f3f3f3',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '14%',
  },
});

export default DrawerSideBarMenu;
