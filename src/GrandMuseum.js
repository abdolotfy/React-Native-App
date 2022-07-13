import React from 'react';
import {StyleSheet, Text, ImageBackground, View , Image} from 'react-native';

import { ScrollView } from 'react-native';
import { Button } from 'react-native';
import { Alert } from 'react-native';



      
          

const Tower = () => {
    const showAlert = () => {
        return Alert.alert(
            "There is Available spots" , "",

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
          uri: 'https://cdn-failk.nitrocdn.com/RyKHmvXXxHokVmBMNBLvuMxeBKSzoEFQ/assets/static/optimized/rev-e8c7027/wp-content/uploads/2020/08/grand-egyptian-museum-ramses-768x424.png',
        }}>

        <View style={styles.textView}>
        <Text style={{color:"white" , bottom:"-35%" , left:-40 }}>THe Grand Egyptian  Museum </Text>
        <Text style={{color:'orange' , bottom:"-30%" , left:100}}>Starts from</Text>
        <Text style={{color:'white' , bottom:"-30%" , left:100}}>100 L.E </Text>
        </View>
      </ImageBackground>
      <Text style={{color:'white' , fontSize:10, top:"20%"}}> also known as the Giza Museum, is an archaeological museum under construction in Giza, Egypt. When inaugurated, the GEM will be the largest archaeological museum in the world. It will house artifacts of ancient Egypt, including the complete Tutankhamun collection; many pieces will be displayed for the first time.[3] The museum is sited on a plot of land of about 480,000 square metres </Text>
       
       
      


      <View style={styles.gallery}>
      
      <Image style={{width:100 ,height:100 , left:10 , top:'35%'}}  source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Grand_Egyptian_Museum_2019-11-07j.jpg/1280px-Grand_Egyptian_Museum_2019-11-07j.jpg',}} />
      <Image style={{width:100 ,height:100 , left:5 , top:'35%'}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Grand_Egyptian_Museum_2019-11-07d.jpg/800px-Grand_Egyptian_Museum_2019-11-07d.jpg',}} />
      <Image style={{width:100 ,height:100 , left:-10 , top:'35%'}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg/800px-CairoEgMuseumTaaMaskMostlyPhotographed.jpg',}} />
      
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
        width: 280,
        height: 250,
        left:90 ,
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
