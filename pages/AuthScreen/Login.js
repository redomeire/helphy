import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput, Button, Text, ScrollView, View, Image, ImageBackground, Pressable, TouchableOpacity,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import axios from 'axios';
import { createAlert } from '../../components/alert/Alert';

export default function Login({ navigation }) {
    const { fonts, colors } = useTheme();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const fetchingData = () => {
        axios.post('https://reqres.in/api/login', {
            email,
            password
        })
        .then((res) => {
            console.log(res.data);
            createAlert(
                'Success login',
                'Hope you enjoy the app!',
                'ok',
                () => { navigation.navigate('BottomAppBarScreen') }
            )
        })
        .catch((err) => {
            console.log(err);
            createAlert(
                'Error login',
                'email/password not valid',
                'ok',
                () => {}
            )
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                source={require('../../assets/Login-SignUp/Saly-1.png')}
                style={{
                    width: 400,
                    height: 400
                }}
                />
                <Text fontWeight="700" style={{
                    color:colors.primary.taro['taro'],
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
                            color:colors.primary.taro['taro-light'],
                            marginTop:10
                        }}>
                        </MaterialCommunityIcons>
                        <TextInput 
                        placeholder='Email' 
                        style={styles.input}
                        textContentType='emailAddress'
                        onChangeText={text => setEmail(text)}
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
                            color:colors.primary.taro['taro-light'],
                            marginTop:10
                        }}>
                        </Feather>
                        <TextInput 
                        placeholder='Password' 
                        style={styles.input}
                        textContentType='password'
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        />
                    </View>

                    <Text
                    style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        marginTop:10,
                        marginBottom:10,
                        fontSize:13,
                        color:'#006266',
                        textAlign:'right'
                    }}
                    >Lupa Password?</Text>

                    <TouchableOpacity onPress={() => fetchingData()} style={styles.button}>
                        <Text style={styles.text}>Masuk</Text>
                    </TouchableOpacity>

                    <Text
                    style={{
                        textAlign:'center',
                        marginTop:20,
                        fontSize:13,
                        color:'#006266',
                        fontWeight:'400',
                    }}
                    >Lanjutkan dengan</Text>
                </View>

                <View>
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
                            backgroundColor: colors.primary.taro['taro-lightest'],
                            marginRight:10
                        }}>
                            <AntDesign name='google' size={30} style={{
                                color:colors.primary.taro['taro'],
                            }}></AntDesign>
                        </Pressable>

                        <Pressable style={{
                            marginTop:10,
                            padding:15,
                            borderRadius:10,
                            paddingLeft:30,
                            paddingRight:30,
                            backgroundColor: colors.primary.taro['taro-lightest']
                        }}>
                            <AntDesign name='apple1' size={30} style={{
                                color:colors.primary.taro['taro'],
                            }}></AntDesign>
                        </Pressable>
                    </View>

                    <Text style={{
                        marginBottom:20,
                        fontWeight:'400',
                        fontSize:13,
                        color:'#006266',
                        textAlign:'center',
                    }}>Belum punya akun? <Text onPress={() => navigation.navigate('Register')} style={{color: colors.primary.taro['taro'], fontWeight:'600'}}>Daftar</Text></Text>
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
});