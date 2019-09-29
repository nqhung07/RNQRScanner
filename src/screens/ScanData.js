import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from 'react-native';
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

    this.setState({qrCodeData: CodeData, scanner: scanner});

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
      <SafeAreaView style={styles.container}>
        <Header
          navigation={this.props.navigation}
          title="Scan result"
          rightIcon="camera"
          color="white"
          background="steelblue"
          rightAction={() => this.scanAgain()}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Type: {this.state.qrCodeData.type}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(this.state.qrCodeData.data)}>
            <Text style={styles.text}>Data: {this.state.qrCodeData.data}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
});
