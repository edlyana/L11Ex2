import React,{useState, useEffect} from 'react';
import {StatusBar, FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    homePageContainer: {
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(255, 244, 203, 1)",
    },
    bottomBarAndroidPhone: {
        position: "absolute",
        bottom: 0,
        height: 44,
        width: "100%",
        backgroundColor: "rgba(195, 189, 189, 0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    frame1: {
        margin: 20,
        backgroundColor: "rgba(224, 41, 41, 1)",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    addMember: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
    membersList: {
        paddingTop: 10,
        marginLeft: 20,
        fontSize: 30,
        color: "rgba(61, 98, 173, 1)",
        fontWeight: "bold",
    },
    flatListContainer: {
        paddingHorizontal: 20,
        // paddingBottom: 60,
    },
    rectangleBox: {
        marginVertical: 10,
        padding: 15,
        borderWidth: 1.5,
        borderColor: "rgba(61, 98, 173, 1)",
        borderRadius: 15,
        backgroundColor: "rgba(61, 98, 173, 0.1)",
    },
    userName: {
        fontSize: 21,
        color: "black",
        fontWeight: "400",
    },
    viewDetailsButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "rgba(224, 41, 41, 1)",
        borderRadius: 10,
        alignItems: "center",
    },
    viewDetailsText: {
        color: "white",
        fontSize: 15,
    },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://eb03e6934e1845a9b1e8975bde3c4a25.api.mockbin.io/")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson);
            })
    }, []);

  const renderItem = ({item, index, section}) => {
    return (
        <View style={styles.rectangleBox}>
            <Text style={styles.userName}>{item.userName}</Text>
            <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => navigation.navigate("Details", { index: index, userName: item.userName, eMail: item.eMail, phoneNo: item.phoneNo })}
            >
                <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
  };

   return (
       <View style={styles.homePageContainer}>
           <StatusBar />

           <Text style={styles.membersList}>Members List</Text>
           <FlatList
               data={myData}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
               contentContainerStyle={styles.flatListContainer}
           />
           <View style={styles.frame1}>
               <TouchableOpacity onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}>
                   <Text style={styles.addMember}>Add Member</Text>
               </TouchableOpacity>
           </View>
       </View>
  );
};

export default Home;
