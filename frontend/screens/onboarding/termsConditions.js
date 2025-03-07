import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import commonUIStyles from "../../styles/commonUIStyles";

const PhoneDigitScreen = ({ navigation, route }) => {
    const [code, setCode] = useState(["", "", "", ""]);
    const phoneNumber = route.params?.phoneNumber || "____";

    const handleChangeText = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={commonUIStyles.headerText}>Enter the 4-digit code sent to you at</Text>
            <Text style={styles.phoneNumberText}>{phoneNumber}</Text>

            <View style={styles.inputContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={digit}
                        onChangeText={(text) => handleChangeText(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>

            <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("EmailSignup")}>
                <Text style={commonUIStyles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resendButton}>
                <Text style={styles.resendButtonText}>I didn’t receive a code</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    phoneNumberText: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
    },
    input: {
        width: 50,
        height: 50,
        backgroundColor: "#D6D6D6",
        textAlign: "center",
        fontSize: 18,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    resendButton: {
        backgroundColor: "#D6D6D6",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 20,
    },
    resendButtonText: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
    },
});

export default PhoneDigitScreen;