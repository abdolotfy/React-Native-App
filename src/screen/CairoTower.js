import React from 'react';
import {StyleSheet, Text, ImageBackground, View , Image} from 'react-native';

import { ScrollView } from 'react-native';
import { Button } from 'react-native';
import { Alert } from 'react-native';



      
          

const Tower = () => {
    const showAlert = () => {
        return Alert.alert(
            "No Available spots" , "full",

            [
                {
                  text: "Agree",
                  onPress: () => setChoice("Agree"),
                },
        
                {
                  text: "Disagree",
                  onPress: () => setChoice("Disagree"),
                },
            ]
            );
          };


    const [choice, setChoice] = React.useState("");

    
    
    return ( 
        <ScrollView>

    <View style={styles.container}>


    <ImageBackground
        style={styles.cairo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Cairotower.jpg',
        }}>

        <View style={styles.textView}>
        <Text style={{color:"white" , bottom:"-35%" , left:-70 }}>Cairo Tower </Text>
        <Text style={{color:'orange' , bottom:"-30%" , left:80}}>Starts from</Text>
        <Text style={{color:'white' , bottom:"-30%" , left:80}}>70 L.E </Text>
        </View>
      </ImageBackground>
      <Text style={{color:'white' , fontSize:10, top:"20%"}}>  is a free-standing concrete tower in Cairo, Egypt. At 187 m , it is the tallest structure in Egypt and North Africa. It was the tallest structure in Africa for ten years until 1971, when it was surpassed by Hillbrow Tower in South Africa.</Text>
       
       
      


      <View style={styles.gallery}>
      
      <Image style={{width:100 ,height:100 , left:10 , top:'35%'}}  source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cairo_Tower_Entrance.jpg/800px-Cairo_Tower_Entrance.jpg',}} />
      <Image style={{width:100 ,height:100 , left:5 , top:'35%'}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Cairo_Tower_from_below.jpg/800px-Cairo_Tower_from_below.jpg',}} />
      <Image style={{width:100 ,height:100 , left:-10 , top:'35%'}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Egypt-2A-010_-_Cairo_%282217349050%29.jpg/1024px-Egypt-2A-010_-_Cairo_%282217349050%29.jpg',}} />
      
      </View>
      <View>
      <Button 
      title="Book Now"
      color="orange"
      onPress={showAlert}
      >

      </Button>
      <Text style={styles.text}>{choice}</Text>
      </View>     

      </View>
      </ScrollView>
)};

     
      export default Tower
 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    cairo :{
        width: 250,
        height: 250,
        left:100 ,
        top:'18%'
      },
      textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      gallery :{
        
        justifyContent:"space-between",
        flexDirection:'row',
        
       
        
      } ,


});
