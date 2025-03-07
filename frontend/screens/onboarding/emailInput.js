import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import commonUIStyles from "../../styles/commonUIStyles";

// Screen for input values for email set-up

const EmailSignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={commonUIStyles.headerText}>What’s your email address?</Text>
            <TextInput
                style={commonUIStyles.inputBox}
                placeholder="name@example.com"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <View style={commonUIStyles.buttonContainer}>
                <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.goBack()}>
                    <Text style={commonUIStyles.buttonText}>←</Text>
                </TouchableOpacity>

                {/* button to go to the name input screen*/}
                <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("NameInput")}>
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

export default EmailSignupScreen;