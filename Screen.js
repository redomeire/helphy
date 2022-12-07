import BottomAppBarScreen from './components/navigators/BottomAppBarScreen';
import FeatureAppNavigation from './components/navigators/FeatureAppNavigation';
import ReviewScreen from './components/navigators/ReviewScreen';

import { useSelector } from "react-redux";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MyTheme } from './components/theme/AppTheme';
import AuthScreen from './components/navigators/AuthScreen';

export default function Screen() {
    const { isLoggedIn, token } = useSelector(state => state.loginStatus);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {
                    !isLoggedIn && token === '' ? (
                        <Stack.Screen name="AuthScreen" component={AuthScreen} />
                    ) : (
                        <>
                            <Stack.Screen name="BottomAppBarScreen" component={BottomAppBarScreen} />
                            <Stack.Screen name="FeatureAppNavigation" component={FeatureAppNavigation} />
                            <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}