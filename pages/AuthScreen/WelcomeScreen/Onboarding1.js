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
  Dimensions,
} from "react-native";

import Image1 from "../../../assets/Onboarding/image-1.png";

export default function Onboarding1({ navigation }) {
  let screenHeight = Dimensions.get("window").height;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      PaddingTop: 100,
      height: screenHeight,
      backgroundColor: colors.primary.taro["taro-light"],
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
      paddingHorizontal: 10,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary.taro["taro-light"]}
      />
      <Image
        source={require("../../../assets/Onboarding/image-1.png")}
        style={{
          width: 240,
          height: 280,
          marginTop: -300,
          position: "relative",
        }}
      />
      <View
        style={{
          padding: 28,
          paddingTop: 18,
          paddingBottom: 40,
          backgroundColor: "white",
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
          width: "100%",
          bottom: 0,
          position: "absolute",
        }}
      >
        <Text
          style={{
            paddingBottom: 20,
            padding: 18,
            fontWeight: "bold",
            fontSize: 30,
            color: colors.monochrome.shallot["shallot-darkest"],
          }}
        >
          Pinjam alat bantu dimana saja
        </Text>

        <Text style={{ ...styles.text, marginBottom: 10 }}>
          Meminjam alat bantu dengan persyaratan yang mudah dan dapat dilakukan
          dengan satu klik!
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Onboarding2")}
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
              Lanjutkan
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: colors.primary.taro["taro"],
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
