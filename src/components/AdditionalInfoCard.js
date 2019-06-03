import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default ({ data }) => {
  const value = data?data:'';
  return(
  <View
    style={{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',

      backgroundColor: '#FFFFFF',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#BDC2C9',
    }}
  >
    <View style={{ flex: 1 }}>
    <Text style={{fontWeight:'400',color:'grey',fontSize:11,paddingBottom:5}}>HAIR COLOR</Text>
      <Text style={{fontWeight:'500',fontSize:15,textTransform:'uppercase'}}>{value.hair_color}</Text>
    </View>

    <View style={{ flex: 1 }}>
    <Text style={{fontWeight:'400',color:'grey',fontSize:11,paddingBottom:5}}>SKIN COLOR</Text>
      <Text style={{fontWeight:'500',fontSize:15,textTransform:'uppercase'}}>{value.skin_color}</Text>
    </View>

  </View>
);}
