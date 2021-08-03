import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Palanquin_400Regular,
	Palanquin_600SemiBold
} from '@expo-google-fonts/palanquin';
import { ActivityIndicator, Button, SafeAreaView, StatusBar, Text, View } from 'react-native';

import styles from './src/libs/styles';

export default function App() {
	const [fontsLoaded] = useFonts({
		Palanquin_400Regular, Palanquin_600SemiBold
	});
	const [loading, setLoading] = useState(false)
	const [advice, setAdvice] = useState('')

	async function loadAdvice() {
		setLoading(true)

		fetch(`https://api.quotable.io/random?maxLength=50`)
			.then(response => { return response.json() })
			.then(data => {
				const result = data.content
				setAdvice(result)
			})

		setLoading(false)
	}

	if (!fontsLoaded)
		return (
			<>
				<AppLoading />
				<StatusBar hidden />
			</>
		)
	if (loading) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator size="large" color="#0c9" />
			</View>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
			{!advice
				?
				<View>
					<Text style={styles.title}>HomeScreen</Text>
					<Button
						onPress={loadAdvice}
						title="loadAdvice"
					></Button>
				</View>
				:
				<View>
					<Text>{advice}</Text>
					<Button
						onPress={() => setAdvice('')}
						title="reset"
					></Button>
				</View>
			}
		</SafeAreaView>
	);
}
