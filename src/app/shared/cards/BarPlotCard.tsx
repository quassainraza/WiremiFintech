import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { BUTTON_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import BarPlot from '../BarPlot';
import useTheme from '@/hooks/useTheme';

const BarPlotCard = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.graphBox,
        styles.shadow,
        { padding: 10, paddingHorizontal: 30 },
        { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
      ]}>
      <Text
        style={{
          color: theme === 'light' ? 'black' : 'white',
          fontSize: 20,
          fontWeight: '500',
          marginVertical: 15,
        }}>
        Total Growth
      </Text>
      <BarPlot />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text
          style={{
            color: theme === 'light' ? 'black' : 'white',
            fontWeight: '600',
            fontSize: 17,
          }}>
          Total Sales
        </Text>
        <Text
          style={{
            color: theme === 'light' ? 'black' : 'white',
            fontWeight: '600',
            fontSize: 17,
          }}>
          $450
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 17, color: BUTTON_LIGHT }}>
            Widthdraw Money
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BarPlotCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  graphBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginBottom: 25,
    gap: 10,
  },
});
