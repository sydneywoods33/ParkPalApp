// navigate from sign in button
// does not have any functionality yet
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import commonUIStyles from "../../styles/commonUIStyles";

const SignInScreen = ({ navigation }) => {
    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <Text style={styles.text}>Sign In Screen</Text>
            <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("MainScreen")}>
                <Text style={commonUIStyles.buttonText}>Sign In</Text>
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
    },
});

export default SignInScreen;