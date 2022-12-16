import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { createAlert } from "../../components/alert/Alert";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Login({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function register() {
    setLoading(true);
    if (!email || !password || !name || !confirmPassword) {
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
    if (password !== confirmPassword) {
      setLoading(false);
      return createAlert({
        title: "Error",
        message: "Password tidak sama",
        options: [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
      });
    }
    const { user, errors } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (errors) {
      setLoading(false);
      return createAlert({
        title: "Error",
        message: errors.message,
        options: [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
      });
    }
    await updateProfile(user, { displayName: name });
    setLoading(false);
    navigation.navigate("Login");
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
          source={require("../../assets/Login-SignUp/Saly-12.png")}
          style={{
            width: 355,
            height: 355,
          }}
        />
        <Text
          fontWeight="700"
          style={{
            color: colors.primary.taro["taro"],
            fontSize: 40,
            marginRight: 200,
            fontWeight: "bold",
            marginTop: -20,
            marginLeft: -55,
          }}
        >
          Daftar
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Feather
            name="type"
            size={30}
            style={{
              color: colors.primary.taro["taro-light"],
              marginTop: 10,
            }}
          ></Feather>
          <TextInput
            placeholder="Nama Lengkap"
            style={styles.input}
            textContentType="name"
            onChangeText={(text) => setName(text)}
          />
        </View>

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
              placeholder="Confirm Password"
              style={styles.input}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
        </View>

        <Text
          style={{
            marginBottom: 20,
            fontWeight: "400",
            fontSize: 13,
            justifyContent: "center",
            marginTop: 30,
            color: "#006266",
            width: 350,
          }}
        >
          Dengan melakukan pendaftaran, anda telah menyetujui{" "}
          <Text
            style={{ color: colors.primary.taro["taro"], fontWeight: "600" }}
          >
            syarat dan ketentuan
          </Text>{" "}
          yang berlaku.{" "}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => register()}>
          <Text style={styles.text}>Daftar</Text>
        </TouchableOpacity>

        <Text
          style={{
            marginBottom: 20,
            fontWeight: "400",
            fontSize: 13,
            color: "#006266",
            textAlign: "center",
          }}
        >
          Sudah punya akun?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: colors.primary.taro["taro"], fontWeight: "600" }}
          >
            Masuk.
          </Text>
        </Text>
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
    marginBottom: 10,
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
