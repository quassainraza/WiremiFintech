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
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomBar from '@/shared/BottomBar';
import { EscrowContext, SwapContext } from '@/contexts/AppContext';
import BottomSheet from '@/shared/BottomSheet';
import { Button, TextInput } from 'react-native-paper';

const Explore = (props: any) => {
  const theme = useTheme();
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const [isSwapping, setIsSwapping] = useContext(SwapContext);
  const [isEscrowOpened, setIsEscrowOpened] = useContext(EscrowContext);

  const onPressBack = () => {
    props.navigation.goBack();
  };
  const onPressNotificaitons = () => {
    props.navigation.navigate('notifications');
  };

  const onPressDailySavings = () => {
    props.navigation.navigate('dailySavings');
  };

  const onPressWireVenture = () => {
    props.navigation.navigate('wireventures');
  };

  const onPressCrypto = () => {
    if (setIsSwapping) setIsSwapping(true);
  };

  const onPressEscrow = () => {
    // props.navigation.navigate('escrow');
    if (setIsEscrowOpened) setIsEscrowOpened(true);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', paddingTop: 15 }}>
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
            Explore
          </Text>

          <TouchableOpacity onPress={onPressNotificaitons}>
            <View style={styles.notificationButton} />
            <Ionicons
              name="notifications-outline"
              size={25}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
          <View style={{ height: 30 }} />
          <View
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Daily Savings
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: theme === 'light' ? 'gray' : 'gainsboro',
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'gainsboro',
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={onPressDailySavings}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '400',
                    color: BUTTON_LIGHT,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Wireventure
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: theme === 'light' ? 'gray' : 'gainsboro',
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'gainsboro',
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={onPressWireVenture}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '400',
                    color: BUTTON_LIGHT,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Crypto Swap
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: theme === 'light' ? 'gray' : 'gainsboro',
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'gainsboro',
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={onPressCrypto}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '400',
                    color: BUTTON_LIGHT,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Escrow
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: theme === 'light' ? 'gray' : 'gainsboro',
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'gainsboro',
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={onPressEscrow}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '400',
                    color: BUTTON_LIGHT,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      {isEscrowOpened && setIsEscrowOpened && (
        <BottomSheet
          isOpen={isEscrowOpened}
          extras={props}
          setIsOpen={setIsEscrowOpened}>
          <View style={{ width: '100%', padding: 20, gap: 10 }}>
            <TextInput
              mode="outlined"
              label={'Project Title'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              mode="outlined"
              label={'Amount'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
            />
            <TextInput
              mode="outlined"
              label={'Wiremi Id'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
            />
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
              <Button
                mode="elevated"
                onPress={() => {}}
                textColor="white"
                style={styles.button}
                labelStyle={{ padding: 5 }}
                buttonColor={BUTTON_LIGHT}>
                DEPOSIT
              </Button>
            </View>
            <View style={{ height: 20 }} />
          </View>
        </BottomSheet>
      )}
      <BottomBar {...props} />
    </SafeAreaView>
  );
};

export default Explore;

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
    marginBottom: 30,
  },
  transactions: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
