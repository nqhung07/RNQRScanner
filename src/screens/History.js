/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './header';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    this.getDataStore();
    console.log('dataSource: ', this.state.dataSource);
  }
  getDataStore = async () => {
    try {
      //get data from AsyncStorage
      const currentValue = await AsyncStorage.getItem('scandata');
      const currentValueObj = JSON.parse(currentValue);
      console.log('currentValue:', currentValueObj);

      this.setState({dataSource: currentValueObj});
    } catch {
      console.log('get data error');
    }
  };
  onRemoveData() {
    // Works on both iOS and Android
    Alert.alert(
      'Delete all history data',
      'Click Ok to Delete, Cancel to exit',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.removeValue()},
      ],
      {cancelable: false},
    );
  }
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('scandata');
      this.setState({dataSource: []});
      console.log('Remove done');
    } catch (e) {
      console.log('Remove err');
    }
  };

  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.flatView}
        onPress={() => {
          this.props.navigation.navigate('HistoryDetail', {item: item});
        }}>
        <Text style={styles.itemName}>Type: {item.type}</Text>
        <Text style={styles.itemName}>Item: {item.data}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    var key = 0;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          navigation={this.props.navigation}
          title="History"
          rightIcon="trash"
          color="white"
          background="steelblue"
          rightAction={() => this.onRemoveData()}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({item, index}) => this.renderItem(item, index)}
          keyExtractor={(item, index) => `${index}`}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 2,
    backgroundColor: 'skyblue',
  },
  itemName: {
    fontSize: 18,
  },
});
