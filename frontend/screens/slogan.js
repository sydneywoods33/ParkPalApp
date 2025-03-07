import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import commonUIStyles from "../styles/commonUIStyles";

const SloganScreen = ({ navigation }) => {
    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={styles.sloganText}>Park Smart Live Easy</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Splash")}>
                <Text style={commonUIStyles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#141414",
        flex: 1,
    },
    sloganText: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignSelf: "center",
    },
});

export default SloganScreen;