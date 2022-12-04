import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { View } from "react-native";

// tailwind
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "../../tailwind.json";

import Home from "../../pages/HomeScreen/Home";
import Riwayat from "../../pages/AuthScreen/Riwayat";

import { MyTheme } from "../theme/AppTheme";

// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../../pages/HomeScreen/Profile";

const Tab = createBottomTabNavigator();

const bottomAppBarData = [
  {
    name: 'Home',
    icon: "home",
    component: Home
  },
  {
    name: 'History',
    icon: "history",
    component: Riwayat
  },
  {
    name: 'Tes',
    icon: "microphone",
    component: Home
  },
  {
    name: 'Chat',
    icon: "android-messages",
    component: Home
  },
  {
    name: 'Profile',
    icon: "account-circle",
    component: Profile
  },
]

export default function BottomAppBarScreen() {
  const tailwind = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
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
                        <View style={{ 
                          alignItems: 'center',
                          backgroundColor: index === 2 && colors.primary.taro['taro-light'],
                          padding: index === 2 ? 15 : 0,
                          borderRadius: 30,
                          display: index > 4 ? 'none' : 'flex'
                          }}>
                          <MaterialCommunityIcons 
                          name={data.icon} 
                           size={30}
                          style={{
                            width: 30,
                            color: index === 2 && focused ? 'white' : focused ? colors.primary.taro['taro-light'] : index === 2 ? 'white' : 'gray'
                          }}
                          />
                        </View>
                      )
                    },
                  }}
                />
              )
            })
          }
        </Tab.Navigator>
    </TailwindProvider>
  );
}