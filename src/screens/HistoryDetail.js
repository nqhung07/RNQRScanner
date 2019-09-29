import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'native-base';

export default class HistoryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CodeData: ' ',
    };
  }

  componentDidMount() {
    const CodeData = this.props.navigation.getParam('item');
    this.setState({CodeData: CodeData});
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              type="AntDesign"
              name="back"
              style={{fontSize: 35, color: 'white'}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: 'white'}}>Detail</Text>
          <Text></Text>
        </View>

        <View style={styles.displayData}>
          <Text style={styles.item}>Type: {this.state.CodeData.type}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(this.state.CodeData.data)}>
            <Text style={styles.item}>Data: {this.state.CodeData.data}</Text>
          </TouchableOpacity>

          <Text style={styles.item}>
            rawData: {this.state.CodeData.rawData}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'skyblue',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  displayData: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
});
