import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {TextColor, TextTitle} from '../../constants/Text';
import {getDatabase, ref, child, get} from 'firebase/database';
import {
  LargeCards,
  NormalCards,
  StretchedCards,
} from '../../components/MoviesCard.js';

const AllMovies = ({navigation}) => {
  const [Movies, setMovies] = useState({});

  useEffect(() => {
    dataGet();
  }, []);

  const dataGet = async () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Movies/`))
      .then(snapshot => {
        if (snapshot.val() !== null) {
          setMovies({...snapshot.val()});
        } else {
          console.log('No data available');
          setMovies({});
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text></Text>
        <Text style={[TextColor, TextTitle, {marginLeft: 10, marginTop: 20}]}>
          Movies
        </Text>
        <Text></Text>
        <ScrollView
          horizontal
          style={{height: '100%'}}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
          pagingEnabled>
          {Object.keys(Movies)
            .filter(function (id) {
              return (
                Movies[id].ComingSoon == null && Movies[id].Type == 'movie'
              );
            })
            .slice(0, 5)
            .map(function (id, index) {
              return (
                <LargeCards
                  navigation={() =>
                    navigation.navigate('MovieDtl', {movieSelected: Movies[id]})
                  }
                  Poster={Movies[id].Poster}
                  index={index}
                  Title={Movies[id].Title}
                  Genre={Movies[id].Genre}
                  Year={Movies[id].Year}
                />
              );
            })}
        </ScrollView>
        <View style={{height: 285, borderRadius: 20}}>
          <Text></Text>
          <Text style={[TextColor, TextTitle, {marginLeft: 10}]}>
            Coming Soon
          </Text>
          <Text></Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.keys(Movies)
              .filter(function (id) {
                return Movies[id].ComingSoon == true;
              })
              .map(function (id, index) {
                return (
                  <>
                    <NormalCards
                      navigation={() =>
                        navigation.navigate('MovieDtl', {
                          movieSelected: Movies[id],
                        })
                      }
                      Poster={Movies[id].Poster}
                      index={index}
                      Title={Movies[id].Title}
                    />
                  </>
                );
              })}
          </ScrollView>
        </View>

        <View style={{height: 250, borderRadius: 20}}>
          <Text></Text>
          <Text style={[TextColor, TextTitle, {marginLeft: 10}]}>Trending</Text>
          <Text></Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToAlignment="center">
            {Object.keys(Movies)
              .filter(function (id) {
                return Movies[id].imdbRating > 8;
              })
              .slice(0, 5)
              .map(function (id, index) {
                return (
                  <StretchedCards
                    navigation={() =>
                      navigation.navigate('MovieDtl', {
                        movieSelected: Movies[id],
                      })
                    }
                    Banner={Movies[id].Banner}
                    index={index}
                  />
                );
              })}
          </ScrollView>
        </View>
        <View style={{height: 260}}>
          <Text></Text>
          <Text style={[TextColor, TextTitle, {marginLeft: 10}]}>
            TV Series
          </Text>
          <Text></Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.keys(Movies)
              .filter(function (id) {
                return Movies[id].Type == 'series';
              })
              .map(function (id, index) {
                return (
                  <NormalCards
                    navigation={() =>
                      navigation.navigate('MovieDtl', {
                        movieSelected: Movies[id],
                      })
                    }
                    Poster={Movies[id].Poster}
                    index={index}
                    Title={Movies[id].Title}
                  />
                );
              })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllMovies;
