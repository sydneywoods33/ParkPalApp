import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TermsConditionsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding: Terms and Conditions Screen</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>

                {/* button to go to the main screen*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainScreen")}>
                    <Text style={styles.buttonText}>Finish →</Text>
                </TouchableOpacity>
            </View>
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
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        gap: 15,
    },
    button: {
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

export default TermsConditionsScreen;
