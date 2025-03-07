import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import commonUIStyles from "../styles/commonUIStyles";

const SplashScreen = ({ navigation }) => {
    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Image source={require("../images/logo.png")} style={styles.logo} resizeMode="contain" />

            {/* button to go to the sign in screen */}
            <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.replace("SignIn")}>
                <Text style={commonUIStyles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* button to go to the enable location screen */}
            <TouchableOpacity style={[commonUIStyles.button, styles.newUserButton]} onPress={() => navigation.replace("EnableLocation")}>
                <Text style={commonUIStyles.buttonText}>New User</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center", // Center the logo horizontally
        backgroundColor: "#FAFAFA", // Updated background color
    },
    logo: {
        width: 150, // Adjust the width to make the logo smaller
        height: 150, // Adjust the height to make the logo smaller
        marginBottom: 30,
    },
    newUserButton: {
        marginTop: 20, // Add padding between the buttons
    },
});

export default SplashScreen;