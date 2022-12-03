import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, ImageBackground, FlatList } from 'react-native';

export default function Home({ navigation }) {
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
            // minHeight: 100,
            // maxHeight: 150,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            padding: 20,
            paddingTop: 30,
            // paddingBottom: 200,
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
            deskripsi: 'Temukan alat bantu yang kamu cari'
        },
        {
            title: 'Pendamping',
            deskripsi: 'Pendamping akan membantumu melakukan aktivitas'
        },
        {
            title: 'Review Tempat',
            deskripsi: 'Temukan tempat yang nyaman untuk teman Helphy'
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.view}>
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
                <Text style={{
                    marginLeft: 20,
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Halo, Rehan baik!</Text>
            </View>
            <FlatList 
            contentContainerStyle={{flexGrow: 1}}
            data={data}
            style={styles.scroll_container}
            renderItem={
                ({item}) => (
                <View style={styles.card}>
                    <ImageBackground
                        source={{
                            uri: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        }}
                        style={{
                            height: 70,
                            width: '100%',
                            overflow: 'hidden',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    />
                    <View style={{
                        padding: 5
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
                        <Text>{item.deskripsi}</Text>
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