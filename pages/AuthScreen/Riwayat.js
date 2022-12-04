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
    const { colors } = useTheme();

    const data = [
        {
            tanggal: 'Rabu, 02 Juni 2022',
            barang: 'Kursi Roda',
            icon: <FontAwesome name="wheelchair" style={styles.icon}  size={30}/>,
            tempat: 'FILKOM'
        },
        {
            tanggal: 'Jumat, 10 Juni 2022',
            barang: 'Tongkat Kruk',
            icon: <FontAwesome5 name="crutch" style={styles.icon} size={30} />,
            tempat: 'FIA'
        },
        {
            tanggal: 'Minggu, 30 November 2022',
            barang: 'Tangan Robotik',
            icon: <MaterialCommunityIcons name="robot-industrial" style={styles.icon} size={30}/>,
            tempat: 'FILKOM'
        },
    ]

    const pilihan = () => {
        const {colors} = useTheme();
        

        return(
            <View style={{
                flexDirection: 'column'
            }}>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <ScrollView>
            <View>
                <StatusBar style="auto"/>
                <View style={{
                    flexDirection:'row',
                    marginTop: 50,
                    marginRight:40,
                    marginLeft:20,
                    alignItems:'center'
                }}>
                    <MaterialCommunityIcons name="chevron-left" size={30}/>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color:'#1F103C',
                        marginLeft:20
                    }}>Riwayat</Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Pressable style={(state) => [styles.button, state.focused && styles.change]}>
                        <Text style={styles.text}>Tempat</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Ascending</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Descending</Text>
                    </Pressable>
                </View>

                <View style={{
                    borderColor: '#C2AFE9',
                    borderWidth:1,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    }}/>

                <View style={styles.container}>
                    {
                        data.map((item, index) => {
                            return(
                                <View key={index}>
                                    <Text style={styles.tanggal}>{item.tanggal}</Text>
                                    <View style={{flexDirection:'row', marginVertical:30, justifyContent:'space-between', alignItems:'center'}}>
                                        <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
                                            <View>{item.icon}</View>
                                            <Text style={styles.keterangan}>{item.barang}</Text>
                                        </View>
                                        <Text style={styles.keterangan}>{item.tempat}</Text>
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
    button:{
        justifyContent:'center',
        padding:10,
        marginVertical:20,
        marginHorizontal:5,
        paddingHorizontal:20,
        borderWidth:1.5,
        borderRadius: 20,
        fontSize:'10',
        backgroundColor:'white',
        border:1,
        borderColor: '#7F4FE3',
    },
    change:{
        backgroundColor:'#7F4FE3',
        color:'white'
    },
    focusOutline: {
        outlineStyle: "solid",
        outlineWidth: 4,
        outlineColor: "skyblue", 
        outlineOffset: 2,
    },
    text:{
        color:'#7F4FE3',
        fontWeight:'500'
    },
    tanggal:{
        fontSize:20,
        fontWeight:'700'
    },
    container:{
        marginTop:30,
        marginHorizontal:35
    },
    icon:{
        color:'#E68C00',
        backgroundColor:'#48268C',
        borderRadius:50,
        padding:7
    },
    penjelasan:{
        flexDirection:'row',
    },
    keterangan:{
        fontSize:16,
        fontWeight:'500',
        marginLeft:20
    }
})