import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Linking, Platform, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LinkingPage = () => {
    

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }

    const openFace = () => {
        Linking.openURL('https://www.facebook.com/facebook')
            .catch(() => {
                Linking.openURL('https://www.facebook.com/facebook');
            })
    } 

    const openGoogle = () => {
        Linking.openURL('https://gmail.google.com')
            .catch(() => {
                Linking.openURL('https://gmail.google.com');
            })
    } 
    const openApple = () => {
        Linking.openURL('https://www.icloud.com')
            .catch(() => {
                Linking.openURL('https://www.icloud.com');
            })
    } 




    return (
        <View style={styles.buttoncontainer}>

        
        
        <FontAwesome.Button name='facebook'  onPress={openFace} color="white" backgroundColor="blue"   />
        <FontAwesome.Button name='google'  onPress={openGoogle} color="white" backgroundColor="green" />
        <FontAwesome.Button name='Apple'  onPress={openApple} color="white" backgroundColor="black" />
    </View>

   
    )
}


const styles = StyleSheet.create({
    container: { flex: 1,   justifyContent: "space-between", alignItems: 'space-between' , flexDirection :'row'} ,
    buttonContainer: {
        margin: 10 ,
        flexDirection:'row' ,
        justifyContent:"space-between"
       
          
    }
});

export default LinkingPage