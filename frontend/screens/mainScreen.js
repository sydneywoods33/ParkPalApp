import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import commonUIStyles from "../styles/commonUIStyles";

const MainScreen = ({ navigation }) => {
    return (
        <View style={[commonUIStyles.container, styles.container]}>
            <View style={styles.topContainer}>
                <Image source={require("../images/logo.png")} style={styles.logo} resizeMode="contain" />
                <Text style={commonUIStyles.title}>Parking</Text>
                <Image source={require("../images/usericon.png")} style={styles.userIcon} />
            </View>

            <View style={styles.searchBox}>
                <Text style={styles.searchBoxText}>Find Parking?</Text>
            </View>

            <View style={[styles.locationContainer, { marginTop: 30 }]}>
                <Image source={require("../images/locationicon.png")} style={styles.locationIcon} />
                <Text style={styles.locationText}>Location</Text>
            </View>

            <View style={commonUIStyles.divider} />

            <View style={styles.locationContainer}>
                <Image source={require("../images/locationicon.png")} style={styles.locationIcon} />
                <Text style={styles.locationText}>Location</Text>
            </View>

            <View style={commonUIStyles.buttonContainer}>
                <TouchableOpacity style={commonUIStyles.button} onPress={() => navigation.navigate("PlanRide")}>
                    <Text style={commonUIStyles.buttonText}>Plan a Ride →</Text>
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
    logo: {
        width: 40,
        height: 40,
    },
    userIcon: {
        width: 40,
        height: 40,
    },
    searchBox: {
        backgroundColor: "#d6d6d6",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    searchBoxText: {
        fontSize: 18,
        color: "black",
        textAlign: "left",
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    locationIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    locationText: {
        fontSize: 18,
        color: "black",
    },
});

export default MainScreen;