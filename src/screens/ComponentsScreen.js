import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Jeff';
    const greeting = <Text style={{fontSize: 20}}>My name a {myName}</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>Easy peasy lemon squeezy</Text>
            {greeting}
        </View>
)};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;