import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { BUTTON_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';

interface Props {
  onPressBox: () => void;
  title: string;
  subtitle: string;
  amount: number;
  totalAmount: number;
}

const ProgressBox = ({
  onPressBox,
  title,
  subtitle,
  totalAmount,
  amount,
}: Props) => {
  const [containerBarWidth, setContainerBarWidth] = useState(0);
  const barWidth = useRef(new Animated.Value(0)).current;

  const theme = useTheme();

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: (amount / totalAmount) * containerBarWidth,
      duration: 1000,
      easing: Easing.elastic(4),
      useNativeDriver: false,
    }).start();
  }, [amount, containerBarWidth, totalAmount]);

  return (
    <TouchableOpacity
      onPress={onPressBox}
      style={[
        styles.quickActionBox,
        styles.shadow,
        {
          flexDirection: 'column',
          backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{ gap: 4 }}>
          <Text
            style={[
              styles.boxTitle,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            {title}
          </Text>
          <Text
            style={[
              styles.boxSubHead,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            {subtitle}
          </Text>
        </View>
        <Text
          style={[
            styles.boxTitle,
            { color: theme === 'light' ? 'black' : 'white' },
          ]}>
          ${totalAmount}
        </Text>
      </View>
      <View
        onLayout={e => {
          setContainerBarWidth(e.nativeEvent.layout.width);
        }}
        style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: barWidth }]} />
      </View>
    </TouchableOpacity>
  );
};

export default ProgressBox;

const styles = StyleSheet.create({
  quickActionBox: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginBottom: 25,
    gap: 10,
  },
  shadow: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  boxTitle: { fontSize: 17, fontWeight: '600', color: 'black' },
  boxSubHead: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    opacity: 0.5,
  },
  progressContainer: {
    height: 13,
    backgroundColor: 'rgb(230,230,230)',
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  progressBar: {
    backgroundColor: BUTTON_LIGHT,
    height: '100%',
    borderRadius: 20,
  },
});
