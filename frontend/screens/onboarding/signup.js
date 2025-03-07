import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import commonUIStyles from "../../styles/commonUIStyles";

const SignupScreen = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={commonUIStyles.headerText}>Enter your mobile number</Text>
            <TextInput
                style={[commonUIStyles.inputBox, styles.inputBox]}
                placeholder="Mobile Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
            />
            <Text style={styles.consentText}>
                By proceeding, you consent to receive calls, WhatsApp messages, or SMS, including those sent automatically, from the application and its affiliates at the number provided.
            </Text>
            <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("PhoneDigit", { phoneNumber: mobileNumber })}>
                <Text style={commonUIStyles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        paddingHorizontal: 20,
    },
    inputBox: {
        backgroundColor: "#D6D6D6",
    },
    consentText: {
        fontSize: 12,
        color: "black",
        textAlign: "center",
        marginVertical: 20,
    },
});

export default SignupScreen;