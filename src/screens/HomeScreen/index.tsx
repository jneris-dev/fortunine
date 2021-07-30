import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
        </SafeAreaView>
    )
}