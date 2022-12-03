import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, StatusBar } from 'react-native';

// images
import AlatBantu from "../assets/Home/alat-bantu.png";
import Pendamping from "../assets/Home/pendamping.png";
import ReviewTempat from "../assets/Home/review-tempat.png";

// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({navigation}) {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        view: {
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 40,
            marginHorizontal: 20
        },
        container: {
            paddingTop: 50,
            height: '100%',
            backgroundColor: colors['taro-dark']
        },
        scroll_container: {
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            padding: 20,
            paddingTop: 30,
            paddingHorizontal: 35,
        },
        card: {
            backgroundColor: 'white',
            borderRadius: 5,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        }
    });

    const data = [
        {
            title: 'Alat Bantu',
            deskripsi: 'Temukan alat bantu yang kamu cari',
            image: AlatBantu,
            onPress: 'Alat'
        },
        {
            title: 'Pendamping',
            deskripsi: 'Pendamping akan membantumu melakukan aktivitas',
            image: Pendamping,
            onPress: 'Pendamping'
        },
        {
            title: 'Review Tempat',
            deskripsi: 'Temukan tempat yang nyaman untuk teman Helphy',
            image: ReviewTempat,
            onPress: 'Tempat'
        },
    ]

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor={colors['taro-dark']}
            />
            <Image
                source={require('../assets/Home/background.png')}
                style={{
                    position: 'absolute',
                    width: '100%',
                }}
            />
            <View style={styles.view}>
                <View style={{ padding: 2, backgroundColor: 'white', borderRadius: 50 }}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                        }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50
                        }}
                    />
                </View>
                <Text style={{
                    marginLeft: 20,
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Halo, Rehan baik!</Text>
            </View>
            <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                data={data}
                style={styles.scroll_container}
                renderItem={
                    ({ item }) => (
                        <View onTouchStart={() => navigation.navigate(item.onPress)} style={styles.card}>
                            <ImageBackground
                                source={item.image}
                                style={{
                                    height: 70,
                                    width: '100%',
                                    overflow: 'hidden',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}
                            />
                            <View style={{
                                // padding: 5,
                                paddingVertical: 6,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
                                    <Text style={{ color: 'gray' }}>{item.deskripsi}</Text>
                                </View>
                                <MaterialCommunityIcons name='chevron-right'
                                size={25}
                                />
                            </View>
                        </View>
                    )
                }
            >

            </FlatList>
            <StatusBar style="auto" />
        </View>
    )
}