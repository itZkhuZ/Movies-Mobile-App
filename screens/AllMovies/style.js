import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    // paddingLeft: 20,
    backgroundColor: Colors.BG,
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
