import React, { useContext, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from '@/shared/Drawer';
import Notifications from '@/screens/main/Notifications';
import AllTransactions from '@/screens/main/home/AllTransactions';
import DailySavings from '@/screens/main/home/DailySavings';
import InvestmentsDashboard from '@/screens/main/home/InvestmentsDashboard';
import Swap from '@/shared/sheets/Swap';
import { BottomTabContext } from '@/contexts/BottomTabContext';
import Explore from '@/screens/main/Explore';
import Profile from '@/screens/main/profile/Profile';
import Trends from '@/screens/main/trends/Trends';
import UpgradePlan from '@/screens/main/profile/UpgradePlan';
import ProjectDetails from '@/screens/main/trends/ProjectDetails';
import Home from '@/screens/main/home/Home';
import KYCForm from './KYCForm';
import BottomSheet from '@/shared/BottomSheet';
import { Text } from 'react-native';
import {
  DepositContext,
  EscrowContext,
  QRContext,
  SendContext,
  SwapContext,
} from '@/contexts/AppContext';
import QRCode from 'react-native-qrcode-svg';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import { View } from 'react-native';
import PersonalInfo from '@/screens/main/profile/PersonalInfo';
import SecuritySettings from '@/screens/main/profile/SecuritySettings';
import Crypto from '@/screens/crypto/Crypto';
import CreditScore from '@/screens/main/CreditScrore';
import Wireventure from '@/screens/Wireventure';
import Shopping from '@/screens/shopping/Shopping';
import Escrow from '@/screens/escrow/Escrow';
import Loan from '@/screens/loan/Loan';
import FundRaiser from '@/screens/main/home/FundRaiser';
const { Navigator, Screen } = createDrawerNavigator();
const HomeRouter = (props: any) => {
  const [activeTab, setActiveTab] = useState('home');
  const [showQRCode, setShowQRCode] = useState(false);
  const [accountDetail] = useContext(AccountDetailsContext);
  // App Actions
  const [isSending, setIsSending] = useState(false);
  const [isDepositing, setIsDepositing] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isEscrowOpened, setIsEscrowOpened] = useState(false);
  return (
    <BottomTabContext.Provider value={[activeTab, setActiveTab]}>
      <SwapContext.Provider value={[isSwapping, setIsSwapping]}>
        <DepositContext.Provider value={[isDepositing, setIsDepositing]}>
          <SendContext.Provider value={[isSending, setIsSending]}>
            <EscrowContext.Provider value={[isEscrowOpened, setIsEscrowOpened]}>
              <QRContext.Provider value={[showQRCode, setShowQRCode]}>
                <Navigator
                  drawerContent={Drawer}
                  screenOptions={{ headerShown: false }}
                  screenListeners={{
                    focus: e => {
                      const screenName = e.target?.split('-')[0];
                      if (screenName)
                        if (
                          ['home', 'explore', 'trends', 'profile'].includes(
                            screenName,
                          )
                        ) {
                          setActiveTab(screenName);
                        }
                    },
                  }}
                  backBehavior="history">
                  <Screen name="home" component={Home} />
                  <Screen name="notifications" component={Notifications} />
                  <Screen name="allTransactions" component={AllTransactions} />
                  <Screen name="dailySavings" component={DailySavings} />
                  <Screen
                    name="investmentsDashboard"
                    component={InvestmentsDashboard}
                  />
                  <Screen name="swap" component={Swap} />
                  <Screen name="explore" component={Explore} />
                  <Screen name="trends" component={Trends} />
                  <Screen
                    name="profile"
                    component={(thisProps: any) => (
                      <Profile {...thisProps} parentProps={props} />
                    )}
                  />
                  <Screen name="upgradePlan" component={UpgradePlan} />
                  <Screen name="projectDetails" component={ProjectDetails} />
                  <Screen name="kycForm" component={KYCForm} />
                  <Screen name="personalInfo" component={PersonalInfo} />
                  <Screen
                    name="securitySettings"
                    component={SecuritySettings}
                  />
                  <Screen name="crypto" component={Crypto} />
                  <Screen name="creditScore" component={CreditScore} />
                  <Screen name="wireventures" component={Wireventure} />
                  <Screen name="shopping" component={Shopping} />
                  <Screen name="escrow" component={Escrow} />
                  <Screen name="loan" component={Loan} />
                  <Screen name="fundRaiser" component={FundRaiser} />
                </Navigator>
                <BottomSheet
                  noAdaptiveTheme
                  isOpen={showQRCode}
                  setIsOpen={setShowQRCode}
                  extras={props}>
                  <View
                    style={{
                      gap: 30,
                      minHeight: '80%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <QRCode value={accountDetail?.wiremi_id} size={250} />
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 15,
                        textAlign: 'center',
                      }}>
                      Your Wiremi ID is {accountDetail?.wiremi_id}
                    </Text>
                  </View>
                </BottomSheet>
              </QRContext.Provider>
            </EscrowContext.Provider>
          </SendContext.Provider>
        </DepositContext.Provider>
      </SwapContext.Provider>
    </BottomTabContext.Provider>
  );
};

export default HomeRouter;
