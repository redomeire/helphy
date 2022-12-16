import React from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

// redux
import { createAlert } from "../../components/alert/Alert";
import { useDispatch } from "react-redux";
import { update } from "../../components/data/loginStatusReducer";

export default function Login({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const updateLoginStatus = (uid, displayName) => {
    dispatch(update({ isLoggedIn: true, uid: uid, name: displayName }));
  };

  async function login() {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      return createAlert({
        title: "Error",
        message: "Semua field harus diisi",
        options: [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
      });
    }
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      updateLoginStatus(user.uid, user.displayName);
    } catch (error) {
      setLoading(false);
      return createAlert({
        title: "Error",
        message: "Invalid Credentials",
        options: [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
      });
    }
  }

  return (
    <ScrollView>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary.taro["taro"]} />
        </View>
      )}
      <View style={styles.container}>
        <Image
          source={require("../../assets/Login-SignUp/Saly-1.png")}
          style={{
            width: 350,
            height: 350,
          }}
        />
        <Text
          fontWeight="700"
          style={{
            color: colors.primary.taro["taro"],
            fontSize: 42,
            marginRight: 200,
            fontWeight: "bold",
            marginTop: -20,
          }}
        >
          Masuk
        </Text>

        <View
          style={{
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name="alternate-email"
              size={30}
              style={{
                color: colors.primary.taro["taro-light"],
                marginTop: 10,
              }}
            ></MaterialCommunityIcons>
            <TextInput
              placeholder="Email"
              style={styles.input}
              textContentType="emailAddress"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Feather
              name="lock"
              size={30}
              style={{
                color: colors.primary.taro["taro-light"],
                marginTop: 10,
              }}
            ></Feather>
            <TextInput
              placeholder="Password"
              style={styles.input}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Text
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 10,
              marginBottom: 10,
              fontSize: 13,
              color: "#006266",
              textAlign: "right",
            }}
          >
            Lupa Password?
          </Text>

          <TouchableOpacity onPress={() => login()} style={styles.button}>
            <Text style={styles.text}>Masuk</Text>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 13,
              color: "#006266",
              fontWeight: "400",
            }}
          >
            Lanjutkan dengan
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Pressable
              style={{
                marginTop: 10,
                padding: 15,
                paddingLeft: 30,
                borderRadius: 10,
                paddingRight: 30,
                backgroundColor: colors.primary.taro["taro-lightest"],
                marginRight: 10,
              }}
            >
              <AntDesign
                name="google"
                size={30}
                style={{
                  color: colors.primary.taro["taro"],
                }}
              ></AntDesign>
            </Pressable>

            <Pressable
              style={{
                marginTop: 10,
                padding: 15,
                borderRadius: 10,
                paddingLeft: 30,
                paddingRight: 30,
                backgroundColor: colors.primary.taro["taro-lightest"],
              }}
            >
              <AntDesign
                name="apple1"
                size={30}
                style={{
                  color: colors.primary.taro["taro"],
                }}
              ></AntDesign>
            </Pressable>
          </View>

          <Text
            style={{
              marginBottom: 20,
              fontWeight: "400",
              fontSize: 13,
              color: "#006266",
              textAlign: "center",
            }}
          >
            Belum punya akun?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{ color: colors.primary.taro["taro"], fontWeight: "600" }}
            >
              Daftar
            </Text>
          </Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    justifyContent: "flex-start",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    width: 300,
    marginLeft: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    cursor: "pointer",
    borderRadius: 20,
    width: 270,
    marginLeft: 40,
    elevation: 5,
    backgroundColor: "#7F4FE3",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backgroundColor: "#F5FCFF88",
  },
});
