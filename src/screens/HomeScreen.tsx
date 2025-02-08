import { Background, Text } from "@react-navigation/elements"
import { FlatList, StyleSheet, View } from "react-native"
import { StaticScreenProps } from "@react-navigation/native"

type HomeScreenProps = StaticScreenProps<{
	username: string
}>;

const HomeScreen = ( {route} : HomeScreenProps) => 
{
	return <View>
		<Text>Hello {route.params.username}!</Text>
		<FlatList
		data={["detail1", "detail2"]}
		renderItem={item =>
		<View style={{backgroundColor: 'blue'}}>
			<Text>{item.item}</Text>
		</View>}/>
	</View>
}

export default HomeScreen;