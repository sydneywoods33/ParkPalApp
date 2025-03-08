import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import commonUIStyles from "../../styles/commonUIStyles";

const NameInputScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={commonUIStyles.headerText}>What's your Name?</Text>
            <TextInput
                style={commonUIStyles.inputBox}
                placeholder="Enter first name"
                placeholderTextColor="#888"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={commonUIStyles.inputBox}
                placeholder="Enter last name"
                placeholderTextColor="#888"
                value={lastName}
                onChangeText={setLastName}
            />

            <View style={commonUIStyles.buttonContainer}>
                <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.goBack()}>
                    <Text style={commonUIStyles.buttonText}>←</Text>
                </TouchableOpacity>

                <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("TermsConditions")}>
                    <Text style={commonUIStyles.buttonText}>Next →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
});

export default NameInputScreen;