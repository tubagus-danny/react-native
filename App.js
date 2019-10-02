import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ListItem, {Separator} from './src/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={goods}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListItem
              {...item}
              // eslint-disable-next-line no-alert
              onSwipeFromLeft={() => alert('swiped from left')}
              // eslint-disable-next-line no-alert
              onRightPress={() => alert('pressed right!')}
            />
          )}
          itemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
  }
}

const goods = [
  {id: '0', text: 'Soap'},
  {id: '1', text: 'Shampoo'},
  {id: '2', text: 'Conditioner'},
  {id: '3', text: 'Toothpaste'},
  {id: '4', text: 'Tooth Brush'},
];
