import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={() => this.goToScan()}>
          <Icon
            name="camera"
            style={{fontSize: 25, color: '#00A4FF', marginRight: 5}}
          />
          <Text style={styles.text}> Scan </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.goToHistory()}>
          <Icon
            type="FontAwesome"
            name="history"
            style={{fontSize: 25, color: '#00A4FF', marginRight: 5}}
          />
          <Text style={styles.text}> History </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
    alignItems: "flex-end",
  },
  text:{
    fontSize: 18
  }
});
