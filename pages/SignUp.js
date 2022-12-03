import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput, Button, Text, ScrollView, View, Image, ImageBackground, Pressable,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login() {
    const { colors } = useTheme()

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                source={require('../assets/Login-SignUp/Saly-12.png')}
                style={{
                    width: 355,
                    height:355
                }}
                />
                <Text fontWeight="700" style={{
                    color:colors['taro'],
                    fontSize:40,
                    marginRight:200,
                    fontWeight:'bold',
                    marginTop:-20,
                    marginLeft:-55
                }}
                >Daftar</Text>

                <View style={{
                        flexDirection:'row',
                        marginTop:20
                    }}>
                    <Feather
                    name="type" 
                    size={30} 
                    style={{
                        color:colors['taro-light'],
                        marginTop:10
                    }}>
                    </Feather>
                    <TextInput 
                    placeholder='Nama Lengkap' 
                    style={styles.input}
                    />
                </View>
                
                <View style={{
                    flexDirection:'column',
                    marginTop:20
                }}>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        <MaterialCommunityIcons 
                        name="alternate-email" 
                        size={30} 
                        style={{
                            color:colors['taro-light'],
                            marginTop:10
                        }}>
                        </MaterialCommunityIcons>
                        <TextInput 
                        placeholder='Email' 
                        style={styles.input}
                        />
                    </View>
                    
                    <View style={{
                        flexDirection:'row',
                        marginTop:20
                    }}>
                    <Feather
                    name="phone" 
                    size={30} 
                    style={{
                        color:colors['taro-light'],
                        marginTop:10
                    }}>
                    </Feather>
                    <TextInput 
                    placeholder='Nomor Telepon' 
                    style={styles.input}
                    />
                </View>
                
                    <View style={{
                        flexDirection:'row',
                        marginTop:20
                    }}>
                    <Feather
                        name="lock" 
                        size={30} 
                        style={{
                            color:colors['taro-light'],
                            marginTop:10
                        }}>
                        </Feather>
                        <TextInput 
                        placeholder='Password' 
                        style={styles.input}
                        />
                    </View>
                </View>

                <Text style={{
                    marginBottom:20,
                    fontWeight:'400',
                    fontSize:13,
                    justifyContent:'center',
                    marginTop:30,
                    color:'#006266',
                    width:350
                }}>Dengan melakukan pendaftaran, anda telah menyetujui <Text style={{color:colors['taro'], fontWeight:'600'}}>syarat dan ketentuan</Text> yang berlaku. </Text>
                
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Daftar</Text>
                </Pressable>

                <Text style={{
                        marginBottom:20,
                        fontWeight:'400',
                        fontSize:13,
                        color:'#006266',
                        textAlign:'center',
                    }}>Sudah punya akun? <Text style={{color:colors['taro'], fontWeight:'600'}}>Masuk.</Text></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        justifyContent: 'flex-start',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:15,
        padding:10,
        width:300,
        marginLeft:20
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        cursor:'pointer',
        borderRadius: 20,
        width:270,
        marginBottom:10,
        elevation: 5,
        backgroundColor: '#7F4FE3',
    },
    text:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
});