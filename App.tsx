/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
	Button,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	useColorScheme,
	View,
} from 'react-native';

import {
	Colors
} from 'react-native/Libraries/NewAppScreen';

type MyOwnProps = {
	initialState: boolean
}

const MyOwnComponent = (props: MyOwnProps) =>
{
	const [getActive, setActive] = useState(props.initialState);

	return (
		<View>
		<Text selectable={getActive}>
			{getActive ? "you can select me" : "you can select me NOT"}
		</Text>
		<Button
			onPress={() => setActive(!getActive)}
			title="switch the selectability"/>
		</View>
	)
}

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
	backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
	<SafeAreaView style={backgroundStyle}>
		<StatusBar
		barStyle={isDarkMode ? 'light-content' : 'dark-content'}
		backgroundColor={backgroundStyle.backgroundColor}
		/>
		<Text>
			just some text
		</Text>
		<TextInput
			placeholder="some text here"/>
		<MyOwnComponent initialState={true}/>
		<MyOwnComponent initialState={false}/>
	</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
	marginTop: 32,
	paddingHorizontal: 24,
	},
	sectionTitle: {
	fontSize: 24,
	fontWeight: '600',
	},
	sectionDescription: {
	marginTop: 8,
	fontSize: 18,
	fontWeight: '400',
	},
	highlight: {
	fontWeight: '700',
	},
});

export default App;
