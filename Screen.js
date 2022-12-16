import BottomAppBarScreen from "./components/navigators/BottomAppBarScreen";
import FeatureAppNavigation from "./components/navigators/FeatureAppNavigation";
import ReviewScreen from "./components/navigators/ReviewScreen";

import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MyTheme } from "./components/theme/AppTheme";
import AuthScreen from "./components/navigators/AuthScreen";
import React from "react";
import SplashScreen from "./components/navigators/SplashScreen";

export default function Screen() {
  const { isLoggedIn, uid, name } = useSelector((state) => state.loginStatus);
  const [isLoading, setIsLoading] = React.useState(true);

  const Stack = createNativeStackNavigator();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLoading ? (
          !isLoggedIn && uid === "" && name === "" ? (
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
          ) : (
            <>
              <Stack.Screen
                name="BottomAppBarScreen"
                component={BottomAppBarScreen}
              />
              <Stack.Screen
                name="FeatureAppNavigation"
                component={FeatureAppNavigation}
              />
              <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
            </>
          )
        ) : (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
