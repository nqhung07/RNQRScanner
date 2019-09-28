import React, {Component} from 'react';
import {Text, View} from 'react-native';

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
      <View>
        <Text>Type: {this.state.CodeData.type}</Text>
        <Text>Data: {this.state.CodeData.data}</Text>
      </View>
    );
  }
}
