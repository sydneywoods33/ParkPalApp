import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import MainScreen from "./frontend/screens/mainScreen";
import EmailSignupScreen from "./frontend/screens/onboarding/emailSignup";
import NameInputScreen from "./frontend/screens/onboarding/nameInput";
import PhoneDigitScreen from "./frontend/screens/onboarding/phonedigit";
import SignupScreen from "./frontend/screens/onboarding/signup";
import TermsConditionsScreen from "./frontend/screens/onboarding/termsConditions";
import ParkingSuggestionScreen from "./frontend/screens/parkingSuggestion";
import PlanRideScreen from "./frontend/screens/planRide";
import SplashScreen from "./frontend/screens/splash";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="EmailSignup" component={EmailSignupScreen} />
        <Stack.Screen name="NameInput" component={NameInputScreen} />
        <Stack.Screen name="PhoneDigit" component={PhoneDigitScreen} />
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ParkingSuggestion" component={ParkingSuggestionScreen} />
        <Stack.Screen name="PlanRide" component={PlanRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
