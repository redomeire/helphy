import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const AlatBantu = () => {
    const { isLoggedIn, token } = useSelector(state => state.loginStatus);

    return ( 
        <View>
            <Text style={{ marginTop: 30 }}>login status: { isLoggedIn.toString() }</Text>
            <Text style={{ marginTop: 30 }}>token: { token }</Text>
        </View>
     );
}
 
export default AlatBantu;