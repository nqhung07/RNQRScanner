import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/Home';
import ScannerScreen from '../screens/ScannerScreen';

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  ScannerScreen: {
    screen: ScannerScreen,
  },
});

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
