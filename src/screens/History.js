/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class History extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.getDataStore();
  }
  getDataStore = async () => {
    try {
      //get data from AsyncStorage
      const currentValue = await AsyncStorage.getItem('scandata');
      const currentValueObj = JSON.parse(currentValue);
      console.log('currentValue:', currentValueObj);
      return currentValueObj;
    } catch {
      console.log('get data error');
    }
  };
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('scandata');
      console.log('Remove done');
    } catch (e) {
      console.log('Remove err');
    }
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.getDataStore();
          }}>
          <Text>Show Items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.removeValue();
          }}>
          <Text>Remove Items</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
