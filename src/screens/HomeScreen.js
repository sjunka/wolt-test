import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors'


const styles = StyleSheet.create({

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Grey2.color,
    },
    contentArea: {

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 15,
        shadowColor: Colors.Grey3.color,
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        width: '70%',
        height: '70%',
        backgroundColor: Colors.Grey2.color,
    },
    openingHours: {


        width: '90%',
        height: '90%',
        borderRadius: 15,

        backgroundColor: Colors.White.color,

    },

});


const HomeScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(true);


    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentArea}>
                    <View style={styles.openingHours}>
                        <Text style={styles.text}>Loading...</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }


};

export default HomeScreen;
