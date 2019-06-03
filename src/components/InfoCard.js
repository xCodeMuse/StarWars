import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,Image
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    overflow: "hidden"
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#6833FF',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#FCFCFC',
  },
});

export default ({ onPress,data,color,pic}) => {
  const value = data?data:'';
 
  return(

  <View style={styles.container} >

    <View style={{
    flex: 1,
    backgroundColor: color,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  }}>
  {console.log(pic)}
    <TouchableHighlight
                onPress={onPress}
              >
    <Image source={require('../images/3.jpg')} 
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10,borderRadius:3     
                    
                  }}
                />
                </TouchableHighlight>
                <TouchableHighlight
            style={{
              backgroundColor:'white',borderRadius:2,alignItems:'center',marginBottom:10
            }}
            onPress={onPress}
          >
        <Text style={{fontWeight:'200',color:'grey'}}>More Info?</Text>
        </TouchableHighlight>

      <View>
        
      
        
        <Text style={{fontWeight:'400',color:'white',fontSize:12,paddingBottom:5}}>GENDER</Text>
          <Text style={{color:'white',textTransform:'uppercase',fontWeight:'800',letterSpacing:1,fontSize:16}}>{value.gender}</Text>
       
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={{fontWeight:'400',color:'grey',fontSize:12,paddingBottom:5}}>NAME</Text>
      <Text style={{color:'black',textTransform:'uppercase',fontWeight:'800',fontSize:16}}>{value.name}</Text>
      </View>

      <View style={{ flexDirection: 'row',alignItems:'flex-end' }}>
        <View style={{ flex: 1 }}>
        <Text style={{fontWeight:'400',color:'grey',fontSize:12,paddingBottom:5}}>BIRTH YEAR</Text>
          <Text style={{color:'grey',textTransform:'uppercase',fontWeight:'800',letterSpacing:1,fontSize:16}}>{value.birth_year}</Text>
        </View>

        <View style={{ flex: 1 }}>
        <Text style={{fontWeight:'400',color:'grey',fontSize:12,paddingBottom:5}}>EYE COLOR</Text>
        <Text style={{color:'grey',textTransform:'uppercase',fontWeight:'800',letterSpacing:1,fontSize:16}}>{value.eye_color}</Text>
        </View>
      </View>
    </View>

  </View>
);
}