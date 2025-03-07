import { StyleSheet } from "react-native";

// includes common styling for screens, some screens may have additional styling that is individual to that screen to prevent formatting issues

const commonUIStyles = StyleSheet.create({
    // Container style for the main view
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    // Title text style
    title: {
        fontSize: 24,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
    },

    // Header text style
    headerText: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
        marginBottom: 20,
    },

    // Input box style
    inputBox: {
        width: "100%",
        backgroundColor: "#D6D6D6",
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 30,
    },

    // Divider style
    divider: {
        height: 1,
        backgroundColor: "black",
        marginVertical: 10,
        marginHorizontal: 5,
    },

    // Button container style
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    // Button style
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignSelf: "center",
    },

    // Button text style
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default commonUIStyles;