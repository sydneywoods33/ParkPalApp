import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

const TermsConditionsScreen = ({ navigation }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Terms and conditions</Text>
            <Text style={styles.subText}>Please review the document below.</Text>
            <TouchableOpacity onPress={toggleExpand} style={styles.expandButton}>
                <Text style={styles.subText}>ParkPal terms and conditions ↓</Text>
            </TouchableOpacity>

            {isExpanded && (
                <ScrollView style={styles.textBox}>
                    <Text style={styles.textBoxContent}>
                        Last Updated: February 13, 2025{"\n\n"}
                        Welcome to ParkPal! By downloading, accessing, or using our app, you agree to the following Terms & Conditions. If you do not agree, please do not use the app.{"\n\n"}
                        1. Acceptance of Terms{"\n\n"}
                        By using ParkPal, you agree to comply with these Terms & Conditions, as well as our Privacy Policy. We reserve the right to update these terms at any time, and continued use of the app constitutes acceptance of any changes.{"\n\n"}
                        2. Location Tracking & Data Usage{"\n\n"}
                        ParkPal relies on real-time location data to provide accurate parking availability, navigation assistance, and recommendations. By using the app, you agree to the following:{"\n"}
                        • Location Access: ParkPal requires access to your device’s GPS to function properly. You may manage location permissions in your device settings.{"\n"}
                        • Active Tracking: Your location may be tracked while using the app to help locate parking spots, estimate arrival times, and improve app functionality.{"\n"}
                        • Background Location: In some cases, ParkPal may collect location data in the background (when the app is not actively open) to enhance features like parking reminders or navigation assistance.{"\n"}
                        • Data Storage & Use: Location data may be stored and used for service improvements, analytics, and security purposes but will not be shared with third parties for advertising without your consent.{"\n"}
                        • Opt-Out: You can disable location tracking at any time in your device settings, but this may limit certain features of the app.{"\n\n"}
                        3. Account Registration & Security{"\n\n"}
                        To use certain features, you may be required to create an account. You are responsible for maintaining the security of your account and notifying us of any unauthorized access.{"\n\n"}
                        4. Acceptable Use{"\n\n"}
                        When using ParkPal, you agree to:{"\n"}
                        • Use the app only for legal parking and navigation purposes.{"\n"}
                        • Not interfere with or disrupt the app’s services.{"\n"}
                        • Not attempt to reverse-engineer or misuse the app’s technology.{"\n\n"}
                        Any violation may result in suspension or termination of your account.{"\n\n"}
                        5. Limitation of Liability{"\n\n"}
                        ParkPal provides parking availability based on real-time data, but we do not guarantee that a parking spot will always be available. We are not responsible for parking fees, fines, or enforcement actions.{"\n\n"}
                        6. Privacy & Data Protection{"\n\n"}
                        We are committed to protecting your personal data. Please refer to our Privacy Policy for details on how we collect, use, and store your information.{"\n\n"}
                        7. Termination of Services{"\n\n"}
                        We reserve the right to suspend or terminate your access to ParkPal at any time if you violate these Terms & Conditions or engage in misuse of the app.{"\n\n"}
                        8. Contact Information{"\n\n"}
                        If you have any questions regarding these Terms & Conditions, you can contact us at:{"\n\n"}
                        📧 Parkpalsupport@gmail.com
                    </Text>
                </ScrollView>
            )}

            <TouchableOpacity style={styles.agreeButton} onPress={() => navigation.navigate("MainScreen")}>
                <Text style={styles.agreeButtonText}>I agree</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("MainScreen")}
                >
                    <Text style={styles.buttonText}>Finish →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: "darkgrey",
        textAlign: "left",
        marginBottom: 10,
    },
    expandButton: {
        marginBottom: 20,
    },
    textBox: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20, // Adjusted to make room for the "I agree" button
    },
    textBoxContent: {
        fontSize: 14,
        color: "black",
    },
    agreeButton: {
        backgroundColor: "#d6d6d6",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 130,
    },
    agreeButtonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        left: 20,
        right: 20,
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default TermsConditionsScreen;