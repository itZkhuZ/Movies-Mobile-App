import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';

const LargeCards = props => {
  return (
    <View key={props.index}>
      <TouchableOpacity onPress={props.navigation} style={{margin: 10}}>
        <Image
          source={{uri: props.Poster}}
          style={{
            width: 250,
            height: 370,
            borderRadius: 30,
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const NormalCards = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.navigation}
        key={props.index}
        style={{marginHorizontal: 20}}>
        <Image
          source={{uri: props.Poster}}
          style={{
            width: 100,
            height: 150,
            borderRadius: 20,
          }}
        />
        <Text style={{width: 100, color: '#fff'}}>{props.Title}</Text>
      </TouchableOpacity>
      <Text></Text>
    </>
  );
};

const StretchedCards = props => {
  const WIDTH = Dimensions.get('screen').width;
  return (
    <TouchableOpacity onPress={props.navigation} key={props.index} style={{}}>
      <Image
        source={{uri: props.Banner}}
        style={{
          width: WIDTH - 50,
          marginHorizontal: 10,
          height: 170,
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export {LargeCards, NormalCards, StretchedCards};
