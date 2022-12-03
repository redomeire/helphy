import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ImageBackground,} from 'react-native';
import Icon from 'react-native-vector-icons';

export default function Login() {
    const { fonts, colors } = useTheme();

    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/Saly-1.png')}
            style={{
                marginTop:-200,
                width: 400,
                height: 400
            }}
            />
            <Text fontWeight="700" style={{
                color:colors['taro'],
                fontSize:42,
                marginRight:200,
                fontWeight:'bold',
                marginTop:-20
            }}
            >Masuk</Text>
            <Icon name="rightcircle" size={30} />
            <StatusBar style="auto" />
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