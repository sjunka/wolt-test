import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../utils/Colors';
import homeScreenStr from '../constants/homeScreenStr';

const styles = StyleSheet.create({
  textGray: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: Colors.Grey3.color,
  },
  textBlack: {
    fontSize: 16,
    fontWeight: 'bold',
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
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,

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

const ClosedDay = ({ isToday, day, isClosed }) => {
  const { HOME } = homeScreenStr;
  return isClosed ? (
    <View style={styles.openingHoursDays}>
      <View style={styles.todayContainer}>
        <Text style={styles.textBlack}>
          {day.charAt(0).toUpperCase() + day.substring(1)}
        </Text>
        {isToday ? <Text style={styles.textGreen}>TODAY</Text> : null}
      </View>

      <View>
        <Text style={styles.textGray}>{HOME.CLOSED}</Text>
      </View>
    </View>
  ) : null;
};

ClosedDay.propTypes = {
  isToday: PropTypes.bool,
  day: PropTypes.string,
  isClosed: PropTypes.bool,
};

ClosedDay.defaultProps = {
  isToday: false,
  day: '',
  isClosed: true,
};

export default ClosedDay;
