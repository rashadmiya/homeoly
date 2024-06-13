/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Wrap your App component with SafeAreaProvider
const AppWithSafeAreaProvider = () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);

// Register the wrapped component
AppRegistry.registerComponent(appName, () => AppWithSafeAreaProvider);

