import React, { useEffect, useState } from 'react';
import { PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeRouter from '@/routers/WelcomeRouter';
import { GluestackUIProvider, Spinner } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import {
  AccountDetailsContext,
  AccountTypeContext,
} from '@/contexts/AccountContext';
import { IAccountType } from '@/types/IAccountType';
import { ISavingTypes } from '@/types/ISavingsTypes';
import { SavingsContext } from '@/contexts/SavingContext';
import { KYCContext } from '@/contexts/KYCContext';
import { ThemeContext } from '@/contexts/AppContext';
import { LogBox, Platform } from 'react-native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { View } from 'react-native';
import { BUTTON_LIGHT } from '@/constants/Colors';
import { APP_MAX_WIDTH } from '@/constants/Theme';

LogBox.ignoreAllLogs();
const App = () => {
  const [accountTypeIndex, setAccountTypeIndex] = useState(0);
  const [savings, setSavings] = useState<ISavingTypes[]>([
    {
      title: 'Trip to north',
      subtitle: 'Fri Oct 4 2021',
      amount: 100,
      totalAmount: 2000,
    },
    {
      title: 'Gift for Dad',
      subtitle: 'Wed Oct 10 2022',
      amount: 341,
      totalAmount: 3000,
    },
  ]);
  const [accountDetails, setAccountDetails] = useState<IAccountType>({
    email: '',
    name: '',
    businessName: '',
    selectIndustry: '',
    password: '',
    pinCode: '',
    wiremi_id: '',
    image: '',
    telephone: '',
    tokens: {
      access_token: '',
      refresh_token: '',
    },
  });
  const [isKycVerified, setisKycVerified] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const [gotPermissions, setGotPermissions] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]
        : [PERMISSIONS.ANDROID.CAMERA],
    )
      .then(val => {
        console.log(Platform.OS, val);
        setIsLoading(false);

        for (const perm of Object.values(val)) {
          if (perm !== 'granted') {
            setGotPermissions(false);
            break;
          }
        }
      })
      .catch(err => {
        console.log(Platform.OS, err);
        setIsLoading(false);
        setGotPermissions(false);
      });
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Spinner color={BUTTON_LIGHT} />
      </View>
    );
  }

  return gotPermissions ? (
    <NavigationContainer>
      <PaperProvider>
        <ThemeContext.Provider value={[useDarkTheme, setUseDarkTheme]}>
          <GluestackUIProvider config={config}>
            <AccountTypeContext.Provider
              value={[accountTypeIndex, setAccountTypeIndex]}>
              <KYCContext.Provider value={[isKycVerified, setisKycVerified]}>
                <AccountDetailsContext.Provider
                  value={[accountDetails, setAccountDetails]}>
                  <SavingsContext.Provider value={[savings, setSavings]}>
                    <WelcomeRouter />
                  </SavingsContext.Provider>
                </AccountDetailsContext.Provider>
              </KYCContext.Provider>
            </AccountTypeContext.Provider>
          </GluestackUIProvider>
        </ThemeContext.Provider>
      </PaperProvider>
    </NavigationContainer>
  ) : (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
        Insufficient Permissions
      </Text>
      <Text style={{ color: 'black', textAlign: 'center' }}>
        Restart app after granting permissions from settings
      </Text>
    </View>
  );
};

export default App;
