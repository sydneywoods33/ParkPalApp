import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch } from "react-native";
import commonUIStyles from "../styles/commonUIStyles";

const PlanRideScreen = ({ navigation }) => {
    const [isFreeParking, setIsFreeParking] = useState(false);
    const [parkingRadius, setParkingRadius] = useState("");

    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={commonUIStyles.title}>Plan your Ride</Text>
            </View>

            <View style={commonUIStyles.inputBox}>
                <TextInput
                    style={commonUIStyles.inputBox}
                    placeholder="Current location"
                    placeholderTextColor="#888"
                />
                <View style={commonUIStyles.divider} />
                <TextInput
                    style={commonUIStyles.inputBox}
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
                <View style={styles.optionRow}>
                    <Text style={styles.optionText}>Free parking</Text>
                    <Switch
                        value={isFreeParking}
                        onValueChange={setIsFreeParking}
                    />
                </View>
            </View>

            <View style={commonUIStyles.buttonContainer}>
                <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.goBack()}>
                    <Text style={commonUIStyles.buttonText}>← Back to Main Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
});

export default PlanRideScreen;