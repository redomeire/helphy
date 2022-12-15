import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// pages
import AlatBantu from "../../pages/FeatureScreen/AlatBantu";
import Pendamping from "../../pages/FeatureScreen/Pendamping";
import ReviewTempat from "../../pages/FeatureScreen/ReviewTempat";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const bottomAppBarData = [
    {
      name: 'AlatBantu',
      icon: "human-cane",
      component: AlatBantu
    },
    {
      name: 'Pendamping',
      icon: "human-greeting-variant",
      component: Pendamping
    },
    {
      name: 'ReviewTempat',
      icon: "google-maps",
      component: ReviewTempat
    },
  ]

const FeatureAppNavigation = () => {
    return ( 
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
                          padding: index === 2 ? 15 : 0,
                          borderRadius: 50,
                          display: index > 4 ? 'none' : 'flex'
                          }}>
                          <MaterialCommunityIcons 
                          name={data.icon} 
                           size={30}
                          style={{
                            width: 30,
                            color: focused ? colors.primary.taro['taro-light'] : 'gray'
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
     );
}
 
export default FeatureAppNavigation;