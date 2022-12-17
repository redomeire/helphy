import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";

import Image3 from "../../../assets/Onboarding/image-3.png";

export default function Onboarding3({ navigation }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      PaddingTop: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.secondary.chili["chili-light"],
    },
    scroll_container: {
      backgroundColor: "white",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      padding: 20,
      paddingTop: 100,
      paddingHorizontal: 35,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      cursor: "pinter",
      borderRadois: 20,
      width: 150,
      backgroundColor: colors.primary.taro["taro-light"],
      borderRadius: 20,
    },
    text: {
      fontSize: 18,
      textAlign: "justify",
      lineHeight: 25,
      color: colors.monochrome.shallot["shallot-dark"],
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.secondary.chili["chili-light"]}
      />
      <Image
        source={require("../../../assets/Onboarding/image-3.png")}
        style={{
          width: 230,
          height: 250,
          marginTop: -200,
        }}
      />
      <View
        style={{
          minWidth: "100%",
          padding: 28,
          paddingTop: 18,
          backgroundColor: "white",
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
          marginTop: 40,
          bottom: 0,
          position: "absolute",
        }}
      >
        <Text
          style={{
            paddingBottom: 20,
            padding: 18,
            fontWeight: "bold",
            fontSize: 28,
            color: colors.monochrome.shallot["shallot-darkest"],
          }}
        >
          Helphy Assistant siap membantumu.
        </Text>

        <Text style={{ ...styles.text, marginBottom: 30 }}>
          Katakan Helphy, maka Helphy Assistant siap membantu kamu mencari fitur
          yang diinginkan dengan memberikan suara saja.
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          >
            <Text
              style={{
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Selesai
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
