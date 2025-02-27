import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image source={require("../images/notextlogo.png")} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>Parking</Text>
                <Image source={require("../images/usericon.png")} style={styles.userIcon} />
            </View>

            <View style={styles.searchBox}>
                <Text style={styles.searchBoxText}>Find Parking?</Text>
            </View>

            <View style={[styles.locationContainer, { marginTop: 30 }]}>
                <Image source={require("../images/locationicon.png")} style={styles.locationIcon} />
                <Text style={styles.locationText}>Location</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.locationContainer}>
                <Image source={require("../images/locationicon.png")} style={styles.locationIcon} />
                <Text style={styles.locationText}>Location</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlanRide")}>
                    <Text style={styles.buttonText}>Plan a Ride →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
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
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
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
    divider: {
        height: 1,
        backgroundColor: "black",
        marginVertical: 10,
        marginHorizontal: 5,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 50,
        left: 20,
        right: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
        width: "100%",
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default MainScreen;