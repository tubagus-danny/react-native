import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e4e4e4',
    marginLeft: 10,
  },
});

export const Separator = () => <View style={styles.separator} />;

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
  <TouchableHighlight onPress={() => alert(text)}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableHighlight>
);

export default ListItem;
