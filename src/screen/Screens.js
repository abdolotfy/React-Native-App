import React from "react";
import { View, Text , Button , StyleSheet } from "react-native-web";


import UselessTextInput from "../Textinput";

export const Profile =({navigation}) =>{
    return(
        <Text>lokle</Text>
    )
}


 export const Home =({navigation}) =>{
    return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#0f111a' }}>
        <Text style={{color:'#E0FFFF', fontSize:50 }} > lokle </Text>
       <UselessTextInput> </UselessTextInput>
        
       <Button
               title="Login"
               color="orange"
               
               onPress={() => navigation.navigate('Details')}
        
                />
         
        <View>
    <Text style={{ color:"white"}}> 
      Don't have an account? <Button
  onPress={() => {
  navigation.navigate('SignUp');
  }}
  title="Sign Up Here"
  color="orange"
  />
    </Text>
  </View>
  <Text style = {{ margin:60 , color:"white" }}  >   You can login with   </Text>
  
      </View>
     
    ); 
  }
   

        

  export const SignUp =({navigation}) =>{
    return(
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#0f111a' }}>
 
        <Reg/> 
 
 
       <Stack.Navigator>
      
       <Stack.Screen name="Profile" component={ProfileScreen} />
 
      
       
 
       </Stack.Navigator>
  
       <Button
         title="SIGN UP"
         color="orange"
         onPress={() => navigation.push('Profile')}
       />
   
      </View>
   )
 } 
 


 export  const Details =() =>{
    return(
        <Text>lokle</Text>
    )
    }
