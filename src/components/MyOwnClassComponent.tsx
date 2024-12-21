import React from "react";
import { Button, Text, View } from "react-native";

type MyOwnClassProps = {
	message: string | null
}

type MyOwnClassState = {
	text: string | null
}

class MyOwnClassComponent extends React.Component<MyOwnClassProps, MyOwnClassState>
{
	state: MyOwnClassState = {
		text: this.props.message
	}

	render(): React.ReactNode {
		return (
			<View>
				<Button onPress={this.changeText} title="Click me to change the state!"/>
				<Text>
					{this.state?.text ?? "oh no! null provided"}
				</Text>
			</View>
		)
	}

	changeText = () => this.setState({
		text: "now I changed it"
	});
}

export default MyOwnClassComponent;