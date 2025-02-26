import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import ModalDropdown from "react-native-modal-dropdown";

const countryCodes = [
  { label: "🇨🇦 +1", value: "+1" },
  { label: "🇨🇷 +506", value: "+506" },
];

const SignupScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [isValid, setIsValid] = useState(false);

  const onGetStarted = () => {
    if (phoneNumber.trim() !== "") {
      navigation.navigate("PhoneDigit", { phoneNumber, countryCode });
    }
  };

  const handlePhoneChange = (text) => {
    const isValidNumber = /^\d{10}$/.test(text);
    setIsValid(isValidNumber);
    setPhoneNumber(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter your phone number</Text>

        {/* Phone number container */}
        <View style={styles.phoneContainer}>
          {/* Country selection dropdown*/}
          <ModalDropdown
            options={countryCodes.map((c) => c.label)}
            onSelect={(index) => setCountryCode(countryCodes[index].value)}
            defaultValue="🇨🇦 +1"
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownMenu}
            style={styles.dropdown}
          />

          {/*Phone Number Input */}
          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid phone number",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                maxLength={10}
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                  handlePhoneChange(text);
                }}
                returnKeyType="done"
              />
            )}
          />
        </View>
        {errors.phoneNumber && (
          <Text style={styles.error}>{errors.phoneNumber.message}</Text>
        )}

        {/* Get Started BUtton */}
        <TouchableOpacity
          style={[styles.getStartedButton, !isValid && styles.disabledButton]}
          onPress={handleSubmit(onGetStarted)}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/*Find My Account */}
        <TouchableOpacity onPress={() => navigation.navigate("FindAccount")}>
          <Text style={styles.findAccountText}>Already Have an Account?</Text>
        </TouchableOpacity>

        {/*Nav buttons*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onGetStarted)}
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
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  phoneContainer: {
    flexDirection: "row",
    alightItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  dropdown: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginRight: 10,
  },
  dropdownText: {
    fontSize: 16,
    textAlign: "center",
  },
  dropdownMenu: {
    fontSize: 16,
    textAlign: "center",
  },
  dropdownMenu: {
    width: 100,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
  },

  error: {
    color: "#ff0000",
    marginBottom: 10,
  },

  getStartedButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: "#808080",
  },
  findAccountText: {
    fontSize: 18,
    color: "#0000ff",
    marginTop: 150,
    marginBottom: 150,
    textDecorationLine: "underline",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 15,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default SignupScreen;
