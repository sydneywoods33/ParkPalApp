import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
// import onboarding screens
import EnableLocationScreen from "./frontend/screens/onboarding/enableLocation";
import EmailInputScreen from "./frontend/screens/onboarding/emailInput";
import NameInputScreen from "./frontend/screens/onboarding/nameInput";
import PhoneDigitScreen from "./frontend/screens/onboarding/digitConfirmation";
import SignupScreen from "./frontend/screens/onboarding/signup";
import TermsConditionsScreen from "./frontend/screens/onboarding/termsConditions";
// import other screens
import MainScreen from "./frontend/screens/mainScreen";
import ParkingSuggestionScreen from "./frontend/screens/parkingSuggestion";
import PlanRideScreen from "./frontend/screens/planRide";
import SplashScreen from "./frontend/screens/splash";
import SignInScreen from "./frontend/screens/signin/signIn"; // Assuming you have a SignIn screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} /> {/* Set SplashScreen as the initial route */}
        <Stack.Screen name="EnableLocation" component={EnableLocationScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="EmailInput" component={EmailInputScreen} />
        <Stack.Screen name="NameInput" component={NameInputScreen} />
        <Stack.Screen name="PhoneDigit" component={PhoneDigitScreen} />
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ParkingSuggestion" component={ParkingSuggestionScreen} />
        <Stack.Screen name="PlanRide" component={PlanRideScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}