import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text className="text-red-500">Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button
                title="Go to login"
                onPress={() => {
                    navigation.navigate('Login', {})
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });