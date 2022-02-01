

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.apiCall();
    }

    async apiCall() {
        let response = await fetch('https://ns.nowna.com/zohoTest/test');
        let respJson = await response.json()
        //console.log(respJson);

        this.setState({ data: respJson.response })
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>
                    API INTEGRATION TESTING
                </Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Text style={styles.apiTxt}>{item.id}. {item.title} {item.description}</Text>}
                />


            </View>



        );
    }
}
/* <Button title="back to Profile Screen" onPress={() => navigation.navigate('ProfileScreen', { name: 'ProfileScreen' })}> </Button>

                <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ProfileScreen', { name: 'ProfileScreen' })}>
                    <Text style={styles.buttonText}>Go Back to Profile Screen</Text>
                </TouchableOpacity>*/
//const api = createNativeStackNavigator(App);

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        fontFamily: 'sans-serif',


    },
    apiTxt: {

        fontWeight: 'bold',
        fontSize: 20,
        color: "black"

    },

    txt: {
        color: 'black',
        fontSize: 20,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#219F94",
        marginVertical: 30,
    },
    submitButton: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#FFE300",
        marginVertical: 30,

    },
    buttonText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },

});
