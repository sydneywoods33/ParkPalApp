// where location sharing will be prompted

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import commonUIStyles from "../../styles/commonUIStyles";

const EnableLocationScreen = ({ navigation }) => {
    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={styles.text}>location prompt screen</Text>
            <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("Signup")}>
                <Text style={commonUIStyles.buttonText}>Go to Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
    },
    text: {
        fontSize: 18,
        color: "black",
        marginBottom: 20, // Add some space between the text and the button
    },
});

export default EnableLocationScreen;