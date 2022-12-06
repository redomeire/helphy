import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput, Touchable, Button, Text, ScrollView, View, Image, ImageBackground, Pressable, TouchableOpacity,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Riwayat({Navigation}){

    const data = [
        {
            icon: 'T',
            nama: 'Tobias',
            chat: 'Haloo Claris, gimana kabar?'
        },
        {
            icon: 'C',
            nama: 'Claris',
            chat: 'Iya kabar aku baik'
        },
        {
            icon: 'A',
            nama: 'Ayya',
            chat: 'Halo rafli masih kangen?'
        },
        {
            icon: 'R',
            nama: 'Rafli',
            chat: 'Iya sebenernya aku kangen....'
        }
    ]

    return(
        <ScrollView>
            <View style={{ marginTop:50, marginHorizontal:35}}>
                <StatusBar style='auto'/>
                <Text style={{
                    fontSize:24,
                    fontWeight:'700',
                    color:'#1F103C'
                }}>Chat</Text>
            </View>
                    <View style={{
                    borderColor: '#C2AFE9',
                    borderWidth:1,
                    marginTop:10,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    }}/>
            <View style={styles.container}>
                <Text>Pilihan Fitur</Text>
                <View style={{flexDirection:'column'}}>
                    <Pressable style={{flexDirection:'row', justifyContent:'center',}}>
                        <Feather style={styles.iconAtasKiri} name='inbox' size={40}/>
                        <AntDesign style={styles.iconAtasKanan} name='questioncircleo' size={40}/>
                    </Pressable>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <Text style={{marginHorizontal:35, marginTop:10}}>Inbox</Text>
                        <Text style={{marginHorizontal:25, marginTop:10}}>Bantuan</Text>
                    </View>
                </View>
                <Text style={{
                    fontWeight:'600',
                    fontSize:14,
                    marginTop:20
                }}>Chat Kamu</Text>

                <View>
                    {
                        data.map((item, index) => {
                            return(
                                <View key={index} style={{flexDirection:'row', marginTop:20}}>
                                    <View style={styles.iconBawah}>
                                        <Text style={{fontSize:28, color:'white', paddingLeft:5}}>{item.icon}</Text>
                                    </View>
                                    <View style={styles.box}>
                                        <Text style={{
                                            fontSize:16,
                                            fontWeight:'700',
                                            paddingBottom:5
                                        }}>{item.nama}</Text>
                                        <Text>{item.chat}</Text>
                                        <View style={{
                                            borderColor: '#AAAAAA',
                                            borderWidth:1,
                                            marginTop:5,
                                            width:500,
                                            borderBottomWidth: StyleSheet.hairlineWidth,}}/>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:35,
        color:'#1F103C',
        fontSize:12
    },
    iconAtasKiri:{
        color:'white',
        backgroundColor:'#48268C',
        padding:10,
        borderRadius:50,
        marginHorizontal:20,
        marginTop:25
    },
    iconAtasKanan:{
        color:'white',
        backgroundColor:'#5F33BA',
        padding:10,
        borderRadius:50,
        marginHorizontal:20,
        marginTop:25
    },
    iconBawah:{
        backgroundColor:'#7F4FE3',
        width:50,
        paddingTop:5,
        paddingLeft:10,
        height:50,
        borderRadius: 100
    },
    box:{
        paddingLeft:20
    }
})