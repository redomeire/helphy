import { useTheme } from "@react-navigation/native";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// maps
import { WebView } from "react-native-webview";

export default function Review({ navigation }) {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            // paddingTop: 40,
            backgroundColor: colors.monochrome.pepper['pepper-lighter'],
            minHeight: '100%',
            paddingBottom: 20,
            // position: 'relative'
        },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 60,
            borderRadius: 20,
            width: '75%',
            justifyContent: 'space-between',
        },
        scrollViewDetail: {
            padding: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: 'white',
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            minHeight: 400,
            overflow: 'scroll',
            // maxHeight: 700,
            bottom: -100
        },
    })

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 2, left: 0, width: '100%' }}>
                <View style={styles.searchBar}>
                    <MaterialCommunityIcons name="chevron-left" size={25} />
                    <TextInput placeholder="Cari disini" style={{ maxWidth: 100 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="search" size={25} />
                        <MaterialCommunityIcons name="microphone" size={25} />
                    </View>
                </View>
            </View>
            <WebView
                scalesPageToFit={true}
                bounces={false}
                javaScriptEnabled
                style={{
                    height: Dimensions.get('window').height,
                    width: '100%',
                    backgroundColor: colors.monochrome.pepper['pepper-light']
                }}
                source={{
                    html: `
                  <!DOCTYPE html>
                  <html>
                    <head>
                    </head>
                    <body>
                      <div id="baseDiv">
                      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.436826398629!2d112.6128415140631!3d-7.95372878144984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827994694b27%3A0x4eb4fed2fe1b7977!2sGedung%20A%20Fakultas%20Ilmu%20Komputer%20Universitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1670228535236!5m2!1sid!2sid" width="100%" height="2000" style="border:0; position: 'absolute'; top: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </body>
                  </html>
            `,
                }}
                automaticallyAdjustContentInsets={false}
            />
            <View style={{ position: 'absolute', top: 200, width: '100%', borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <ScrollView style={{ width: '100%', borderTopLeftRadius: 50, borderTopRightRadius: 50, maxHeight: 800 }}>
                    <View style={{ backgroundColor: 'white', height: 800, marginTop: 300, borderTopLeftRadius: 50, borderTopRightRadius: 50, padding: 30 }}>
                        <ScrollView nestedScrollEnabled style={{ maxHeight: 400 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fakultas Ilmu Komputer</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                                <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={25} style={{ marginHorizontal: 5 }} />
                                <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={25} style={{ marginHorizontal: 5 }} />
                                <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={25} style={{ marginHorizontal: 5 }} />
                                <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={25} style={{ marginHorizontal: 5 }} />
                                <MaterialCommunityIcons name="star-outline" size={25} style={{ marginHorizontal: 5, color: colors.primary.seaSalt['sea-salt-darker'] }} />
                                <Text style={{ marginLeft: 10 }}>( 75 )</Text>
                            </View>
                            <ScrollView nestedScrollEnabled horizontal style={{ marginBottom: 20 }}>
                                <ImageBackground source={{
                                    uri: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                }} style={{ width: 150, height: 170, marginRight: 10 }} imageStyle={{ borderRadius: 20 }} />
                                <ImageBackground source={{
                                    uri: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                }} style={{ width: 150, height: 170, marginRight: 10 }} imageStyle={{ borderRadius: 20 }} />
                                <ImageBackground source={{
                                    uri: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                }} style={{ width: 150, height: 170, marginRight: 10 }} imageStyle={{ borderRadius: 20 }} />
                                <ImageBackground source={{
                                    uri: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                }} style={{ width: 150, height: 170, marginRight: 10 }} imageStyle={{ borderRadius: 20 }} />
                                <ImageBackground source={{
                                    uri: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                }} style={{ width: 150, height: 170, marginRight: 10 }} imageStyle={{ borderRadius: 20 }} />
                                <ImageBackground source={{
                                    uri: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                }} style={{ width: 150, height: 170, marginRight: 10 }} imageStyle={{ borderRadius: 20 }} />
                            </ScrollView>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Review</Text>
                            <View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>4.0</Text>
                                    <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                                        <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={15} style={{ marginHorizontal: 2 }} />
                                        <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={15} style={{ marginHorizontal: 2 }} />
                                        <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={15} style={{ marginHorizontal: 2 }} />
                                        <MaterialCommunityIcons color={colors.secondary.turmeric['turmeric-light']} name="star" size={15} style={{ marginHorizontal: 2 }} />
                                    </View>
                                    <Text style={{ fontSize: 10 }}>32,642,013</Text>
                                </View>
                                <View>

                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}