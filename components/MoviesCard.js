import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextColor, TextTitle, TextHeading, TextPara} from '../constants/Text';

const LargeCards = props => {
  const WIDTH = Dimensions.get('screen').width;
  const HEIGHT = Dimensions.get('screen').height;
  // route.params.custobj.partyid
  return (
    <View key={props.index}>
      <TouchableOpacity onPress={props.navigation} style={{margin: 10}}>
        <Image
          source={{uri: props.Poster}}
          style={{
            // width: 290,
            // height: 430,
            width: 250,
            height: 370,
            // borderTopLeftRadius: 40,
            borderRadius: 30,
            // borderTopRightRadius: 40,
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
      {/* <View
        style={{
          bottom: 0,
          alignSelf: 'center',
          position: 'absolute',
          backgroundColor: '#15161890',
          width: WIDTH - 100,
          height: 100,
          padding: 20,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <View style={styles.row}>
          <Text style={[TextColor, TextHeading]}>{props.Title}</Text>
          <Text style={[TextColor, TextPara]}>{props.Year}</Text>
        </View>
        <Text style={[TextColor, TextPara]}>{props.Genre}</Text>
      </View> */}
    </View>
  );
};

const NormalCards = props => {
  const WIDTH = Dimensions.get('screen').width;
  const HEIGHT = Dimensions.get('screen').height;
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
  const HEIGHT = Dimensions.get('screen').height;
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
