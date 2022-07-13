import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import { ScrollView } from 'react-native';

 

const Register = () => {
  return (
    <ScrollView>
    <View style={styles.container}>


    <ImageBackground
        style={styles.cairo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Cairotower.jpg',
        }}>

        <View style={styles.textView}>
          <Text style={styles.imageText}>Cairo Tower </Text>
          <Text style={{color:"orange" , left:-87 , top:'20%'}}> starts from</Text>
          <Text style={{color:'white',  left:-60 , top:'18%'}}>70 L.E per person </Text>
        </View>
      </ImageBackground>


    <ImageBackground
        style={styles.cover}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg/1280px-%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg',
        }}>

        <View style={styles.textView}>
          <Text style={styles.imageText}>Khan el-Khalili </Text>
          <Text style={{color:"orange" , left:-87 , top:'20%'}}> starts from</Text>
          <Text style={{color:'white',  left:-60 , top:'18%'}}>125 L.E per person </Text>
        </View>
      </ImageBackground>



    <ImageBackground
        style={styles.coverImage}
        source={{
          uri: 'https://cdn-failk.nitrocdn.com/RyKHmvXXxHokVmBMNBLvuMxeBKSzoEFQ/assets/static/optimized/rev-e8c7027/wp-content/uploads/2020/08/grand-egyptian-museum-ramses-768x424.png',
        }}>

        <View style={styles.textView}>
          <Text style={styles.imageText}>The Grand </Text>
          <Text style={styles.imageText}>  Egyptian Museum</Text>
          <Text style={{color:"orange" , left:-87 , top:'20%'}}> starts from</Text>
          <Text style={{color:'white',  left:-60 , top:'18%'}}>100 L.E per person </Text>
        </View>
      </ImageBackground>
     
      
      

    </View>
    </ScrollView>
  );
};


export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex"
  },
  coverImage: {
    width: 250,
    height: 250,
     left:100 , top:'3%'
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
  imageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    left:-45,
    top:"20%"
  },
  cover :{
    width: 250,
    height: 200,
    left:100 ,
    top:'3%'
    
  },
  cairo :{
    width: 250,
    height: 250,
    left:100 ,
    top:'2%'
  }
});