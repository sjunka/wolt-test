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
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.Green.color,
    marginLeft: 10,
    bottom: 2,
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

const OpenDay = ({isToday, day, openingHours}) => (
  <View style={styles.openingHoursDays}>
    <View style={styles.todayContainer}>
      <Text style={styles.textBlack}>{day.toUpperCase()}</Text>
      {isToday ? <Text style={styles.textGreen}>TODAY</Text> : null}
    </View>

    <View>
      <Text style={styles.textBlackNormal}>{openingHours}</Text>
    </View>
  </View>
);

export default OpenDay;
