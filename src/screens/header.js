import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{}}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Icon
            ios="ios-menu"
            android="md-menu"
            style={{fontSize: 40, color: 'red'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
