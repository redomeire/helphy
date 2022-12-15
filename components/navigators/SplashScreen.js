import { View, Image } from "react-native";

const SplashScreen = () => {
    return ( 
        <View style={{ minHeight: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image 
            style={{ width: 150, height: 200 }}
            source={require('../../assets/SplashScreen/helphy-logo.png')} />
        </View>
     );
}
 
export default SplashScreen;