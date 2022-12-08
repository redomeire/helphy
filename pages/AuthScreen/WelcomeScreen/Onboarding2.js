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
  Button
} from "react-native";

import Image2 from "../../../assets/Onboarding/image-2.png";

export default function Onboarding2({ navigation }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      PaddingTop: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.secondary.turmeric["turmeric"],
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
      borderRadius:20,
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
        backgroundColor={colors.secondary.turmeric["turmeric"]}
      />
      <Image
        source={require("../../../assets/Onboarding/image-2.png")}
        style={{
          width: 300,
          height: 300,
          marginTop:100,
        }}
      />
      <View
        style={{
            minWidth:'100%',
          padding: 28,
          paddingTop: 18,
          backgroundColor: "white",
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
          marginTop: 40,
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
          Temukan tempat yang nyaman untuk kamu!
        </Text>

        <Text style={{...styles.text, marginBottom:10}}>
        Helphy memberikan informasi tempat-tempat yang ramah untuk teman-teman disabilitas.
        </Text>
        
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding3')}
          style={styles.button}
        >
          <Text style={{color: "white", justifyContent:'center', alignItems: 'center', fontWeight: 'bold' }}>Lanjutkan</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginBottom:65, justifyContent: 'center', alignItems: 'center', marginTop:20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{color: colors.primary.taro["taro"], justifyContent:'center', alignItems: 'center', fontWeight: 'bold' }}>Skip</Text>
        </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
