import React from 'react';
import {StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    frame1: {
        margin: 20,
        backgroundColor: "rgba(224, 41, 41, 1)",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    detailsContainer: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(61, 98, 173, 1)",
        borderRadius: 10,
    },
    detailsText: {
        fontSize: 18,
        color: "black",
        marginBottom: 10
    },
});

const Details = ({ navigation, route }) => {

    const { userName, eMail, phoneNo } = route.params;  // no need to get from myData just get data by using route.params

    return (
        <View style={{backgroundColor:'rgba(255, 244, 203, 1)'}}>
            <StatusBar />
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}><Text style={{fontWeight: "bold"}}>Full Name:</Text> {userName}</Text>
                <Text style={styles.detailsText}><Text style={{fontWeight: "bold"}}>Email:</Text> {eMail}</Text>
                <Text style={styles.detailsText}><Text style={{fontWeight: "bold"}}>Phone Number:</Text> {phoneNo}</Text>
            </View>

            <View style={styles.frame1}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text style={{ color: "white", fontSize: 16 }}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;
