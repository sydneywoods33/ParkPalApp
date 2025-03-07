import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const NameInputScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What's your Name?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter first name"
                placeholderTextColor="#888"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter last name"
                placeholderTextColor="#888"
                value={lastName}
                onChangeText={setLastName}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>

                {/* button to go to the terms and conditions screen*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TermsConditions")}>
                    <Text style={styles.buttonText}>Next →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerText: {
        fontSize: 18,
        color: "black",
        textAlign: "left",
        width: "100%",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "#D6D6D6",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        left: 20,
        right: 20,
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default NameInputScreen;