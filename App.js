import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

// tailwind
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "./tailwind.json";

// home screen
import Home from "./pages/Home";
import HomeIcon from './assets/favicon.png'

// login screen
import Login from "./pages/Login";
import LoginIcon from './assets/favicon.png'
import { MyTheme } from "./components/theme/AppTheme";

const Tab = createBottomTabNavigator();

const bottomAppBarData = [
  {
    name: 'Home',
    icon: HomeIcon,
    component: Home
  },
  {
    name: 'Login',
    icon: LoginIcon,
    component: Login
  },
]

export default function App() {
  const tailwind = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
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
          {
            bottomAppBarData.map((data, index) => {
              return (
                <Tab.Screen
                  key={index}
                  name={data.name}
                  component={data.component}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      const { colors } = useTheme();

                      return (
                        <View style={{ alignItems: 'center' }}>
                          <Image source={data.icon}
                            resizeMode='contain'
                            style={{
                              width: 25,
                              height: 25,
                              tintColor: focused && colors['taro']
                            }}
                          />
                          <Text>{data.name}</Text>
                        </View>
                      )
                    },
                  }}
                />
              )
            })
          }
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}