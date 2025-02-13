import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Screen</Text>

            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>

                {/* button to go to the plan ride screen*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlanRide")}>
                    <Text style={styles.buttonText}>Plan a Ride →</Text>
                </TouchableOpacity>

                {/* button to go to the parking suggestion screen*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ParkingSuggestion")}>
                    <Text style={styles.buttonText}>Find Parking →</Text>
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
        marginTop: 20,
        gap: 15,
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default MainScreen;
