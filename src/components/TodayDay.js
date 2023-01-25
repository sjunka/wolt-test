import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.Black.color,
  },
  textBlackNormal: {
    fontSize: 16,
    fontWeight: 'medium',
    fontFamily: 'Roboto',
    color: Colors.Black.color,
  },
  textGreen: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.Green.color,
    marginLeft: 10,
  },
  openingHoursDays: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,

    borderBottomColor: Colors.Grey2.color,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  todayContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

const TodayDay = ({day, today, openingHours}) =>
  today ? (
    <View style={styles.openingHoursDays}>
      <View style={styles.todayContainer}>
        <Text style={styles.textBlack}>{day}</Text>
        <Text style={styles.textGreen}>TODAY</Text>
      </View>

      <View style={styles.closedContainer}>
        <Text style={styles.textBlackNormal}>{openingHours}</Text>
      </View>
    </View>
  ) : null;

export default TodayDay;
