import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[styles.container, {backgroundColor: this.props.background}]}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Icon
            ios="ios-menu"
            android="md-menu"
            style={{fontSize: 35, color: this.props.color}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: this.props.color}}>
          {this.props.title}
        </Text>
        <TouchableOpacity onPress={() => this.props.rightAction()}>
          <Icon
            name={this.props.rightIcon}
            style={{fontSize: 35, color: this.props.color}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
