/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen';
import { createStaticNavigation, DarkTheme, DefaultTheme, StaticParamList } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const RootStack = createNativeStackNavigator({
	screens: {
		Login: LoginScreen,
		Home: HomeScreen
	},
});

const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

const App = () => {
	const isDarkMode: boolean = useColorScheme() === "dark";

	return <Navigation theme={isDarkMode ? DarkTheme : DefaultTheme}/>
}

export default App;
