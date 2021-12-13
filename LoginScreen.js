import React, { Component } from "react";
import{
View, 
StyleSheet,
ImageBackground,
Image, 
TextInput, 
TouchableOpactiy,
Text,
Alert,
KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""

        };
    }

handleLogin = {email,password} => {
    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(() => {
        this.props.navigation.navigate("BottomTab");
    })
    .cathc(error => {
        Alert.alert(error.message);
    })
};

render() {
    const { email,password } = this.state;
    return (
<KeyboardAvoidingView behaviour="padding" style={Styles.container}>
    <ImageBackground source={bgImage} syle={Styles.bgImage}>
        <View style={syles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
             <Image source={appName} style={styles.appName} />
             </View>
             <TextInput
             style={styles.TextInput}
             onChangeText={text => this.setState({email:text})}
             placeHolder={"Enter Email"}
             placeholderTextColor={#FFFFFF}
             autoFocus 
             />
    )
}
}



















}