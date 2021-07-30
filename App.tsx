import React from 'react';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Palanquin_400Regular,
	Palanquin_600SemiBold
} from '@expo-google-fonts/palanquin';
import { StatusBar } from 'react-native';

import { HomeScreen } from './src/screens';

export default function App() {
	const [fontsLoaded] = useFonts({
		Palanquin_400Regular, Palanquin_600SemiBold
	});

	if (!fontsLoaded)
		return (
			<>
				<AppLoading />
				<StatusBar hidden />
			</>
		)

	return (
		<HomeScreen />
	);
}
