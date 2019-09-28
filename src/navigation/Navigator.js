/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Dimensions} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import HistoryScreen from '../screens/History';
import HistoryDetailScreen from '../screens/HistoryDetail'
import ScannerScreen from '../screens/Scanner';
import ScanDataScreen from '../screens/ScanData';
import MenuScreen from '../screens/MenuLeft';

const WIDTH = Dimensions.get('window').width;

const StackScanConfig = {
  initialRouteName: 'Scan',
};

const StackScan = createStackNavigator(
  {
    Scan: {
      screen: ScannerScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    ScanData: {
      screen: ScanDataScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    HistoryDetail: {
      screen: HistoryDetailScreen,
      navigationOptions: ({ navigation }) => ({
        // header: null
      })
    },
  },
  StackScanConfig,
);

const DrawerConfig = {
  contentComponent: ({navigation}) => {
    return <MenuScreen navigation={navigation} />;
  },
  initialRouteName: 'StackScan',
  // drawerBackgroundColor: '#fbd',
  drawerWidth: WIDTH * 0.7,
  contentOptions: {
    activeTintColor: '#f00',
    activeBackgroundColor: '#6b52ae',
  },
  drawerType: 'slide',
  overlayColor: '50%',
};

const DrawerNavigator = createDrawerNavigator(
  {
    StackScan: {
      screen: StackScan,
    },
    
  },
  DrawerConfig,
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
