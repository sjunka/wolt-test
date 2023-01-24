import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors'

import useGetOpeningHours from '../hooks/useGetOpeningHours';

import { ClockIcon as ClockIconOutline } from "react-native-heroicons/outline";


const styles = StyleSheet.create({

    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: Colors.Black.color,
    },

    textGreen: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: Colors.Green.color,
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
        width: '70%',
        height: '70%',
        backgroundColor: Colors.Grey2.color,
    },
    openingHours: {
        width: '90%',
        height: '90%',
        borderRadius: 15,
        shadowColor: Colors.Grey3.color,
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: Colors.White.color,
    },
    openingHoursContainerErrorLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    openingHoursContainer: {
        padding: 20,
    },
    openingHoursStyle: {
        flexDirection: 'row',
    },
    openingHoursDays: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    todayContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    marginLeft: {
        marginLeft: 10,
    },


});


const HomeScreen = ({ navigation }) => {

    const { dataOpeningTimes, loadingOpeningTimes, errorOpeningTimesResponse } = useGetOpeningHours();

    if (errorOpeningTimesResponse) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentArea}>
                    <View style={styles.openingHours}>
                        <View style={styles.openingHoursContainerErrorLoading}>
                            <Text style={styles.text}>Oops something went wrong</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    if (loadingOpeningTimes) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentArea}>
                    <View style={styles.openingHours}>
                        <View style={styles.openingHoursContainerErrorLoading}>
                            <Text style={styles.text}>Loading...</Text>
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        );
    }

    if (dataOpeningTimes) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentArea}>
                    <View style={styles.openingHours}>

                        <View style={styles.openingHoursContainer}>

                            <View style={styles.openingHoursStyle}>
                                <ClockIconOutline color={Colors.Grey3.color} fill="none" size={24} />
                                <Text style={styles.textHeader}>Opening hours</Text>
                            </View>


                            <View style={styles.openingHoursDays}>
                                <View style={styles.todayContainer}>
                                    <Text style={styles.text}>Monday</Text>
                                    <Text style={[styles.textGreen, styles.marginLeft]}>Today</Text>
                                </View>

                                <View style={styles.closedContainer}>
                                    <Text style={styles.text}>Closed</Text>
                                </View>
                            </View>


                        </View>

                    </View>
                </View>
            </SafeAreaView>
        );
    }


};

export default HomeScreen;





