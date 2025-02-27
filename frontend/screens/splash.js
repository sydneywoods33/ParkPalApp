import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo} />

            {/* button to go to the sign up screen*/}
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
        backgroundColor: "#141414",
    },
    logo: {
        marginBottom: 30,
    },
    button: {
        position: "absolute",
        bottom: 50, 
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
});

export default SplashScreen;