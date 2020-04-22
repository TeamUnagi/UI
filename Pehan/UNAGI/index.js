/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './testTrending'
import ScreenMove from './ScreenMove'
import Map from './Map'

AppRegistry.registerComponent(appName, () => Map);
