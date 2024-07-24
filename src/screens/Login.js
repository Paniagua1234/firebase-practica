import React,{ useEffect,useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebase-config'
import { TextInput } from 'react-native-gesture-handler';
import { text } from 'stream/consumers';
import { error } from 'console';
import { firebaseAuth } from '../config/firebase';


export default function Login({ navigation }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = firebaseAuth;

    const handlerCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then ((userCredential) => {
            console.log('Usuario creado')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Credenciales correctas')
            const user = userCredential.user;
            console.log(user)
        })
        .catch( error => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
          <View style={[styles.loginContainer, { backgroundColor: '#333', borderWidth: 2, borderColor: '#fff' }]}>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={(text) => setEmail(text)}/>
            <Text>Contraseña</Text>
            <TextInput value={password} onChangeText={(text) => setPassword(text)}/>            
          </View>

          <TouchableOpacity onPress={handleSignIn} style={styles.BotonRegistrar}>
            <Text style={styles.textRegistrar}>Acceder</Text>
          </TouchableOpacity>    
          <TouchableOpacity onPress={handlerCreateAccount} style={styles.BotonRegistrar}>
            <Text style={styles.textRegistrar}>Registrar Usuario</Text>
          </TouchableOpacity>
    
        
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F01212',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      button: {
        borderWidth: 2,
        borderColor: "#AF8260",
        width: 150,
        borderRadius: 10,
        backgroundColor: "#AF8260",
        padding: 10,
        marginVertical: 10
      },
    
      BotonRegistrar: {
        borderWidth: 2,
        borderColor: "#FFFFFF",
        width: 150,
        borderRadius: 10,
        marginTop: 20,
        width: 250,
        backgroundColor: '#000000',
        padding: 10,
      },
    
      buttonText: {
        textAlign: 'center',
        color: "#FFF", fontWeight: '800', textTransform: 'uppercase'
      },
    
      texto: {
        color: '#FFFFFF', fontWeight: '900',
        fontSize: 20
      },
    
      textRegistrar: {
        color: '#FFFFFF', 
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18
      },
    
      image: {
        width: 150,
        height: 75,
        marginBottom: 10
      },
    
      loginContainer: {
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    
      inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
    
      loginButton: {
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
    
      closeButton: {
        marginTop: 10,
      },
    
      closeText: {
        color: '#fff',
        textDecorationLine: 'underline',
      },
    });
    