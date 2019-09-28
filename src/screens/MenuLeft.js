import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {StackActions} from 'react-navigation';
import {Icon} from 'native-base';

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
          <Icon name="camera" style={{fontSize: 20, color: 'red'}} />
          <Text> Scan </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goToHistory()}>
          <Icon
            type="FontAwesome"
            name="history"
            style={{fontSize: 20, color: 'red'}}
          />
          <Text> History </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
