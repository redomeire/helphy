import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Review from "../../pages/DetailReview/Review";

const Stack = createNativeStackNavigator();

export default function ReviewScreen() {
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
            <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
    )
}