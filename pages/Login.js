import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput, Button, Text, ScrollView, View, Image, ImageBackground, Pressable,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login() {
    const { fonts, colors } = useTheme();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                source={require('../assets/Saly-1.png')}
                style={{
                    width: 400,
                    height: 400
                }}
                />
                <Text fontWeight="700" style={{
                    color:colors['taro'],
                    fontSize:42,
                    marginRight:200,
                    fontWeight:'bold',
                    marginTop:-20
                }}
                >Masuk</Text>

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

                    <Text
                    style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        marginTop:10,
                        marginBottom:10,
                        fontSize:13,
                        textAlign:'right'
                    }}
                    >Lupa Password?</Text>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Masuk</Text>
                    </Pressable>

                    <Text
                    style={{
                        textAlign:'center',
                        marginTop:20,
                        fontSize:13,
                        fontWeight:'400',
                    }}
                    >Lanjutkan dengan</Text>
                </View>

                <View style={{

                }}>
                    <View style={{
                        flexDirection:'row',
                        marginBottom:20
                    }}>
                        <Pressable style={{
                            marginTop:10,
                            padding:15,
                            paddingLeft:30,
                            borderRadius:10,
                            paddingRight:30,
                            backgroundColor: colors['taro-lightest'],
                            marginRight:10
                        }}>
                            <AntDesign name='google' size={30} style={{
                                color:colors['taro'],
                            }}></AntDesign>
                        </Pressable>

                        <Pressable style={{
                            marginTop:10,
                            padding:15,
                            borderRadius:10,
                            paddingLeft:30,
                            paddingRight:30,
                            backgroundColor: colors['taro-lightest']
                        }}>
                            <AntDesign name='apple1' size={30} style={{
                                color:colors['taro'],
                            }}></AntDesign>
                        </Pressable>
                    </View>

                    <Text style={{
                        marginBottom:20,
                        fontWeight:'400',
                        fontSize:13,
                        textAlign:'center',
                    }}>Belum punya akun? <Text style={{color:colors['taro'], fontWeight:'600'}}>Daftar</Text></Text>
                </View>

                <StatusBar style="auto" />
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
        marginLeft:40,
        elevation: 5,
        backgroundColor: '#7F4FE3',
    },
    text:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    bgIcon:{
        
    }
});