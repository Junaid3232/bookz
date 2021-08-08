import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Icon = ({icon}) => {
  return (
    <View>
      {icon && (
        <Image resizeMode={'contain'} style={styles.icon} source={icon} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
    marginRight: 5,
    
  },
});
export default Icon;
