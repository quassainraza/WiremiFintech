import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import {
  AccountDetailsContext,
  AccountTypeContext,
} from '@/contexts/AccountContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SEND from '@assets/svgs/SEND.svg';
import WITHDRAW from '@assets/svgs/INVEST.svg';
import SWAP from '@assets/svgs/SWAP.svg';
import DEPOSIT from '@assets/svgs/DEPOSIT.svg';
import BottomBar from '@/shared/BottomBar';
import BottomSheet from '@/shared/BottomSheet';
import Swap from '../../../shared/sheets/Swap';
import ProgressBox from '@/shared/ProgressBox';
import BarPlotCard from '@/shared/cards/BarPlotCard';
import SendMoney from '@/shared/sheets/SendMoney';
import DepositMoney from '@/shared/sheets/DepositMoney';
import RecentTransactions from '@/shared/lists/RecentTransactions';
import { KYCContext } from '@/contexts/KYCContext';
import {
  DepositContext,
  QRContext,
  SendContext,
  SwapContext,
} from '@/contexts/AppContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Home = (props: any) => {
  const theme = useTheme();
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const [accountType, setAccountType] = useContext(AccountTypeContext);
  const [_, setShowQR] = useContext(QRContext);
  const [kyc] = useContext(KYCContext);
  const [isSending, setIsSending] = useContext(SendContext);
  const [isDepositing, setIsDepositing] = useContext(DepositContext);
  const [isSwapping, setIsSwapping] = useContext(SwapContext);

  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const onPressNotificaitons = () => {
    props.navigation.navigate('notifications');
  };
  const onPressAllTransaction = () => {
    props.navigation.navigate('allTransactions');
  };
  const onPressDailySavings = () => {
    props.navigation.navigate('dailySavings');
  };

  const onPressFundRaise = () => {
    props.navigation.navigate('fundRaiser');
  };

  const onPressInvest = () => {
    props.navigation.navigate('trends');
  };
  const onPressSend = () => {
    if (setIsSending) setIsSending(true);
  };
  const onPressSwap = () => {
    if (setIsSwapping) setIsSwapping(true);
  };
  const onPressDeposit = () => {
    if (setIsDepositing) setIsDepositing(true);
  };

  const onShowQR = () => {
    if (setShowQR) setShowQR(true);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 200 }}>
        <View
          style={{
            backgroundColor: BUTTON_LIGHT,
            width: '100%',
            height: 250,
            position: 'absolute',
          }}
        />
        <View
          style={{
            paddingVertical: 20,
          }}>
          <View style={styles.titleBarStyle}>
            <TouchableOpacity style={styles.identity} onPress={openDrawer}>
              <Feather name="menu" size={25} color={'white'} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <TouchableOpacity onPress={onShowQR}>
                <AntDesign name="qrcode" size={25} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressNotificaitons}>
                <View style={styles.notificationButton} />
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginHorizontal: 10,
              marginVertical: 20,
            }}>
            <View style={{ height: 60, width: 60, borderRadius: 30 }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 100,
                }}
                source={{ uri: accountData?.image }}
              />
              {kyc && (
                <MaterialIcons
                  style={{ position: 'absolute', bottom: 0, right: 0 }}
                  color={'yellowgreen'}
                  name="verified-user"
                  size={20}
                />
              )}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                {accountData?.name ?? ''}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: 'white',
                }}>
                {accountData?.wiremi_id ?? ''}
              </Text>
            </View>
          </View>
          <View style={{ padding: 15, gap: 5 }}>
            <Text style={{ fontSize: 17, color: 'white' }}>
              Available Balance
            </Text>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: '700' }}>
              $20,0000
            </Text>
          </View>
          <View
            style={[
              styles.quickActionBox,
              styles.shadow,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <TouchableOpacity
              style={{ alignItems: 'center', gap: 10 }}
              onPress={onPressSend}>
              <View
                style={[
                  styles.actionButtonIcons,
                  {
                    backgroundColor: theme === 'light' ? '#FC900055' : 'yellow',
                  },
                ]}>
                <SEND />
              </View>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 14,
                }}>
                Send
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: 'center', gap: 10 }}
              onPress={onPressInvest}>
              <View
                style={[
                  styles.actionButtonIcons,
                  {
                    backgroundColor:
                      theme === 'light' ? '#13C99955' : 'lightgreen',
                  },
                ]}>
                <WITHDRAW />
              </View>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 14,
                }}>
                Withdraw
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: 'center', gap: 10 }}
              onPress={onPressSwap}>
              <View
                style={[
                  styles.actionButtonIcons,
                  {
                    backgroundColor:
                      theme === 'light' ? '#2399EF55' : 'lightblue',
                  },
                ]}>
                <SWAP />
              </View>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 14,
                }}>
                Swap
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: 'center', gap: 10 }}
              onPress={onPressDeposit}>
              <View
                style={[
                  styles.actionButtonIcons,
                  {
                    backgroundColor: theme === 'light' ? '#FF000055' : 'pink',
                  },
                ]}>
                <DEPOSIT />
              </View>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 14,
                }}>
                Deposit
              </Text>
            </TouchableOpacity>
          </View>
          <ProgressBox
            title="Daily Savings"
            subtitle="Due Date: 15 April 19"
            totalAmount={1000}
            amount={700}
            onPressBox={onPressDailySavings}
          />
          <ProgressBox
            title="Investments"
            subtitle={`ROI: ${((1000 / 1900) * 100).toPrecision(3)}%`}
            totalAmount={1900}
            amount={1000}
            onPressBox={onPressInvest}
          />
          {accountType === 2 && (
            <>
              <ProgressBox
                title="Fund Raise"
                subtitle="No. Investors: 21"
                amount={199}
                totalAmount={1000}
                onPressBox={onPressFundRaise}
              />
              <View style={{ marginHorizontal: 20 }}>
                <BarPlotCard />
              </View>
            </>
          )}
        </View>

        <View style={styles.pageNavigator}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Recent Transactions
          </Text>
          <TouchableOpacity onPress={onPressAllTransaction}>
            <MaterialIcons
              size={30}
              name="navigate-next"
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <RecentTransactions />
        </View>
      </ScrollView>
      {isSending && setIsSending && (
        <BottomSheet isOpen={isSending} setIsOpen={setIsSending} extras={props}>
          <SendMoney />
        </BottomSheet>
      )}
      {isSwapping && setIsSwapping && (
        <BottomSheet
          isOpen={isSwapping}
          setIsOpen={setIsSwapping}
          extras={props}>
          <Swap {...props} setIsSwapping={setIsSwapping} />
        </BottomSheet>
      )}
      {isDepositing && setIsDepositing && (
        <BottomSheet
          isOpen={isDepositing}
          setIsOpen={setIsDepositing}
          extras={props}>
          <DepositMoney />
        </BottomSheet>
      )}

      <BottomBar {...props} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageNavigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginHorizontal: 20,
  },
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
    borderColor: 'gainsboro',
  },
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
  button: {
    flex: 1,
    borderRadius: 5,
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
    marginHorizontal: 20,
  },
});
