import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch } from "react-native";

const PlanRideScreen = ({ navigation }) => {
    const [isFreeParking, setIsFreeParking] = useState(false);
    const [parkingRadius, setParkingRadius] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Plan your Ride</Text>
            </View>

            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Current location"
                    placeholderTextColor="#888"
                />
                <View style={styles.divider} />
                <TextInput
                    style={styles.input}
                    placeholder="Where to?"
                    placeholderTextColor="#888"
                />
            </View>

            <View style={styles.optionsContainer}>
                <View style={styles.optionRow}>
                    <Text style={styles.optionText}>Parking radius</Text>
                    <TextInput
                        style={styles.radiusInput}
                        placeholder="000"
                        placeholderTextColor="#888"
                        keyboardType="numeric"
                        maxLength={3}
                        value={parkingRadius}
                        onChangeText={setParkingRadius}
                    />
                </View>
                {/* Slider component can be added here */}
                <View style={styles.optionRow}>
                    <Text style={styles.optionText}>Free parking</Text>
                    <Switch
                        value={isFreeParking}
                        onValueChange={setIsFreeParking}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>← Back to Main Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    backButton: {
        fontSize: 24,
        color: "black",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
    },
    inputBox: {
        backgroundColor: "#d6d6d6",
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
    input: {
        fontSize: 18,
        color: "black",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    divider: {
        height: 1,
        backgroundColor: "black",
        marginVertical: 10,
    },
    optionsContainer: {
        marginBottom: 20,
    },
    optionRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    optionText: {
        fontSize: 18,
        color: "black",
        marginRight: 10,
    },
    radiusInput: {
        width: 60,
        backgroundColor: "#d6d6d6",
        borderRadius: 10,
        fontSize: 18,
        color: "black",
        textAlign: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 50,
        left: 20,
        right: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default PlanRideScreen;