import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

// Screen for input values for email set-u[]

const EmailSignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What’s your email address?</Text>
            <TextInput
                style={styles.input}
                placeholder="name@example.com"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>

                {/* button to go to the name input screen*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NameInput")}>
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
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "#D6D6D6",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 18,
        marginBottom: 30,
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

export default EmailSignupScreen;