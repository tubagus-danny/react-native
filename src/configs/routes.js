import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../Home';
import List from '../List';

export const Drawer = createDrawerNavigator({
  Home: Home,
  List: List,
});
