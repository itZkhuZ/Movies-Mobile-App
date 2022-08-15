import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {
  TextColor,
  TextHeading,
  TextPara,
  TextTitle,
} from '../../constants/Text';

const MovieDtl = ({navigation, route}) => {
  return (
    // {route.params.movieSelected.Title}
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: route.params.movieSelected.Poster}}
          blurRadius={10}
          style={{
            width: 300,
            height: 400,
            alignSelf: 'center',
            borderRadius: 40,
            borderColor: 'grey',
            borderWidth: 2,
          }}
        />
        <Image
          source={{uri: route.params.movieSelected.Poster}}
          style={{
            left: 40,
            borderColor: 'grey',
            borderWidth: 2,
            width: 300,
            height: 400,
            alignSelf: 'center',
            borderRadius: 40,
            bottom: 10,
            position: 'absolute',
          }}
        />
      </View>

      <ScrollView>
        <Text style={[TextColor, TextTitle, {margin: 10}]}>Movie Images</Text>
        <View style={[styles.row, {justifyContent: 'space-evenly'}]}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={route.params.movieSelected.Images}
            renderItem={({item, index}) => {
              return (
                <Image
                  key={index}
                  source={{uri: item}}
                  style={{
                    width: 120,
                    height: 70,
                    margin: 5,
                    alignSelf: 'center',
                    borderRadius: 20,
                    borderColor: 'grey',
                    borderWidth: 2,
                  }}
                />
              );
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <Text style={[TextColor, TextTitle, {width: 250}]}>
              {route.params.movieSelected.Title}
            </Text>
            <Text style={[TextColor, TextHeading]}>
              {route.params.movieSelected.Year}
            </Text>
          </View>
          <Text
            style={[TextColor, TextHeading, {width: 300, fontWeight: '400'}]}>
            {route.params.movieSelected.Actors}
          </Text>
          <Text></Text>
          <View style={styles.row}>
            <View>
              <Text style={[TextColor, TextTitle]}>Directed By</Text>
              <Text style={[TextColor, TextHeading]}>
                {route.params.movieSelected.Director}
              </Text>
            </View>
            <View>
              <Text style={[TextColor, TextTitle]}>Ratings</Text>
              <Text style={[TextColor, TextHeading]}>
                {route.params.movieSelected.imdbRating}
              </Text>
            </View>
            <View>
              <Text style={[TextColor, TextTitle]}>Rated</Text>
              <Text style={[TextColor, TextHeading]}>
                {route.params.movieSelected.Rated}
              </Text>
            </View>
          </View>
          <Text></Text>
          <Text style={[TextColor, TextTitle]}>Plot</Text>
          <Text style={[TextColor, TextHeading, {marginBottom: 20}]}>
            {route.params.movieSelected.Plot}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDtl;
