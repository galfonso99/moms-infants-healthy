import React, { Component, useState } from 'react';
import { Text, View, TouchableHighlight, Image, TextInput as TextBox } from 'react-native';
import goBackImg from "../../assets/go-back-arrow.png";
import appStyles from "./AppStyles";
import * as Haptics from "expo-haptics";
import passwordReset from '../Firebase';
import translate from "app/Components/getLocalizedText";


const ForgotPasswordPage = (props) => {
    
    const [email, setEmail] = useState(null);

    onChangeText = (object) => {
        setEmail(object);
      };

    goBack = () => {
        Haptics.selectionAsync().then();
        props.goBack();
      };

    isValidEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    PasswordReset = async (email) => {
        await Haptics.selectionAsync();

        try {
            if(!isValidEmail(email)){
                return alert("Invalid Email: Please input Valid Email");
            }
            await passwordReset(email);
            alert("Password Reset email sent Successfully!!\n Check your email ");
            console.log("Password Reset email sent Successfully!")
            props.setScreen('login');
            
        } catch (error) {
            alert("Sorry something went wrong Unsuccessful.");
            console.log(error);
        }

       
    }

        return (
            <View style={{flex: 1}}>
                <TouchableHighlight
                    onPress={goBack}
                    underlayColor={"transparent"}
                    style={{
                    height: appStyles.win.height * 0.04,
                    marginTop: "8%",
                    marginLeft: "3%",
                    marginBottom: '5%',
                    width: appStyles.win.width * 0.07,
                    }}
                >
                <Image
                    style={{
                        height: appStyles.win.width * 0.06,
                        width: appStyles.win.width * 0.06,
                    }}
                    source={goBackImg}/>
                </TouchableHighlight>
                <View>
                    <Text 
                        style={{
                        color: appStyles.pinkColor,
                        fontSize: appStyles.titleFontSize,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                        }}>{translate("forgotPassword")}</Text>
                </View>

                <View style={{marginTop: appStyles.win.height * 0.1, alignItems: 'center'}}>
                    <Text style={appStyles.titleBlue}>{translate("emailInput")}:</Text>
                    <View style={appStyles.TextInput.View}>
                        <TextBox
                        placeholder={translate("emailInput")}
                        style={appStyles.TextInput.TextInput}
                        value={email}
                        onChangeText={(e)=> onChangeText(e)}
                        />
                    </View>

                    <TouchableHighlight style={appStyles.button.TouchableHighlight} underlayColor={appStyles.blueColor}  
                    onPress={() => PasswordReset(email)} >
                    <Text style={appStyles.button.text}>{translate("send")}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    
}


export default ForgotPasswordPage;