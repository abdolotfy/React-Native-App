import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button , Text } from "react-native";
import { Image } from 'react-native-web';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  

  return (
    <SafeAreaView>
      
   
      
      <Text style={{color:"white"}}> Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter mobile number"
        placeholderTextColor="grey"
        value={text}
        keyboardType="numeric"
      />
      <Text style={{color:"white"}}>
        Password
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="EnterPassword"
        secureTextEntry={true}
        placeholderTextColor="grey"
        keyboardType="Text"
      />
  
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor:"#393a47" ,
    height: 40,
    width: 270,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#E0FFFF',
  },
});

export default UselessTextInput;