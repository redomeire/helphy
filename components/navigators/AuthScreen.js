import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../pages/AuthScreen/Login";
import Signup from "../../pages/AuthScreen/SignUp";

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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Signup} />
        </Stack.Navigator>
    )
}