import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Scanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onReactivate: false,
    };
  }
  onSuccess = async e => {
    console.log(e);
    this.setState({onReactivate: false});
    await this.props.navigation.navigate('ScanData', {
      data: e.data,
      scanner: this.scanner,
    });
  };

  componentDidMount(){
    this.state = {
      onReactivate: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          reactivate={this.state.onReactivate}
          // reactivateTimeout={100}
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
