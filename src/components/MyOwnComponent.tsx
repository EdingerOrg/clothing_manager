import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import buttonStyles from "../assets/styles/buttonStyles";


type MyOwnProps = {
	initialState: boolean
}

const MyOwnComponent = (props: MyOwnProps) =>
{
	const [active, setActive] = useState(props.initialState);
	const [numberOfPresses, setNumberOfPresses] = useState(0);

	return (
		<View>
		<Text selectable={active}>
			{active ? "you can select me" : "you can select me NOT"}
		</Text>
		<Text>
			{numberOfPresses}
		</Text>
		<TouchableOpacity
			onPress={
				() => {
					setActive(!active);
					setNumberOfPresses(numberOfPresses + 1);
				}
			}
			style={buttonStyles.defaultButton}>
			<Text>Switch the selectability</Text>
		</TouchableOpacity>
		</View>
	)
}

export default MyOwnComponent;