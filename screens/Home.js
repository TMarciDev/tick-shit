import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	Dimensions,
	Pressable,
	TextInput,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
	const [goal, setGoal] = useState(500);
	return (
		<SafeAreaView style={styles.container}>
			<Text>Goal: {goal}</Text>
			<Pressable
				onPress={() => {
					navigation.navigate('Game', { goal: goal });
				}}
				style={styles.button}
			>
				<Text style={styles.text}>Start</Text>
			</Pressable>
			<TextInput
				style={styles.input}
				onChangeText={(e) => {
					e > 1 && setGoal(e);
				}}
				placeholder='Goal:'
				keyboardType='numeric'
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	input: {
		height: 40,
		width: 100,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		textAlign: 'center',
	},
});

export default Home;
