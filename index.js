import { registerRootComponent } from 'expo';

//import App from './App';
//import App from '../weather/1/App'
//import App from '../weather/2/App'
import App from '../weather/3/App'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
