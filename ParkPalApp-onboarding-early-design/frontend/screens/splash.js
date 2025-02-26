import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ParkPal</Text>

            {/* button to go to the main screen */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Signup")}>
                <Text style={styles.buttonText}>Get Started →</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        marginTop: 20,
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default SplashScreen;
