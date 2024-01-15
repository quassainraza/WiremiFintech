import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import { BG_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import SEND from '@assets/svgs/SEND.svg';
import INVEST from '@assets/svgs/INVEST.svg';
import SWAP from '@assets/svgs/SWAP.svg';
import DEPOSIT from '@assets/svgs/DEPOSIT.svg';
import { Switch } from 'react-native-paper';
import {
  DepositContext,
  SendContext,
  SwapContext,
  ThemeContext,
} from '@/contexts/AppContext';
import useTheme from '@/hooks/useTheme';

const Drawer = (props: any) => {
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const [useDarkTheme, setUseDarkTheme] = useContext(ThemeContext);
  const theme = useTheme();
  useEffect(() => {
    // props.navigation.openDrawer();
  }, []);

  const onNavigate = (slug: string) => {
    props.navigation.navigate(slug);
  };
  const [isSending, setIsSending] = useContext(SendContext);
  const [isDepositing, setIsDepositing] = useContext(DepositContext);
  const [isSwapping, setIsSwapping] = useContext(SwapContext);

  const onPressSend = () => {
    if (setIsSending) setIsSending(true);
  };
  const onPressSwap = () => {
    if (setIsSwapping) setIsSwapping(true);
  };
  const onPressDeposit = () => {
    if (setIsDepositing) setIsDepositing(true);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? 'white' : BG_DARK }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%' }}>
        <View style={styles.identity}>
          <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={{ uri: accountData?.image }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              {accountData?.name ?? ''}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              {accountData?.wiremi_id ?? ''}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: BUTTON_LIGHT, padding: 10, gap: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: 'gainsboro' }}>
            Balance
          </Text>
          <Text style={{ fontSize: 27, fontWeight: '700', color: 'white' }}>
            $20,0000
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={onPressSend}
              style={styles.actionButtonIcons}>
              <SEND />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onNavigate('investmentsDashboard')}
              style={styles.actionButtonIcons}>
              <INVEST />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressSwap}
              style={styles.actionButtonIcons}>
              <SWAP />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressDeposit}
              style={styles.actionButtonIcons}>
              <DEPOSIT />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.drawerMenu, { justifyContent: 'space-between' }]}>
          <Text
            style={{
              fontSize: 20,
              color: theme === 'light' ? 'black' : 'white',
            }}>
            Dark Mode
          </Text>
          <Switch
            color={BUTTON_LIGHT}
            value={useDarkTheme}
            onChange={() => {
              if (setUseDarkTheme) setUseDarkTheme(!useDarkTheme);
            }}
          />
        </View>
        <Menu title="Daily Savings" slug="dailySavings" onPress={onNavigate} />
        <Menu
          title="Investments"
          slug="investmentsDashboard"
          onPress={onNavigate}
        />
        <Menu title="Shopping" slug="shopping" onPress={onNavigate} />
        <Menu title="WireVentures" slug="wireventures" onPress={onNavigate} />
        {/* <Menu title="Withdraw" slug="withdraw" onPress={onPressSend} /> */}
        <Menu title="Credit Score" slug="creditScore" onPress={onNavigate} />
        <Menu title="Crypto" slug="crypto" onPress={onNavigate} />
        <Menu title="Loan Request" slug="loan" onPress={onNavigate} />
      </ScrollView>
    </SafeAreaView>
  );
};

function Menu({
  title,
  slug,
  onPress,
}: {
  title: string;
  slug: string;
  onPress: (slug: string) => void;
}) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={styles.drawerMenu} onPress={() => onPress(slug)}>
      <Text
        style={{ fontSize: 20, color: theme === 'light' ? 'black' : 'white' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Drawer;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 5,
    marginVertical: 10,
  },
  actionButtonIcons: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250,250,250,0.3)',
  },
  drawerMenu: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 5,
  },
  drawerIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250,250,250,0.3)',
  },
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
});
