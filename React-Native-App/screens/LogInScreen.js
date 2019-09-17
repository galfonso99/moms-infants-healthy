import React, { useState } from 'react';
import { View, Alert, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Image, StyleSheet, TextInput, Button } from 'react-native';

import Colors from '../constants/Colors';

const LogIn = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputButtonHandler = () => {
        if (email === 'a') {
            if (password === 'a') {
                props.onTapSignIn(email, password);
            }
            else {
                Alert.alert('Wrong password');
            }
        }
        else {
            Alert.alert('Wrong email');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Image
                    source={require('../assets/mom-and-baby-icon.png')}
                    style={styles.profileIcon} />
                <View style={styles.box}>
                    <View style={styles.inputField}>
                        <Image source={require('../assets/email.png')} />
                        <View style={{ width: 20, margin: 2 }} />
                        <TextInput
                            placeholder='e-mail address'
                            onChangeText={text => setEmail(text)}
                            style={styles.textInput}
                            autoCompleteType={'email'}
                        />
                    </View>
                    <View style={styles.seperatorLine} />
                    <View style={styles.inputField}>
                        <Image source={require('../assets/lock.png')} />
                        <View style={{ width: 20, margin: 2 }} />
                        <TextInput
                            placeholder='password'
                            onChangeText={text => setPassword(text)}
                            style={styles.textInput}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <TouchableHighlight
                    style={styles.signInButton}
                    onPress={() => inputButtonHandler()} 
                    underlayColor={'rgba(213, 170, 255, 0.8)'} >
                        <Text style={{fontSize:18,color:'black'}}>Sign In!</Text>
                </TouchableHighlight>
                <View style={styles.seperator}>
                    <TouchableOpacity style={{ opacity: 0.8 }}><Text>Forgot Password?</Text></TouchableOpacity>
                    <TouchableOpacity style={{ opacity: 0.8 }}><Text>New mom? Sign Up!</Text></TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginBottom: 200,
    },
    box: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5,
        backgroundColor: Colors.boxBackground,
        margin: 10,
        padding: 10,
        width: '80%',
        height: '20%'
    },
    inputField: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    textInput: {
        margin: 5,
        fontSize: 15,
        width: '80%',
    },
    profileIcon: {
        marginBottom: 40,
    },
    signInButton: {
        marginTop: 50,
        padding: 10,
        backgroundColor: Colors.boxBackground,
        width: '40%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    seperatorLine: {
        width: '100%',
        borderBottomColor: Colors.PurpleBackground,
        borderBottomWidth: 1,
    },
    seperator: {
        width: '80%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        bottom: -50
    }
});

export default LogIn;