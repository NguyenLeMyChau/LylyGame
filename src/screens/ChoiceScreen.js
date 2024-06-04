import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { choices } from '../data/choices';

const ChoiceScreen = ({ route, navigation }) => {
    const { choiceId } = route.params;
    const choice = choices[choiceId];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{choice.text}</Text>
            {choice.options.map((option, index) => (

                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('Choice', { choiceId: option.next })}
                    style={styles.button}
                >
                    <Text style={{ color: 'black', fontSize: 16 }}>{option.text}</Text>
                </TouchableOpacity>
            ))}
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
        fontSize: 18,
        padding: 25,
        textAlign: 'justify'
    },

    button: {
        width: 350,
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ChoiceScreen;
