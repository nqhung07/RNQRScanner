/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    this.getDataStore();
    console.log("dataSource: ", this.state.dataSource);
    
  }
  getDataStore = async () => {
    try {
      //get data from AsyncStorage
      const currentValue = await AsyncStorage.getItem('scandata');
      const currentValueObj = JSON.parse(currentValue);
      console.log('currentValue:', currentValueObj);

      this.setState({dataSource: currentValueObj}) ;

    } catch {
      console.log('get data error');
    }
  };
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('scandata');
      this.setState({dataSource: []}) ;
      console.log('Remove done');

    } catch (e) {
      console.log('Remove err');
    }
  };

  renderItem = item => {
        return (
            <TouchableOpacity
              style={styles.flatView}
              onPress={ () => {this.props.navigation.navigate('HistoryDetail',{item:item})} }>
              <Text style={styles.itemName}>Item: {item.data}</Text>
            </TouchableOpacity>
          );
      }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.removeValue();
          }}>
          <Text>Remove Items</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}

        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    flatView: {
        borderBottomColor: "steelblue",
        borderBottomWidth: 2,
        padding: 15
    },
    itemName: {
        fontSize: 18,
    },
});
