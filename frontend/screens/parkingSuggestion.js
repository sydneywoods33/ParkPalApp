import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import commonUIStyles from "../styles/commonUIStyles";

const ParkingSuggestionScreen = ({ navigation }) => {
    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={styles.text}>Find Parking Screen</Text>

            <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.goBack()}>
                <Text style={commonUIStyles.buttonText}>← Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
});

export default ParkingSuggestionScreen;