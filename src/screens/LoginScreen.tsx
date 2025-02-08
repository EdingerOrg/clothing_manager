import { StatusBar, TextInput, View, Button } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CustomNavigationType from "../types/CustomNavigationType";


var checkLoginCredentials = (navigation : CustomNavigationType, username : string, password : string) =>
{
	if (username == "Alex" && password == "password")
	{
		return navigation.navigate("Home", {username: username});
	};
} 

const LoginScreen = () => 
{
	const navigation = useNavigation();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			  setUsername("");
			  setPassword("");
		});
		return unsubscribe;
	 }, [navigation]);

	return (
	<View>
		<StatusBar
			barStyle={!useTheme().dark ? 'light-content' : 'dark-content'}/>
		<TextInput
			value={username}
			onChangeText={newText => setUsername(newText)}/>
		<TextInput
			secureTextEntry={true}
			value={password}
			onChangeText={newText => setPassword(newText)}/>
		<Button onPress={() => checkLoginCredentials(navigation, username, password)} title="Login"/>
	</View>
	);
}

export default LoginScreen;