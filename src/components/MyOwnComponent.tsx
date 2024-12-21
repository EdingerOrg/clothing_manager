import { useState } from "react";
import { Button, Text, View } from "react-native";


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
		<Button
			onPress={
				() => {
					setActive(!active);
					setNumberOfPresses(numberOfPresses + 1);
				}
			}
			title="switch the selectability"/>
		</View>
	)
}

export default MyOwnComponent;