import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './header';

export default class ScanData extends Component {
  constructor(props) {
    super(props);

    this.state = {qrCodeData: ' ', scanner: undefined};
  }

  componentDidMount() {
    //The code bellow will receive the props passed by ScannerScreen
    // this.removeValue()
    const CodeData = this.props.navigation.getParam('data', 'No data read');
    const scanner = this.props.navigation.getParam('scanner', () => false);

    this.setState({qrCodeData: CodeData.data, scanner: scanner});

    this.SaveData(CodeData);
  }

  componentWillUnmount() {
    this.state.scanner.reactivate();
  }

  scanAgain() {
    this.props.navigation.goBack();
  }

  SaveData = async data => {
    var CodeDataStore = [];
    try {
      //get data from AsyncStorage
      const value = await AsyncStorage.getItem('scandata');
      console.log('value: ', value);

      if (value == null) {
        CodeDataStore = [];
      } else {
        let valueObj = JSON.parse(value);
        console.log('valueObj:', valueObj);
        CodeDataStore = valueObj;
      }

      CodeDataStore.push(data);
      console.log('CodeDataStore:', CodeDataStore);

      //save to AsyncStorage
      await AsyncStorage.setItem('scandata', JSON.stringify(CodeDataStore));

      // get data after save to AsyncStorage
      const currentValue = await AsyncStorage.getItem('scandata');
      console.log('currentValue:', currentValue);
    } catch {
      console.log('save error');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View>
          <Text style={styles.text}>{this.state.qrCodeData}</Text>
          <Button
            title={'Scan QRCode Again'}
            onPress={() => this.scanAgain()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
