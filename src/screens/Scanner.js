import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text, SafeAreaView} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from './header';

export default class Scanner extends Component {
  constructor(props) {
    super(props);
  }
  onSuccess = async e => {
    console.log(e);
    await this.props.navigation.navigate('ScanData', {
      data: e,
      scanner: this.scanner,
    });
  };
 

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={elem => {
            this.scanner = elem;
          }}
          cameraStyle={{height: Dimensions.get('window').height}}
          topViewStyle={{position: 'absolute', zIndex: 1}}
          topContent={
            <Header
              navigation={this.props.navigation}
              title="QRCode & BarCode Scan"
              color="white"
            />
          }
        />
      </SafeAreaView>
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
});
