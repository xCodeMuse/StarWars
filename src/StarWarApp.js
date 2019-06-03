import React,{Component} from 'react';
import starWars from './api/starWars';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Row from './Row';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#A7A4A4',
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});


export default class StarWarApp extends Component{
   constructor(props){
     super(props);
     this.state ={
       res1: '',
       res2:'',
       res3: '',
       res4:''
     }
   }

  callApi = async () =>{
    const req1= await starWars.get('/people/1/');
    const req2 = await starWars.get('/people/4/');
    const req3 = await starWars.get('/people/6/');
    const req4 = await starWars.get('/people/7/');
    this.setState({res1: req1.data,res2:req2.data,res3: req3.data,res4:req4.data})
  }


 componentDidMount = () =>{
    this.callApi()
  }
  
render(){
  return(
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <ScrollView
        style={styles.scrollView}
      >
      
        <Row zIndex={100} data={this.state.res1} color={'#F874F0'}/>
        <Row zIndex={90} data={this.state.res4} color={'#6833FF'}/>
        <Row zIndex={80} data={this.state.res3} color={'#08A021'}/>
        <Row zIndex={70} data={this.state.res2} color={'#E67E22'}/>
        
      </ScrollView>
    </View>
  );
  
}
} 