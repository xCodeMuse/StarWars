import React from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,Image,
  Text,TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    flexDirection: 'column',
    overflow: "hidden"
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ({ data,color }) => {
  const value = data?data:'';
  return(
  <View style={styles.container}>
  <ImageBackground source={require('../images/bg.jpg')} resizeMode='cover' style={{flex: 1,
      width: "100%",
      height: "100%"}}>


    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: color,
        height: 50,
        padding:10
        
      }}
    >
              
    <Image source={require('../images/menu.png')} 
                  style={{
                    width: 35,
                    height: 35
                  }}
                />
               
    </View>

    <View style={styles.card}>
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding:5,
          paddingBottom: 0,
        }}
      >
      <Text style={{fontWeight:'400',color:'white',fontSize:11}}>GENDER</Text>
        <Text style={{fontWeight:'400',color:'white',fontSize:11,marginLeft:15}}>BIRTH YEAR</Text>
        <Text style={{fontWeight:'400',color:'white',fontSize:11}}>EYE COLOR</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          paddingBottom: 0,
        }}
      >
        <Text style={{color:'white',paddingBottom:10,textTransform:'uppercase',fontWeight:'600',fontSize:16}}>{value.gender}</Text>
        <Text style={{color:'white',paddingBottom:10,textTransform:'uppercase',fontWeight:'600',letterSpacing:1,fontSize:16}}>{value.birth_year}</Text>
        <Text style={{color:'white',paddingBottom:10,textTransform:'uppercase',fontWeight:'600',fontSize:16}}>{value.eye_color}</Text>
      </View>
    </View>
    </ImageBackground>
  </View>
);}
