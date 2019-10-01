import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

type Props = {};
export default class Category extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      kategori: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://mhs.rey1024.com/apibudaya/getListCategory.php')
      .then(res => {
        const kategori = res.data;
        console.log(kategori);
        this.setState({kategori});
      });
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({item}) => (
    <ListItem
      title={item.nama}
      leftAvatar={{ source: {uri: 'http://wadaya.rey1024.com/upload/kategori/'+item.gambar } }}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}> Kategori Budaya </Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.kategori}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  header: {
    height: 70,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
