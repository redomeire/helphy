import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTheme } from './components/theme/AppTheme';
import Login from './pages/AuthScreen/Login';
import Signup from './pages/AuthScreen/SignUp';
import BottomAppBarScreen from './components/navigators/BottomAppBarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Signup} />
            <Stack.Screen name="BottomAppBarScreen" component={BottomAppBarScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}