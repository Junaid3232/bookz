import React, { useRef,useEffect } from "react";
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import Icon from '../components/Icon';
const TextInputBox = ({placeholder, icon,secureTextEntry,keyboardType,onChangeText}) => {
  const inputElementRef=useRef(null)
  useEffect(()=>{
    inputElementRef.current.setNativeProps({
      style:{ fontFamily: 'Nunito-Light'}
    })
  },[])


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.icon}>{Icon && <Icon icon={icon} />}</View>
        <TextInput
          ref={inputElementRef}
          underlineColorAndroid="#fff"
          keyboardType={keyboardType}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="gray"
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  textInput: {
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Nunito-Light',
    width: '100%',
color:'black'

  },
  container2: {flexDirection: 'row', marginLeft: 5},
  separator: {
    borderBottomColor: 'lightgray',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  icon: {marginTop: Platform.OS === 'ios' ? null : '3%'},
});
export default TextInputBox;
