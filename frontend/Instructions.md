-- Instructions for Tristin, taking on frontend development from Sydney
-- communicate with Maximus on how Figma needs to be altered for application requirements

onboarding screen structure/flow

this list explains sequence of how screens SHOULD be not how they currently are, you will have to go through and change the navigation of some buttons. There is a commonUIStyles.js page which mostly has commands for colours and button size/rounding. Individual pages will need their own styling as per formatting requirements, use Max's Figma for reference

slogan.js initial loading screen "Park Smart Live Easy" | "Get Started"
splash.js --> "new user"
enableLocation.js --> "go to sign-up"
signup.js input user phone # --> "next"
phonedigit.js --> input 4 digit code "confirm" 
nameInput.js --> input firstname lastname -->"next"
emailInput.js --> input email --> "next"
termsConditions.js --> "next"
*add screen for enabling notifications* include button to return to mainScreen.js ??

alternative flow from splash.js --> user selects "sign in" (instead of "get started")
I added signin.js to its own signin folder, this has not been updated in navigation yet, you will need to change 
this file path
*add screen for input username or email with password* include button to navigate to mainScreen.js

mainScreen.js has only been formatted for the functionality we needed for S1 demo, needs to be updated
to match new UI design and have components added for backend to be connected. 
*add screen for user info, directed from user icon on main screen*