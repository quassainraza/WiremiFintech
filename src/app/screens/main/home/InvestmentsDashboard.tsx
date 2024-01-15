import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BarPlotCard from '@/shared/cards/BarPlotCard';
import DonutChartCard from '@/shared/cards/DonutChartCard';
import NumbersCard from '@/shared/cards/NumbersCard';

const InvestmentsDashboard = (props: any) => {
  const theme = useTheme();
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const onPressBack = () => {
    props.navigation.goBack();
  };
  const onPressSaving = () => {};
  const onPressNotificaitons = () => {
    props.navigation.navigate('notifications');
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', paddingTop: 15 }}>
        <View style={[styles.titleBarStyle, { marginBottom: 30 }]}>
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
            Investments Dashboard
          </Text>
          <TouchableOpacity onPress={onPressNotificaitons}>
            <View style={styles.notificationButton} />
            <Ionicons
              name="notifications-outline"
              size={25}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
          {/* <View style={{ width: 25 }} /> */}
        </View>
        {false && (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{
                textAlign: 'center',
                color: theme === 'light' ? 'black' : 'white',
                fontSize: 15,
              }}>
              No Investments yet
            </Text>
          </View>
        )}
        {true && (
          <View>
            <View
              style={{ flexDirection: 'row', gap: 20, paddingHorizontal: 20 }}>
              <View
                style={{
                  flex: 1,
                  minHeight: 100,
                  backgroundColor: '#FFC0BD66',
                  borderRadius: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    color: theme === 'light' ? 'black' : 'white',
                    fontWeight: '500',
                    fontSize: 17,
                  }}>
                  Total Investment
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? 'black' : 'white',
                    fontWeight: '500',
                    fontSize: 25,
                  }}>
                  $5,112
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  minHeight: 100,
                  backgroundColor: '#2399EF66',
                  borderRadius: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    color: theme === 'light' ? 'black' : 'white',
                    fontWeight: '500',
                    fontSize: 17,
                  }}>
                  Total Earnings
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? 'black' : 'white',
                    fontWeight: '500',
                    fontSize: 25,
                  }}>
                  $5,112
                </Text>
              </View>
            </View>
            <View style={{ padding: 25, gap: 20 }}>
              <BarPlotCard />
              <DonutChartCard />
              <NumbersCard />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvestmentsDashboard;

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
  titleBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  actionButtonIcons: {
    height: 60,
    width: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
  },
  quickActionBox: {
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
  shadow: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  progressContainer: {
    height: 13,
    backgroundColor: 'rgb(230,230,230)',
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: BUTTON_LIGHT,
    height: '100%',
    borderRadius: 17,
    width: '76%',
  },
  boxTitle: { fontSize: 17, fontWeight: '600', color: 'black' },
  boxSubHead: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    opacity: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 30,
  },
  transactions: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
});
