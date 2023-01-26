import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {ClockIcon as ClockIconOutline} from 'react-native-heroicons/outline';
import homeScreenStr from '../constants/homeScreenStr';

const styles = StyleSheet.create({
  openingHoursHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingBottom: 5,
    borderBottomColor: Colors.Black.color,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },

  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.Black.color,
    bottom: 5,
    left: 10,
  },
});

const OpeningHoursHeader = () => {
  const {HOME} = homeScreenStr;
  return (
    <View style={styles.openingHoursHeader}>
      <ClockIconOutline color={Colors.Grey3.color} fill="none" size={24} />
      <Text style={styles.textHeader}>{HOME.OPENING_HOURS}</Text>
    </View>
  );
};

export default OpeningHoursHeader;
