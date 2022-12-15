import { useTheme } from "@react-navigation/native";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

// redux
import { useDispatch } from "react-redux";
import { update } from "../../components/data/loginStatusReducer";

// alert
import { createAlert } from "../../components/alert/Alert";

export default function Profile({ navigation }) {
    const { colors } = useTheme();
    const dispatch = useDispatch();

    const logout = () => {
        createAlert({
            title: 'Logout from System',
            message: 'Are you sure want to log out?',
            options:
                [
                    {
                        text: 'Cancel',
                        onPress: () => { }
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            dispatch(update({ isLoggedIn: false, token: '' }));
                            
                            navigation.navigate('AuthScreen', { screen: 'Login'});
                        }
                    }
                ]
        })
    }

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            backgroundColor: colors.monochrome.pepper['pepper-lighter'],
            minHeight: '100%',
            marginBottom: 100
        },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 20, width: '75%',
            justifyContent: 'space-between',
            marginBottom: 20
        }
    })

    return (
        <ScrollView style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: colors.primary.taro['taro-darkest'], marginBottom: 20 }}>Profile</Text>
                <View style={{ borderWidth: 1, borderColor: colors.primary.taro['taro-lighter'], padding: 15, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="account-circle" size={40} color={colors.primary.taro['taro-light']} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: '700' }}>Rehan baik</Text>
                            <Text>0813304123556</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: '600', color: colors.primary.taro['taro-darkest'] }}>Ubah</Text>
                </View>
            </View>
            <View style={{ padding: 5, paddingHorizontal: 20, backgroundColor: 'white', marginBottom: 10, marginTop: 30 }}>
                <Text style={{ fontWeight: '700', marginBottom: 30, fontSize: 20 }}>Akun</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <MaterialCommunityIcons name="history" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Riwayat</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <Entypo name="language" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Pilihan Bahasa</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
            </View>
            <View style={{ padding: 5, paddingHorizontal: 20, backgroundColor: 'white', marginVertical: 10 }}>
                <Text style={{ fontWeight: '700', marginBottom: 30, fontSize: 20 }}>Bantuan</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <MaterialCommunityIcons name="help-circle-outline" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Pusat Bantuan</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
            </View>
            <View style={{ padding: 5, paddingHorizontal: 20, backgroundColor: 'white', marginVertical: 10, marginBottom: 30 }}>
                <Text style={{ fontWeight: '700', marginBottom: 30, fontSize: 20 }}>Tentang</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <MaterialCommunityIcons name="hand-heart-outline" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Keuntungan Pakai Helphy</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <MaterialCommunityIcons name="lightbulb-outline" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Panduan Helphy</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <MaterialCommunityIcons name="information-outline" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Syarat dan Ketentuan</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.primary.taro['taro'], padding: 5 }}>
                            <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={30} color='white' />
                        </View>
                        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: '700' }}>Kebijakan dan Privasi</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>
            </View>
            <View style={{ marginBottom: 100, paddingHorizontal: 20 }}>
                <Text style={{ marginBottom: 20 }}>Version 1.0</Text>
                <TouchableOpacity onPress={() => logout()} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    cursor: 'pointer',
                    borderRadius: 20,
                    width: 270,
                    marginLeft: 40,
                    elevation: 5,
                    backgroundColor: '#7F4FE3',
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Keluar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}