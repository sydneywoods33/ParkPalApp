import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.headerText}>Enter your mobile number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    placeholderTextColor="#888"
                    keyboardType="phone-pad"
                />
            </View>

            <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("PhoneDigit")}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <TouchableOpacity style={styles.emailButton} onPress={() => navigation.navigate("EmailSignup")}>
                <Text style={styles.emailButtonText}>Continue with email</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Splash")}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>

                {/* button to go to the phone number input screen*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PhoneDigit")}>
                    <Text style={styles.buttonText}>Next →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    topContainer: {
        paddingTop: 60,
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        color: "black",
        textAlign: "left",
        width: "100%",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        backgroundColor: "#D6D6D6",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 30,
    },
    getStartedButton: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20, // Increased borderRadius for more rounded edges
        alignSelf: "center",
        marginTop: 40,
    },
    orText: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
        marginVertical: 20,
    },
    emailButton: {
        backgroundColor: "#D6D6D6",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20, // Increased borderRadius for more rounded edges
        alignSelf: "center",
    },
    emailButtonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
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
        borderRadius: 20, // Increased borderRadius for more rounded edges
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default SignupScreen;