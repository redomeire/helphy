import { View, TextInput, StatusBar, StyleSheet, ImageBackground, Text, ScrollView, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";

const datas =[
    {
        title: 'Fakultas Ilmu Komputer',
        address: 'Jl. MT. Haryono No.169, Ketawanggede, Kec. Lowokwaru, Kota Malang.',
        imageUrl: 'https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        title: 'Fakultas Ilmu Budaya',
        address: 'Jl. MT. Haryono No.169, Ketawanggede, Kec. Lowokwaru, Kota Malang.',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        title: 'Fakultas Kedokteran',
        address: 'Jl. MT. Haryono No.169, Ketawanggede, Kec. Lowokwaru, Kota Malang.',
        imageUrl: 'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'
    },
]

const PlaceCard = ({ navigation, title, address, imageUrl }) => {
    const { colors } = useTheme();

    return (
        <Pressable onPress={() => navigation.navigate('ReviewScreen', { screen: 'Review' })} style={{ borderRadius: 25, padding: 20, backgroundColor: 'white', marginBottom: 30 }}>
            <ImageBackground source={{
                uri: imageUrl
            }} style={{
                height: 100,
            }} imageStyle={{ borderRadius: 25 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>{title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 12, color: colors.monochrome.pepper['pepper'] }}>{address}</Text>
                <MaterialCommunityIcons name="chevron-right" size={25}/>
            </View>
        </Pressable>
    );
}

const ReviewTempat = ({ navigation }) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            paddingTop: 40,
            backgroundColor: colors.monochrome.pepper['pepper-lighter'], minHeight: '100%',
            paddingBottom: 20
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
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.searchBar}>
                    <MaterialCommunityIcons name="chevron-left" size={25} />
                    <TextInput placeholder="Cari disini" style={{ maxWidth: 100 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="search" size={25} />
                        <MaterialCommunityIcons name="microphone" size={25} />
                    </View>
                </View>
            </View>
            <ScrollView style={{ paddingHorizontal: 20, marginBottom: 80 }}>
                {
                    datas.map((item, idx) => {
                        return(
                            <PlaceCard 
                            key={idx}
                            title={item.title} 
                            imageUrl={item.imageUrl}
                            address={item.address} navigation={navigation}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

export default ReviewTempat;