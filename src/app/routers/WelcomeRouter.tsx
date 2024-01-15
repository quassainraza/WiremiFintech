import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '@/screens/welcome/Onboarding';
import Splash from '@/screens/welcome/Splash';
import Registeration from '@/screens/welcome/Registeration';
import EnterCode from '@/screens/welcome/EnterCode';
import AccountType from '@/screens/welcome/AccountType';
import AccountDetailsInsert from '@/screens/welcome/AccountDetailsInsert';
import CreatePinCode from '@/screens/welcome/CreatePinCode';
import HomeRouter from './HomeRouter';
import Login from '@/screens/welcome/Login';

const { Navigator, Screen } = createNativeStackNavigator();

const WelcomeRouter = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={Splash} name="splash" />
      <Screen component={Onboarding} name="onboarding" />
      <Screen component={Registeration} name="registeration" />
      <Screen component={Login} name="login" />
      <Screen component={EnterCode} name="enterCode" />
      <Screen component={AccountType} name="accountType" />
      <Screen component={AccountDetailsInsert} name="accountDetailsInsert" />
      <Screen component={CreatePinCode} name="createPinCode" />
      <Screen component={HomeRouter} name="homeRouter" />
    </Navigator>
  );
};

export default WelcomeRouter;
