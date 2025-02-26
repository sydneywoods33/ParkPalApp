import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

const PhoneDigitScreen = ({ route, navigation }) => {
  const { phoneNumber, countryCode } = route.params;
  const [code, setCode] = useState(["", "", "", ""]);
  const [isValid, setIsValid] = useState(false);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      let newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text && index < 3) {
        inputs.current[index + 1].focus();
      }

      setIsValid(newCode.join("").length === 4);
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyCode = () => {
    const enteredCode = code.join("");
    const correctCode = "1234"; // Replace with API call, this is a temporary password
    if (enteredCode === correctCode) {
      navigation.navigate("EmailSignup");
    } else {
      alert("Invalid Code! Please try again.");
      setCode(["", "", "", ""]);
      inputs.current[0].focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Enter the 4-digit code sent to you at {countryCode} {phoneNumber}
        </Text>

        {/* 4-digit code inputs */}
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => {
                handleChange(text, index);
                if (!text) handleBackspace(text, index);
              }}
              accessibilityLabel={`Digit ${index + 1}`}
            />
          ))}
        </View>

        {/* Code not received button */}
        <TouchableOpacity
          style={styles.resendButton}
          onPress={() => alert("Resending Code...")}
        >
          <Text style={styles.resendText}>I didn't receive a code</Text>
        </TouchableOpacity>

        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              isValid ? styles.activeNext : styles.disabledNext,
            ]}
            onPress={verifyCode}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Next →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 22,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
  },
  resendButton: {
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: "#808080",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 40,
  },
  backButton: {
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 10,
  },
  nextButton: {
    padding: 12,
    borderRadius: 10,
  },
  activeNext: {
    backgroundColor: "#000000",
  },
  disabledNext: {
    backgroundColor: "#555555",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default PhoneDigitScreen;
