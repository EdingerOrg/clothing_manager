import { Background, Text } from "@react-navigation/elements"
import { FlatList, StyleSheet, View } from "react-native"

const DetailScreen = () => 
{
	return <View>
		<FlatList
		data={["detail1", "detail2"]}
		renderItem={item =>
		<View style={{backgroundColor: 'blue'}}>
			<Text>item</Text>
		</View>}/>
	</View>
}

export default DetailScreen;