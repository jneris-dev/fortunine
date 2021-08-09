import React, { useState } from 'react';
import {
	ActivityIndicator,
	Image,
	SafeAreaView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
	Clipboard,
	ToastAndroid,
	Linking
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	PatrickHandSC_400Regular
} from '@expo-google-fonts/patrick-hand-sc';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './src/libs/styles';
import colors from './src/libs/colors';

export default function App() {
	const [fontsLoaded] = useFonts({
		PatrickHandSC_400Regular
	});
	const [loading, setLoading] = useState(false)
	const [advice, setAdvice] = useState('')
	const [author, setAuthor] = useState('')

	async function loadAdvice() {
		setLoading(true)

		fetch(`https://api.quotable.io/random?maxLength=70`)
			.then(response => { return response.json() })
			.then(data => {
				const content = data.content
				const author = data.author
				setAdvice(content)
				setAuthor(author)
			})

		setLoading(false)
	}

	async function copyClipboard() {
		Clipboard.setString(advice)
		ToastAndroid.showWithGravity(
			"Copied advice",
			ToastAndroid.LONG,
			ToastAndroid.CENTER
		)
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
				<ActivityIndicator size="large" color={colors.background} />
			</View>
		);
	}
	return (
		<SafeAreaView style={[styles.container,
		advice ? { backgroundColor: colors.background } : null]}>
			{!advice
				?
				<View>
					<Text style={styles.title}>Touch the Cookie</Text>
					<Animatable.View animation="jello" duration={4500} easing="ease-in-out-cubic" iterationCount="infinite">
						<TouchableOpacity
							onPress={loadAdvice}
						>
							<Image
								source={require('./src/assets/cookie.png')}
								style={{ width: 200, height: 200 }}
							/>
						</TouchableOpacity>
					</Animatable.View>
				</View>
				:
				<View>
					<View style={styles.result}>
						<Text style={styles.quoteBack}>"</Text>
						<Text style={styles.adviceResult}>{advice}</Text>
						<Text style={styles.author}>─ {author}</Text>
					</View>
					<View style={styles.actions}>
						<TouchableOpacity
							onPress={() => setAdvice('')}
							style={styles.button}
						>
							<MaterialCommunityIcons name="refresh" size={25} color={colors.background} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => Linking.openURL('whatsapp://send?text=' + advice + '- Fortunine App')}
							style={styles.button}
						>
							<MaterialCommunityIcons name="whatsapp" size={25} color={colors.background} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={copyClipboard}
							style={styles.button}
						>
							<MaterialCommunityIcons name="content-copy" size={25} color={colors.background} />
						</TouchableOpacity>
					</View>
				</View>
			}
		</SafeAreaView>
	);
}
