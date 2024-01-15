import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT } from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DonutChartCard from '@/shared/cards/DonutChartCard';
import ArcCard from '@/shared/cards/ArcCard';

const CreditScore = (props: any) => {
  const theme = useTheme();

  const onPressBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View style={styles.titleBarStyle}>
          <TouchableOpacity onPress={onPressBack}>
            <Ionicons
              name="arrow-back"
              size={25}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.header,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Credit Score
          </Text>
          <View style={{ width: 25 }} />
        </View>
        <View style={{ padding: 20 }}>
          <ArcCard />
          <Text
            style={[
              styles.header,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Description
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              color: theme === 'light' ? 'gray' : 'gainsboro',
              marginVertical: 15,
            }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rem non nostrum
            itaque odit libero alias ratione, quis reiciendis! Omnis quasi
            eveniet at quas vel veritatis voluptas accusantium facere eligendi
            illo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreditScore;

const styles = StyleSheet.create({
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notificationButton: {
    position: 'absolute',
    height: 10,
    width: 10,
    backgroundColor: 'red',
    top: 0,
    right: 0,
    borderRadius: 5,
    zIndex: 1,
  },
  header: {
    fontSize: 20,
  },
  titleBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  notiTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  icon: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  group: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 10,
    padding: 15,
    gap: 20,
  },
  notiMessage: {
    fontSize: 17,
    fontWeight: '500',
    opacity: 0.6,
  },
  notiDateTime: {
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.4,
  },
  notiItem: { flexDirection: 'row', gap: 10, alignItems: 'center' },
});
