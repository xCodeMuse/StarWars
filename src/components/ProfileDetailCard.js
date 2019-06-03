import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#BDC2C9',
  },
});

export default ({data}) => {
  const value = data?data:'';
  return(
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <Text style={{fontWeight:'400',color:'grey',fontSize:11,paddingBottom:5}}>HEIGHT</Text>
      <Text style={{fontWeight:'600',fontSize:15}}>{value.height}.Cm</Text>
    </View>

    <View style={{ flex: 1 }}>
      <Text style={{fontWeight:'400',color:'grey',fontSize:11,paddingBottom:5}}>MASS</Text>
      <Text style={{fontWeight:'600',fontSize:15}}>{value.mass}</Text>
    </View>
  </View>
)};
