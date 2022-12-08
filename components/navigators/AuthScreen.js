import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../pages/AuthScreen/Login";
import Signup from "../../pages/AuthScreen/SignUp";
import Onboarding1 from "../../pages/AuthScreen/WelcomeScreen/Onboarding1";
import Onboarding2 from "../../pages/AuthScreen/WelcomeScreen/Onboarding2";
import Onboarding3 from "../../pages/AuthScreen/WelcomeScreen/Onboarding3";
export default function AuthScreen() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 80,
                    borderColor: 'white'
                }
            }}
        >
            <Stack.Screen name = "Onboarding1" component={Onboarding1}/>
            <Stack.Screen name = "Onboarding2" component={Onboarding2}/>
            <Stack.Screen name = "Onboarding3" component={Onboarding3}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Signup} />
        </Stack.Navigator>
    )
}