import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

import OpeningHeader from '../components/OpeningHeader';
import ClosedDay from '../components/ClosedDay';
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
    height: '60%',
    backgroundColor: Colors.Grey2.color,
  },
  openingHours: {
    width: '100%',
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

  const currentDayNumber = (new Date().getDay() + 7 - 1) % 7; // Monday first(0), Sunday last

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

              {Object.entries(dataOpeningTimes).map(
                ([dayName, hoursData], index, array) => {
                  const isClosed = hoursData.length === 0;

                  if (isClosed) {
                    return (
                      <ClosedDay
                        key={dayName}
                        day={dayName}
                        isToday={index === currentDayNumber}
                        isClosed
                      />
                    );
                  }

                  let start = 0;
                  let end = hoursData.length - 1;
                  let hoursDataCopy = [...hoursData];

                  if (hoursData[end].type === 'open') {
                    const nextIndex = index === array.length ? 0 : index + 1;
                    const nextDayClosing = array[nextIndex][1][0].value;
                    hoursDataCopy = hoursDataCopy.concat({
                      type: 'close',
                      value: nextDayClosing,
                    });
                  }

                  if (hoursData[start].type === 'close') {
                    hoursDataCopy = hoursDataCopy.slice(1);
                  }

                  const openClosePairs = hoursDataCopy.reduce(
                    (acc, curr, i) => {
                      return i % 2 === 0
                        ? [...acc, [curr.value]]
                        : [
                            ...acc.slice(0, -1),
                            [...acc.slice(-1)[0], curr.value],
                          ];
                    },
                    [],
                  );

                  const openingHoursStr = openClosePairs.reduce(
                    (acc, openClosePair, i) => {
                      const openTimeHours = openClosePair[0] / 60 / 60;
                      const closeTimeHours = openClosePair[1] / 60 / 60;

                      return `${i === 0 ? acc : `${acc}, `}${
                        openTimeHours % 12 !== 0
                          ? openTimeHours % 12
                          : openTimeHours
                      } ${openTimeHours < 12 ? 'AM' : 'PM'} - ${
                        closeTimeHours % 12 !== 0
                          ? closeTimeHours % 12
                          : closeTimeHours
                      } ${closeTimeHours < 12 ? 'AM' : 'PM'}`;
                    },
                    '',
                  );

                  return (
                    <OpenDay
                      key={dayName}
                      day={dayName}
                      isToday={index === currentDayNumber}
                      openingHours={openingHoursStr}
                    />
                  );
                },
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
