import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> ini home </Text>
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}
