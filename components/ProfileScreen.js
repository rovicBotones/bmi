import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import React from 'react';


import { useState } from "react";

export default function ProfileScreen() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [bmiResult, setBmiResult] = useState("");

    const [status, setStatus] = useState("");

    function calculateBMI() {
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);

        let bmiStatus = getStatus(bmi);

        setStatus(bmiStatus);

        setHeight("");
        setWeight("");
    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Underweight";
        else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if (bmi >= 25 && bmi < 29.9) return "Overweight";
        else return "Obese";
    }





    return (
        <View style={styles.container}>

            <Text style={styles.det}  >
                Enter Your Height
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Height cm'

                keyboardType="numeric"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <Text style={styles.det}>
                Enter Your Weight
            </Text>
            <TextInput
                id="weight"
                style={styles.input}
                placeholder='Weight kg'

                keyboardType="numeric"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <Text style={styles.det}>
                Enter Your Age
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Age'
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.submitButton} onPress={calculateBMI} >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>



            <Text style={styles.resultView}>
                Your BMI is: {bmiResult} {"\n"}
                You are currently: {status}
            </Text>






        </View>
    );
};
/*const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
  
    const [bmiResult, setBmiResult] = useState(null);
  
    const [status, setStatus] = useState("");
  
    function calculateBMI() {
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
      setBmiResult(bmi);
  
      let bmiStatus = getStatus(bmi);
  
      setStatus(bmiStatus);
  
      setHeight("");
      setWeight("");
    }
  
    function getStatus(bmi) {
      if (bmi < 18.5) return "Underweight";
      else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
      else if (bmi >= 25 && bmi < 29.9) return "Overweight";
      else return "Obese";*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',

    },
    resultView: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 80,
        color: '#F7F7F7'
    },
    submitButton: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#FFE300",
        marginVertical: 30,

    },
    backButton: {
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 80,
        color: '#F7F7F7'
    },
    det: {
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
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
