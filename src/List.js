import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default class List extends Component {
  render() {
    return (
      <View>
        <Text> ini list </Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
