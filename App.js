//App Imports
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

//Ui Imports
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextColor} from './constants/Text';
import Colors from './constants/Colors';

//Screen Imports
import AllMovies from './screens/AllMovies/AllMovies';
import MovieDtl from './screens/MovieDtl/MovieDtl';

const Stack = createNativeStackNavigator();

function App() {
  const firebaseConfig = {
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    authDomain: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    databaseURL: 'https://XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.firebaseio.com/',
    projectId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    storageBucket: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.appspot.com',
    messagingSenderId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    measurementId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  return (
    <>
      <StatusBar barStyle={Colors.barStyle} backgroundColor={Colors.SBG} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllMovies"
            component={AllMovies}
            options={{
              headerBackVisible: false,
              headerLeft: () => (
                <Icon
                  name="options-outline"
                  size={32}
                  color={TextColor.color}
                />
              ),
              headerRight: () => (
                <Icon name="search-outline" size={32} color={TextColor.color} />
              ),
              headerTitleAlign: 'center',
              headerTransparent: true,
              headerTintColor: TextColor.color,
              title: 'Pocket TV',
            }}
          />
          <Stack.Screen
            name="MovieDtl"
            component={MovieDtl}
            options={{
              headerTransparent: true,
              headerTintColor: TextColor.color,
              title: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;
