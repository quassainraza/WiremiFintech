import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BUTTON_LIGHT } from '@/constants/Colors';

interface Props {
  isActive?: boolean;
  title: string;
  onPress: () => void;
}

const TabItem = ({ title, isActive = false, onPress }: Props) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        {
          backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
          borderBottomColor: isActive ? BUTTON_LIGHT : 'transparent',
        },
      ]}>
      <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    overflow: 'hidden',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
    borderBottomWidth: 4,
  },
});
