import * as React from 'react';
import { Button, View, Text , TextInput,ActivityIndicator, FlatList,SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import UselessTextInput from './src/Textinput';
import Reg from './src/Reg';
import List from './src/components/List' 
import Linking  from './src/Linking'
 import Image from './src/Image'
import { ScrollView } from 'react-native';

import CairoTower from  './src/screen/CairoTower';

import GrandMuseum from './src/GrandMuseum' ;

import KhanelKhalili from './src/screen/KhanelKhalili'





  




function HomeScreen({ navigation })  {
   
  const itemURL = "https://reactnative.dev/movies.json";
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch(itemURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json.data);
        setKey(json.key);
        setValue(json.value);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  async function getItemsAsync() {
    try {

      let response = await fetch(itemURL);
      let json = await response.json();
      setData(json.data);
      setKey(json.key);
      setValue(json.value);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }
 

  
  return (
    
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#0f111a' }}>
   
   <View style={{ flex: 1, padding: 24  }}>
      {isLoading ? <ActivityIndicator/> : (
       
       <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text>
                  {item.key}. {item.value}, {item.description}
                </Text>
                <Text>{description}</Text>
              </View>
            )}
          />
      )}
      </View>
   
  
    

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
    <Linking></Linking>
    </View>
   
    ); 
   }
   
function SignUpScreen( {navigation }){
  return(
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#0f111a' }}>
 
    <Reg/> 

    <Button
    title="SIGN UP"
    color="orange"
    
    onPress={() => navigation.navigate('Detail')}
    />
    <Stack.Navigator>
     
    <Stack.Screen name="Detail" component={DetailScreen} /> 
    </Stack.Navigator>
 
    

    </View>
    )
    } 
      

function DetailsScreen ({navigation}){
  
   return(
    <ScrollView>
   <View style={{ flex: 1, backgroundColor:'#0f111a' }}>
    
   <Image></Image>
   
   <Button
    
    title="1-CairoTower"
    color="orange"
    
    onPress={() => navigation.navigate('CairoTower')}
    /> 
     <Button
    
    title="2-KhanelKhalili"
    color="orange"
    
    onPress={() => navigation.navigate('KhanelKhalili')}
    /> 


    



    <Stack.Navigator>
    <Stack.Screen name="CairoTower" component={CairoTowerScreen} /> 
    <Stack.Screen name="KhanelKhalili" component={KhanelKhaliliScreen} />
     <Stack.Screen  name="grand" component={GrandMuseumScreen} /> 
     

     </Stack.Navigator>
   
     <Button
    
    title="3_GrandMuseum"
    color="orange"
    
    onPress={() => navigation.navigate('GrandMuseum')}
    /> 

   </View>
   </ScrollView>
   )
   };

function DetailScreen({navigation}){
 return(

  <ScrollView>
  <View style={{ flex: 1, backgroundColor:'#0f111a' }}>
   
  <Image></Image>
  
  <Button
   
   title="1-CairoTower"
   color="orange"
   
   onPress={() => navigation.navigate('CairoTower')}
   /> 
    <Button
   
   title="2-KhanelKhalili"
   color="orange"
   
   onPress={() => navigation.navigate('KhanelKhalili')}
   /> 


   



   <Stack.Navigator>
   <Stack.Screen name="CairoTower" component={CairoTowerScreen} /> 
   <Stack.Screen name="KhanelKhalili" component={KhanelKhaliliScreen} />
    <Stack.Screen  name="grand" component={GrandMuseumScreen} /> 
    

    </Stack.Navigator>
  
    <Button
   
   title="3_GrandMuseum"
   color="orange"
   
   onPress={() => navigation.navigate('GrandMuseum')}
   /> 

  </View>
  </ScrollView>
  )
  };
  


function GrandMuseumScreen(){
  return(
    <View style={{ flex: 1, backgroundColor:'#0f111a' }}>
    <GrandMuseum></GrandMuseum>
    </View>
  )
}
function KhanelKhaliliScreen(){
  return(
    <View style={{ flex: 1, backgroundColor:'#0f111a' }}>
    <KhanelKhalili></KhanelKhalili>
    </View>
  )
}

function CairoTowerScreen(){
  return(
    <View style={{ flex: 1, backgroundColor:'#0f111a' }}>
   

    <CairoTower></CairoTower>
   
    </View>
  )
}

const Stack = createNativeStackNavigator(); 


function App(){

  fetch('https://www.postman.com/collections/4460c9c18f0d3b6c4f51',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue'
    })
  });  
  
  return(

    <NavigationContainer>

    <Stack.Navigator>
    
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen}/>
    <Stack.Screen name="SignUp" component={SignUpScreen}/>
    <Stack.Screen name="Detail" component={DetailScreen}/>
    <Stack.Screen name="CairoTower" component={CairoTowerScreen} /> 
    <Stack.Screen name="KhanelKhalili" component={KhanelKhaliliScreen} />
    <Stack.Screen name="GrandMuseum" component={GrandMuseumScreen} /> 

    
    

    </Stack.Navigator>

    </NavigationContainer>
    )
 
    }
 
export default   App ;