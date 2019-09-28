import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackActions} from 'react-navigation';

export default class ScanData extends Component {
  constructor(props) {
    super(props);

    this.state = {qrCodeData: ' ', scanner: undefined};
  }

  componentDidMount() {
    //The code bellow will receive the props passed by ScannerScreen

    const qrCodeData = this.props.navigation.getParam('data', 'No data read');
    const scanner = this.props.navigation.getParam('scanner', () => false);

    this.setState({qrCodeData: qrCodeData, scanner: scanner});
    
  }

  componentWillUnmount(){
    this.state.scanner.reactivate();
  }

  scanAgain() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.qrCodeData}</Text>
        <Button title={'Scan QRCode Again'} onPress={() => this.scanAgain()} />
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
