import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Palanquin_400Regular,
	Palanquin_600SemiBold
} from '@expo-google-fonts/palanquin';
import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native';

import styles from './src/libs/styles';

export default function App() {
	const [fontsLoaded] = useFonts({
		Palanquin_400Regular, Palanquin_600SemiBold
	});
	const [advice, setAdvice] = useState('')

	async function loadAdvice() {
		try {
			const response = await fetch(`https://api.adviceslip.com/advice`)
			const json = await response.json()

			setAdvice(json.slip.advice)
		}
		catch (error) {
			throw new Error('Algo Deu Errado')
		}
	}

	async function resetAdvice() {
		setAdvice('')
	}

	if (!fontsLoaded)
		return (
			<>
				<AppLoading />
				<StatusBar hidden />
			</>
		)

	return (
		<SafeAreaView style={styles.container}>
			{advice
				?
				<View>
					<Text>{advice}</Text>
					<Button
						onPress={resetAdvice}
						title="discart"
					></Button>
				</View>
				:
				<View>
					<Text style={styles.title}>HomeScreen</Text>
					<Button
						onPress={loadAdvice}
						title="loadAdvice"
					></Button>
				</View>
			}
		</SafeAreaView>
	);
}
