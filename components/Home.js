import { View, Button, StyleSheet, Image, TextInput, Text, TouchableOpacity } from "react-native";
import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <Image source={require('C:/Users/rovic/Documents/CC2021/CC2021/new folder/BMI/assets/logo.png')}
                style={{ width: 250, height: 250 }}
            />
            <Text style={styles.txt}>Enter Name</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g Juan Dela Cruz'
            />

            <Button style={styles.butStart}
                color="gray"
                title="Start"
                onPress={() =>
                    navigation.navigate('ProfileScreen', { name: 'ProfileScreen' })
                }
            />
            <TouchableOpacity style={styles.listButton} title="back to home" onPress={() => navigation.navigate('API', { name: 'api' })}>
                <Text style={styles.buttonText}>LIST</Text>
            </TouchableOpacity>

        </View>
        //DataBase Connection Here!
    );
};

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        fontFamily: 'sans-serif',


    },
    txt: {
        color: '#F7F7F7'

    },
    input: {
        backgroundColor: 'white',
        marginVertical: 10,
        height: 20,
        width: '50%',
        textAlign: 'center',
        color: 'black',
        paddingHorizontal: 10,
        borderRadius: 5,
        //paddingVertical: 14,

    },
    listButton: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#FFE300",
        marginVertical: 30,

    },
    buttonText: {
        color: 'black',
        fontSize: 15




    },


    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});