import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {StackActions} from 'react-navigation';

export default class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToScan() {
    this.props.navigation.dispatch(StackActions.popToTop());
  }
  goToHistory() {
    this.props.navigation.navigate('History');
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.goToScan()}>
          <Text> Scan </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goToHistory()}>
          <Text> History </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
