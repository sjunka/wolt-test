import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

import {ClockIcon as ClockIconOutline} from 'react-native-heroicons/outline';

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

const OpeningHoursHeader = () => (
  <View style={styles.openingHoursHeader}>
    <ClockIconOutline color={Colors.Grey3.color} fill="none" size={24} />
    <Text style={styles.textHeader}>Opening hours</Text>
  </View>
);

export default OpeningHoursHeader;
