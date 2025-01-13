/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import { createStaticNavigation, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import DetailScreen from './src/screens/DetailScreen';

const RootStack = createNativeStackNavigator({
	screens: {
		Home: HomeScreen,
		Details: DetailScreen
	},
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
	const isDarkMode: boolean = useColorScheme() === "dark";

	return <Navigation theme={isDarkMode ? DarkTheme : DefaultTheme}/>
}

export default App;
