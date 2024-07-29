import React,{ useEffect,useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


import { firebaseAuth } from '../config/firebase';

export default function Registrar({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    
    const auth = firebaseAuth;

    const handlerCreateAccount = async() => {
        try{
          const response = await createUserWithEmailAndPassword(auth, email, password);
          console.log(response);
          alert('Registro completado');
          navigation.navigate('Login');
        }
        catch (error){
          console.log(error);
        }
    }

    const Volver = async() => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
          <Text style={styles.textofInputspace}>Registrarse</Text>
          <View>
            <Text style={styles.textofInput}>E-mail</Text>
            <TextInput style={styles.Input} value={email} onChangeText={(text) => setEmail(text)}/>
            <Text style={styles.textofInput}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.Input} value={password} onChangeText={(text) => setPassword(text)}/>            
          </View>

          <TouchableOpacity onPress={handlerCreateAccount} style={styles.BotonRegistrar}>
            <Text style={styles.textRegistrar}>Registrarse</Text>
          </TouchableOpacity>    
          <TouchableOpacity onPress={Volver} style={styles.BotonRegistrar}>
            <Text style={styles.textRegistrar}>Volver</Text>
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

    textofInput: {
      textAlign: 'center',
      color: "#FFF", fontWeight: '800', textTransform: 'uppercase',
      fontSize: 20
    },

    textofInputspace: {
      textAlign: 'center',
      color: "#FFF", fontWeight: '800', textTransform: 'uppercase',
      fontSize: 40,
      marginBottom: 100
    },

    Input: {
      backgroundColor:'#A79277',
      color: "#fff", fontWeight:'800',
      width:250,
      height: Platform.OS === 'ios' ? 50 : 50, // Estilo de la barra de pestañas, altura diferente para iOS y Android
      borderRadius:5,
      padding: 5,
      marginVertical:10
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
     
  });
