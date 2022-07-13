import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button , Text , screenLeft } from "react-native";
import { View } from "react-native";

const Reg = () => {
const [text, onChangeText] = React.useState(null);
const [number, onChangeNumber] = React.useState(null);
const [BirthDate, onChangeNumber1] = React.useState(null);
const [city, onChangeTextt] = React.useState(null);
const [Password, onChangeTexttt] = React.useState(null);
const [Country, onChangeTextttt] = React.useState(null);
const [ConfirmPassword, onChangeText2] = React.useState(null);
const [Nationality, onChangeText3] = React.useState(null);
const [email, onChangeText4] = React.useState(null);
const [Gender, onChangeText5] = React.useState(null);

return (
  <SafeAreaView>



    
    <Text style={{color:"white" , top:"5%" , left:20} }> Name</Text>
    <TextInput
      onChangeText={onChangeText}
      style={sign.input}
      placeholder="Name"
      placeholderTextColor="grey"
      value={text}
      keyboardType="text"
      ></TextInput>

    <Text style={{color:"white",left:20}}> Phone Number</Text>
    <TextInput
      onChangeText={onChangeNumber}
      style={sign.input}
      placeholder="PhoneNumber"
      placeholderTextColor="grey"
      value={number}
      keyboardType="numeric"
      ></TextInput>
    <View style={signs.container}> 
    <Text style={{color:"white" , left:20}}> Email Address </Text>
    <TextInput
      onChangeText={onChangeText4}
      style={signs.input}
      placeholder="Email adress..."
      placeholderTextColor="grey"
      value={email}
      keyboardType="text"
      ></TextInput>

    <Text style={{color:"white", flexDirection:'row'}}> City </Text>
    <TextInput
      onChangeText={onChangeTextt}
      style={signs.input}
      placeholder="City..."
      placeholderTextColor="grey"
      value={city}
      keyboardType="text"
      ></TextInput>
    </View >
    <View style={signs.container}> 
    <Text style={{color:"white" , left:20}}> Nationality</Text>
    <TextInput
      onChangeText={onChangeText3}
      style={signs.input}
      placeholder="Nationality..."
      placeholderTextColor="grey"
      value={Nationality}
      keyboardType="text"
    ></TextInput>
    <Text style={{color:"white"}}> Country</Text>
    <TextInput
      onChangeText={onChangeTextttt}
      style={signs.input}
      placeholder="Country..."
      placeholderTextColor="grey"
      value={Country}
      keyboardType="text"
    ></TextInput>
    </View>
    <View style={signs.container}> 
    <Text style={{color:"white" , left:20}}> Password</Text>
    <TextInput
      onChangeText={onChangeTexttt}
      style={signs.input}
      placeholder="Password..."
      secureTextEntry={true}
      placeholderTextColor="grey"
      value={Password}
      keyboardType="text"
    ></TextInput>
    <Text style={{color:"white"}}> Password</Text>
    <TextInput
      onChangeText={onChangeText2}
      style={signs.input}
      placeholder="Password..."
      secureTextEntry={true}
      placeholderTextColor="grey"
      value={ConfirmPassword}
      keyboardType="text"
    ></TextInput>
    </View>
    <View style={signs.container}> 
    <Text style={{color:"white" , left:20}}> Gender</Text>
    <TextInput
      onChangeText={onChangeText5}
      style={signs.input}
      placeholder="Gender..."
      placeholderTextColor="grey"
      value={Gender}
      keyboardType="text"
    ></TextInput>
    <Text style={{color:"white"}}> BirthDate</Text>
    <TextInput
      onChangeText={onChangeNumber1}
      style={signs.input}
      placeholder="BirthDate..."
      placeholderTextColor="grey"
      value={BirthDate}
      keyboardType="text"
    ></TextInput>
    </View>



    </SafeAreaView>
    ); } 



    const sign  = StyleSheet.create({
      input: {
        height: 40,
        width: 330,
        margin: 25,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        backgroundColor: '#E0FFFF',
        top:"2%"
      },
    });
    const signs  = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      input: {
        flexDirection:'row',
        justifycontent:'space-between',
        width: 150,
        height: 45,
        backgroundColor: '#E0FFFF',
        margin: 0,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        top:"30%" ,
        left:-45
      },
      
   
      
     
    

     
    });







   
 

  export default Reg;