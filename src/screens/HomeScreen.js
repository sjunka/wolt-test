import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

import OpeningHeader from '../components/OpeningHeader';
import ClosedDay from '../components/ClosedDay';
import TodayDay from '../components/TodayDay';
import OpenDay from '../components/OpenDay';
import useGetOpeningHours from '../hooks/useGetOpeningHours';

const styles = StyleSheet.create({
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
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: Colors.White.color,
  },
  openingHoursContainer: {
    padding: 20,
  },
  openingHoursContainerErrorLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({navigation}) => {
  const {dataOpeningTimes, loadingOpeningTimes, errorOpeningTimesResponse} =
    useGetOpeningHours();

  if (errorOpeningTimesResponse) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentArea}>
          <View style={styles.openingHours}>
            <View style={styles.openingHoursContainerErrorLoading}>
              <Text>Oops something went wrong...</Text>
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
              <Text>Loading...</Text>
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
              <OpeningHeader />
              <ClosedDay day="Monday" closed />
              <TodayDay day="Tuesday" today openingHours="10 AM - 6 PM" />
              <OpenDay day="Wednesday" openingHours="12 PM - 9 PM" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
