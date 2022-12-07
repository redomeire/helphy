import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTheme } from './components/theme/AppTheme';
import Login from './pages/AuthScreen/Login';
import Signup from './pages/AuthScreen/SignUp';
import BottomAppBarScreen from './components/navigators/BottomAppBarScreen';
import FeatureAppNavigation from './components/navigators/FeatureAppNavigation';
import ReviewScreen from './components/navigators/ReviewScreen';
import { Provider } from 'react-redux';
import { store } from './components/data/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Signup} />
          <Stack.Screen name="BottomAppBarScreen" component={BottomAppBarScreen} />
          <Stack.Screen name="FeatureAppNavigation" component={FeatureAppNavigation} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}