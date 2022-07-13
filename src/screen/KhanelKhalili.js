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
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg/1280px-%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg',
        }}>

        <View style={styles.textView}>
        <Text style={{color:"white" , bottom:"-35%" , left:-70 }}>Khan el-Khalili </Text>
        <Text style={{color:'orange' , bottom:"-30%" , left:80}}>Starts from</Text>
        <Text style={{color:'white' , bottom:"-30%" , left:80}}>125 L.E </Text>
        </View>
      </ImageBackground>
      <Text style={{color:'white' , fontSize:10, top:"20%"}}>  is a famous bazaar and souq (or souk) in the historic center of Cairo, Egypt. Established as a center of trade in the Mamluk era and named for one of its several historic caravanserais, the bazaar district has since become one of Cairo's main attractions for tourists and Egyptians alike.  </Text>
       
       
      


      <View style={styles.gallery}>
      
      <Image style={{width:100 ,height:100 , left:10 , top:'35%'}}  source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Historisches_Kairo_2019-11-02d.jpg/1024px-Historisches_Kairo_2019-11-02d.jpg',}} />
      <Image style={{width:100 ,height:100 , left:5 , top:'35%'}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Khan_el-Khalili%2C_Old_Cairo%2C_al-Q%C4%81hirah%2C_CG%2C_EGY_%2840944894643%29.jpg/800px-Khan_el-Khalili%2C_Old_Cairo%2C_al-Q%C4%81hirah%2C_CG%2C_EGY_%2840944894643%29.jpg',}} />
      <Image style={{width:100 ,height:100 , left:-10 , top:'35%'}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Khan_el-Khalili%2C_Old_Cairo%2C_al-Q%C4%81hirah%2C_CG%2C_EGY_%2846995550735%29.jpg/1024px-Khan_el-Khalili%2C_Old_Cairo%2C_al-Q%C4%81hirah%2C_CG%2C_EGY_%2846995550735%29.jpg',}} />
      
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