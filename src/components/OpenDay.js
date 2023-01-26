import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../utils/Colors';
import homeScreenStr from '../constants/homeScreenStr';

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.Black.color,
  },
  textBlackNormal: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: Colors.Black.color,
  },

  textGreen: {
    fontSize: Platform.OS === 'ios' ? 12 : 14,
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

const OpenDay = ({isToday, day, openingHours}) => {
  const {HOME} = homeScreenStr;
  return (
    <View style={styles.openingHoursDays}>
      <View style={styles.todayContainer}>
        <Text style={styles.textBlack}>
          {day.charAt(0).toUpperCase() + day.substring(1)}
        </Text>
        {isToday ? <Text style={styles.textGreen}>{HOME.TODAY}</Text> : null}
      </View>

      <View>
        <Text style={styles.textBlackNormal}>{openingHours}</Text>
      </View>
    </View>
  );
};

OpenDay.propTypes = {
  isToday: PropTypes.bool,
  day: PropTypes.string,
  isClosed: PropTypes.bool,
};

OpenDay.defaultProps = {
  isToday: false,
  day: '',
  isClosed: true,
};

export default OpenDay;
