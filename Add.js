import React,{useState} from 'react';
import {StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    signUpPageContainer: {
        flex: 1,
        backgroundColor: "rgba(255, 244, 203, 1)",
        alignItems: "center",
    },
    rectangle1: {
        width: "100%",
        height: 323,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: "rgba(61, 98, 173, 1)",
    },
    rectangle9: {
        marginTop: -140, // Overlap slightly with the blue header
        width: "90%",
        backgroundColor: "rgba(254, 253, 235, 1)",
        borderRadius: 30,
        padding: 20,
        alignItems: "center",
    },
    username: {
        width: "100%",
        textAlign: "left",
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "400",
        marginBottom: 8,
    },
    rectangle6: {
        width: "100%",
        height: 48,
        borderWidth: 1.5,
        borderColor: "rgba(0, 0, 0, 1)",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    email: {
        width: "100%",
        textAlign: "left",
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "400",
        marginBottom: 8,
    },
    rectangle7: {
        width: "100%",
        height: 48,
        borderWidth: 1.5,
        borderColor: "rgba(0, 0, 0, 1)",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    phoneNumber: {
        width: "100%",
        textAlign: "left",
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "400",
        marginBottom: 8,
    },
    termsandConditions: {
        textAlign: "center",
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "400",
        marginTop: 20,
    },
    frame1: {
        marginTop: 20,
        width: "80%",
        backgroundColor: "rgba(224, 41, 41, 1)",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
    },
    signUp: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "400",
    },
    registration: {
        paddingLeft: 10,
        textAlign: "left",
        color: "rgba(61, 98, 173, 1)",
        fontFamily: "Braah One",
        fontSize: 30,
        fontWeight: 400
    },
    backBtn:{
        paddingRight: 10,
        textAlign: "left",
        color: "rgba(61, 98, 173, 1)",
        fontFamily: "Braah One",
        fontSize: 30,
        fontWeight: 400
    }
})

const Add = ({navigation, route}) => {
    const[name,setName] = useState("");
    const[email, setEmail] = useState("");
    const [phoneNo,setPhoneNo] = useState("");

    return(
            <View style={styles.signUpPageContainer}>
                <StatusBar/>
                <View style={styles.rectangle1} />

                <View style={styles.rectangle9}>

                    <View style={{flexDirection: "row", paddingBottom:15}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.backBtn}>🔙</Text>
                        </TouchableOpacity>

                        <Text style={styles.registration}>Registration</Text>
                    </View>


                    <Text style={styles.username}>Username:</Text>
                    <TextInput style={styles.rectangle6} onChangeText={(text) => setName(text)} />

                    <Text style={styles.email}>Email:</Text>
                    <TextInput style={styles.rectangle6} onChangeText={(text) => setEmail(text)} />

                    <Text style={styles.phoneNumber}>Phone Number:</Text>
                    <TextInput style={styles.rectangle7} onChangeText={(text) => setPhoneNo(text)} />

                    <Text style={styles.termsandConditions}>
                        By signing up, you agree to the{" "}
                        <Text style={{ color: "rgba(40, 44, 161, 1)", textDecorationLine: "underline" }}>
                            Terms and Conditions
                        </Text>
                    </Text>
                </View>

                <View style={styles.frame1}>
                    <TouchableOpacity
                        onPress={() => {
                            let myData = JSON.parse(route.params.datastr);
                            let item = {name: name, email: email, phoneNo: phoneNo};
                            myData.push(item);

                            fetch("https://eb03e6934e1845a9b1e8975bde3c4a25.api.mockbin.io/", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "placeholderValue"
                                },
                                body: JSON.stringify(myData)
                            })
                                .then((response) => {
                                    navigation.navigate("Home");
                                })
                                .catch((error) => {
                                    console.error(error); // Optional: Handle error here
                                });
                        }}
                    >
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}

export default Add;
