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

const Wireventure = (props: any) => {
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
            WireVenture
          </Text>
          <View style={{ width: 25 }} />
        </View>
        <View
          style={{
            padding: 30,
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90%',
          }}>
          <Text style={[{ color: theme === 'light' ? 'black' : 'white' }]}>
            Under developement
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wireventure;

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
