import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

export default class Row extends Component {

  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#D6EFFF',
          flex: 1,
        }}
      />
    );
  }

  renderBackface() {
    const onPress = this.props.onPress;
    return (
      <View style={{ flex: 1 }}>

        <FoldView
          renderFrontface={this.renderBlankFace}
          renderBackface={this.renderInnerBackFace}
        >
          <AdditionalInfoCard onPress={onPress} data={this.props.data}/>
        </FoldView>

      </View>
    );
  }

  renderInnerBackFace() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#BDC2C9',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <View
          style={{
            backgroundColor: this.props.color,
            flex: 1,
            margin: 14,
            borderRadius: 2,
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPress}
          >
            <Text>
              Close
            </Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  

  render() {
    const onPress = this.props.onPress;
    const data = this.props.data? this.props.data: '';
   
  return(
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}
      >

        <View style={{ flex: 1 }} >

          <View
            style={{
              flex: 1,
              paddingBottom: 10,
              padding: 16,
            }}
          >
          
           <Text style={{fontWeight:'400',color:'grey',fontSize:11}}>PROFILE</Text>
            

            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}
            >

              <TouchableHighlight
                onPress={onPress}
              >
                <Image source={require('../images/1.jpg')} 
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10     
                    
                  }}
                />
              </TouchableHighlight>

              <View
                style={{
                  flex: 1
                }}
              >
                <Text style={{fontWeight:'600',fontSize:15}}>{data.name}</Text>
                
                
              </View>

            </View>

          </View>

          <View style={{ flex: 1 }}>

            <FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderBackface}
            >
              <ProfileDetailCard onPress={onPress} data={this.props.data} />
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
