import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Scanner extends Component {
  constructor(props) {
    super(props);
  }
  onSuccess = async e => {
    console.log(e);
    await this.props.navigation.navigate('ScanData', {
      data: e.data,
      scanner: this.scanner,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={elem => {
            this.scanner = elem;
          }}
          cameraStyle={{height: Dimensions.get('window').height}}
        />
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
});
