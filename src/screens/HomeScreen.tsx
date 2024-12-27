import { StatusBar, Text, TextInput, useColorScheme, View } from "react-native";
import MyOwnComponent from "../components/MyOwnComponent";
import MyOwnClassComponent from "../components/MyOwnClassComponent";
import { useTheme } from "@react-navigation/native";

const HomeScreen = () => 
{
	return (
	<View>
		<StatusBar
		barStyle={!useTheme().dark ? 'light-content' : 'dark-content'}
		/>
		<Text>
			just some text
		</Text>
		<TextInput
			placeholder="some text here"/>
		<MyOwnComponent initialState={true}/>
		<MyOwnComponent initialState={false}/>
		<MyOwnClassComponent message={null}/>
		<MyOwnClassComponent message="I have a different message than null"/>
	</View>
	);
}

export default HomeScreen;