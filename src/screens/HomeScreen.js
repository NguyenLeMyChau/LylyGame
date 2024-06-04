import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hi, my friend !</Text>

            <Text style={styles.text}>Welcome to Lyly's game</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Choice', { choiceId: 'start' })}
                style={styles.button}
            >
                <Text style={{ color: 'black', fontSize: 20 }}>Start game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontSize: 24,
        padding: 10
    },

    button: {
        width: 300,
        height: 60,
        backgroundColor: 'white',
        padding: 10,
        margin: 20,
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
