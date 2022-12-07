import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput, Button, Text, ScrollView, View, Image, ImageBackground, Pressable, TouchableOpacity,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import React from 'react';

export default function Login({ navigation }) {
    const { colors } = useTheme();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const register = () => {
        axios.post('https://reqres.in/api/register', {
            email,
            password
        })
        .then((res) => {
            console.log(res);
            navigation.navigate('Login');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                source={require('../../assets/Login-SignUp/Saly-12.png')}
                style={{
                    width: 355,
                    height:355
                }}
                />
                <Text fontWeight="700" style={{
                    color:colors.primary.taro['taro'],
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
                        color:colors.primary.taro['taro-light'],
                        marginTop:10
                    }}>
                    </Feather>
                    <TextInput 
                    placeholder='Nama Lengkap' 
                    style={styles.input}
                    textContentType='name'
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
                    name="phone" 
                    size={30} 
                    style={{
                        color:colors.primary.taro['taro-light'],
                        marginTop:10
                    }}>
                    </Feather>
                    <TextInput 
                    placeholder='Nomor Telepon' 
                    style={styles.input}
                    textContentType='telephoneNumber'
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
                </View>

                <Text style={{
                    marginBottom:20,
                    fontWeight:'400',
                    fontSize:13,
                    justifyContent:'center',
                    marginTop:30,
                    color:'#006266',
                    width:350
                }}>Dengan melakukan pendaftaran, anda telah menyetujui <Text style={{color:colors.primary.taro['taro'], fontWeight:'600'}}>syarat dan ketentuan</Text> yang berlaku. </Text>
                
                <TouchableOpacity style={styles.button} onPress={() => register()}>
                    <Text style={styles.text}>Daftar</Text>
                </TouchableOpacity>

                <Text style={{
                        marginBottom:20,
                        fontWeight:'400',
                        fontSize:13,
                        color:'#006266',
                        textAlign:'center',
                    }}>Sudah punya akun? <Text onPress={() => navigation.navigate('Login')} style={{color:colors.primary.taro['taro'], fontWeight:'600'}}>Masuk.</Text></Text>
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